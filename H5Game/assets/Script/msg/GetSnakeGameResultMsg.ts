import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


/**
 * @description: 贪吃蛇游戏结果上报
 **/
export default class GetSnakeGameResultMsg extends NetMsgBase {

    public length: dcodeIO.Long; // 长度

    constructor() {
        // msgThreadEnum = MsgThreadEnum.ASYNC_IO;
        super(MsgCmdConstant.MSG_SNAKE_GAME_RESULT)
        // msgCMD = MsgCmdConstant.MSG_SNAKE_GAME_RESULT; // 0xd10011
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.length = ar.sLong(this.length);
    }
}
