'use strict'
const Graph = require('./../graph')

test("add a Node to the graph", () => {
    let graph = new Graph();

    graph.AddNode(3);
    graph.AddNode(4);

    let expected=graph.Size();
    expect(expected).toBe(2);
});

test("add an edge to the graph", () => {
    let graph = new Graph();

    graph.AddNode(8);
    graph.AddNode(3);
    graph.AddEdge(8, 3, 5);

    let expected=graph.GetNeighbors(8)[0].weight;
    expect(expected).toBe(5);
});

test("retrieved A collection of all nodes from thr graph", () => {
    let graph = new Graph();

    graph.AddNode(7);
    graph.AddNode(4);

    expect(graph.GetNodes()).toBeDefined();
});

test("retrieved All appropriate neighbors from thr graph", () => {
    let graph = new Graph();

    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddEdge(1, 2, 3);

    let expected=graph.GetNeighbors(1)[0].vertex

    expect(expected).toBe(2);
});

test("return weight between two neighbors nodes", () => {
    let graph = new Graph();

    graph.AddNode(1);
    graph.AddNode(4);
    graph.AddEdge(1, 4, 8);

    let expected=graph.GetNeighbors(1)[0].weight;
    expect(expected).toBe(8);
});

test("return the proper size of the graph, representing the number of nodes in the graph", () => {
    let graph = new Graph();

    graph.AddNode(1);
    graph.AddNode(2);
    graph.AddEdge(1, 2);

    expect(graph.Size()).toEqual(2);
});

test("return the graph with one node and one edge", () => {
    let graph = new Graph();

    graph.AddNode(1);
    graph.AddEdge(1, 1, 4);

    expect(graph.Size()).toEqual(1);
});

test("return size if zero when the graph is empty graph", () => {
    let graph = new Graph();

    expect(graph.Size()).toBe(0);
});
