import Queue from '../queue-es6';
import assert from 'assert';

describe('Queue', function() {
  beforeEach(function() {
    this.queue = new Queue();
    this.queue.enqueue(0);
    this.queue.enqueue(1);
  })
  describe('#enqueue()', function() {
    it('should enqueue 2 to queue becomes [0, 1, 2] ', function() {
      this.queue.enqueue(2);
      assert.deepEqual(this.queue.getArray(), [0, 1, 2]);
    });
  });
  describe('#dequeue()', function() {
    it('should dequeue first element 0 ', function() {
      assert.equal(this.queue.dequeue(), 0);
      assert.deepEqual(this.queue.getArray(), [1]);
    });
  });
  describe('#front()', function() {
    it('should front element be 1', function() {
      assert.equal(this.queue.front(), 0);
      assert.deepEqual(this.queue.getArray(), [0, 1]);
    });
  });
  describe('#clear()', function() {
    it('should return empty array', function() {
      this.queue.clear();
      assert.deepEqual(this.queue.getArray(), []);
    });
  });
  describe('#size()', function() {
    it('should has size value 2', function() {
      assert.equal(this.queue.size(), 2);
    });
  });
});