import Set from './set-es6';
import Graph from './graph-es6';

class WeightedGraph extends Graph {
  constructor() {
    super();
    this.adjWeight = new Map();
  }
  addVertex(v) {
    super.addVertex(v);
    this.adjWeight.set(v, []);
  }
  addEdge(v, w, weight = 0) {
    super.addEdge(v, w);
    this.adjWeight.get(v).push(weight);
    this.adjWeight.get(w).push(weight);
  }
  dijkstraShortestPath(from, to) {
    var dist = {};
    var pred = {};
    var visited = {};
    var vSet = new Set();
    // 1. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
    // 2. Set the initial node as current. Mark all other nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
    this.vertices.forEach((v) => {
      dist[v] = Infinity;
      pred[v] = null;
      visited[v] = false;
      vSet.add(v);
    });
    dist[from] = 0;

    // 7. loop through every unvisited node.
    while (!vSet.isEmpty()) {
      // 3. Node with the least distance will be selected first, marked as current visited node, and remove visited node from set.
      let minNode = minDistanceNode(vSet);
      if (to && minNode === to) {
        return {
          distances: dist[to],
          predessors: pred
        };
      }
      vSet.delete(minNode);
      visited[minNode] = true;
      // 4. get neighbors and weights of current node, be ready to explore its neighbors.
      let neighbors = this.adjList.get(minNode);
      let weights = this.adjWeight.get(minNode);
      neighbors.forEach((v, i) => {
        // 5. for each node of neighbors, calculate length from current node. dist[currentNode] + weightsToNeighbor
        let nodeDist = dist[minNode] + weights[i];
        // 6. pick the smaller length and set predessor.
        if (nodeDist < dist[v] && !visited[v]) {
          dist[v] = nodeDist;
          pred[v] = minNode;
        }
      });
    }

    function minDistanceNode(set) {
      let min = Infinity;
      let minNode = null;
      let values = set.values();
      values.forEach((v) => {
        if (dist[v] < min) {
          min = dist[v];
          minNode = v;
        }
      });
      return minNode;
    }

    return {
      distances: dist,
      predessors: pred
    };
  }
  getPathArray(to, pred) {
    var array = [];
    var u = to;
    array.unshift(to);
    while (pred[u]) {
      array.unshift(pred[u]);
      u = pred[u];
    }
    return array;
  }
}

export default WeightedGraph;