import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class SingleGameUsePropMsg extends NetMsgBase {

    // 道具ID类型
    public propId: number;
    // 0 使用  1 购买
    public type: number;

    constructor() {
        super(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.propId = ar.sInt(this.propId);
        this.type = ar.sInt(this.type);
    }


}