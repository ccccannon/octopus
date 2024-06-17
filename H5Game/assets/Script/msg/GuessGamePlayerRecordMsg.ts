/**
 * @Date: 2023/9/14
 * @Description:水果机玩家记录
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGamePlayerRecordMsg extends NetMsgBase {

    public gameId: number;

    public pageSize: number;

    public pageNum: number;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD);
    }

    // public GuessGamePlayerRecordMsg() {
    //     msgThreadEnum = MsgThreadEnum.ASYNC_IO;
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD; // 0xd10026
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.pageSize = ar.sInt(this.pageSize);
        this.pageNum = ar.sInt(this.pageNum);
    }
}
