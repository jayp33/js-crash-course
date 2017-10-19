var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// var index = require('../index.js');
// describe('Day2', function() {
//   describe('#add()', function() {
//     it('should return 8 when called with the parameters 3 and 5', function() {
//       assert.equal(8, index.add(3 ,5));
//     });
//   });
  
//   describe('#mult()', function() {
//     it('should return 15 when called with the parameters 3 and 5', function() {
//       assert.equal(15, index.mult(3 ,5));
//     });
//   });
// });
