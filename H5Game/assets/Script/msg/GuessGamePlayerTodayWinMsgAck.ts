/**
 
 * @Date: 2023/9/12
 * @Description: 水果机游戏结果返回
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGamePlayerTodayWinMsgAck extends NetMsgBase {

    private winGold: dcodeIO.Long;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK);
    }

    // public GuessGamePlayerTodayWinMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK;// 0xd10029
    // }

    // @Override
    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.winGold = ar.sLong(this.winGold);
    }
}
