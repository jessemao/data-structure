import BinarySearchTree from './binary-search-tree-es6';

class AVLTree extends BinarySearchTree {
  insertNode(node, newNode) {
    if (node.key < newNode.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        node.right = this.insertNode(node.right, newNode);
        if (!this.isBalanced(node)) {
          node = this.triNodeRestructure(node, null, newNode.key);
        }
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node.left = this.insertNode(node.left, newNode);
        if (!this.isBalanced(node)) {
          node = this.triNodeRestructure(node, null, newNode.key);
        }
      }
    }
    return node;
  }
  removeNode(node, element) {
    if (!node) {
      return null;
    }
    if (node.key === element) {
      // case 1: leaf node
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      // case 2: one child
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      // case 3: two child
      var aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      // when a node remove from current ndoe, we check the balance.
      if (!this.isBalanced(node)) {
        node = this.triNodeRestructure(node);
      }
      return node;
    } else if (node.key > element) {
      node.left = this.removeNode(node.left, element);
      // when a node remove from current ndoe, we check the balance.
      if (!this.isBalanced(node)) {
        node = this.triNodeRestructure(node);
      }
      return node;
    } else {
      node.right = this.removeNode(node.right, element);
      // when a node remove from current ndoe, we check the balance.
      if (!this.isBalanced(node)) {
        node = this.triNodeRestructure(node);
      }
      return node;
    }
  }
  isBalanced(node) {
    return Math.abs(this.heightOfNode(node.left) - this.heightOfNode(node.right)) <= 1;
  }
  triNodeRestructure(node, yValue, zValue) {
    var nodeY,
      nodeZ;
    if (!yValue) {
      nodeY = this.heightOfNode(node.left) > this.heightOfNode(node.right) ? node.left : node.right;
      yValue = nodeY.key;
    }
    if (!zValue) {
      nodeZ = this.heightOfNode(nodeY.left) > this.heightOfNode(nodeY.right) ? nodeY.left : nodeY.right;
      zValue = nodeZ.key;
    }
    if (yValue < node.key) {
      if (yValue > zValue) {
        node = this.rotationLL(node);
      } else {
        node = this.rotationLR(node);
      }
    } else {
      if (yValue < zValue) {
        node = this.rotationRR(node);
      } else {
        node = this.rotationRL(node);
      }
    }
    return node;
  }
  heightOfNode(node) {
    if (!node) {
      return -1;
    } else {
      return Math.max(this.heightOfNode(node.left), this.heightOfNode(node.right)) + 1;
    }
  }
  rotationRR(node) {
    var tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  rotationLL(node) {
    var tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
}

export default AVLTree;