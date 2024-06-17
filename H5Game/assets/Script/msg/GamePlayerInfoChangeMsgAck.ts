import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { GamePlayer } from "../domain/GamePlayer";

/**
 * 桌子上的玩家状态改变消息通知
 * @author Levi
 *
 */
export class GamePlayerInfoChangeMsgAck extends NetMsgBase {

    /**
     * 游戏玩家
     */
    private gamePlayer: GamePlayer = null;


    constructor() {
        super(MsgCmdConstant.MSG_GAME_PLAYER_INFO_CHANGE_ACK);
    }

    // public GamePlayerInfoChangeMsgAck() {
    // 	this.msgCMD = MsgCmdConstant.MSG_GAME_PLAYER_INFO_CHANGE_ACK; // 0xd50024
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gamePlayer = ar.sObject(this.gamePlayer, GamePlayer);
    }

}
