'use strict';

var GraphRepresentation = require('graph-representation');

class AdjecencyList extends GraphRepresentation {

    constructor() {
        super();
        this.graph = new Map();
    }

    addEdge(v1, v2, directed = false) {
        if (!this.graph.has(v1)) {
            this.graph.set(v1, []);
        }
        //this.graph.get(v1).push(v2);
        this.graph.set(v1, this.graph.get(v1).push(v2));

        if (!directed) {
            if (!this.graph.has(v2)) {
                this.graph.set(v2, []);
            }
            this.graph.set(v2, this.graph.get(v2).push(v1));
        }

    }


}