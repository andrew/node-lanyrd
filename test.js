var Lanyrd = require('./lanyrd')
var assert = require('assert');

describe("popular events", function() {
  it("should load them", function(done) {
    Lanyrd.popular(function(err, resp, events){
      done(err);
    })
  });
})

describe("future events", function() {
  it("should load them", function(done) {
    Lanyrd.futureEvents('teabass', function(err, resp, events){
      console.log(events)
      done(err);
    })
  });
})