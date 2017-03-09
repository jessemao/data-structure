class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  insertBeginning(element) {
    var newNode = new Node(element);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  insertEnd(element) {
    var newNode = new Node(element);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  insertAfter(element, nodeElement) {
    var node = this.findNodeForward(nodeElement);
    if (!node) {
      return false;
    }
    if (!node.next) {
      this.insertEnd(element);
    } else {
      let newNode = new Node(element);
      newNode.next = node.next;
      newNode.prev = node
      node.next.prev = newNode;
      node.next = newNode;
      this.length++;
    }
    return true;
  }
  insertBefore(element, nodeElement) {
    var node = this.findNodeForward(nodeElement);
    if (node) {
      if (!node.prev) {
        this.insertBeginning(element);
      } else {
        let newNode = new Node(element);
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev.next = newNode;
        node.prev = newNode;
        this.length++;
      }
      return true;
    }
    return false;
  }
  findNodeForward(element) {
    return this.traverseForward((nodeElement) => nodeElement === element, (node) => node);
  }
  findNodeBackward(element) {
    return this.traverseBackward((nodeElement) => nodeElement === element, (node) => node);
  }
  traverseForward(consitionFunc, callback) {
    if (!this.head) {
      return callback(null);
    } else {
      let current = this.head;
      while (current && !consitionFunc(current.element)) {
        current = current.next;
      }
      return callback(current);
    }
  }
  traverseBackward(consitionFunc, callback) {
    if (!this.tail) {
      return callback(null);
    } else {
      let current = this.tail;
      while (current && !consitionFunc(current.element)) {
        current = current.prev;
      }
      return callback(current);
    }
  }
  remove(element, {count = 1, forward = true} = {}) {
    if (forward) {
      this.removeForward(element, count);
    } else {
      this.removeBackword(element, count);
    }
  }
  removeAll(element) {
    if (!this.head) {
      return false;
    } else {
      let current = this.head;
      while (current) {
        let nextNode = current.next;
        if (current.element === element) {
          this.removeNode(current);
        }
        current = nextNode;
      }
      return true;
    }
  }
  removeForward(element, count) {
    if (!this.head) {
      return false;
    } else {
      while (count--) {
        let current = this.findNodeForward(element);
        this.removeNode(current);
      }
      return true;
    }
  }
  removeBackword(element, count) {
    if (!this.tail) {
      return false;
    } else {
      while (count--) {
        let current = this.findNodeBackward(element);
        this.removeNode(current);
      }
      return true;
    }
  }
  removeNode(current) {
    if (!current.prev) {
      current.next.prev = null;
      this.head = current.next;
    } else {
      current.prev.next = current.next;
    }
    if (!current.next) {
      current.prev.next = null;
      this.tail = current.prev;
    } else {
      current.next.prev = current.prev;
    }
    this.length--;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  toArray() {
    var current = this.head;
    var resultArray = [];
    while (current) {
      resultArray.push(current.element);
      current = current.next;
    }
    return resultArray;
  }
  toReverseArray() {
    var current = this.tail;
    var resultArray = [];
    while (current) {
      resultArray.push(current.element);
      current = current.prev;
    }
    return resultArray;
  }
  print() {
    var current = this.head;
    var resultString = '';
    if (current) {
      resultString += current.element;
      while (current.next) {
        current = current.next;
        resultString += ` -> ${current.element}`;
      }
    } else {
      resultString = 'Empty List';
    }
    console.log('Doubly Linked List: ', resultString);
    console.log('Doubly Linked List Length: ', this.length);
  }
}

export default DoublyLinkedList;