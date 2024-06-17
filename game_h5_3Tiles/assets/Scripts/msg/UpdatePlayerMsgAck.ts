import { Player } from "../domain/Player";
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * 登录返回Ack
 *
 * @author LiChong
 * @date 2020年11月19日14:47:03
 */
export class UpdatePlayerMsgAck extends NetMsgBase {

    /**
     * 玩家信息  父类有这个字段
     */
    public player: Player = null;

    

    constructor() {
        super(MsgCmdConstant.MSG_GAME_LOGIN_ACK);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.player = ar.sObject(this.player, Player);
    }
}