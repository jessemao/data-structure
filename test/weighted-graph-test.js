import assert from 'assert';
import WeightedGraph from '../src/weighted-graph-es6';

describe.only('Weighted Graph', function() {
  beforeEach(function() {
    this.graph = new WeightedGraph();
    this.graph.addVertex('a');
    this.graph.addVertex('b');
    this.graph.addVertex('c');
    this.graph.addVertex('d');
    this.graph.addVertex('e');
    this.graph.addVertex('f');
    this.graph.addEdge('a', 'b', 2);
    this.graph.addEdge('a', 'c', 4);
    this.graph.addEdge('b', 'c', 1);
    this.graph.addEdge('b', 'e', 2);
    this.graph.addEdge('b', 'd', 4);
    this.graph.addEdge('c', 'e', 3);
    this.graph.addEdge('d', 'e', 1);
    this.graph.addEdge('d', 'f', 2);
    this.graph.addEdge('e', 'f', 2);
  })
  describe('#dijkstraShortestPath()', function() {
    it('should get all shortest paths', function() {
      var {distances, predessors} = this.graph.dijkstraShortestPath('a');
      assert.deepEqual(distances, {
        'a': 0,
        'b': 2,
        'c': 3,
        'd': 5,
        'e': 4,
        'f': 6,
      });
    });
    it('should get shortest path from a to d as a - b - e - d', function() {
      var {distances, predessors} = this.graph.dijkstraShortestPath('a', 'd');
      assert.deepEqual(this.graph.getPathArray('d', predessors), ['a', 'b', 'e', 'd']);
    });
  });
})