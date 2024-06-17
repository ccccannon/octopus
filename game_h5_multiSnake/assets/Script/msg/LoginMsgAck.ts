import { Player } from "../domain/Player";
import { SystemConfigPara } from "../domain/SystemConfigPara";
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
/**
 * 登录返回Ack
 *
 * @author LiChong
 * @date 2020年11月19日14:47:03
 */
export class LoginMsgAck extends NetMsgBase {

    /**
     * 玩家信息  父类有这个字段
     */
    public player: Player = null;

    /**
     * 系统参数
     */
    public systemParams = new Array<SystemConfigPara>();
    /**
     * 平台类型
     */
    public platformType: number = 0;


    /**
     * 系统参数版本号
     */
    public systemParamsVersion: string = "";

    /**
     * 服务器ID
     */
    public serverID: number;

    /**
     * 服务器时间
     */
    public serverTime: dcodeIO.Long;

    constructor() {
        super(MsgCmdConstant.MSG_GAME_LOGIN_ACK);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.player = ar.sObject(this.player, Player);
        this.systemParams = ar.sSubObjArray(this.systemParams, SystemConfigPara);
        this.platformType = ar.sInt(this.platformType);
        this.systemParamsVersion = ar.sString(this.systemParamsVersion);
        this.serverID = ar.sInt(this.serverID);
        this.serverTime = ar.sLong(this.serverTime);
    }
}