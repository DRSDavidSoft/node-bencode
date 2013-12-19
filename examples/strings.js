var Bencode = require('../lib/bencode');

var thing = {
  a: Buffer('hello world'),
  b: [1,2,3,4],
  c: {i: 'am', a: 'dict'}
};

var buffer = Bencode.encode(thing);
console.log(buffer.toString());

var tokens = Bencode.tokenize(buffer);
// console.log(tokens);

var json = Bencode.parse(tokens);
// console.log(json);

var out2 = Bencode.encode(json);
console.log(out2.toString());

