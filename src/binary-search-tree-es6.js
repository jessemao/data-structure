class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(key) {
    this.root = null;
  }
  insert(key) {
    var newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root = this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (node.key < newNode.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        node.right = this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node.left = this.insertNode(node.left, newNode);
      }
    }
    return node;
  }
  min() {
    let minNode = this.minNode(this.root);
    return minNode ? minNode.key : null;
  }
  minNode(node) {
    if (!node) {
      return null;
    }
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }
  max() {
    let maxNode = this.maxNode(this.root);
    return maxNode ? maxNode.key : null;
  }
  maxNode(node) {
    if (!node) {
      return null;
    }
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }
  search(element) {
    return this.searchNode(this.root, element);
  }
  searchNode(node, element) {
    if (!node) {
      return false;
    }
    if (node.key === element) {
      return true;
    } else {
      if (node.key < element) {
        return this.searchNode(node.right, element);
      } else {
        return this.searchNode(node.left, element);
      }
    }
  }
  remove(element) {
    this.root = this.removeNode(this.root, element);
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
      return node;
    } else if (node.key > element) {
      node.left = this.removeNode(node.left, element);
      return node;
    } else {
      node.right = this.removeNode(node.right, element);
      return node;
    }
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }
  getTree() {
    var treeArray = [];
    this.inOrderTraverse((node) => treeArray.push(node.key));
    return treeArray;
  }
}

export default BinarySearchTree;