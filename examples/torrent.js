var Bencode = require('../lib/bencode');
var q = require('q');
var qfs = require("q-io/fs");
var path = require('path');

var log = function(data) { console.log(data); return data; };
var TORRENTFILE = path.join(__dirname, './flagfromserver.torrent');

// read from a file, de-bencode it, and then re-bencode it
qfs.read(TORRENTFILE, 'b')
  .then(function(buffer) {
    console.log('in:', buffer.length, 'bytes');
    // console.log(buffer);
    return buffer;
  })

  // build up an array of tokens
  .then(Bencode.tokenize)
  // .then(log)

  // use tokens to build a JSON object
  .then(Bencode.parse)
  // .then(log)

  // encode JSON back into bencode
  .then(Bencode.encode)

  // peek at the output buffer, should === input buffer
  .then(function(buffer) {
    console.log('out:', buffer.length, 'bytes');
    // console.log(buffer);
    return buffer;
  })
  .fail(log);
