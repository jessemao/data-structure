import LinkedList from './linked-list-es6';

class PairObject {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.table = [];
  }
  generateHashCode(key) {
    var hash = 0;
    for (var index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }
    return hash % 7;
  }
  has(key) {
    return !!this.table[key];
  }
  put(key, value) {
    var position = this.generateHashCode(key);
    var pairObject = new PairObject(key, value);
    var linkedList;
    if (!this.has(position)) {
      linkedList = new LinkedList();
      this.table[position] = linkedList;
    } else {
      linkedList = this.table[position];
    }
    linkedList.append(pairObject);
  }
  get(key) {
    var position = this.generateHashCode(key);
    var linkedList = this.table[position];
    if (linkedList) {
      return linkedList.traverse((nodeElement) => nodeElement.key === key, (node) => node ? node.element : undefined);
    }
    return linkedList;
  }
  remove(key) {
    var position = this.generateHashCode(key);
    var linkedList;
    if (!this.has(position)) {
      return false;
    } else {
      linkedList = this.table[position];
      if (linkedList.length === 1) {
        this.table[position] = undefined;
      } else {
        let indexOfKey = linkedList.indexOf(key, (nodeElement) => nodeElement.key === key);
        linkedList.removeAt(indexOfKey);
      }
      return true;
    }
  }
  getTable() {
    return this.table;
  }
}

export default HashTable;