var request = require('request')
var getRows = function(rows){
  var merged = [];
  for(var i=0; i<rows.length; i++) {
    merged = merged.concat(rows[i]['rows']);
  }
  return merged
}
var Lanyrd = {
  get: function (path, cb){
    var opts = {
                url: 'http://lanyrd.com/mobile/ios2/'+path, 
                json: true,
                headers: {
                  'X-Lanyrd-Auth': Math.random().toString()
                }}
    request(opts, cb)
  },
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
      cb(error, response, getRows(body['sections']))
    })
  },
  attendees: function (slug, year, cb){
    this.get(year +'/' + slug + '/attendees/', function(error, response, body){
      cb(error, response, getRows(body['sections']))
    })
  },
  schedule: function (slug, year, cb){
    this.get(year +'/' + slug + '/schedule/', function(error, response, body){
      cb(error, response, getRows(body['sections']))
    })
  },
  profile: function (username, cb){
    this.get('profile/' + username + '/', function(error, response, body){
      cb(error, response, body)
    })
  },
  futureEvents: function (username, cb){
    this.get('profile/' + username + '/action/', function(error, response, body){
      cb(error, response, body['events'])
    })
  }
}

module.exports = Lanyrd