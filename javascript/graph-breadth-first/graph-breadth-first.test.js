const { Graph, breadthFirstTraversal } = require('./index');

describe('Graph breadth-first traversal', () => {
  test('Traverse graph starting from vertex A', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(B, D);

    const visitedVertices = breadthFirstTraversal(graph, A); // Updated line

    expect(visitedVertices).toEqual(['A', 'B', 'C', 'D']); // Updated line
  });

  test('Traverse graph starting from vertex X', () => {
    const graph = new Graph();
    const X = graph.addVertex('X');
    const Y = graph.addVertex('Y');
    const Z = graph.addVertex('Z');
    graph.addDirectedEdge(X, Y);
    graph.addDirectedEdge(Y, Z);

    const visitedVertices = breadthFirstTraversal(graph, X); // Updated line

    expect(visitedVertices).toEqual(['X', 'Y', 'Z']); // Updated line
  });

  test('Traverse graph starting from vertex M', () => {
    const graph = new Graph();
    const M = graph.addVertex('M');
    const N = graph.addVertex('N');
    const O = graph.addVertex('O');
    const P = graph.addVertex('P');
    graph.addDirectedEdge(M, N);
    graph.addDirectedEdge(M, O);
    graph.addDirectedEdge(N, P);

    const visitedVertices = breadthFirstTraversal(graph, M); // Updated line

    expect(visitedVertices).toEqual(['M', 'N', 'O', 'P']); // Updated line
  });
});
