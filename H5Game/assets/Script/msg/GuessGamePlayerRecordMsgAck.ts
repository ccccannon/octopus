/**
 
 * @Date: 2023/9/14
 * @Description: 水果机游戏结果返回
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { TableRoundPlayerRecord } from "../domain/TableRoundPlayerRecord";

export class GuessGamePlayerRecordMsgAck extends NetMsgBase {

    private recordList: Array<TableRoundPlayerRecord>;

    private totalPage: number;

    private pageNum: number;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD_ACK);
    }
    // public GuessGamePlayerRecordMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD_ACK;// 0xd10027
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.recordList = ar.sObjArray(this.recordList, TableRoundPlayerRecord);
        this.totalPage = ar.sInt(this.totalPage);
        this.pageNum = ar.sInt(this.pageNum);
    }
}