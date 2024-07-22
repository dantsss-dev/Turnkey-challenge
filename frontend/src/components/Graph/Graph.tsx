/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { ELEMENTS } from "../../const/elements";

export const Graph = () => {
  const cyRef = useRef(null);
  const startNode = "1";

  const onGetRoutes = async (cy: any) => {
    const dataToResolve = filterGraph(cy.elements().jsons());
    console.log(dataToResolve);
    const response = await fetch("http://localhost:5114/api/NodesPaths/Get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startNode: startNode, ...dataToResolve }),
    });
    const data = await response.json();
    console.log(data);

    onPaintRoutes(cy, data.distances, data.previousNode);
  };

  const onPaintRoutes = (cy: any, distances: any, previousNodes: any) => {
    cy.elements().style({ "background-color": "#60a5fa" });
    cy.edges().style({
      "line-color": "#60a5fa",
      "target-arrow-color": "#60a5fa",
    });
    Object.keys(distances).forEach((nodeId) => {
      if (nodeId !== startNode) {
        const path: any[] = [];
        let currentNode = nodeId;
        while (currentNode) {
          path.unshift(currentNode);
          currentNode = previousNodes[currentNode];
        }

        path.forEach((nodeId, pathIndex) => {
          if (pathIndex > 0) {
            cy.getElementById(nodeId).style({ "background-color": "#ff0000" });
            cy.edges()
              .filter(
                (edge: any) =>
                  edge.data("source") === path[pathIndex - 1] &&
                  edge.data("target") === nodeId
              )
              .style({
                "line-color": "#ff0000",
                "target-arrow-color": "#ff0000",
              });
          }
        });
      }
    });
  };

  const filterGraph = (elements: any) => {
    const filteredElements = elements.map((element: any) => {
      if (element.group === "edges") {
        return {
          group: element.group,
          data: {
            id: element.data.id,
            source: element.data.source,
            target: element.data.target,
            label: element.data.label,
          },
        };
      } else {
        return {
          group: element.group,
          data: {
            id: element.data.id,
            label: element.data.label,
          },
        };
      }
    });

    const nodes = filteredElements.filter(
      (element: any) => element.group === "nodes"
    );
    const edges = filteredElements.filter(
      (element: any) => element.group === "edges"
    );

    return { nodes, edges };
  };

  useEffect(() => {
    if (cyRef.current) {
      const cy = cyRef.current;

      onGetRoutes(cy);
    }
  }, []);

  return (
    <CytoscapeComponent
      elements={ELEMENTS}
      style={{ width: "900px", height: "500px", backgroundColor: "#e0e0e0" }}
      layout={{ name: "preset" }}
      cy={(cy: any) => {
        cyRef.current = cy;
      }}
      userPanningEnabled={false}
      boxSelectionEnabled={false}
      stylesheet={[
        {
          selector: "node",
          style: {
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#60a5fa",
            "text-outline-width": 1,
            "text-outline-color": "#000000",
            color: "#ffffff",
          },
        },
        {
          selector: "edge",
          style: {
            label: "data(label)",
            "curve-style": "bezier",
            "line-color": "#60a5fa",
            "target-arrow-color": "#60a5fa",
            "text-outline-width": 1,
            "text-outline-color": "#000000",
            color: "#ffffff",
          },
        },
      ]}
    />
  );
};
