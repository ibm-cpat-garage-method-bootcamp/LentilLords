var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

// Below code demonstrates using various methods of testing
describe('It should test add and deletion', function() {

  describe('it should add', function() {
    it('Tests assert.equal', function() {
      assert.equal("a", "a");
    });
    it('Tests assert.typeOf', function() {
      assert.typeOf("a", "string");
    });
    it('Tests assert.lengthOf', function() {
      assert.lengthOf([1,2,3], 3);
      assert.lengthOf("asd", 3);
    });
  });