class Set {
  constructor() {
    this.items = {};
  }
  has(item) {
    return this.items.hasOwnProperty(item);
  }
  add(item) {
    if (this.has(item)) {
      return false;
    }
    this.items[item] = item;
  }
  delete(item) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }
  size() {
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet) {
    var unionSet = new Set();
    this.values().forEach((v) => unionSet.add(v));
    otherSet.values().forEach((v) => unionSet.add(v));
    return unionSet;
  }
  intersection(otherSet) {
    var intersectionSet = new Set();
    this.values().forEach((v) => {
      if (otherSet.has(v)) {
        intersectionSet.add(v);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    // this set - otherSet
    var differenceSet = new Set();
    this.values().forEach((v) => {
      if (!otherSet.has(v)) {
        differenceSet.add(v);
      }
    });
    return differenceSet;
  }
  subset(otherSet) {
    var isSubset = true;
    otherSet.values().forEach((v) => {
      if (!this.has(v)) {
        isSubset = false;
      }
    });
    return isSubset;
  }
}

export default Set;