
/**
 * 开始游戏协议
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GameTableBeginMsg extends NetMsgBase {

    constructor() {
        super(MsgCmdConstant.MSG_GAME_TABLE_BEGIN);
    }
    
    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
    }


}
