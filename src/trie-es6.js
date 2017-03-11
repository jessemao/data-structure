class TrieNode {
  static get linkLength() {
    return 26;
  }
  constructor(key) {
    let R = this.linkLength();
    this.key = key;
    this.isEnd = false;
    this.links = new Array(R);
  }
  containKeys(key) {
    let index = key.charCodeAt() - 'a'.charCodeAt();
    return !!this.links[index];
  }
  get(key) {
    let index = key.charCodeAt() - 'a'.charCodeAt();
    return this.links[index];
  }
  put(key, node) {
    let index = key.charCodeAt() - 'a'.charCodeAt();
    this.links[index] = node;
  }
}

class Trie {
  constructor() {
    this.root = null;
  }
  insert(word) {
    if (!word || word.length === 0) {
      return false;
    }
    word.forEach((key, i) => {
      var newNode = new TrieNode(key);
      if (i === word.length - 1) {
        newNode.isEnd = true;
      }
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(newNode, this.root);
      }
    });
  }
  insertNode(newNode, node) {
    if (node.containKeys(newNode.key)) {
      node = node.get(newNode.key);
      this.insertNode(newNode, node);
    } else {
      node.put(key, newNode);
    }
  }
  search(word) {
    var node = searchNode(word, this.root);
    return node && node.isEnd;
  }
  startWith(word) {
    return searchNode(word, this.root);
  }
  searchNode(key, node) {
    word.forEach((key, i) => {
      if (node.containKeys(key)) {
        node = node.get(key);
      } else {
        return null;
      }
    });
    return node;
  }
}