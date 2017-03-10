import assert from 'assert';
import Graph from '../src/graph-es6';

describe.only('Graph', function() {
  beforeEach(function() {
    this.graph = new Graph();
  })
  describe('#addVertex()', function() {
    it('should have vertices array be equal to ["a", "b", "c"]', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      assert.deepEqual(this.graph.getVertices(), ['a', 'b', 'c']);
    });
  });
  describe('#addEdge()', function() {
    it('"a" should have edges to "b", "c"', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      assert.deepEqual(this.graph.getEdges('a'), ['b', 'c']);
    });
  });
  describe('#bfs()', function() {
    it('should discover bfs algorithm correctly', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addVertex('d');
      this.graph.addVertex('e');
      this.graph.addVertex('f');
      this.graph.addVertex('g');
      this.graph.addVertex('h');
      this.graph.addVertex('i');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      this.graph.addEdge('a', 'd');
      this.graph.addEdge('b', 'e');
      this.graph.addEdge('b', 'f');
      this.graph.addEdge('c', 'g');
      this.graph.addEdge('c', 'd');
      this.graph.addEdge('e', 'i');
      this.graph.addEdge('d', 'h');
      var array = [];
      var {distances, predecessors} = this.graph.bfs('a', (v) => array.push(v));
      assert.deepEqual(array, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
      assert.deepEqual(distances, {
        a: 0,
        b: 1,
        c: 1,
        d: 1,
        e: 2,
        f: 2,
        g: 2,
        h: 2,
        i: 3
      });
      assert.deepEqual(predecessors, {
        a: null,
        b: 'a',
        c: 'a',
        d: 'a',
        e: 'b',
        f: 'b',
        g: 'c',
        h: 'd',
        i: 'e'
      });
    });
  });
  describe('#shortestPath()', function() {
    it('should return shortest path from a to i', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addVertex('d');
      this.graph.addVertex('e');
      this.graph.addVertex('f');
      this.graph.addVertex('g');
      this.graph.addVertex('h');
      this.graph.addVertex('i');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      this.graph.addEdge('a', 'd');
      this.graph.addEdge('b', 'e');
      this.graph.addEdge('b', 'f');
      this.graph.addEdge('c', 'g');
      this.graph.addEdge('c', 'd');
      this.graph.addEdge('e', 'i');
      this.graph.addEdge('d', 'h');
      assert.deepEqual(this.graph.shortestPath('a', 'i'), ['a', 'b', 'e', 'i']);
    });
    it('should return shortest path from b to h', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addVertex('d');
      this.graph.addVertex('e');
      this.graph.addVertex('f');
      this.graph.addVertex('g');
      this.graph.addVertex('h');
      this.graph.addVertex('i');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      this.graph.addEdge('a', 'd');
      this.graph.addEdge('b', 'e');
      this.graph.addEdge('b', 'f');
      this.graph.addEdge('c', 'g');
      this.graph.addEdge('c', 'd');
      this.graph.addEdge('e', 'i');
      this.graph.addEdge('d', 'h');
      assert.deepEqual(this.graph.shortestPath('b', 'h'), ['b', 'a', 'd', 'h']);
    });
  });
  describe('#dfs()', function() {
    it('should discover bfs algorithm correctly', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addVertex('d');
      this.graph.addVertex('e');
      this.graph.addVertex('f');
      this.graph.addVertex('g');
      this.graph.addVertex('h');
      this.graph.addVertex('i');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      this.graph.addEdge('a', 'd');
      this.graph.addEdge('b', 'e');
      this.graph.addEdge('b', 'f');
      this.graph.addEdge('c', 'd');
      this.graph.addEdge('c', 'g');
      this.graph.addEdge('e', 'i');
      this.graph.addEdge('d', 'h');
      var array = [];
      this.graph.dfs('a', (v) => array.push(v));
      assert.deepEqual(array, ['a', 'd', 'h', 'c', 'g', 'b', 'f', 'e', 'i']);
    });
  });
  describe('#dfsRecursive()', function() {
    it('should discover bfs algorithm correctly', function() {
      this.graph.addVertex('a');
      this.graph.addVertex('b');
      this.graph.addVertex('c');
      this.graph.addVertex('d');
      this.graph.addVertex('e');
      this.graph.addVertex('f');
      this.graph.addVertex('g');
      this.graph.addVertex('h');
      this.graph.addVertex('i');
      this.graph.addEdge('a', 'b');
      this.graph.addEdge('a', 'c');
      this.graph.addEdge('a', 'd');
      this.graph.addEdge('b', 'e');
      this.graph.addEdge('b', 'f');
      this.graph.addEdge('c', 'd');
      this.graph.addEdge('c', 'g');
      this.graph.addEdge('e', 'i');
      this.graph.addEdge('d', 'h');
      var array = [];
      this.graph.dfsRecursive('a', (v) => array.push(v))
      assert.deepEqual(array, ['a', 'b', 'e', 'i', 'f', 'c', 'd', 'h', 'g']);
    });
  });
});
