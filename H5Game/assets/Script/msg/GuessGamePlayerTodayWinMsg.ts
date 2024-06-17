/**
 * @Date: 2023/9/12
 * @Description:水果机今日赢得金币记录
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGamePlayerTodayWinMsg extends NetMsgBase {

    private gameId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN);
    }

    // public GuessGamePlayerTodayWinMsg() {
    //     msgThreadEnum = MsgThreadEnum.ASYNC_IO;
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN; // 0xd10028
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
    }
}
