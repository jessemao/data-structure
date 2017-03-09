import assert from 'assert';
import HashTable from '../hash-table-es6';

describe('Hash Table', function() {
  beforeEach(function() {
    this.hashTable = new HashTable();
    this.hashTable.put('ad', 10);
    this.hashTable.put('af', 20);
  })
  describe('#put()', function() {
    it('should get no collision with different hash key ', function() {
      this.hashTable.put('ae', 30);
      assert.deepEqual(this.hashTable.get('ad'), {
        key: 'ad',
        value: 10
      });
      assert.deepEqual(this.hashTable.get('af'), {
        key: 'af',
        value: 20
      });
      assert.deepEqual(this.hashTable.get('ae'), {
        key: 'ae',
        value: 30
      });
    });
    it('should resolve collision with hash algorithm ', function() {
      this.hashTable.put('bc', 40);
      // share the same hash key.
      assert.equal(this.hashTable.generateHashCode('bc'), this.hashTable.generateHashCode('ad'));
      assert.deepEqual(this.hashTable.get('bc'), {
        key: 'bc',
        value: 40
      });
    });
  });
  describe('#remove()', function() {
    it('should remove key/value pair from table correctly ', function() {
      this.hashTable.remove('ad');
      assert.equal(this.hashTable.get('ad'), undefined);
    })
    it('should remove key/value pair from linkedlist correctly ', function() {
      this.hashTable.put('bc', 40);
      this.hashTable.remove('bc');
      assert.equal(this.hashTable.get('bc'), undefined);
    });
  })
});