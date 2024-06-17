import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";
import { TableServer } from "./TabelServer";


/**
 * 玩家对象
 *
 * @author LiChong
 * @Date 2020年11月17日11:39:33
 **/
export class Player extends BaseObject {


    /**
     * 平台类型
     */
    public platformType: number;

    /**
     * 渠道id
     */
    public channelId: number;

    /**
     * 玩家唯一索引  默认0 不然序列号会失败
     */
    public playerId: dcodeIO.Long;

    /**
     * 第三方头像路径
     */
    public headImageUrl: string = "";

    /**
     * 玩家游戏中昵称
     **/
    public playerName: string = "";
    /**
     * 头像索引
     **/
    public headImg: number;
    /**
     * 玩家货币0 金币
     */
    public gold: number;

    /**
     * 钻石
     */
    public diamond: number;
    /**
     * 玩家登录IP
     */
    public clientIP: string = "";
    /**
     * 性别(0：未知  1女；2男)
     */
    public sex: number;

    /**
     * 个性签名 PERSONALIZED_SIGNATURE
     */
    public personalizedSignature: string = "";
    /**
     * 分享次数
     */
    public shareCount: number;
    /**
     * 注册时间
     */
    public registerTime: Date;
    /**
     * 最后登录时间
     */
    public lastLoginTime: Date;
    /**
     * 玩家类别，用于后台用户管理
     */
    public playerType: number;
    /**
     * 手机号码
     **/
    public mobilePhone: string = "";
    /**
     * `PROVINCE_ID` int(11) NOT NULL DEFAULT '0' COMMENT '省ID',
     `CITY_ID` int(11) NOT NULL DEFAULT '0' COMMENT '市ID',
     `COUNTY_ID` int(11) NOT NULL DEFAULT '0' COMMENT '区县ID',
     */
    /**
     * 省ID
     */
    public provinceId: number;
    /**
     * 市ID
     */
    public cityId: number;
    /**
     * 区县ID
     */
    public countyId: number;
    /**
     * 玩家所在的逻辑服ID
     */
    public serverId: number;
    /**
     * 邮箱
     */
    public email: string = "";

    /**
     * 机器码
     */
    public machineCode: string = "";
    /**
     * 国家码
     */
    public areaId: number = 0;
    /**
     * 语言
     */
    public language: string = "";

    /**
     * 时区 默认东八区
     */
    public timeZone: number = 0;

    /**
     * 能量
     */
    public energy: number = 0;

    /**
     * 免费提示次数
     */
    public freeTipCount: number = 0;

    /**
     * 能量刷新时间
     */
    public energyRefreshTime: Date;

    /**
     * 关卡Id
     */
    public gameId: number;

    /**
     * 挑战过关次数
     */
    public tzOkCount: number;

    /** 桌子列表 */
    public tableList: Array<TableServer>;

    public serialize(ar: ObjectSerializer) {
        this.playerId = ar.sLong(this.playerId);
        this.playerName = ar.sString(this.playerName);
        this.playerType = ar.sInt(this.playerType);
        this.gold = ar.sInt(this.gold);
        this.diamond = ar.sInt(this.diamond);
        this.sex = ar.sInt(this.sex);
        this.headImageUrl = ar.sString(this.headImageUrl);
        this.mobilePhone = ar.sString(this.mobilePhone);
        this.personalizedSignature = ar.sString(this.personalizedSignature);
        this.clientIP = ar.sString(this.clientIP)
        this.lastLoginTime = ar.sDate(this.lastLoginTime);
        this.channelId = ar.sInt(this.channelId);
        this.serverId = ar.sInt(this.serverId);
        this.email = ar.sString(this.email);
        this.machineCode = ar.sString(this.machineCode);
        this.areaId = ar.sInt(this.areaId);
        // this.countryCode = ar.sString(this.countryCode);
        this.platformType = ar.sInt(this.platformType);
        this.language = ar.sString(this.language);
        this.timeZone = ar.sInt(this.timeZone);
        this.registerTime = ar.sDate(this.registerTime);
        this.tableList = ar.sObjArray(this.tableList, TableServer);

    }

}