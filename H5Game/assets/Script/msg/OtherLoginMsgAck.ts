import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @author Lichong
 * @date 2020年11月9日11:58:12
 * @desc //帐号在其他地方登录
 */
export class OtherLoginMsgAck extends NetMsgBase {
    //登录人的IP
    private  otherIp: string = "";

    constructor(){
        super(MsgCmdConstant.MSG_GAME_OTHER_LOGIN_ACK);
    }

    // public OtherLoginMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GAME_OTHER_LOGIN_ACK; // 0xc30205
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.otherIp = ar.sString(this.otherIp);
    }

}
