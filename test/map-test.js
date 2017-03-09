import assert from 'assert';
import Map from '../map-es6';

describe('Map', function() {
  beforeEach(function() {
    this.map = new Map();
    this.map.set(0, 10);
    this.map.set(1, 11);
    this.map.set(2, 12);
  });
  describe('#set()', function() {
    it('map should contains values of [10, 11, 12] ', function() {
      assert.deepEqual(this.map.values(), [10, 11, 12]);
    });
    it('map should overwrite existed value  ', function() {
      this.map.set(0, 100)
      assert.deepEqual(this.map.values(), [100, 11, 12]);
    })
  });
  describe('#key()', function() {
    it('map should contains keys [0, 1, 2] ', function() {
      assert.deepEqual(this.map.keys(), [0, 1, 2]);
    });
  });
  describe('#delete()', function() {
    it('should return true and remove values out of map if key exists ', function() {
      assert.equal(this.map.delete(0), true);
      assert.deepEqual(this.map.values(), [11, 12]);
    });
    it('should return false if key not exists ', function() {
      assert.equal(this.map.delete(11), false);
      assert.deepEqual(this.map.values(), [10, 11, 12]);
    });
  });
  describe('#has()', function() {
    it('set should has value 1 and 2 ', function() {
      assert.equal(this.map.has(1), true);
      assert.equal(this.map.has(2), true);
    });
    it('set should not has value 3 ', function() {
      assert.equal(this.map.has(3), false);
    });
  });
  describe('#clear()', function() {
    it('set be empty ', function() {
      this.map.clear();
      assert.equal(this.map.has(1), false);
      assert.deepEqual(this.map.values, []);
    });
  });
  describe('#size()', function() {
    it('set should have length of 3 ', function() {
      assert.equal(this.map.size(), 3);
    });
  });
});