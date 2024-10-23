//Graph Data Structure
//Storage-wise adjacencyList graph data structure is more efficient
// A -> B -> C
// let adjacencyMatrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ]

// console.log(adjacencyMatrix[1][0]);

// // A -> B -> C
// let adjacencyList = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['B']
// }

// console.log(adjacencyList['A']);

class Graph {
    constructor() {
        //Initialize an empty map/object to store the vertices as key-value pair
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            console.log(`${vertex} is not present in the current Graph!`);
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.display()
console.log(graph.hasEdge('A', 'C'));