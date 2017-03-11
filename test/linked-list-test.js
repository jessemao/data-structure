import assert from 'assert';
import LinkedList from '../src/linked-list-es6';

describe('Linked List', function() {
  beforeEach(function() {
    this.linkedList = new LinkedList();
    [0, 1, 2, 3, 4, 5, 6].forEach((v) => this.linkedList.append(v));
  });
  describe('#remove()', function() {
    it('should remove 0', function() {
      this.linkedList.remove(0);
      assert.deepEqual(this.linkedList.toArray(), [1, 2, 3, 4, 5, 6]);
    });
    it('should remove 5', function() {
      this.linkedList.remove(5);
      assert.deepEqual(this.linkedList.toArray(), [0, 1, 2, 3, 4, 6]);
    });
    it('should remove 6', function() {
      this.linkedList.remove(6);
      assert.deepEqual(this.linkedList.toArray(), [0, 1, 2, 3, 4, 5]);
    });
  });
});