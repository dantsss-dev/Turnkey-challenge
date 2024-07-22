using Turnkey_challenge.Domain.Interfaces;
using Turnkey_challenge.Domain.Models;

namespace Turnkey_challenge.Applications.Services
{
    public class NodesPathsService : INodesPathsServices
    {
        public NodesPathsService()
        {
        }

        public Task<NodesPaths> GetNodesPaths(Graph graph)
        {
            var distances = new Dictionary<int, int>();
            var previousNode = new Dictionary<int, string>();
            var unvisitedNodes = new HashSet<int>();

            foreach (var node in graph.Nodes)
            {
                var nodeId = node.Data.Id;
                if(nodeId == graph.StartNode){
                    distances[nodeId] = 0;
                }
                else{
                    distances[nodeId] = int.MaxValue;
                }
                previousNode[nodeId] = null;
                unvisitedNodes.Add(nodeId);
            }

            while(unvisitedNodes.Count > 0 ){
                var currentNode = unvisitedNodes.OrderBy(nodeId => distances[nodeId]).First();
                if(distances[currentNode] == int.MaxValue){
                    break;
                }

                unvisitedNodes.Remove(currentNode);

                foreach (var edge in graph.Edges)
                {
                    if(edge.Data.Source == currentNode){
                        var targetNode = edge.Data.Target;
                        var alternativeRoute = distances[currentNode] + edge.Data.Label;
                        if(alternativeRoute < distances[targetNode]){
                            distances[targetNode] = alternativeRoute;
                            previousNode[targetNode] = currentNode.ToString();
                        }
                    }
                }


            }
            
            NodesPaths nodesPaths = new(){
                Distances = new Dictionary<int, int>(distances),
                PreviousNode = new Dictionary<int, string>(previousNode)
            };

            return Task.FromResult(nodesPaths);
        }
    }
}