class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.length = 0;
    this.firstNode = null;
  }
  insertFirst(element) {
    var newNode = new Node(element);
    this.firstNode = newNode;
    this.firstNode.next = this.firstNode;
    this.firstNode.prev = this.firstNode;
    this.length++;
    return true;
  }
  insertAfter(element, nodeElement) {
    if (!this.firstNode) {
      this.insertFirst(element);
    } else {
      var node = this.findNode(nodeElement);
      this.insertAfterNode(element, node);
    }
  }
  insertBefore(element, nodeElement) {
    if (!this.firstNode) {
      this.insertFirst(element);
    } else {
      var node = this.findNode(nodeElement);
      this.insertBeforeNode(element, node);
    }
  }
  insertAfterNode(element, node) {
    var newNode = new Node(element);

    if (!node) {
      node = this.firstNode;
    }
    newNode.next = node.next;
    newNode.prev = node;
    node.next.prev = newNode;
    node.next = newNode;
    this.length++;
    return true;
  }
  insertBeforeNode(element, node) {
    var newNode = new Node(element);
    if (!node) {
      node = this.firstNode;
    }
    this.insertAfterNode(element, node.prev);
  }
  findNode(element, {node = null, clockwise = true} = {}) {
    if (clockwise) {
      return this.findNodeClockwise(element, node);
    } else {
      return this.findNodeCounterClockwise(element, node);
    }
  }
  findNodeClockwise(element, node) {
    return this.traverseClockwise(node, (nodeElement) => element === nodeElement, (node) => node);
  }
  findNodeCounterClockwise(element, node) {
    return this.traverseCounterClockwise(node, (nodeElement) => element === nodeElement, (node) => node);
  }
  traverseClockwise(node, conditionFunc, callback) {
    if (!this.firstNode) {
      return null;
    }
    if (!node) {
      node = this.firstNode;
    }
    var current = node;
    while (!conditionFunc(current.element)) {
      current = current.next;
      if (current === node) {
        return callback(null);
      }
    }
    return callback(current);
  }
  traverseCounterClockwise(node, conditionFunc, callback) {
    if (!this.firstNode) {
      return null;
    }
    if (!node) {
      node = this.firstNode;
    }
    var current = node;
    while (!conditionFunc(current.element)) {
      current = current.prev;
      if (current === node) {
        return callback(null);
      }
    }
    return callback(current);
  }
  remove(element, {node = null, count = 1, clockwise = true} = {}) {
    if (clockwise) {
      this.removeClockwise(element, node, count);
    } else {
      this.removeCounterClockwise(element, node, count);
    }
  }
  removeAll(element) {
    if (!this.firstNode) {
      return false;
    } else {
      var current = this.firstNode.next;
      var removed = false;
      while (true) {
        let nextNode = current.next;
        if (current.element === element) {
          this.removeNode(current);
          removed = true;
        }
        current = nextNode;
        if (current === this.firstNode) {
          return removed;
        }
      }
    }
  }
  removeClockwise(element, node, count) {
    if (!this.firstNode) {
      return false;
    } else {
      if (!node) {
        node = this.firstNode;
      }
      while (count--) {
        let current = this.findNodeClockwise(element, node);
        this.removeNode(current);
      }
      return true;
    }
  }
  removeCounterClockwise(element, node, count) {
    if (!this.firstNode) {
      return false;
    } else {
      if (!node) {
        node = this.firstNode;
      }
      while (count--) {
        let current = this.findNodeCounterClockwise(element, node);
        this.removeNode(current);
      }
      return true;
    }
  }
  removeNode(current) {
    current.next.prev = current.prev;
    current.prev.next = current.next;
    this.length--;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  toArray({element = null, clockwise = true} = {}) {
    var current,
      resultArray = [],
      node = this.findNode(element);
    if (!node) {
      node = this.firstNode;
    }
    current = node;
    if (clockwise) {
      while (true) {
        resultArray.push(current.element);
        if (current.next === node) {
          return resultArray;
        }
        current = current.next;
      }
    } else {
      while (true) {
        resultArray.push(current.element);
        if (current.prev === node) {
          return resultArray;
        }
        current = current.prev;
      }
    }
  }
}

export default CircularLinkedList;