'use strict';

var GraphRepresentation = require('models/graph-representation');

class Graph extends GraphRepresentation{

  constructor(representBy) {
    switch (representBy) {
      case Graph.ADJACENCY_LIST:
        this.representBy = new AdjecencyList();
        break;
      case Graph.INCIDENCE_MATRIX:
        break;
      default:
        this.representBy = new AdjecencyMatrix();
    }
  }

  addVetex() {
    this.representBy.addVertex();
  }

  addEdge(){
    this.representBy.addEdge();
  }

  hasPath() {
    // dfs
  }

  getShortestPath(){
    // bfs / dijkstra / floyd-warshall
  }

  getAsAdjacencyList() {
    this.representBy.getAsAdjacencyList();
  }
  
  getAsAdjacencyMatrix(){
    this.representBy.getAsAdjacencyMatrix();
  }

  getAsIncidenceMatrix() {
    this.representBy.getAsIncidenceMatrix();
  }


}


Graph.ADJACENCY_LIST = 1;
Graph.ADJECENCY_MATRIX = 2;
Graph.INCIDENCE_MATRIX = 3;