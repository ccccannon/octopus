import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GameUsePropMsg extends NetMsgBase {


    public useType = 0; // 使用类型
    public propType = 0; // 道具类型
    public gameId = 0; // 游戏id
    public gameType = 0; // 游戏类型

    constructor() {
        super(MsgCmdConstant.GAME_USE_PROP_MSG)
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.useType = ar.sInt(this.useType);
        this.propType = ar.sInt(this.propType);
        this.gameId = ar.sInt(this.gameId);
        this.gameType = ar.sInt(this.gameType);
    }
}

export class PropType{
    public readonly SHARE = 1;
    public readonly AD = 2;
    public readonly CONSUME = 3;
    public readonly AD_PROP = 4;
    public readonly SHARE_PROP = 5;
    public readonly AD_GAME = 6;
}