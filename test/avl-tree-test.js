import assert from 'assert';
import AVLTree from '../avl-tree-es6';

describe('AVL Tree', function() {
  beforeEach(function() {
    this.tree = new AVLTree();
  })
  describe('#insert()', function() {
    it('should rotateLL balanced ', function() {
      this.tree.insert(10);
      this.tree.insert(16);
      this.tree.insert(9);
      this.tree.insert(7);
      this.tree.insert(6);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [6, 7, 9, 10, 16]);
    });
    it('should rotateRR balanced ', function() {
      this.tree.insert(10);
      this.tree.insert(16);
      this.tree.insert(9);
      this.tree.insert(17);
      this.tree.insert(18);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [9, 10, 16, 17, 18]);
    });
    it('should rotateLR balanced ', function() {
      this.tree.insert(10);
      this.tree.insert(16);
      this.tree.insert(9);
      this.tree.insert(7);
      this.tree.insert(8);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [7, 8, 9, 10, 16]);
    });
    it('should rotateRL balanced ', function() {
      this.tree.insert(10);
      this.tree.insert(16);
      this.tree.insert(9);
      this.tree.insert(18);
      this.tree.insert(17);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [9, 10, 16, 17, 18]);
    });
  });
  describe('#remove()', function() {
    it('should rotateRR balanced if remove leaf ', function() {
      this.tree.insert(3);
      this.tree.insert(4);
      this.tree.insert(2);
      this.tree.insert(1);
      this.tree.remove(4);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [1, 2, 3]);
    });
    it('should rotateLL balanced if remove leaf ', function() {
      this.tree.insert(2);
      this.tree.insert(1);
      this.tree.insert(3);
      this.tree.insert(4);
      this.tree.remove(1);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [2, 3, 4]);
    });
    it('should rotateRL balanced if remove leaf ', function() {
      this.tree.insert(2);
      this.tree.insert(1);
      this.tree.insert(4);
      this.tree.insert(3);
      this.tree.remove(1);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [2, 3, 4]);
    });
    it('should rotateLR balanced if remove leaf ', function() {
      this.tree.insert(3);
      this.tree.insert(1);
      this.tree.insert(4);
      this.tree.insert(2);
      this.tree.remove(4);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [1, 2, 3]);
    });
    it('should rotateRR balanced if remove node with children ', function() {
      this.tree.insert(2);
      this.tree.insert(1);
      this.tree.insert(3);
      this.tree.insert(4);
      this.tree.remove(2);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [1, 3, 4]);
    });
    it('should balanced if remove node with children in subtree casuing current tree unbalanced ', function() {
      this.tree.insert(5);
      this.tree.insert(3);
      this.tree.insert(6);
      this.tree.insert(2);
      this.tree.insert(4);
      this.tree.insert(8);
      this.tree.insert(1);
      this.tree.remove(3);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
      assert.deepEqual(this.tree.getTree(), [1, 2, 4, 5, 6, 8]);
    });
    it('should balanced if remove node causing parent tree unbalanced ', function() {
      this.tree.insert(50);
      this.tree.insert(25);
      this.tree.insert(75);
      this.tree.insert(10);
      this.tree.insert(30);
      this.tree.insert(60);
      this.tree.insert(80);
      this.tree.insert(5);
      this.tree.insert(15);
      this.tree.insert(27);
      this.tree.insert(55);
      this.tree.insert(1);
      this.tree.remove(80);
      var isBalanced = true;
      this.tree.inOrderTraverse((node) => {
        if (!this.tree.isBalanced(node)) {
          isBalanced = false;
        }
      })
      assert.equal(isBalanced, true);
    });
  });
});