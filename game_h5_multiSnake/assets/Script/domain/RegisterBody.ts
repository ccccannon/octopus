export class RegisterBoby {


    /**
    * 账号,邮箱,第三方平台Uid,游客昵称,机器码
    */
    public platformUid: string = "";

    /**
     * 账号index
     */
    public playerId: number;

    /**
     * 机器码
     */
    public machineCode: string = "";

    /**
     * 用户密码
     */
    public password: string = "";

    /**
     * 确认密码
     */
    public confirmPassword: string = "";

    /**
     * 渠道id
     */
    public channelId: number;

    /**
     * 大区id
     */
    public areaId: number;

    /**
     * 平台类型
     */
    public platformType: number;

    /**
     * 服务器id
     */
    public serverId: number;

    /**
     * 登录设备类型  Android / IOS / WIN / 。。。
     */
    public equipmentType: string = "";

    /**
     * 操作 1、登录  2注册
     */
    public operation: number = 1;

    /**
     * 国家码
     */
    public countryCode: string = "";

    /**
     * ip地址
     */
    public clientIP: string = "";

    /**
     * 邮箱
     */
    public email: string = "";

    /**
     * 版本号
     */
    public appVersion: string = "";

    /**
     * 白名单
     */
    public isWhite: boolean;

    /**
     * 是否为系统玩家
     */
    public isSystemPlayer: boolean;

    /**
     * 玩家名称
     */
    public userName:string = "";

    /**
     * 头像
     */
    public headImageUrl:string = "";
}