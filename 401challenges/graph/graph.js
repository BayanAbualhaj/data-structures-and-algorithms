"use strict";

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    AddNode(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    AddEdge(startVertex, endVertex, weight) {
        if (
            !this._adjacencyList.has(startVertex) ||
            !this._adjacencyList.has(endVertex)
        ) {
            console.log("INVALID NODE");
            return;
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }

    GetNeighbors(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            throw new Error('__ERROR__ Invalid Vertex', vertex);
        }
        return this._adjacencyList.get(vertex);
    }
    printAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            console.log('Node', vertex);
            console.log("Edge", edge);
        }
    }
    GetNodes() {
        return this._adjacencyList.entries();
    }
    Size() {
        return this._adjacencyList.size;
    }
}

module.exports = Graph;