var Util    = require('util');
var Element = require('./Element');

// "(filler) always 0x00"
// -- http://forge.mysql.com/wiki/MySQL_Internals_ClientServer_Protocol#Handshake_Initialization_Packet

module.exports = Filler;
Util.inherits(Filler, Element);
function Filler(length) {
  Element.call(this);

  this.length = length;
}

Filler.prototype.copy = function(buffer, offset) {
  for (var i = 0; i < this.length; i++) {
    buffer[i + offset] = 0x00;
  }
};