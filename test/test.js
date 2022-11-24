// var request = require('supertest');
// var app = require('../index.js');
// describe('GET /', function() {
//  it('respond with hello world', function(done) 
//  { //navigate to root and check the the response is "hello world"
//  request(app).get('/').expect('hello world', done);
//  });
// });

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
