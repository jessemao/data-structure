import assert from 'assert';
import BinarySearchTree from '../src/binary-search-tree-es6';

describe('Binary Search Tree', function() {
  beforeEach(function() {
    this.tree = new BinarySearchTree();
  })
  describe('#insert()', function() {
    it('should be able to insert key as root ', function() {
      this.tree.insert(10);
      assert.deepEqual(this.tree.getTree(), [10]);
    });
    it('should have 2 leaf key and 1 root key in order ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(15);
      assert.deepEqual(this.tree.getTree(), [5, 10, 15]);
    });
  });
  describe('#min()', function() {
    it('should return 5 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(15);
      assert.equal(this.tree.min(), 5);
    });
  });
  describe('#max()', function() {
    it('should return 15 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(15);
      assert.equal(this.tree.max(), 15);
    });
  });
  describe('#search()', function() {
    it('should contain 15 and 1 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      assert.equal(this.tree.search(15), true);
      assert.equal(this.tree.search(1), true);
      assert.equal(this.tree.search(0), false);
    });
  });
  describe('#in order traverse()', function() {
    it('should return 1, 3, 4, 5, 10, 15 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      var array = [];
      this.tree.inOrderTraverse((node) => array.push(node.key));
      assert.deepEqual(array, [1, 3, 4, 5, 10, 15]);
    });
  });
  describe('#pre order traverse()', function() {
    it('should return 10, 5, 3, 1, 4, 15 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      var array = [];
      this.tree.preOrderTraverse((node) => array.push(node.key));
      assert.deepEqual(array, [10, 5, 4, 3, 1, 15]);
    });
  });
  describe('#post order traverse()', function() {
    it('should return 1, 3, 4, 5, 15, 10 ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      var array = [];
      this.tree.postOrderTraverse((node) => array.push(node.key));
      assert.deepEqual(array, [1, 3, 4, 5, 15, 10]);
    });
  });
  describe('#remove()', function() {
    it('should remove leaf ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      this.tree.remove(1);
      assert.deepEqual(this.tree.getTree(), [3, 4, 5, 10, 15]);
    });
    it('should remove one child node ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      this.tree.insert(20);
      this.tree.remove(4);
      this.tree.remove(15);
      assert.deepEqual(this.tree.getTree(), [1, 3, 5, 10, 20]);
    });
    it('should remove two children node ', function() {
      this.tree.insert(10);
      this.tree.insert(5);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(15);
      this.tree.insert(20);
      this.tree.insert(17);
      this.tree.insert(27);
      this.tree.insert(26);
      this.tree.insert(28);
      this.tree.remove(20);
      assert.deepEqual(this.tree.getTree(), [1, 3, 4, 5, 10, 15, 17, 26, 27, 28]);
    });
  });
});