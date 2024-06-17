import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGameStakeMsg extends NetMsgBase {

    public itemId: string;

    public betId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_STAKE);
    }
    // public GuessGameStakeMsg() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_STAKE; // 0xd10021
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.itemId = ar.sString(this.itemId);
        this.betId = ar.sInt(this.betId);
    }
}
