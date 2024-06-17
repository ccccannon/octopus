import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class UpdatePlayerPurseMsg extends NetMsgBase {

    //  更新玩家钱包请求
    // public UpdatePlayerPurseMsg() {
    //     msgCMD = MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE;//0xd49999
    // }

    constructor() {
        super(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
    }
}
