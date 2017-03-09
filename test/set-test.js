import assert from 'assert';
import Set from '../set-es6';

describe('Set', function() {
  beforeEach(function() {
    this.set = new Set();
    this.set.add(0);
    this.set.add(1);
    this.set.add(2);
    this.set.add(1);
    this.set.add(2);
  });
  describe('#add()', function() {
    it('should only contains unique value ', function() {
      assert.deepEqual(this.set.values(), [0, 1, 2]);
    });
  });
  describe('#delete()', function() {
    it('should remove values out of set ', function() {
      this.set.delete(0);
      assert.deepEqual(this.set.values(), [1, 2]);
    });
  });
  describe('#has()', function() {
    it('set should has value 1 and 2 ', function() {
      assert.equal(this.set.has(1), true);
      assert.equal(this.set.has(2), true);
    });
    it('set should not has value 3 ', function() {
      assert.equal(this.set.has(3), false);
    });
  });
  describe('#clear()', function() {
    it('set be empty ', function() {
      this.set.clear();
      assert.equal(this.set.has(1), false);
      assert.deepEqual(this.set.values, []);
    });
  });
  describe('#size()', function() {
    it('set should have length of 3 ', function() {
      assert.equal(this.set.size(), 3);
    });
  });
  describe('#union()', function() {
    it('two sets should union to a new set ', function() {
      let otherSet = new Set();
      otherSet.add(1);
      otherSet.add(4);
      assert.deepEqual(this.set.union(otherSet).values(), [0, 1, 2, 4]);
    });
  });
  describe('#intersection()', function() {
    it('two sets should intersect to a new set ', function() {
      let otherSet = new Set();
      otherSet.add(1);
      otherSet.add(2);
      otherSet.add(4);
      assert.deepEqual(this.set.intersection(otherSet).values(), [1, 2]);
    });
  });
  describe('#difference()', function() {
    it('two sets should difference to a new set ', function() {
      let otherSet = new Set();
      otherSet.add(1);
      otherSet.add(2);
      otherSet.add(4);
      assert.deepEqual(this.set.difference(otherSet).values(), [0]);
    });
  });
  describe('#subset()', function() {
    it('set [1, 2] should be a subset of [0, 1, 2] ', function() {
      let otherSet = new Set();
      otherSet.add(1);
      otherSet.add(2);
      assert.equal(this.set.subset(otherSet), true);
    });
    it('set [3, 2] should be a subset of [0, 1, 2] ', function() {
      let otherSet = new Set();
      otherSet.add(3);
      otherSet.add(2);
      assert.equal(this.set.subset(otherSet), false);
    });
  });
});