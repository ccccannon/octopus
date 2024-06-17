/**
 * @Author: Levi
 * @Date: 2023/9/5
 * @Description: 获取桌子小局记录返回
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { TableRoundRecord } from "../domain/TableRoundRecord";

export class GetTableRoundRecordMsgAck extends NetMsgBase {

    private tableRoundRecordList: Array<TableRoundRecord>;

    constructor() {
        super(MsgCmdConstant.MSG_GET_TABLE_ROUND_ACK);
    }

    // public GetTableRoundRecordMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GET_TABLE_ROUND_ACK;// 0xd30007
    // }
    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.tableRoundRecordList = ar.sObjArray(this.tableRoundRecordList, TableRoundRecord);
    }
}
