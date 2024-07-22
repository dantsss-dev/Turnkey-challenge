export const ELEMENTS = [
  // Node 1 and its edges
  { data: { id: "1", label: "1" }, position: { x: -24.87, y: 151.14 } },
  { data: { source: "1", target: "2", label: "3" } },
  { data: { source: "1", target: "4", label: "5" } },

  // Node 2 and its edges
  { data: { id: "2", label: "2" }, position: { x: 63.52, y: 69.5 } },
  { data: { source: "2", target: "3", label: "3" } },
  { data: { source: "2", target: "5", label: "8" } },
  { data: { source: "2", target: "8", label: "7" } },

  // Node 3 and its edges
  { data: { id: "3", label: "3" }, position: { x: 129.43, y: 150 } },
  { data: { source: "3", target: "4", label: "9" } },
  { data: { source: "3", target: "8", label: "7" } },
  { data: { source: "3", target: "6", label: "18" } },

  // Node 4 and its edges
  { data: { id: "4", label: "4" }, position: { x: 22.58, y: 240.07 } },
  { data: { source: "4", target: "6", label: "6" } },
  { data: { source: "4", target: "8", label: "7" } },

  // Node 5 and its edges
  { data: { id: "5", label: "5" }, position: { x: 261.6, y: 75.3 } },
  { data: { source: "5", target: "8", label: "5" } },

  // Node 6 and its edges
  { data: { id: "6", label: "6" }, position: { x: 150, y: 250 } },
  { data: { source: "6", target: "7", label: "5" } },
  { data: { source: "6", target: "8", label: "8" } },

  // Node 7 and its edges
  { data: { id: "7", label: "7" }, position: { x: 295.87, y: 239.45 } },
  { data: { source: "7", target: "8", label: "9" } },

  // Node 8
  { data: { id: "8", label: "8" }, position: { x: 348.5, y: 156.32 } },
];
