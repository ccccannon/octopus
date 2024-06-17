/**
 * @author: Levi
 * @date: 2022-09-16
 * @description: 获取牌桌记录返回
 **/

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { TablePlayerRecord } from "../domain/TablePlayerRecord";

export class GetTablePlayerRecordMsgAck extends NetMsgBase {

    private tablePlayerRecordList: Array<TablePlayerRecord>;

    private pageNum: number;

    private totalPage: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD_ACK);
    }

    // public GetTablePlayerRecordMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD_ACK; // 0xd30001
    // }

    public  serialize(ar:ObjectSerializer ):void {
    super.serialize(ar);
    this.tablePlayerRecordList = ar.sObjArray(this.tablePlayerRecordList, TablePlayerRecord);
    this.pageNum = ar.sInt(this.pageNum);
    this.totalPage = ar.sInt(this.totalPage);
}

}