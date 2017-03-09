import PriorityQueue from '../priority-queue-es6';
import assert from 'assert';

describe('Priority Queue', function() {
  beforeEach(function() {
    this.queue = new PriorityQueue();
  });
  describe('#enqueue()', function() {
    it('should be okay to enqueue an object', function() {
      this.queue.enqueue({
        value: 0,
        priority: 0
      });
      assert.deepEqual(this.queue.getArray(), [{
        value: 0,
        priority: 0
      }])
    });
    it('should be okay to enqueue a value with default priority -1', function() {
      this.queue.enqueue(0);
      assert.deepEqual(this.queue.getArray(), [{
        value: 0,
        priority: -1
      }]);
    });
    it('should be okay to enqueue a value with priority ', function() {
      this.queue.enqueue(0, 1);
      assert.deepEqual(this.queue.getArray(), [{
        value: 0,
        priority: 1
      }]);
    });
    it('should be okay to enqueue with more than two arguments ', function() {
      this.queue.enqueue(0, 1, 1, 1, 1);
      assert.deepEqual(this.queue.getArray(), [{
        value: 0,
        priority: 1
      }]);
    });
    it('should be [{value: 2, priority: 2}, {value: 1, priority: 0}, {value: 0, priority: -1}] after enqueue ', function() {
      this.queue.enqueue(0);
      this.queue.enqueue(1, 0);
      this.queue.enqueue(2, 2);
      this.queue.enqueue(3, 2);
      this.queue.enqueue(4, 3);
      assert.deepEqual(this.queue.getArray(), [{
        value: 4,
        priority: 3
      }, {
        value: 2,
        priority: 2
      }, {
        value: 3,
        priority: 2
      }, {
        value: 1,
        priority: 0
      }, {
        value: 0,
        priority: -1
      }]);
    });
  });
  describe('#dequeue()', function() {
    it('should dequeue first element {value: 1, priority: 0} ', function() {
      this.queue.enqueue(0);
      this.queue.enqueue(1, 0);
      assert.deepEqual(this.queue.dequeue(), {
        value: 1,
        priority: 0
      });
      assert.deepEqual(this.queue.getArray(), [{
        value: 0,
        priority: -1
      }]);
    });
  });
  describe('#front()', function() {
    it('should front element be 1', function() {
      this.queue.enqueue(0);
      this.queue.enqueue(1, 0);
      assert.deepEqual(this.queue.front(), {
        value: 1,
        priority: 0
      });
      assert.deepEqual(this.queue.getArray(), [{
        value: 1,
        priority: 0
      }, {
        value: 0,
        priority: -1
      }]);
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
      this.queue.enqueue(0);
      this.queue.enqueue(1, 0);
      assert.equal(this.queue.size(), 2);
    });
  });
});