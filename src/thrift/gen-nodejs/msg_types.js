//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.Size = {
  'SMALL' : 0,
  'LARGE' : 1
};
ttypes.Player = {
  'JAVA' : 0,
  'FLASH' : 1
};
var Media = module.exports.Media = function(args) {
  this.uri = null;
  this.title = null;
  this.width = null;
  this.height = null;
  this.format = null;
  this.duration = null;
  this.size = null;
  this.bitrate = null;
  this.person = null;
  this.player = null;
  this.copyright = null;
  if (args) {
    if (args.uri !== undefined && args.uri !== null) {
      this.uri = args.uri;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.width !== undefined && args.width !== null) {
      this.width = args.width;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field width is unset!');
    }
    if (args.height !== undefined && args.height !== null) {
      this.height = args.height;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field height is unset!');
    }
    if (args.format !== undefined && args.format !== null) {
      this.format = args.format;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field format is unset!');
    }
    if (args.duration !== undefined && args.duration !== null) {
      this.duration = args.duration;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field duration is unset!');
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field size is unset!');
    }
    if (args.bitrate !== undefined && args.bitrate !== null) {
      this.bitrate = args.bitrate;
    }
    if (args.person !== undefined && args.person !== null) {
      this.person = Thrift.copyList(args.person, [null]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field person is unset!');
    }
    if (args.player !== undefined && args.player !== null) {
      this.player = args.player;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field player is unset!');
    }
    if (args.copyright !== undefined && args.copyright !== null) {
      this.copyright = args.copyright;
    }
  }
};
Media.prototype = {};
Media.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uri = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.width = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.height = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.format = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.duration = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.size = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.bitrate = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.person = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.person.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.player = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.copyright = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Media.prototype.write = function(output) {
  output.writeStructBegin('Media');
  if (this.uri !== null && this.uri !== undefined) {
    output.writeFieldBegin('uri', Thrift.Type.STRING, 1);
    output.writeString(this.uri);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 2);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.width !== null && this.width !== undefined) {
    output.writeFieldBegin('width', Thrift.Type.I32, 3);
    output.writeI32(this.width);
    output.writeFieldEnd();
  }
  if (this.height !== null && this.height !== undefined) {
    output.writeFieldBegin('height', Thrift.Type.I32, 4);
    output.writeI32(this.height);
    output.writeFieldEnd();
  }
  if (this.format !== null && this.format !== undefined) {
    output.writeFieldBegin('format', Thrift.Type.STRING, 5);
    output.writeString(this.format);
    output.writeFieldEnd();
  }
  if (this.duration !== null && this.duration !== undefined) {
    output.writeFieldBegin('duration', Thrift.Type.I64, 6);
    output.writeI64(this.duration);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I64, 7);
    output.writeI64(this.size);
    output.writeFieldEnd();
  }
  if (this.bitrate !== null && this.bitrate !== undefined) {
    output.writeFieldBegin('bitrate', Thrift.Type.I32, 8);
    output.writeI32(this.bitrate);
    output.writeFieldEnd();
  }
  if (this.person !== null && this.person !== undefined) {
    output.writeFieldBegin('person', Thrift.Type.LIST, 9);
    output.writeListBegin(Thrift.Type.STRING, this.person.length);
    for (var iter7 in this.person)
    {
      if (this.person.hasOwnProperty(iter7))
      {
        iter7 = this.person[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.player !== null && this.player !== undefined) {
    output.writeFieldBegin('player', Thrift.Type.I32, 10);
    output.writeI32(this.player);
    output.writeFieldEnd();
  }
  if (this.copyright !== null && this.copyright !== undefined) {
    output.writeFieldBegin('copyright', Thrift.Type.STRING, 11);
    output.writeString(this.copyright);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Response = module.exports.Response = function(args) {
  this.code = null;
  this.success = null;
  this.message = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field code is unset!');
    }
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field success is unset!');
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
  }
};
Response.prototype = {};
Response.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Response.prototype.write = function(output) {
  output.writeStructBegin('Response');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 2);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 3);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

