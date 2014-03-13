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
      done(err);
    })
  });
})

describe("attendees", function() {
  it("should load them", function(done) {
    Lanyrd.attendees('hybridconf', '2013', function(err, resp, attendees){
      done(err);
    })
  });
})

describe("search", function() {
  it("should search for events with 'javascript' keyword", function(done) {
    Lanyrd.search('javascript', function(err, resp, events) {
      done(err);
    });
  });
})
