var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var Person = require('../person');
describe('Day2', function() {
  describe('#person()', function() {
    it('should return 39 when asking for my age', function() {
      const jan = new Person('Jan', 39);      
      assert.equal(39, jan.age);
    });
  });
  
});
