var request = require('request')
var Lanyrd = {
  get: function (path, cb){ request({url: 'http://lanyrd.com/mobile/ios2/'+path, json: true}, cb) },
  popular: function (cb){
    this.get('search/', function(error, response, body){
      cb(error, response, body['sections'][0]['rows'])
    })
  },
  search: function (query, cb){
    this.this.get('search/?query='+query, function(error, response, body){
      cb(error, response, body['sections'][0]['rows'])
    })
  },
  event: function (slug, year, cb){
    this.get(year +'/' + slug + '/', function(error, response, body){
      cb(error, response, body)
    })
  },
  speakers: function (slug, year, cb){
    this.get(year +'/' + slug + '/speakers/', function(error, response, body){
      cb(error, response, body['sections'][0]['rows'])
    })
  },
  attendees: function (slug, year, cb){
    this.get(year +'/' + slug + '/attendees/', function(error, response, body){
      cb(error, response, body['sections'][0]['rows'])
    })
  },
  schedule: function (slug, year, cb){
    this.get(year +'/' + slug + '/schedule/', function(error, response, body){
      cb(error, response, body['sections'][0]['rows'])
    })
  },
  profile: function (username, cb){
    this.get('/profile' + slug + '/', function(error, response, body){
      cb(error, response, body)
    })
  },
  futureEvents: function (username, cb){
    this.get('/profile' + slug + '/action', function(error, response, body){
      cb(error, response, body['events'])
    })
  }
}

module.exports = Lanyrd