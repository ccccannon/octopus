import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class SingleGameStatusMsg extends NetMsgBase {

    public userId: dcodeIO.Long;

    public gameId: number;

    // 请求状态 0.游戏开始 1游戏结束 2放弃挑战
    public statusType: number;

    // 关卡
    public gameNo: number;


    constructor() {
        super(MsgCmdConstant.MSG_SINGLE_GAME_STATUS);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.userId = ar.sLong(this.userId);
        this.gameId = ar.sInt(this.gameId);
        this.gameNo = ar.sInt(this.gameNo);
        this.statusType = ar.sInt(this.statusType);
    }
}