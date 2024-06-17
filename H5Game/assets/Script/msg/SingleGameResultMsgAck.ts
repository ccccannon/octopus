import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @author:
 * @date:
 * @name:
 */
export class SingleGameResultMsgAck extends NetMsgBase {

    private userId: dcodeIO.Long;
    // 关卡
    private gameNo: number;
    // 游戏通关时间
    private gameTime: dcodeIO.Long;
    // 是否放弃
    private isDismiss: boolean;


    public SingleGameResultMsgAck() {
        this.msgCMD = MsgCmdConstant.MSG_SINGLE_GAME_RESULT_ACK; // 0xd10003
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.userId = ar.sLong(this.userId);
        this.gameNo = ar.sInt(this.gameNo);
        this.gameTime = ar.sLong(this.gameTime);
        this.isDismiss = ar.sBoolean(this.isDismiss);
    }

}
