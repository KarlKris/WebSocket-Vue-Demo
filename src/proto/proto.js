/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {IHeader|null} [header] Message header
     * @property {Uint8Array|null} [body] Message body
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message header.
     * @member {IHeader|null|undefined} header
     * @memberof Message
     * @instance
     */
    Message.prototype.header = null;

    /**
     * Message body.
     * @member {Uint8Array} body
     * @memberof Message
     * @instance
     */
    Message.prototype.body = $util.newBuffer([]);

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.body != null && Object.hasOwnProperty.call(message, "body"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.Header.decode(reader, reader.uint32());
                break;
            case 2:
                message.body = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.Header.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.body != null && message.hasOwnProperty("body"))
            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                return "body: buffer expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".Message.header: object expected");
            message.header = $root.Header.fromObject(object.header);
        }
        if (object.body != null)
            if (typeof object.body === "string")
                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
            else if (object.body.length)
                message.body = object.body;
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.header = null;
            if (options.bytes === String)
                object.body = "";
            else {
                object.body = [];
                if (options.bytes !== Array)
                    object.body = $util.newBuffer(object.body);
            }
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.Header.toObject(message.header, options);
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Message;
})();

$root.Header = (function() {

    /**
     * Properties of a Header.
     * @exports IHeader
     * @interface IHeader
     * @property {number|null} [crcCode] Header crcCode
     * @property {number|null} [length] Header length
     * @property {number|Long|null} [sessionId] Header sessionId
     * @property {number|null} [type] Header type
     * @property {number|null} [priority] Header priority
     * @property {Object.<string,Uint8Array>|null} [attachment] Header attachment
     */

    /**
     * Constructs a new Header.
     * @exports Header
     * @classdesc Represents a Header.
     * @implements IHeader
     * @constructor
     * @param {IHeader=} [properties] Properties to set
     */
    function Header(properties) {
        this.attachment = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Header crcCode.
     * @member {number} crcCode
     * @memberof Header
     * @instance
     */
    Header.prototype.crcCode = 0;

    /**
     * Header length.
     * @member {number} length
     * @memberof Header
     * @instance
     */
    Header.prototype.length = 0;

    /**
     * Header sessionId.
     * @member {number|Long} sessionId
     * @memberof Header
     * @instance
     */
    Header.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Header type.
     * @member {number} type
     * @memberof Header
     * @instance
     */
    Header.prototype.type = 0;

    /**
     * Header priority.
     * @member {number} priority
     * @memberof Header
     * @instance
     */
    Header.prototype.priority = 0;

    /**
     * Header attachment.
     * @member {Object.<string,Uint8Array>} attachment
     * @memberof Header
     * @instance
     */
    Header.prototype.attachment = $util.emptyObject;

    /**
     * Creates a new Header instance using the specified properties.
     * @function create
     * @memberof Header
     * @static
     * @param {IHeader=} [properties] Properties to set
     * @returns {Header} Header instance
     */
    Header.create = function create(properties) {
        return new Header(properties);
    };

    /**
     * Encodes the specified Header message. Does not implicitly {@link Header.verify|verify} messages.
     * @function encode
     * @memberof Header
     * @static
     * @param {IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.crcCode != null && Object.hasOwnProperty.call(message, "crcCode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.crcCode);
        if (message.length != null && Object.hasOwnProperty.call(message, "length"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.length);
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sessionId);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.priority);
        if (message.attachment != null && Object.hasOwnProperty.call(message, "attachment"))
            for (var keys = Object.keys(message.attachment), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.attachment[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Header message, length delimited. Does not implicitly {@link Header.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Header
     * @static
     * @param {IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Header message from the specified reader or buffer.
     * @function decode
     * @memberof Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Header(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.crcCode = reader.int32();
                break;
            case 2:
                message.length = reader.int32();
                break;
            case 3:
                message.sessionId = reader.int64();
                break;
            case 4:
                message.type = reader.int32();
                break;
            case 5:
                message.priority = reader.int32();
                break;
            case 6:
                if (message.attachment === $util.emptyObject)
                    message.attachment = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = [];
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.attachment[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Header message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Header message.
     * @function verify
     * @memberof Header
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Header.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.crcCode != null && message.hasOwnProperty("crcCode"))
            if (!$util.isInteger(message.crcCode))
                return "crcCode: integer expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                return "sessionId: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.priority != null && message.hasOwnProperty("priority"))
            if (!$util.isInteger(message.priority))
                return "priority: integer expected";
        if (message.attachment != null && message.hasOwnProperty("attachment")) {
            if (!$util.isObject(message.attachment))
                return "attachment: object expected";
            var key = Object.keys(message.attachment);
            for (var i = 0; i < key.length; ++i)
                if (!(message.attachment[key[i]] && typeof message.attachment[key[i]].length === "number" || $util.isString(message.attachment[key[i]])))
                    return "attachment: buffer{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a Header message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Header
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Header} Header
     */
    Header.fromObject = function fromObject(object) {
        if (object instanceof $root.Header)
            return object;
        var message = new $root.Header();
        if (object.crcCode != null)
            message.crcCode = object.crcCode | 0;
        if (object.length != null)
            message.length = object.length | 0;
        if (object.sessionId != null)
            if ($util.Long)
                (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = false;
            else if (typeof object.sessionId === "string")
                message.sessionId = parseInt(object.sessionId, 10);
            else if (typeof object.sessionId === "number")
                message.sessionId = object.sessionId;
            else if (typeof object.sessionId === "object")
                message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.priority != null)
            message.priority = object.priority | 0;
        if (object.attachment) {
            if (typeof object.attachment !== "object")
                throw TypeError(".Header.attachment: object expected");
            message.attachment = {};
            for (var keys = Object.keys(object.attachment), i = 0; i < keys.length; ++i)
                if (typeof object.attachment[keys[i]] === "string")
                    $util.base64.decode(object.attachment[keys[i]], message.attachment[keys[i]] = $util.newBuffer($util.base64.length(object.attachment[keys[i]])), 0);
                else if (object.attachment[keys[i]].length)
                    message.attachment[keys[i]] = object.attachment[keys[i]];
        }
        return message;
    };

    /**
     * Creates a plain object from a Header message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Header
     * @static
     * @param {Header} message Header
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Header.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.attachment = {};
        if (options.defaults) {
            object.crcCode = 0;
            object.length = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sessionId = options.longs === String ? "0" : 0;
            object.type = 0;
            object.priority = 0;
        }
        if (message.crcCode != null && message.hasOwnProperty("crcCode"))
            object.crcCode = message.crcCode;
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (typeof message.sessionId === "number")
                object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
            else
                object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.priority != null && message.hasOwnProperty("priority"))
            object.priority = message.priority;
        var keys2;
        if (message.attachment && (keys2 = Object.keys(message.attachment)).length) {
            object.attachment = {};
            for (var j = 0; j < keys2.length; ++j)
                object.attachment[keys2[j]] = options.bytes === String ? $util.base64.encode(message.attachment[keys2[j]], 0, message.attachment[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.attachment[keys2[j]]) : message.attachment[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this Header to JSON.
     * @function toJSON
     * @memberof Header
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Header.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Header;
})();

module.exports = $root;
