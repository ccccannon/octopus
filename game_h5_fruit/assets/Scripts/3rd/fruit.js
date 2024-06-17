/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * FruitProtocol enum.
 * @exports FruitProtocol
 * @enum {number}
 * @property {number} FruitInvalid=0 FruitInvalid value
 * @property {number} FruitTableStatusReq=1 FruitTableStatusReq value
 * @property {number} FruitTableStatusResp=2 FruitTableStatusResp value
 * @property {number} FruitGameStartResp=4 FruitGameStartResp value
 * @property {number} FruitGameSettleResp=6 FruitGameSettleResp value
 * @property {number} FruitBetReq=7 FruitBetReq value
 * @property {number} FruitBetResp=8 FruitBetResp value
 * @property {number} FruitBetBroadcast=10 FruitBetBroadcast value
 * @property {number} FruitHistoryReq=11 FruitHistoryReq value
 * @property {number} FruitHistoryResp=12 FruitHistoryResp value
 * @property {number} FruitChatReq=13 FruitChatReq value
 * @property {number} FruitChatResp=14 FruitChatResp value
 * @property {number} FruitPlayerListReq=15 FruitPlayerListReq value
 * @property {number} FruitPlayerListResp=16 FruitPlayerListResp value
 * @property {number} FruitLeaveReq=17 FruitLeaveReq value
 * @property {number} FruitLeaveResp=18 FruitLeaveResp value
 * @property {number} FruitPlayerNumResp=20 FruitPlayerNumResp value
 * @property {number} FruitSitdownReq=21 FruitSitdownReq value
 * @property {number} FruitSitdownResp=22 FruitSitdownResp value
 * @property {number} FruitRebetReq=23 FruitRebetReq value
 * @property {number} FruitRebetResp=24 FruitRebetResp value
 * @property {number} FruitChangeTableReq=25 FruitChangeTableReq value
 * @property {number} FruitChangeTableResp=26 FruitChangeTableResp value
 */
$root.FruitProtocol = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FruitInvalid"] = 0;
    values[valuesById[1] = "FruitTableStatusReq"] = 1;
    values[valuesById[2] = "FruitTableStatusResp"] = 2;
    values[valuesById[4] = "FruitGameStartResp"] = 4;
    values[valuesById[6] = "FruitGameSettleResp"] = 6;
    values[valuesById[7] = "FruitBetReq"] = 7;
    values[valuesById[8] = "FruitBetResp"] = 8;
    values[valuesById[10] = "FruitBetBroadcast"] = 10;
    values[valuesById[11] = "FruitHistoryReq"] = 11;
    values[valuesById[12] = "FruitHistoryResp"] = 12;
    values[valuesById[13] = "FruitChatReq"] = 13;
    values[valuesById[14] = "FruitChatResp"] = 14;
    values[valuesById[15] = "FruitPlayerListReq"] = 15;
    values[valuesById[16] = "FruitPlayerListResp"] = 16;
    values[valuesById[17] = "FruitLeaveReq"] = 17;
    values[valuesById[18] = "FruitLeaveResp"] = 18;
    values[valuesById[20] = "FruitPlayerNumResp"] = 20;
    values[valuesById[21] = "FruitSitdownReq"] = 21;
    values[valuesById[22] = "FruitSitdownResp"] = 22;
    values[valuesById[23] = "FruitRebetReq"] = 23;
    values[valuesById[24] = "FruitRebetResp"] = 24;
    values[valuesById[25] = "FruitChangeTableReq"] = 25;
    values[valuesById[26] = "FruitChangeTableResp"] = 26;
    return values;
})();

$root.FruitMsgTableStatusResp = (function() {

    /**
     * Properties of a FruitMsgTableStatusResp.
     * @exports IFruitMsgTableStatusResp
     * @interface IFruitMsgTableStatusResp
     * @property {number|null} [PlayersCount] FruitMsgTableStatusResp PlayersCount
     * @property {pb.IGameUser|null} [User] FruitMsgTableStatusResp User
     * @property {pb.GameStatus|null} [Status] FruitMsgTableStatusResp Status
     * @property {number|null} [TimeLeft] FruitMsgTableStatusResp TimeLeft
     * @property {Array.<pb.IArrayUInt32>|null} [PlayerBet] FruitMsgTableStatusResp PlayerBet
     * @property {Array.<number>|null} [Multiple] FruitMsgTableStatusResp Multiple
     * @property {Array.<number>|null} [BetAmounts] FruitMsgTableStatusResp BetAmounts
     * @property {number|null} [Result] FruitMsgTableStatusResp Result
     * @property {number|null} [ProductID] FruitMsgTableStatusResp ProductID
     * @property {Array.<com.cw.chess2.platform.ICurrencyPair>|null} [Rewards] FruitMsgTableStatusResp Rewards
     * @property {Array.<number|Long>|null} [PlayerBetLimit] FruitMsgTableStatusResp PlayerBetLimit
     * @property {Array.<pb.ISeatPlayer>|null} [SeatPlayers] FruitMsgTableStatusResp SeatPlayers
     * @property {number|null} [Rebet] FruitMsgTableStatusResp Rebet
     * @property {number|Long|null} [BetMin] FruitMsgTableStatusResp BetMin
     * @property {Array.<pb.IArrayUInt32>|null} [AreaCoins] FruitMsgTableStatusResp AreaCoins
     * @property {Array.<number>|null} [NewBetAmounts] FruitMsgTableStatusResp NewBetAmounts
     * @property {Array.<number>|null} [BetAmountsLevel] FruitMsgTableStatusResp BetAmountsLevel
     * @property {number|Long|null} [Round] FruitMsgTableStatusResp Round
     * @property {number|null} [TodayWinSet] FruitMsgTableStatusResp TodayWinSet
     */

    /**
     * Constructs a new FruitMsgTableStatusResp.
     * @exports FruitMsgTableStatusResp
     * @classdesc Represents a FruitMsgTableStatusResp.
     * @implements IFruitMsgTableStatusResp
     * @constructor
     * @param {IFruitMsgTableStatusResp=} [properties] Properties to set
     */
    function FruitMsgTableStatusResp(properties) {
        this.PlayerBet = [];
        this.Multiple = [];
        this.BetAmounts = [];
        this.Rewards = [];
        this.PlayerBetLimit = [];
        this.SeatPlayers = [];
        this.AreaCoins = [];
        this.NewBetAmounts = [];
        this.BetAmountsLevel = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FruitMsgTableStatusResp PlayersCount.
     * @member {number} PlayersCount
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.PlayersCount = 0;

    /**
     * FruitMsgTableStatusResp User.
     * @member {pb.IGameUser|null|undefined} User
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.User = null;

    /**
     * FruitMsgTableStatusResp Status.
     * @member {pb.GameStatus} Status
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Status = 0;

    /**
     * FruitMsgTableStatusResp TimeLeft.
     * @member {number} TimeLeft
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.TimeLeft = 0;

    /**
     * FruitMsgTableStatusResp PlayerBet.
     * @member {Array.<pb.IArrayUInt32>} PlayerBet
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.PlayerBet = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp Multiple.
     * @member {Array.<number>} Multiple
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Multiple = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp BetAmounts.
     * @member {Array.<number>} BetAmounts
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.BetAmounts = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp Result.
     * @member {number} Result
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Result = 0;

    /**
     * FruitMsgTableStatusResp ProductID.
     * @member {number} ProductID
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.ProductID = 0;

    /**
     * FruitMsgTableStatusResp Rewards.
     * @member {Array.<com.cw.chess2.platform.ICurrencyPair>} Rewards
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Rewards = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp PlayerBetLimit.
     * @member {Array.<number|Long>} PlayerBetLimit
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.PlayerBetLimit = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp SeatPlayers.
     * @member {Array.<pb.ISeatPlayer>} SeatPlayers
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.SeatPlayers = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp Rebet.
     * @member {number} Rebet
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Rebet = 0;

    /**
     * FruitMsgTableStatusResp BetMin.
     * @member {number|Long} BetMin
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.BetMin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FruitMsgTableStatusResp AreaCoins.
     * @member {Array.<pb.IArrayUInt32>} AreaCoins
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.AreaCoins = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp NewBetAmounts.
     * @member {Array.<number>} NewBetAmounts
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.NewBetAmounts = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp BetAmountsLevel.
     * @member {Array.<number>} BetAmountsLevel
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.BetAmountsLevel = $util.emptyArray;

    /**
     * FruitMsgTableStatusResp Round.
     * @member {number|Long} Round
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.Round = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FruitMsgTableStatusResp TodayWinSet.
     * @member {number} TodayWinSet
     * @memberof FruitMsgTableStatusResp
     * @instance
     */
    FruitMsgTableStatusResp.prototype.TodayWinSet = 0;

    /**
     * Creates a new FruitMsgTableStatusResp instance using the specified properties.
     * @function create
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {IFruitMsgTableStatusResp=} [properties] Properties to set
     * @returns {FruitMsgTableStatusResp} FruitMsgTableStatusResp instance
     */
    FruitMsgTableStatusResp.create = function create(properties) {
        return new FruitMsgTableStatusResp(properties);
    };

    /**
     * Encodes the specified FruitMsgTableStatusResp message. Does not implicitly {@link FruitMsgTableStatusResp.verify|verify} messages.
     * @function encode
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {IFruitMsgTableStatusResp} message FruitMsgTableStatusResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgTableStatusResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PlayersCount != null && Object.hasOwnProperty.call(message, "PlayersCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.PlayersCount);
        if (message.User != null && Object.hasOwnProperty.call(message, "User"))
            $root.pb.GameUser.encode(message.User, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Status);
        if (message.TimeLeft != null && Object.hasOwnProperty.call(message, "TimeLeft"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.TimeLeft);
        if (message.PlayerBet != null && message.PlayerBet.length)
            for (var i = 0; i < message.PlayerBet.length; ++i)
                $root.pb.ArrayUInt32.encode(message.PlayerBet[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.Multiple != null && message.Multiple.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.Multiple.length; ++i)
                writer.uint32(message.Multiple[i]);
            writer.ldelim();
        }
        if (message.BetAmounts != null && message.BetAmounts.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.BetAmounts.length; ++i)
                writer.uint32(message.BetAmounts[i]);
            writer.ldelim();
        }
        if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.Result);
        if (message.ProductID != null && Object.hasOwnProperty.call(message, "ProductID"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.ProductID);
        if (message.Rewards != null && message.Rewards.length)
            for (var i = 0; i < message.Rewards.length; ++i)
                $root.com.cw.chess2.platform.CurrencyPair.encode(message.Rewards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.PlayerBetLimit != null && message.PlayerBetLimit.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.PlayerBetLimit.length; ++i)
                writer.int64(message.PlayerBetLimit[i]);
            writer.ldelim();
        }
        if (message.SeatPlayers != null && message.SeatPlayers.length)
            for (var i = 0; i < message.SeatPlayers.length; ++i)
                $root.pb.SeatPlayer.encode(message.SeatPlayers[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.Rebet != null && Object.hasOwnProperty.call(message, "Rebet"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.Rebet);
        if (message.BetMin != null && Object.hasOwnProperty.call(message, "BetMin"))
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.BetMin);
        if (message.AreaCoins != null && message.AreaCoins.length)
            for (var i = 0; i < message.AreaCoins.length; ++i)
                $root.pb.ArrayUInt32.encode(message.AreaCoins[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.NewBetAmounts != null && message.NewBetAmounts.length) {
            writer.uint32(/* id 16, wireType 2 =*/130).fork();
            for (var i = 0; i < message.NewBetAmounts.length; ++i)
                writer.uint32(message.NewBetAmounts[i]);
            writer.ldelim();
        }
        if (message.BetAmountsLevel != null && message.BetAmountsLevel.length) {
            writer.uint32(/* id 17, wireType 2 =*/138).fork();
            for (var i = 0; i < message.BetAmountsLevel.length; ++i)
                writer.uint32(message.BetAmountsLevel[i]);
            writer.ldelim();
        }
        if (message.Round != null && Object.hasOwnProperty.call(message, "Round"))
            writer.uint32(/* id 18, wireType 0 =*/144).int64(message.Round);
        if (message.TodayWinSet != null && Object.hasOwnProperty.call(message, "TodayWinSet"))
            writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.TodayWinSet);
        return writer;
    };

    /**
     * Encodes the specified FruitMsgTableStatusResp message, length delimited. Does not implicitly {@link FruitMsgTableStatusResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {IFruitMsgTableStatusResp} message FruitMsgTableStatusResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgTableStatusResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FruitMsgTableStatusResp message from the specified reader or buffer.
     * @function decode
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FruitMsgTableStatusResp} FruitMsgTableStatusResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgTableStatusResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FruitMsgTableStatusResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PlayersCount = reader.uint32();
                break;
            case 2:
                message.User = $root.pb.GameUser.decode(reader, reader.uint32());
                break;
            case 3:
                message.Status = reader.int32();
                break;
            case 4:
                message.TimeLeft = reader.uint32();
                break;
            case 5:
                if (!(message.PlayerBet && message.PlayerBet.length))
                    message.PlayerBet = [];
                message.PlayerBet.push($root.pb.ArrayUInt32.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.Multiple && message.Multiple.length))
                    message.Multiple = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.Multiple.push(reader.uint32());
                } else
                    message.Multiple.push(reader.uint32());
                break;
            case 7:
                if (!(message.BetAmounts && message.BetAmounts.length))
                    message.BetAmounts = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.BetAmounts.push(reader.uint32());
                } else
                    message.BetAmounts.push(reader.uint32());
                break;
            case 8:
                message.Result = reader.uint32();
                break;
            case 9:
                message.ProductID = reader.uint32();
                break;
            case 10:
                if (!(message.Rewards && message.Rewards.length))
                    message.Rewards = [];
                message.Rewards.push($root.com.cw.chess2.platform.CurrencyPair.decode(reader, reader.uint32()));
                break;
            case 11:
                if (!(message.PlayerBetLimit && message.PlayerBetLimit.length))
                    message.PlayerBetLimit = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.PlayerBetLimit.push(reader.int64());
                } else
                    message.PlayerBetLimit.push(reader.int64());
                break;
            case 12:
                if (!(message.SeatPlayers && message.SeatPlayers.length))
                    message.SeatPlayers = [];
                message.SeatPlayers.push($root.pb.SeatPlayer.decode(reader, reader.uint32()));
                break;
            case 13:
                message.Rebet = reader.uint32();
                break;
            case 14:
                message.BetMin = reader.int64();
                break;
            case 15:
                if (!(message.AreaCoins && message.AreaCoins.length))
                    message.AreaCoins = [];
                message.AreaCoins.push($root.pb.ArrayUInt32.decode(reader, reader.uint32()));
                break;
            case 16:
                if (!(message.NewBetAmounts && message.NewBetAmounts.length))
                    message.NewBetAmounts = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.NewBetAmounts.push(reader.uint32());
                } else
                    message.NewBetAmounts.push(reader.uint32());
                break;
            case 17:
                if (!(message.BetAmountsLevel && message.BetAmountsLevel.length))
                    message.BetAmountsLevel = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.BetAmountsLevel.push(reader.uint32());
                } else
                    message.BetAmountsLevel.push(reader.uint32());
                break;
            case 18:
                message.Round = reader.int64();
                break;
            case 19:
                message.TodayWinSet = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FruitMsgTableStatusResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FruitMsgTableStatusResp} FruitMsgTableStatusResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgTableStatusResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FruitMsgTableStatusResp message.
     * @function verify
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FruitMsgTableStatusResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PlayersCount != null && message.hasOwnProperty("PlayersCount"))
            if (!$util.isInteger(message.PlayersCount))
                return "PlayersCount: integer expected";
        if (message.User != null && message.hasOwnProperty("User")) {
            var error = $root.pb.GameUser.verify(message.User);
            if (error)
                return "User." + error;
        }
        if (message.Status != null && message.hasOwnProperty("Status"))
            switch (message.Status) {
            default:
                return "Status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            if (!$util.isInteger(message.TimeLeft))
                return "TimeLeft: integer expected";
        if (message.PlayerBet != null && message.hasOwnProperty("PlayerBet")) {
            if (!Array.isArray(message.PlayerBet))
                return "PlayerBet: array expected";
            for (var i = 0; i < message.PlayerBet.length; ++i) {
                var error = $root.pb.ArrayUInt32.verify(message.PlayerBet[i]);
                if (error)
                    return "PlayerBet." + error;
            }
        }
        if (message.Multiple != null && message.hasOwnProperty("Multiple")) {
            if (!Array.isArray(message.Multiple))
                return "Multiple: array expected";
            for (var i = 0; i < message.Multiple.length; ++i)
                if (!$util.isInteger(message.Multiple[i]))
                    return "Multiple: integer[] expected";
        }
        if (message.BetAmounts != null && message.hasOwnProperty("BetAmounts")) {
            if (!Array.isArray(message.BetAmounts))
                return "BetAmounts: array expected";
            for (var i = 0; i < message.BetAmounts.length; ++i)
                if (!$util.isInteger(message.BetAmounts[i]))
                    return "BetAmounts: integer[] expected";
        }
        if (message.Result != null && message.hasOwnProperty("Result"))
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
        if (message.ProductID != null && message.hasOwnProperty("ProductID"))
            if (!$util.isInteger(message.ProductID))
                return "ProductID: integer expected";
        if (message.Rewards != null && message.hasOwnProperty("Rewards")) {
            if (!Array.isArray(message.Rewards))
                return "Rewards: array expected";
            for (var i = 0; i < message.Rewards.length; ++i) {
                var error = $root.com.cw.chess2.platform.CurrencyPair.verify(message.Rewards[i]);
                if (error)
                    return "Rewards." + error;
            }
        }
        if (message.PlayerBetLimit != null && message.hasOwnProperty("PlayerBetLimit")) {
            if (!Array.isArray(message.PlayerBetLimit))
                return "PlayerBetLimit: array expected";
            for (var i = 0; i < message.PlayerBetLimit.length; ++i)
                if (!$util.isInteger(message.PlayerBetLimit[i]) && !(message.PlayerBetLimit[i] && $util.isInteger(message.PlayerBetLimit[i].low) && $util.isInteger(message.PlayerBetLimit[i].high)))
                    return "PlayerBetLimit: integer|Long[] expected";
        }
        if (message.SeatPlayers != null && message.hasOwnProperty("SeatPlayers")) {
            if (!Array.isArray(message.SeatPlayers))
                return "SeatPlayers: array expected";
            for (var i = 0; i < message.SeatPlayers.length; ++i) {
                var error = $root.pb.SeatPlayer.verify(message.SeatPlayers[i]);
                if (error)
                    return "SeatPlayers." + error;
            }
        }
        if (message.Rebet != null && message.hasOwnProperty("Rebet"))
            if (!$util.isInteger(message.Rebet))
                return "Rebet: integer expected";
        if (message.BetMin != null && message.hasOwnProperty("BetMin"))
            if (!$util.isInteger(message.BetMin) && !(message.BetMin && $util.isInteger(message.BetMin.low) && $util.isInteger(message.BetMin.high)))
                return "BetMin: integer|Long expected";
        if (message.AreaCoins != null && message.hasOwnProperty("AreaCoins")) {
            if (!Array.isArray(message.AreaCoins))
                return "AreaCoins: array expected";
            for (var i = 0; i < message.AreaCoins.length; ++i) {
                var error = $root.pb.ArrayUInt32.verify(message.AreaCoins[i]);
                if (error)
                    return "AreaCoins." + error;
            }
        }
        if (message.NewBetAmounts != null && message.hasOwnProperty("NewBetAmounts")) {
            if (!Array.isArray(message.NewBetAmounts))
                return "NewBetAmounts: array expected";
            for (var i = 0; i < message.NewBetAmounts.length; ++i)
                if (!$util.isInteger(message.NewBetAmounts[i]))
                    return "NewBetAmounts: integer[] expected";
        }
        if (message.BetAmountsLevel != null && message.hasOwnProperty("BetAmountsLevel")) {
            if (!Array.isArray(message.BetAmountsLevel))
                return "BetAmountsLevel: array expected";
            for (var i = 0; i < message.BetAmountsLevel.length; ++i)
                if (!$util.isInteger(message.BetAmountsLevel[i]))
                    return "BetAmountsLevel: integer[] expected";
        }
        if (message.Round != null && message.hasOwnProperty("Round"))
            if (!$util.isInteger(message.Round) && !(message.Round && $util.isInteger(message.Round.low) && $util.isInteger(message.Round.high)))
                return "Round: integer|Long expected";
        if (message.TodayWinSet != null && message.hasOwnProperty("TodayWinSet"))
            if (!$util.isInteger(message.TodayWinSet))
                return "TodayWinSet: integer expected";
        return null;
    };

    /**
     * Creates a FruitMsgTableStatusResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FruitMsgTableStatusResp} FruitMsgTableStatusResp
     */
    FruitMsgTableStatusResp.fromObject = function fromObject(object) {
        if (object instanceof $root.FruitMsgTableStatusResp)
            return object;
        var message = new $root.FruitMsgTableStatusResp();
        if (object.PlayersCount != null)
            message.PlayersCount = object.PlayersCount >>> 0;
        if (object.User != null) {
            if (typeof object.User !== "object")
                throw TypeError(".FruitMsgTableStatusResp.User: object expected");
            message.User = $root.pb.GameUser.fromObject(object.User);
        }
        switch (object.Status) {
        case "GameStatusInvalid":
        case 0:
            message.Status = 0;
            break;
        case "GameStatusNormal":
        case 1:
            message.Status = 1;
            break;
        case "GameStatusPlaying":
        case 2:
            message.Status = 2;
            break;
        case "GameStatusSettle":
        case 3:
            message.Status = 3;
            break;
        }
        if (object.TimeLeft != null)
            message.TimeLeft = object.TimeLeft >>> 0;
        if (object.PlayerBet) {
            if (!Array.isArray(object.PlayerBet))
                throw TypeError(".FruitMsgTableStatusResp.PlayerBet: array expected");
            message.PlayerBet = [];
            for (var i = 0; i < object.PlayerBet.length; ++i) {
                if (typeof object.PlayerBet[i] !== "object")
                    throw TypeError(".FruitMsgTableStatusResp.PlayerBet: object expected");
                message.PlayerBet[i] = $root.pb.ArrayUInt32.fromObject(object.PlayerBet[i]);
            }
        }
        if (object.Multiple) {
            if (!Array.isArray(object.Multiple))
                throw TypeError(".FruitMsgTableStatusResp.Multiple: array expected");
            message.Multiple = [];
            for (var i = 0; i < object.Multiple.length; ++i)
                message.Multiple[i] = object.Multiple[i] >>> 0;
        }
        if (object.BetAmounts) {
            if (!Array.isArray(object.BetAmounts))
                throw TypeError(".FruitMsgTableStatusResp.BetAmounts: array expected");
            message.BetAmounts = [];
            for (var i = 0; i < object.BetAmounts.length; ++i)
                message.BetAmounts[i] = object.BetAmounts[i] >>> 0;
        }
        if (object.Result != null)
            message.Result = object.Result >>> 0;
        if (object.ProductID != null)
            message.ProductID = object.ProductID >>> 0;
        if (object.Rewards) {
            if (!Array.isArray(object.Rewards))
                throw TypeError(".FruitMsgTableStatusResp.Rewards: array expected");
            message.Rewards = [];
            for (var i = 0; i < object.Rewards.length; ++i) {
                if (typeof object.Rewards[i] !== "object")
                    throw TypeError(".FruitMsgTableStatusResp.Rewards: object expected");
                message.Rewards[i] = $root.com.cw.chess2.platform.CurrencyPair.fromObject(object.Rewards[i]);
            }
        }
        if (object.PlayerBetLimit) {
            if (!Array.isArray(object.PlayerBetLimit))
                throw TypeError(".FruitMsgTableStatusResp.PlayerBetLimit: array expected");
            message.PlayerBetLimit = [];
            for (var i = 0; i < object.PlayerBetLimit.length; ++i)
                if ($util.Long)
                    (message.PlayerBetLimit[i] = $util.Long.fromValue(object.PlayerBetLimit[i])).unsigned = false;
                else if (typeof object.PlayerBetLimit[i] === "string")
                    message.PlayerBetLimit[i] = parseInt(object.PlayerBetLimit[i], 10);
                else if (typeof object.PlayerBetLimit[i] === "number")
                    message.PlayerBetLimit[i] = object.PlayerBetLimit[i];
                else if (typeof object.PlayerBetLimit[i] === "object")
                    message.PlayerBetLimit[i] = new $util.LongBits(object.PlayerBetLimit[i].low >>> 0, object.PlayerBetLimit[i].high >>> 0).toNumber();
        }
        if (object.SeatPlayers) {
            if (!Array.isArray(object.SeatPlayers))
                throw TypeError(".FruitMsgTableStatusResp.SeatPlayers: array expected");
            message.SeatPlayers = [];
            for (var i = 0; i < object.SeatPlayers.length; ++i) {
                if (typeof object.SeatPlayers[i] !== "object")
                    throw TypeError(".FruitMsgTableStatusResp.SeatPlayers: object expected");
                message.SeatPlayers[i] = $root.pb.SeatPlayer.fromObject(object.SeatPlayers[i]);
            }
        }
        if (object.Rebet != null)
            message.Rebet = object.Rebet >>> 0;
        if (object.BetMin != null)
            if ($util.Long)
                (message.BetMin = $util.Long.fromValue(object.BetMin)).unsigned = false;
            else if (typeof object.BetMin === "string")
                message.BetMin = parseInt(object.BetMin, 10);
            else if (typeof object.BetMin === "number")
                message.BetMin = object.BetMin;
            else if (typeof object.BetMin === "object")
                message.BetMin = new $util.LongBits(object.BetMin.low >>> 0, object.BetMin.high >>> 0).toNumber();
        if (object.AreaCoins) {
            if (!Array.isArray(object.AreaCoins))
                throw TypeError(".FruitMsgTableStatusResp.AreaCoins: array expected");
            message.AreaCoins = [];
            for (var i = 0; i < object.AreaCoins.length; ++i) {
                if (typeof object.AreaCoins[i] !== "object")
                    throw TypeError(".FruitMsgTableStatusResp.AreaCoins: object expected");
                message.AreaCoins[i] = $root.pb.ArrayUInt32.fromObject(object.AreaCoins[i]);
            }
        }
        if (object.NewBetAmounts) {
            if (!Array.isArray(object.NewBetAmounts))
                throw TypeError(".FruitMsgTableStatusResp.NewBetAmounts: array expected");
            message.NewBetAmounts = [];
            for (var i = 0; i < object.NewBetAmounts.length; ++i)
                message.NewBetAmounts[i] = object.NewBetAmounts[i] >>> 0;
        }
        if (object.BetAmountsLevel) {
            if (!Array.isArray(object.BetAmountsLevel))
                throw TypeError(".FruitMsgTableStatusResp.BetAmountsLevel: array expected");
            message.BetAmountsLevel = [];
            for (var i = 0; i < object.BetAmountsLevel.length; ++i)
                message.BetAmountsLevel[i] = object.BetAmountsLevel[i] >>> 0;
        }
        if (object.Round != null)
            if ($util.Long)
                (message.Round = $util.Long.fromValue(object.Round)).unsigned = false;
            else if (typeof object.Round === "string")
                message.Round = parseInt(object.Round, 10);
            else if (typeof object.Round === "number")
                message.Round = object.Round;
            else if (typeof object.Round === "object")
                message.Round = new $util.LongBits(object.Round.low >>> 0, object.Round.high >>> 0).toNumber();
        if (object.TodayWinSet != null)
            message.TodayWinSet = object.TodayWinSet >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FruitMsgTableStatusResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FruitMsgTableStatusResp
     * @static
     * @param {FruitMsgTableStatusResp} message FruitMsgTableStatusResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FruitMsgTableStatusResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.PlayerBet = [];
            object.Multiple = [];
            object.BetAmounts = [];
            object.Rewards = [];
            object.PlayerBetLimit = [];
            object.SeatPlayers = [];
            object.AreaCoins = [];
            object.NewBetAmounts = [];
            object.BetAmountsLevel = [];
        }
        if (options.defaults) {
            object.PlayersCount = 0;
            object.User = null;
            object.Status = options.enums === String ? "GameStatusInvalid" : 0;
            object.TimeLeft = 0;
            object.Result = 0;
            object.ProductID = 0;
            object.Rebet = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BetMin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BetMin = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Round = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Round = options.longs === String ? "0" : 0;
            object.TodayWinSet = 0;
        }
        if (message.PlayersCount != null && message.hasOwnProperty("PlayersCount"))
            object.PlayersCount = message.PlayersCount;
        if (message.User != null && message.hasOwnProperty("User"))
            object.User = $root.pb.GameUser.toObject(message.User, options);
        if (message.Status != null && message.hasOwnProperty("Status"))
            object.Status = options.enums === String ? $root.pb.GameStatus[message.Status] : message.Status;
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            object.TimeLeft = message.TimeLeft;
        if (message.PlayerBet && message.PlayerBet.length) {
            object.PlayerBet = [];
            for (var j = 0; j < message.PlayerBet.length; ++j)
                object.PlayerBet[j] = $root.pb.ArrayUInt32.toObject(message.PlayerBet[j], options);
        }
        if (message.Multiple && message.Multiple.length) {
            object.Multiple = [];
            for (var j = 0; j < message.Multiple.length; ++j)
                object.Multiple[j] = message.Multiple[j];
        }
        if (message.BetAmounts && message.BetAmounts.length) {
            object.BetAmounts = [];
            for (var j = 0; j < message.BetAmounts.length; ++j)
                object.BetAmounts[j] = message.BetAmounts[j];
        }
        if (message.Result != null && message.hasOwnProperty("Result"))
            object.Result = message.Result;
        if (message.ProductID != null && message.hasOwnProperty("ProductID"))
            object.ProductID = message.ProductID;
        if (message.Rewards && message.Rewards.length) {
            object.Rewards = [];
            for (var j = 0; j < message.Rewards.length; ++j)
                object.Rewards[j] = $root.com.cw.chess2.platform.CurrencyPair.toObject(message.Rewards[j], options);
        }
        if (message.PlayerBetLimit && message.PlayerBetLimit.length) {
            object.PlayerBetLimit = [];
            for (var j = 0; j < message.PlayerBetLimit.length; ++j)
                if (typeof message.PlayerBetLimit[j] === "number")
                    object.PlayerBetLimit[j] = options.longs === String ? String(message.PlayerBetLimit[j]) : message.PlayerBetLimit[j];
                else
                    object.PlayerBetLimit[j] = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerBetLimit[j]) : options.longs === Number ? new $util.LongBits(message.PlayerBetLimit[j].low >>> 0, message.PlayerBetLimit[j].high >>> 0).toNumber() : message.PlayerBetLimit[j];
        }
        if (message.SeatPlayers && message.SeatPlayers.length) {
            object.SeatPlayers = [];
            for (var j = 0; j < message.SeatPlayers.length; ++j)
                object.SeatPlayers[j] = $root.pb.SeatPlayer.toObject(message.SeatPlayers[j], options);
        }
        if (message.Rebet != null && message.hasOwnProperty("Rebet"))
            object.Rebet = message.Rebet;
        if (message.BetMin != null && message.hasOwnProperty("BetMin"))
            if (typeof message.BetMin === "number")
                object.BetMin = options.longs === String ? String(message.BetMin) : message.BetMin;
            else
                object.BetMin = options.longs === String ? $util.Long.prototype.toString.call(message.BetMin) : options.longs === Number ? new $util.LongBits(message.BetMin.low >>> 0, message.BetMin.high >>> 0).toNumber() : message.BetMin;
        if (message.AreaCoins && message.AreaCoins.length) {
            object.AreaCoins = [];
            for (var j = 0; j < message.AreaCoins.length; ++j)
                object.AreaCoins[j] = $root.pb.ArrayUInt32.toObject(message.AreaCoins[j], options);
        }
        if (message.NewBetAmounts && message.NewBetAmounts.length) {
            object.NewBetAmounts = [];
            for (var j = 0; j < message.NewBetAmounts.length; ++j)
                object.NewBetAmounts[j] = message.NewBetAmounts[j];
        }
        if (message.BetAmountsLevel && message.BetAmountsLevel.length) {
            object.BetAmountsLevel = [];
            for (var j = 0; j < message.BetAmountsLevel.length; ++j)
                object.BetAmountsLevel[j] = message.BetAmountsLevel[j];
        }
        if (message.Round != null && message.hasOwnProperty("Round"))
            if (typeof message.Round === "number")
                object.Round = options.longs === String ? String(message.Round) : message.Round;
            else
                object.Round = options.longs === String ? $util.Long.prototype.toString.call(message.Round) : options.longs === Number ? new $util.LongBits(message.Round.low >>> 0, message.Round.high >>> 0).toNumber() : message.Round;
        if (message.TodayWinSet != null && message.hasOwnProperty("TodayWinSet"))
            object.TodayWinSet = message.TodayWinSet;
        return object;
    };

    /**
     * Converts this FruitMsgTableStatusResp to JSON.
     * @function toJSON
     * @memberof FruitMsgTableStatusResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FruitMsgTableStatusResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FruitMsgTableStatusResp;
})();

$root.FruitMsgGameStartResp = (function() {

    /**
     * Properties of a FruitMsgGameStartResp.
     * @exports IFruitMsgGameStartResp
     * @interface IFruitMsgGameStartResp
     * @property {number|null} [TimeLeft] FruitMsgGameStartResp TimeLeft
     * @property {number|Long|null} [Round] FruitMsgGameStartResp Round
     */

    /**
     * Constructs a new FruitMsgGameStartResp.
     * @exports FruitMsgGameStartResp
     * @classdesc Represents a FruitMsgGameStartResp.
     * @implements IFruitMsgGameStartResp
     * @constructor
     * @param {IFruitMsgGameStartResp=} [properties] Properties to set
     */
    function FruitMsgGameStartResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FruitMsgGameStartResp TimeLeft.
     * @member {number} TimeLeft
     * @memberof FruitMsgGameStartResp
     * @instance
     */
    FruitMsgGameStartResp.prototype.TimeLeft = 0;

    /**
     * FruitMsgGameStartResp Round.
     * @member {number|Long} Round
     * @memberof FruitMsgGameStartResp
     * @instance
     */
    FruitMsgGameStartResp.prototype.Round = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new FruitMsgGameStartResp instance using the specified properties.
     * @function create
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {IFruitMsgGameStartResp=} [properties] Properties to set
     * @returns {FruitMsgGameStartResp} FruitMsgGameStartResp instance
     */
    FruitMsgGameStartResp.create = function create(properties) {
        return new FruitMsgGameStartResp(properties);
    };

    /**
     * Encodes the specified FruitMsgGameStartResp message. Does not implicitly {@link FruitMsgGameStartResp.verify|verify} messages.
     * @function encode
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {IFruitMsgGameStartResp} message FruitMsgGameStartResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgGameStartResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.TimeLeft != null && Object.hasOwnProperty.call(message, "TimeLeft"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.TimeLeft);
        if (message.Round != null && Object.hasOwnProperty.call(message, "Round"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Round);
        return writer;
    };

    /**
     * Encodes the specified FruitMsgGameStartResp message, length delimited. Does not implicitly {@link FruitMsgGameStartResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {IFruitMsgGameStartResp} message FruitMsgGameStartResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgGameStartResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FruitMsgGameStartResp message from the specified reader or buffer.
     * @function decode
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FruitMsgGameStartResp} FruitMsgGameStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgGameStartResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FruitMsgGameStartResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.TimeLeft = reader.uint32();
                break;
            case 2:
                message.Round = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FruitMsgGameStartResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FruitMsgGameStartResp} FruitMsgGameStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgGameStartResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FruitMsgGameStartResp message.
     * @function verify
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FruitMsgGameStartResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            if (!$util.isInteger(message.TimeLeft))
                return "TimeLeft: integer expected";
        if (message.Round != null && message.hasOwnProperty("Round"))
            if (!$util.isInteger(message.Round) && !(message.Round && $util.isInteger(message.Round.low) && $util.isInteger(message.Round.high)))
                return "Round: integer|Long expected";
        return null;
    };

    /**
     * Creates a FruitMsgGameStartResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FruitMsgGameStartResp} FruitMsgGameStartResp
     */
    FruitMsgGameStartResp.fromObject = function fromObject(object) {
        if (object instanceof $root.FruitMsgGameStartResp)
            return object;
        var message = new $root.FruitMsgGameStartResp();
        if (object.TimeLeft != null)
            message.TimeLeft = object.TimeLeft >>> 0;
        if (object.Round != null)
            if ($util.Long)
                (message.Round = $util.Long.fromValue(object.Round)).unsigned = false;
            else if (typeof object.Round === "string")
                message.Round = parseInt(object.Round, 10);
            else if (typeof object.Round === "number")
                message.Round = object.Round;
            else if (typeof object.Round === "object")
                message.Round = new $util.LongBits(object.Round.low >>> 0, object.Round.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FruitMsgGameStartResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FruitMsgGameStartResp
     * @static
     * @param {FruitMsgGameStartResp} message FruitMsgGameStartResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FruitMsgGameStartResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.TimeLeft = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Round = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Round = options.longs === String ? "0" : 0;
        }
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            object.TimeLeft = message.TimeLeft;
        if (message.Round != null && message.hasOwnProperty("Round"))
            if (typeof message.Round === "number")
                object.Round = options.longs === String ? String(message.Round) : message.Round;
            else
                object.Round = options.longs === String ? $util.Long.prototype.toString.call(message.Round) : options.longs === Number ? new $util.LongBits(message.Round.low >>> 0, message.Round.high >>> 0).toNumber() : message.Round;
        return object;
    };

    /**
     * Converts this FruitMsgGameStartResp to JSON.
     * @function toJSON
     * @memberof FruitMsgGameStartResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FruitMsgGameStartResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FruitMsgGameStartResp;
})();

$root.FruitMsgGameSettleResp = (function() {

    /**
     * Properties of a FruitMsgGameSettleResp.
     * @exports IFruitMsgGameSettleResp
     * @interface IFruitMsgGameSettleResp
     * @property {number|null} [TimeLeft] FruitMsgGameSettleResp TimeLeft
     * @property {number|null} [Result] FruitMsgGameSettleResp Result
     * @property {Array.<number>|null} [Frees] FruitMsgGameSettleResp Frees
     * @property {number|Long|null} [SettleAmount] FruitMsgGameSettleResp SettleAmount
     * @property {Array.<pb.ISeatSettles>|null} [SeatSettles] FruitMsgGameSettleResp SeatSettles
     * @property {number|null} [RandomNum] FruitMsgGameSettleResp RandomNum
     * @property {Array.<IBestWinners>|null} [BestWinners] FruitMsgGameSettleResp BestWinners
     * @property {number|null} [TodayWinSet] FruitMsgGameSettleResp TodayWinSet
     */

    /**
     * Constructs a new FruitMsgGameSettleResp.
     * @exports FruitMsgGameSettleResp
     * @classdesc Represents a FruitMsgGameSettleResp.
     * @implements IFruitMsgGameSettleResp
     * @constructor
     * @param {IFruitMsgGameSettleResp=} [properties] Properties to set
     */
    function FruitMsgGameSettleResp(properties) {
        this.Frees = [];
        this.SeatSettles = [];
        this.BestWinners = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FruitMsgGameSettleResp TimeLeft.
     * @member {number} TimeLeft
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.TimeLeft = 0;

    /**
     * FruitMsgGameSettleResp Result.
     * @member {number} Result
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.Result = 0;

    /**
     * FruitMsgGameSettleResp Frees.
     * @member {Array.<number>} Frees
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.Frees = $util.emptyArray;

    /**
     * FruitMsgGameSettleResp SettleAmount.
     * @member {number|Long} SettleAmount
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.SettleAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FruitMsgGameSettleResp SeatSettles.
     * @member {Array.<pb.ISeatSettles>} SeatSettles
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.SeatSettles = $util.emptyArray;

    /**
     * FruitMsgGameSettleResp RandomNum.
     * @member {number} RandomNum
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.RandomNum = 0;

    /**
     * FruitMsgGameSettleResp BestWinners.
     * @member {Array.<IBestWinners>} BestWinners
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.BestWinners = $util.emptyArray;

    /**
     * FruitMsgGameSettleResp TodayWinSet.
     * @member {number} TodayWinSet
     * @memberof FruitMsgGameSettleResp
     * @instance
     */
    FruitMsgGameSettleResp.prototype.TodayWinSet = 0;

    /**
     * Creates a new FruitMsgGameSettleResp instance using the specified properties.
     * @function create
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {IFruitMsgGameSettleResp=} [properties] Properties to set
     * @returns {FruitMsgGameSettleResp} FruitMsgGameSettleResp instance
     */
    FruitMsgGameSettleResp.create = function create(properties) {
        return new FruitMsgGameSettleResp(properties);
    };

    /**
     * Encodes the specified FruitMsgGameSettleResp message. Does not implicitly {@link FruitMsgGameSettleResp.verify|verify} messages.
     * @function encode
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {IFruitMsgGameSettleResp} message FruitMsgGameSettleResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgGameSettleResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.TimeLeft != null && Object.hasOwnProperty.call(message, "TimeLeft"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.TimeLeft);
        if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Result);
        if (message.Frees != null && message.Frees.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.Frees.length; ++i)
                writer.uint32(message.Frees[i]);
            writer.ldelim();
        }
        if (message.SettleAmount != null && Object.hasOwnProperty.call(message, "SettleAmount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.SettleAmount);
        if (message.SeatSettles != null && message.SeatSettles.length)
            for (var i = 0; i < message.SeatSettles.length; ++i)
                $root.pb.SeatSettles.encode(message.SeatSettles[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.RandomNum != null && Object.hasOwnProperty.call(message, "RandomNum"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.RandomNum);
        if (message.BestWinners != null && message.BestWinners.length)
            for (var i = 0; i < message.BestWinners.length; ++i)
                $root.BestWinners.encode(message.BestWinners[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.TodayWinSet != null && Object.hasOwnProperty.call(message, "TodayWinSet"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.TodayWinSet);
        return writer;
    };

    /**
     * Encodes the specified FruitMsgGameSettleResp message, length delimited. Does not implicitly {@link FruitMsgGameSettleResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {IFruitMsgGameSettleResp} message FruitMsgGameSettleResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgGameSettleResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FruitMsgGameSettleResp message from the specified reader or buffer.
     * @function decode
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FruitMsgGameSettleResp} FruitMsgGameSettleResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgGameSettleResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FruitMsgGameSettleResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.TimeLeft = reader.uint32();
                break;
            case 2:
                message.Result = reader.uint32();
                break;
            case 3:
                if (!(message.Frees && message.Frees.length))
                    message.Frees = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.Frees.push(reader.uint32());
                } else
                    message.Frees.push(reader.uint32());
                break;
            case 4:
                message.SettleAmount = reader.int64();
                break;
            case 5:
                if (!(message.SeatSettles && message.SeatSettles.length))
                    message.SeatSettles = [];
                message.SeatSettles.push($root.pb.SeatSettles.decode(reader, reader.uint32()));
                break;
            case 6:
                message.RandomNum = reader.uint32();
                break;
            case 7:
                if (!(message.BestWinners && message.BestWinners.length))
                    message.BestWinners = [];
                message.BestWinners.push($root.BestWinners.decode(reader, reader.uint32()));
                break;
            case 8:
                message.TodayWinSet = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FruitMsgGameSettleResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FruitMsgGameSettleResp} FruitMsgGameSettleResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgGameSettleResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FruitMsgGameSettleResp message.
     * @function verify
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FruitMsgGameSettleResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            if (!$util.isInteger(message.TimeLeft))
                return "TimeLeft: integer expected";
        if (message.Result != null && message.hasOwnProperty("Result"))
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
        if (message.Frees != null && message.hasOwnProperty("Frees")) {
            if (!Array.isArray(message.Frees))
                return "Frees: array expected";
            for (var i = 0; i < message.Frees.length; ++i)
                if (!$util.isInteger(message.Frees[i]))
                    return "Frees: integer[] expected";
        }
        if (message.SettleAmount != null && message.hasOwnProperty("SettleAmount"))
            if (!$util.isInteger(message.SettleAmount) && !(message.SettleAmount && $util.isInteger(message.SettleAmount.low) && $util.isInteger(message.SettleAmount.high)))
                return "SettleAmount: integer|Long expected";
        if (message.SeatSettles != null && message.hasOwnProperty("SeatSettles")) {
            if (!Array.isArray(message.SeatSettles))
                return "SeatSettles: array expected";
            for (var i = 0; i < message.SeatSettles.length; ++i) {
                var error = $root.pb.SeatSettles.verify(message.SeatSettles[i]);
                if (error)
                    return "SeatSettles." + error;
            }
        }
        if (message.RandomNum != null && message.hasOwnProperty("RandomNum"))
            if (!$util.isInteger(message.RandomNum))
                return "RandomNum: integer expected";
        if (message.BestWinners != null && message.hasOwnProperty("BestWinners")) {
            if (!Array.isArray(message.BestWinners))
                return "BestWinners: array expected";
            for (var i = 0; i < message.BestWinners.length; ++i) {
                var error = $root.BestWinners.verify(message.BestWinners[i]);
                if (error)
                    return "BestWinners." + error;
            }
        }
        if (message.TodayWinSet != null && message.hasOwnProperty("TodayWinSet"))
            if (!$util.isInteger(message.TodayWinSet))
                return "TodayWinSet: integer expected";
        return null;
    };

    /**
     * Creates a FruitMsgGameSettleResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FruitMsgGameSettleResp} FruitMsgGameSettleResp
     */
    FruitMsgGameSettleResp.fromObject = function fromObject(object) {
        if (object instanceof $root.FruitMsgGameSettleResp)
            return object;
        var message = new $root.FruitMsgGameSettleResp();
        if (object.TimeLeft != null)
            message.TimeLeft = object.TimeLeft >>> 0;
        if (object.Result != null)
            message.Result = object.Result >>> 0;
        if (object.Frees) {
            if (!Array.isArray(object.Frees))
                throw TypeError(".FruitMsgGameSettleResp.Frees: array expected");
            message.Frees = [];
            for (var i = 0; i < object.Frees.length; ++i)
                message.Frees[i] = object.Frees[i] >>> 0;
        }
        if (object.SettleAmount != null)
            if ($util.Long)
                (message.SettleAmount = $util.Long.fromValue(object.SettleAmount)).unsigned = false;
            else if (typeof object.SettleAmount === "string")
                message.SettleAmount = parseInt(object.SettleAmount, 10);
            else if (typeof object.SettleAmount === "number")
                message.SettleAmount = object.SettleAmount;
            else if (typeof object.SettleAmount === "object")
                message.SettleAmount = new $util.LongBits(object.SettleAmount.low >>> 0, object.SettleAmount.high >>> 0).toNumber();
        if (object.SeatSettles) {
            if (!Array.isArray(object.SeatSettles))
                throw TypeError(".FruitMsgGameSettleResp.SeatSettles: array expected");
            message.SeatSettles = [];
            for (var i = 0; i < object.SeatSettles.length; ++i) {
                if (typeof object.SeatSettles[i] !== "object")
                    throw TypeError(".FruitMsgGameSettleResp.SeatSettles: object expected");
                message.SeatSettles[i] = $root.pb.SeatSettles.fromObject(object.SeatSettles[i]);
            }
        }
        if (object.RandomNum != null)
            message.RandomNum = object.RandomNum >>> 0;
        if (object.BestWinners) {
            if (!Array.isArray(object.BestWinners))
                throw TypeError(".FruitMsgGameSettleResp.BestWinners: array expected");
            message.BestWinners = [];
            for (var i = 0; i < object.BestWinners.length; ++i) {
                if (typeof object.BestWinners[i] !== "object")
                    throw TypeError(".FruitMsgGameSettleResp.BestWinners: object expected");
                message.BestWinners[i] = $root.BestWinners.fromObject(object.BestWinners[i]);
            }
        }
        if (object.TodayWinSet != null)
            message.TodayWinSet = object.TodayWinSet >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a FruitMsgGameSettleResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FruitMsgGameSettleResp
     * @static
     * @param {FruitMsgGameSettleResp} message FruitMsgGameSettleResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FruitMsgGameSettleResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Frees = [];
            object.SeatSettles = [];
            object.BestWinners = [];
        }
        if (options.defaults) {
            object.TimeLeft = 0;
            object.Result = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.SettleAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.SettleAmount = options.longs === String ? "0" : 0;
            object.RandomNum = 0;
            object.TodayWinSet = 0;
        }
        if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
            object.TimeLeft = message.TimeLeft;
        if (message.Result != null && message.hasOwnProperty("Result"))
            object.Result = message.Result;
        if (message.Frees && message.Frees.length) {
            object.Frees = [];
            for (var j = 0; j < message.Frees.length; ++j)
                object.Frees[j] = message.Frees[j];
        }
        if (message.SettleAmount != null && message.hasOwnProperty("SettleAmount"))
            if (typeof message.SettleAmount === "number")
                object.SettleAmount = options.longs === String ? String(message.SettleAmount) : message.SettleAmount;
            else
                object.SettleAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SettleAmount) : options.longs === Number ? new $util.LongBits(message.SettleAmount.low >>> 0, message.SettleAmount.high >>> 0).toNumber() : message.SettleAmount;
        if (message.SeatSettles && message.SeatSettles.length) {
            object.SeatSettles = [];
            for (var j = 0; j < message.SeatSettles.length; ++j)
                object.SeatSettles[j] = $root.pb.SeatSettles.toObject(message.SeatSettles[j], options);
        }
        if (message.RandomNum != null && message.hasOwnProperty("RandomNum"))
            object.RandomNum = message.RandomNum;
        if (message.BestWinners && message.BestWinners.length) {
            object.BestWinners = [];
            for (var j = 0; j < message.BestWinners.length; ++j)
                object.BestWinners[j] = $root.BestWinners.toObject(message.BestWinners[j], options);
        }
        if (message.TodayWinSet != null && message.hasOwnProperty("TodayWinSet"))
            object.TodayWinSet = message.TodayWinSet;
        return object;
    };

    /**
     * Converts this FruitMsgGameSettleResp to JSON.
     * @function toJSON
     * @memberof FruitMsgGameSettleResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FruitMsgGameSettleResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FruitMsgGameSettleResp;
})();

$root.BestWinners = (function() {

    /**
     * Properties of a BestWinners.
     * @exports IBestWinners
     * @interface IBestWinners
     * @property {string|null} [Avatar] BestWinners Avatar
     * @property {number|null} [Sex] BestWinners Sex
     * @property {string|null} [Nick] BestWinners Nick
     * @property {number|Long|null} [Win] BestWinners Win
     */

    /**
     * Constructs a new BestWinners.
     * @exports BestWinners
     * @classdesc Represents a BestWinners.
     * @implements IBestWinners
     * @constructor
     * @param {IBestWinners=} [properties] Properties to set
     */
    function BestWinners(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BestWinners Avatar.
     * @member {string} Avatar
     * @memberof BestWinners
     * @instance
     */
    BestWinners.prototype.Avatar = "";

    /**
     * BestWinners Sex.
     * @member {number} Sex
     * @memberof BestWinners
     * @instance
     */
    BestWinners.prototype.Sex = 0;

    /**
     * BestWinners Nick.
     * @member {string} Nick
     * @memberof BestWinners
     * @instance
     */
    BestWinners.prototype.Nick = "";

    /**
     * BestWinners Win.
     * @member {number|Long} Win
     * @memberof BestWinners
     * @instance
     */
    BestWinners.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BestWinners instance using the specified properties.
     * @function create
     * @memberof BestWinners
     * @static
     * @param {IBestWinners=} [properties] Properties to set
     * @returns {BestWinners} BestWinners instance
     */
    BestWinners.create = function create(properties) {
        return new BestWinners(properties);
    };

    /**
     * Encodes the specified BestWinners message. Does not implicitly {@link BestWinners.verify|verify} messages.
     * @function encode
     * @memberof BestWinners
     * @static
     * @param {IBestWinners} message BestWinners message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BestWinners.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Avatar);
        if (message.Sex != null && Object.hasOwnProperty.call(message, "Sex"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Sex);
        if (message.Nick != null && Object.hasOwnProperty.call(message, "Nick"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Nick);
        if (message.Win != null && Object.hasOwnProperty.call(message, "Win"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Win);
        return writer;
    };

    /**
     * Encodes the specified BestWinners message, length delimited. Does not implicitly {@link BestWinners.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BestWinners
     * @static
     * @param {IBestWinners} message BestWinners message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BestWinners.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BestWinners message from the specified reader or buffer.
     * @function decode
     * @memberof BestWinners
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BestWinners} BestWinners
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BestWinners.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BestWinners();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Avatar = reader.string();
                break;
            case 2:
                message.Sex = reader.uint32();
                break;
            case 3:
                message.Nick = reader.string();
                break;
            case 4:
                message.Win = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BestWinners message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BestWinners
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BestWinners} BestWinners
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BestWinners.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BestWinners message.
     * @function verify
     * @memberof BestWinners
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BestWinners.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Avatar != null && message.hasOwnProperty("Avatar"))
            if (!$util.isString(message.Avatar))
                return "Avatar: string expected";
        if (message.Sex != null && message.hasOwnProperty("Sex"))
            if (!$util.isInteger(message.Sex))
                return "Sex: integer expected";
        if (message.Nick != null && message.hasOwnProperty("Nick"))
            if (!$util.isString(message.Nick))
                return "Nick: string expected";
        if (message.Win != null && message.hasOwnProperty("Win"))
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
        return null;
    };

    /**
     * Creates a BestWinners message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BestWinners
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BestWinners} BestWinners
     */
    BestWinners.fromObject = function fromObject(object) {
        if (object instanceof $root.BestWinners)
            return object;
        var message = new $root.BestWinners();
        if (object.Avatar != null)
            message.Avatar = String(object.Avatar);
        if (object.Sex != null)
            message.Sex = object.Sex >>> 0;
        if (object.Nick != null)
            message.Nick = String(object.Nick);
        if (object.Win != null)
            if ($util.Long)
                (message.Win = $util.Long.fromValue(object.Win)).unsigned = false;
            else if (typeof object.Win === "string")
                message.Win = parseInt(object.Win, 10);
            else if (typeof object.Win === "number")
                message.Win = object.Win;
            else if (typeof object.Win === "object")
                message.Win = new $util.LongBits(object.Win.low >>> 0, object.Win.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BestWinners message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BestWinners
     * @static
     * @param {BestWinners} message BestWinners
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BestWinners.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Avatar = "";
            object.Sex = 0;
            object.Nick = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.Win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.Win = options.longs === String ? "0" : 0;
        }
        if (message.Avatar != null && message.hasOwnProperty("Avatar"))
            object.Avatar = message.Avatar;
        if (message.Sex != null && message.hasOwnProperty("Sex"))
            object.Sex = message.Sex;
        if (message.Nick != null && message.hasOwnProperty("Nick"))
            object.Nick = message.Nick;
        if (message.Win != null && message.hasOwnProperty("Win"))
            if (typeof message.Win === "number")
                object.Win = options.longs === String ? String(message.Win) : message.Win;
            else
                object.Win = options.longs === String ? $util.Long.prototype.toString.call(message.Win) : options.longs === Number ? new $util.LongBits(message.Win.low >>> 0, message.Win.high >>> 0).toNumber() : message.Win;
        return object;
    };

    /**
     * Converts this BestWinners to JSON.
     * @function toJSON
     * @memberof BestWinners
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BestWinners.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BestWinners;
})();

$root.FruitMsgHistoryResp = (function() {

    /**
     * Properties of a FruitMsgHistoryResp.
     * @exports IFruitMsgHistoryResp
     * @interface IFruitMsgHistoryResp
     * @property {Array.<number>|null} [Results] FruitMsgHistoryResp Results
     */

    /**
     * Constructs a new FruitMsgHistoryResp.
     * @exports FruitMsgHistoryResp
     * @classdesc Represents a FruitMsgHistoryResp.
     * @implements IFruitMsgHistoryResp
     * @constructor
     * @param {IFruitMsgHistoryResp=} [properties] Properties to set
     */
    function FruitMsgHistoryResp(properties) {
        this.Results = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FruitMsgHistoryResp Results.
     * @member {Array.<number>} Results
     * @memberof FruitMsgHistoryResp
     * @instance
     */
    FruitMsgHistoryResp.prototype.Results = $util.emptyArray;

    /**
     * Creates a new FruitMsgHistoryResp instance using the specified properties.
     * @function create
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {IFruitMsgHistoryResp=} [properties] Properties to set
     * @returns {FruitMsgHistoryResp} FruitMsgHistoryResp instance
     */
    FruitMsgHistoryResp.create = function create(properties) {
        return new FruitMsgHistoryResp(properties);
    };

    /**
     * Encodes the specified FruitMsgHistoryResp message. Does not implicitly {@link FruitMsgHistoryResp.verify|verify} messages.
     * @function encode
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {IFruitMsgHistoryResp} message FruitMsgHistoryResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgHistoryResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Results != null && message.Results.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.Results.length; ++i)
                writer.uint32(message.Results[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified FruitMsgHistoryResp message, length delimited. Does not implicitly {@link FruitMsgHistoryResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {IFruitMsgHistoryResp} message FruitMsgHistoryResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FruitMsgHistoryResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FruitMsgHistoryResp message from the specified reader or buffer.
     * @function decode
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FruitMsgHistoryResp} FruitMsgHistoryResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgHistoryResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FruitMsgHistoryResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.Results && message.Results.length))
                    message.Results = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.Results.push(reader.uint32());
                } else
                    message.Results.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FruitMsgHistoryResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FruitMsgHistoryResp} FruitMsgHistoryResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FruitMsgHistoryResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FruitMsgHistoryResp message.
     * @function verify
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FruitMsgHistoryResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Results != null && message.hasOwnProperty("Results")) {
            if (!Array.isArray(message.Results))
                return "Results: array expected";
            for (var i = 0; i < message.Results.length; ++i)
                if (!$util.isInteger(message.Results[i]))
                    return "Results: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a FruitMsgHistoryResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FruitMsgHistoryResp} FruitMsgHistoryResp
     */
    FruitMsgHistoryResp.fromObject = function fromObject(object) {
        if (object instanceof $root.FruitMsgHistoryResp)
            return object;
        var message = new $root.FruitMsgHistoryResp();
        if (object.Results) {
            if (!Array.isArray(object.Results))
                throw TypeError(".FruitMsgHistoryResp.Results: array expected");
            message.Results = [];
            for (var i = 0; i < object.Results.length; ++i)
                message.Results[i] = object.Results[i] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a FruitMsgHistoryResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FruitMsgHistoryResp
     * @static
     * @param {FruitMsgHistoryResp} message FruitMsgHistoryResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FruitMsgHistoryResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Results = [];
        if (message.Results && message.Results.length) {
            object.Results = [];
            for (var j = 0; j < message.Results.length; ++j)
                object.Results[j] = message.Results[j];
        }
        return object;
    };

    /**
     * Converts this FruitMsgHistoryResp to JSON.
     * @function toJSON
     * @memberof FruitMsgHistoryResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FruitMsgHistoryResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FruitMsgHistoryResp;
})();

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * MillionProtocol enum.
     * @name pb.MillionProtocol
     * @enum {number}
     * @property {number} MillionInvalid=0 MillionInvalid value
     * @property {number} MillionTableStatusReq=1 MillionTableStatusReq value
     * @property {number} MillionTableStatusResp=2 MillionTableStatusResp value
     * @property {number} MillionGameStartResp=4 MillionGameStartResp value
     * @property {number} MillionGameSettleResp=6 MillionGameSettleResp value
     * @property {number} MillionBetReq=7 MillionBetReq value
     * @property {number} MillionBetResp=8 MillionBetResp value
     * @property {number} MillionBetBroadcast=10 MillionBetBroadcast value
     * @property {number} MillionHistoryReq=11 MillionHistoryReq value
     * @property {number} MillionHistoryResp=12 MillionHistoryResp value
     * @property {number} MillionChatReq=13 MillionChatReq value
     * @property {number} MillionChatResp=14 MillionChatResp value
     * @property {number} MillionPlayerListReq=15 MillionPlayerListReq value
     * @property {number} MillionPlayerListResp=16 MillionPlayerListResp value
     * @property {number} MillionLeaveReq=17 MillionLeaveReq value
     * @property {number} MillionLeaveResp=18 MillionLeaveResp value
     * @property {number} MillionPlayerNumResp=20 MillionPlayerNumResp value
     * @property {number} MillionSitdownReq=21 MillionSitdownReq value
     * @property {number} MillionSitdownResp=22 MillionSitdownResp value
     * @property {number} MillionRebetReq=23 MillionRebetReq value
     * @property {number} MillionRebetResp=24 MillionRebetResp value
     * @property {number} MillionChangeTableReq=25 MillionChangeTableReq value
     * @property {number} MillionChangeTableResp=26 MillionChangeTableResp value
     * @property {number} SlotHistoryReq=27 SlotHistoryReq value
     * @property {number} SlotHistoryResp=28 SlotHistoryResp value
     * @property {number} SlotChristmasClickReq=29 SlotChristmasClickReq value
     * @property {number} SlotChristmasInfo=30 SlotChristmasInfo value
     * @property {number} SlotChristmasGameNotice=31 SlotChristmasGameNotice value
     * @property {number} MillionAutoReq=100 MillionAutoReq value
     * @property {number} MillionAutoResp=101 MillionAutoResp value
     */
    pb.MillionProtocol = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MillionInvalid"] = 0;
        values[valuesById[1] = "MillionTableStatusReq"] = 1;
        values[valuesById[2] = "MillionTableStatusResp"] = 2;
        values[valuesById[4] = "MillionGameStartResp"] = 4;
        values[valuesById[6] = "MillionGameSettleResp"] = 6;
        values[valuesById[7] = "MillionBetReq"] = 7;
        values[valuesById[8] = "MillionBetResp"] = 8;
        values[valuesById[10] = "MillionBetBroadcast"] = 10;
        values[valuesById[11] = "MillionHistoryReq"] = 11;
        values[valuesById[12] = "MillionHistoryResp"] = 12;
        values[valuesById[13] = "MillionChatReq"] = 13;
        values[valuesById[14] = "MillionChatResp"] = 14;
        values[valuesById[15] = "MillionPlayerListReq"] = 15;
        values[valuesById[16] = "MillionPlayerListResp"] = 16;
        values[valuesById[17] = "MillionLeaveReq"] = 17;
        values[valuesById[18] = "MillionLeaveResp"] = 18;
        values[valuesById[20] = "MillionPlayerNumResp"] = 20;
        values[valuesById[21] = "MillionSitdownReq"] = 21;
        values[valuesById[22] = "MillionSitdownResp"] = 22;
        values[valuesById[23] = "MillionRebetReq"] = 23;
        values[valuesById[24] = "MillionRebetResp"] = 24;
        values[valuesById[25] = "MillionChangeTableReq"] = 25;
        values[valuesById[26] = "MillionChangeTableResp"] = 26;
        values[valuesById[27] = "SlotHistoryReq"] = 27;
        values[valuesById[28] = "SlotHistoryResp"] = 28;
        values[valuesById[29] = "SlotChristmasClickReq"] = 29;
        values[valuesById[30] = "SlotChristmasInfo"] = 30;
        values[valuesById[31] = "SlotChristmasGameNotice"] = 31;
        values[valuesById[100] = "MillionAutoReq"] = 100;
        values[valuesById[101] = "MillionAutoResp"] = 101;
        return values;
    })();

    pb.GameCommonReq = (function() {

        /**
         * Properties of a GameCommonReq.
         * @memberof pb
         * @interface IGameCommonReq
         */

        /**
         * Constructs a new GameCommonReq.
         * @memberof pb
         * @classdesc Represents a GameCommonReq.
         * @implements IGameCommonReq
         * @constructor
         * @param {pb.IGameCommonReq=} [properties] Properties to set
         */
        function GameCommonReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GameCommonReq instance using the specified properties.
         * @function create
         * @memberof pb.GameCommonReq
         * @static
         * @param {pb.IGameCommonReq=} [properties] Properties to set
         * @returns {pb.GameCommonReq} GameCommonReq instance
         */
        GameCommonReq.create = function create(properties) {
            return new GameCommonReq(properties);
        };

        /**
         * Encodes the specified GameCommonReq message. Does not implicitly {@link pb.GameCommonReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCommonReq
         * @static
         * @param {pb.IGameCommonReq} message GameCommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCommonReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GameCommonReq message, length delimited. Does not implicitly {@link pb.GameCommonReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameCommonReq
         * @static
         * @param {pb.IGameCommonReq} message GameCommonReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCommonReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameCommonReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameCommonReq} GameCommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCommonReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameCommonReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameCommonReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameCommonReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameCommonReq} GameCommonReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCommonReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameCommonReq message.
         * @function verify
         * @memberof pb.GameCommonReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameCommonReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GameCommonReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameCommonReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameCommonReq} GameCommonReq
         */
        GameCommonReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameCommonReq)
                return object;
            return new $root.pb.GameCommonReq();
        };

        /**
         * Creates a plain object from a GameCommonReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameCommonReq
         * @static
         * @param {pb.GameCommonReq} message GameCommonReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameCommonReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GameCommonReq to JSON.
         * @function toJSON
         * @memberof pb.GameCommonReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameCommonReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCommonReq;
    })();

    pb.GameCommonResp = (function() {

        /**
         * Properties of a GameCommonResp.
         * @memberof pb
         * @interface IGameCommonResp
         * @property {number|null} [result] GameCommonResp result
         */

        /**
         * Constructs a new GameCommonResp.
         * @memberof pb
         * @classdesc Represents a GameCommonResp.
         * @implements IGameCommonResp
         * @constructor
         * @param {pb.IGameCommonResp=} [properties] Properties to set
         */
        function GameCommonResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameCommonResp result.
         * @member {number} result
         * @memberof pb.GameCommonResp
         * @instance
         */
        GameCommonResp.prototype.result = 0;

        /**
         * Creates a new GameCommonResp instance using the specified properties.
         * @function create
         * @memberof pb.GameCommonResp
         * @static
         * @param {pb.IGameCommonResp=} [properties] Properties to set
         * @returns {pb.GameCommonResp} GameCommonResp instance
         */
        GameCommonResp.create = function create(properties) {
            return new GameCommonResp(properties);
        };

        /**
         * Encodes the specified GameCommonResp message. Does not implicitly {@link pb.GameCommonResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameCommonResp
         * @static
         * @param {pb.IGameCommonResp} message GameCommonResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCommonResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            return writer;
        };

        /**
         * Encodes the specified GameCommonResp message, length delimited. Does not implicitly {@link pb.GameCommonResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameCommonResp
         * @static
         * @param {pb.IGameCommonResp} message GameCommonResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCommonResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameCommonResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameCommonResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameCommonResp} GameCommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCommonResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameCommonResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameCommonResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameCommonResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameCommonResp} GameCommonResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCommonResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameCommonResp message.
         * @function verify
         * @memberof pb.GameCommonResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameCommonResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a GameCommonResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameCommonResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameCommonResp} GameCommonResp
         */
        GameCommonResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameCommonResp)
                return object;
            var message = new $root.pb.GameCommonResp();
            if (object.result != null)
                message.result = object.result >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameCommonResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameCommonResp
         * @static
         * @param {pb.GameCommonResp} message GameCommonResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameCommonResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this GameCommonResp to JSON.
         * @function toJSON
         * @memberof pb.GameCommonResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameCommonResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCommonResp;
    })();

    pb.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof pb
         * @interface IGameUser
         * @property {number|null} [uid] GameUser uid
         * @property {number|null} [real_user] GameUser real_user
         * @property {number|Long|null} [coin] GameUser coin
         * @property {string|null} [user_nick] GameUser user_nick
         * @property {string|null} [user_head] GameUser user_head
         * @property {number|null} [Status] GameUser Status
         * @property {number|null} [SubStatus] GameUser SubStatus
         * @property {number|null} [Score] GameUser Score
         */

        /**
         * Constructs a new GameUser.
         * @memberof pb
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {pb.IGameUser=} [properties] Properties to set
         */
        function GameUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameUser uid.
         * @member {number} uid
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.uid = 0;

        /**
         * GameUser real_user.
         * @member {number} real_user
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.real_user = 0;

        /**
         * GameUser coin.
         * @member {number|Long} coin
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameUser user_nick.
         * @member {string} user_nick
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.user_nick = "";

        /**
         * GameUser user_head.
         * @member {string} user_head
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.user_head = "";

        /**
         * GameUser Status.
         * @member {number} Status
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.Status = 0;

        /**
         * GameUser SubStatus.
         * @member {number} SubStatus
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.SubStatus = 0;

        /**
         * GameUser Score.
         * @member {number} Score
         * @memberof pb.GameUser
         * @instance
         */
        GameUser.prototype.Score = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof pb.GameUser
         * @static
         * @param {pb.IGameUser=} [properties] Properties to set
         * @returns {pb.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link pb.GameUser.verify|verify} messages.
         * @function encode
         * @memberof pb.GameUser
         * @static
         * @param {pb.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.real_user != null && Object.hasOwnProperty.call(message, "real_user"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.real_user);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.coin);
            if (message.user_nick != null && Object.hasOwnProperty.call(message, "user_nick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.user_nick);
            if (message.user_head != null && Object.hasOwnProperty.call(message, "user_head"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.user_head);
            if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Status);
            if (message.SubStatus != null && Object.hasOwnProperty.call(message, "SubStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.SubStatus);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.Score);
            return writer;
        };

        /**
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link pb.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameUser
         * @static
         * @param {pb.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.real_user = reader.uint32();
                    break;
                case 3:
                    message.coin = reader.uint64();
                    break;
                case 4:
                    message.user_nick = reader.string();
                    break;
                case 5:
                    message.user_head = reader.string();
                    break;
                case 6:
                    message.Status = reader.uint32();
                    break;
                case 7:
                    message.SubStatus = reader.uint32();
                    break;
                case 8:
                    message.Score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameUser message.
         * @function verify
         * @memberof pb.GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.real_user != null && message.hasOwnProperty("real_user"))
                if (!$util.isInteger(message.real_user))
                    return "real_user: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                    return "coin: integer|Long expected";
            if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                if (!$util.isString(message.user_nick))
                    return "user_nick: string expected";
            if (message.user_head != null && message.hasOwnProperty("user_head"))
                if (!$util.isString(message.user_head))
                    return "user_head: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.SubStatus != null && message.hasOwnProperty("SubStatus"))
                if (!$util.isInteger(message.SubStatus))
                    return "SubStatus: integer expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score))
                    return "Score: integer expected";
            return null;
        };

        /**
         * Creates a GameUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameUser)
                return object;
            var message = new $root.pb.GameUser();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.real_user != null)
                message.real_user = object.real_user >>> 0;
            if (object.coin != null)
                if ($util.Long)
                    (message.coin = $util.Long.fromValue(object.coin)).unsigned = true;
                else if (typeof object.coin === "string")
                    message.coin = parseInt(object.coin, 10);
                else if (typeof object.coin === "number")
                    message.coin = object.coin;
                else if (typeof object.coin === "object")
                    message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber(true);
            if (object.user_nick != null)
                message.user_nick = String(object.user_nick);
            if (object.user_head != null)
                message.user_head = String(object.user_head);
            if (object.Status != null)
                message.Status = object.Status >>> 0;
            if (object.SubStatus != null)
                message.SubStatus = object.SubStatus >>> 0;
            if (object.Score != null)
                message.Score = object.Score >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameUser
         * @static
         * @param {pb.GameUser} message GameUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.real_user = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coin = options.longs === String ? "0" : 0;
                object.user_nick = "";
                object.user_head = "";
                object.Status = 0;
                object.SubStatus = 0;
                object.Score = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.real_user != null && message.hasOwnProperty("real_user"))
                object.real_user = message.real_user;
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin === "number")
                    object.coin = options.longs === String ? String(message.coin) : message.coin;
                else
                    object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber(true) : message.coin;
            if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                object.user_nick = message.user_nick;
            if (message.user_head != null && message.hasOwnProperty("user_head"))
                object.user_head = message.user_head;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.SubStatus != null && message.hasOwnProperty("SubStatus"))
                object.SubStatus = message.SubStatus;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            return object;
        };

        /**
         * Converts this GameUser to JSON.
         * @function toJSON
         * @memberof pb.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    /**
     * GameStatus enum.
     * @name pb.GameStatus
     * @enum {number}
     * @property {number} GameStatusInvalid=0 GameStatusInvalid value
     * @property {number} GameStatusNormal=1 GameStatusNormal value
     * @property {number} GameStatusPlaying=2 GameStatusPlaying value
     * @property {number} GameStatusSettle=3 GameStatusSettle value
     */
    pb.GameStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GameStatusInvalid"] = 0;
        values[valuesById[1] = "GameStatusNormal"] = 1;
        values[valuesById[2] = "GameStatusPlaying"] = 2;
        values[valuesById[3] = "GameStatusSettle"] = 3;
        return values;
    })();

    pb.ChangeRoomResp = (function() {

        /**
         * Properties of a ChangeRoomResp.
         * @memberof pb
         * @interface IChangeRoomResp
         * @property {number|null} [Opt] ChangeRoomResp Opt
         * @property {number|null} [Type] ChangeRoomResp Type
         * @property {number|null} [ProductID] ChangeRoomResp ProductID
         * @property {Array.<com.cw.chess2.platform.ICurrencyPair>|null} [Rewards] ChangeRoomResp Rewards
         * @property {number|null} [CanChange] ChangeRoomResp CanChange
         */

        /**
         * Constructs a new ChangeRoomResp.
         * @memberof pb
         * @classdesc Represents a ChangeRoomResp.
         * @implements IChangeRoomResp
         * @constructor
         * @param {pb.IChangeRoomResp=} [properties] Properties to set
         */
        function ChangeRoomResp(properties) {
            this.Rewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeRoomResp Opt.
         * @member {number} Opt
         * @memberof pb.ChangeRoomResp
         * @instance
         */
        ChangeRoomResp.prototype.Opt = 0;

        /**
         * ChangeRoomResp Type.
         * @member {number} Type
         * @memberof pb.ChangeRoomResp
         * @instance
         */
        ChangeRoomResp.prototype.Type = 0;

        /**
         * ChangeRoomResp ProductID.
         * @member {number} ProductID
         * @memberof pb.ChangeRoomResp
         * @instance
         */
        ChangeRoomResp.prototype.ProductID = 0;

        /**
         * ChangeRoomResp Rewards.
         * @member {Array.<com.cw.chess2.platform.ICurrencyPair>} Rewards
         * @memberof pb.ChangeRoomResp
         * @instance
         */
        ChangeRoomResp.prototype.Rewards = $util.emptyArray;

        /**
         * ChangeRoomResp CanChange.
         * @member {number} CanChange
         * @memberof pb.ChangeRoomResp
         * @instance
         */
        ChangeRoomResp.prototype.CanChange = 0;

        /**
         * Creates a new ChangeRoomResp instance using the specified properties.
         * @function create
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {pb.IChangeRoomResp=} [properties] Properties to set
         * @returns {pb.ChangeRoomResp} ChangeRoomResp instance
         */
        ChangeRoomResp.create = function create(properties) {
            return new ChangeRoomResp(properties);
        };

        /**
         * Encodes the specified ChangeRoomResp message. Does not implicitly {@link pb.ChangeRoomResp.verify|verify} messages.
         * @function encode
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {pb.IChangeRoomResp} message ChangeRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Opt != null && Object.hasOwnProperty.call(message, "Opt"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Opt);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Type);
            if (message.ProductID != null && Object.hasOwnProperty.call(message, "ProductID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ProductID);
            if (message.Rewards != null && message.Rewards.length)
                for (var i = 0; i < message.Rewards.length; ++i)
                    $root.com.cw.chess2.platform.CurrencyPair.encode(message.Rewards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.CanChange != null && Object.hasOwnProperty.call(message, "CanChange"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.CanChange);
            return writer;
        };

        /**
         * Encodes the specified ChangeRoomResp message, length delimited. Does not implicitly {@link pb.ChangeRoomResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {pb.IChangeRoomResp} message ChangeRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeRoomResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ChangeRoomResp} ChangeRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ChangeRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Opt = reader.uint32();
                    break;
                case 2:
                    message.Type = reader.uint32();
                    break;
                case 3:
                    message.ProductID = reader.uint32();
                    break;
                case 4:
                    if (!(message.Rewards && message.Rewards.length))
                        message.Rewards = [];
                    message.Rewards.push($root.com.cw.chess2.platform.CurrencyPair.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.CanChange = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeRoomResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ChangeRoomResp} ChangeRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeRoomResp message.
         * @function verify
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                if (!$util.isInteger(message.Opt))
                    return "Opt: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                if (!$util.isInteger(message.ProductID))
                    return "ProductID: integer expected";
            if (message.Rewards != null && message.hasOwnProperty("Rewards")) {
                if (!Array.isArray(message.Rewards))
                    return "Rewards: array expected";
                for (var i = 0; i < message.Rewards.length; ++i) {
                    var error = $root.com.cw.chess2.platform.CurrencyPair.verify(message.Rewards[i]);
                    if (error)
                        return "Rewards." + error;
                }
            }
            if (message.CanChange != null && message.hasOwnProperty("CanChange"))
                if (!$util.isInteger(message.CanChange))
                    return "CanChange: integer expected";
            return null;
        };

        /**
         * Creates a ChangeRoomResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ChangeRoomResp} ChangeRoomResp
         */
        ChangeRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ChangeRoomResp)
                return object;
            var message = new $root.pb.ChangeRoomResp();
            if (object.Opt != null)
                message.Opt = object.Opt >>> 0;
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.ProductID != null)
                message.ProductID = object.ProductID >>> 0;
            if (object.Rewards) {
                if (!Array.isArray(object.Rewards))
                    throw TypeError(".pb.ChangeRoomResp.Rewards: array expected");
                message.Rewards = [];
                for (var i = 0; i < object.Rewards.length; ++i) {
                    if (typeof object.Rewards[i] !== "object")
                        throw TypeError(".pb.ChangeRoomResp.Rewards: object expected");
                    message.Rewards[i] = $root.com.cw.chess2.platform.CurrencyPair.fromObject(object.Rewards[i]);
                }
            }
            if (object.CanChange != null)
                message.CanChange = object.CanChange >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ChangeRoomResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ChangeRoomResp
         * @static
         * @param {pb.ChangeRoomResp} message ChangeRoomResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Rewards = [];
            if (options.defaults) {
                object.Opt = 0;
                object.Type = 0;
                object.ProductID = 0;
                object.CanChange = 0;
            }
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                object.Opt = message.Opt;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                object.ProductID = message.ProductID;
            if (message.Rewards && message.Rewards.length) {
                object.Rewards = [];
                for (var j = 0; j < message.Rewards.length; ++j)
                    object.Rewards[j] = $root.com.cw.chess2.platform.CurrencyPair.toObject(message.Rewards[j], options);
            }
            if (message.CanChange != null && message.hasOwnProperty("CanChange"))
                object.CanChange = message.CanChange;
            return object;
        };

        /**
         * Converts this ChangeRoomResp to JSON.
         * @function toJSON
         * @memberof pb.ChangeRoomResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeRoomResp;
    })();

    pb.RankPlayer = (function() {

        /**
         * Properties of a RankPlayer.
         * @memberof pb
         * @interface IRankPlayer
         * @property {string|null} [Avatar] RankPlayer Avatar
         * @property {number|Long|null} [BetAmount] RankPlayer BetAmount
         * @property {number|Long|null} [Carry] RankPlayer Carry
         * @property {string|null} [Nick] RankPlayer Nick
         * @property {number|null} [UID] RankPlayer UID
         */

        /**
         * Constructs a new RankPlayer.
         * @memberof pb
         * @classdesc Represents a RankPlayer.
         * @implements IRankPlayer
         * @constructor
         * @param {pb.IRankPlayer=} [properties] Properties to set
         */
        function RankPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankPlayer Avatar.
         * @member {string} Avatar
         * @memberof pb.RankPlayer
         * @instance
         */
        RankPlayer.prototype.Avatar = "";

        /**
         * RankPlayer BetAmount.
         * @member {number|Long} BetAmount
         * @memberof pb.RankPlayer
         * @instance
         */
        RankPlayer.prototype.BetAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankPlayer Carry.
         * @member {number|Long} Carry
         * @memberof pb.RankPlayer
         * @instance
         */
        RankPlayer.prototype.Carry = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankPlayer Nick.
         * @member {string} Nick
         * @memberof pb.RankPlayer
         * @instance
         */
        RankPlayer.prototype.Nick = "";

        /**
         * RankPlayer UID.
         * @member {number} UID
         * @memberof pb.RankPlayer
         * @instance
         */
        RankPlayer.prototype.UID = 0;

        /**
         * Creates a new RankPlayer instance using the specified properties.
         * @function create
         * @memberof pb.RankPlayer
         * @static
         * @param {pb.IRankPlayer=} [properties] Properties to set
         * @returns {pb.RankPlayer} RankPlayer instance
         */
        RankPlayer.create = function create(properties) {
            return new RankPlayer(properties);
        };

        /**
         * Encodes the specified RankPlayer message. Does not implicitly {@link pb.RankPlayer.verify|verify} messages.
         * @function encode
         * @memberof pb.RankPlayer
         * @static
         * @param {pb.IRankPlayer} message RankPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Avatar);
            if (message.BetAmount != null && Object.hasOwnProperty.call(message, "BetAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetAmount);
            if (message.Carry != null && Object.hasOwnProperty.call(message, "Carry"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Carry);
            if (message.Nick != null && Object.hasOwnProperty.call(message, "Nick"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Nick);
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.UID);
            return writer;
        };

        /**
         * Encodes the specified RankPlayer message, length delimited. Does not implicitly {@link pb.RankPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RankPlayer
         * @static
         * @param {pb.IRankPlayer} message RankPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RankPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RankPlayer} RankPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RankPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Avatar = reader.string();
                    break;
                case 2:
                    message.BetAmount = reader.int64();
                    break;
                case 3:
                    message.Carry = reader.int64();
                    break;
                case 4:
                    message.Nick = reader.string();
                    break;
                case 5:
                    message.UID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RankPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RankPlayer} RankPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankPlayer message.
         * @function verify
         * @memberof pb.RankPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                if (!$util.isString(message.Avatar))
                    return "Avatar: string expected";
            if (message.BetAmount != null && message.hasOwnProperty("BetAmount"))
                if (!$util.isInteger(message.BetAmount) && !(message.BetAmount && $util.isInteger(message.BetAmount.low) && $util.isInteger(message.BetAmount.high)))
                    return "BetAmount: integer|Long expected";
            if (message.Carry != null && message.hasOwnProperty("Carry"))
                if (!$util.isInteger(message.Carry) && !(message.Carry && $util.isInteger(message.Carry.low) && $util.isInteger(message.Carry.high)))
                    return "Carry: integer|Long expected";
            if (message.Nick != null && message.hasOwnProperty("Nick"))
                if (!$util.isString(message.Nick))
                    return "Nick: string expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID))
                    return "UID: integer expected";
            return null;
        };

        /**
         * Creates a RankPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RankPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RankPlayer} RankPlayer
         */
        RankPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RankPlayer)
                return object;
            var message = new $root.pb.RankPlayer();
            if (object.Avatar != null)
                message.Avatar = String(object.Avatar);
            if (object.BetAmount != null)
                if ($util.Long)
                    (message.BetAmount = $util.Long.fromValue(object.BetAmount)).unsigned = false;
                else if (typeof object.BetAmount === "string")
                    message.BetAmount = parseInt(object.BetAmount, 10);
                else if (typeof object.BetAmount === "number")
                    message.BetAmount = object.BetAmount;
                else if (typeof object.BetAmount === "object")
                    message.BetAmount = new $util.LongBits(object.BetAmount.low >>> 0, object.BetAmount.high >>> 0).toNumber();
            if (object.Carry != null)
                if ($util.Long)
                    (message.Carry = $util.Long.fromValue(object.Carry)).unsigned = false;
                else if (typeof object.Carry === "string")
                    message.Carry = parseInt(object.Carry, 10);
                else if (typeof object.Carry === "number")
                    message.Carry = object.Carry;
                else if (typeof object.Carry === "object")
                    message.Carry = new $util.LongBits(object.Carry.low >>> 0, object.Carry.high >>> 0).toNumber();
            if (object.Nick != null)
                message.Nick = String(object.Nick);
            if (object.UID != null)
                message.UID = object.UID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RankPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RankPlayer
         * @static
         * @param {pb.RankPlayer} message RankPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Avatar = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Carry = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Carry = options.longs === String ? "0" : 0;
                object.Nick = "";
                object.UID = 0;
            }
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                object.Avatar = message.Avatar;
            if (message.BetAmount != null && message.hasOwnProperty("BetAmount"))
                if (typeof message.BetAmount === "number")
                    object.BetAmount = options.longs === String ? String(message.BetAmount) : message.BetAmount;
                else
                    object.BetAmount = options.longs === String ? $util.Long.prototype.toString.call(message.BetAmount) : options.longs === Number ? new $util.LongBits(message.BetAmount.low >>> 0, message.BetAmount.high >>> 0).toNumber() : message.BetAmount;
            if (message.Carry != null && message.hasOwnProperty("Carry"))
                if (typeof message.Carry === "number")
                    object.Carry = options.longs === String ? String(message.Carry) : message.Carry;
                else
                    object.Carry = options.longs === String ? $util.Long.prototype.toString.call(message.Carry) : options.longs === Number ? new $util.LongBits(message.Carry.low >>> 0, message.Carry.high >>> 0).toNumber() : message.Carry;
            if (message.Nick != null && message.hasOwnProperty("Nick"))
                object.Nick = message.Nick;
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            return object;
        };

        /**
         * Converts this RankPlayer to JSON.
         * @function toJSON
         * @memberof pb.RankPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankPlayer;
    })();

    pb.ArrayUInt32 = (function() {

        /**
         * Properties of an ArrayUInt32.
         * @memberof pb
         * @interface IArrayUInt32
         * @property {Array.<number>|null} [Element] ArrayUInt32 Element
         */

        /**
         * Constructs a new ArrayUInt32.
         * @memberof pb
         * @classdesc Represents an ArrayUInt32.
         * @implements IArrayUInt32
         * @constructor
         * @param {pb.IArrayUInt32=} [properties] Properties to set
         */
        function ArrayUInt32(properties) {
            this.Element = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArrayUInt32 Element.
         * @member {Array.<number>} Element
         * @memberof pb.ArrayUInt32
         * @instance
         */
        ArrayUInt32.prototype.Element = $util.emptyArray;

        /**
         * Creates a new ArrayUInt32 instance using the specified properties.
         * @function create
         * @memberof pb.ArrayUInt32
         * @static
         * @param {pb.IArrayUInt32=} [properties] Properties to set
         * @returns {pb.ArrayUInt32} ArrayUInt32 instance
         */
        ArrayUInt32.create = function create(properties) {
            return new ArrayUInt32(properties);
        };

        /**
         * Encodes the specified ArrayUInt32 message. Does not implicitly {@link pb.ArrayUInt32.verify|verify} messages.
         * @function encode
         * @memberof pb.ArrayUInt32
         * @static
         * @param {pb.IArrayUInt32} message ArrayUInt32 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayUInt32.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Element != null && message.Element.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Element.length; ++i)
                    writer.uint32(message.Element[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ArrayUInt32 message, length delimited. Does not implicitly {@link pb.ArrayUInt32.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ArrayUInt32
         * @static
         * @param {pb.IArrayUInt32} message ArrayUInt32 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArrayUInt32.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArrayUInt32 message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ArrayUInt32
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ArrayUInt32} ArrayUInt32
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayUInt32.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ArrayUInt32();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Element && message.Element.length))
                        message.Element = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Element.push(reader.uint32());
                    } else
                        message.Element.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArrayUInt32 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ArrayUInt32
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ArrayUInt32} ArrayUInt32
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArrayUInt32.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArrayUInt32 message.
         * @function verify
         * @memberof pb.ArrayUInt32
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArrayUInt32.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Element != null && message.hasOwnProperty("Element")) {
                if (!Array.isArray(message.Element))
                    return "Element: array expected";
                for (var i = 0; i < message.Element.length; ++i)
                    if (!$util.isInteger(message.Element[i]))
                        return "Element: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an ArrayUInt32 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ArrayUInt32
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ArrayUInt32} ArrayUInt32
         */
        ArrayUInt32.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ArrayUInt32)
                return object;
            var message = new $root.pb.ArrayUInt32();
            if (object.Element) {
                if (!Array.isArray(object.Element))
                    throw TypeError(".pb.ArrayUInt32.Element: array expected");
                message.Element = [];
                for (var i = 0; i < object.Element.length; ++i)
                    message.Element[i] = object.Element[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ArrayUInt32 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ArrayUInt32
         * @static
         * @param {pb.ArrayUInt32} message ArrayUInt32
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArrayUInt32.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Element = [];
            if (message.Element && message.Element.length) {
                object.Element = [];
                for (var j = 0; j < message.Element.length; ++j)
                    object.Element[j] = message.Element[j];
            }
            return object;
        };

        /**
         * Converts this ArrayUInt32 to JSON.
         * @function toJSON
         * @memberof pb.ArrayUInt32
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArrayUInt32.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArrayUInt32;
    })();

    pb.GameChatReq = (function() {

        /**
         * Properties of a GameChatReq.
         * @memberof pb
         * @interface IGameChatReq
         * @property {number|null} [Type] GameChatReq Type
         */

        /**
         * Constructs a new GameChatReq.
         * @memberof pb
         * @classdesc Represents a GameChatReq.
         * @implements IGameChatReq
         * @constructor
         * @param {pb.IGameChatReq=} [properties] Properties to set
         */
        function GameChatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameChatReq Type.
         * @member {number} Type
         * @memberof pb.GameChatReq
         * @instance
         */
        GameChatReq.prototype.Type = 0;

        /**
         * Creates a new GameChatReq instance using the specified properties.
         * @function create
         * @memberof pb.GameChatReq
         * @static
         * @param {pb.IGameChatReq=} [properties] Properties to set
         * @returns {pb.GameChatReq} GameChatReq instance
         */
        GameChatReq.create = function create(properties) {
            return new GameChatReq(properties);
        };

        /**
         * Encodes the specified GameChatReq message. Does not implicitly {@link pb.GameChatReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GameChatReq
         * @static
         * @param {pb.IGameChatReq} message GameChatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameChatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            return writer;
        };

        /**
         * Encodes the specified GameChatReq message, length delimited. Does not implicitly {@link pb.GameChatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameChatReq
         * @static
         * @param {pb.IGameChatReq} message GameChatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameChatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameChatReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameChatReq} GameChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameChatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameChatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameChatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameChatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameChatReq} GameChatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameChatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameChatReq message.
         * @function verify
         * @memberof pb.GameChatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameChatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            return null;
        };

        /**
         * Creates a GameChatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameChatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameChatReq} GameChatReq
         */
        GameChatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameChatReq)
                return object;
            var message = new $root.pb.GameChatReq();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameChatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameChatReq
         * @static
         * @param {pb.GameChatReq} message GameChatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameChatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Type = 0;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            return object;
        };

        /**
         * Converts this GameChatReq to JSON.
         * @function toJSON
         * @memberof pb.GameChatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameChatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameChatReq;
    })();

    pb.GameChatResp = (function() {

        /**
         * Properties of a GameChatResp.
         * @memberof pb
         * @interface IGameChatResp
         * @property {number|null} [Type] GameChatResp Type
         * @property {string|null} [Msg] GameChatResp Msg
         * @property {number|null} [UID] GameChatResp UID
         */

        /**
         * Constructs a new GameChatResp.
         * @memberof pb
         * @classdesc Represents a GameChatResp.
         * @implements IGameChatResp
         * @constructor
         * @param {pb.IGameChatResp=} [properties] Properties to set
         */
        function GameChatResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameChatResp Type.
         * @member {number} Type
         * @memberof pb.GameChatResp
         * @instance
         */
        GameChatResp.prototype.Type = 0;

        /**
         * GameChatResp Msg.
         * @member {string} Msg
         * @memberof pb.GameChatResp
         * @instance
         */
        GameChatResp.prototype.Msg = "";

        /**
         * GameChatResp UID.
         * @member {number} UID
         * @memberof pb.GameChatResp
         * @instance
         */
        GameChatResp.prototype.UID = 0;

        /**
         * Creates a new GameChatResp instance using the specified properties.
         * @function create
         * @memberof pb.GameChatResp
         * @static
         * @param {pb.IGameChatResp=} [properties] Properties to set
         * @returns {pb.GameChatResp} GameChatResp instance
         */
        GameChatResp.create = function create(properties) {
            return new GameChatResp(properties);
        };

        /**
         * Encodes the specified GameChatResp message. Does not implicitly {@link pb.GameChatResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameChatResp
         * @static
         * @param {pb.IGameChatResp} message GameChatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameChatResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.UID);
            return writer;
        };

        /**
         * Encodes the specified GameChatResp message, length delimited. Does not implicitly {@link pb.GameChatResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameChatResp
         * @static
         * @param {pb.IGameChatResp} message GameChatResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameChatResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameChatResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameChatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameChatResp} GameChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameChatResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameChatResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                case 3:
                    message.UID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameChatResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameChatResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameChatResp} GameChatResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameChatResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameChatResp message.
         * @function verify
         * @memberof pb.GameChatResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameChatResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID))
                    return "UID: integer expected";
            return null;
        };

        /**
         * Creates a GameChatResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameChatResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameChatResp} GameChatResp
         */
        GameChatResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameChatResp)
                return object;
            var message = new $root.pb.GameChatResp();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.UID != null)
                message.UID = object.UID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameChatResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameChatResp
         * @static
         * @param {pb.GameChatResp} message GameChatResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameChatResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Msg = "";
                object.UID = 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            return object;
        };

        /**
         * Converts this GameChatResp to JSON.
         * @function toJSON
         * @memberof pb.GameChatResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameChatResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameChatResp;
    })();

    pb.GameLeaveResp = (function() {

        /**
         * Properties of a GameLeaveResp.
         * @memberof pb
         * @interface IGameLeaveResp
         * @property {number|null} [Result] GameLeaveResp Result
         * @property {number|null} [Reason] GameLeaveResp Reason
         */

        /**
         * Constructs a new GameLeaveResp.
         * @memberof pb
         * @classdesc Represents a GameLeaveResp.
         * @implements IGameLeaveResp
         * @constructor
         * @param {pb.IGameLeaveResp=} [properties] Properties to set
         */
        function GameLeaveResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLeaveResp Result.
         * @member {number} Result
         * @memberof pb.GameLeaveResp
         * @instance
         */
        GameLeaveResp.prototype.Result = 0;

        /**
         * GameLeaveResp Reason.
         * @member {number} Reason
         * @memberof pb.GameLeaveResp
         * @instance
         */
        GameLeaveResp.prototype.Reason = 0;

        /**
         * Creates a new GameLeaveResp instance using the specified properties.
         * @function create
         * @memberof pb.GameLeaveResp
         * @static
         * @param {pb.IGameLeaveResp=} [properties] Properties to set
         * @returns {pb.GameLeaveResp} GameLeaveResp instance
         */
        GameLeaveResp.create = function create(properties) {
            return new GameLeaveResp(properties);
        };

        /**
         * Encodes the specified GameLeaveResp message. Does not implicitly {@link pb.GameLeaveResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameLeaveResp
         * @static
         * @param {pb.IGameLeaveResp} message GameLeaveResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLeaveResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Result);
            if (message.Reason != null && Object.hasOwnProperty.call(message, "Reason"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Reason);
            return writer;
        };

        /**
         * Encodes the specified GameLeaveResp message, length delimited. Does not implicitly {@link pb.GameLeaveResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameLeaveResp
         * @static
         * @param {pb.IGameLeaveResp} message GameLeaveResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLeaveResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLeaveResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameLeaveResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameLeaveResp} GameLeaveResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLeaveResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameLeaveResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Result = reader.uint32();
                    break;
                case 2:
                    message.Reason = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLeaveResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameLeaveResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameLeaveResp} GameLeaveResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLeaveResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLeaveResp message.
         * @function verify
         * @memberof pb.GameLeaveResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLeaveResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isInteger(message.Result))
                    return "Result: integer expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!$util.isInteger(message.Reason))
                    return "Reason: integer expected";
            return null;
        };

        /**
         * Creates a GameLeaveResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameLeaveResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameLeaveResp} GameLeaveResp
         */
        GameLeaveResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameLeaveResp)
                return object;
            var message = new $root.pb.GameLeaveResp();
            if (object.Result != null)
                message.Result = object.Result >>> 0;
            if (object.Reason != null)
                message.Reason = object.Reason >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameLeaveResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameLeaveResp
         * @static
         * @param {pb.GameLeaveResp} message GameLeaveResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLeaveResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Result = 0;
                object.Reason = 0;
            }
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = message.Reason;
            return object;
        };

        /**
         * Converts this GameLeaveResp to JSON.
         * @function toJSON
         * @memberof pb.GameLeaveResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLeaveResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLeaveResp;
    })();

    pb.SeatPlayer = (function() {

        /**
         * Properties of a SeatPlayer.
         * @memberof pb
         * @interface ISeatPlayer
         * @property {string|null} [Avatar] SeatPlayer Avatar
         * @property {number|Long|null} [Carry] SeatPlayer Carry
         * @property {string|null} [Nick] SeatPlayer Nick
         * @property {number|null} [UID] SeatPlayer UID
         * @property {number|null} [Index] SeatPlayer Index
         * @property {Array.<pb.IArrayUInt32>|null} [AreaCoins] SeatPlayer AreaCoins
         */

        /**
         * Constructs a new SeatPlayer.
         * @memberof pb
         * @classdesc Represents a SeatPlayer.
         * @implements ISeatPlayer
         * @constructor
         * @param {pb.ISeatPlayer=} [properties] Properties to set
         */
        function SeatPlayer(properties) {
            this.AreaCoins = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SeatPlayer Avatar.
         * @member {string} Avatar
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.Avatar = "";

        /**
         * SeatPlayer Carry.
         * @member {number|Long} Carry
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.Carry = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SeatPlayer Nick.
         * @member {string} Nick
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.Nick = "";

        /**
         * SeatPlayer UID.
         * @member {number} UID
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.UID = 0;

        /**
         * SeatPlayer Index.
         * @member {number} Index
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.Index = 0;

        /**
         * SeatPlayer AreaCoins.
         * @member {Array.<pb.IArrayUInt32>} AreaCoins
         * @memberof pb.SeatPlayer
         * @instance
         */
        SeatPlayer.prototype.AreaCoins = $util.emptyArray;

        /**
         * Creates a new SeatPlayer instance using the specified properties.
         * @function create
         * @memberof pb.SeatPlayer
         * @static
         * @param {pb.ISeatPlayer=} [properties] Properties to set
         * @returns {pb.SeatPlayer} SeatPlayer instance
         */
        SeatPlayer.create = function create(properties) {
            return new SeatPlayer(properties);
        };

        /**
         * Encodes the specified SeatPlayer message. Does not implicitly {@link pb.SeatPlayer.verify|verify} messages.
         * @function encode
         * @memberof pb.SeatPlayer
         * @static
         * @param {pb.ISeatPlayer} message SeatPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Avatar);
            if (message.Carry != null && Object.hasOwnProperty.call(message, "Carry"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Carry);
            if (message.Nick != null && Object.hasOwnProperty.call(message, "Nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Nick);
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.UID);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Index);
            if (message.AreaCoins != null && message.AreaCoins.length)
                for (var i = 0; i < message.AreaCoins.length; ++i)
                    $root.pb.ArrayUInt32.encode(message.AreaCoins[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SeatPlayer message, length delimited. Does not implicitly {@link pb.SeatPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SeatPlayer
         * @static
         * @param {pb.ISeatPlayer} message SeatPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeatPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SeatPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SeatPlayer} SeatPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeatPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SeatPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Avatar = reader.string();
                    break;
                case 2:
                    message.Carry = reader.int64();
                    break;
                case 3:
                    message.Nick = reader.string();
                    break;
                case 4:
                    message.UID = reader.uint32();
                    break;
                case 5:
                    message.Index = reader.uint32();
                    break;
                case 6:
                    if (!(message.AreaCoins && message.AreaCoins.length))
                        message.AreaCoins = [];
                    message.AreaCoins.push($root.pb.ArrayUInt32.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SeatPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SeatPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SeatPlayer} SeatPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeatPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SeatPlayer message.
         * @function verify
         * @memberof pb.SeatPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SeatPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                if (!$util.isString(message.Avatar))
                    return "Avatar: string expected";
            if (message.Carry != null && message.hasOwnProperty("Carry"))
                if (!$util.isInteger(message.Carry) && !(message.Carry && $util.isInteger(message.Carry.low) && $util.isInteger(message.Carry.high)))
                    return "Carry: integer|Long expected";
            if (message.Nick != null && message.hasOwnProperty("Nick"))
                if (!$util.isString(message.Nick))
                    return "Nick: string expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID))
                    return "UID: integer expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            if (message.AreaCoins != null && message.hasOwnProperty("AreaCoins")) {
                if (!Array.isArray(message.AreaCoins))
                    return "AreaCoins: array expected";
                for (var i = 0; i < message.AreaCoins.length; ++i) {
                    var error = $root.pb.ArrayUInt32.verify(message.AreaCoins[i]);
                    if (error)
                        return "AreaCoins." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SeatPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SeatPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SeatPlayer} SeatPlayer
         */
        SeatPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SeatPlayer)
                return object;
            var message = new $root.pb.SeatPlayer();
            if (object.Avatar != null)
                message.Avatar = String(object.Avatar);
            if (object.Carry != null)
                if ($util.Long)
                    (message.Carry = $util.Long.fromValue(object.Carry)).unsigned = false;
                else if (typeof object.Carry === "string")
                    message.Carry = parseInt(object.Carry, 10);
                else if (typeof object.Carry === "number")
                    message.Carry = object.Carry;
                else if (typeof object.Carry === "object")
                    message.Carry = new $util.LongBits(object.Carry.low >>> 0, object.Carry.high >>> 0).toNumber();
            if (object.Nick != null)
                message.Nick = String(object.Nick);
            if (object.UID != null)
                message.UID = object.UID >>> 0;
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            if (object.AreaCoins) {
                if (!Array.isArray(object.AreaCoins))
                    throw TypeError(".pb.SeatPlayer.AreaCoins: array expected");
                message.AreaCoins = [];
                for (var i = 0; i < object.AreaCoins.length; ++i) {
                    if (typeof object.AreaCoins[i] !== "object")
                        throw TypeError(".pb.SeatPlayer.AreaCoins: object expected");
                    message.AreaCoins[i] = $root.pb.ArrayUInt32.fromObject(object.AreaCoins[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SeatPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SeatPlayer
         * @static
         * @param {pb.SeatPlayer} message SeatPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SeatPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AreaCoins = [];
            if (options.defaults) {
                object.Avatar = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Carry = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Carry = options.longs === String ? "0" : 0;
                object.Nick = "";
                object.UID = 0;
                object.Index = 0;
            }
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                object.Avatar = message.Avatar;
            if (message.Carry != null && message.hasOwnProperty("Carry"))
                if (typeof message.Carry === "number")
                    object.Carry = options.longs === String ? String(message.Carry) : message.Carry;
                else
                    object.Carry = options.longs === String ? $util.Long.prototype.toString.call(message.Carry) : options.longs === Number ? new $util.LongBits(message.Carry.low >>> 0, message.Carry.high >>> 0).toNumber() : message.Carry;
            if (message.Nick != null && message.hasOwnProperty("Nick"))
                object.Nick = message.Nick;
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.AreaCoins && message.AreaCoins.length) {
                object.AreaCoins = [];
                for (var j = 0; j < message.AreaCoins.length; ++j)
                    object.AreaCoins[j] = $root.pb.ArrayUInt32.toObject(message.AreaCoins[j], options);
            }
            return object;
        };

        /**
         * Converts this SeatPlayer to JSON.
         * @function toJSON
         * @memberof pb.SeatPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SeatPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SeatPlayer;
    })();

    pb.GameSitdownReq = (function() {

        /**
         * Properties of a GameSitdownReq.
         * @memberof pb
         * @interface IGameSitdownReq
         * @property {number|null} [Opt] GameSitdownReq Opt
         * @property {number|null} [Index] GameSitdownReq Index
         */

        /**
         * Constructs a new GameSitdownReq.
         * @memberof pb
         * @classdesc Represents a GameSitdownReq.
         * @implements IGameSitdownReq
         * @constructor
         * @param {pb.IGameSitdownReq=} [properties] Properties to set
         */
        function GameSitdownReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSitdownReq Opt.
         * @member {number} Opt
         * @memberof pb.GameSitdownReq
         * @instance
         */
        GameSitdownReq.prototype.Opt = 0;

        /**
         * GameSitdownReq Index.
         * @member {number} Index
         * @memberof pb.GameSitdownReq
         * @instance
         */
        GameSitdownReq.prototype.Index = 0;

        /**
         * Creates a new GameSitdownReq instance using the specified properties.
         * @function create
         * @memberof pb.GameSitdownReq
         * @static
         * @param {pb.IGameSitdownReq=} [properties] Properties to set
         * @returns {pb.GameSitdownReq} GameSitdownReq instance
         */
        GameSitdownReq.create = function create(properties) {
            return new GameSitdownReq(properties);
        };

        /**
         * Encodes the specified GameSitdownReq message. Does not implicitly {@link pb.GameSitdownReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GameSitdownReq
         * @static
         * @param {pb.IGameSitdownReq} message GameSitdownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSitdownReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Opt != null && Object.hasOwnProperty.call(message, "Opt"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Opt);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Index);
            return writer;
        };

        /**
         * Encodes the specified GameSitdownReq message, length delimited. Does not implicitly {@link pb.GameSitdownReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameSitdownReq
         * @static
         * @param {pb.IGameSitdownReq} message GameSitdownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSitdownReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSitdownReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameSitdownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameSitdownReq} GameSitdownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSitdownReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameSitdownReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Opt = reader.uint32();
                    break;
                case 2:
                    message.Index = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameSitdownReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameSitdownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameSitdownReq} GameSitdownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSitdownReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSitdownReq message.
         * @function verify
         * @memberof pb.GameSitdownReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSitdownReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                if (!$util.isInteger(message.Opt))
                    return "Opt: integer expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            return null;
        };

        /**
         * Creates a GameSitdownReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameSitdownReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameSitdownReq} GameSitdownReq
         */
        GameSitdownReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameSitdownReq)
                return object;
            var message = new $root.pb.GameSitdownReq();
            if (object.Opt != null)
                message.Opt = object.Opt >>> 0;
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameSitdownReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameSitdownReq
         * @static
         * @param {pb.GameSitdownReq} message GameSitdownReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSitdownReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Opt = 0;
                object.Index = 0;
            }
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                object.Opt = message.Opt;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            return object;
        };

        /**
         * Converts this GameSitdownReq to JSON.
         * @function toJSON
         * @memberof pb.GameSitdownReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSitdownReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameSitdownReq;
    })();

    pb.GameSitdownResp = (function() {

        /**
         * Properties of a GameSitdownResp.
         * @memberof pb
         * @interface IGameSitdownResp
         * @property {number|null} [Code] GameSitdownResp Code
         * @property {number|null} [Index] GameSitdownResp Index
         * @property {number|null} [Opt] GameSitdownResp Opt
         * @property {pb.ISeatPlayer|null} [Player] GameSitdownResp Player
         */

        /**
         * Constructs a new GameSitdownResp.
         * @memberof pb
         * @classdesc Represents a GameSitdownResp.
         * @implements IGameSitdownResp
         * @constructor
         * @param {pb.IGameSitdownResp=} [properties] Properties to set
         */
        function GameSitdownResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSitdownResp Code.
         * @member {number} Code
         * @memberof pb.GameSitdownResp
         * @instance
         */
        GameSitdownResp.prototype.Code = 0;

        /**
         * GameSitdownResp Index.
         * @member {number} Index
         * @memberof pb.GameSitdownResp
         * @instance
         */
        GameSitdownResp.prototype.Index = 0;

        /**
         * GameSitdownResp Opt.
         * @member {number} Opt
         * @memberof pb.GameSitdownResp
         * @instance
         */
        GameSitdownResp.prototype.Opt = 0;

        /**
         * GameSitdownResp Player.
         * @member {pb.ISeatPlayer|null|undefined} Player
         * @memberof pb.GameSitdownResp
         * @instance
         */
        GameSitdownResp.prototype.Player = null;

        /**
         * Creates a new GameSitdownResp instance using the specified properties.
         * @function create
         * @memberof pb.GameSitdownResp
         * @static
         * @param {pb.IGameSitdownResp=} [properties] Properties to set
         * @returns {pb.GameSitdownResp} GameSitdownResp instance
         */
        GameSitdownResp.create = function create(properties) {
            return new GameSitdownResp(properties);
        };

        /**
         * Encodes the specified GameSitdownResp message. Does not implicitly {@link pb.GameSitdownResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameSitdownResp
         * @static
         * @param {pb.IGameSitdownResp} message GameSitdownResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSitdownResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Index);
            if (message.Opt != null && Object.hasOwnProperty.call(message, "Opt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Opt);
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                $root.pb.SeatPlayer.encode(message.Player, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameSitdownResp message, length delimited. Does not implicitly {@link pb.GameSitdownResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameSitdownResp
         * @static
         * @param {pb.IGameSitdownResp} message GameSitdownResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSitdownResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSitdownResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameSitdownResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameSitdownResp} GameSitdownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSitdownResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameSitdownResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.uint32();
                    break;
                case 2:
                    message.Index = reader.uint32();
                    break;
                case 3:
                    message.Opt = reader.uint32();
                    break;
                case 4:
                    message.Player = $root.pb.SeatPlayer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameSitdownResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameSitdownResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameSitdownResp} GameSitdownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSitdownResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSitdownResp message.
         * @function verify
         * @memberof pb.GameSitdownResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSitdownResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                if (!$util.isInteger(message.Opt))
                    return "Opt: integer expected";
            if (message.Player != null && message.hasOwnProperty("Player")) {
                var error = $root.pb.SeatPlayer.verify(message.Player);
                if (error)
                    return "Player." + error;
            }
            return null;
        };

        /**
         * Creates a GameSitdownResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameSitdownResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameSitdownResp} GameSitdownResp
         */
        GameSitdownResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameSitdownResp)
                return object;
            var message = new $root.pb.GameSitdownResp();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            if (object.Opt != null)
                message.Opt = object.Opt >>> 0;
            if (object.Player != null) {
                if (typeof object.Player !== "object")
                    throw TypeError(".pb.GameSitdownResp.Player: object expected");
                message.Player = $root.pb.SeatPlayer.fromObject(object.Player);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameSitdownResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameSitdownResp
         * @static
         * @param {pb.GameSitdownResp} message GameSitdownResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSitdownResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Index = 0;
                object.Opt = 0;
                object.Player = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.Opt != null && message.hasOwnProperty("Opt"))
                object.Opt = message.Opt;
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = $root.pb.SeatPlayer.toObject(message.Player, options);
            return object;
        };

        /**
         * Converts this GameSitdownResp to JSON.
         * @function toJSON
         * @memberof pb.GameSitdownResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSitdownResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameSitdownResp;
    })();

    pb.SeatSettles = (function() {

        /**
         * Properties of a SeatSettles.
         * @memberof pb
         * @interface ISeatSettles
         * @property {number|null} [Index] SeatSettles Index
         * @property {number|Long|null} [SettleAmount] SeatSettles SettleAmount
         * @property {number|Long|null} [Balance] SeatSettles Balance
         * @property {number|null} [UID] SeatSettles UID
         */

        /**
         * Constructs a new SeatSettles.
         * @memberof pb
         * @classdesc Represents a SeatSettles.
         * @implements ISeatSettles
         * @constructor
         * @param {pb.ISeatSettles=} [properties] Properties to set
         */
        function SeatSettles(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SeatSettles Index.
         * @member {number} Index
         * @memberof pb.SeatSettles
         * @instance
         */
        SeatSettles.prototype.Index = 0;

        /**
         * SeatSettles SettleAmount.
         * @member {number|Long} SettleAmount
         * @memberof pb.SeatSettles
         * @instance
         */
        SeatSettles.prototype.SettleAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SeatSettles Balance.
         * @member {number|Long} Balance
         * @memberof pb.SeatSettles
         * @instance
         */
        SeatSettles.prototype.Balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SeatSettles UID.
         * @member {number} UID
         * @memberof pb.SeatSettles
         * @instance
         */
        SeatSettles.prototype.UID = 0;

        /**
         * Creates a new SeatSettles instance using the specified properties.
         * @function create
         * @memberof pb.SeatSettles
         * @static
         * @param {pb.ISeatSettles=} [properties] Properties to set
         * @returns {pb.SeatSettles} SeatSettles instance
         */
        SeatSettles.create = function create(properties) {
            return new SeatSettles(properties);
        };

        /**
         * Encodes the specified SeatSettles message. Does not implicitly {@link pb.SeatSettles.verify|verify} messages.
         * @function encode
         * @memberof pb.SeatSettles
         * @static
         * @param {pb.ISeatSettles} message SeatSettles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatSettles.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Index);
            if (message.SettleAmount != null && Object.hasOwnProperty.call(message, "SettleAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SettleAmount);
            if (message.Balance != null && Object.hasOwnProperty.call(message, "Balance"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Balance);
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.UID);
            return writer;
        };

        /**
         * Encodes the specified SeatSettles message, length delimited. Does not implicitly {@link pb.SeatSettles.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SeatSettles
         * @static
         * @param {pb.ISeatSettles} message SeatSettles message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SeatSettles.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SeatSettles message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SeatSettles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SeatSettles} SeatSettles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeatSettles.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SeatSettles();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Index = reader.uint32();
                    break;
                case 2:
                    message.SettleAmount = reader.int64();
                    break;
                case 3:
                    message.Balance = reader.int64();
                    break;
                case 4:
                    message.UID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SeatSettles message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SeatSettles
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SeatSettles} SeatSettles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SeatSettles.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SeatSettles message.
         * @function verify
         * @memberof pb.SeatSettles
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SeatSettles.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            if (message.SettleAmount != null && message.hasOwnProperty("SettleAmount"))
                if (!$util.isInteger(message.SettleAmount) && !(message.SettleAmount && $util.isInteger(message.SettleAmount.low) && $util.isInteger(message.SettleAmount.high)))
                    return "SettleAmount: integer|Long expected";
            if (message.Balance != null && message.hasOwnProperty("Balance"))
                if (!$util.isInteger(message.Balance) && !(message.Balance && $util.isInteger(message.Balance.low) && $util.isInteger(message.Balance.high)))
                    return "Balance: integer|Long expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID))
                    return "UID: integer expected";
            return null;
        };

        /**
         * Creates a SeatSettles message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SeatSettles
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SeatSettles} SeatSettles
         */
        SeatSettles.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SeatSettles)
                return object;
            var message = new $root.pb.SeatSettles();
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            if (object.SettleAmount != null)
                if ($util.Long)
                    (message.SettleAmount = $util.Long.fromValue(object.SettleAmount)).unsigned = false;
                else if (typeof object.SettleAmount === "string")
                    message.SettleAmount = parseInt(object.SettleAmount, 10);
                else if (typeof object.SettleAmount === "number")
                    message.SettleAmount = object.SettleAmount;
                else if (typeof object.SettleAmount === "object")
                    message.SettleAmount = new $util.LongBits(object.SettleAmount.low >>> 0, object.SettleAmount.high >>> 0).toNumber();
            if (object.Balance != null)
                if ($util.Long)
                    (message.Balance = $util.Long.fromValue(object.Balance)).unsigned = false;
                else if (typeof object.Balance === "string")
                    message.Balance = parseInt(object.Balance, 10);
                else if (typeof object.Balance === "number")
                    message.Balance = object.Balance;
                else if (typeof object.Balance === "object")
                    message.Balance = new $util.LongBits(object.Balance.low >>> 0, object.Balance.high >>> 0).toNumber();
            if (object.UID != null)
                message.UID = object.UID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SeatSettles message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SeatSettles
         * @static
         * @param {pb.SeatSettles} message SeatSettles
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SeatSettles.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Index = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SettleAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SettleAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Balance = options.longs === String ? "0" : 0;
                object.UID = 0;
            }
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.SettleAmount != null && message.hasOwnProperty("SettleAmount"))
                if (typeof message.SettleAmount === "number")
                    object.SettleAmount = options.longs === String ? String(message.SettleAmount) : message.SettleAmount;
                else
                    object.SettleAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SettleAmount) : options.longs === Number ? new $util.LongBits(message.SettleAmount.low >>> 0, message.SettleAmount.high >>> 0).toNumber() : message.SettleAmount;
            if (message.Balance != null && message.hasOwnProperty("Balance"))
                if (typeof message.Balance === "number")
                    object.Balance = options.longs === String ? String(message.Balance) : message.Balance;
                else
                    object.Balance = options.longs === String ? $util.Long.prototype.toString.call(message.Balance) : options.longs === Number ? new $util.LongBits(message.Balance.low >>> 0, message.Balance.high >>> 0).toNumber() : message.Balance;
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            return object;
        };

        /**
         * Converts this SeatSettles to JSON.
         * @function toJSON
         * @memberof pb.SeatSettles
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SeatSettles.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SeatSettles;
    })();

    pb.GameMsgRebetResp = (function() {

        /**
         * Properties of a GameMsgRebetResp.
         * @memberof pb
         * @interface IGameMsgRebetResp
         * @property {number|null} [Code] GameMsgRebetResp Code
         * @property {Array.<pb.IArrayUInt32>|null} [AreaCoins] GameMsgRebetResp AreaCoins
         * @property {Array.<number|Long>|null} [TotalBet] GameMsgRebetResp TotalBet
         */

        /**
         * Constructs a new GameMsgRebetResp.
         * @memberof pb
         * @classdesc Represents a GameMsgRebetResp.
         * @implements IGameMsgRebetResp
         * @constructor
         * @param {pb.IGameMsgRebetResp=} [properties] Properties to set
         */
        function GameMsgRebetResp(properties) {
            this.AreaCoins = [];
            this.TotalBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgRebetResp Code.
         * @member {number} Code
         * @memberof pb.GameMsgRebetResp
         * @instance
         */
        GameMsgRebetResp.prototype.Code = 0;

        /**
         * GameMsgRebetResp AreaCoins.
         * @member {Array.<pb.IArrayUInt32>} AreaCoins
         * @memberof pb.GameMsgRebetResp
         * @instance
         */
        GameMsgRebetResp.prototype.AreaCoins = $util.emptyArray;

        /**
         * GameMsgRebetResp TotalBet.
         * @member {Array.<number|Long>} TotalBet
         * @memberof pb.GameMsgRebetResp
         * @instance
         */
        GameMsgRebetResp.prototype.TotalBet = $util.emptyArray;

        /**
         * Creates a new GameMsgRebetResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {pb.IGameMsgRebetResp=} [properties] Properties to set
         * @returns {pb.GameMsgRebetResp} GameMsgRebetResp instance
         */
        GameMsgRebetResp.create = function create(properties) {
            return new GameMsgRebetResp(properties);
        };

        /**
         * Encodes the specified GameMsgRebetResp message. Does not implicitly {@link pb.GameMsgRebetResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {pb.IGameMsgRebetResp} message GameMsgRebetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgRebetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.AreaCoins != null && message.AreaCoins.length)
                for (var i = 0; i < message.AreaCoins.length; ++i)
                    $root.pb.ArrayUInt32.encode(message.AreaCoins[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.TotalBet != null && message.TotalBet.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.TotalBet.length; ++i)
                    writer.int64(message.TotalBet[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GameMsgRebetResp message, length delimited. Does not implicitly {@link pb.GameMsgRebetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {pb.IGameMsgRebetResp} message GameMsgRebetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgRebetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgRebetResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgRebetResp} GameMsgRebetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgRebetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgRebetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.uint32();
                    break;
                case 2:
                    if (!(message.AreaCoins && message.AreaCoins.length))
                        message.AreaCoins = [];
                    message.AreaCoins.push($root.pb.ArrayUInt32.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.TotalBet && message.TotalBet.length))
                        message.TotalBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TotalBet.push(reader.int64());
                    } else
                        message.TotalBet.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgRebetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgRebetResp} GameMsgRebetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgRebetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgRebetResp message.
         * @function verify
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgRebetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.AreaCoins != null && message.hasOwnProperty("AreaCoins")) {
                if (!Array.isArray(message.AreaCoins))
                    return "AreaCoins: array expected";
                for (var i = 0; i < message.AreaCoins.length; ++i) {
                    var error = $root.pb.ArrayUInt32.verify(message.AreaCoins[i]);
                    if (error)
                        return "AreaCoins." + error;
                }
            }
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet")) {
                if (!Array.isArray(message.TotalBet))
                    return "TotalBet: array expected";
                for (var i = 0; i < message.TotalBet.length; ++i)
                    if (!$util.isInteger(message.TotalBet[i]) && !(message.TotalBet[i] && $util.isInteger(message.TotalBet[i].low) && $util.isInteger(message.TotalBet[i].high)))
                        return "TotalBet: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a GameMsgRebetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgRebetResp} GameMsgRebetResp
         */
        GameMsgRebetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgRebetResp)
                return object;
            var message = new $root.pb.GameMsgRebetResp();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.AreaCoins) {
                if (!Array.isArray(object.AreaCoins))
                    throw TypeError(".pb.GameMsgRebetResp.AreaCoins: array expected");
                message.AreaCoins = [];
                for (var i = 0; i < object.AreaCoins.length; ++i) {
                    if (typeof object.AreaCoins[i] !== "object")
                        throw TypeError(".pb.GameMsgRebetResp.AreaCoins: object expected");
                    message.AreaCoins[i] = $root.pb.ArrayUInt32.fromObject(object.AreaCoins[i]);
                }
            }
            if (object.TotalBet) {
                if (!Array.isArray(object.TotalBet))
                    throw TypeError(".pb.GameMsgRebetResp.TotalBet: array expected");
                message.TotalBet = [];
                for (var i = 0; i < object.TotalBet.length; ++i)
                    if ($util.Long)
                        (message.TotalBet[i] = $util.Long.fromValue(object.TotalBet[i])).unsigned = false;
                    else if (typeof object.TotalBet[i] === "string")
                        message.TotalBet[i] = parseInt(object.TotalBet[i], 10);
                    else if (typeof object.TotalBet[i] === "number")
                        message.TotalBet[i] = object.TotalBet[i];
                    else if (typeof object.TotalBet[i] === "object")
                        message.TotalBet[i] = new $util.LongBits(object.TotalBet[i].low >>> 0, object.TotalBet[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a GameMsgRebetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgRebetResp
         * @static
         * @param {pb.GameMsgRebetResp} message GameMsgRebetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgRebetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AreaCoins = [];
                object.TotalBet = [];
            }
            if (options.defaults)
                object.Code = 0;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.AreaCoins && message.AreaCoins.length) {
                object.AreaCoins = [];
                for (var j = 0; j < message.AreaCoins.length; ++j)
                    object.AreaCoins[j] = $root.pb.ArrayUInt32.toObject(message.AreaCoins[j], options);
            }
            if (message.TotalBet && message.TotalBet.length) {
                object.TotalBet = [];
                for (var j = 0; j < message.TotalBet.length; ++j)
                    if (typeof message.TotalBet[j] === "number")
                        object.TotalBet[j] = options.longs === String ? String(message.TotalBet[j]) : message.TotalBet[j];
                    else
                        object.TotalBet[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet[j]) : options.longs === Number ? new $util.LongBits(message.TotalBet[j].low >>> 0, message.TotalBet[j].high >>> 0).toNumber() : message.TotalBet[j];
            }
            return object;
        };

        /**
         * Converts this GameMsgRebetResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgRebetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgRebetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgRebetResp;
    })();

    pb.GameMsgPlayerNumResp = (function() {

        /**
         * Properties of a GameMsgPlayerNumResp.
         * @memberof pb
         * @interface IGameMsgPlayerNumResp
         * @property {number|null} [Num] GameMsgPlayerNumResp Num
         */

        /**
         * Constructs a new GameMsgPlayerNumResp.
         * @memberof pb
         * @classdesc Represents a GameMsgPlayerNumResp.
         * @implements IGameMsgPlayerNumResp
         * @constructor
         * @param {pb.IGameMsgPlayerNumResp=} [properties] Properties to set
         */
        function GameMsgPlayerNumResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgPlayerNumResp Num.
         * @member {number} Num
         * @memberof pb.GameMsgPlayerNumResp
         * @instance
         */
        GameMsgPlayerNumResp.prototype.Num = 0;

        /**
         * Creates a new GameMsgPlayerNumResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {pb.IGameMsgPlayerNumResp=} [properties] Properties to set
         * @returns {pb.GameMsgPlayerNumResp} GameMsgPlayerNumResp instance
         */
        GameMsgPlayerNumResp.create = function create(properties) {
            return new GameMsgPlayerNumResp(properties);
        };

        /**
         * Encodes the specified GameMsgPlayerNumResp message. Does not implicitly {@link pb.GameMsgPlayerNumResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {pb.IGameMsgPlayerNumResp} message GameMsgPlayerNumResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgPlayerNumResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Num);
            return writer;
        };

        /**
         * Encodes the specified GameMsgPlayerNumResp message, length delimited. Does not implicitly {@link pb.GameMsgPlayerNumResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {pb.IGameMsgPlayerNumResp} message GameMsgPlayerNumResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgPlayerNumResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgPlayerNumResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgPlayerNumResp} GameMsgPlayerNumResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgPlayerNumResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgPlayerNumResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgPlayerNumResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgPlayerNumResp} GameMsgPlayerNumResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgPlayerNumResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgPlayerNumResp message.
         * @function verify
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgPlayerNumResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Num != null && message.hasOwnProperty("Num"))
                if (!$util.isInteger(message.Num))
                    return "Num: integer expected";
            return null;
        };

        /**
         * Creates a GameMsgPlayerNumResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgPlayerNumResp} GameMsgPlayerNumResp
         */
        GameMsgPlayerNumResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgPlayerNumResp)
                return object;
            var message = new $root.pb.GameMsgPlayerNumResp();
            if (object.Num != null)
                message.Num = object.Num >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameMsgPlayerNumResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgPlayerNumResp
         * @static
         * @param {pb.GameMsgPlayerNumResp} message GameMsgPlayerNumResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgPlayerNumResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Num = 0;
            if (message.Num != null && message.hasOwnProperty("Num"))
                object.Num = message.Num;
            return object;
        };

        /**
         * Converts this GameMsgPlayerNumResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgPlayerNumResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgPlayerNumResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgPlayerNumResp;
    })();

    pb.GameMsgPlayerListResp = (function() {

        /**
         * Properties of a GameMsgPlayerListResp.
         * @memberof pb
         * @interface IGameMsgPlayerListResp
         * @property {Array.<pb.IRankPlayer>|null} [List] GameMsgPlayerListResp List
         */

        /**
         * Constructs a new GameMsgPlayerListResp.
         * @memberof pb
         * @classdesc Represents a GameMsgPlayerListResp.
         * @implements IGameMsgPlayerListResp
         * @constructor
         * @param {pb.IGameMsgPlayerListResp=} [properties] Properties to set
         */
        function GameMsgPlayerListResp(properties) {
            this.List = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgPlayerListResp List.
         * @member {Array.<pb.IRankPlayer>} List
         * @memberof pb.GameMsgPlayerListResp
         * @instance
         */
        GameMsgPlayerListResp.prototype.List = $util.emptyArray;

        /**
         * Creates a new GameMsgPlayerListResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {pb.IGameMsgPlayerListResp=} [properties] Properties to set
         * @returns {pb.GameMsgPlayerListResp} GameMsgPlayerListResp instance
         */
        GameMsgPlayerListResp.create = function create(properties) {
            return new GameMsgPlayerListResp(properties);
        };

        /**
         * Encodes the specified GameMsgPlayerListResp message. Does not implicitly {@link pb.GameMsgPlayerListResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {pb.IGameMsgPlayerListResp} message GameMsgPlayerListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgPlayerListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.List != null && message.List.length)
                for (var i = 0; i < message.List.length; ++i)
                    $root.pb.RankPlayer.encode(message.List[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameMsgPlayerListResp message, length delimited. Does not implicitly {@link pb.GameMsgPlayerListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {pb.IGameMsgPlayerListResp} message GameMsgPlayerListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgPlayerListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgPlayerListResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgPlayerListResp} GameMsgPlayerListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgPlayerListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgPlayerListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.List && message.List.length))
                        message.List = [];
                    message.List.push($root.pb.RankPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgPlayerListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgPlayerListResp} GameMsgPlayerListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgPlayerListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgPlayerListResp message.
         * @function verify
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgPlayerListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.List != null && message.hasOwnProperty("List")) {
                if (!Array.isArray(message.List))
                    return "List: array expected";
                for (var i = 0; i < message.List.length; ++i) {
                    var error = $root.pb.RankPlayer.verify(message.List[i]);
                    if (error)
                        return "List." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameMsgPlayerListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgPlayerListResp} GameMsgPlayerListResp
         */
        GameMsgPlayerListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgPlayerListResp)
                return object;
            var message = new $root.pb.GameMsgPlayerListResp();
            if (object.List) {
                if (!Array.isArray(object.List))
                    throw TypeError(".pb.GameMsgPlayerListResp.List: array expected");
                message.List = [];
                for (var i = 0; i < object.List.length; ++i) {
                    if (typeof object.List[i] !== "object")
                        throw TypeError(".pb.GameMsgPlayerListResp.List: object expected");
                    message.List[i] = $root.pb.RankPlayer.fromObject(object.List[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameMsgPlayerListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgPlayerListResp
         * @static
         * @param {pb.GameMsgPlayerListResp} message GameMsgPlayerListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgPlayerListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.List = [];
            if (message.List && message.List.length) {
                object.List = [];
                for (var j = 0; j < message.List.length; ++j)
                    object.List[j] = $root.pb.RankPlayer.toObject(message.List[j], options);
            }
            return object;
        };

        /**
         * Converts this GameMsgPlayerListResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgPlayerListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgPlayerListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgPlayerListResp;
    })();

    pb.GameMsgBetReq = (function() {

        /**
         * Properties of a GameMsgBetReq.
         * @memberof pb
         * @interface IGameMsgBetReq
         * @property {number|null} [Area] GameMsgBetReq Area
         * @property {number|null} [Index] GameMsgBetReq Index
         */

        /**
         * Constructs a new GameMsgBetReq.
         * @memberof pb
         * @classdesc Represents a GameMsgBetReq.
         * @implements IGameMsgBetReq
         * @constructor
         * @param {pb.IGameMsgBetReq=} [properties] Properties to set
         */
        function GameMsgBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgBetReq Area.
         * @member {number} Area
         * @memberof pb.GameMsgBetReq
         * @instance
         */
        GameMsgBetReq.prototype.Area = 0;

        /**
         * GameMsgBetReq Index.
         * @member {number} Index
         * @memberof pb.GameMsgBetReq
         * @instance
         */
        GameMsgBetReq.prototype.Index = 0;

        /**
         * Creates a new GameMsgBetReq instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {pb.IGameMsgBetReq=} [properties] Properties to set
         * @returns {pb.GameMsgBetReq} GameMsgBetReq instance
         */
        GameMsgBetReq.create = function create(properties) {
            return new GameMsgBetReq(properties);
        };

        /**
         * Encodes the specified GameMsgBetReq message. Does not implicitly {@link pb.GameMsgBetReq.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {pb.IGameMsgBetReq} message GameMsgBetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Area);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Index);
            return writer;
        };

        /**
         * Encodes the specified GameMsgBetReq message, length delimited. Does not implicitly {@link pb.GameMsgBetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {pb.IGameMsgBetReq} message GameMsgBetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgBetReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgBetReq} GameMsgBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Area = reader.uint32();
                    break;
                case 2:
                    message.Index = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgBetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgBetReq} GameMsgBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgBetReq message.
         * @function verify
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgBetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Area != null && message.hasOwnProperty("Area"))
                if (!$util.isInteger(message.Area))
                    return "Area: integer expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            return null;
        };

        /**
         * Creates a GameMsgBetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgBetReq} GameMsgBetReq
         */
        GameMsgBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgBetReq)
                return object;
            var message = new $root.pb.GameMsgBetReq();
            if (object.Area != null)
                message.Area = object.Area >>> 0;
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameMsgBetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgBetReq
         * @static
         * @param {pb.GameMsgBetReq} message GameMsgBetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgBetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Area = 0;
                object.Index = 0;
            }
            if (message.Area != null && message.hasOwnProperty("Area"))
                object.Area = message.Area;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            return object;
        };

        /**
         * Converts this GameMsgBetReq to JSON.
         * @function toJSON
         * @memberof pb.GameMsgBetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgBetReq;
    })();

    pb.GameMsgBetResp = (function() {

        /**
         * Properties of a GameMsgBetResp.
         * @memberof pb
         * @interface IGameMsgBetResp
         * @property {number|null} [Code] GameMsgBetResp Code
         * @property {number|null} [Area] GameMsgBetResp Area
         * @property {number|null} [Index] GameMsgBetResp Index
         * @property {Array.<number|Long>|null} [TotalBet] GameMsgBetResp TotalBet
         * @property {number|null} [ProductID] GameMsgBetResp ProductID
         * @property {Array.<com.cw.chess2.platform.ICurrencyPair>|null} [Rewards] GameMsgBetResp Rewards
         */

        /**
         * Constructs a new GameMsgBetResp.
         * @memberof pb
         * @classdesc Represents a GameMsgBetResp.
         * @implements IGameMsgBetResp
         * @constructor
         * @param {pb.IGameMsgBetResp=} [properties] Properties to set
         */
        function GameMsgBetResp(properties) {
            this.TotalBet = [];
            this.Rewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgBetResp Code.
         * @member {number} Code
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.Code = 0;

        /**
         * GameMsgBetResp Area.
         * @member {number} Area
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.Area = 0;

        /**
         * GameMsgBetResp Index.
         * @member {number} Index
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.Index = 0;

        /**
         * GameMsgBetResp TotalBet.
         * @member {Array.<number|Long>} TotalBet
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.TotalBet = $util.emptyArray;

        /**
         * GameMsgBetResp ProductID.
         * @member {number} ProductID
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.ProductID = 0;

        /**
         * GameMsgBetResp Rewards.
         * @member {Array.<com.cw.chess2.platform.ICurrencyPair>} Rewards
         * @memberof pb.GameMsgBetResp
         * @instance
         */
        GameMsgBetResp.prototype.Rewards = $util.emptyArray;

        /**
         * Creates a new GameMsgBetResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {pb.IGameMsgBetResp=} [properties] Properties to set
         * @returns {pb.GameMsgBetResp} GameMsgBetResp instance
         */
        GameMsgBetResp.create = function create(properties) {
            return new GameMsgBetResp(properties);
        };

        /**
         * Encodes the specified GameMsgBetResp message. Does not implicitly {@link pb.GameMsgBetResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {pb.IGameMsgBetResp} message GameMsgBetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Area);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Index);
            if (message.TotalBet != null && message.TotalBet.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.TotalBet.length; ++i)
                    writer.int64(message.TotalBet[i]);
                writer.ldelim();
            }
            if (message.ProductID != null && Object.hasOwnProperty.call(message, "ProductID"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ProductID);
            if (message.Rewards != null && message.Rewards.length)
                for (var i = 0; i < message.Rewards.length; ++i)
                    $root.com.cw.chess2.platform.CurrencyPair.encode(message.Rewards[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameMsgBetResp message, length delimited. Does not implicitly {@link pb.GameMsgBetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {pb.IGameMsgBetResp} message GameMsgBetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgBetResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgBetResp} GameMsgBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.uint32();
                    break;
                case 2:
                    message.Area = reader.uint32();
                    break;
                case 3:
                    message.Index = reader.uint32();
                    break;
                case 4:
                    if (!(message.TotalBet && message.TotalBet.length))
                        message.TotalBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TotalBet.push(reader.int64());
                    } else
                        message.TotalBet.push(reader.int64());
                    break;
                case 5:
                    message.ProductID = reader.uint32();
                    break;
                case 6:
                    if (!(message.Rewards && message.Rewards.length))
                        message.Rewards = [];
                    message.Rewards.push($root.com.cw.chess2.platform.CurrencyPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgBetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgBetResp} GameMsgBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgBetResp message.
         * @function verify
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgBetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Area != null && message.hasOwnProperty("Area"))
                if (!$util.isInteger(message.Area))
                    return "Area: integer expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet")) {
                if (!Array.isArray(message.TotalBet))
                    return "TotalBet: array expected";
                for (var i = 0; i < message.TotalBet.length; ++i)
                    if (!$util.isInteger(message.TotalBet[i]) && !(message.TotalBet[i] && $util.isInteger(message.TotalBet[i].low) && $util.isInteger(message.TotalBet[i].high)))
                        return "TotalBet: integer|Long[] expected";
            }
            if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                if (!$util.isInteger(message.ProductID))
                    return "ProductID: integer expected";
            if (message.Rewards != null && message.hasOwnProperty("Rewards")) {
                if (!Array.isArray(message.Rewards))
                    return "Rewards: array expected";
                for (var i = 0; i < message.Rewards.length; ++i) {
                    var error = $root.com.cw.chess2.platform.CurrencyPair.verify(message.Rewards[i]);
                    if (error)
                        return "Rewards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameMsgBetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgBetResp} GameMsgBetResp
         */
        GameMsgBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgBetResp)
                return object;
            var message = new $root.pb.GameMsgBetResp();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Area != null)
                message.Area = object.Area >>> 0;
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            if (object.TotalBet) {
                if (!Array.isArray(object.TotalBet))
                    throw TypeError(".pb.GameMsgBetResp.TotalBet: array expected");
                message.TotalBet = [];
                for (var i = 0; i < object.TotalBet.length; ++i)
                    if ($util.Long)
                        (message.TotalBet[i] = $util.Long.fromValue(object.TotalBet[i])).unsigned = false;
                    else if (typeof object.TotalBet[i] === "string")
                        message.TotalBet[i] = parseInt(object.TotalBet[i], 10);
                    else if (typeof object.TotalBet[i] === "number")
                        message.TotalBet[i] = object.TotalBet[i];
                    else if (typeof object.TotalBet[i] === "object")
                        message.TotalBet[i] = new $util.LongBits(object.TotalBet[i].low >>> 0, object.TotalBet[i].high >>> 0).toNumber();
            }
            if (object.ProductID != null)
                message.ProductID = object.ProductID >>> 0;
            if (object.Rewards) {
                if (!Array.isArray(object.Rewards))
                    throw TypeError(".pb.GameMsgBetResp.Rewards: array expected");
                message.Rewards = [];
                for (var i = 0; i < object.Rewards.length; ++i) {
                    if (typeof object.Rewards[i] !== "object")
                        throw TypeError(".pb.GameMsgBetResp.Rewards: object expected");
                    message.Rewards[i] = $root.com.cw.chess2.platform.CurrencyPair.fromObject(object.Rewards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameMsgBetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgBetResp
         * @static
         * @param {pb.GameMsgBetResp} message GameMsgBetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.TotalBet = [];
                object.Rewards = [];
            }
            if (options.defaults) {
                object.Code = 0;
                object.Area = 0;
                object.Index = 0;
                object.ProductID = 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Area != null && message.hasOwnProperty("Area"))
                object.Area = message.Area;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.TotalBet && message.TotalBet.length) {
                object.TotalBet = [];
                for (var j = 0; j < message.TotalBet.length; ++j)
                    if (typeof message.TotalBet[j] === "number")
                        object.TotalBet[j] = options.longs === String ? String(message.TotalBet[j]) : message.TotalBet[j];
                    else
                        object.TotalBet[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet[j]) : options.longs === Number ? new $util.LongBits(message.TotalBet[j].low >>> 0, message.TotalBet[j].high >>> 0).toNumber() : message.TotalBet[j];
            }
            if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                object.ProductID = message.ProductID;
            if (message.Rewards && message.Rewards.length) {
                object.Rewards = [];
                for (var j = 0; j < message.Rewards.length; ++j)
                    object.Rewards[j] = $root.com.cw.chess2.platform.CurrencyPair.toObject(message.Rewards[j], options);
            }
            return object;
        };

        /**
         * Converts this GameMsgBetResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgBetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgBetResp;
    })();

    pb.GameMsgBetBroadcastResp = (function() {

        /**
         * Properties of a GameMsgBetBroadcastResp.
         * @memberof pb
         * @interface IGameMsgBetBroadcastResp
         * @property {number|null} [UID] GameMsgBetBroadcastResp UID
         * @property {Array.<pb.IArrayUInt32>|null} [AreaCoins] GameMsgBetBroadcastResp AreaCoins
         * @property {Array.<number|Long>|null} [TotalBet] GameMsgBetBroadcastResp TotalBet
         * @property {string|null} [Avatar] GameMsgBetBroadcastResp Avatar
         */

        /**
         * Constructs a new GameMsgBetBroadcastResp.
         * @memberof pb
         * @classdesc Represents a GameMsgBetBroadcastResp.
         * @implements IGameMsgBetBroadcastResp
         * @constructor
         * @param {pb.IGameMsgBetBroadcastResp=} [properties] Properties to set
         */
        function GameMsgBetBroadcastResp(properties) {
            this.AreaCoins = [];
            this.TotalBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgBetBroadcastResp UID.
         * @member {number} UID
         * @memberof pb.GameMsgBetBroadcastResp
         * @instance
         */
        GameMsgBetBroadcastResp.prototype.UID = 0;

        /**
         * GameMsgBetBroadcastResp AreaCoins.
         * @member {Array.<pb.IArrayUInt32>} AreaCoins
         * @memberof pb.GameMsgBetBroadcastResp
         * @instance
         */
        GameMsgBetBroadcastResp.prototype.AreaCoins = $util.emptyArray;

        /**
         * GameMsgBetBroadcastResp TotalBet.
         * @member {Array.<number|Long>} TotalBet
         * @memberof pb.GameMsgBetBroadcastResp
         * @instance
         */
        GameMsgBetBroadcastResp.prototype.TotalBet = $util.emptyArray;

        /**
         * GameMsgBetBroadcastResp Avatar.
         * @member {string} Avatar
         * @memberof pb.GameMsgBetBroadcastResp
         * @instance
         */
        GameMsgBetBroadcastResp.prototype.Avatar = "";

        /**
         * Creates a new GameMsgBetBroadcastResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {pb.IGameMsgBetBroadcastResp=} [properties] Properties to set
         * @returns {pb.GameMsgBetBroadcastResp} GameMsgBetBroadcastResp instance
         */
        GameMsgBetBroadcastResp.create = function create(properties) {
            return new GameMsgBetBroadcastResp(properties);
        };

        /**
         * Encodes the specified GameMsgBetBroadcastResp message. Does not implicitly {@link pb.GameMsgBetBroadcastResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {pb.IGameMsgBetBroadcastResp} message GameMsgBetBroadcastResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetBroadcastResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && Object.hasOwnProperty.call(message, "UID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.UID);
            if (message.AreaCoins != null && message.AreaCoins.length)
                for (var i = 0; i < message.AreaCoins.length; ++i)
                    $root.pb.ArrayUInt32.encode(message.AreaCoins[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.TotalBet != null && message.TotalBet.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.TotalBet.length; ++i)
                    writer.int64(message.TotalBet[i]);
                writer.ldelim();
            }
            if (message.Avatar != null && Object.hasOwnProperty.call(message, "Avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Avatar);
            return writer;
        };

        /**
         * Encodes the specified GameMsgBetBroadcastResp message, length delimited. Does not implicitly {@link pb.GameMsgBetBroadcastResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {pb.IGameMsgBetBroadcastResp} message GameMsgBetBroadcastResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgBetBroadcastResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgBetBroadcastResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgBetBroadcastResp} GameMsgBetBroadcastResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetBroadcastResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgBetBroadcastResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.uint32();
                    break;
                case 2:
                    if (!(message.AreaCoins && message.AreaCoins.length))
                        message.AreaCoins = [];
                    message.AreaCoins.push($root.pb.ArrayUInt32.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.TotalBet && message.TotalBet.length))
                        message.TotalBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TotalBet.push(reader.int64());
                    } else
                        message.TotalBet.push(reader.int64());
                    break;
                case 4:
                    message.Avatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgBetBroadcastResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgBetBroadcastResp} GameMsgBetBroadcastResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgBetBroadcastResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgBetBroadcastResp message.
         * @function verify
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgBetBroadcastResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID))
                    return "UID: integer expected";
            if (message.AreaCoins != null && message.hasOwnProperty("AreaCoins")) {
                if (!Array.isArray(message.AreaCoins))
                    return "AreaCoins: array expected";
                for (var i = 0; i < message.AreaCoins.length; ++i) {
                    var error = $root.pb.ArrayUInt32.verify(message.AreaCoins[i]);
                    if (error)
                        return "AreaCoins." + error;
                }
            }
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet")) {
                if (!Array.isArray(message.TotalBet))
                    return "TotalBet: array expected";
                for (var i = 0; i < message.TotalBet.length; ++i)
                    if (!$util.isInteger(message.TotalBet[i]) && !(message.TotalBet[i] && $util.isInteger(message.TotalBet[i].low) && $util.isInteger(message.TotalBet[i].high)))
                        return "TotalBet: integer|Long[] expected";
            }
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                if (!$util.isString(message.Avatar))
                    return "Avatar: string expected";
            return null;
        };

        /**
         * Creates a GameMsgBetBroadcastResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgBetBroadcastResp} GameMsgBetBroadcastResp
         */
        GameMsgBetBroadcastResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgBetBroadcastResp)
                return object;
            var message = new $root.pb.GameMsgBetBroadcastResp();
            if (object.UID != null)
                message.UID = object.UID >>> 0;
            if (object.AreaCoins) {
                if (!Array.isArray(object.AreaCoins))
                    throw TypeError(".pb.GameMsgBetBroadcastResp.AreaCoins: array expected");
                message.AreaCoins = [];
                for (var i = 0; i < object.AreaCoins.length; ++i) {
                    if (typeof object.AreaCoins[i] !== "object")
                        throw TypeError(".pb.GameMsgBetBroadcastResp.AreaCoins: object expected");
                    message.AreaCoins[i] = $root.pb.ArrayUInt32.fromObject(object.AreaCoins[i]);
                }
            }
            if (object.TotalBet) {
                if (!Array.isArray(object.TotalBet))
                    throw TypeError(".pb.GameMsgBetBroadcastResp.TotalBet: array expected");
                message.TotalBet = [];
                for (var i = 0; i < object.TotalBet.length; ++i)
                    if ($util.Long)
                        (message.TotalBet[i] = $util.Long.fromValue(object.TotalBet[i])).unsigned = false;
                    else if (typeof object.TotalBet[i] === "string")
                        message.TotalBet[i] = parseInt(object.TotalBet[i], 10);
                    else if (typeof object.TotalBet[i] === "number")
                        message.TotalBet[i] = object.TotalBet[i];
                    else if (typeof object.TotalBet[i] === "object")
                        message.TotalBet[i] = new $util.LongBits(object.TotalBet[i].low >>> 0, object.TotalBet[i].high >>> 0).toNumber();
            }
            if (object.Avatar != null)
                message.Avatar = String(object.Avatar);
            return message;
        };

        /**
         * Creates a plain object from a GameMsgBetBroadcastResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgBetBroadcastResp
         * @static
         * @param {pb.GameMsgBetBroadcastResp} message GameMsgBetBroadcastResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgBetBroadcastResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AreaCoins = [];
                object.TotalBet = [];
            }
            if (options.defaults) {
                object.UID = 0;
                object.Avatar = "";
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.AreaCoins && message.AreaCoins.length) {
                object.AreaCoins = [];
                for (var j = 0; j < message.AreaCoins.length; ++j)
                    object.AreaCoins[j] = $root.pb.ArrayUInt32.toObject(message.AreaCoins[j], options);
            }
            if (message.TotalBet && message.TotalBet.length) {
                object.TotalBet = [];
                for (var j = 0; j < message.TotalBet.length; ++j)
                    if (typeof message.TotalBet[j] === "number")
                        object.TotalBet[j] = options.longs === String ? String(message.TotalBet[j]) : message.TotalBet[j];
                    else
                        object.TotalBet[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet[j]) : options.longs === Number ? new $util.LongBits(message.TotalBet[j].low >>> 0, message.TotalBet[j].high >>> 0).toNumber() : message.TotalBet[j];
            }
            if (message.Avatar != null && message.hasOwnProperty("Avatar"))
                object.Avatar = message.Avatar;
            return object;
        };

        /**
         * Converts this GameMsgBetBroadcastResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgBetBroadcastResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgBetBroadcastResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgBetBroadcastResp;
    })();

    pb.GameMsgActivityRedResp = (function() {

        /**
         * Properties of a GameMsgActivityRedResp.
         * @memberof pb
         * @interface IGameMsgActivityRedResp
         * @property {number|Long|null} [TotalReward] GameMsgActivityRedResp TotalReward
         * @property {number|null} [Real] GameMsgActivityRedResp Real
         * @property {number|null} [Empty] GameMsgActivityRedResp Empty
         */

        /**
         * Constructs a new GameMsgActivityRedResp.
         * @memberof pb
         * @classdesc Represents a GameMsgActivityRedResp.
         * @implements IGameMsgActivityRedResp
         * @constructor
         * @param {pb.IGameMsgActivityRedResp=} [properties] Properties to set
         */
        function GameMsgActivityRedResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgActivityRedResp TotalReward.
         * @member {number|Long} TotalReward
         * @memberof pb.GameMsgActivityRedResp
         * @instance
         */
        GameMsgActivityRedResp.prototype.TotalReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameMsgActivityRedResp Real.
         * @member {number} Real
         * @memberof pb.GameMsgActivityRedResp
         * @instance
         */
        GameMsgActivityRedResp.prototype.Real = 0;

        /**
         * GameMsgActivityRedResp Empty.
         * @member {number} Empty
         * @memberof pb.GameMsgActivityRedResp
         * @instance
         */
        GameMsgActivityRedResp.prototype.Empty = 0;

        /**
         * Creates a new GameMsgActivityRedResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {pb.IGameMsgActivityRedResp=} [properties] Properties to set
         * @returns {pb.GameMsgActivityRedResp} GameMsgActivityRedResp instance
         */
        GameMsgActivityRedResp.create = function create(properties) {
            return new GameMsgActivityRedResp(properties);
        };

        /**
         * Encodes the specified GameMsgActivityRedResp message. Does not implicitly {@link pb.GameMsgActivityRedResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {pb.IGameMsgActivityRedResp} message GameMsgActivityRedResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgActivityRedResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TotalReward != null && Object.hasOwnProperty.call(message, "TotalReward"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.TotalReward);
            if (message.Real != null && Object.hasOwnProperty.call(message, "Real"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Real);
            if (message.Empty != null && Object.hasOwnProperty.call(message, "Empty"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Empty);
            return writer;
        };

        /**
         * Encodes the specified GameMsgActivityRedResp message, length delimited. Does not implicitly {@link pb.GameMsgActivityRedResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {pb.IGameMsgActivityRedResp} message GameMsgActivityRedResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgActivityRedResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgActivityRedResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgActivityRedResp} GameMsgActivityRedResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgActivityRedResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgActivityRedResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TotalReward = reader.int64();
                    break;
                case 2:
                    message.Real = reader.uint32();
                    break;
                case 3:
                    message.Empty = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgActivityRedResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgActivityRedResp} GameMsgActivityRedResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgActivityRedResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgActivityRedResp message.
         * @function verify
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgActivityRedResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TotalReward != null && message.hasOwnProperty("TotalReward"))
                if (!$util.isInteger(message.TotalReward) && !(message.TotalReward && $util.isInteger(message.TotalReward.low) && $util.isInteger(message.TotalReward.high)))
                    return "TotalReward: integer|Long expected";
            if (message.Real != null && message.hasOwnProperty("Real"))
                if (!$util.isInteger(message.Real))
                    return "Real: integer expected";
            if (message.Empty != null && message.hasOwnProperty("Empty"))
                if (!$util.isInteger(message.Empty))
                    return "Empty: integer expected";
            return null;
        };

        /**
         * Creates a GameMsgActivityRedResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgActivityRedResp} GameMsgActivityRedResp
         */
        GameMsgActivityRedResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgActivityRedResp)
                return object;
            var message = new $root.pb.GameMsgActivityRedResp();
            if (object.TotalReward != null)
                if ($util.Long)
                    (message.TotalReward = $util.Long.fromValue(object.TotalReward)).unsigned = false;
                else if (typeof object.TotalReward === "string")
                    message.TotalReward = parseInt(object.TotalReward, 10);
                else if (typeof object.TotalReward === "number")
                    message.TotalReward = object.TotalReward;
                else if (typeof object.TotalReward === "object")
                    message.TotalReward = new $util.LongBits(object.TotalReward.low >>> 0, object.TotalReward.high >>> 0).toNumber();
            if (object.Real != null)
                message.Real = object.Real >>> 0;
            if (object.Empty != null)
                message.Empty = object.Empty >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameMsgActivityRedResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgActivityRedResp
         * @static
         * @param {pb.GameMsgActivityRedResp} message GameMsgActivityRedResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgActivityRedResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalReward = options.longs === String ? "0" : 0;
                object.Real = 0;
                object.Empty = 0;
            }
            if (message.TotalReward != null && message.hasOwnProperty("TotalReward"))
                if (typeof message.TotalReward === "number")
                    object.TotalReward = options.longs === String ? String(message.TotalReward) : message.TotalReward;
                else
                    object.TotalReward = options.longs === String ? $util.Long.prototype.toString.call(message.TotalReward) : options.longs === Number ? new $util.LongBits(message.TotalReward.low >>> 0, message.TotalReward.high >>> 0).toNumber() : message.TotalReward;
            if (message.Real != null && message.hasOwnProperty("Real"))
                object.Real = message.Real;
            if (message.Empty != null && message.hasOwnProperty("Empty"))
                object.Empty = message.Empty;
            return object;
        };

        /**
         * Converts this GameMsgActivityRedResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgActivityRedResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgActivityRedResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgActivityRedResp;
    })();

    pb.GameMsgGameStartResp = (function() {

        /**
         * Properties of a GameMsgGameStartResp.
         * @memberof pb
         * @interface IGameMsgGameStartResp
         * @property {number|null} [TimeLeft] GameMsgGameStartResp TimeLeft
         */

        /**
         * Constructs a new GameMsgGameStartResp.
         * @memberof pb
         * @classdesc Represents a GameMsgGameStartResp.
         * @implements IGameMsgGameStartResp
         * @constructor
         * @param {pb.IGameMsgGameStartResp=} [properties] Properties to set
         */
        function GameMsgGameStartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameMsgGameStartResp TimeLeft.
         * @member {number} TimeLeft
         * @memberof pb.GameMsgGameStartResp
         * @instance
         */
        GameMsgGameStartResp.prototype.TimeLeft = 0;

        /**
         * Creates a new GameMsgGameStartResp instance using the specified properties.
         * @function create
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {pb.IGameMsgGameStartResp=} [properties] Properties to set
         * @returns {pb.GameMsgGameStartResp} GameMsgGameStartResp instance
         */
        GameMsgGameStartResp.create = function create(properties) {
            return new GameMsgGameStartResp(properties);
        };

        /**
         * Encodes the specified GameMsgGameStartResp message. Does not implicitly {@link pb.GameMsgGameStartResp.verify|verify} messages.
         * @function encode
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {pb.IGameMsgGameStartResp} message GameMsgGameStartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgGameStartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeLeft != null && Object.hasOwnProperty.call(message, "TimeLeft"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.TimeLeft);
            return writer;
        };

        /**
         * Encodes the specified GameMsgGameStartResp message, length delimited. Does not implicitly {@link pb.GameMsgGameStartResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {pb.IGameMsgGameStartResp} message GameMsgGameStartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameMsgGameStartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameMsgGameStartResp message from the specified reader or buffer.
         * @function decode
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.GameMsgGameStartResp} GameMsgGameStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgGameStartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.GameMsgGameStartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeLeft = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameMsgGameStartResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.GameMsgGameStartResp} GameMsgGameStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameMsgGameStartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameMsgGameStartResp message.
         * @function verify
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameMsgGameStartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
                if (!$util.isInteger(message.TimeLeft))
                    return "TimeLeft: integer expected";
            return null;
        };

        /**
         * Creates a GameMsgGameStartResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.GameMsgGameStartResp} GameMsgGameStartResp
         */
        GameMsgGameStartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.GameMsgGameStartResp)
                return object;
            var message = new $root.pb.GameMsgGameStartResp();
            if (object.TimeLeft != null)
                message.TimeLeft = object.TimeLeft >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameMsgGameStartResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.GameMsgGameStartResp
         * @static
         * @param {pb.GameMsgGameStartResp} message GameMsgGameStartResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameMsgGameStartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.TimeLeft = 0;
            if (message.TimeLeft != null && message.hasOwnProperty("TimeLeft"))
                object.TimeLeft = message.TimeLeft;
            return object;
        };

        /**
         * Converts this GameMsgGameStartResp to JSON.
         * @function toJSON
         * @memberof pb.GameMsgGameStartResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameMsgGameStartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameMsgGameStartResp;
    })();

    return pb;
})();

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.cw = (function() {

        /**
         * Namespace cw.
         * @memberof com
         * @namespace
         */
        var cw = {};

        cw.chess2 = (function() {

            /**
             * Namespace chess2.
             * @memberof com.cw
             * @namespace
             */
            var chess2 = {};

            chess2.platform = (function() {

                /**
                 * Namespace platform.
                 * @memberof com.cw.chess2
                 * @namespace
                 */
                var platform = {};

                platform.GameUser = (function() {

                    /**
                     * Properties of a GameUser.
                     * @memberof com.cw.chess2.platform
                     * @interface IGameUser
                     * @property {number|null} [uid] GameUser uid
                     * @property {number|null} [real_user] GameUser real_user
                     * @property {number|Long|null} [coin] GameUser coin
                     * @property {string|null} [user_nick] GameUser user_nick
                     * @property {string|null} [user_head] GameUser user_head
                     * @property {number|null} [Status] GameUser Status
                     * @property {number|null} [SubStatus] GameUser SubStatus
                     * @property {number|null} [Score] GameUser Score
                     */

                    /**
                     * Constructs a new GameUser.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a GameUser.
                     * @implements IGameUser
                     * @constructor
                     * @param {com.cw.chess2.platform.IGameUser=} [properties] Properties to set
                     */
                    function GameUser(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GameUser uid.
                     * @member {number} uid
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.uid = 0;

                    /**
                     * GameUser real_user.
                     * @member {number} real_user
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.real_user = 0;

                    /**
                     * GameUser coin.
                     * @member {number|Long} coin
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GameUser user_nick.
                     * @member {string} user_nick
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.user_nick = "";

                    /**
                     * GameUser user_head.
                     * @member {string} user_head
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.user_head = "";

                    /**
                     * GameUser Status.
                     * @member {number} Status
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.Status = 0;

                    /**
                     * GameUser SubStatus.
                     * @member {number} SubStatus
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.SubStatus = 0;

                    /**
                     * GameUser Score.
                     * @member {number} Score
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     */
                    GameUser.prototype.Score = 0;

                    /**
                     * Creates a new GameUser instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {com.cw.chess2.platform.IGameUser=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.GameUser} GameUser instance
                     */
                    GameUser.create = function create(properties) {
                        return new GameUser(properties);
                    };

                    /**
                     * Encodes the specified GameUser message. Does not implicitly {@link com.cw.chess2.platform.GameUser.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {com.cw.chess2.platform.IGameUser} message GameUser message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameUser.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                        if (message.real_user != null && Object.hasOwnProperty.call(message, "real_user"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.real_user);
                        if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.coin);
                        if (message.user_nick != null && Object.hasOwnProperty.call(message, "user_nick"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.user_nick);
                        if (message.user_head != null && Object.hasOwnProperty.call(message, "user_head"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.user_head);
                        if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Status);
                        if (message.SubStatus != null && Object.hasOwnProperty.call(message, "SubStatus"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.SubStatus);
                        if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.Score);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameUser message, length delimited. Does not implicitly {@link com.cw.chess2.platform.GameUser.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {com.cw.chess2.platform.IGameUser} message GameUser message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameUser.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GameUser message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.GameUser} GameUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameUser.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.GameUser();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.uid = reader.uint32();
                                break;
                            case 2:
                                message.real_user = reader.uint32();
                                break;
                            case 3:
                                message.coin = reader.int64();
                                break;
                            case 4:
                                message.user_nick = reader.string();
                                break;
                            case 5:
                                message.user_head = reader.string();
                                break;
                            case 6:
                                message.Status = reader.uint32();
                                break;
                            case 7:
                                message.SubStatus = reader.uint32();
                                break;
                            case 8:
                                message.Score = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GameUser message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.GameUser} GameUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameUser.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameUser message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameUser.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (!$util.isInteger(message.uid))
                                return "uid: integer expected";
                        if (message.real_user != null && message.hasOwnProperty("real_user"))
                            if (!$util.isInteger(message.real_user))
                                return "real_user: integer expected";
                        if (message.coin != null && message.hasOwnProperty("coin"))
                            if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                                return "coin: integer|Long expected";
                        if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                            if (!$util.isString(message.user_nick))
                                return "user_nick: string expected";
                        if (message.user_head != null && message.hasOwnProperty("user_head"))
                            if (!$util.isString(message.user_head))
                                return "user_head: string expected";
                        if (message.Status != null && message.hasOwnProperty("Status"))
                            if (!$util.isInteger(message.Status))
                                return "Status: integer expected";
                        if (message.SubStatus != null && message.hasOwnProperty("SubStatus"))
                            if (!$util.isInteger(message.SubStatus))
                                return "SubStatus: integer expected";
                        if (message.Score != null && message.hasOwnProperty("Score"))
                            if (!$util.isInteger(message.Score))
                                return "Score: integer expected";
                        return null;
                    };

                    /**
                     * Creates a GameUser message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.GameUser} GameUser
                     */
                    GameUser.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.GameUser)
                            return object;
                        var message = new $root.com.cw.chess2.platform.GameUser();
                        if (object.uid != null)
                            message.uid = object.uid >>> 0;
                        if (object.real_user != null)
                            message.real_user = object.real_user >>> 0;
                        if (object.coin != null)
                            if ($util.Long)
                                (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                            else if (typeof object.coin === "string")
                                message.coin = parseInt(object.coin, 10);
                            else if (typeof object.coin === "number")
                                message.coin = object.coin;
                            else if (typeof object.coin === "object")
                                message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
                        if (object.user_nick != null)
                            message.user_nick = String(object.user_nick);
                        if (object.user_head != null)
                            message.user_head = String(object.user_head);
                        if (object.Status != null)
                            message.Status = object.Status >>> 0;
                        if (object.SubStatus != null)
                            message.SubStatus = object.SubStatus >>> 0;
                        if (object.Score != null)
                            message.Score = object.Score >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameUser message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.GameUser
                     * @static
                     * @param {com.cw.chess2.platform.GameUser} message GameUser
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameUser.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.uid = 0;
                            object.real_user = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.coin = options.longs === String ? "0" : 0;
                            object.user_nick = "";
                            object.user_head = "";
                            object.Status = 0;
                            object.SubStatus = 0;
                            object.Score = 0;
                        }
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.real_user != null && message.hasOwnProperty("real_user"))
                            object.real_user = message.real_user;
                        if (message.coin != null && message.hasOwnProperty("coin"))
                            if (typeof message.coin === "number")
                                object.coin = options.longs === String ? String(message.coin) : message.coin;
                            else
                                object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
                        if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                            object.user_nick = message.user_nick;
                        if (message.user_head != null && message.hasOwnProperty("user_head"))
                            object.user_head = message.user_head;
                        if (message.Status != null && message.hasOwnProperty("Status"))
                            object.Status = message.Status;
                        if (message.SubStatus != null && message.hasOwnProperty("SubStatus"))
                            object.SubStatus = message.SubStatus;
                        if (message.Score != null && message.hasOwnProperty("Score"))
                            object.Score = message.Score;
                        return object;
                    };

                    /**
                     * Converts this GameUser to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.GameUser
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameUser.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GameUser;
                })();

                platform.CommonResponse = (function() {

                    /**
                     * Properties of a CommonResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface ICommonResponse
                     * @property {number|null} [result] CommonResponse result
                     */

                    /**
                     * Constructs a new CommonResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a CommonResponse.
                     * @implements ICommonResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.ICommonResponse=} [properties] Properties to set
                     */
                    function CommonResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommonResponse result.
                     * @member {number} result
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @instance
                     */
                    CommonResponse.prototype.result = 0;

                    /**
                     * Creates a new CommonResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {com.cw.chess2.platform.ICommonResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.CommonResponse} CommonResponse instance
                     */
                    CommonResponse.create = function create(properties) {
                        return new CommonResponse(properties);
                    };

                    /**
                     * Encodes the specified CommonResponse message. Does not implicitly {@link com.cw.chess2.platform.CommonResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {com.cw.chess2.platform.ICommonResponse} message CommonResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommonResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.CommonResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {com.cw.chess2.platform.ICommonResponse} message CommonResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommonResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.CommonResponse} CommonResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommonResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.CommonResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.CommonResponse} CommonResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommonResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommonResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommonResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        return null;
                    };

                    /**
                     * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.CommonResponse} CommonResponse
                     */
                    CommonResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.CommonResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.CommonResponse();
                        if (object.result != null)
                            message.result = object.result >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @static
                     * @param {com.cw.chess2.platform.CommonResponse} message CommonResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommonResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.result = 0;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        return object;
                    };

                    /**
                     * Converts this CommonResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.CommonResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommonResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CommonResponse;
                })();

                /**
                 * ServerType enum.
                 * @name com.cw.chess2.platform.ServerType
                 * @enum {number}
                 * @property {number} SERVER_TPYE_INVALID=0 SERVER_TPYE_INVALID value
                 * @property {number} SERVER_TYPE_GATEWAY=1000 SERVER_TYPE_GATEWAY value
                 * @property {number} SERVER_TYPE_COMMON=1100 SERVER_TYPE_COMMON value
                 * @property {number} SERVER_TYPE_MATCH=1101 SERVER_TYPE_MATCH value
                 * @property {number} SERVER_TYPE_FT=1102 SERVER_TYPE_FT value
                 * @property {number} SERVER_TYPE_BA=2002 SERVER_TYPE_BA value
                 * @property {number} SERVER_TYPE_RUMMY_=3000 SERVER_TYPE_RUMMY_ value
                 * @property {number} SERVER_TYPE_TEEPATTI_=4000 SERVER_TYPE_TEEPATTI_ value
                 * @property {number} SERVER_TYPE_AB_=5000 SERVER_TYPE_AB_ value
                 * @property {number} SERVER_TYPE_7UD_=6000 SERVER_TYPE_7UD_ value
                 * @property {number} SERVER_TYPE_RAPIDTP_=7000 SERVER_TYPE_RAPIDTP_ value
                 * @property {number} SERVER_TYPE_DRAGONTIGER_=8000 SERVER_TYPE_DRAGONTIGER_ value
                 * @property {number} SERVER_TYPE_BLACKRED_=9000 SERVER_TYPE_BLACKRED_ value
                 * @property {number} SERVER_TYPE_HORSERACING_=10000 SERVER_TYPE_HORSERACING_ value
                 * @property {number} SERVER_TYPE_JM_=11000 SERVER_TYPE_JM_ value
                 * @property {number} SERVER_TYPE_BACCARAT_=12000 SERVER_TYPE_BACCARAT_ value
                 * @property {number} SERVER_TYPE_TPJOKER_=13000 SERVER_TYPE_TPJOKER_ value
                 * @property {number} SERVER_TYPE_TPAK47_=14000 SERVER_TYPE_TPAK47_ value
                 * @property {number} SERVER_TYPE_Fruit=15000 SERVER_TYPE_Fruit value
                 * @property {number} SERVER_TYPE_Car=16000 SERVER_TYPE_Car value
                 * @property {number} SERVER_TYPE_LUDO_MASTER=17000 SERVER_TYPE_LUDO_MASTER value
                 * @property {number} SERVER_TYPE_LUDO_CLASSIC=18000 SERVER_TYPE_LUDO_CLASSIC value
                 * @property {number} SERVER_TYPE_LUDO_QUICK=19000 SERVER_TYPE_LUDO_QUICK value
                 */
                platform.ServerType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SERVER_TPYE_INVALID"] = 0;
                    values[valuesById[1000] = "SERVER_TYPE_GATEWAY"] = 1000;
                    values[valuesById[1100] = "SERVER_TYPE_COMMON"] = 1100;
                    values[valuesById[1101] = "SERVER_TYPE_MATCH"] = 1101;
                    values[valuesById[1102] = "SERVER_TYPE_FT"] = 1102;
                    values[valuesById[2002] = "SERVER_TYPE_BA"] = 2002;
                    values[valuesById[3000] = "SERVER_TYPE_RUMMY_"] = 3000;
                    values[valuesById[4000] = "SERVER_TYPE_TEEPATTI_"] = 4000;
                    values[valuesById[5000] = "SERVER_TYPE_AB_"] = 5000;
                    values[valuesById[6000] = "SERVER_TYPE_7UD_"] = 6000;
                    values[valuesById[7000] = "SERVER_TYPE_RAPIDTP_"] = 7000;
                    values[valuesById[8000] = "SERVER_TYPE_DRAGONTIGER_"] = 8000;
                    values[valuesById[9000] = "SERVER_TYPE_BLACKRED_"] = 9000;
                    values[valuesById[10000] = "SERVER_TYPE_HORSERACING_"] = 10000;
                    values[valuesById[11000] = "SERVER_TYPE_JM_"] = 11000;
                    values[valuesById[12000] = "SERVER_TYPE_BACCARAT_"] = 12000;
                    values[valuesById[13000] = "SERVER_TYPE_TPJOKER_"] = 13000;
                    values[valuesById[14000] = "SERVER_TYPE_TPAK47_"] = 14000;
                    values[valuesById[15000] = "SERVER_TYPE_Fruit"] = 15000;
                    values[valuesById[16000] = "SERVER_TYPE_Car"] = 16000;
                    values[valuesById[17000] = "SERVER_TYPE_LUDO_MASTER"] = 17000;
                    values[valuesById[18000] = "SERVER_TYPE_LUDO_CLASSIC"] = 18000;
                    values[valuesById[19000] = "SERVER_TYPE_LUDO_QUICK"] = 19000;
                    return values;
                })();

                /**
                 * ModuleType enum.
                 * @name com.cw.chess2.platform.ModuleType
                 * @enum {number}
                 * @property {number} moduleTypeInvalid=0 moduleTypeInvalid value
                 * @property {number} hall=1000 hall value
                 * @property {number} common=1100 common value
                 * @property {number} matching=1101 matching value
                 * @property {number} fantasy=1102 fantasy value
                 * @property {number} balance=2002 balance value
                 * @property {number} rummy=3000 rummy value
                 * @property {number} teenpatti=4000 teenpatti value
                 * @property {number} andarbahar=5000 andarbahar value
                 * @property {number} seven=6000 seven value
                 * @property {number} rapidTeenpatti=7000 rapidTeenpatti value
                 * @property {number} dragon=8000 dragon value
                 * @property {number} blackRed=9000 blackRed value
                 * @property {number} horseRacing=10000 horseRacing value
                 * @property {number} jhandiMunda=11000 jhandiMunda value
                 * @property {number} baccarat=12000 baccarat value
                 * @property {number} jteenpatti=13000 jteenpatti value
                 * @property {number} ak47teenpatti=14000 ak47teenpatti value
                 * @property {number} fruit=15000 fruit value
                 */
                platform.ModuleType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "moduleTypeInvalid"] = 0;
                    values[valuesById[1000] = "hall"] = 1000;
                    values[valuesById[1100] = "common"] = 1100;
                    values[valuesById[1101] = "matching"] = 1101;
                    values[valuesById[1102] = "fantasy"] = 1102;
                    values[valuesById[2002] = "balance"] = 2002;
                    values[valuesById[3000] = "rummy"] = 3000;
                    values[valuesById[4000] = "teenpatti"] = 4000;
                    values[valuesById[5000] = "andarbahar"] = 5000;
                    values[valuesById[6000] = "seven"] = 6000;
                    values[valuesById[7000] = "rapidTeenpatti"] = 7000;
                    values[valuesById[8000] = "dragon"] = 8000;
                    values[valuesById[9000] = "blackRed"] = 9000;
                    values[valuesById[10000] = "horseRacing"] = 10000;
                    values[valuesById[11000] = "jhandiMunda"] = 11000;
                    values[valuesById[12000] = "baccarat"] = 12000;
                    values[valuesById[13000] = "jteenpatti"] = 13000;
                    values[valuesById[14000] = "ak47teenpatti"] = 14000;
                    values[valuesById[15000] = "fruit"] = 15000;
                    return values;
                })();

                /**
                 * 网关消息开始******************************************
                 * @name com.cw.chess2.platform.ServerGatewayCmd
                 * @enum {number}
                 * @property {number} CMD_GATEWAY_INVALID=0 CMD_GATEWAY_INVALID value
                 * @property {number} CMD_GATEWAY_LOGIN_REQ=1 CMD_GATEWAY_LOGIN_REQ value
                 * @property {number} CMD_GATEWAY_LOGIN_RESP=2 CMD_GATEWAY_LOGIN_RESP value
                 * @property {number} CMD_GATEWAY_LOGOUT_REQ=3 CMD_GATEWAY_LOGOUT_REQ value
                 * @property {number} CMD_GATEWAY_LOGOUT_RESP=4 CMD_GATEWAY_LOGOUT_RESP value
                 * @property {number} CMD_GATEWAY_DISCONNECT_REQ=5 CMD_GATEWAY_DISCONNECT_REQ value
                 * @property {number} CMD_GATEWAY_DISCONNECT_RESP=6 CMD_GATEWAY_DISCONNECT_RESP value
                 * @property {number} CMD_GATEWAY_REPEAT_LOGIN_REQ=7 CMD_GATEWAY_REPEAT_LOGIN_REQ value
                 * @property {number} CMD_GATEWAY_REPEAT_LOGIN_RESP=8 CMD_GATEWAY_REPEAT_LOGIN_RESP value
                 * @property {number} CMD_GATEWAY_PING_REQ=9 CMD_GATEWAY_PING_REQ value
                 * @property {number} CMD_GATEWAY_PING_RESP=10 CMD_GATEWAY_PING_RESP value
                 * @property {number} CMD_GATEWAY_RedPointResp=12 CMD_GATEWAY_RedPointResp value
                 */
                platform.ServerGatewayCmd = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_GATEWAY_INVALID"] = 0;
                    values[valuesById[1] = "CMD_GATEWAY_LOGIN_REQ"] = 1;
                    values[valuesById[2] = "CMD_GATEWAY_LOGIN_RESP"] = 2;
                    values[valuesById[3] = "CMD_GATEWAY_LOGOUT_REQ"] = 3;
                    values[valuesById[4] = "CMD_GATEWAY_LOGOUT_RESP"] = 4;
                    values[valuesById[5] = "CMD_GATEWAY_DISCONNECT_REQ"] = 5;
                    values[valuesById[6] = "CMD_GATEWAY_DISCONNECT_RESP"] = 6;
                    values[valuesById[7] = "CMD_GATEWAY_REPEAT_LOGIN_REQ"] = 7;
                    values[valuesById[8] = "CMD_GATEWAY_REPEAT_LOGIN_RESP"] = 8;
                    values[valuesById[9] = "CMD_GATEWAY_PING_REQ"] = 9;
                    values[valuesById[10] = "CMD_GATEWAY_PING_RESP"] = 10;
                    values[valuesById[12] = "CMD_GATEWAY_RedPointResp"] = 12;
                    return values;
                })();

                platform.LoginRequest = (function() {

                    /**
                     * Properties of a LoginRequest.
                     * @memberof com.cw.chess2.platform
                     * @interface ILoginRequest
                     * @property {number|null} [user_id] LoginRequest user_id
                     * @property {string|null} [token] LoginRequest token
                     */

                    /**
                     * Constructs a new LoginRequest.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a LoginRequest.
                     * @implements ILoginRequest
                     * @constructor
                     * @param {com.cw.chess2.platform.ILoginRequest=} [properties] Properties to set
                     */
                    function LoginRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LoginRequest user_id.
                     * @member {number} user_id
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @instance
                     */
                    LoginRequest.prototype.user_id = 0;

                    /**
                     * LoginRequest token.
                     * @member {string} token
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @instance
                     */
                    LoginRequest.prototype.token = "";

                    /**
                     * Creates a new LoginRequest instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {com.cw.chess2.platform.ILoginRequest=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.LoginRequest} LoginRequest instance
                     */
                    LoginRequest.create = function create(properties) {
                        return new LoginRequest(properties);
                    };

                    /**
                     * Encodes the specified LoginRequest message. Does not implicitly {@link com.cw.chess2.platform.LoginRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {com.cw.chess2.platform.ILoginRequest} message LoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link com.cw.chess2.platform.LoginRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {com.cw.chess2.platform.ILoginRequest} message LoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.LoginRequest} LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.LoginRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user_id = reader.uint32();
                                break;
                            case 2:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.LoginRequest} LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LoginRequest message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            if (!$util.isInteger(message.user_id))
                                return "user_id: integer expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.LoginRequest} LoginRequest
                     */
                    LoginRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.LoginRequest)
                            return object;
                        var message = new $root.com.cw.chess2.platform.LoginRequest();
                        if (object.user_id != null)
                            message.user_id = object.user_id >>> 0;
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @static
                     * @param {com.cw.chess2.platform.LoginRequest} message LoginRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user_id = 0;
                            object.token = "";
                        }
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            object.user_id = message.user_id;
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this LoginRequest to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.LoginRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LoginRequest;
                })();

                platform.LoginResponse = (function() {

                    /**
                     * Properties of a LoginResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface ILoginResponse
                     * @property {number|null} [result] LoginResponse result
                     * @property {number|null} [user_id] LoginResponse user_id
                     */

                    /**
                     * Constructs a new LoginResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a LoginResponse.
                     * @implements ILoginResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.ILoginResponse=} [properties] Properties to set
                     */
                    function LoginResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LoginResponse result.
                     * @member {number} result
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @instance
                     */
                    LoginResponse.prototype.result = 0;

                    /**
                     * LoginResponse user_id.
                     * @member {number} user_id
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @instance
                     */
                    LoginResponse.prototype.user_id = 0;

                    /**
                     * Creates a new LoginResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {com.cw.chess2.platform.ILoginResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.LoginResponse} LoginResponse instance
                     */
                    LoginResponse.create = function create(properties) {
                        return new LoginResponse(properties);
                    };

                    /**
                     * Encodes the specified LoginResponse message. Does not implicitly {@link com.cw.chess2.platform.LoginResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {com.cw.chess2.platform.ILoginResponse} message LoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                        if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.user_id);
                        return writer;
                    };

                    /**
                     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.LoginResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {com.cw.chess2.platform.ILoginResponse} message LoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LoginResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.LoginResponse} LoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.LoginResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.uint32();
                                break;
                            case 2:
                                message.user_id = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.LoginResponse} LoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LoginResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            if (!$util.isInteger(message.user_id))
                                return "user_id: integer expected";
                        return null;
                    };

                    /**
                     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.LoginResponse} LoginResponse
                     */
                    LoginResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.LoginResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.LoginResponse();
                        if (object.result != null)
                            message.result = object.result >>> 0;
                        if (object.user_id != null)
                            message.user_id = object.user_id >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @static
                     * @param {com.cw.chess2.platform.LoginResponse} message LoginResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = 0;
                            object.user_id = 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            object.user_id = message.user_id;
                        return object;
                    };

                    /**
                     * Converts this LoginResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.LoginResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LoginResponse;
                })();

                platform.RedPoint = (function() {

                    /**
                     * Properties of a RedPoint.
                     * @memberof com.cw.chess2.platform
                     * @interface IRedPoint
                     * @property {number|null} [Mail] RedPoint Mail
                     */

                    /**
                     * Constructs a new RedPoint.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a RedPoint.
                     * @implements IRedPoint
                     * @constructor
                     * @param {com.cw.chess2.platform.IRedPoint=} [properties] Properties to set
                     */
                    function RedPoint(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RedPoint Mail.
                     * @member {number} Mail
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @instance
                     */
                    RedPoint.prototype.Mail = 0;

                    /**
                     * Creates a new RedPoint instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {com.cw.chess2.platform.IRedPoint=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.RedPoint} RedPoint instance
                     */
                    RedPoint.create = function create(properties) {
                        return new RedPoint(properties);
                    };

                    /**
                     * Encodes the specified RedPoint message. Does not implicitly {@link com.cw.chess2.platform.RedPoint.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {com.cw.chess2.platform.IRedPoint} message RedPoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RedPoint.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Mail != null && Object.hasOwnProperty.call(message, "Mail"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Mail);
                        return writer;
                    };

                    /**
                     * Encodes the specified RedPoint message, length delimited. Does not implicitly {@link com.cw.chess2.platform.RedPoint.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {com.cw.chess2.platform.IRedPoint} message RedPoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RedPoint.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RedPoint message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.RedPoint} RedPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RedPoint.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.RedPoint();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Mail = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RedPoint message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.RedPoint} RedPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RedPoint.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RedPoint message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RedPoint.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Mail != null && message.hasOwnProperty("Mail"))
                            if (!$util.isInteger(message.Mail))
                                return "Mail: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RedPoint message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.RedPoint} RedPoint
                     */
                    RedPoint.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.RedPoint)
                            return object;
                        var message = new $root.com.cw.chess2.platform.RedPoint();
                        if (object.Mail != null)
                            message.Mail = object.Mail >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RedPoint message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @static
                     * @param {com.cw.chess2.platform.RedPoint} message RedPoint
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RedPoint.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.Mail = 0;
                        if (message.Mail != null && message.hasOwnProperty("Mail"))
                            object.Mail = message.Mail;
                        return object;
                    };

                    /**
                     * Converts this RedPoint to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.RedPoint
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RedPoint.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RedPoint;
                })();

                /**
                 * 通用平台类消息开始*********************************************
                 * @name com.cw.chess2.platform.ServerCommonCmd
                 * @enum {number}
                 * @property {number} CMD_COMMON_INVALID=0 CMD_COMMON_INVALID value
                 * @property {number} CMD_NA_1=1 CMD_NA_1 value
                 * @property {number} CMD_FREEZE_PLAYER_RESP=2 CMD_FREEZE_PLAYER_RESP value
                 * @property {number} CMD_GET_PLAYER_BALANCE_REQ=3 CMD_GET_PLAYER_BALANCE_REQ value
                 * @property {number} CMD_GET_PLAYER_BALANCE_RESP=4 CMD_GET_PLAYER_BALANCE_RESP value
                 * @property {number} CMD_NA_5=5 CMD_NA_5 value
                 * @property {number} CMD_SYSMESSAGE_TO_USER_RESP=6 CMD_SYSMESSAGE_TO_USER_RESP value
                 * @property {number} CMD_NA_7=7 CMD_NA_7 value
                 * @property {number} CMD_PHP_2_USER_COMMON_RESP=8 CMD_PHP_2_USER_COMMON_RESP value
                 * @property {number} CMD_GET_USER_ATTRI_REQ=9 CMD_GET_USER_ATTRI_REQ value
                 * @property {number} CMD_GET_USER_ATTRI_RESP=10 CMD_GET_USER_ATTRI_RESP value
                 * @property {number} CMD_UPDATE_USER_ATTRI_REQ=11 CMD_UPDATE_USER_ATTRI_REQ value
                 * @property {number} CMD_UPDATE_USER_ATTRI_RESP=12 CMD_UPDATE_USER_ATTRI_RESP value
                 * @property {number} CMD_GET_BONUS_REQ=13 CMD_GET_BONUS_REQ value
                 * @property {number} CMD_GET_BONUS_RESP=14 CMD_GET_BONUS_RESP value
                 * @property {number} CMD_BS_REQ=15 CMD_BS_REQ value
                 * @property {number} CMD_BS_RESP=16 CMD_BS_RESP value
                 * @property {number} CMD_BS_RedPointResp=17 CMD_BS_RedPointResp value
                 */
                platform.ServerCommonCmd = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_COMMON_INVALID"] = 0;
                    values[valuesById[1] = "CMD_NA_1"] = 1;
                    values[valuesById[2] = "CMD_FREEZE_PLAYER_RESP"] = 2;
                    values[valuesById[3] = "CMD_GET_PLAYER_BALANCE_REQ"] = 3;
                    values[valuesById[4] = "CMD_GET_PLAYER_BALANCE_RESP"] = 4;
                    values[valuesById[5] = "CMD_NA_5"] = 5;
                    values[valuesById[6] = "CMD_SYSMESSAGE_TO_USER_RESP"] = 6;
                    values[valuesById[7] = "CMD_NA_7"] = 7;
                    values[valuesById[8] = "CMD_PHP_2_USER_COMMON_RESP"] = 8;
                    values[valuesById[9] = "CMD_GET_USER_ATTRI_REQ"] = 9;
                    values[valuesById[10] = "CMD_GET_USER_ATTRI_RESP"] = 10;
                    values[valuesById[11] = "CMD_UPDATE_USER_ATTRI_REQ"] = 11;
                    values[valuesById[12] = "CMD_UPDATE_USER_ATTRI_RESP"] = 12;
                    values[valuesById[13] = "CMD_GET_BONUS_REQ"] = 13;
                    values[valuesById[14] = "CMD_GET_BONUS_RESP"] = 14;
                    values[valuesById[15] = "CMD_BS_REQ"] = 15;
                    values[valuesById[16] = "CMD_BS_RESP"] = 16;
                    values[valuesById[17] = "CMD_BS_RedPointResp"] = 17;
                    return values;
                })();

                /**
                 * CurrencyKind enum.
                 * @name com.cw.chess2.platform.CurrencyKind
                 * @enum {number}
                 * @property {number} CK_INVALID=0 CK_INVALID value
                 * @property {number} CK_Money=1 CK_Money value
                 * @property {number} CK_Practice=2 CK_Practice value
                 */
                platform.CurrencyKind = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CK_INVALID"] = 0;
                    values[valuesById[1] = "CK_Money"] = 1;
                    values[valuesById[2] = "CK_Practice"] = 2;
                    return values;
                })();

                platform.GetPlayerBalanceResponse = (function() {

                    /**
                     * Properties of a GetPlayerBalanceResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface IGetPlayerBalanceResponse
                     * @property {number|null} [result] GetPlayerBalanceResponse result
                     * @property {number|Long|null} [balance] GetPlayerBalanceResponse balance
                     * @property {number|Long|null} [balance_wins] GetPlayerBalanceResponse balance_wins
                     * @property {number|Long|null} [partices] GetPlayerBalanceResponse partices
                     * @property {com.cw.chess2.platform.CurrencyKind|null} [game_currency] GetPlayerBalanceResponse game_currency
                     */

                    /**
                     * Constructs a new GetPlayerBalanceResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a GetPlayerBalanceResponse.
                     * @implements IGetPlayerBalanceResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.IGetPlayerBalanceResponse=} [properties] Properties to set
                     */
                    function GetPlayerBalanceResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetPlayerBalanceResponse result.
                     * @member {number} result
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     */
                    GetPlayerBalanceResponse.prototype.result = 0;

                    /**
                     * GetPlayerBalanceResponse balance.
                     * @member {number|Long} balance
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     */
                    GetPlayerBalanceResponse.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GetPlayerBalanceResponse balance_wins.
                     * @member {number|Long} balance_wins
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     */
                    GetPlayerBalanceResponse.prototype.balance_wins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GetPlayerBalanceResponse partices.
                     * @member {number|Long} partices
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     */
                    GetPlayerBalanceResponse.prototype.partices = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GetPlayerBalanceResponse game_currency.
                     * @member {com.cw.chess2.platform.CurrencyKind} game_currency
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     */
                    GetPlayerBalanceResponse.prototype.game_currency = 0;

                    /**
                     * Creates a new GetPlayerBalanceResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGetPlayerBalanceResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.GetPlayerBalanceResponse} GetPlayerBalanceResponse instance
                     */
                    GetPlayerBalanceResponse.create = function create(properties) {
                        return new GetPlayerBalanceResponse(properties);
                    };

                    /**
                     * Encodes the specified GetPlayerBalanceResponse message. Does not implicitly {@link com.cw.chess2.platform.GetPlayerBalanceResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGetPlayerBalanceResponse} message GetPlayerBalanceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerBalanceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                        if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.balance);
                        if (message.balance_wins != null && Object.hasOwnProperty.call(message, "balance_wins"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.balance_wins);
                        if (message.partices != null && Object.hasOwnProperty.call(message, "partices"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.partices);
                        if (message.game_currency != null && Object.hasOwnProperty.call(message, "game_currency"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.game_currency);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetPlayerBalanceResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.GetPlayerBalanceResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGetPlayerBalanceResponse} message GetPlayerBalanceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetPlayerBalanceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetPlayerBalanceResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.GetPlayerBalanceResponse} GetPlayerBalanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerBalanceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.GetPlayerBalanceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.uint32();
                                break;
                            case 2:
                                message.balance = reader.int64();
                                break;
                            case 3:
                                message.balance_wins = reader.int64();
                                break;
                            case 4:
                                message.partices = reader.int64();
                                break;
                            case 5:
                                message.game_currency = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetPlayerBalanceResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.GetPlayerBalanceResponse} GetPlayerBalanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetPlayerBalanceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetPlayerBalanceResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetPlayerBalanceResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        if (message.balance != null && message.hasOwnProperty("balance"))
                            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                                return "balance: integer|Long expected";
                        if (message.balance_wins != null && message.hasOwnProperty("balance_wins"))
                            if (!$util.isInteger(message.balance_wins) && !(message.balance_wins && $util.isInteger(message.balance_wins.low) && $util.isInteger(message.balance_wins.high)))
                                return "balance_wins: integer|Long expected";
                        if (message.partices != null && message.hasOwnProperty("partices"))
                            if (!$util.isInteger(message.partices) && !(message.partices && $util.isInteger(message.partices.low) && $util.isInteger(message.partices.high)))
                                return "partices: integer|Long expected";
                        if (message.game_currency != null && message.hasOwnProperty("game_currency"))
                            switch (message.game_currency) {
                            default:
                                return "game_currency: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a GetPlayerBalanceResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.GetPlayerBalanceResponse} GetPlayerBalanceResponse
                     */
                    GetPlayerBalanceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.GetPlayerBalanceResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.GetPlayerBalanceResponse();
                        if (object.result != null)
                            message.result = object.result >>> 0;
                        if (object.balance != null)
                            if ($util.Long)
                                (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                            else if (typeof object.balance === "string")
                                message.balance = parseInt(object.balance, 10);
                            else if (typeof object.balance === "number")
                                message.balance = object.balance;
                            else if (typeof object.balance === "object")
                                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
                        if (object.balance_wins != null)
                            if ($util.Long)
                                (message.balance_wins = $util.Long.fromValue(object.balance_wins)).unsigned = false;
                            else if (typeof object.balance_wins === "string")
                                message.balance_wins = parseInt(object.balance_wins, 10);
                            else if (typeof object.balance_wins === "number")
                                message.balance_wins = object.balance_wins;
                            else if (typeof object.balance_wins === "object")
                                message.balance_wins = new $util.LongBits(object.balance_wins.low >>> 0, object.balance_wins.high >>> 0).toNumber();
                        if (object.partices != null)
                            if ($util.Long)
                                (message.partices = $util.Long.fromValue(object.partices)).unsigned = false;
                            else if (typeof object.partices === "string")
                                message.partices = parseInt(object.partices, 10);
                            else if (typeof object.partices === "number")
                                message.partices = object.partices;
                            else if (typeof object.partices === "object")
                                message.partices = new $util.LongBits(object.partices.low >>> 0, object.partices.high >>> 0).toNumber();
                        switch (object.game_currency) {
                        case "CK_INVALID":
                        case 0:
                            message.game_currency = 0;
                            break;
                        case "CK_Money":
                        case 1:
                            message.game_currency = 1;
                            break;
                        case "CK_Practice":
                        case 2:
                            message.game_currency = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetPlayerBalanceResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @static
                     * @param {com.cw.chess2.platform.GetPlayerBalanceResponse} message GetPlayerBalanceResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetPlayerBalanceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.balance = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.balance_wins = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.balance_wins = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.partices = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.partices = options.longs === String ? "0" : 0;
                            object.game_currency = options.enums === String ? "CK_INVALID" : 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        if (message.balance != null && message.hasOwnProperty("balance"))
                            if (typeof message.balance === "number")
                                object.balance = options.longs === String ? String(message.balance) : message.balance;
                            else
                                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
                        if (message.balance_wins != null && message.hasOwnProperty("balance_wins"))
                            if (typeof message.balance_wins === "number")
                                object.balance_wins = options.longs === String ? String(message.balance_wins) : message.balance_wins;
                            else
                                object.balance_wins = options.longs === String ? $util.Long.prototype.toString.call(message.balance_wins) : options.longs === Number ? new $util.LongBits(message.balance_wins.low >>> 0, message.balance_wins.high >>> 0).toNumber() : message.balance_wins;
                        if (message.partices != null && message.hasOwnProperty("partices"))
                            if (typeof message.partices === "number")
                                object.partices = options.longs === String ? String(message.partices) : message.partices;
                            else
                                object.partices = options.longs === String ? $util.Long.prototype.toString.call(message.partices) : options.longs === Number ? new $util.LongBits(message.partices.low >>> 0, message.partices.high >>> 0).toNumber() : message.partices;
                        if (message.game_currency != null && message.hasOwnProperty("game_currency"))
                            object.game_currency = options.enums === String ? $root.com.cw.chess2.platform.CurrencyKind[message.game_currency] : message.game_currency;
                        return object;
                    };

                    /**
                     * Converts this GetPlayerBalanceResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.GetPlayerBalanceResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetPlayerBalanceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetPlayerBalanceResponse;
                })();

                platform.MessageToUserResp = (function() {

                    /**
                     * Properties of a MessageToUserResp.
                     * @memberof com.cw.chess2.platform
                     * @interface IMessageToUserResp
                     * @property {number|null} [lastTime] MessageToUserResp lastTime
                     * @property {string|null} [context] MessageToUserResp context
                     */

                    /**
                     * Constructs a new MessageToUserResp.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MessageToUserResp.
                     * @implements IMessageToUserResp
                     * @constructor
                     * @param {com.cw.chess2.platform.IMessageToUserResp=} [properties] Properties to set
                     */
                    function MessageToUserResp(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MessageToUserResp lastTime.
                     * @member {number} lastTime
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @instance
                     */
                    MessageToUserResp.prototype.lastTime = 0;

                    /**
                     * MessageToUserResp context.
                     * @member {string} context
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @instance
                     */
                    MessageToUserResp.prototype.context = "";

                    /**
                     * Creates a new MessageToUserResp instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {com.cw.chess2.platform.IMessageToUserResp=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MessageToUserResp} MessageToUserResp instance
                     */
                    MessageToUserResp.create = function create(properties) {
                        return new MessageToUserResp(properties);
                    };

                    /**
                     * Encodes the specified MessageToUserResp message. Does not implicitly {@link com.cw.chess2.platform.MessageToUserResp.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {com.cw.chess2.platform.IMessageToUserResp} message MessageToUserResp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageToUserResp.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.lastTime != null && Object.hasOwnProperty.call(message, "lastTime"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.lastTime);
                        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.context);
                        return writer;
                    };

                    /**
                     * Encodes the specified MessageToUserResp message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MessageToUserResp.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {com.cw.chess2.platform.IMessageToUserResp} message MessageToUserResp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MessageToUserResp.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MessageToUserResp message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MessageToUserResp} MessageToUserResp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageToUserResp.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MessageToUserResp();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.lastTime = reader.uint32();
                                break;
                            case 2:
                                message.context = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MessageToUserResp message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MessageToUserResp} MessageToUserResp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MessageToUserResp.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MessageToUserResp message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MessageToUserResp.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                            if (!$util.isInteger(message.lastTime))
                                return "lastTime: integer expected";
                        if (message.context != null && message.hasOwnProperty("context"))
                            if (!$util.isString(message.context))
                                return "context: string expected";
                        return null;
                    };

                    /**
                     * Creates a MessageToUserResp message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MessageToUserResp} MessageToUserResp
                     */
                    MessageToUserResp.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MessageToUserResp)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MessageToUserResp();
                        if (object.lastTime != null)
                            message.lastTime = object.lastTime >>> 0;
                        if (object.context != null)
                            message.context = String(object.context);
                        return message;
                    };

                    /**
                     * Creates a plain object from a MessageToUserResp message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @static
                     * @param {com.cw.chess2.platform.MessageToUserResp} message MessageToUserResp
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MessageToUserResp.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.lastTime = 0;
                            object.context = "";
                        }
                        if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                            object.lastTime = message.lastTime;
                        if (message.context != null && message.hasOwnProperty("context"))
                            object.context = message.context;
                        return object;
                    };

                    /**
                     * Converts this MessageToUserResp to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MessageToUserResp
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MessageToUserResp.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageToUserResp;
                })();

                platform.UserAttri = (function() {

                    /**
                     * Properties of a UserAttri.
                     * @memberof com.cw.chess2.platform
                     * @interface IUserAttri
                     * @property {number|null} [user_id] UserAttri user_id
                     * @property {string|null} [nick] UserAttri nick
                     * @property {string|null} [head] UserAttri head
                     * @property {number|Long|null} [Coin] UserAttri Coin
                     */

                    /**
                     * Constructs a new UserAttri.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a UserAttri.
                     * @implements IUserAttri
                     * @constructor
                     * @param {com.cw.chess2.platform.IUserAttri=} [properties] Properties to set
                     */
                    function UserAttri(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserAttri user_id.
                     * @member {number} user_id
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @instance
                     */
                    UserAttri.prototype.user_id = 0;

                    /**
                     * UserAttri nick.
                     * @member {string} nick
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @instance
                     */
                    UserAttri.prototype.nick = "";

                    /**
                     * UserAttri head.
                     * @member {string} head
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @instance
                     */
                    UserAttri.prototype.head = "";

                    /**
                     * UserAttri Coin.
                     * @member {number|Long} Coin
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @instance
                     */
                    UserAttri.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new UserAttri instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {com.cw.chess2.platform.IUserAttri=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.UserAttri} UserAttri instance
                     */
                    UserAttri.create = function create(properties) {
                        return new UserAttri(properties);
                    };

                    /**
                     * Encodes the specified UserAttri message. Does not implicitly {@link com.cw.chess2.platform.UserAttri.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {com.cw.chess2.platform.IUserAttri} message UserAttri message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserAttri.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
                        if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
                        if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.head);
                        if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Coin);
                        return writer;
                    };

                    /**
                     * Encodes the specified UserAttri message, length delimited. Does not implicitly {@link com.cw.chess2.platform.UserAttri.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {com.cw.chess2.platform.IUserAttri} message UserAttri message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserAttri.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a UserAttri message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.UserAttri} UserAttri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserAttri.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.UserAttri();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user_id = reader.uint32();
                                break;
                            case 2:
                                message.nick = reader.string();
                                break;
                            case 3:
                                message.head = reader.string();
                                break;
                            case 4:
                                message.Coin = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a UserAttri message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.UserAttri} UserAttri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserAttri.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a UserAttri message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UserAttri.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            if (!$util.isInteger(message.user_id))
                                return "user_id: integer expected";
                        if (message.nick != null && message.hasOwnProperty("nick"))
                            if (!$util.isString(message.nick))
                                return "nick: string expected";
                        if (message.head != null && message.hasOwnProperty("head"))
                            if (!$util.isString(message.head))
                                return "head: string expected";
                        if (message.Coin != null && message.hasOwnProperty("Coin"))
                            if (!$util.isInteger(message.Coin) && !(message.Coin && $util.isInteger(message.Coin.low) && $util.isInteger(message.Coin.high)))
                                return "Coin: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a UserAttri message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.UserAttri} UserAttri
                     */
                    UserAttri.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.UserAttri)
                            return object;
                        var message = new $root.com.cw.chess2.platform.UserAttri();
                        if (object.user_id != null)
                            message.user_id = object.user_id >>> 0;
                        if (object.nick != null)
                            message.nick = String(object.nick);
                        if (object.head != null)
                            message.head = String(object.head);
                        if (object.Coin != null)
                            if ($util.Long)
                                (message.Coin = $util.Long.fromValue(object.Coin)).unsigned = false;
                            else if (typeof object.Coin === "string")
                                message.Coin = parseInt(object.Coin, 10);
                            else if (typeof object.Coin === "number")
                                message.Coin = object.Coin;
                            else if (typeof object.Coin === "object")
                                message.Coin = new $util.LongBits(object.Coin.low >>> 0, object.Coin.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a UserAttri message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @static
                     * @param {com.cw.chess2.platform.UserAttri} message UserAttri
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UserAttri.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user_id = 0;
                            object.nick = "";
                            object.head = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.Coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.Coin = options.longs === String ? "0" : 0;
                        }
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            object.user_id = message.user_id;
                        if (message.nick != null && message.hasOwnProperty("nick"))
                            object.nick = message.nick;
                        if (message.head != null && message.hasOwnProperty("head"))
                            object.head = message.head;
                        if (message.Coin != null && message.hasOwnProperty("Coin"))
                            if (typeof message.Coin === "number")
                                object.Coin = options.longs === String ? String(message.Coin) : message.Coin;
                            else
                                object.Coin = options.longs === String ? $util.Long.prototype.toString.call(message.Coin) : options.longs === Number ? new $util.LongBits(message.Coin.low >>> 0, message.Coin.high >>> 0).toNumber() : message.Coin;
                        return object;
                    };

                    /**
                     * Converts this UserAttri to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.UserAttri
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UserAttri.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UserAttri;
                })();

                platform.MSG_GET_USER_ATTRI_REQ = (function() {

                    /**
                     * Properties of a MSG_GET_USER_ATTRI_REQ.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_GET_USER_ATTRI_REQ
                     * @property {Array.<number>|null} [user_ids] MSG_GET_USER_ATTRI_REQ user_ids
                     */

                    /**
                     * Constructs a new MSG_GET_USER_ATTRI_REQ.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_GET_USER_ATTRI_REQ.
                     * @implements IMSG_GET_USER_ATTRI_REQ
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ=} [properties] Properties to set
                     */
                    function MSG_GET_USER_ATTRI_REQ(properties) {
                        this.user_ids = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_GET_USER_ATTRI_REQ user_ids.
                     * @member {Array.<number>} user_ids
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @instance
                     */
                    MSG_GET_USER_ATTRI_REQ.prototype.user_ids = $util.emptyArray;

                    /**
                     * Creates a new MSG_GET_USER_ATTRI_REQ instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ} MSG_GET_USER_ATTRI_REQ instance
                     */
                    MSG_GET_USER_ATTRI_REQ.create = function create(properties) {
                        return new MSG_GET_USER_ATTRI_REQ(properties);
                    };

                    /**
                     * Encodes the specified MSG_GET_USER_ATTRI_REQ message. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ} message MSG_GET_USER_ATTRI_REQ message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_USER_ATTRI_REQ.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_ids != null && message.user_ids.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.user_ids.length; ++i)
                                writer.uint32(message.user_ids[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_GET_USER_ATTRI_REQ message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ} message MSG_GET_USER_ATTRI_REQ message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_USER_ATTRI_REQ.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_GET_USER_ATTRI_REQ message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ} MSG_GET_USER_ATTRI_REQ
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_USER_ATTRI_REQ.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.user_ids && message.user_ids.length))
                                    message.user_ids = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.user_ids.push(reader.uint32());
                                } else
                                    message.user_ids.push(reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_GET_USER_ATTRI_REQ message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ} MSG_GET_USER_ATTRI_REQ
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_USER_ATTRI_REQ.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_GET_USER_ATTRI_REQ message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_GET_USER_ATTRI_REQ.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_ids != null && message.hasOwnProperty("user_ids")) {
                            if (!Array.isArray(message.user_ids))
                                return "user_ids: array expected";
                            for (var i = 0; i < message.user_ids.length; ++i)
                                if (!$util.isInteger(message.user_ids[i]))
                                    return "user_ids: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a MSG_GET_USER_ATTRI_REQ message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ} MSG_GET_USER_ATTRI_REQ
                     */
                    MSG_GET_USER_ATTRI_REQ.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ();
                        if (object.user_ids) {
                            if (!Array.isArray(object.user_ids))
                                throw TypeError(".com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ.user_ids: array expected");
                            message.user_ids = [];
                            for (var i = 0; i < object.user_ids.length; ++i)
                                message.user_ids[i] = object.user_ids[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_GET_USER_ATTRI_REQ message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ} message MSG_GET_USER_ATTRI_REQ
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_GET_USER_ATTRI_REQ.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.user_ids = [];
                        if (message.user_ids && message.user_ids.length) {
                            object.user_ids = [];
                            for (var j = 0; j < message.user_ids.length; ++j)
                                object.user_ids[j] = message.user_ids[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this MSG_GET_USER_ATTRI_REQ to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_GET_USER_ATTRI_REQ.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_GET_USER_ATTRI_REQ;
                })();

                platform.MSG_GET_USER_ATTRI_RESP = (function() {

                    /**
                     * Properties of a MSG_GET_USER_ATTRI_RESP.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_GET_USER_ATTRI_RESP
                     * @property {Array.<com.cw.chess2.platform.IUserAttri>|null} [user_attris] MSG_GET_USER_ATTRI_RESP user_attris
                     */

                    /**
                     * Constructs a new MSG_GET_USER_ATTRI_RESP.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_GET_USER_ATTRI_RESP.
                     * @implements IMSG_GET_USER_ATTRI_RESP
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP=} [properties] Properties to set
                     */
                    function MSG_GET_USER_ATTRI_RESP(properties) {
                        this.user_attris = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_GET_USER_ATTRI_RESP user_attris.
                     * @member {Array.<com.cw.chess2.platform.IUserAttri>} user_attris
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @instance
                     */
                    MSG_GET_USER_ATTRI_RESP.prototype.user_attris = $util.emptyArray;

                    /**
                     * Creates a new MSG_GET_USER_ATTRI_RESP instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP} MSG_GET_USER_ATTRI_RESP instance
                     */
                    MSG_GET_USER_ATTRI_RESP.create = function create(properties) {
                        return new MSG_GET_USER_ATTRI_RESP(properties);
                    };

                    /**
                     * Encodes the specified MSG_GET_USER_ATTRI_RESP message. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP} message MSG_GET_USER_ATTRI_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_USER_ATTRI_RESP.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_attris != null && message.user_attris.length)
                            for (var i = 0; i < message.user_attris.length; ++i)
                                $root.com.cw.chess2.platform.UserAttri.encode(message.user_attris[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_GET_USER_ATTRI_RESP message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP} message MSG_GET_USER_ATTRI_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_USER_ATTRI_RESP.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_GET_USER_ATTRI_RESP message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP} MSG_GET_USER_ATTRI_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_USER_ATTRI_RESP.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.user_attris && message.user_attris.length))
                                    message.user_attris = [];
                                message.user_attris.push($root.com.cw.chess2.platform.UserAttri.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_GET_USER_ATTRI_RESP message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP} MSG_GET_USER_ATTRI_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_USER_ATTRI_RESP.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_GET_USER_ATTRI_RESP message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_GET_USER_ATTRI_RESP.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_attris != null && message.hasOwnProperty("user_attris")) {
                            if (!Array.isArray(message.user_attris))
                                return "user_attris: array expected";
                            for (var i = 0; i < message.user_attris.length; ++i) {
                                var error = $root.com.cw.chess2.platform.UserAttri.verify(message.user_attris[i]);
                                if (error)
                                    return "user_attris." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MSG_GET_USER_ATTRI_RESP message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP} MSG_GET_USER_ATTRI_RESP
                     */
                    MSG_GET_USER_ATTRI_RESP.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP();
                        if (object.user_attris) {
                            if (!Array.isArray(object.user_attris))
                                throw TypeError(".com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP.user_attris: array expected");
                            message.user_attris = [];
                            for (var i = 0; i < object.user_attris.length; ++i) {
                                if (typeof object.user_attris[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP.user_attris: object expected");
                                message.user_attris[i] = $root.com.cw.chess2.platform.UserAttri.fromObject(object.user_attris[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_GET_USER_ATTRI_RESP message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP} message MSG_GET_USER_ATTRI_RESP
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_GET_USER_ATTRI_RESP.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.user_attris = [];
                        if (message.user_attris && message.user_attris.length) {
                            object.user_attris = [];
                            for (var j = 0; j < message.user_attris.length; ++j)
                                object.user_attris[j] = $root.com.cw.chess2.platform.UserAttri.toObject(message.user_attris[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this MSG_GET_USER_ATTRI_RESP to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_GET_USER_ATTRI_RESP.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_GET_USER_ATTRI_RESP;
                })();

                platform.MSG_UPDATE_USER_ATTRI_REQ = (function() {

                    /**
                     * Properties of a MSG_UPDATE_USER_ATTRI_REQ.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_UPDATE_USER_ATTRI_REQ
                     * @property {com.cw.chess2.platform.IUserAttri|null} [user_attri] MSG_UPDATE_USER_ATTRI_REQ user_attri
                     */

                    /**
                     * Constructs a new MSG_UPDATE_USER_ATTRI_REQ.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_UPDATE_USER_ATTRI_REQ.
                     * @implements IMSG_UPDATE_USER_ATTRI_REQ
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ=} [properties] Properties to set
                     */
                    function MSG_UPDATE_USER_ATTRI_REQ(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_UPDATE_USER_ATTRI_REQ user_attri.
                     * @member {com.cw.chess2.platform.IUserAttri|null|undefined} user_attri
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @instance
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.prototype.user_attri = null;

                    /**
                     * Creates a new MSG_UPDATE_USER_ATTRI_REQ instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ} MSG_UPDATE_USER_ATTRI_REQ instance
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.create = function create(properties) {
                        return new MSG_UPDATE_USER_ATTRI_REQ(properties);
                    };

                    /**
                     * Encodes the specified MSG_UPDATE_USER_ATTRI_REQ message. Does not implicitly {@link com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ} message MSG_UPDATE_USER_ATTRI_REQ message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_attri != null && Object.hasOwnProperty.call(message, "user_attri"))
                            $root.com.cw.chess2.platform.UserAttri.encode(message.user_attri, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_UPDATE_USER_ATTRI_REQ message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ} message MSG_UPDATE_USER_ATTRI_REQ message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_UPDATE_USER_ATTRI_REQ message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ} MSG_UPDATE_USER_ATTRI_REQ
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user_attri = $root.com.cw.chess2.platform.UserAttri.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_UPDATE_USER_ATTRI_REQ message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ} MSG_UPDATE_USER_ATTRI_REQ
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_UPDATE_USER_ATTRI_REQ message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_attri != null && message.hasOwnProperty("user_attri")) {
                            var error = $root.com.cw.chess2.platform.UserAttri.verify(message.user_attri);
                            if (error)
                                return "user_attri." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a MSG_UPDATE_USER_ATTRI_REQ message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ} MSG_UPDATE_USER_ATTRI_REQ
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ();
                        if (object.user_attri != null) {
                            if (typeof object.user_attri !== "object")
                                throw TypeError(".com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ.user_attri: object expected");
                            message.user_attri = $root.com.cw.chess2.platform.UserAttri.fromObject(object.user_attri);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_UPDATE_USER_ATTRI_REQ message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @static
                     * @param {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ} message MSG_UPDATE_USER_ATTRI_REQ
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user_attri = null;
                        if (message.user_attri != null && message.hasOwnProperty("user_attri"))
                            object.user_attri = $root.com.cw.chess2.platform.UserAttri.toObject(message.user_attri, options);
                        return object;
                    };

                    /**
                     * Converts this MSG_UPDATE_USER_ATTRI_REQ to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_UPDATE_USER_ATTRI_REQ.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_UPDATE_USER_ATTRI_REQ;
                })();

                platform.MSG_UPDATE_USER_ATTRI_RESP = (function() {

                    /**
                     * Properties of a MSG_UPDATE_USER_ATTRI_RESP.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_UPDATE_USER_ATTRI_RESP
                     * @property {com.cw.chess2.platform.IUserAttri|null} [user_attri] MSG_UPDATE_USER_ATTRI_RESP user_attri
                     */

                    /**
                     * Constructs a new MSG_UPDATE_USER_ATTRI_RESP.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_UPDATE_USER_ATTRI_RESP.
                     * @implements IMSG_UPDATE_USER_ATTRI_RESP
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_RESP=} [properties] Properties to set
                     */
                    function MSG_UPDATE_USER_ATTRI_RESP(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_UPDATE_USER_ATTRI_RESP user_attri.
                     * @member {com.cw.chess2.platform.IUserAttri|null|undefined} user_attri
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @instance
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.prototype.user_attri = null;

                    /**
                     * Creates a new MSG_UPDATE_USER_ATTRI_RESP instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_RESP=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP} MSG_UPDATE_USER_ATTRI_RESP instance
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.create = function create(properties) {
                        return new MSG_UPDATE_USER_ATTRI_RESP(properties);
                    };

                    /**
                     * Encodes the specified MSG_UPDATE_USER_ATTRI_RESP message. Does not implicitly {@link com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_RESP} message MSG_UPDATE_USER_ATTRI_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_attri != null && Object.hasOwnProperty.call(message, "user_attri"))
                            $root.com.cw.chess2.platform.UserAttri.encode(message.user_attri, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_UPDATE_USER_ATTRI_RESP message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_RESP} message MSG_UPDATE_USER_ATTRI_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_UPDATE_USER_ATTRI_RESP message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP} MSG_UPDATE_USER_ATTRI_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user_attri = $root.com.cw.chess2.platform.UserAttri.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_UPDATE_USER_ATTRI_RESP message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP} MSG_UPDATE_USER_ATTRI_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_UPDATE_USER_ATTRI_RESP message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_attri != null && message.hasOwnProperty("user_attri")) {
                            var error = $root.com.cw.chess2.platform.UserAttri.verify(message.user_attri);
                            if (error)
                                return "user_attri." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a MSG_UPDATE_USER_ATTRI_RESP message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP} MSG_UPDATE_USER_ATTRI_RESP
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP();
                        if (object.user_attri != null) {
                            if (typeof object.user_attri !== "object")
                                throw TypeError(".com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP.user_attri: object expected");
                            message.user_attri = $root.com.cw.chess2.platform.UserAttri.fromObject(object.user_attri);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_UPDATE_USER_ATTRI_RESP message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @static
                     * @param {com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP} message MSG_UPDATE_USER_ATTRI_RESP
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user_attri = null;
                        if (message.user_attri != null && message.hasOwnProperty("user_attri"))
                            object.user_attri = $root.com.cw.chess2.platform.UserAttri.toObject(message.user_attri, options);
                        return object;
                    };

                    /**
                     * Converts this MSG_UPDATE_USER_ATTRI_RESP to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_RESP
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_UPDATE_USER_ATTRI_RESP.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_UPDATE_USER_ATTRI_RESP;
                })();

                platform.MSG_GET_BONUS_RESP = (function() {

                    /**
                     * Properties of a MSG_GET_BONUS_RESP.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_GET_BONUS_RESP
                     * @property {number|null} [bonus] MSG_GET_BONUS_RESP bonus
                     */

                    /**
                     * Constructs a new MSG_GET_BONUS_RESP.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_GET_BONUS_RESP.
                     * @implements IMSG_GET_BONUS_RESP
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_GET_BONUS_RESP=} [properties] Properties to set
                     */
                    function MSG_GET_BONUS_RESP(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_GET_BONUS_RESP bonus.
                     * @member {number} bonus
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @instance
                     */
                    MSG_GET_BONUS_RESP.prototype.bonus = 0;

                    /**
                     * Creates a new MSG_GET_BONUS_RESP instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_BONUS_RESP=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_GET_BONUS_RESP} MSG_GET_BONUS_RESP instance
                     */
                    MSG_GET_BONUS_RESP.create = function create(properties) {
                        return new MSG_GET_BONUS_RESP(properties);
                    };

                    /**
                     * Encodes the specified MSG_GET_BONUS_RESP message. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_BONUS_RESP.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_BONUS_RESP} message MSG_GET_BONUS_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_BONUS_RESP.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bonus != null && Object.hasOwnProperty.call(message, "bonus"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bonus);
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_GET_BONUS_RESP message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_GET_BONUS_RESP.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_GET_BONUS_RESP} message MSG_GET_BONUS_RESP message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_GET_BONUS_RESP.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_GET_BONUS_RESP message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_GET_BONUS_RESP} MSG_GET_BONUS_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_BONUS_RESP.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_GET_BONUS_RESP();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.bonus = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_GET_BONUS_RESP message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_GET_BONUS_RESP} MSG_GET_BONUS_RESP
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_GET_BONUS_RESP.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_GET_BONUS_RESP message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_GET_BONUS_RESP.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.bonus != null && message.hasOwnProperty("bonus"))
                            if (!$util.isInteger(message.bonus))
                                return "bonus: integer expected";
                        return null;
                    };

                    /**
                     * Creates a MSG_GET_BONUS_RESP message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_GET_BONUS_RESP} MSG_GET_BONUS_RESP
                     */
                    MSG_GET_BONUS_RESP.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_GET_BONUS_RESP)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_GET_BONUS_RESP();
                        if (object.bonus != null)
                            message.bonus = object.bonus >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_GET_BONUS_RESP message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @static
                     * @param {com.cw.chess2.platform.MSG_GET_BONUS_RESP} message MSG_GET_BONUS_RESP
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_GET_BONUS_RESP.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.bonus = 0;
                        if (message.bonus != null && message.hasOwnProperty("bonus"))
                            object.bonus = message.bonus;
                        return object;
                    };

                    /**
                     * Converts this MSG_GET_BONUS_RESP to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_GET_BONUS_RESP
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_GET_BONUS_RESP.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_GET_BONUS_RESP;
                })();

                platform.BS_RECHARGE = (function() {

                    /**
                     * Properties of a BS_RECHARGE.
                     * @memberof com.cw.chess2.platform
                     * @interface IBS_RECHARGE
                     * @property {number|null} [recharge] BS_RECHARGE recharge
                     * @property {number|null} [currency_value] BS_RECHARGE currency_value
                     */

                    /**
                     * Constructs a new BS_RECHARGE.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a BS_RECHARGE.
                     * @implements IBS_RECHARGE
                     * @constructor
                     * @param {com.cw.chess2.platform.IBS_RECHARGE=} [properties] Properties to set
                     */
                    function BS_RECHARGE(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BS_RECHARGE recharge.
                     * @member {number} recharge
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @instance
                     */
                    BS_RECHARGE.prototype.recharge = 0;

                    /**
                     * BS_RECHARGE currency_value.
                     * @member {number} currency_value
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @instance
                     */
                    BS_RECHARGE.prototype.currency_value = 0;

                    /**
                     * Creates a new BS_RECHARGE instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {com.cw.chess2.platform.IBS_RECHARGE=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.BS_RECHARGE} BS_RECHARGE instance
                     */
                    BS_RECHARGE.create = function create(properties) {
                        return new BS_RECHARGE(properties);
                    };

                    /**
                     * Encodes the specified BS_RECHARGE message. Does not implicitly {@link com.cw.chess2.platform.BS_RECHARGE.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {com.cw.chess2.platform.IBS_RECHARGE} message BS_RECHARGE message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BS_RECHARGE.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.recharge != null && Object.hasOwnProperty.call(message, "recharge"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.recharge);
                        if (message.currency_value != null && Object.hasOwnProperty.call(message, "currency_value"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.currency_value);
                        return writer;
                    };

                    /**
                     * Encodes the specified BS_RECHARGE message, length delimited. Does not implicitly {@link com.cw.chess2.platform.BS_RECHARGE.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {com.cw.chess2.platform.IBS_RECHARGE} message BS_RECHARGE message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BS_RECHARGE.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BS_RECHARGE message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.BS_RECHARGE} BS_RECHARGE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BS_RECHARGE.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.BS_RECHARGE();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.recharge = reader.uint32();
                                break;
                            case 2:
                                message.currency_value = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BS_RECHARGE message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.BS_RECHARGE} BS_RECHARGE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BS_RECHARGE.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BS_RECHARGE message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BS_RECHARGE.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.recharge != null && message.hasOwnProperty("recharge"))
                            if (!$util.isInteger(message.recharge))
                                return "recharge: integer expected";
                        if (message.currency_value != null && message.hasOwnProperty("currency_value"))
                            if (!$util.isInteger(message.currency_value))
                                return "currency_value: integer expected";
                        return null;
                    };

                    /**
                     * Creates a BS_RECHARGE message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.BS_RECHARGE} BS_RECHARGE
                     */
                    BS_RECHARGE.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.BS_RECHARGE)
                            return object;
                        var message = new $root.com.cw.chess2.platform.BS_RECHARGE();
                        if (object.recharge != null)
                            message.recharge = object.recharge >>> 0;
                        if (object.currency_value != null)
                            message.currency_value = object.currency_value >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BS_RECHARGE message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @static
                     * @param {com.cw.chess2.platform.BS_RECHARGE} message BS_RECHARGE
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BS_RECHARGE.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.recharge = 0;
                            object.currency_value = 0;
                        }
                        if (message.recharge != null && message.hasOwnProperty("recharge"))
                            object.recharge = message.recharge;
                        if (message.currency_value != null && message.hasOwnProperty("currency_value"))
                            object.currency_value = message.currency_value;
                        return object;
                    };

                    /**
                     * Converts this BS_RECHARGE to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.BS_RECHARGE
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BS_RECHARGE.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BS_RECHARGE;
                })();

                platform.BS_GAME = (function() {

                    /**
                     * Properties of a BS_GAME.
                     * @memberof com.cw.chess2.platform
                     * @interface IBS_GAME
                     * @property {number|null} [game_type] BS_GAME game_type
                     * @property {number|null} [currency_value] BS_GAME currency_value
                     * @property {number|null} [parameter_1] BS_GAME parameter_1
                     * @property {number|null} [parameter_2] BS_GAME parameter_2
                     * @property {number|null} [parameter_3] BS_GAME parameter_3
                     */

                    /**
                     * Constructs a new BS_GAME.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a BS_GAME.
                     * @implements IBS_GAME
                     * @constructor
                     * @param {com.cw.chess2.platform.IBS_GAME=} [properties] Properties to set
                     */
                    function BS_GAME(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BS_GAME game_type.
                     * @member {number} game_type
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     */
                    BS_GAME.prototype.game_type = 0;

                    /**
                     * BS_GAME currency_value.
                     * @member {number} currency_value
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     */
                    BS_GAME.prototype.currency_value = 0;

                    /**
                     * BS_GAME parameter_1.
                     * @member {number} parameter_1
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     */
                    BS_GAME.prototype.parameter_1 = 0;

                    /**
                     * BS_GAME parameter_2.
                     * @member {number} parameter_2
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     */
                    BS_GAME.prototype.parameter_2 = 0;

                    /**
                     * BS_GAME parameter_3.
                     * @member {number} parameter_3
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     */
                    BS_GAME.prototype.parameter_3 = 0;

                    /**
                     * Creates a new BS_GAME instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {com.cw.chess2.platform.IBS_GAME=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.BS_GAME} BS_GAME instance
                     */
                    BS_GAME.create = function create(properties) {
                        return new BS_GAME(properties);
                    };

                    /**
                     * Encodes the specified BS_GAME message. Does not implicitly {@link com.cw.chess2.platform.BS_GAME.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {com.cw.chess2.platform.IBS_GAME} message BS_GAME message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BS_GAME.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_type != null && Object.hasOwnProperty.call(message, "game_type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.game_type);
                        if (message.currency_value != null && Object.hasOwnProperty.call(message, "currency_value"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.currency_value);
                        if (message.parameter_1 != null && Object.hasOwnProperty.call(message, "parameter_1"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.parameter_1);
                        if (message.parameter_2 != null && Object.hasOwnProperty.call(message, "parameter_2"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.parameter_2);
                        if (message.parameter_3 != null && Object.hasOwnProperty.call(message, "parameter_3"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.parameter_3);
                        return writer;
                    };

                    /**
                     * Encodes the specified BS_GAME message, length delimited. Does not implicitly {@link com.cw.chess2.platform.BS_GAME.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {com.cw.chess2.platform.IBS_GAME} message BS_GAME message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BS_GAME.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BS_GAME message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.BS_GAME} BS_GAME
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BS_GAME.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.BS_GAME();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_type = reader.uint32();
                                break;
                            case 2:
                                message.currency_value = reader.uint32();
                                break;
                            case 3:
                                message.parameter_1 = reader.uint32();
                                break;
                            case 4:
                                message.parameter_2 = reader.uint32();
                                break;
                            case 5:
                                message.parameter_3 = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BS_GAME message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.BS_GAME} BS_GAME
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BS_GAME.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BS_GAME message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BS_GAME.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_type != null && message.hasOwnProperty("game_type"))
                            if (!$util.isInteger(message.game_type))
                                return "game_type: integer expected";
                        if (message.currency_value != null && message.hasOwnProperty("currency_value"))
                            if (!$util.isInteger(message.currency_value))
                                return "currency_value: integer expected";
                        if (message.parameter_1 != null && message.hasOwnProperty("parameter_1"))
                            if (!$util.isInteger(message.parameter_1))
                                return "parameter_1: integer expected";
                        if (message.parameter_2 != null && message.hasOwnProperty("parameter_2"))
                            if (!$util.isInteger(message.parameter_2))
                                return "parameter_2: integer expected";
                        if (message.parameter_3 != null && message.hasOwnProperty("parameter_3"))
                            if (!$util.isInteger(message.parameter_3))
                                return "parameter_3: integer expected";
                        return null;
                    };

                    /**
                     * Creates a BS_GAME message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.BS_GAME} BS_GAME
                     */
                    BS_GAME.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.BS_GAME)
                            return object;
                        var message = new $root.com.cw.chess2.platform.BS_GAME();
                        if (object.game_type != null)
                            message.game_type = object.game_type >>> 0;
                        if (object.currency_value != null)
                            message.currency_value = object.currency_value >>> 0;
                        if (object.parameter_1 != null)
                            message.parameter_1 = object.parameter_1 >>> 0;
                        if (object.parameter_2 != null)
                            message.parameter_2 = object.parameter_2 >>> 0;
                        if (object.parameter_3 != null)
                            message.parameter_3 = object.parameter_3 >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BS_GAME message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @static
                     * @param {com.cw.chess2.platform.BS_GAME} message BS_GAME
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BS_GAME.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_type = 0;
                            object.currency_value = 0;
                            object.parameter_1 = 0;
                            object.parameter_2 = 0;
                            object.parameter_3 = 0;
                        }
                        if (message.game_type != null && message.hasOwnProperty("game_type"))
                            object.game_type = message.game_type;
                        if (message.currency_value != null && message.hasOwnProperty("currency_value"))
                            object.currency_value = message.currency_value;
                        if (message.parameter_1 != null && message.hasOwnProperty("parameter_1"))
                            object.parameter_1 = message.parameter_1;
                        if (message.parameter_2 != null && message.hasOwnProperty("parameter_2"))
                            object.parameter_2 = message.parameter_2;
                        if (message.parameter_3 != null && message.hasOwnProperty("parameter_3"))
                            object.parameter_3 = message.parameter_3;
                        return object;
                    };

                    /**
                     * Converts this BS_GAME to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.BS_GAME
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BS_GAME.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BS_GAME;
                })();

                platform.MSG_BS_DATA = (function() {

                    /**
                     * Properties of a MSG_BS_DATA.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_BS_DATA
                     * @property {number|null} [user_id] MSG_BS_DATA user_id
                     * @property {number|null} [user_nick] MSG_BS_DATA user_nick
                     * @property {number|null} [bs_type] MSG_BS_DATA bs_type
                     * @property {com.cw.chess2.platform.IBS_RECHARGE|null} [msg_recharge] MSG_BS_DATA msg_recharge
                     * @property {com.cw.chess2.platform.IBS_GAME|null} [msg_game] MSG_BS_DATA msg_game
                     * @property {number|null} [time_stamp] MSG_BS_DATA time_stamp
                     */

                    /**
                     * Constructs a new MSG_BS_DATA.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_BS_DATA.
                     * @implements IMSG_BS_DATA
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_BS_DATA=} [properties] Properties to set
                     */
                    function MSG_BS_DATA(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_BS_DATA user_id.
                     * @member {number} user_id
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.user_id = 0;

                    /**
                     * MSG_BS_DATA user_nick.
                     * @member {number} user_nick
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.user_nick = 0;

                    /**
                     * MSG_BS_DATA bs_type.
                     * @member {number} bs_type
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.bs_type = 0;

                    /**
                     * MSG_BS_DATA msg_recharge.
                     * @member {com.cw.chess2.platform.IBS_RECHARGE|null|undefined} msg_recharge
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.msg_recharge = null;

                    /**
                     * MSG_BS_DATA msg_game.
                     * @member {com.cw.chess2.platform.IBS_GAME|null|undefined} msg_game
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.msg_game = null;

                    /**
                     * MSG_BS_DATA time_stamp.
                     * @member {number} time_stamp
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     */
                    MSG_BS_DATA.prototype.time_stamp = 0;

                    /**
                     * Creates a new MSG_BS_DATA instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_BS_DATA=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_BS_DATA} MSG_BS_DATA instance
                     */
                    MSG_BS_DATA.create = function create(properties) {
                        return new MSG_BS_DATA(properties);
                    };

                    /**
                     * Encodes the specified MSG_BS_DATA message. Does not implicitly {@link com.cw.chess2.platform.MSG_BS_DATA.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_BS_DATA} message MSG_BS_DATA message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_BS_DATA.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
                        if (message.user_nick != null && Object.hasOwnProperty.call(message, "user_nick"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.user_nick);
                        if (message.bs_type != null && Object.hasOwnProperty.call(message, "bs_type"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bs_type);
                        if (message.msg_recharge != null && Object.hasOwnProperty.call(message, "msg_recharge"))
                            $root.com.cw.chess2.platform.BS_RECHARGE.encode(message.msg_recharge, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.msg_game != null && Object.hasOwnProperty.call(message, "msg_game"))
                            $root.com.cw.chess2.platform.BS_GAME.encode(message.msg_game, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.time_stamp != null && Object.hasOwnProperty.call(message, "time_stamp"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.time_stamp);
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_BS_DATA message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_BS_DATA.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_BS_DATA} message MSG_BS_DATA message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_BS_DATA.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_BS_DATA message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_BS_DATA} MSG_BS_DATA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_BS_DATA.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_BS_DATA();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user_id = reader.uint32();
                                break;
                            case 2:
                                message.user_nick = reader.uint32();
                                break;
                            case 3:
                                message.bs_type = reader.uint32();
                                break;
                            case 4:
                                message.msg_recharge = $root.com.cw.chess2.platform.BS_RECHARGE.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.msg_game = $root.com.cw.chess2.platform.BS_GAME.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.time_stamp = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_BS_DATA message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_BS_DATA} MSG_BS_DATA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_BS_DATA.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_BS_DATA message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_BS_DATA.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            if (!$util.isInteger(message.user_id))
                                return "user_id: integer expected";
                        if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                            if (!$util.isInteger(message.user_nick))
                                return "user_nick: integer expected";
                        if (message.bs_type != null && message.hasOwnProperty("bs_type"))
                            if (!$util.isInteger(message.bs_type))
                                return "bs_type: integer expected";
                        if (message.msg_recharge != null && message.hasOwnProperty("msg_recharge")) {
                            var error = $root.com.cw.chess2.platform.BS_RECHARGE.verify(message.msg_recharge);
                            if (error)
                                return "msg_recharge." + error;
                        }
                        if (message.msg_game != null && message.hasOwnProperty("msg_game")) {
                            var error = $root.com.cw.chess2.platform.BS_GAME.verify(message.msg_game);
                            if (error)
                                return "msg_game." + error;
                        }
                        if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                            if (!$util.isInteger(message.time_stamp))
                                return "time_stamp: integer expected";
                        return null;
                    };

                    /**
                     * Creates a MSG_BS_DATA message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_BS_DATA} MSG_BS_DATA
                     */
                    MSG_BS_DATA.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_BS_DATA)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_BS_DATA();
                        if (object.user_id != null)
                            message.user_id = object.user_id >>> 0;
                        if (object.user_nick != null)
                            message.user_nick = object.user_nick >>> 0;
                        if (object.bs_type != null)
                            message.bs_type = object.bs_type >>> 0;
                        if (object.msg_recharge != null) {
                            if (typeof object.msg_recharge !== "object")
                                throw TypeError(".com.cw.chess2.platform.MSG_BS_DATA.msg_recharge: object expected");
                            message.msg_recharge = $root.com.cw.chess2.platform.BS_RECHARGE.fromObject(object.msg_recharge);
                        }
                        if (object.msg_game != null) {
                            if (typeof object.msg_game !== "object")
                                throw TypeError(".com.cw.chess2.platform.MSG_BS_DATA.msg_game: object expected");
                            message.msg_game = $root.com.cw.chess2.platform.BS_GAME.fromObject(object.msg_game);
                        }
                        if (object.time_stamp != null)
                            message.time_stamp = object.time_stamp >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_BS_DATA message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @static
                     * @param {com.cw.chess2.platform.MSG_BS_DATA} message MSG_BS_DATA
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_BS_DATA.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user_id = 0;
                            object.user_nick = 0;
                            object.bs_type = 0;
                            object.msg_recharge = null;
                            object.msg_game = null;
                            object.time_stamp = 0;
                        }
                        if (message.user_id != null && message.hasOwnProperty("user_id"))
                            object.user_id = message.user_id;
                        if (message.user_nick != null && message.hasOwnProperty("user_nick"))
                            object.user_nick = message.user_nick;
                        if (message.bs_type != null && message.hasOwnProperty("bs_type"))
                            object.bs_type = message.bs_type;
                        if (message.msg_recharge != null && message.hasOwnProperty("msg_recharge"))
                            object.msg_recharge = $root.com.cw.chess2.platform.BS_RECHARGE.toObject(message.msg_recharge, options);
                        if (message.msg_game != null && message.hasOwnProperty("msg_game"))
                            object.msg_game = $root.com.cw.chess2.platform.BS_GAME.toObject(message.msg_game, options);
                        if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                            object.time_stamp = message.time_stamp;
                        return object;
                    };

                    /**
                     * Converts this MSG_BS_DATA to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_BS_DATA
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_BS_DATA.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_BS_DATA;
                })();

                platform.MSG_MSG_QUE_DATA = (function() {

                    /**
                     * Properties of a MSG_MSG_QUE_DATA.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_MSG_QUE_DATA
                     * @property {string|null} [msg_content] MSG_MSG_QUE_DATA msg_content
                     */

                    /**
                     * Constructs a new MSG_MSG_QUE_DATA.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_MSG_QUE_DATA.
                     * @implements IMSG_MSG_QUE_DATA
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE_DATA=} [properties] Properties to set
                     */
                    function MSG_MSG_QUE_DATA(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_MSG_QUE_DATA msg_content.
                     * @member {string} msg_content
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @instance
                     */
                    MSG_MSG_QUE_DATA.prototype.msg_content = "";

                    /**
                     * Creates a new MSG_MSG_QUE_DATA instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE_DATA=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE_DATA} MSG_MSG_QUE_DATA instance
                     */
                    MSG_MSG_QUE_DATA.create = function create(properties) {
                        return new MSG_MSG_QUE_DATA(properties);
                    };

                    /**
                     * Encodes the specified MSG_MSG_QUE_DATA message. Does not implicitly {@link com.cw.chess2.platform.MSG_MSG_QUE_DATA.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE_DATA} message MSG_MSG_QUE_DATA message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_MSG_QUE_DATA.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.msg_content != null && Object.hasOwnProperty.call(message, "msg_content"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg_content);
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_MSG_QUE_DATA message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_MSG_QUE_DATA.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE_DATA} message MSG_MSG_QUE_DATA message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_MSG_QUE_DATA.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_MSG_QUE_DATA message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE_DATA} MSG_MSG_QUE_DATA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_MSG_QUE_DATA.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.msg_content = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_MSG_QUE_DATA message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE_DATA} MSG_MSG_QUE_DATA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_MSG_QUE_DATA.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_MSG_QUE_DATA message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_MSG_QUE_DATA.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.msg_content != null && message.hasOwnProperty("msg_content"))
                            if (!$util.isString(message.msg_content))
                                return "msg_content: string expected";
                        return null;
                    };

                    /**
                     * Creates a MSG_MSG_QUE_DATA message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE_DATA} MSG_MSG_QUE_DATA
                     */
                    MSG_MSG_QUE_DATA.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA();
                        if (object.msg_content != null)
                            message.msg_content = String(object.msg_content);
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_MSG_QUE_DATA message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @static
                     * @param {com.cw.chess2.platform.MSG_MSG_QUE_DATA} message MSG_MSG_QUE_DATA
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_MSG_QUE_DATA.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.msg_content = "";
                        if (message.msg_content != null && message.hasOwnProperty("msg_content"))
                            object.msg_content = message.msg_content;
                        return object;
                    };

                    /**
                     * Converts this MSG_MSG_QUE_DATA to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE_DATA
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_MSG_QUE_DATA.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_MSG_QUE_DATA;
                })();

                platform.MSG_MSG_QUE = (function() {

                    /**
                     * Properties of a MSG_MSG_QUE.
                     * @memberof com.cw.chess2.platform
                     * @interface IMSG_MSG_QUE
                     * @property {Array.<com.cw.chess2.platform.IMSG_MSG_QUE_DATA>|null} [data_list] MSG_MSG_QUE data_list
                     */

                    /**
                     * Constructs a new MSG_MSG_QUE.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MSG_MSG_QUE.
                     * @implements IMSG_MSG_QUE
                     * @constructor
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE=} [properties] Properties to set
                     */
                    function MSG_MSG_QUE(properties) {
                        this.data_list = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MSG_MSG_QUE data_list.
                     * @member {Array.<com.cw.chess2.platform.IMSG_MSG_QUE_DATA>} data_list
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @instance
                     */
                    MSG_MSG_QUE.prototype.data_list = $util.emptyArray;

                    /**
                     * Creates a new MSG_MSG_QUE instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE} MSG_MSG_QUE instance
                     */
                    MSG_MSG_QUE.create = function create(properties) {
                        return new MSG_MSG_QUE(properties);
                    };

                    /**
                     * Encodes the specified MSG_MSG_QUE message. Does not implicitly {@link com.cw.chess2.platform.MSG_MSG_QUE.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE} message MSG_MSG_QUE message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_MSG_QUE.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.data_list != null && message.data_list.length)
                            for (var i = 0; i < message.data_list.length; ++i)
                                $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA.encode(message.data_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MSG_MSG_QUE message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MSG_MSG_QUE.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {com.cw.chess2.platform.IMSG_MSG_QUE} message MSG_MSG_QUE message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MSG_MSG_QUE.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MSG_MSG_QUE message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE} MSG_MSG_QUE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_MSG_QUE.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MSG_MSG_QUE();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.data_list && message.data_list.length))
                                    message.data_list = [];
                                message.data_list.push($root.com.cw.chess2.platform.MSG_MSG_QUE_DATA.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MSG_MSG_QUE message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE} MSG_MSG_QUE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MSG_MSG_QUE.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MSG_MSG_QUE message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MSG_MSG_QUE.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.data_list != null && message.hasOwnProperty("data_list")) {
                            if (!Array.isArray(message.data_list))
                                return "data_list: array expected";
                            for (var i = 0; i < message.data_list.length; ++i) {
                                var error = $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA.verify(message.data_list[i]);
                                if (error)
                                    return "data_list." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MSG_MSG_QUE message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MSG_MSG_QUE} MSG_MSG_QUE
                     */
                    MSG_MSG_QUE.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MSG_MSG_QUE)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MSG_MSG_QUE();
                        if (object.data_list) {
                            if (!Array.isArray(object.data_list))
                                throw TypeError(".com.cw.chess2.platform.MSG_MSG_QUE.data_list: array expected");
                            message.data_list = [];
                            for (var i = 0; i < object.data_list.length; ++i) {
                                if (typeof object.data_list[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.MSG_MSG_QUE.data_list: object expected");
                                message.data_list[i] = $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA.fromObject(object.data_list[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MSG_MSG_QUE message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @static
                     * @param {com.cw.chess2.platform.MSG_MSG_QUE} message MSG_MSG_QUE
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MSG_MSG_QUE.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.data_list = [];
                        if (message.data_list && message.data_list.length) {
                            object.data_list = [];
                            for (var j = 0; j < message.data_list.length; ++j)
                                object.data_list[j] = $root.com.cw.chess2.platform.MSG_MSG_QUE_DATA.toObject(message.data_list[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this MSG_MSG_QUE to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MSG_MSG_QUE
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MSG_MSG_QUE.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MSG_MSG_QUE;
                })();

                platform.BroadcastMsg = (function() {

                    /**
                     * Properties of a BroadcastMsg.
                     * @memberof com.cw.chess2.platform
                     * @interface IBroadcastMsg
                     * @property {string|null} [Content] BroadcastMsg Content
                     * @property {number|null} [Priority] BroadcastMsg Priority
                     * @property {Array.<number>|null} [Display] BroadcastMsg Display
                     */

                    /**
                     * Constructs a new BroadcastMsg.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a BroadcastMsg.
                     * @implements IBroadcastMsg
                     * @constructor
                     * @param {com.cw.chess2.platform.IBroadcastMsg=} [properties] Properties to set
                     */
                    function BroadcastMsg(properties) {
                        this.Display = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BroadcastMsg Content.
                     * @member {string} Content
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @instance
                     */
                    BroadcastMsg.prototype.Content = "";

                    /**
                     * BroadcastMsg Priority.
                     * @member {number} Priority
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @instance
                     */
                    BroadcastMsg.prototype.Priority = 0;

                    /**
                     * BroadcastMsg Display.
                     * @member {Array.<number>} Display
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @instance
                     */
                    BroadcastMsg.prototype.Display = $util.emptyArray;

                    /**
                     * Creates a new BroadcastMsg instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {com.cw.chess2.platform.IBroadcastMsg=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.BroadcastMsg} BroadcastMsg instance
                     */
                    BroadcastMsg.create = function create(properties) {
                        return new BroadcastMsg(properties);
                    };

                    /**
                     * Encodes the specified BroadcastMsg message. Does not implicitly {@link com.cw.chess2.platform.BroadcastMsg.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {com.cw.chess2.platform.IBroadcastMsg} message BroadcastMsg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BroadcastMsg.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
                        if (message.Priority != null && Object.hasOwnProperty.call(message, "Priority"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Priority);
                        if (message.Display != null && message.Display.length) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork();
                            for (var i = 0; i < message.Display.length; ++i)
                                writer.uint32(message.Display[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified BroadcastMsg message, length delimited. Does not implicitly {@link com.cw.chess2.platform.BroadcastMsg.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {com.cw.chess2.platform.IBroadcastMsg} message BroadcastMsg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BroadcastMsg.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BroadcastMsg message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.BroadcastMsg} BroadcastMsg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BroadcastMsg.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.BroadcastMsg();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Content = reader.string();
                                break;
                            case 2:
                                message.Priority = reader.uint32();
                                break;
                            case 3:
                                if (!(message.Display && message.Display.length))
                                    message.Display = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.Display.push(reader.uint32());
                                } else
                                    message.Display.push(reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BroadcastMsg message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.BroadcastMsg} BroadcastMsg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BroadcastMsg.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BroadcastMsg message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BroadcastMsg.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Content != null && message.hasOwnProperty("Content"))
                            if (!$util.isString(message.Content))
                                return "Content: string expected";
                        if (message.Priority != null && message.hasOwnProperty("Priority"))
                            if (!$util.isInteger(message.Priority))
                                return "Priority: integer expected";
                        if (message.Display != null && message.hasOwnProperty("Display")) {
                            if (!Array.isArray(message.Display))
                                return "Display: array expected";
                            for (var i = 0; i < message.Display.length; ++i)
                                if (!$util.isInteger(message.Display[i]))
                                    return "Display: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a BroadcastMsg message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.BroadcastMsg} BroadcastMsg
                     */
                    BroadcastMsg.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.BroadcastMsg)
                            return object;
                        var message = new $root.com.cw.chess2.platform.BroadcastMsg();
                        if (object.Content != null)
                            message.Content = String(object.Content);
                        if (object.Priority != null)
                            message.Priority = object.Priority >>> 0;
                        if (object.Display) {
                            if (!Array.isArray(object.Display))
                                throw TypeError(".com.cw.chess2.platform.BroadcastMsg.Display: array expected");
                            message.Display = [];
                            for (var i = 0; i < object.Display.length; ++i)
                                message.Display[i] = object.Display[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a BroadcastMsg message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @static
                     * @param {com.cw.chess2.platform.BroadcastMsg} message BroadcastMsg
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BroadcastMsg.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.Display = [];
                        if (options.defaults) {
                            object.Content = "";
                            object.Priority = 0;
                        }
                        if (message.Content != null && message.hasOwnProperty("Content"))
                            object.Content = message.Content;
                        if (message.Priority != null && message.hasOwnProperty("Priority"))
                            object.Priority = message.Priority;
                        if (message.Display && message.Display.length) {
                            object.Display = [];
                            for (var j = 0; j < message.Display.length; ++j)
                                object.Display[j] = message.Display[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this BroadcastMsg to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.BroadcastMsg
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BroadcastMsg.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BroadcastMsg;
                })();

                /**
                 * Common_S_Cmd enum.
                 * @name com.cw.chess2.platform.Common_S_Cmd
                 * @enum {number}
                 * @property {number} CMD_S_INVALID=0 CMD_S_INVALID value
                 * @property {number} CMD_S_PING=1 CMD_S_PING value
                 * @property {number} CMD_S_PONG=2 CMD_S_PONG value
                 * @property {number} CMD_S_RUMMY_BS_REQ=3 CMD_S_RUMMY_BS_REQ value
                 * @property {number} CMD_S_RUMMY_BS_RESP=4 CMD_S_RUMMY_BS_RESP value
                 * @property {number} CMD_S_TEENPATTI_BS_REQ=5 CMD_S_TEENPATTI_BS_REQ value
                 * @property {number} CMD_S_TEENPATTI_BS_RESP=6 CMD_S_TEENPATTI_BS_RESP value
                 * @property {number} CMD_S_AB_BS_REQ=7 CMD_S_AB_BS_REQ value
                 * @property {number} CMD_S_AB_BS_RESP=8 CMD_S_AB_BS_RESP value
                 * @property {number} CMD_S_FT_BS_REQ=9 CMD_S_FT_BS_REQ value
                 * @property {number} CMD_S_FT_BS_RESP=10 CMD_S_FT_BS_RESP value
                 * @property {number} CMD_S_SEVENUPDOWN_BS_REQ=11 CMD_S_SEVENUPDOWN_BS_REQ value
                 * @property {number} CMD_S_SEVENUPDOWN_BS_RESP=12 CMD_S_SEVENUPDOWN_BS_RESP value
                 * @property {number} CMD_S_DRAGONTIGER_BS_REQ=13 CMD_S_DRAGONTIGER_BS_REQ value
                 * @property {number} CMD_S_DRAGONTIGER_BS_RESP=14 CMD_S_DRAGONTIGER_BS_RESP value
                 * @property {number} CMD_S_RAPIDTP_BS_REQ=15 CMD_S_RAPIDTP_BS_REQ value
                 * @property {number} CMD_S_RAPIDTP_BS_RESP=16 CMD_S_RAPIDTP_BS_RESP value
                 * @property {number} CMD_S_BLACKRED_BS_REQ=17 CMD_S_BLACKRED_BS_REQ value
                 * @property {number} CMD_S_BLACKRED_BS_RESP=18 CMD_S_BLACKRED_BS_RESP value
                 * @property {number} CMD_S_HORSERACING_BS_REQ=19 CMD_S_HORSERACING_BS_REQ value
                 * @property {number} CMD_S_HORSERACING_BS_RESP=20 CMD_S_HORSERACING_BS_RESP value
                 * @property {number} CMD_S_JM_BS_REQ=21 CMD_S_JM_BS_REQ value
                 * @property {number} CMD_S_JM_BS_RESP=22 CMD_S_JM_BS_RESP value
                 * @property {number} CMD_S_BACCARAT_REQ=23 CMD_S_BACCARAT_REQ value
                 * @property {number} CMD_S_BACCARAT_RESP=24 CMD_S_BACCARAT_RESP value
                 */
                platform.Common_S_Cmd = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_S_INVALID"] = 0;
                    values[valuesById[1] = "CMD_S_PING"] = 1;
                    values[valuesById[2] = "CMD_S_PONG"] = 2;
                    values[valuesById[3] = "CMD_S_RUMMY_BS_REQ"] = 3;
                    values[valuesById[4] = "CMD_S_RUMMY_BS_RESP"] = 4;
                    values[valuesById[5] = "CMD_S_TEENPATTI_BS_REQ"] = 5;
                    values[valuesById[6] = "CMD_S_TEENPATTI_BS_RESP"] = 6;
                    values[valuesById[7] = "CMD_S_AB_BS_REQ"] = 7;
                    values[valuesById[8] = "CMD_S_AB_BS_RESP"] = 8;
                    values[valuesById[9] = "CMD_S_FT_BS_REQ"] = 9;
                    values[valuesById[10] = "CMD_S_FT_BS_RESP"] = 10;
                    values[valuesById[11] = "CMD_S_SEVENUPDOWN_BS_REQ"] = 11;
                    values[valuesById[12] = "CMD_S_SEVENUPDOWN_BS_RESP"] = 12;
                    values[valuesById[13] = "CMD_S_DRAGONTIGER_BS_REQ"] = 13;
                    values[valuesById[14] = "CMD_S_DRAGONTIGER_BS_RESP"] = 14;
                    values[valuesById[15] = "CMD_S_RAPIDTP_BS_REQ"] = 15;
                    values[valuesById[16] = "CMD_S_RAPIDTP_BS_RESP"] = 16;
                    values[valuesById[17] = "CMD_S_BLACKRED_BS_REQ"] = 17;
                    values[valuesById[18] = "CMD_S_BLACKRED_BS_RESP"] = 18;
                    values[valuesById[19] = "CMD_S_HORSERACING_BS_REQ"] = 19;
                    values[valuesById[20] = "CMD_S_HORSERACING_BS_RESP"] = 20;
                    values[valuesById[21] = "CMD_S_JM_BS_REQ"] = 21;
                    values[valuesById[22] = "CMD_S_JM_BS_RESP"] = 22;
                    values[valuesById[23] = "CMD_S_BACCARAT_REQ"] = 23;
                    values[valuesById[24] = "CMD_S_BACCARAT_RESP"] = 24;
                    return values;
                })();

                /**
                 * ServerMatchCmd enum.
                 * @name com.cw.chess2.platform.ServerMatchCmd
                 * @enum {number}
                 * @property {number} CMD_MATCH_INVALID=0 CMD_MATCH_INVALID value
                 * @property {number} CMD_GET_GAME_KIND_REQ=1 CMD_GET_GAME_KIND_REQ value
                 * @property {number} CMD_GET_GAME_KIND_RESP=2 CMD_GET_GAME_KIND_RESP value
                 * @property {number} CMD_GET_ROOMS_REQ=3 CMD_GET_ROOMS_REQ value
                 * @property {number} CMD_GET_ROOMS_RESP=4 CMD_GET_ROOMS_RESP value
                 * @property {number} CMD_MATCH_REQ=5 CMD_MATCH_REQ value
                 * @property {number} CMD_MATCH_RESP=6 CMD_MATCH_RESP value
                 * @property {number} CMD_MATCH_NA_7=7 CMD_MATCH_NA_7 value
                 * @property {number} CMD_MATCH_OK_RESP=8 CMD_MATCH_OK_RESP value
                 * @property {number} CMD_ENTER_GAME_REQ=9 CMD_ENTER_GAME_REQ value
                 * @property {number} CMD_ENTER_GAME_RESP=10 CMD_ENTER_GAME_RESP value
                 * @property {number} CMD_CANCEL_MATCH_REQ=11 CMD_CANCEL_MATCH_REQ value
                 * @property {number} CMD_CANCEL_MATCH_RESP=12 CMD_CANCEL_MATCH_RESP value
                 * @property {number} CMD_CANCEL_MATCH_NOTICE=13 CMD_CANCEL_MATCH_NOTICE value
                 */
                platform.ServerMatchCmd = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_MATCH_INVALID"] = 0;
                    values[valuesById[1] = "CMD_GET_GAME_KIND_REQ"] = 1;
                    values[valuesById[2] = "CMD_GET_GAME_KIND_RESP"] = 2;
                    values[valuesById[3] = "CMD_GET_ROOMS_REQ"] = 3;
                    values[valuesById[4] = "CMD_GET_ROOMS_RESP"] = 4;
                    values[valuesById[5] = "CMD_MATCH_REQ"] = 5;
                    values[valuesById[6] = "CMD_MATCH_RESP"] = 6;
                    values[valuesById[7] = "CMD_MATCH_NA_7"] = 7;
                    values[valuesById[8] = "CMD_MATCH_OK_RESP"] = 8;
                    values[valuesById[9] = "CMD_ENTER_GAME_REQ"] = 9;
                    values[valuesById[10] = "CMD_ENTER_GAME_RESP"] = 10;
                    values[valuesById[11] = "CMD_CANCEL_MATCH_REQ"] = 11;
                    values[valuesById[12] = "CMD_CANCEL_MATCH_RESP"] = 12;
                    values[valuesById[13] = "CMD_CANCEL_MATCH_NOTICE"] = 13;
                    return values;
                })();

                /**
                 * GameKind enum.
                 * @name com.cw.chess2.platform.GameKind
                 * @enum {number}
                 * @property {number} INVALID=0 INVALID value
                 * @property {number} GAME_KIND_Rummy=1 GAME_KIND_Rummy value
                 * @property {number} GAME_KIND_Rummy_pool=2 GAME_KIND_Rummy_pool value
                 * @property {number} GAME_KIND_Rummy_10=3 GAME_KIND_Rummy_10 value
                 * @property {number} GAME_KIND_TEEPATTI=4 GAME_KIND_TEEPATTI value
                 * @property {number} GAME_KIND_AB=5 GAME_KIND_AB value
                 * @property {number} GAME_KIND_SevenUD=6 GAME_KIND_SevenUD value
                 * @property {number} GAME_KIND_RapidTeenaptti=7 GAME_KIND_RapidTeenaptti value
                 * @property {number} GAME_KIND_DragonTiger=8 GAME_KIND_DragonTiger value
                 * @property {number} GAME_KIND_BlackRed=9 GAME_KIND_BlackRed value
                 * @property {number} GAME_KIND_HorseRacing=10 GAME_KIND_HorseRacing value
                 * @property {number} GAME_KIND_JM=11 GAME_KIND_JM value
                 * @property {number} GAME_KIND_BACCARAT=12 GAME_KIND_BACCARAT value
                 * @property {number} GAME_KIND_JokerTeenpatti=13 GAME_KIND_JokerTeenpatti value
                 * @property {number} GAME_KIND_AKTeenpatti=14 GAME_KIND_AKTeenpatti value
                 * @property {number} GAME_KIND_Fruit=15 GAME_KIND_Fruit value
                 * @property {number} GAME_KIND_Car=16 GAME_KIND_Car value
                 * @property {number} GAME_KIND_FT=20 GAME_KIND_FT value
                 * @property {number} GAME_KIND_LUDO_MASTER=21 GAME_KIND_LUDO_MASTER value
                 * @property {number} GAME_KIND_LUDO_CLASSIC=22 GAME_KIND_LUDO_CLASSIC value
                 * @property {number} GAME_KIND_LUDO_QUICK=23 GAME_KIND_LUDO_QUICK value
                 * @property {number} GAME_KIND_SLOT_CHRISTMAS=24 GAME_KIND_SLOT_CHRISTMAS value
                 */
                platform.GameKind = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INVALID"] = 0;
                    values[valuesById[1] = "GAME_KIND_Rummy"] = 1;
                    values[valuesById[2] = "GAME_KIND_Rummy_pool"] = 2;
                    values[valuesById[3] = "GAME_KIND_Rummy_10"] = 3;
                    values[valuesById[4] = "GAME_KIND_TEEPATTI"] = 4;
                    values[valuesById[5] = "GAME_KIND_AB"] = 5;
                    values[valuesById[6] = "GAME_KIND_SevenUD"] = 6;
                    values[valuesById[7] = "GAME_KIND_RapidTeenaptti"] = 7;
                    values[valuesById[8] = "GAME_KIND_DragonTiger"] = 8;
                    values[valuesById[9] = "GAME_KIND_BlackRed"] = 9;
                    values[valuesById[10] = "GAME_KIND_HorseRacing"] = 10;
                    values[valuesById[11] = "GAME_KIND_JM"] = 11;
                    values[valuesById[12] = "GAME_KIND_BACCARAT"] = 12;
                    values[valuesById[13] = "GAME_KIND_JokerTeenpatti"] = 13;
                    values[valuesById[14] = "GAME_KIND_AKTeenpatti"] = 14;
                    values[valuesById[15] = "GAME_KIND_Fruit"] = 15;
                    values[valuesById[16] = "GAME_KIND_Car"] = 16;
                    values[valuesById[20] = "GAME_KIND_FT"] = 20;
                    values[valuesById[21] = "GAME_KIND_LUDO_MASTER"] = 21;
                    values[valuesById[22] = "GAME_KIND_LUDO_CLASSIC"] = 22;
                    values[valuesById[23] = "GAME_KIND_LUDO_QUICK"] = 23;
                    values[valuesById[24] = "GAME_KIND_SLOT_CHRISTMAS"] = 24;
                    return values;
                })();

                platform.GameLevelDesc = (function() {

                    /**
                     * Properties of a GameLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IGameLevelDesc
                     * @property {number|null} [level_id] GameLevelDesc level_id
                     * @property {com.cw.chess2.platform.CurrencyKind|null} [currency_kind] GameLevelDesc currency_kind
                     * @property {number|null} [currency_limit] GameLevelDesc currency_limit
                     * @property {string|null} [level_name] GameLevelDesc level_name
                     * @property {number|null} [user_count] GameLevelDesc user_count
                     * @property {number|null} [tax_permillage] GameLevelDesc tax_permillage
                     * @property {number|null} [game_id] GameLevelDesc game_id
                     */

                    /**
                     * Constructs a new GameLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a GameLevelDesc.
                     * @implements IGameLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IGameLevelDesc=} [properties] Properties to set
                     */
                    function GameLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GameLevelDesc level_id.
                     * @member {number} level_id
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.level_id = 0;

                    /**
                     * GameLevelDesc currency_kind.
                     * @member {com.cw.chess2.platform.CurrencyKind} currency_kind
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.currency_kind = 0;

                    /**
                     * GameLevelDesc currency_limit.
                     * @member {number} currency_limit
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.currency_limit = 0;

                    /**
                     * GameLevelDesc level_name.
                     * @member {string} level_name
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.level_name = "";

                    /**
                     * GameLevelDesc user_count.
                     * @member {number} user_count
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.user_count = 0;

                    /**
                     * GameLevelDesc tax_permillage.
                     * @member {number} tax_permillage
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.tax_permillage = 0;

                    /**
                     * GameLevelDesc game_id.
                     * @member {number} game_id
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     */
                    GameLevelDesc.prototype.game_id = 0;

                    /**
                     * Creates a new GameLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IGameLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.GameLevelDesc} GameLevelDesc instance
                     */
                    GameLevelDesc.create = function create(properties) {
                        return new GameLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified GameLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.GameLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IGameLevelDesc} message GameLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.level_id != null && Object.hasOwnProperty.call(message, "level_id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.level_id);
                        if (message.currency_kind != null && Object.hasOwnProperty.call(message, "currency_kind"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currency_kind);
                        if (message.currency_limit != null && Object.hasOwnProperty.call(message, "currency_limit"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.currency_limit);
                        if (message.level_name != null && Object.hasOwnProperty.call(message, "level_name"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.level_name);
                        if (message.user_count != null && Object.hasOwnProperty.call(message, "user_count"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.user_count);
                        if (message.tax_permillage != null && Object.hasOwnProperty.call(message, "tax_permillage"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.tax_permillage);
                        if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.game_id);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.GameLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IGameLevelDesc} message GameLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GameLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.GameLevelDesc} GameLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.GameLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.level_id = reader.uint32();
                                break;
                            case 2:
                                message.currency_kind = reader.int32();
                                break;
                            case 3:
                                message.currency_limit = reader.uint32();
                                break;
                            case 4:
                                message.level_name = reader.string();
                                break;
                            case 5:
                                message.user_count = reader.uint32();
                                break;
                            case 6:
                                message.tax_permillage = reader.uint32();
                                break;
                            case 7:
                                message.game_id = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GameLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.GameLevelDesc} GameLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.level_id != null && message.hasOwnProperty("level_id"))
                            if (!$util.isInteger(message.level_id))
                                return "level_id: integer expected";
                        if (message.currency_kind != null && message.hasOwnProperty("currency_kind"))
                            switch (message.currency_kind) {
                            default:
                                return "currency_kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        if (message.currency_limit != null && message.hasOwnProperty("currency_limit"))
                            if (!$util.isInteger(message.currency_limit))
                                return "currency_limit: integer expected";
                        if (message.level_name != null && message.hasOwnProperty("level_name"))
                            if (!$util.isString(message.level_name))
                                return "level_name: string expected";
                        if (message.user_count != null && message.hasOwnProperty("user_count"))
                            if (!$util.isInteger(message.user_count))
                                return "user_count: integer expected";
                        if (message.tax_permillage != null && message.hasOwnProperty("tax_permillage"))
                            if (!$util.isInteger(message.tax_permillage))
                                return "tax_permillage: integer expected";
                        if (message.game_id != null && message.hasOwnProperty("game_id"))
                            if (!$util.isInteger(message.game_id))
                                return "game_id: integer expected";
                        return null;
                    };

                    /**
                     * Creates a GameLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.GameLevelDesc} GameLevelDesc
                     */
                    GameLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.GameLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.GameLevelDesc();
                        if (object.level_id != null)
                            message.level_id = object.level_id >>> 0;
                        switch (object.currency_kind) {
                        case "CK_INVALID":
                        case 0:
                            message.currency_kind = 0;
                            break;
                        case "CK_Money":
                        case 1:
                            message.currency_kind = 1;
                            break;
                        case "CK_Practice":
                        case 2:
                            message.currency_kind = 2;
                            break;
                        }
                        if (object.currency_limit != null)
                            message.currency_limit = object.currency_limit >>> 0;
                        if (object.level_name != null)
                            message.level_name = String(object.level_name);
                        if (object.user_count != null)
                            message.user_count = object.user_count >>> 0;
                        if (object.tax_permillage != null)
                            message.tax_permillage = object.tax_permillage >>> 0;
                        if (object.game_id != null)
                            message.game_id = object.game_id >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.GameLevelDesc} message GameLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.level_id = 0;
                            object.currency_kind = options.enums === String ? "CK_INVALID" : 0;
                            object.currency_limit = 0;
                            object.level_name = "";
                            object.user_count = 0;
                            object.tax_permillage = 0;
                            object.game_id = 0;
                        }
                        if (message.level_id != null && message.hasOwnProperty("level_id"))
                            object.level_id = message.level_id;
                        if (message.currency_kind != null && message.hasOwnProperty("currency_kind"))
                            object.currency_kind = options.enums === String ? $root.com.cw.chess2.platform.CurrencyKind[message.currency_kind] : message.currency_kind;
                        if (message.currency_limit != null && message.hasOwnProperty("currency_limit"))
                            object.currency_limit = message.currency_limit;
                        if (message.level_name != null && message.hasOwnProperty("level_name"))
                            object.level_name = message.level_name;
                        if (message.user_count != null && message.hasOwnProperty("user_count"))
                            object.user_count = message.user_count;
                        if (message.tax_permillage != null && message.hasOwnProperty("tax_permillage"))
                            object.tax_permillage = message.tax_permillage;
                        if (message.game_id != null && message.hasOwnProperty("game_id"))
                            object.game_id = message.game_id;
                        return object;
                    };

                    /**
                     * Converts this GameLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.GameLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GameLevelDesc;
                })();

                platform.RummyLevelDesc = (function() {

                    /**
                     * Properties of a RummyLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IRummyLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] RummyLevelDesc game_level
                     * @property {number|null} [rummy_players_size] RummyLevelDesc rummy_players_size
                     * @property {number|null} [score_value] RummyLevelDesc score_value
                     * @property {number|null} [times_fee_ratio] RummyLevelDesc times_fee_ratio
                     * @property {number|null} [fantasytime] RummyLevelDesc fantasytime
                     */

                    /**
                     * Constructs a new RummyLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a RummyLevelDesc.
                     * @implements IRummyLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IRummyLevelDesc=} [properties] Properties to set
                     */
                    function RummyLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RummyLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     */
                    RummyLevelDesc.prototype.game_level = null;

                    /**
                     * RummyLevelDesc rummy_players_size.
                     * @member {number} rummy_players_size
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     */
                    RummyLevelDesc.prototype.rummy_players_size = 0;

                    /**
                     * RummyLevelDesc score_value.
                     * @member {number} score_value
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     */
                    RummyLevelDesc.prototype.score_value = 0;

                    /**
                     * RummyLevelDesc times_fee_ratio.
                     * @member {number} times_fee_ratio
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     */
                    RummyLevelDesc.prototype.times_fee_ratio = 0;

                    /**
                     * RummyLevelDesc fantasytime.
                     * @member {number} fantasytime
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     */
                    RummyLevelDesc.prototype.fantasytime = 0;

                    /**
                     * Creates a new RummyLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRummyLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.RummyLevelDesc} RummyLevelDesc instance
                     */
                    RummyLevelDesc.create = function create(properties) {
                        return new RummyLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified RummyLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.RummyLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRummyLevelDesc} message RummyLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RummyLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.rummy_players_size != null && Object.hasOwnProperty.call(message, "rummy_players_size"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rummy_players_size);
                        if (message.score_value != null && Object.hasOwnProperty.call(message, "score_value"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.score_value);
                        if (message.times_fee_ratio != null && Object.hasOwnProperty.call(message, "times_fee_ratio"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.times_fee_ratio);
                        if (message.fantasytime != null && Object.hasOwnProperty.call(message, "fantasytime"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.fantasytime);
                        return writer;
                    };

                    /**
                     * Encodes the specified RummyLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.RummyLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRummyLevelDesc} message RummyLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RummyLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RummyLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.RummyLevelDesc} RummyLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RummyLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.RummyLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.rummy_players_size = reader.uint32();
                                break;
                            case 3:
                                message.score_value = reader.uint32();
                                break;
                            case 4:
                                message.times_fee_ratio = reader.uint32();
                                break;
                            case 5:
                                message.fantasytime = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RummyLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.RummyLevelDesc} RummyLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RummyLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RummyLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RummyLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.rummy_players_size != null && message.hasOwnProperty("rummy_players_size"))
                            if (!$util.isInteger(message.rummy_players_size))
                                return "rummy_players_size: integer expected";
                        if (message.score_value != null && message.hasOwnProperty("score_value"))
                            if (!$util.isInteger(message.score_value))
                                return "score_value: integer expected";
                        if (message.times_fee_ratio != null && message.hasOwnProperty("times_fee_ratio"))
                            if (!$util.isInteger(message.times_fee_ratio))
                                return "times_fee_ratio: integer expected";
                        if (message.fantasytime != null && message.hasOwnProperty("fantasytime"))
                            if (!$util.isInteger(message.fantasytime))
                                return "fantasytime: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RummyLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.RummyLevelDesc} RummyLevelDesc
                     */
                    RummyLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.RummyLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.RummyLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.RummyLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.rummy_players_size != null)
                            message.rummy_players_size = object.rummy_players_size >>> 0;
                        if (object.score_value != null)
                            message.score_value = object.score_value >>> 0;
                        if (object.times_fee_ratio != null)
                            message.times_fee_ratio = object.times_fee_ratio >>> 0;
                        if (object.fantasytime != null)
                            message.fantasytime = object.fantasytime >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RummyLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.RummyLevelDesc} message RummyLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RummyLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.rummy_players_size = 0;
                            object.score_value = 0;
                            object.times_fee_ratio = 0;
                            object.fantasytime = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.rummy_players_size != null && message.hasOwnProperty("rummy_players_size"))
                            object.rummy_players_size = message.rummy_players_size;
                        if (message.score_value != null && message.hasOwnProperty("score_value"))
                            object.score_value = message.score_value;
                        if (message.times_fee_ratio != null && message.hasOwnProperty("times_fee_ratio"))
                            object.times_fee_ratio = message.times_fee_ratio;
                        if (message.fantasytime != null && message.hasOwnProperty("fantasytime"))
                            object.fantasytime = message.fantasytime;
                        return object;
                    };

                    /**
                     * Converts this RummyLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.RummyLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RummyLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RummyLevelDesc;
                })();

                platform.TeepattiLevelDesc = (function() {

                    /**
                     * Properties of a TeepattiLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface ITeepattiLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] TeepattiLevelDesc game_level
                     * @property {number|null} [blind] TeepattiLevelDesc blind
                     * @property {number|null} [single_max_bet] TeepattiLevelDesc single_max_bet
                     * @property {number|null} [table_max_bet] TeepattiLevelDesc table_max_bet
                     * @property {number|null} [times_fee_ratio] TeepattiLevelDesc times_fee_ratio
                     * @property {number|null} [fantasytime] TeepattiLevelDesc fantasytime
                     */

                    /**
                     * Constructs a new TeepattiLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a TeepattiLevelDesc.
                     * @implements ITeepattiLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.ITeepattiLevelDesc=} [properties] Properties to set
                     */
                    function TeepattiLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TeepattiLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.game_level = null;

                    /**
                     * TeepattiLevelDesc blind.
                     * @member {number} blind
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.blind = 0;

                    /**
                     * TeepattiLevelDesc single_max_bet.
                     * @member {number} single_max_bet
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.single_max_bet = 0;

                    /**
                     * TeepattiLevelDesc table_max_bet.
                     * @member {number} table_max_bet
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.table_max_bet = 0;

                    /**
                     * TeepattiLevelDesc times_fee_ratio.
                     * @member {number} times_fee_ratio
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.times_fee_ratio = 0;

                    /**
                     * TeepattiLevelDesc fantasytime.
                     * @member {number} fantasytime
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     */
                    TeepattiLevelDesc.prototype.fantasytime = 0;

                    /**
                     * Creates a new TeepattiLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ITeepattiLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.TeepattiLevelDesc} TeepattiLevelDesc instance
                     */
                    TeepattiLevelDesc.create = function create(properties) {
                        return new TeepattiLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified TeepattiLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.TeepattiLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ITeepattiLevelDesc} message TeepattiLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeepattiLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.blind != null && Object.hasOwnProperty.call(message, "blind"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.blind);
                        if (message.single_max_bet != null && Object.hasOwnProperty.call(message, "single_max_bet"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.single_max_bet);
                        if (message.table_max_bet != null && Object.hasOwnProperty.call(message, "table_max_bet"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.table_max_bet);
                        if (message.times_fee_ratio != null && Object.hasOwnProperty.call(message, "times_fee_ratio"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.times_fee_ratio);
                        if (message.fantasytime != null && Object.hasOwnProperty.call(message, "fantasytime"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.fantasytime);
                        return writer;
                    };

                    /**
                     * Encodes the specified TeepattiLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.TeepattiLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ITeepattiLevelDesc} message TeepattiLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeepattiLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TeepattiLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.TeepattiLevelDesc} TeepattiLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeepattiLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.TeepattiLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.blind = reader.uint32();
                                break;
                            case 3:
                                message.single_max_bet = reader.uint32();
                                break;
                            case 4:
                                message.table_max_bet = reader.uint32();
                                break;
                            case 5:
                                message.times_fee_ratio = reader.uint32();
                                break;
                            case 6:
                                message.fantasytime = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TeepattiLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.TeepattiLevelDesc} TeepattiLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeepattiLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TeepattiLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TeepattiLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.blind != null && message.hasOwnProperty("blind"))
                            if (!$util.isInteger(message.blind))
                                return "blind: integer expected";
                        if (message.single_max_bet != null && message.hasOwnProperty("single_max_bet"))
                            if (!$util.isInteger(message.single_max_bet))
                                return "single_max_bet: integer expected";
                        if (message.table_max_bet != null && message.hasOwnProperty("table_max_bet"))
                            if (!$util.isInteger(message.table_max_bet))
                                return "table_max_bet: integer expected";
                        if (message.times_fee_ratio != null && message.hasOwnProperty("times_fee_ratio"))
                            if (!$util.isInteger(message.times_fee_ratio))
                                return "times_fee_ratio: integer expected";
                        if (message.fantasytime != null && message.hasOwnProperty("fantasytime"))
                            if (!$util.isInteger(message.fantasytime))
                                return "fantasytime: integer expected";
                        return null;
                    };

                    /**
                     * Creates a TeepattiLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.TeepattiLevelDesc} TeepattiLevelDesc
                     */
                    TeepattiLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.TeepattiLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.TeepattiLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.TeepattiLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.blind != null)
                            message.blind = object.blind >>> 0;
                        if (object.single_max_bet != null)
                            message.single_max_bet = object.single_max_bet >>> 0;
                        if (object.table_max_bet != null)
                            message.table_max_bet = object.table_max_bet >>> 0;
                        if (object.times_fee_ratio != null)
                            message.times_fee_ratio = object.times_fee_ratio >>> 0;
                        if (object.fantasytime != null)
                            message.fantasytime = object.fantasytime >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a TeepattiLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.TeepattiLevelDesc} message TeepattiLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TeepattiLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.blind = 0;
                            object.single_max_bet = 0;
                            object.table_max_bet = 0;
                            object.times_fee_ratio = 0;
                            object.fantasytime = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.blind != null && message.hasOwnProperty("blind"))
                            object.blind = message.blind;
                        if (message.single_max_bet != null && message.hasOwnProperty("single_max_bet"))
                            object.single_max_bet = message.single_max_bet;
                        if (message.table_max_bet != null && message.hasOwnProperty("table_max_bet"))
                            object.table_max_bet = message.table_max_bet;
                        if (message.times_fee_ratio != null && message.hasOwnProperty("times_fee_ratio"))
                            object.times_fee_ratio = message.times_fee_ratio;
                        if (message.fantasytime != null && message.hasOwnProperty("fantasytime"))
                            object.fantasytime = message.fantasytime;
                        return object;
                    };

                    /**
                     * Converts this TeepattiLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.TeepattiLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TeepattiLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TeepattiLevelDesc;
                })();

                platform.ABLevelDesc = (function() {

                    /**
                     * Properties of a ABLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IABLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] ABLevelDesc game_level
                     * @property {number|null} [bet_min] ABLevelDesc bet_min
                     * @property {number|null} [bet_max] ABLevelDesc bet_max
                     * @property {number|null} [AB_players_size] ABLevelDesc AB_players_size
                     * @property {number|null} [chip_templete] ABLevelDesc chip_templete
                     */

                    /**
                     * Constructs a new ABLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a ABLevelDesc.
                     * @implements IABLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IABLevelDesc=} [properties] Properties to set
                     */
                    function ABLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ABLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     */
                    ABLevelDesc.prototype.game_level = null;

                    /**
                     * ABLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     */
                    ABLevelDesc.prototype.bet_min = 0;

                    /**
                     * ABLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     */
                    ABLevelDesc.prototype.bet_max = 0;

                    /**
                     * ABLevelDesc AB_players_size.
                     * @member {number} AB_players_size
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     */
                    ABLevelDesc.prototype.AB_players_size = 0;

                    /**
                     * ABLevelDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     */
                    ABLevelDesc.prototype.chip_templete = 0;

                    /**
                     * Creates a new ABLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IABLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.ABLevelDesc} ABLevelDesc instance
                     */
                    ABLevelDesc.create = function create(properties) {
                        return new ABLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified ABLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.ABLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IABLevelDesc} message ABLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ABLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.AB_players_size != null && Object.hasOwnProperty.call(message, "AB_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.AB_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chip_templete);
                        return writer;
                    };

                    /**
                     * Encodes the specified ABLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.ABLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IABLevelDesc} message ABLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ABLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ABLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.ABLevelDesc} ABLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ABLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.ABLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.AB_players_size = reader.uint32();
                                break;
                            case 5:
                                message.chip_templete = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ABLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.ABLevelDesc} ABLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ABLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ABLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ABLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.AB_players_size != null && message.hasOwnProperty("AB_players_size"))
                            if (!$util.isInteger(message.AB_players_size))
                                return "AB_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        return null;
                    };

                    /**
                     * Creates a ABLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.ABLevelDesc} ABLevelDesc
                     */
                    ABLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.ABLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.ABLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.ABLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.AB_players_size != null)
                            message.AB_players_size = object.AB_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ABLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ABLevelDesc} message ABLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ABLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.AB_players_size = 0;
                            object.chip_templete = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.AB_players_size != null && message.hasOwnProperty("AB_players_size"))
                            object.AB_players_size = message.AB_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        return object;
                    };

                    /**
                     * Converts this ABLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.ABLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ABLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ABLevelDesc;
                })();

                platform.SevenUpdownLevelDesc = (function() {

                    /**
                     * Properties of a SevenUpdownLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface ISevenUpdownLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] SevenUpdownLevelDesc game_level
                     * @property {number|null} [bet_min] SevenUpdownLevelDesc bet_min
                     * @property {number|null} [bet_max] SevenUpdownLevelDesc bet_max
                     * @property {number|null} [SD_players_size] SevenUpdownLevelDesc SD_players_size
                     * @property {number|null} [chip_templete] SevenUpdownLevelDesc chip_templete
                     * @property {number|null} [bet_min1] SevenUpdownLevelDesc bet_min1
                     * @property {number|null} [bet_max1] SevenUpdownLevelDesc bet_max1
                     * @property {number|null} [bet_min2] SevenUpdownLevelDesc bet_min2
                     * @property {number|null} [bet_max2] SevenUpdownLevelDesc bet_max2
                     * @property {number|null} [bet_min0] SevenUpdownLevelDesc bet_min0
                     * @property {number|null} [bet_max0] SevenUpdownLevelDesc bet_max0
                     */

                    /**
                     * Constructs a new SevenUpdownLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a SevenUpdownLevelDesc.
                     * @implements ISevenUpdownLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.ISevenUpdownLevelDesc=} [properties] Properties to set
                     */
                    function SevenUpdownLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SevenUpdownLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.game_level = null;

                    /**
                     * SevenUpdownLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_min = 0;

                    /**
                     * SevenUpdownLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_max = 0;

                    /**
                     * SevenUpdownLevelDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.SD_players_size = 0;

                    /**
                     * SevenUpdownLevelDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.chip_templete = 0;

                    /**
                     * SevenUpdownLevelDesc bet_min1.
                     * @member {number} bet_min1
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_min1 = 0;

                    /**
                     * SevenUpdownLevelDesc bet_max1.
                     * @member {number} bet_max1
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_max1 = 0;

                    /**
                     * SevenUpdownLevelDesc bet_min2.
                     * @member {number} bet_min2
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_min2 = 0;

                    /**
                     * SevenUpdownLevelDesc bet_max2.
                     * @member {number} bet_max2
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_max2 = 0;

                    /**
                     * SevenUpdownLevelDesc bet_min0.
                     * @member {number} bet_min0
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_min0 = 0;

                    /**
                     * SevenUpdownLevelDesc bet_max0.
                     * @member {number} bet_max0
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     */
                    SevenUpdownLevelDesc.prototype.bet_max0 = 0;

                    /**
                     * Creates a new SevenUpdownLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ISevenUpdownLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.SevenUpdownLevelDesc} SevenUpdownLevelDesc instance
                     */
                    SevenUpdownLevelDesc.create = function create(properties) {
                        return new SevenUpdownLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified SevenUpdownLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.SevenUpdownLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ISevenUpdownLevelDesc} message SevenUpdownLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SevenUpdownLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SD_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chip_templete);
                        if (message.bet_min1 != null && Object.hasOwnProperty.call(message, "bet_min1"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.bet_min1);
                        if (message.bet_max1 != null && Object.hasOwnProperty.call(message, "bet_max1"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.bet_max1);
                        if (message.bet_min2 != null && Object.hasOwnProperty.call(message, "bet_min2"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.bet_min2);
                        if (message.bet_max2 != null && Object.hasOwnProperty.call(message, "bet_max2"))
                            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.bet_max2);
                        if (message.bet_min0 != null && Object.hasOwnProperty.call(message, "bet_min0"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.bet_min0);
                        if (message.bet_max0 != null && Object.hasOwnProperty.call(message, "bet_max0"))
                            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.bet_max0);
                        return writer;
                    };

                    /**
                     * Encodes the specified SevenUpdownLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.SevenUpdownLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.ISevenUpdownLevelDesc} message SevenUpdownLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SevenUpdownLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SevenUpdownLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.SevenUpdownLevelDesc} SevenUpdownLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SevenUpdownLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.SevenUpdownLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.SD_players_size = reader.uint32();
                                break;
                            case 5:
                                message.chip_templete = reader.uint32();
                                break;
                            case 6:
                                message.bet_min1 = reader.uint32();
                                break;
                            case 7:
                                message.bet_max1 = reader.uint32();
                                break;
                            case 8:
                                message.bet_min2 = reader.uint32();
                                break;
                            case 9:
                                message.bet_max2 = reader.uint32();
                                break;
                            case 10:
                                message.bet_min0 = reader.uint32();
                                break;
                            case 11:
                                message.bet_max0 = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SevenUpdownLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.SevenUpdownLevelDesc} SevenUpdownLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SevenUpdownLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SevenUpdownLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SevenUpdownLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        if (message.bet_min1 != null && message.hasOwnProperty("bet_min1"))
                            if (!$util.isInteger(message.bet_min1))
                                return "bet_min1: integer expected";
                        if (message.bet_max1 != null && message.hasOwnProperty("bet_max1"))
                            if (!$util.isInteger(message.bet_max1))
                                return "bet_max1: integer expected";
                        if (message.bet_min2 != null && message.hasOwnProperty("bet_min2"))
                            if (!$util.isInteger(message.bet_min2))
                                return "bet_min2: integer expected";
                        if (message.bet_max2 != null && message.hasOwnProperty("bet_max2"))
                            if (!$util.isInteger(message.bet_max2))
                                return "bet_max2: integer expected";
                        if (message.bet_min0 != null && message.hasOwnProperty("bet_min0"))
                            if (!$util.isInteger(message.bet_min0))
                                return "bet_min0: integer expected";
                        if (message.bet_max0 != null && message.hasOwnProperty("bet_max0"))
                            if (!$util.isInteger(message.bet_max0))
                                return "bet_max0: integer expected";
                        return null;
                    };

                    /**
                     * Creates a SevenUpdownLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.SevenUpdownLevelDesc} SevenUpdownLevelDesc
                     */
                    SevenUpdownLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.SevenUpdownLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.SevenUpdownLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.SevenUpdownLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        if (object.bet_min1 != null)
                            message.bet_min1 = object.bet_min1 >>> 0;
                        if (object.bet_max1 != null)
                            message.bet_max1 = object.bet_max1 >>> 0;
                        if (object.bet_min2 != null)
                            message.bet_min2 = object.bet_min2 >>> 0;
                        if (object.bet_max2 != null)
                            message.bet_max2 = object.bet_max2 >>> 0;
                        if (object.bet_min0 != null)
                            message.bet_min0 = object.bet_min0 >>> 0;
                        if (object.bet_max0 != null)
                            message.bet_max0 = object.bet_max0 >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a SevenUpdownLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.SevenUpdownLevelDesc} message SevenUpdownLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SevenUpdownLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.SD_players_size = 0;
                            object.chip_templete = 0;
                            object.bet_min1 = 0;
                            object.bet_max1 = 0;
                            object.bet_min2 = 0;
                            object.bet_max2 = 0;
                            object.bet_min0 = 0;
                            object.bet_max0 = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        if (message.bet_min1 != null && message.hasOwnProperty("bet_min1"))
                            object.bet_min1 = message.bet_min1;
                        if (message.bet_max1 != null && message.hasOwnProperty("bet_max1"))
                            object.bet_max1 = message.bet_max1;
                        if (message.bet_min2 != null && message.hasOwnProperty("bet_min2"))
                            object.bet_min2 = message.bet_min2;
                        if (message.bet_max2 != null && message.hasOwnProperty("bet_max2"))
                            object.bet_max2 = message.bet_max2;
                        if (message.bet_min0 != null && message.hasOwnProperty("bet_min0"))
                            object.bet_min0 = message.bet_min0;
                        if (message.bet_max0 != null && message.hasOwnProperty("bet_max0"))
                            object.bet_max0 = message.bet_max0;
                        return object;
                    };

                    /**
                     * Converts this SevenUpdownLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.SevenUpdownLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SevenUpdownLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SevenUpdownLevelDesc;
                })();

                platform.RapidTeenpattiLevelDesc = (function() {

                    /**
                     * Properties of a RapidTeenpattiLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IRapidTeenpattiLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] RapidTeenpattiLevelDesc game_level
                     * @property {number|null} [blind] RapidTeenpattiLevelDesc blind
                     */

                    /**
                     * Constructs a new RapidTeenpattiLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a RapidTeenpattiLevelDesc.
                     * @implements IRapidTeenpattiLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IRapidTeenpattiLevelDesc=} [properties] Properties to set
                     */
                    function RapidTeenpattiLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RapidTeenpattiLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @instance
                     */
                    RapidTeenpattiLevelDesc.prototype.game_level = null;

                    /**
                     * RapidTeenpattiLevelDesc blind.
                     * @member {number} blind
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @instance
                     */
                    RapidTeenpattiLevelDesc.prototype.blind = 0;

                    /**
                     * Creates a new RapidTeenpattiLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRapidTeenpattiLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.RapidTeenpattiLevelDesc} RapidTeenpattiLevelDesc instance
                     */
                    RapidTeenpattiLevelDesc.create = function create(properties) {
                        return new RapidTeenpattiLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified RapidTeenpattiLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.RapidTeenpattiLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRapidTeenpattiLevelDesc} message RapidTeenpattiLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RapidTeenpattiLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.blind != null && Object.hasOwnProperty.call(message, "blind"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.blind);
                        return writer;
                    };

                    /**
                     * Encodes the specified RapidTeenpattiLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.RapidTeenpattiLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IRapidTeenpattiLevelDesc} message RapidTeenpattiLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RapidTeenpattiLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RapidTeenpattiLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.RapidTeenpattiLevelDesc} RapidTeenpattiLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RapidTeenpattiLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.blind = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RapidTeenpattiLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.RapidTeenpattiLevelDesc} RapidTeenpattiLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RapidTeenpattiLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RapidTeenpattiLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RapidTeenpattiLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.blind != null && message.hasOwnProperty("blind"))
                            if (!$util.isInteger(message.blind))
                                return "blind: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RapidTeenpattiLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.RapidTeenpattiLevelDesc} RapidTeenpattiLevelDesc
                     */
                    RapidTeenpattiLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.RapidTeenpattiLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.blind != null)
                            message.blind = object.blind >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RapidTeenpattiLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.RapidTeenpattiLevelDesc} message RapidTeenpattiLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RapidTeenpattiLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.blind = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.blind != null && message.hasOwnProperty("blind"))
                            object.blind = message.blind;
                        return object;
                    };

                    /**
                     * Converts this RapidTeenpattiLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.RapidTeenpattiLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RapidTeenpattiLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RapidTeenpattiLevelDesc;
                })();

                platform.DragonTigerLevelDesc = (function() {

                    /**
                     * Properties of a DragonTigerLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IDragonTigerLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] DragonTigerLevelDesc game_level
                     * @property {number|null} [bet_min] DragonTigerLevelDesc bet_min
                     * @property {number|null} [bet_max] DragonTigerLevelDesc bet_max
                     * @property {number|null} [SD_players_size] DragonTigerLevelDesc SD_players_size
                     * @property {number|null} [chip_templete] DragonTigerLevelDesc chip_templete
                     * @property {number|null} [bet_min1] DragonTigerLevelDesc bet_min1
                     * @property {number|null} [bet_max1] DragonTigerLevelDesc bet_max1
                     * @property {number|null} [bet_min2] DragonTigerLevelDesc bet_min2
                     * @property {number|null} [bet_max2] DragonTigerLevelDesc bet_max2
                     * @property {number|null} [bet_min0] DragonTigerLevelDesc bet_min0
                     * @property {number|null} [bet_max0] DragonTigerLevelDesc bet_max0
                     */

                    /**
                     * Constructs a new DragonTigerLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a DragonTigerLevelDesc.
                     * @implements IDragonTigerLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IDragonTigerLevelDesc=} [properties] Properties to set
                     */
                    function DragonTigerLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DragonTigerLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.game_level = null;

                    /**
                     * DragonTigerLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_min = 0;

                    /**
                     * DragonTigerLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_max = 0;

                    /**
                     * DragonTigerLevelDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.SD_players_size = 0;

                    /**
                     * DragonTigerLevelDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.chip_templete = 0;

                    /**
                     * DragonTigerLevelDesc bet_min1.
                     * @member {number} bet_min1
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_min1 = 0;

                    /**
                     * DragonTigerLevelDesc bet_max1.
                     * @member {number} bet_max1
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_max1 = 0;

                    /**
                     * DragonTigerLevelDesc bet_min2.
                     * @member {number} bet_min2
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_min2 = 0;

                    /**
                     * DragonTigerLevelDesc bet_max2.
                     * @member {number} bet_max2
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_max2 = 0;

                    /**
                     * DragonTigerLevelDesc bet_min0.
                     * @member {number} bet_min0
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_min0 = 0;

                    /**
                     * DragonTigerLevelDesc bet_max0.
                     * @member {number} bet_max0
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     */
                    DragonTigerLevelDesc.prototype.bet_max0 = 0;

                    /**
                     * Creates a new DragonTigerLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IDragonTigerLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.DragonTigerLevelDesc} DragonTigerLevelDesc instance
                     */
                    DragonTigerLevelDesc.create = function create(properties) {
                        return new DragonTigerLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified DragonTigerLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.DragonTigerLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IDragonTigerLevelDesc} message DragonTigerLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DragonTigerLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SD_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chip_templete);
                        if (message.bet_min1 != null && Object.hasOwnProperty.call(message, "bet_min1"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.bet_min1);
                        if (message.bet_max1 != null && Object.hasOwnProperty.call(message, "bet_max1"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.bet_max1);
                        if (message.bet_min2 != null && Object.hasOwnProperty.call(message, "bet_min2"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.bet_min2);
                        if (message.bet_max2 != null && Object.hasOwnProperty.call(message, "bet_max2"))
                            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.bet_max2);
                        if (message.bet_min0 != null && Object.hasOwnProperty.call(message, "bet_min0"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.bet_min0);
                        if (message.bet_max0 != null && Object.hasOwnProperty.call(message, "bet_max0"))
                            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.bet_max0);
                        return writer;
                    };

                    /**
                     * Encodes the specified DragonTigerLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.DragonTigerLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IDragonTigerLevelDesc} message DragonTigerLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DragonTigerLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DragonTigerLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.DragonTigerLevelDesc} DragonTigerLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DragonTigerLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.DragonTigerLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.SD_players_size = reader.uint32();
                                break;
                            case 5:
                                message.chip_templete = reader.uint32();
                                break;
                            case 6:
                                message.bet_min1 = reader.uint32();
                                break;
                            case 7:
                                message.bet_max1 = reader.uint32();
                                break;
                            case 8:
                                message.bet_min2 = reader.uint32();
                                break;
                            case 9:
                                message.bet_max2 = reader.uint32();
                                break;
                            case 10:
                                message.bet_min0 = reader.uint32();
                                break;
                            case 11:
                                message.bet_max0 = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DragonTigerLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.DragonTigerLevelDesc} DragonTigerLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DragonTigerLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DragonTigerLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DragonTigerLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        if (message.bet_min1 != null && message.hasOwnProperty("bet_min1"))
                            if (!$util.isInteger(message.bet_min1))
                                return "bet_min1: integer expected";
                        if (message.bet_max1 != null && message.hasOwnProperty("bet_max1"))
                            if (!$util.isInteger(message.bet_max1))
                                return "bet_max1: integer expected";
                        if (message.bet_min2 != null && message.hasOwnProperty("bet_min2"))
                            if (!$util.isInteger(message.bet_min2))
                                return "bet_min2: integer expected";
                        if (message.bet_max2 != null && message.hasOwnProperty("bet_max2"))
                            if (!$util.isInteger(message.bet_max2))
                                return "bet_max2: integer expected";
                        if (message.bet_min0 != null && message.hasOwnProperty("bet_min0"))
                            if (!$util.isInteger(message.bet_min0))
                                return "bet_min0: integer expected";
                        if (message.bet_max0 != null && message.hasOwnProperty("bet_max0"))
                            if (!$util.isInteger(message.bet_max0))
                                return "bet_max0: integer expected";
                        return null;
                    };

                    /**
                     * Creates a DragonTigerLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.DragonTigerLevelDesc} DragonTigerLevelDesc
                     */
                    DragonTigerLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.DragonTigerLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.DragonTigerLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.DragonTigerLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        if (object.bet_min1 != null)
                            message.bet_min1 = object.bet_min1 >>> 0;
                        if (object.bet_max1 != null)
                            message.bet_max1 = object.bet_max1 >>> 0;
                        if (object.bet_min2 != null)
                            message.bet_min2 = object.bet_min2 >>> 0;
                        if (object.bet_max2 != null)
                            message.bet_max2 = object.bet_max2 >>> 0;
                        if (object.bet_min0 != null)
                            message.bet_min0 = object.bet_min0 >>> 0;
                        if (object.bet_max0 != null)
                            message.bet_max0 = object.bet_max0 >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a DragonTigerLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.DragonTigerLevelDesc} message DragonTigerLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DragonTigerLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.SD_players_size = 0;
                            object.chip_templete = 0;
                            object.bet_min1 = 0;
                            object.bet_max1 = 0;
                            object.bet_min2 = 0;
                            object.bet_max2 = 0;
                            object.bet_min0 = 0;
                            object.bet_max0 = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        if (message.bet_min1 != null && message.hasOwnProperty("bet_min1"))
                            object.bet_min1 = message.bet_min1;
                        if (message.bet_max1 != null && message.hasOwnProperty("bet_max1"))
                            object.bet_max1 = message.bet_max1;
                        if (message.bet_min2 != null && message.hasOwnProperty("bet_min2"))
                            object.bet_min2 = message.bet_min2;
                        if (message.bet_max2 != null && message.hasOwnProperty("bet_max2"))
                            object.bet_max2 = message.bet_max2;
                        if (message.bet_min0 != null && message.hasOwnProperty("bet_min0"))
                            object.bet_min0 = message.bet_min0;
                        if (message.bet_max0 != null && message.hasOwnProperty("bet_max0"))
                            object.bet_max0 = message.bet_max0;
                        return object;
                    };

                    /**
                     * Converts this DragonTigerLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.DragonTigerLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DragonTigerLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DragonTigerLevelDesc;
                })();

                platform.BlackredLevelDesc = (function() {

                    /**
                     * Properties of a BlackredLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IBlackredLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] BlackredLevelDesc game_level
                     * @property {number|null} [bet_min] BlackredLevelDesc bet_min
                     * @property {number|null} [bet_max] BlackredLevelDesc bet_max
                     * @property {number|null} [SD_players_size] BlackredLevelDesc SD_players_size
                     * @property {number|null} [chip_templete] BlackredLevelDesc chip_templete
                     */

                    /**
                     * Constructs a new BlackredLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a BlackredLevelDesc.
                     * @implements IBlackredLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IBlackredLevelDesc=} [properties] Properties to set
                     */
                    function BlackredLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BlackredLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     */
                    BlackredLevelDesc.prototype.game_level = null;

                    /**
                     * BlackredLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     */
                    BlackredLevelDesc.prototype.bet_min = 0;

                    /**
                     * BlackredLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     */
                    BlackredLevelDesc.prototype.bet_max = 0;

                    /**
                     * BlackredLevelDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     */
                    BlackredLevelDesc.prototype.SD_players_size = 0;

                    /**
                     * BlackredLevelDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     */
                    BlackredLevelDesc.prototype.chip_templete = 0;

                    /**
                     * Creates a new BlackredLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBlackredLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.BlackredLevelDesc} BlackredLevelDesc instance
                     */
                    BlackredLevelDesc.create = function create(properties) {
                        return new BlackredLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified BlackredLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.BlackredLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBlackredLevelDesc} message BlackredLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlackredLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SD_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chip_templete);
                        return writer;
                    };

                    /**
                     * Encodes the specified BlackredLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.BlackredLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBlackredLevelDesc} message BlackredLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BlackredLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BlackredLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.BlackredLevelDesc} BlackredLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlackredLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.BlackredLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.SD_players_size = reader.uint32();
                                break;
                            case 5:
                                message.chip_templete = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BlackredLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.BlackredLevelDesc} BlackredLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BlackredLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BlackredLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BlackredLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        return null;
                    };

                    /**
                     * Creates a BlackredLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.BlackredLevelDesc} BlackredLevelDesc
                     */
                    BlackredLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.BlackredLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.BlackredLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.BlackredLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BlackredLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.BlackredLevelDesc} message BlackredLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BlackredLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.SD_players_size = 0;
                            object.chip_templete = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        return object;
                    };

                    /**
                     * Converts this BlackredLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.BlackredLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BlackredLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BlackredLevelDesc;
                })();

                platform.HorseracingDesc = (function() {

                    /**
                     * Properties of a HorseracingDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IHorseracingDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] HorseracingDesc game_level
                     * @property {number|null} [SD_players_size] HorseracingDesc SD_players_size
                     * @property {number|null} [chip_templete] HorseracingDesc chip_templete
                     * @property {number|null} [o_expected_value] HorseracingDesc o_expected_value
                     * @property {number|null} [bet_min] HorseracingDesc bet_min
                     * @property {number|null} [bet_max] HorseracingDesc bet_max
                     */

                    /**
                     * Constructs a new HorseracingDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a HorseracingDesc.
                     * @implements IHorseracingDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IHorseracingDesc=} [properties] Properties to set
                     */
                    function HorseracingDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HorseracingDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.game_level = null;

                    /**
                     * HorseracingDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.SD_players_size = 0;

                    /**
                     * HorseracingDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.chip_templete = 0;

                    /**
                     * HorseracingDesc o_expected_value.
                     * @member {number} o_expected_value
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.o_expected_value = 0;

                    /**
                     * HorseracingDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.bet_min = 0;

                    /**
                     * HorseracingDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     */
                    HorseracingDesc.prototype.bet_max = 0;

                    /**
                     * Creates a new HorseracingDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {com.cw.chess2.platform.IHorseracingDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.HorseracingDesc} HorseracingDesc instance
                     */
                    HorseracingDesc.create = function create(properties) {
                        return new HorseracingDesc(properties);
                    };

                    /**
                     * Encodes the specified HorseracingDesc message. Does not implicitly {@link com.cw.chess2.platform.HorseracingDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {com.cw.chess2.platform.IHorseracingDesc} message HorseracingDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HorseracingDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.SD_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.chip_templete);
                        if (message.o_expected_value != null && Object.hasOwnProperty.call(message, "o_expected_value"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.o_expected_value);
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.bet_max);
                        return writer;
                    };

                    /**
                     * Encodes the specified HorseracingDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.HorseracingDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {com.cw.chess2.platform.IHorseracingDesc} message HorseracingDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HorseracingDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HorseracingDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.HorseracingDesc} HorseracingDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HorseracingDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.HorseracingDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.SD_players_size = reader.uint32();
                                break;
                            case 3:
                                message.chip_templete = reader.uint32();
                                break;
                            case 4:
                                message.o_expected_value = reader.uint32();
                                break;
                            case 5:
                                message.bet_min = reader.uint32();
                                break;
                            case 6:
                                message.bet_max = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HorseracingDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.HorseracingDesc} HorseracingDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HorseracingDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HorseracingDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HorseracingDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        if (message.o_expected_value != null && message.hasOwnProperty("o_expected_value"))
                            if (!$util.isInteger(message.o_expected_value))
                                return "o_expected_value: integer expected";
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        return null;
                    };

                    /**
                     * Creates a HorseracingDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.HorseracingDesc} HorseracingDesc
                     */
                    HorseracingDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.HorseracingDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.HorseracingDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.HorseracingDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        if (object.o_expected_value != null)
                            message.o_expected_value = object.o_expected_value >>> 0;
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a HorseracingDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @static
                     * @param {com.cw.chess2.platform.HorseracingDesc} message HorseracingDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HorseracingDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.SD_players_size = 0;
                            object.chip_templete = 0;
                            object.o_expected_value = 0;
                            object.bet_min = 0;
                            object.bet_max = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        if (message.o_expected_value != null && message.hasOwnProperty("o_expected_value"))
                            object.o_expected_value = message.o_expected_value;
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        return object;
                    };

                    /**
                     * Converts this HorseracingDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.HorseracingDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HorseracingDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return HorseracingDesc;
                })();

                platform.JMLevelDesc = (function() {

                    /**
                     * Properties of a JMLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IJMLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] JMLevelDesc game_level
                     * @property {number|null} [bet_min] JMLevelDesc bet_min
                     * @property {number|null} [bet_max] JMLevelDesc bet_max
                     * @property {number|null} [SD_players_size] JMLevelDesc SD_players_size
                     * @property {number|null} [chip_templete] JMLevelDesc chip_templete
                     */

                    /**
                     * Constructs a new JMLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a JMLevelDesc.
                     * @implements IJMLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IJMLevelDesc=} [properties] Properties to set
                     */
                    function JMLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * JMLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     */
                    JMLevelDesc.prototype.game_level = null;

                    /**
                     * JMLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     */
                    JMLevelDesc.prototype.bet_min = 0;

                    /**
                     * JMLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     */
                    JMLevelDesc.prototype.bet_max = 0;

                    /**
                     * JMLevelDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     */
                    JMLevelDesc.prototype.SD_players_size = 0;

                    /**
                     * JMLevelDesc chip_templete.
                     * @member {number} chip_templete
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     */
                    JMLevelDesc.prototype.chip_templete = 0;

                    /**
                     * Creates a new JMLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IJMLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.JMLevelDesc} JMLevelDesc instance
                     */
                    JMLevelDesc.create = function create(properties) {
                        return new JMLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified JMLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.JMLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IJMLevelDesc} message JMLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JMLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SD_players_size);
                        if (message.chip_templete != null && Object.hasOwnProperty.call(message, "chip_templete"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chip_templete);
                        return writer;
                    };

                    /**
                     * Encodes the specified JMLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.JMLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IJMLevelDesc} message JMLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JMLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JMLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.JMLevelDesc} JMLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JMLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.JMLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.SD_players_size = reader.uint32();
                                break;
                            case 5:
                                message.chip_templete = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JMLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.JMLevelDesc} JMLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JMLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JMLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JMLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            if (!$util.isInteger(message.chip_templete))
                                return "chip_templete: integer expected";
                        return null;
                    };

                    /**
                     * Creates a JMLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.JMLevelDesc} JMLevelDesc
                     */
                    JMLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.JMLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.JMLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.JMLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        if (object.chip_templete != null)
                            message.chip_templete = object.chip_templete >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a JMLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.JMLevelDesc} message JMLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JMLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.SD_players_size = 0;
                            object.chip_templete = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        if (message.chip_templete != null && message.hasOwnProperty("chip_templete"))
                            object.chip_templete = message.chip_templete;
                        return object;
                    };

                    /**
                     * Converts this JMLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.JMLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JMLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JMLevelDesc;
                })();

                platform.BaccaratLevelDesc = (function() {

                    /**
                     * Properties of a BaccaratLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @interface IBaccaratLevelDesc
                     * @property {com.cw.chess2.platform.IGameLevelDesc|null} [game_level] BaccaratLevelDesc game_level
                     * @property {number|null} [bet_min] BaccaratLevelDesc bet_min
                     * @property {number|null} [bet_max] BaccaratLevelDesc bet_max
                     * @property {number|null} [SD_players_size] BaccaratLevelDesc SD_players_size
                     */

                    /**
                     * Constructs a new BaccaratLevelDesc.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a BaccaratLevelDesc.
                     * @implements IBaccaratLevelDesc
                     * @constructor
                     * @param {com.cw.chess2.platform.IBaccaratLevelDesc=} [properties] Properties to set
                     */
                    function BaccaratLevelDesc(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BaccaratLevelDesc game_level.
                     * @member {com.cw.chess2.platform.IGameLevelDesc|null|undefined} game_level
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @instance
                     */
                    BaccaratLevelDesc.prototype.game_level = null;

                    /**
                     * BaccaratLevelDesc bet_min.
                     * @member {number} bet_min
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @instance
                     */
                    BaccaratLevelDesc.prototype.bet_min = 0;

                    /**
                     * BaccaratLevelDesc bet_max.
                     * @member {number} bet_max
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @instance
                     */
                    BaccaratLevelDesc.prototype.bet_max = 0;

                    /**
                     * BaccaratLevelDesc SD_players_size.
                     * @member {number} SD_players_size
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @instance
                     */
                    BaccaratLevelDesc.prototype.SD_players_size = 0;

                    /**
                     * Creates a new BaccaratLevelDesc instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBaccaratLevelDesc=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.BaccaratLevelDesc} BaccaratLevelDesc instance
                     */
                    BaccaratLevelDesc.create = function create(properties) {
                        return new BaccaratLevelDesc(properties);
                    };

                    /**
                     * Encodes the specified BaccaratLevelDesc message. Does not implicitly {@link com.cw.chess2.platform.BaccaratLevelDesc.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBaccaratLevelDesc} message BaccaratLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BaccaratLevelDesc.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(message.game_level, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bet_min);
                        if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bet_max);
                        if (message.SD_players_size != null && Object.hasOwnProperty.call(message, "SD_players_size"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SD_players_size);
                        return writer;
                    };

                    /**
                     * Encodes the specified BaccaratLevelDesc message, length delimited. Does not implicitly {@link com.cw.chess2.platform.BaccaratLevelDesc.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.IBaccaratLevelDesc} message BaccaratLevelDesc message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BaccaratLevelDesc.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BaccaratLevelDesc message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.BaccaratLevelDesc} BaccaratLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BaccaratLevelDesc.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.BaccaratLevelDesc();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.bet_min = reader.uint32();
                                break;
                            case 3:
                                message.bet_max = reader.uint32();
                                break;
                            case 4:
                                message.SD_players_size = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BaccaratLevelDesc message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.BaccaratLevelDesc} BaccaratLevelDesc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BaccaratLevelDesc.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BaccaratLevelDesc message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BaccaratLevelDesc.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_level != null && message.hasOwnProperty("game_level")) {
                            var error = $root.com.cw.chess2.platform.GameLevelDesc.verify(message.game_level);
                            if (error)
                                return "game_level." + error;
                        }
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            if (!$util.isInteger(message.bet_min))
                                return "bet_min: integer expected";
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            if (!$util.isInteger(message.bet_max))
                                return "bet_max: integer expected";
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            if (!$util.isInteger(message.SD_players_size))
                                return "SD_players_size: integer expected";
                        return null;
                    };

                    /**
                     * Creates a BaccaratLevelDesc message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.BaccaratLevelDesc} BaccaratLevelDesc
                     */
                    BaccaratLevelDesc.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.BaccaratLevelDesc)
                            return object;
                        var message = new $root.com.cw.chess2.platform.BaccaratLevelDesc();
                        if (object.game_level != null) {
                            if (typeof object.game_level !== "object")
                                throw TypeError(".com.cw.chess2.platform.BaccaratLevelDesc.game_level: object expected");
                            message.game_level = $root.com.cw.chess2.platform.GameLevelDesc.fromObject(object.game_level);
                        }
                        if (object.bet_min != null)
                            message.bet_min = object.bet_min >>> 0;
                        if (object.bet_max != null)
                            message.bet_max = object.bet_max >>> 0;
                        if (object.SD_players_size != null)
                            message.SD_players_size = object.SD_players_size >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a BaccaratLevelDesc message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @static
                     * @param {com.cw.chess2.platform.BaccaratLevelDesc} message BaccaratLevelDesc
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BaccaratLevelDesc.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_level = null;
                            object.bet_min = 0;
                            object.bet_max = 0;
                            object.SD_players_size = 0;
                        }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = $root.com.cw.chess2.platform.GameLevelDesc.toObject(message.game_level, options);
                        if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                            object.bet_min = message.bet_min;
                        if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                            object.bet_max = message.bet_max;
                        if (message.SD_players_size != null && message.hasOwnProperty("SD_players_size"))
                            object.SD_players_size = message.SD_players_size;
                        return object;
                    };

                    /**
                     * Converts this BaccaratLevelDesc to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.BaccaratLevelDesc
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BaccaratLevelDesc.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BaccaratLevelDesc;
                })();

                platform.GameKindRequest = (function() {

                    /**
                     * Properties of a GameKindRequest.
                     * @memberof com.cw.chess2.platform
                     * @interface IGameKindRequest
                     * @property {com.cw.chess2.platform.GameKind|null} [game_kind] GameKindRequest game_kind
                     */

                    /**
                     * Constructs a new GameKindRequest.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a GameKindRequest.
                     * @implements IGameKindRequest
                     * @constructor
                     * @param {com.cw.chess2.platform.IGameKindRequest=} [properties] Properties to set
                     */
                    function GameKindRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GameKindRequest game_kind.
                     * @member {com.cw.chess2.platform.GameKind} game_kind
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @instance
                     */
                    GameKindRequest.prototype.game_kind = 0;

                    /**
                     * Creates a new GameKindRequest instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindRequest=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.GameKindRequest} GameKindRequest instance
                     */
                    GameKindRequest.create = function create(properties) {
                        return new GameKindRequest(properties);
                    };

                    /**
                     * Encodes the specified GameKindRequest message. Does not implicitly {@link com.cw.chess2.platform.GameKindRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindRequest} message GameKindRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameKindRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_kind != null && Object.hasOwnProperty.call(message, "game_kind"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.game_kind);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameKindRequest message, length delimited. Does not implicitly {@link com.cw.chess2.platform.GameKindRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindRequest} message GameKindRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameKindRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GameKindRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.GameKindRequest} GameKindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameKindRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.GameKindRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_kind = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GameKindRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.GameKindRequest} GameKindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameKindRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameKindRequest message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameKindRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            switch (message.game_kind) {
                            default:
                                return "game_kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a GameKindRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.GameKindRequest} GameKindRequest
                     */
                    GameKindRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.GameKindRequest)
                            return object;
                        var message = new $root.com.cw.chess2.platform.GameKindRequest();
                        switch (object.game_kind) {
                        case "INVALID":
                        case 0:
                            message.game_kind = 0;
                            break;
                        case "GAME_KIND_Rummy":
                        case 1:
                            message.game_kind = 1;
                            break;
                        case "GAME_KIND_Rummy_pool":
                        case 2:
                            message.game_kind = 2;
                            break;
                        case "GAME_KIND_Rummy_10":
                        case 3:
                            message.game_kind = 3;
                            break;
                        case "GAME_KIND_TEEPATTI":
                        case 4:
                            message.game_kind = 4;
                            break;
                        case "GAME_KIND_AB":
                        case 5:
                            message.game_kind = 5;
                            break;
                        case "GAME_KIND_SevenUD":
                        case 6:
                            message.game_kind = 6;
                            break;
                        case "GAME_KIND_RapidTeenaptti":
                        case 7:
                            message.game_kind = 7;
                            break;
                        case "GAME_KIND_DragonTiger":
                        case 8:
                            message.game_kind = 8;
                            break;
                        case "GAME_KIND_BlackRed":
                        case 9:
                            message.game_kind = 9;
                            break;
                        case "GAME_KIND_HorseRacing":
                        case 10:
                            message.game_kind = 10;
                            break;
                        case "GAME_KIND_JM":
                        case 11:
                            message.game_kind = 11;
                            break;
                        case "GAME_KIND_BACCARAT":
                        case 12:
                            message.game_kind = 12;
                            break;
                        case "GAME_KIND_JokerTeenpatti":
                        case 13:
                            message.game_kind = 13;
                            break;
                        case "GAME_KIND_AKTeenpatti":
                        case 14:
                            message.game_kind = 14;
                            break;
                        case "GAME_KIND_Fruit":
                        case 15:
                            message.game_kind = 15;
                            break;
                        case "GAME_KIND_Car":
                        case 16:
                            message.game_kind = 16;
                            break;
                        case "GAME_KIND_FT":
                        case 20:
                            message.game_kind = 20;
                            break;
                        case "GAME_KIND_LUDO_MASTER":
                        case 21:
                            message.game_kind = 21;
                            break;
                        case "GAME_KIND_LUDO_CLASSIC":
                        case 22:
                            message.game_kind = 22;
                            break;
                        case "GAME_KIND_LUDO_QUICK":
                        case 23:
                            message.game_kind = 23;
                            break;
                        case "GAME_KIND_SLOT_CHRISTMAS":
                        case 24:
                            message.game_kind = 24;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameKindRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @static
                     * @param {com.cw.chess2.platform.GameKindRequest} message GameKindRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameKindRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.game_kind = options.enums === String ? "INVALID" : 0;
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            object.game_kind = options.enums === String ? $root.com.cw.chess2.platform.GameKind[message.game_kind] : message.game_kind;
                        return object;
                    };

                    /**
                     * Converts this GameKindRequest to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.GameKindRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameKindRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GameKindRequest;
                })();

                platform.GameKindResponse = (function() {

                    /**
                     * Properties of a GameKindResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface IGameKindResponse
                     * @property {Array.<com.cw.chess2.platform.GameKind>|null} [game_kind] GameKindResponse game_kind
                     * @property {Array.<com.cw.chess2.platform.IRummyLevelDesc>|null} [rummy_levels] GameKindResponse rummy_levels
                     * @property {Array.<com.cw.chess2.platform.ITeepattiLevelDesc>|null} [teepatti_levels] GameKindResponse teepatti_levels
                     * @property {Array.<com.cw.chess2.platform.IABLevelDesc>|null} [ab_levels] GameKindResponse ab_levels
                     * @property {Array.<com.cw.chess2.platform.ISevenUpdownLevelDesc>|null} [sevenupdown_levels] GameKindResponse sevenupdown_levels
                     * @property {Array.<com.cw.chess2.platform.IRapidTeenpattiLevelDesc>|null} [rapidteenpatti_levels] GameKindResponse rapidteenpatti_levels
                     * @property {Array.<com.cw.chess2.platform.IDragonTigerLevelDesc>|null} [dragontiger_levels] GameKindResponse dragontiger_levels
                     * @property {Array.<com.cw.chess2.platform.IBlackredLevelDesc>|null} [blackred_levels] GameKindResponse blackred_levels
                     * @property {Array.<com.cw.chess2.platform.IHorseracingDesc>|null} [horseracing_levels] GameKindResponse horseracing_levels
                     * @property {Array.<com.cw.chess2.platform.IJMLevelDesc>|null} [jm_levels] GameKindResponse jm_levels
                     * @property {Array.<com.cw.chess2.platform.IBaccaratLevelDesc>|null} [baccarat_levels] GameKindResponse baccarat_levels
                     */

                    /**
                     * Constructs a new GameKindResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a GameKindResponse.
                     * @implements IGameKindResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.IGameKindResponse=} [properties] Properties to set
                     */
                    function GameKindResponse(properties) {
                        this.game_kind = [];
                        this.rummy_levels = [];
                        this.teepatti_levels = [];
                        this.ab_levels = [];
                        this.sevenupdown_levels = [];
                        this.rapidteenpatti_levels = [];
                        this.dragontiger_levels = [];
                        this.blackred_levels = [];
                        this.horseracing_levels = [];
                        this.jm_levels = [];
                        this.baccarat_levels = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GameKindResponse game_kind.
                     * @member {Array.<com.cw.chess2.platform.GameKind>} game_kind
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.game_kind = $util.emptyArray;

                    /**
                     * GameKindResponse rummy_levels.
                     * @member {Array.<com.cw.chess2.platform.IRummyLevelDesc>} rummy_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.rummy_levels = $util.emptyArray;

                    /**
                     * GameKindResponse teepatti_levels.
                     * @member {Array.<com.cw.chess2.platform.ITeepattiLevelDesc>} teepatti_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.teepatti_levels = $util.emptyArray;

                    /**
                     * GameKindResponse ab_levels.
                     * @member {Array.<com.cw.chess2.platform.IABLevelDesc>} ab_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.ab_levels = $util.emptyArray;

                    /**
                     * GameKindResponse sevenupdown_levels.
                     * @member {Array.<com.cw.chess2.platform.ISevenUpdownLevelDesc>} sevenupdown_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.sevenupdown_levels = $util.emptyArray;

                    /**
                     * GameKindResponse rapidteenpatti_levels.
                     * @member {Array.<com.cw.chess2.platform.IRapidTeenpattiLevelDesc>} rapidteenpatti_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.rapidteenpatti_levels = $util.emptyArray;

                    /**
                     * GameKindResponse dragontiger_levels.
                     * @member {Array.<com.cw.chess2.platform.IDragonTigerLevelDesc>} dragontiger_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.dragontiger_levels = $util.emptyArray;

                    /**
                     * GameKindResponse blackred_levels.
                     * @member {Array.<com.cw.chess2.platform.IBlackredLevelDesc>} blackred_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.blackred_levels = $util.emptyArray;

                    /**
                     * GameKindResponse horseracing_levels.
                     * @member {Array.<com.cw.chess2.platform.IHorseracingDesc>} horseracing_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.horseracing_levels = $util.emptyArray;

                    /**
                     * GameKindResponse jm_levels.
                     * @member {Array.<com.cw.chess2.platform.IJMLevelDesc>} jm_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.jm_levels = $util.emptyArray;

                    /**
                     * GameKindResponse baccarat_levels.
                     * @member {Array.<com.cw.chess2.platform.IBaccaratLevelDesc>} baccarat_levels
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     */
                    GameKindResponse.prototype.baccarat_levels = $util.emptyArray;

                    /**
                     * Creates a new GameKindResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.GameKindResponse} GameKindResponse instance
                     */
                    GameKindResponse.create = function create(properties) {
                        return new GameKindResponse(properties);
                    };

                    /**
                     * Encodes the specified GameKindResponse message. Does not implicitly {@link com.cw.chess2.platform.GameKindResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindResponse} message GameKindResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameKindResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_kind != null && message.game_kind.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.game_kind.length; ++i)
                                writer.int32(message.game_kind[i]);
                            writer.ldelim();
                        }
                        if (message.rummy_levels != null && message.rummy_levels.length)
                            for (var i = 0; i < message.rummy_levels.length; ++i)
                                $root.com.cw.chess2.platform.RummyLevelDesc.encode(message.rummy_levels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.teepatti_levels != null && message.teepatti_levels.length)
                            for (var i = 0; i < message.teepatti_levels.length; ++i)
                                $root.com.cw.chess2.platform.TeepattiLevelDesc.encode(message.teepatti_levels[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.ab_levels != null && message.ab_levels.length)
                            for (var i = 0; i < message.ab_levels.length; ++i)
                                $root.com.cw.chess2.platform.ABLevelDesc.encode(message.ab_levels[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.sevenupdown_levels != null && message.sevenupdown_levels.length)
                            for (var i = 0; i < message.sevenupdown_levels.length; ++i)
                                $root.com.cw.chess2.platform.SevenUpdownLevelDesc.encode(message.sevenupdown_levels[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.rapidteenpatti_levels != null && message.rapidteenpatti_levels.length)
                            for (var i = 0; i < message.rapidteenpatti_levels.length; ++i)
                                $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc.encode(message.rapidteenpatti_levels[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.dragontiger_levels != null && message.dragontiger_levels.length)
                            for (var i = 0; i < message.dragontiger_levels.length; ++i)
                                $root.com.cw.chess2.platform.DragonTigerLevelDesc.encode(message.dragontiger_levels[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.blackred_levels != null && message.blackred_levels.length)
                            for (var i = 0; i < message.blackred_levels.length; ++i)
                                $root.com.cw.chess2.platform.BlackredLevelDesc.encode(message.blackred_levels[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.horseracing_levels != null && message.horseracing_levels.length)
                            for (var i = 0; i < message.horseracing_levels.length; ++i)
                                $root.com.cw.chess2.platform.HorseracingDesc.encode(message.horseracing_levels[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.jm_levels != null && message.jm_levels.length)
                            for (var i = 0; i < message.jm_levels.length; ++i)
                                $root.com.cw.chess2.platform.JMLevelDesc.encode(message.jm_levels[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.baccarat_levels != null && message.baccarat_levels.length)
                            for (var i = 0; i < message.baccarat_levels.length; ++i)
                                $root.com.cw.chess2.platform.BaccaratLevelDesc.encode(message.baccarat_levels[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GameKindResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.GameKindResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {com.cw.chess2.platform.IGameKindResponse} message GameKindResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameKindResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GameKindResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.GameKindResponse} GameKindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameKindResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.GameKindResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.game_kind && message.game_kind.length))
                                    message.game_kind = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.game_kind.push(reader.int32());
                                } else
                                    message.game_kind.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.rummy_levels && message.rummy_levels.length))
                                    message.rummy_levels = [];
                                message.rummy_levels.push($root.com.cw.chess2.platform.RummyLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                if (!(message.teepatti_levels && message.teepatti_levels.length))
                                    message.teepatti_levels = [];
                                message.teepatti_levels.push($root.com.cw.chess2.platform.TeepattiLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                if (!(message.ab_levels && message.ab_levels.length))
                                    message.ab_levels = [];
                                message.ab_levels.push($root.com.cw.chess2.platform.ABLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.sevenupdown_levels && message.sevenupdown_levels.length))
                                    message.sevenupdown_levels = [];
                                message.sevenupdown_levels.push($root.com.cw.chess2.platform.SevenUpdownLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                if (!(message.rapidteenpatti_levels && message.rapidteenpatti_levels.length))
                                    message.rapidteenpatti_levels = [];
                                message.rapidteenpatti_levels.push($root.com.cw.chess2.platform.RapidTeenpattiLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 7:
                                if (!(message.dragontiger_levels && message.dragontiger_levels.length))
                                    message.dragontiger_levels = [];
                                message.dragontiger_levels.push($root.com.cw.chess2.platform.DragonTigerLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 8:
                                if (!(message.blackred_levels && message.blackred_levels.length))
                                    message.blackred_levels = [];
                                message.blackred_levels.push($root.com.cw.chess2.platform.BlackredLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 9:
                                if (!(message.horseracing_levels && message.horseracing_levels.length))
                                    message.horseracing_levels = [];
                                message.horseracing_levels.push($root.com.cw.chess2.platform.HorseracingDesc.decode(reader, reader.uint32()));
                                break;
                            case 10:
                                if (!(message.jm_levels && message.jm_levels.length))
                                    message.jm_levels = [];
                                message.jm_levels.push($root.com.cw.chess2.platform.JMLevelDesc.decode(reader, reader.uint32()));
                                break;
                            case 11:
                                if (!(message.baccarat_levels && message.baccarat_levels.length))
                                    message.baccarat_levels = [];
                                message.baccarat_levels.push($root.com.cw.chess2.platform.BaccaratLevelDesc.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GameKindResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.GameKindResponse} GameKindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameKindResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameKindResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameKindResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_kind != null && message.hasOwnProperty("game_kind")) {
                            if (!Array.isArray(message.game_kind))
                                return "game_kind: array expected";
                            for (var i = 0; i < message.game_kind.length; ++i)
                                switch (message.game_kind[i]) {
                                default:
                                    return "game_kind: enum value[] expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                case 16:
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                    break;
                                }
                        }
                        if (message.rummy_levels != null && message.hasOwnProperty("rummy_levels")) {
                            if (!Array.isArray(message.rummy_levels))
                                return "rummy_levels: array expected";
                            for (var i = 0; i < message.rummy_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.RummyLevelDesc.verify(message.rummy_levels[i]);
                                if (error)
                                    return "rummy_levels." + error;
                            }
                        }
                        if (message.teepatti_levels != null && message.hasOwnProperty("teepatti_levels")) {
                            if (!Array.isArray(message.teepatti_levels))
                                return "teepatti_levels: array expected";
                            for (var i = 0; i < message.teepatti_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.TeepattiLevelDesc.verify(message.teepatti_levels[i]);
                                if (error)
                                    return "teepatti_levels." + error;
                            }
                        }
                        if (message.ab_levels != null && message.hasOwnProperty("ab_levels")) {
                            if (!Array.isArray(message.ab_levels))
                                return "ab_levels: array expected";
                            for (var i = 0; i < message.ab_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.ABLevelDesc.verify(message.ab_levels[i]);
                                if (error)
                                    return "ab_levels." + error;
                            }
                        }
                        if (message.sevenupdown_levels != null && message.hasOwnProperty("sevenupdown_levels")) {
                            if (!Array.isArray(message.sevenupdown_levels))
                                return "sevenupdown_levels: array expected";
                            for (var i = 0; i < message.sevenupdown_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.SevenUpdownLevelDesc.verify(message.sevenupdown_levels[i]);
                                if (error)
                                    return "sevenupdown_levels." + error;
                            }
                        }
                        if (message.rapidteenpatti_levels != null && message.hasOwnProperty("rapidteenpatti_levels")) {
                            if (!Array.isArray(message.rapidteenpatti_levels))
                                return "rapidteenpatti_levels: array expected";
                            for (var i = 0; i < message.rapidteenpatti_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc.verify(message.rapidteenpatti_levels[i]);
                                if (error)
                                    return "rapidteenpatti_levels." + error;
                            }
                        }
                        if (message.dragontiger_levels != null && message.hasOwnProperty("dragontiger_levels")) {
                            if (!Array.isArray(message.dragontiger_levels))
                                return "dragontiger_levels: array expected";
                            for (var i = 0; i < message.dragontiger_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.DragonTigerLevelDesc.verify(message.dragontiger_levels[i]);
                                if (error)
                                    return "dragontiger_levels." + error;
                            }
                        }
                        if (message.blackred_levels != null && message.hasOwnProperty("blackred_levels")) {
                            if (!Array.isArray(message.blackred_levels))
                                return "blackred_levels: array expected";
                            for (var i = 0; i < message.blackred_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.BlackredLevelDesc.verify(message.blackred_levels[i]);
                                if (error)
                                    return "blackred_levels." + error;
                            }
                        }
                        if (message.horseracing_levels != null && message.hasOwnProperty("horseracing_levels")) {
                            if (!Array.isArray(message.horseracing_levels))
                                return "horseracing_levels: array expected";
                            for (var i = 0; i < message.horseracing_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.HorseracingDesc.verify(message.horseracing_levels[i]);
                                if (error)
                                    return "horseracing_levels." + error;
                            }
                        }
                        if (message.jm_levels != null && message.hasOwnProperty("jm_levels")) {
                            if (!Array.isArray(message.jm_levels))
                                return "jm_levels: array expected";
                            for (var i = 0; i < message.jm_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.JMLevelDesc.verify(message.jm_levels[i]);
                                if (error)
                                    return "jm_levels." + error;
                            }
                        }
                        if (message.baccarat_levels != null && message.hasOwnProperty("baccarat_levels")) {
                            if (!Array.isArray(message.baccarat_levels))
                                return "baccarat_levels: array expected";
                            for (var i = 0; i < message.baccarat_levels.length; ++i) {
                                var error = $root.com.cw.chess2.platform.BaccaratLevelDesc.verify(message.baccarat_levels[i]);
                                if (error)
                                    return "baccarat_levels." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GameKindResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.GameKindResponse} GameKindResponse
                     */
                    GameKindResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.GameKindResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.GameKindResponse();
                        if (object.game_kind) {
                            if (!Array.isArray(object.game_kind))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.game_kind: array expected");
                            message.game_kind = [];
                            for (var i = 0; i < object.game_kind.length; ++i)
                                switch (object.game_kind[i]) {
                                default:
                                case "INVALID":
                                case 0:
                                    message.game_kind[i] = 0;
                                    break;
                                case "GAME_KIND_Rummy":
                                case 1:
                                    message.game_kind[i] = 1;
                                    break;
                                case "GAME_KIND_Rummy_pool":
                                case 2:
                                    message.game_kind[i] = 2;
                                    break;
                                case "GAME_KIND_Rummy_10":
                                case 3:
                                    message.game_kind[i] = 3;
                                    break;
                                case "GAME_KIND_TEEPATTI":
                                case 4:
                                    message.game_kind[i] = 4;
                                    break;
                                case "GAME_KIND_AB":
                                case 5:
                                    message.game_kind[i] = 5;
                                    break;
                                case "GAME_KIND_SevenUD":
                                case 6:
                                    message.game_kind[i] = 6;
                                    break;
                                case "GAME_KIND_RapidTeenaptti":
                                case 7:
                                    message.game_kind[i] = 7;
                                    break;
                                case "GAME_KIND_DragonTiger":
                                case 8:
                                    message.game_kind[i] = 8;
                                    break;
                                case "GAME_KIND_BlackRed":
                                case 9:
                                    message.game_kind[i] = 9;
                                    break;
                                case "GAME_KIND_HorseRacing":
                                case 10:
                                    message.game_kind[i] = 10;
                                    break;
                                case "GAME_KIND_JM":
                                case 11:
                                    message.game_kind[i] = 11;
                                    break;
                                case "GAME_KIND_BACCARAT":
                                case 12:
                                    message.game_kind[i] = 12;
                                    break;
                                case "GAME_KIND_JokerTeenpatti":
                                case 13:
                                    message.game_kind[i] = 13;
                                    break;
                                case "GAME_KIND_AKTeenpatti":
                                case 14:
                                    message.game_kind[i] = 14;
                                    break;
                                case "GAME_KIND_Fruit":
                                case 15:
                                    message.game_kind[i] = 15;
                                    break;
                                case "GAME_KIND_Car":
                                case 16:
                                    message.game_kind[i] = 16;
                                    break;
                                case "GAME_KIND_FT":
                                case 20:
                                    message.game_kind[i] = 20;
                                    break;
                                case "GAME_KIND_LUDO_MASTER":
                                case 21:
                                    message.game_kind[i] = 21;
                                    break;
                                case "GAME_KIND_LUDO_CLASSIC":
                                case 22:
                                    message.game_kind[i] = 22;
                                    break;
                                case "GAME_KIND_LUDO_QUICK":
                                case 23:
                                    message.game_kind[i] = 23;
                                    break;
                                case "GAME_KIND_SLOT_CHRISTMAS":
                                case 24:
                                    message.game_kind[i] = 24;
                                    break;
                                }
                        }
                        if (object.rummy_levels) {
                            if (!Array.isArray(object.rummy_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.rummy_levels: array expected");
                            message.rummy_levels = [];
                            for (var i = 0; i < object.rummy_levels.length; ++i) {
                                if (typeof object.rummy_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.rummy_levels: object expected");
                                message.rummy_levels[i] = $root.com.cw.chess2.platform.RummyLevelDesc.fromObject(object.rummy_levels[i]);
                            }
                        }
                        if (object.teepatti_levels) {
                            if (!Array.isArray(object.teepatti_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.teepatti_levels: array expected");
                            message.teepatti_levels = [];
                            for (var i = 0; i < object.teepatti_levels.length; ++i) {
                                if (typeof object.teepatti_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.teepatti_levels: object expected");
                                message.teepatti_levels[i] = $root.com.cw.chess2.platform.TeepattiLevelDesc.fromObject(object.teepatti_levels[i]);
                            }
                        }
                        if (object.ab_levels) {
                            if (!Array.isArray(object.ab_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.ab_levels: array expected");
                            message.ab_levels = [];
                            for (var i = 0; i < object.ab_levels.length; ++i) {
                                if (typeof object.ab_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.ab_levels: object expected");
                                message.ab_levels[i] = $root.com.cw.chess2.platform.ABLevelDesc.fromObject(object.ab_levels[i]);
                            }
                        }
                        if (object.sevenupdown_levels) {
                            if (!Array.isArray(object.sevenupdown_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.sevenupdown_levels: array expected");
                            message.sevenupdown_levels = [];
                            for (var i = 0; i < object.sevenupdown_levels.length; ++i) {
                                if (typeof object.sevenupdown_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.sevenupdown_levels: object expected");
                                message.sevenupdown_levels[i] = $root.com.cw.chess2.platform.SevenUpdownLevelDesc.fromObject(object.sevenupdown_levels[i]);
                            }
                        }
                        if (object.rapidteenpatti_levels) {
                            if (!Array.isArray(object.rapidteenpatti_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.rapidteenpatti_levels: array expected");
                            message.rapidteenpatti_levels = [];
                            for (var i = 0; i < object.rapidteenpatti_levels.length; ++i) {
                                if (typeof object.rapidteenpatti_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.rapidteenpatti_levels: object expected");
                                message.rapidteenpatti_levels[i] = $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc.fromObject(object.rapidteenpatti_levels[i]);
                            }
                        }
                        if (object.dragontiger_levels) {
                            if (!Array.isArray(object.dragontiger_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.dragontiger_levels: array expected");
                            message.dragontiger_levels = [];
                            for (var i = 0; i < object.dragontiger_levels.length; ++i) {
                                if (typeof object.dragontiger_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.dragontiger_levels: object expected");
                                message.dragontiger_levels[i] = $root.com.cw.chess2.platform.DragonTigerLevelDesc.fromObject(object.dragontiger_levels[i]);
                            }
                        }
                        if (object.blackred_levels) {
                            if (!Array.isArray(object.blackred_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.blackred_levels: array expected");
                            message.blackred_levels = [];
                            for (var i = 0; i < object.blackred_levels.length; ++i) {
                                if (typeof object.blackred_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.blackred_levels: object expected");
                                message.blackred_levels[i] = $root.com.cw.chess2.platform.BlackredLevelDesc.fromObject(object.blackred_levels[i]);
                            }
                        }
                        if (object.horseracing_levels) {
                            if (!Array.isArray(object.horseracing_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.horseracing_levels: array expected");
                            message.horseracing_levels = [];
                            for (var i = 0; i < object.horseracing_levels.length; ++i) {
                                if (typeof object.horseracing_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.horseracing_levels: object expected");
                                message.horseracing_levels[i] = $root.com.cw.chess2.platform.HorseracingDesc.fromObject(object.horseracing_levels[i]);
                            }
                        }
                        if (object.jm_levels) {
                            if (!Array.isArray(object.jm_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.jm_levels: array expected");
                            message.jm_levels = [];
                            for (var i = 0; i < object.jm_levels.length; ++i) {
                                if (typeof object.jm_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.jm_levels: object expected");
                                message.jm_levels[i] = $root.com.cw.chess2.platform.JMLevelDesc.fromObject(object.jm_levels[i]);
                            }
                        }
                        if (object.baccarat_levels) {
                            if (!Array.isArray(object.baccarat_levels))
                                throw TypeError(".com.cw.chess2.platform.GameKindResponse.baccarat_levels: array expected");
                            message.baccarat_levels = [];
                            for (var i = 0; i < object.baccarat_levels.length; ++i) {
                                if (typeof object.baccarat_levels[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.GameKindResponse.baccarat_levels: object expected");
                                message.baccarat_levels[i] = $root.com.cw.chess2.platform.BaccaratLevelDesc.fromObject(object.baccarat_levels[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameKindResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @static
                     * @param {com.cw.chess2.platform.GameKindResponse} message GameKindResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameKindResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.game_kind = [];
                            object.rummy_levels = [];
                            object.teepatti_levels = [];
                            object.ab_levels = [];
                            object.sevenupdown_levels = [];
                            object.rapidteenpatti_levels = [];
                            object.dragontiger_levels = [];
                            object.blackred_levels = [];
                            object.horseracing_levels = [];
                            object.jm_levels = [];
                            object.baccarat_levels = [];
                        }
                        if (message.game_kind && message.game_kind.length) {
                            object.game_kind = [];
                            for (var j = 0; j < message.game_kind.length; ++j)
                                object.game_kind[j] = options.enums === String ? $root.com.cw.chess2.platform.GameKind[message.game_kind[j]] : message.game_kind[j];
                        }
                        if (message.rummy_levels && message.rummy_levels.length) {
                            object.rummy_levels = [];
                            for (var j = 0; j < message.rummy_levels.length; ++j)
                                object.rummy_levels[j] = $root.com.cw.chess2.platform.RummyLevelDesc.toObject(message.rummy_levels[j], options);
                        }
                        if (message.teepatti_levels && message.teepatti_levels.length) {
                            object.teepatti_levels = [];
                            for (var j = 0; j < message.teepatti_levels.length; ++j)
                                object.teepatti_levels[j] = $root.com.cw.chess2.platform.TeepattiLevelDesc.toObject(message.teepatti_levels[j], options);
                        }
                        if (message.ab_levels && message.ab_levels.length) {
                            object.ab_levels = [];
                            for (var j = 0; j < message.ab_levels.length; ++j)
                                object.ab_levels[j] = $root.com.cw.chess2.platform.ABLevelDesc.toObject(message.ab_levels[j], options);
                        }
                        if (message.sevenupdown_levels && message.sevenupdown_levels.length) {
                            object.sevenupdown_levels = [];
                            for (var j = 0; j < message.sevenupdown_levels.length; ++j)
                                object.sevenupdown_levels[j] = $root.com.cw.chess2.platform.SevenUpdownLevelDesc.toObject(message.sevenupdown_levels[j], options);
                        }
                        if (message.rapidteenpatti_levels && message.rapidteenpatti_levels.length) {
                            object.rapidteenpatti_levels = [];
                            for (var j = 0; j < message.rapidteenpatti_levels.length; ++j)
                                object.rapidteenpatti_levels[j] = $root.com.cw.chess2.platform.RapidTeenpattiLevelDesc.toObject(message.rapidteenpatti_levels[j], options);
                        }
                        if (message.dragontiger_levels && message.dragontiger_levels.length) {
                            object.dragontiger_levels = [];
                            for (var j = 0; j < message.dragontiger_levels.length; ++j)
                                object.dragontiger_levels[j] = $root.com.cw.chess2.platform.DragonTigerLevelDesc.toObject(message.dragontiger_levels[j], options);
                        }
                        if (message.blackred_levels && message.blackred_levels.length) {
                            object.blackred_levels = [];
                            for (var j = 0; j < message.blackred_levels.length; ++j)
                                object.blackred_levels[j] = $root.com.cw.chess2.platform.BlackredLevelDesc.toObject(message.blackred_levels[j], options);
                        }
                        if (message.horseracing_levels && message.horseracing_levels.length) {
                            object.horseracing_levels = [];
                            for (var j = 0; j < message.horseracing_levels.length; ++j)
                                object.horseracing_levels[j] = $root.com.cw.chess2.platform.HorseracingDesc.toObject(message.horseracing_levels[j], options);
                        }
                        if (message.jm_levels && message.jm_levels.length) {
                            object.jm_levels = [];
                            for (var j = 0; j < message.jm_levels.length; ++j)
                                object.jm_levels[j] = $root.com.cw.chess2.platform.JMLevelDesc.toObject(message.jm_levels[j], options);
                        }
                        if (message.baccarat_levels && message.baccarat_levels.length) {
                            object.baccarat_levels = [];
                            for (var j = 0; j < message.baccarat_levels.length; ++j)
                                object.baccarat_levels[j] = $root.com.cw.chess2.platform.BaccaratLevelDesc.toObject(message.baccarat_levels[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GameKindResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.GameKindResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameKindResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GameKindResponse;
                })();

                platform.MatchRequest = (function() {

                    /**
                     * Properties of a MatchRequest.
                     * @memberof com.cw.chess2.platform
                     * @interface IMatchRequest
                     * @property {number|null} [action] MatchRequest action
                     * @property {com.cw.chess2.platform.GameKind|null} [game_kind] MatchRequest game_kind
                     * @property {number|null} [game_level] MatchRequest game_level
                     * @property {string|null} [uuid] MatchRequest uuid
                     * @property {number|null} [version] MatchRequest version
                     * @property {number|null} [channel] MatchRequest channel
                     */

                    /**
                     * Constructs a new MatchRequest.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MatchRequest.
                     * @implements IMatchRequest
                     * @constructor
                     * @param {com.cw.chess2.platform.IMatchRequest=} [properties] Properties to set
                     */
                    function MatchRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MatchRequest action.
                     * @member {number} action
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.action = 0;

                    /**
                     * MatchRequest game_kind.
                     * @member {com.cw.chess2.platform.GameKind} game_kind
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.game_kind = 0;

                    /**
                     * MatchRequest game_level.
                     * @member {number} game_level
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.game_level = 0;

                    /**
                     * MatchRequest uuid.
                     * @member {string} uuid
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.uuid = "";

                    /**
                     * MatchRequest version.
                     * @member {number} version
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.version = 0;

                    /**
                     * MatchRequest channel.
                     * @member {number} channel
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     */
                    MatchRequest.prototype.channel = 0;

                    /**
                     * Creates a new MatchRequest instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {com.cw.chess2.platform.IMatchRequest=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MatchRequest} MatchRequest instance
                     */
                    MatchRequest.create = function create(properties) {
                        return new MatchRequest(properties);
                    };

                    /**
                     * Encodes the specified MatchRequest message. Does not implicitly {@link com.cw.chess2.platform.MatchRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {com.cw.chess2.platform.IMatchRequest} message MatchRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.action);
                        if (message.game_kind != null && Object.hasOwnProperty.call(message, "game_kind"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_kind);
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.game_level);
                        if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.uuid);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.version);
                        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.channel);
                        return writer;
                    };

                    /**
                     * Encodes the specified MatchRequest message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MatchRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {com.cw.chess2.platform.IMatchRequest} message MatchRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MatchRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MatchRequest} MatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MatchRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.action = reader.uint32();
                                break;
                            case 2:
                                message.game_kind = reader.int32();
                                break;
                            case 3:
                                message.game_level = reader.uint32();
                                break;
                            case 4:
                                message.uuid = reader.string();
                                break;
                            case 5:
                                message.version = reader.uint32();
                                break;
                            case 6:
                                message.channel = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MatchRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MatchRequest} MatchRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MatchRequest message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MatchRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.action != null && message.hasOwnProperty("action"))
                            if (!$util.isInteger(message.action))
                                return "action: integer expected";
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            switch (message.game_kind) {
                            default:
                                return "game_kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                                break;
                            }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            if (!$util.isInteger(message.game_level))
                                return "game_level: integer expected";
                        if (message.uuid != null && message.hasOwnProperty("uuid"))
                            if (!$util.isString(message.uuid))
                                return "uuid: string expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version))
                                return "version: integer expected";
                        if (message.channel != null && message.hasOwnProperty("channel"))
                            if (!$util.isInteger(message.channel))
                                return "channel: integer expected";
                        return null;
                    };

                    /**
                     * Creates a MatchRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MatchRequest} MatchRequest
                     */
                    MatchRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MatchRequest)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MatchRequest();
                        if (object.action != null)
                            message.action = object.action >>> 0;
                        switch (object.game_kind) {
                        case "INVALID":
                        case 0:
                            message.game_kind = 0;
                            break;
                        case "GAME_KIND_Rummy":
                        case 1:
                            message.game_kind = 1;
                            break;
                        case "GAME_KIND_Rummy_pool":
                        case 2:
                            message.game_kind = 2;
                            break;
                        case "GAME_KIND_Rummy_10":
                        case 3:
                            message.game_kind = 3;
                            break;
                        case "GAME_KIND_TEEPATTI":
                        case 4:
                            message.game_kind = 4;
                            break;
                        case "GAME_KIND_AB":
                        case 5:
                            message.game_kind = 5;
                            break;
                        case "GAME_KIND_SevenUD":
                        case 6:
                            message.game_kind = 6;
                            break;
                        case "GAME_KIND_RapidTeenaptti":
                        case 7:
                            message.game_kind = 7;
                            break;
                        case "GAME_KIND_DragonTiger":
                        case 8:
                            message.game_kind = 8;
                            break;
                        case "GAME_KIND_BlackRed":
                        case 9:
                            message.game_kind = 9;
                            break;
                        case "GAME_KIND_HorseRacing":
                        case 10:
                            message.game_kind = 10;
                            break;
                        case "GAME_KIND_JM":
                        case 11:
                            message.game_kind = 11;
                            break;
                        case "GAME_KIND_BACCARAT":
                        case 12:
                            message.game_kind = 12;
                            break;
                        case "GAME_KIND_JokerTeenpatti":
                        case 13:
                            message.game_kind = 13;
                            break;
                        case "GAME_KIND_AKTeenpatti":
                        case 14:
                            message.game_kind = 14;
                            break;
                        case "GAME_KIND_Fruit":
                        case 15:
                            message.game_kind = 15;
                            break;
                        case "GAME_KIND_Car":
                        case 16:
                            message.game_kind = 16;
                            break;
                        case "GAME_KIND_FT":
                        case 20:
                            message.game_kind = 20;
                            break;
                        case "GAME_KIND_LUDO_MASTER":
                        case 21:
                            message.game_kind = 21;
                            break;
                        case "GAME_KIND_LUDO_CLASSIC":
                        case 22:
                            message.game_kind = 22;
                            break;
                        case "GAME_KIND_LUDO_QUICK":
                        case 23:
                            message.game_kind = 23;
                            break;
                        case "GAME_KIND_SLOT_CHRISTMAS":
                        case 24:
                            message.game_kind = 24;
                            break;
                        }
                        if (object.game_level != null)
                            message.game_level = object.game_level >>> 0;
                        if (object.uuid != null)
                            message.uuid = String(object.uuid);
                        if (object.version != null)
                            message.version = object.version >>> 0;
                        if (object.channel != null)
                            message.channel = object.channel >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a MatchRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @static
                     * @param {com.cw.chess2.platform.MatchRequest} message MatchRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MatchRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.action = 0;
                            object.game_kind = options.enums === String ? "INVALID" : 0;
                            object.game_level = 0;
                            object.uuid = "";
                            object.version = 0;
                            object.channel = 0;
                        }
                        if (message.action != null && message.hasOwnProperty("action"))
                            object.action = message.action;
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            object.game_kind = options.enums === String ? $root.com.cw.chess2.platform.GameKind[message.game_kind] : message.game_kind;
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = message.game_level;
                        if (message.uuid != null && message.hasOwnProperty("uuid"))
                            object.uuid = message.uuid;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.channel != null && message.hasOwnProperty("channel"))
                            object.channel = message.channel;
                        return object;
                    };

                    /**
                     * Converts this MatchRequest to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MatchRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MatchRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MatchRequest;
                })();

                platform.MatchResponse = (function() {

                    /**
                     * Properties of a MatchResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface IMatchResponse
                     * @property {number|null} [result] MatchResponse result
                     * @property {number|null} [max_time] MatchResponse max_time
                     * @property {number|null} [average_time] MatchResponse average_time
                     */

                    /**
                     * Constructs a new MatchResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MatchResponse.
                     * @implements IMatchResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.IMatchResponse=} [properties] Properties to set
                     */
                    function MatchResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MatchResponse result.
                     * @member {number} result
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @instance
                     */
                    MatchResponse.prototype.result = 0;

                    /**
                     * MatchResponse max_time.
                     * @member {number} max_time
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @instance
                     */
                    MatchResponse.prototype.max_time = 0;

                    /**
                     * MatchResponse average_time.
                     * @member {number} average_time
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @instance
                     */
                    MatchResponse.prototype.average_time = 0;

                    /**
                     * Creates a new MatchResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MatchResponse} MatchResponse instance
                     */
                    MatchResponse.create = function create(properties) {
                        return new MatchResponse(properties);
                    };

                    /**
                     * Encodes the specified MatchResponse message. Does not implicitly {@link com.cw.chess2.platform.MatchResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchResponse} message MatchResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                        if (message.max_time != null && Object.hasOwnProperty.call(message, "max_time"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.max_time);
                        if (message.average_time != null && Object.hasOwnProperty.call(message, "average_time"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.average_time);
                        return writer;
                    };

                    /**
                     * Encodes the specified MatchResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MatchResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchResponse} message MatchResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MatchResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MatchResponse} MatchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MatchResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.uint32();
                                break;
                            case 2:
                                message.max_time = reader.uint32();
                                break;
                            case 3:
                                message.average_time = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MatchResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MatchResponse} MatchResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MatchResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MatchResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        if (message.max_time != null && message.hasOwnProperty("max_time"))
                            if (!$util.isInteger(message.max_time))
                                return "max_time: integer expected";
                        if (message.average_time != null && message.hasOwnProperty("average_time"))
                            if (!$util.isInteger(message.average_time))
                                return "average_time: integer expected";
                        return null;
                    };

                    /**
                     * Creates a MatchResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MatchResponse} MatchResponse
                     */
                    MatchResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MatchResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MatchResponse();
                        if (object.result != null)
                            message.result = object.result >>> 0;
                        if (object.max_time != null)
                            message.max_time = object.max_time >>> 0;
                        if (object.average_time != null)
                            message.average_time = object.average_time >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a MatchResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @static
                     * @param {com.cw.chess2.platform.MatchResponse} message MatchResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MatchResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = 0;
                            object.max_time = 0;
                            object.average_time = 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        if (message.max_time != null && message.hasOwnProperty("max_time"))
                            object.max_time = message.max_time;
                        if (message.average_time != null && message.hasOwnProperty("average_time"))
                            object.average_time = message.average_time;
                        return object;
                    };

                    /**
                     * Converts this MatchResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MatchResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MatchResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MatchResponse;
                })();

                platform.MatchOKResponse = (function() {

                    /**
                     * Properties of a MatchOKResponse.
                     * @memberof com.cw.chess2.platform
                     * @interface IMatchOKResponse
                     * @property {number|null} [result] MatchOKResponse result
                     * @property {number|null} [game_type] MatchOKResponse game_type
                     * @property {number|null} [table_id] MatchOKResponse table_id
                     * @property {com.cw.chess2.platform.GameKind|null} [game_kind] MatchOKResponse game_kind
                     * @property {number|null} [game_level] MatchOKResponse game_level
                     * @property {number|null} [ProductID] MatchOKResponse ProductID
                     * @property {Array.<com.cw.chess2.platform.ICurrencyPair>|null} [Rewards] MatchOKResponse Rewards
                     */

                    /**
                     * Constructs a new MatchOKResponse.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a MatchOKResponse.
                     * @implements IMatchOKResponse
                     * @constructor
                     * @param {com.cw.chess2.platform.IMatchOKResponse=} [properties] Properties to set
                     */
                    function MatchOKResponse(properties) {
                        this.Rewards = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MatchOKResponse result.
                     * @member {number} result
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.result = 0;

                    /**
                     * MatchOKResponse game_type.
                     * @member {number} game_type
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.game_type = 0;

                    /**
                     * MatchOKResponse table_id.
                     * @member {number} table_id
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.table_id = 0;

                    /**
                     * MatchOKResponse game_kind.
                     * @member {com.cw.chess2.platform.GameKind} game_kind
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.game_kind = 0;

                    /**
                     * MatchOKResponse game_level.
                     * @member {number} game_level
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.game_level = 0;

                    /**
                     * MatchOKResponse ProductID.
                     * @member {number} ProductID
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.ProductID = 0;

                    /**
                     * MatchOKResponse Rewards.
                     * @member {Array.<com.cw.chess2.platform.ICurrencyPair>} Rewards
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     */
                    MatchOKResponse.prototype.Rewards = $util.emptyArray;

                    /**
                     * Creates a new MatchOKResponse instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchOKResponse=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.MatchOKResponse} MatchOKResponse instance
                     */
                    MatchOKResponse.create = function create(properties) {
                        return new MatchOKResponse(properties);
                    };

                    /**
                     * Encodes the specified MatchOKResponse message. Does not implicitly {@link com.cw.chess2.platform.MatchOKResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchOKResponse} message MatchOKResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchOKResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
                        if (message.game_type != null && Object.hasOwnProperty.call(message, "game_type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game_type);
                        if (message.table_id != null && Object.hasOwnProperty.call(message, "table_id"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.table_id);
                        if (message.game_kind != null && Object.hasOwnProperty.call(message, "game_kind"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.game_kind);
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.game_level);
                        if (message.ProductID != null && Object.hasOwnProperty.call(message, "ProductID"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ProductID);
                        if (message.Rewards != null && message.Rewards.length)
                            for (var i = 0; i < message.Rewards.length; ++i)
                                $root.com.cw.chess2.platform.CurrencyPair.encode(message.Rewards[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MatchOKResponse message, length delimited. Does not implicitly {@link com.cw.chess2.platform.MatchOKResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {com.cw.chess2.platform.IMatchOKResponse} message MatchOKResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MatchOKResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MatchOKResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.MatchOKResponse} MatchOKResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchOKResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.MatchOKResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.uint32();
                                break;
                            case 2:
                                message.game_type = reader.uint32();
                                break;
                            case 3:
                                message.table_id = reader.uint32();
                                break;
                            case 4:
                                message.game_kind = reader.int32();
                                break;
                            case 5:
                                message.game_level = reader.uint32();
                                break;
                            case 6:
                                message.ProductID = reader.uint32();
                                break;
                            case 7:
                                if (!(message.Rewards && message.Rewards.length))
                                    message.Rewards = [];
                                message.Rewards.push($root.com.cw.chess2.platform.CurrencyPair.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MatchOKResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.MatchOKResponse} MatchOKResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MatchOKResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MatchOKResponse message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MatchOKResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            if (!$util.isInteger(message.result))
                                return "result: integer expected";
                        if (message.game_type != null && message.hasOwnProperty("game_type"))
                            if (!$util.isInteger(message.game_type))
                                return "game_type: integer expected";
                        if (message.table_id != null && message.hasOwnProperty("table_id"))
                            if (!$util.isInteger(message.table_id))
                                return "table_id: integer expected";
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            switch (message.game_kind) {
                            default:
                                return "game_kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                                break;
                            }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            if (!$util.isInteger(message.game_level))
                                return "game_level: integer expected";
                        if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                            if (!$util.isInteger(message.ProductID))
                                return "ProductID: integer expected";
                        if (message.Rewards != null && message.hasOwnProperty("Rewards")) {
                            if (!Array.isArray(message.Rewards))
                                return "Rewards: array expected";
                            for (var i = 0; i < message.Rewards.length; ++i) {
                                var error = $root.com.cw.chess2.platform.CurrencyPair.verify(message.Rewards[i]);
                                if (error)
                                    return "Rewards." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MatchOKResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.MatchOKResponse} MatchOKResponse
                     */
                    MatchOKResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.MatchOKResponse)
                            return object;
                        var message = new $root.com.cw.chess2.platform.MatchOKResponse();
                        if (object.result != null)
                            message.result = object.result >>> 0;
                        if (object.game_type != null)
                            message.game_type = object.game_type >>> 0;
                        if (object.table_id != null)
                            message.table_id = object.table_id >>> 0;
                        switch (object.game_kind) {
                        case "INVALID":
                        case 0:
                            message.game_kind = 0;
                            break;
                        case "GAME_KIND_Rummy":
                        case 1:
                            message.game_kind = 1;
                            break;
                        case "GAME_KIND_Rummy_pool":
                        case 2:
                            message.game_kind = 2;
                            break;
                        case "GAME_KIND_Rummy_10":
                        case 3:
                            message.game_kind = 3;
                            break;
                        case "GAME_KIND_TEEPATTI":
                        case 4:
                            message.game_kind = 4;
                            break;
                        case "GAME_KIND_AB":
                        case 5:
                            message.game_kind = 5;
                            break;
                        case "GAME_KIND_SevenUD":
                        case 6:
                            message.game_kind = 6;
                            break;
                        case "GAME_KIND_RapidTeenaptti":
                        case 7:
                            message.game_kind = 7;
                            break;
                        case "GAME_KIND_DragonTiger":
                        case 8:
                            message.game_kind = 8;
                            break;
                        case "GAME_KIND_BlackRed":
                        case 9:
                            message.game_kind = 9;
                            break;
                        case "GAME_KIND_HorseRacing":
                        case 10:
                            message.game_kind = 10;
                            break;
                        case "GAME_KIND_JM":
                        case 11:
                            message.game_kind = 11;
                            break;
                        case "GAME_KIND_BACCARAT":
                        case 12:
                            message.game_kind = 12;
                            break;
                        case "GAME_KIND_JokerTeenpatti":
                        case 13:
                            message.game_kind = 13;
                            break;
                        case "GAME_KIND_AKTeenpatti":
                        case 14:
                            message.game_kind = 14;
                            break;
                        case "GAME_KIND_Fruit":
                        case 15:
                            message.game_kind = 15;
                            break;
                        case "GAME_KIND_Car":
                        case 16:
                            message.game_kind = 16;
                            break;
                        case "GAME_KIND_FT":
                        case 20:
                            message.game_kind = 20;
                            break;
                        case "GAME_KIND_LUDO_MASTER":
                        case 21:
                            message.game_kind = 21;
                            break;
                        case "GAME_KIND_LUDO_CLASSIC":
                        case 22:
                            message.game_kind = 22;
                            break;
                        case "GAME_KIND_LUDO_QUICK":
                        case 23:
                            message.game_kind = 23;
                            break;
                        case "GAME_KIND_SLOT_CHRISTMAS":
                        case 24:
                            message.game_kind = 24;
                            break;
                        }
                        if (object.game_level != null)
                            message.game_level = object.game_level >>> 0;
                        if (object.ProductID != null)
                            message.ProductID = object.ProductID >>> 0;
                        if (object.Rewards) {
                            if (!Array.isArray(object.Rewards))
                                throw TypeError(".com.cw.chess2.platform.MatchOKResponse.Rewards: array expected");
                            message.Rewards = [];
                            for (var i = 0; i < object.Rewards.length; ++i) {
                                if (typeof object.Rewards[i] !== "object")
                                    throw TypeError(".com.cw.chess2.platform.MatchOKResponse.Rewards: object expected");
                                message.Rewards[i] = $root.com.cw.chess2.platform.CurrencyPair.fromObject(object.Rewards[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MatchOKResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @static
                     * @param {com.cw.chess2.platform.MatchOKResponse} message MatchOKResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MatchOKResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.Rewards = [];
                        if (options.defaults) {
                            object.result = 0;
                            object.game_type = 0;
                            object.table_id = 0;
                            object.game_kind = options.enums === String ? "INVALID" : 0;
                            object.game_level = 0;
                            object.ProductID = 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = message.result;
                        if (message.game_type != null && message.hasOwnProperty("game_type"))
                            object.game_type = message.game_type;
                        if (message.table_id != null && message.hasOwnProperty("table_id"))
                            object.table_id = message.table_id;
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            object.game_kind = options.enums === String ? $root.com.cw.chess2.platform.GameKind[message.game_kind] : message.game_kind;
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = message.game_level;
                        if (message.ProductID != null && message.hasOwnProperty("ProductID"))
                            object.ProductID = message.ProductID;
                        if (message.Rewards && message.Rewards.length) {
                            object.Rewards = [];
                            for (var j = 0; j < message.Rewards.length; ++j)
                                object.Rewards[j] = $root.com.cw.chess2.platform.CurrencyPair.toObject(message.Rewards[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this MatchOKResponse to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.MatchOKResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MatchOKResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MatchOKResponse;
                })();

                platform.EnterGameRequest = (function() {

                    /**
                     * Properties of an EnterGameRequest.
                     * @memberof com.cw.chess2.platform
                     * @interface IEnterGameRequest
                     * @property {com.cw.chess2.platform.GameKind|null} [game_kind] EnterGameRequest game_kind
                     * @property {number|null} [game_level] EnterGameRequest game_level
                     * @property {string|null} [uuid] EnterGameRequest uuid
                     * @property {number|null} [version] EnterGameRequest version
                     * @property {number|null} [channel] EnterGameRequest channel
                     */

                    /**
                     * Constructs a new EnterGameRequest.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents an EnterGameRequest.
                     * @implements IEnterGameRequest
                     * @constructor
                     * @param {com.cw.chess2.platform.IEnterGameRequest=} [properties] Properties to set
                     */
                    function EnterGameRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnterGameRequest game_kind.
                     * @member {com.cw.chess2.platform.GameKind} game_kind
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     */
                    EnterGameRequest.prototype.game_kind = 0;

                    /**
                     * EnterGameRequest game_level.
                     * @member {number} game_level
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     */
                    EnterGameRequest.prototype.game_level = 0;

                    /**
                     * EnterGameRequest uuid.
                     * @member {string} uuid
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     */
                    EnterGameRequest.prototype.uuid = "";

                    /**
                     * EnterGameRequest version.
                     * @member {number} version
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     */
                    EnterGameRequest.prototype.version = 0;

                    /**
                     * EnterGameRequest channel.
                     * @member {number} channel
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     */
                    EnterGameRequest.prototype.channel = 0;

                    /**
                     * Creates a new EnterGameRequest instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {com.cw.chess2.platform.IEnterGameRequest=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.EnterGameRequest} EnterGameRequest instance
                     */
                    EnterGameRequest.create = function create(properties) {
                        return new EnterGameRequest(properties);
                    };

                    /**
                     * Encodes the specified EnterGameRequest message. Does not implicitly {@link com.cw.chess2.platform.EnterGameRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {com.cw.chess2.platform.IEnterGameRequest} message EnterGameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnterGameRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.game_kind != null && Object.hasOwnProperty.call(message, "game_kind"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.game_kind);
                        if (message.game_level != null && Object.hasOwnProperty.call(message, "game_level"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game_level);
                        if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.uuid);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.version);
                        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.channel);
                        return writer;
                    };

                    /**
                     * Encodes the specified EnterGameRequest message, length delimited. Does not implicitly {@link com.cw.chess2.platform.EnterGameRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {com.cw.chess2.platform.IEnterGameRequest} message EnterGameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnterGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EnterGameRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.EnterGameRequest} EnterGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnterGameRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.EnterGameRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.game_kind = reader.int32();
                                break;
                            case 2:
                                message.game_level = reader.uint32();
                                break;
                            case 3:
                                message.uuid = reader.string();
                                break;
                            case 4:
                                message.version = reader.uint32();
                                break;
                            case 5:
                                message.channel = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnterGameRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.EnterGameRequest} EnterGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnterGameRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EnterGameRequest message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnterGameRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            switch (message.game_kind) {
                            default:
                                return "game_kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                                break;
                            }
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            if (!$util.isInteger(message.game_level))
                                return "game_level: integer expected";
                        if (message.uuid != null && message.hasOwnProperty("uuid"))
                            if (!$util.isString(message.uuid))
                                return "uuid: string expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version))
                                return "version: integer expected";
                        if (message.channel != null && message.hasOwnProperty("channel"))
                            if (!$util.isInteger(message.channel))
                                return "channel: integer expected";
                        return null;
                    };

                    /**
                     * Creates an EnterGameRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.EnterGameRequest} EnterGameRequest
                     */
                    EnterGameRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.EnterGameRequest)
                            return object;
                        var message = new $root.com.cw.chess2.platform.EnterGameRequest();
                        switch (object.game_kind) {
                        case "INVALID":
                        case 0:
                            message.game_kind = 0;
                            break;
                        case "GAME_KIND_Rummy":
                        case 1:
                            message.game_kind = 1;
                            break;
                        case "GAME_KIND_Rummy_pool":
                        case 2:
                            message.game_kind = 2;
                            break;
                        case "GAME_KIND_Rummy_10":
                        case 3:
                            message.game_kind = 3;
                            break;
                        case "GAME_KIND_TEEPATTI":
                        case 4:
                            message.game_kind = 4;
                            break;
                        case "GAME_KIND_AB":
                        case 5:
                            message.game_kind = 5;
                            break;
                        case "GAME_KIND_SevenUD":
                        case 6:
                            message.game_kind = 6;
                            break;
                        case "GAME_KIND_RapidTeenaptti":
                        case 7:
                            message.game_kind = 7;
                            break;
                        case "GAME_KIND_DragonTiger":
                        case 8:
                            message.game_kind = 8;
                            break;
                        case "GAME_KIND_BlackRed":
                        case 9:
                            message.game_kind = 9;
                            break;
                        case "GAME_KIND_HorseRacing":
                        case 10:
                            message.game_kind = 10;
                            break;
                        case "GAME_KIND_JM":
                        case 11:
                            message.game_kind = 11;
                            break;
                        case "GAME_KIND_BACCARAT":
                        case 12:
                            message.game_kind = 12;
                            break;
                        case "GAME_KIND_JokerTeenpatti":
                        case 13:
                            message.game_kind = 13;
                            break;
                        case "GAME_KIND_AKTeenpatti":
                        case 14:
                            message.game_kind = 14;
                            break;
                        case "GAME_KIND_Fruit":
                        case 15:
                            message.game_kind = 15;
                            break;
                        case "GAME_KIND_Car":
                        case 16:
                            message.game_kind = 16;
                            break;
                        case "GAME_KIND_FT":
                        case 20:
                            message.game_kind = 20;
                            break;
                        case "GAME_KIND_LUDO_MASTER":
                        case 21:
                            message.game_kind = 21;
                            break;
                        case "GAME_KIND_LUDO_CLASSIC":
                        case 22:
                            message.game_kind = 22;
                            break;
                        case "GAME_KIND_LUDO_QUICK":
                        case 23:
                            message.game_kind = 23;
                            break;
                        case "GAME_KIND_SLOT_CHRISTMAS":
                        case 24:
                            message.game_kind = 24;
                            break;
                        }
                        if (object.game_level != null)
                            message.game_level = object.game_level >>> 0;
                        if (object.uuid != null)
                            message.uuid = String(object.uuid);
                        if (object.version != null)
                            message.version = object.version >>> 0;
                        if (object.channel != null)
                            message.channel = object.channel >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnterGameRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @static
                     * @param {com.cw.chess2.platform.EnterGameRequest} message EnterGameRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnterGameRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.game_kind = options.enums === String ? "INVALID" : 0;
                            object.game_level = 0;
                            object.uuid = "";
                            object.version = 0;
                            object.channel = 0;
                        }
                        if (message.game_kind != null && message.hasOwnProperty("game_kind"))
                            object.game_kind = options.enums === String ? $root.com.cw.chess2.platform.GameKind[message.game_kind] : message.game_kind;
                        if (message.game_level != null && message.hasOwnProperty("game_level"))
                            object.game_level = message.game_level;
                        if (message.uuid != null && message.hasOwnProperty("uuid"))
                            object.uuid = message.uuid;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.channel != null && message.hasOwnProperty("channel"))
                            object.channel = message.channel;
                        return object;
                    };

                    /**
                     * Converts this EnterGameRequest to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.EnterGameRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnterGameRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EnterGameRequest;
                })();

                platform.CurrencyPair = (function() {

                    /**
                     * Properties of a CurrencyPair.
                     * @memberof com.cw.chess2.platform
                     * @interface ICurrencyPair
                     * @property {number|null} [Type] CurrencyPair Type
                     * @property {number|Long|null} [Value] CurrencyPair Value
                     */

                    /**
                     * Constructs a new CurrencyPair.
                     * @memberof com.cw.chess2.platform
                     * @classdesc Represents a CurrencyPair.
                     * @implements ICurrencyPair
                     * @constructor
                     * @param {com.cw.chess2.platform.ICurrencyPair=} [properties] Properties to set
                     */
                    function CurrencyPair(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CurrencyPair Type.
                     * @member {number} Type
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @instance
                     */
                    CurrencyPair.prototype.Type = 0;

                    /**
                     * CurrencyPair Value.
                     * @member {number|Long} Value
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @instance
                     */
                    CurrencyPair.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new CurrencyPair instance using the specified properties.
                     * @function create
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {com.cw.chess2.platform.ICurrencyPair=} [properties] Properties to set
                     * @returns {com.cw.chess2.platform.CurrencyPair} CurrencyPair instance
                     */
                    CurrencyPair.create = function create(properties) {
                        return new CurrencyPair(properties);
                    };

                    /**
                     * Encodes the specified CurrencyPair message. Does not implicitly {@link com.cw.chess2.platform.CurrencyPair.verify|verify} messages.
                     * @function encode
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {com.cw.chess2.platform.ICurrencyPair} message CurrencyPair message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CurrencyPair.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                        if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Value);
                        return writer;
                    };

                    /**
                     * Encodes the specified CurrencyPair message, length delimited. Does not implicitly {@link com.cw.chess2.platform.CurrencyPair.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {com.cw.chess2.platform.ICurrencyPair} message CurrencyPair message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CurrencyPair.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CurrencyPair message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.cw.chess2.platform.CurrencyPair} CurrencyPair
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CurrencyPair.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.cw.chess2.platform.CurrencyPair();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Type = reader.int32();
                                break;
                            case 2:
                                message.Value = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CurrencyPair message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.cw.chess2.platform.CurrencyPair} CurrencyPair
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CurrencyPair.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CurrencyPair message.
                     * @function verify
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CurrencyPair.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            if (!$util.isInteger(message.Type))
                                return "Type: integer expected";
                        if (message.Value != null && message.hasOwnProperty("Value"))
                            if (!$util.isInteger(message.Value) && !(message.Value && $util.isInteger(message.Value.low) && $util.isInteger(message.Value.high)))
                                return "Value: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a CurrencyPair message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.cw.chess2.platform.CurrencyPair} CurrencyPair
                     */
                    CurrencyPair.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.cw.chess2.platform.CurrencyPair)
                            return object;
                        var message = new $root.com.cw.chess2.platform.CurrencyPair();
                        if (object.Type != null)
                            message.Type = object.Type | 0;
                        if (object.Value != null)
                            if ($util.Long)
                                (message.Value = $util.Long.fromValue(object.Value)).unsigned = false;
                            else if (typeof object.Value === "string")
                                message.Value = parseInt(object.Value, 10);
                            else if (typeof object.Value === "number")
                                message.Value = object.Value;
                            else if (typeof object.Value === "object")
                                message.Value = new $util.LongBits(object.Value.low >>> 0, object.Value.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a CurrencyPair message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @static
                     * @param {com.cw.chess2.platform.CurrencyPair} message CurrencyPair
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CurrencyPair.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.Type = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.Value = options.longs === String ? "0" : 0;
                        }
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            object.Type = message.Type;
                        if (message.Value != null && message.hasOwnProperty("Value"))
                            if (typeof message.Value === "number")
                                object.Value = options.longs === String ? String(message.Value) : message.Value;
                            else
                                object.Value = options.longs === String ? $util.Long.prototype.toString.call(message.Value) : options.longs === Number ? new $util.LongBits(message.Value.low >>> 0, message.Value.high >>> 0).toNumber() : message.Value;
                        return object;
                    };

                    /**
                     * Converts this CurrencyPair to JSON.
                     * @function toJSON
                     * @memberof com.cw.chess2.platform.CurrencyPair
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CurrencyPair.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CurrencyPair;
                })();

                return platform;
            })();

            return chess2;
        })();

        return cw;
    })();

    return com;
})();

module.exports = $root;
