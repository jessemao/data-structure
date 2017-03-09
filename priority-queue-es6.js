class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.itemArray = [];
  }
  enqueue() {
    // first we need to creat a node to enqueue.
    var value = null,
      priority = -1;
    if (arguments.length === 1) {
      if (typeof arguments[0] === 'object') {
        value = arguments[0].value;
        priority = arguments[0].priority;
      } else {
        value = arguments[0];
      }
    } else if (arguments.length > 1) {
      value = arguments[0];
      priority = arguments[1];
    }
    var newItem = new Node(value, priority);
    this.itemArray.push(newItem);
    if (this.itemArray.length > 1) {
      const arrayLength = this.itemArray.length;
      for (let index = arrayLength - 1; index > 0; index--) {
        if (this.itemArray[index].priority > this.itemArray[index - 1].priority) {
          let tmpSwap = this.itemArray[index];
          this.itemArray[index] = this.itemArray[index - 1];
          this.itemArray[index - 1] = tmpSwap;
        } else {
          return true;
        }
      }
    }
    return true;
  }
  dequeue() {
    return this.itemArray.shift();
  }
  front() {
    return this.itemArray[0];
  }
  getArray() {
    return this.itemArray;
  }
  isEmpty() {
    return this.itemArray.length === 0;
  }
  size() {
    return this.itemArray.length;
  }
  clear() {
    return this.itemArray = [];
  }
}

export default PriorityQueue;