const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const serializers = $root.serializers = (() => {

    const serializers = {};

    serializers.protobuf = (function() {

        const protobuf = {};

        protobuf.media = (function() {

            const media = {};

            media.Media = (function() {

                function Media(properties) {
                    this.person = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Media.prototype.uri = "";
                Media.prototype.title = "";
                Media.prototype.width = 0;
                Media.prototype.height = 0;
                Media.prototype.format = "";
                Media.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                Media.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                Media.prototype.bitrate = 0;
                Media.prototype.person = $util.emptyArray;
                Media.prototype.player = 0;
                Media.prototype.copyright = "";

                Media.create = function create(properties) {
                    return new Media(properties);
                };

                Media.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(10).string(message.uri);
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(18).string(message.title);
                    writer.uint32(24).int32(message.width);
                    writer.uint32(32).int32(message.height);
                    writer.uint32(42).string(message.format);
                    writer.uint32(48).int64(message.duration);
                    writer.uint32(56).int64(message.size);
                    if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                        writer.uint32(64).int32(message.bitrate);
                    if (message.person != null && message.person.length)
                        for (let i = 0; i < message.person.length; ++i)
                            writer.uint32(74).string(message.person[i]);
                    writer.uint32(80).int32(message.player);
                    if (message.copyright != null && message.hasOwnProperty("copyright"))
                        writer.uint32(90).string(message.copyright);
                    return writer;
                };

                Media.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                Media.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.serializers.protobuf.media.Media();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.uri = reader.string();
                            break;
                        case 2:
                            message.title = reader.string();
                            break;
                        case 3:
                            message.width = reader.int32();
                            break;
                        case 4:
                            message.height = reader.int32();
                            break;
                        case 5:
                            message.format = reader.string();
                            break;
                        case 6:
                            message.duration = reader.int64();
                            break;
                        case 7:
                            message.size = reader.int64();
                            break;
                        case 8:
                            message.bitrate = reader.int32();
                            break;
                        case 9:
                            if (!(message.person && message.person.length))
                                message.person = [];
                            message.person.push(reader.string());
                            break;
                        case 10:
                            message.player = reader.int32();
                            break;
                        case 11:
                            message.copyright = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("uri"))
                        throw $util.ProtocolError("missing required 'uri'", { instance: message });
                    if (!message.hasOwnProperty("width"))
                        throw $util.ProtocolError("missing required 'width'", { instance: message });
                    if (!message.hasOwnProperty("height"))
                        throw $util.ProtocolError("missing required 'height'", { instance: message });
                    if (!message.hasOwnProperty("format"))
                        throw $util.ProtocolError("missing required 'format'", { instance: message });
                    if (!message.hasOwnProperty("duration"))
                        throw $util.ProtocolError("missing required 'duration'", { instance: message });
                    if (!message.hasOwnProperty("size"))
                        throw $util.ProtocolError("missing required 'size'", { instance: message });
                    if (!message.hasOwnProperty("player"))
                        throw $util.ProtocolError("missing required 'player'", { instance: message });
                    return message;
                };

                Media.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                Media.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.uri))
                        return "uri: string expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                    if (!$util.isString(message.format))
                        return "format: string expected";
                    if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                        return "duration: integer|Long expected";
                    if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                        return "size: integer|Long expected";
                    if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                        if (!$util.isInteger(message.bitrate))
                            return "bitrate: integer expected";
                    if (message.person != null && message.hasOwnProperty("person")) {
                        if (!Array.isArray(message.person))
                            return "person: array expected";
                        for (let i = 0; i < message.person.length; ++i)
                            if (!$util.isString(message.person[i]))
                                return "person: string[] expected";
                    }
                    switch (message.player) {
                    default:
                        return "player: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                    if (message.copyright != null && message.hasOwnProperty("copyright"))
                        if (!$util.isString(message.copyright))
                            return "copyright: string expected";
                    return null;
                };

                Media.fromObject = function fromObject(object) {
                    if (object instanceof $root.serializers.protobuf.media.Media)
                        return object;
                    let message = new $root.serializers.protobuf.media.Media();
                    if (object.uri != null)
                        message.uri = String(object.uri);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.width != null)
                        message.width = object.width | 0;
                    if (object.height != null)
                        message.height = object.height | 0;
                    if (object.format != null)
                        message.format = String(object.format);
                    if (object.duration != null)
                        if ($util.Long)
                            (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                        else if (typeof object.duration === "string")
                            message.duration = parseInt(object.duration, 10);
                        else if (typeof object.duration === "number")
                            message.duration = object.duration;
                        else if (typeof object.duration === "object")
                            message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
                    if (object.size != null)
                        if ($util.Long)
                            (message.size = $util.Long.fromValue(object.size)).unsigned = false;
                        else if (typeof object.size === "string")
                            message.size = parseInt(object.size, 10);
                        else if (typeof object.size === "number")
                            message.size = object.size;
                        else if (typeof object.size === "object")
                            message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
                    if (object.bitrate != null)
                        message.bitrate = object.bitrate | 0;
                    if (object.person) {
                        if (!Array.isArray(object.person))
                            throw TypeError(".serializers.protobuf.media.Media.person: array expected");
                        message.person = [];
                        for (let i = 0; i < object.person.length; ++i)
                            message.person[i] = String(object.person[i]);
                    }
                    switch (object.player) {
                    case "JAVA":
                    case 0:
                        message.player = 0;
                        break;
                    case "FLASH":
                    case 1:
                        message.player = 1;
                        break;
                    }
                    if (object.copyright != null)
                        message.copyright = String(object.copyright);
                    return message;
                };

                Media.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.person = [];
                    if (options.defaults) {
                        object.uri = "";
                        object.title = "";
                        object.width = 0;
                        object.height = 0;
                        object.format = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.duration = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.size = options.longs === String ? "0" : 0;
                        object.bitrate = 0;
                        object.player = options.enums === String ? "JAVA" : 0;
                        object.copyright = "";
                    }
                    if (message.uri != null && message.hasOwnProperty("uri"))
                        object.uri = message.uri;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.width != null && message.hasOwnProperty("width"))
                        object.width = message.width;
                    if (message.height != null && message.hasOwnProperty("height"))
                        object.height = message.height;
                    if (message.format != null && message.hasOwnProperty("format"))
                        object.format = message.format;
                    if (message.duration != null && message.hasOwnProperty("duration"))
                        if (typeof message.duration === "number")
                            object.duration = options.longs === String ? String(message.duration) : message.duration;
                        else
                            object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
                    if (message.size != null && message.hasOwnProperty("size"))
                        if (typeof message.size === "number")
                            object.size = options.longs === String ? String(message.size) : message.size;
                        else
                            object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
                    if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                        object.bitrate = message.bitrate;
                    if (message.person && message.person.length) {
                        object.person = [];
                        for (let j = 0; j < message.person.length; ++j)
                            object.person[j] = message.person[j];
                    }
                    if (message.player != null && message.hasOwnProperty("player"))
                        object.player = options.enums === String ? $root.serializers.protobuf.media.Media.Player[message.player] : message.player;
                    if (message.copyright != null && message.hasOwnProperty("copyright"))
                        object.copyright = message.copyright;
                    return object;
                };

                Media.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Media.Player = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JAVA"] = 0;
                    values[valuesById[1] = "FLASH"] = 1;
                    return values;
                })();

                return Media;
            })();

            media.Response = (function() {

                function Response(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Response.prototype.code = 0;
                Response.prototype.success = false;
                Response.prototype.message = "";

                Response.create = function create(properties) {
                    return new Response(properties);
                };

                Response.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(8).int32(message.code);
                    writer.uint32(16).bool(message.success);
                    writer.uint32(26).string(message.message);
                    return writer;
                };

                Response.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                Response.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.serializers.protobuf.media.Response();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.code = reader.int32();
                            break;
                        case 2:
                            message.success = reader.bool();
                            break;
                        case 3:
                            message.message = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("code"))
                        throw $util.ProtocolError("missing required 'code'", { instance: message });
                    if (!message.hasOwnProperty("success"))
                        throw $util.ProtocolError("missing required 'success'", { instance: message });
                    if (!message.hasOwnProperty("message"))
                        throw $util.ProtocolError("missing required 'message'", { instance: message });
                    return message;
                };

                Response.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                Response.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                    if (!$util.isString(message.message))
                        return "message: string expected";
                    return null;
                };

                Response.fromObject = function fromObject(object) {
                    if (object instanceof $root.serializers.protobuf.media.Response)
                        return object;
                    let message = new $root.serializers.protobuf.media.Response();
                    if (object.code != null)
                        message.code = object.code | 0;
                    if (object.success != null)
                        message.success = Boolean(object.success);
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };

                Response.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.code = 0;
                        object.success = false;
                        object.message = "";
                    }
                    if (message.code != null && message.hasOwnProperty("code"))
                        object.code = message.code;
                    if (message.success != null && message.hasOwnProperty("success"))
                        object.success = message.success;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    return object;
                };

                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            media.UploadMedia = (function() {

                function UploadMedia(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (UploadMedia.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UploadMedia;

                UploadMedia.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };


                Object.defineProperty(UploadMedia.prototype.upload = function upload(request, callback) {
                    return this.rpcCall(upload, $root.serializers.protobuf.media.Media, $root.serializers.protobuf.media.Response, request, callback);
                }, "name", { value: "Upload" });

                return UploadMedia;
            })();

            return media;
        })();

        return protobuf;
    })();

    return serializers;
})();