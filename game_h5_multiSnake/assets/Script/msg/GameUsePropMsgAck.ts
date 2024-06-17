import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GameUsePropMsgAck extends NetMsgBase {

    /**
     * 1 预览  2 提示  3 存档  4 看广告加金币
     */
    public propType = 0; 
    /**
     * 1 分享  2 广告  3 金币
     */
    public useType = 0; 

    constructor() {
        super(MsgCmdConstant.GAME_USE_PROP_MSG_ACK)
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.propType = ar.sInt(this.propType);
        this.useType = ar.sInt(this.useType);
    }
}