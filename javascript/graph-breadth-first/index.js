'use strict';

const { serialize } = require("cheerio/lib/api/forms");

class Vertex{
    constructor(value){
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight=0){
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(value) {
        const vertex = new Vertex(value);
        this.adjacencyList.set(vertex, []);
        return vertex
    }

    addDirectedEdge(startVertex, endVertex, weight=0) {
        const neighbors = this.adjacencyList.get(startVertex);
        neighbors.push(new Edge(endVertex, weight));
    }

    getNeighbors(vertex) {
        return [...this.adjacencyList.get(vertex)];
    }
    getVertices() {
        let iterator = [...this.adjacencyList.keys()];
        return iterator;
    }

    size() {
        return this.adjacencyList.size;
    } 
    breadthFirst(root, callback) {
        const queue = [root];
        const visited = new Set();
        visited.add(root);
        let current = null;

        while(queue.length) {
            current = queue.pop();

            if(callback) {
                callback(current.value);
            }

            const neighbors = this.getNeighbors(current);
            for(let edge of neighbors) {
                if(!visited.has(edge.vertex)) {
                    visited.add(edge.vertex);
                    queue.unshift(edge.vertex);
                }
            }
        }
        return visited;
    }

    depthFirst(root, callback) {
        const stack = [root];
        const visited = new Set();
        visited.add(root);
        let current = null;

        while(stack.length) {
            current = stack.pop();
            if(callback) {
                callback(current.value);
            }

            const neighbors = this.getNeighbors(current);
            for(let edge of neighbors) {
                if(!visited.has(edge.vertex)) {
                    visited.add(edge.vertex);
                    stack.push(edge.vertex);
                }
            }
        }
        return visited;
    }
}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(F, E);
graph.addDirectedEdge(C, H);

function breadthFirstTraversal(graph, startVertex) {
    const visited = new Set();
    const queue = [];
  
    queue.push(startVertex);
    visited.add(startVertex);
  
    const visitedVertices = [];
  
    while (queue.length > 0) {
      const currentVertex = queue.shift();
  
      visitedVertices.push(currentVertex.value);
  
      const neighbors = graph.getNeighbors(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          queue.push(neighbor.vertex);
          visited.add(neighbor.vertex);
        }
      }
    }
  
    return visitedVertices;
  }
  

  module.exports = {
    Graph,
    breadthFirstTraversal,
  };
