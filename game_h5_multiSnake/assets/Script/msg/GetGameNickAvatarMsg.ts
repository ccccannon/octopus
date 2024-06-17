import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetGameNickAvatarMsg extends NetMsgBase {

    public gameId: number;

    public limit: number = 100; // 条数 默认 100


    constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR)
        // msgCMD = MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR; // 0xd10015
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.limit = ar.sInt(this.limit);
    }

}
