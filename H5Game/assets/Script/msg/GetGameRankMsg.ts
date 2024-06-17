import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetGameRankMsg extends NetMsgBase {


    public gameId: number;
    public limit: number; //一次取多少条


    constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_RANK); //0xd30004
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.limit = ar.sInt(this.limit);
    }
}