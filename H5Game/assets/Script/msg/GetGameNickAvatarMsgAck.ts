import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetGameNickAvatarMsgAck extends NetMsgBase {
    private nicks: Array<string>;
    private avatars: Array<string>;

    public constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR_ACK)
        // msgCMD = MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR_ACK; // 0xd10016
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.nicks = ar.sStringArray(this.nicks);
        this.avatars = ar.sStringArray(this.avatars);
    }


}
