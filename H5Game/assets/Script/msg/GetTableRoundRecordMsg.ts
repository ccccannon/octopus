/**
 * @Author: Levi
 * @Date: 2023/10/26
 * @Description:获取桌子小局记录
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetTableRoundRecordMsg extends NetMsgBase {

    public gameId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_TABLE_ROUND_RECORD);
    }

    // public GetTableRoundRecordMsg() {
    //     msgCMD = MsgCmdConstant.MSG_GET_TABLE_ROUND_RECORD; // 0xd30006
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
    }
}
