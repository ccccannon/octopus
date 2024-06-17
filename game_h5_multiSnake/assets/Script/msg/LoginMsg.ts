import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class LoginMsg extends NetMsgBase {

    /**
     * 账号index
     */
    public userId: dcodeIO.Long;

    /**
     * 登录平台类型，参考平台枚举
     */
    public platformType: number;
    /**
     * 登录平台的uid，如果是游客登录，则该为机器码
     */
    public platformUid: string = "";
    /**
     * 登录平台的其他参数，用于以后扩展，客户端传JSON  只用于存储
     */
    public platformParams: string = ""

    /**
     * 渠道Id，不同包对应不同的渠道
     */
    public channelId: number;

    /**
     * 大区Id
     */
    public areaId: number;

    /**
     * APK版本号
     */
    public apkVersion: string = "";

    /**
     * 登录设备类型  Android / IOS / WIN / 。。。
     */
    public equipmentType: string = "";

    /**
     * 登录设备对应的其他数据包信息  客户端传JSON  只用于存储
     */
    public equipmentParams: string = "";

    /**
     * 用户名称
     */
    public userName: string = "";

    /**
     * 用户头像信息
     */
    public headImageUrl: string = "";

    /**
     * 用户性别
     */
    public sex: number;

    /**
     * 手机号
     */
    public mobilePhone: string = "";

    /**
     * 客户端Ip地址
     */
    public clientIP: string = "";

    /**
     * 是否为重连
     */
    public reconnect: boolean = false;

    /**
     * 系统参数版本（客户端缓存，首次登录没有），这个字段决定登录的时候服务器需不需要发送一些系统数据
     */
    public systemParamsVersion: string = "";

    /**
     * 玩家密码
     */
    public password: string = "";

    /**
     * 国家码
     */
    public countryCode: string = "";

    /**
     * 机器码
     */
    public machineCode: string = "";

    /**
     * 数数的访客ID
     */
    public sShuDistinctId: string = "";

    /**
     * 推送ID
     */
    public modPushRid: string = "";

    /**
     * 语言
     */
    public language: string = "";

    /**
     * 时区  默认不存在的时区24
     */
    public timeZone: number;

    /**
     * 是否为模拟器登录
     */
    public isEmulatorLogin: boolean = false;

    /**
     * 广告相关字段
     */
    public adId: string = "";
    public adSetId: string = "";
    public campaignId: string = "";
    public mediaSource: string = "";

    /**
     * 邀请码
     */
    public inviteCode: number;

    public gameId: number;


    constructor() {
        super(MsgCmdConstant.MSG_GAME_LOGIN);
    }

    public serialize(ar: ObjectSerializer) {
        // super.serialize(ar);
        // this.playerId = ar.sInt(this.playerId);
        // this.platformType = ar.sInt(this.platformType);
        // this.platformUid = ar.sString(this.platformUid);
        // this.platformParams = ar.sString(this.platformParams);
        // this.channelId = ar.sInt(this.channelId);
        // this.areaId = ar.sInt(this.areaId);
        // this.apkVersion = ar.sString(this.apkVersion);
        // this.equipmentType = ar.sString(this.equipmentType);
        // this.equipmentParams = ar.sString(this.equipmentParams);
        // this.userName = ar.sString(this.userName);
        // this.headImageUrl = ar.sString(this.headImageUrl);
        // this.sex = ar.sInt(this.sex);
        // this.mobilePhone = ar.sString(this.mobilePhone);
        // this.clientIP = ar.sString(this.clientIP);
        // this.reconnect = ar.sBoolean(this.reconnect);
        // this.systemParamsVersion = ar.sString(this.systemParamsVersion);
        // this.password = ar.sString(this.password);
        // this.countryCode = ar.sString(this.countryCode);
        // this.machineCode = ar.sString(this.machineCode);
        // this.sShuDistinctId = ar.sString(this.sShuDistinctId);
        // this.modPushRid = ar.sString(this.modPushRid);
        // this.language = ar.sString(this.language);
        // this.timeZone = ar.sInt(this.timeZone);
        // this.isEmulatorLogin = ar.sBoolean(this.isEmulatorLogin);
        // this.adId = ar.sString(this.adId);
        // this.adSetId = ar.sString(this.adSetId);
        // this.campaignId = ar.sString(this.campaignId);
        // this.mediaSource = ar.sString(this.mediaSource);
        // this.inviteCode = ar.sInt(this.inviteCode);

        super.serialize(ar);
        this.userId = ar.sLong(this.userId); // 用户id
        this.platformType = ar.sInt(this.platformType); // 平台类型 1007
        this.platformUid = ar.sString(this.platformUid); // token
        this.platformParams = ar.sString(this.platformParams);
        this.channelId = ar.sInt(this.channelId);
        this.areaId = ar.sInt(this.areaId);
        this.apkVersion = ar.sString(this.apkVersion);
        this.equipmentType = ar.sString(this.equipmentType);
        this.equipmentParams = ar.sString(this.equipmentParams);
        this.userName = ar.sString(this.userName);
        this.headImageUrl = ar.sString(this.headImageUrl);
        this.sex = ar.sInt(this.sex);
        this.mobilePhone = ar.sString(this.mobilePhone);
        this.clientIP = ar.sString(this.clientIP);
        this.reconnect = ar.sBoolean(this.reconnect);
        this.systemParamsVersion = ar.sString(this.systemParamsVersion);
        this.password = ar.sString(this.password);
        this.countryCode = ar.sString(this.countryCode);
        this.machineCode = ar.sString(this.machineCode);
        this.language = ar.sString(this.language);
        this.timeZone = ar.sInt(this.timeZone);
        this.isEmulatorLogin = ar.sBoolean(this.isEmulatorLogin);
        this.gameId = ar.sInt(this.gameId);
    }
}