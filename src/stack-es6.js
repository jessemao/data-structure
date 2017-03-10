class Stack {
  constructor() {
    this.itemArray = [];
  }
  push(value) {
    this.itemArray.push(value);
  }
  pop() {
    return this.itemArray.pop();
  }
  peek() {
    return this.itemArray[this.itemArray.length - 1];
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

export default Stack;