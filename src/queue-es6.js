class Queue {
  constructor() {
    this.itemArray = [];
  }
  enqueue(value) {
    this.itemArray.push(value);
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

export default Queue;