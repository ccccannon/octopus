/**
 * 大区服务器信息
 */
export class AreaServerInfo {

    /**
     * 大区主键
     */
    public areaId: number;

    /**
     * 大区名字
     */
    public areaName: string;

    /**
     * 渠道主键
     */
    public channelId: number;

    /**
     * 服务器ID
     */
    public serverId: number;

    /**
     * 访问IP
     */
    public serverIp: string;

    /**
     * 访问端口
     */
    public serverPort: string;

    /**
     * 服务器类型:1转发服、2.逻辑服、3.负载均衡
     */
    public serverType: number;

    /**
     * 国家
     */
    public country: string;

    /**
     * 维护开始时间
     */
    public startMainTime: Date;

    /**
     * 维护结束时间
     */
    public endMainTime: Date;

    /**
     * 维护状态0=无状态，1=即将维护，2=正在维护
     */
    public mainTainStatus: number;

    /**
     * 是否提审
     */
    public re: boolean;


    public getServerUrl(): string {
        return "ws:// " + this.serverIp + ":" + this.serverPort;
    }
}