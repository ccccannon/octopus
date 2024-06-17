import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @author: Levi
 * @date: 2022-09-16
 * @description: 获取个人牌桌记录
 **/
export class GetTablePlayerRecordMsg extends NetMsgBase {

    public gameId: number;
    public pageNum: number = 1;
    public pageSize: number = 10;

    constructor() {
        //msgCMD = MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD; // 0xd30000
        super(MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD);
    }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.pageNum = ar.sInt(this.pageNum);
        this.pageSize = ar.sInt(this.pageSize);
    }

}