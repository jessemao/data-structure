import Map from './map-es6';
import Queue from './queue-es6';
import Stack from './stack-es6';

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    this.adjList.get(v).push(w);
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(w).push(v);
  }
  initializeColor() {
    var colors = [];
    this.vertices.forEach((v) => colors[v] = 'white');
    return colors;
  }
  initializeDistance() {
    var dist = {};
    this.vertices.forEach((v) => dist[v] = 0);
    return dist;
  }
  initializePredecessors() {
    var pred = {};
    this.vertices.forEach((v) => pred[v] = null);
    return pred;
  }
  bfs(v, callback) {
    var colors = this.initializeColor();
    var dist = this.initializeDistance();
    var pred = this.initializePredecessors();
    var queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      // mark visited node as 'grey'
      colors[u] = 'grey';
      // enqueue all unvisited neighbors.
      neighbors.forEach((n) => {
        if (colors[n] === 'white') {
          dist[n] = dist[u] + 1;
          pred[n] = u;
          colors[n] = 'grey';
          queue.enqueue(n);
        }
      });
      // if all neighbors enqueued, we mark node as fully discovered.
      colors[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
    return {
      distances: dist,
      predecessors: pred
    };
  }
  shortestPath(v, w) {
    var {distances, predecessors} = this.bfs(v);
    var fromVertex = v;
    var pathStack = new Stack();
    let tmpVertex = w;
    pathStack.push(w);
    while (predecessors[tmpVertex] !== v) {
      pathStack.push(predecessors[tmpVertex]);
      tmpVertex = predecessors[tmpVertex];
    }
    pathStack.push(v);
    var pathArray = [];
    while (!pathStack.isEmpty()) {
      pathArray.push(pathStack.pop());
    }
    return pathArray;
  }
  dfs(v, callback) {
    var colors = this.initializeColor();
    var stack = new Stack();
    stack.push(v);
    while (!stack.isEmpty()) {
      let u = stack.pop();
      let neighbors = this.adjList.get(u);
      // mark visited node as 'grey'
      colors[u] = 'grey';
      // push all unvisited neighbors to stack.
      neighbors.forEach((n) => {
        if (colors[n] === 'white') {
          colors[n] = 'grey';
          stack.push(n);
        }
      });
      // mark node as visited 'black'
      colors[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  }
  dfsRecursive(v, callback) {
    var colors = this.initializeColor();
    this.dfsVisit(v, colors, callback);
  }
  dfsVisit(u, colors, callback) {
    colors[u] = 'grey';
    if (callback) {
      callback(u);
    }
    var neighbors = this.adjList.get(u);
    neighbors.forEach((v) => {
      if (colors[v] === 'white') {
        this.dfsVisit(v, colors, callback);
      }
    });
    colors[u] = 'black';
  }
  getVertices() {
    return this.vertices;
  }
  getEdges(v) {
    return this.adjList.get(v);
  }
  toString() {
    var s = '';
    for (var i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      var neighbors = this.adjList.get(this.vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

export default Graph;