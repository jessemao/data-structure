import Stack from '../src/stack-es6';
import assert from 'assert';

describe('Stack', function() {
  beforeEach(function() {
    this.stack = new Stack();
    this.stack.push(0);
    this.stack.push(1);
  })
  describe('#push()', function() {
    it('should push 2 to stack becomes [0, 1, 2] ', function() {
      this.stack.push(2);
      assert.deepEqual(this.stack.getArray(), [0, 1, 2]);
    });
  });
  describe('#pop()', function() {
    it('should pop first element 1 ', function() {
      assert.equal(this.stack.pop(), 1);
      assert.deepEqual(this.stack.getArray(), [0]);
    });
  });
  describe('#peek()', function() {
    it('should peek first element 1', function() {
      assert.equal(this.stack.peek(), 1);
      assert.deepEqual(this.stack.getArray(), [0, 1]);
    });
  });
  describe('#clear()', function() {
    it('should return empty array', function() {
      this.stack.clear();
      assert.deepEqual(this.stack.getArray(), []);
    });
  });
  describe('#size()', function() {
    it('should has size value 2', function() {
      assert.equal(this.stack.size(), 2);
    });
  });
});