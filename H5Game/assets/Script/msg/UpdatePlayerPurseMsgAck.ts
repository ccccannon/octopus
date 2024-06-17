/**
 * @Date: 2023/9/5
 * @Description: 更新玩家钱包返回
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class UpdatePlayerPurseMsgAck extends NetMsgBase {

    private goldNum: dcodeIO.Long;


    constructor() {
        super(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE_ACK);
    }
    // public UpdatePlayerPurseMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE_ACK;//0xd50000
    // }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.goldNum = ar.sLong(this.goldNum);
    }
}
