import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGameStakeMsgAck extends NetMsgBase {

    private itemId: string;
    private betId: number;
    private betValue: dcodeIO.Long; // 押注的值
    private playerId: dcodeIO.Long;
    private playerAvatar: string;


    constructor() {
        super(MsgCmdConstant.MSG_GUESS_STAKE_GAME_ACK);
    }
    // public GuessGameStakeMsgAck() {
    //     msgCMD =MsgCmdConstant.MSG_GUESS_STAKE_GAME_ACK ;// 0xd10022
    // }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.itemId = ar.sString(this.itemId);
        this.betId = ar.sInt(this.betId);
        this.betValue = ar.sLong(this.betValue);
        this.playerId = ar.sLong(this.playerId);
        this.playerAvatar = ar.sString(this.playerAvatar);
    }
}
