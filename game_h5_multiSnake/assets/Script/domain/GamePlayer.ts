import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

/**
 * 游戏中的对象，仅定义玩家在游戏中需要的基础数据
 *
 * @author DerekWu
 */
export class GamePlayer extends BaseObject {


    /**
 *
 */
    private playerId: dcodeIO.Long;


    /**
 * 玩家游戏中昵称
 **/
    private playerName: string = "";


    /**
 * 牌桌编号0开始
 */
    private tablePos: number = -1;


    /**
* 头像的url
*/
    private headImageUrl: string = "";
    /**
     * 性别 1=男 0=女
     */
    private sex: number = 0;

    /**
 * 是否准备好了，默认为准备好了，有些游戏需要准备的
 */
    private isReady: boolean = false;

    /**
* 用户的是否连接断开
*/
    private isLinkBroken: boolean = false;

    /**
 * 是否是机器人，默认是false
 */
    private isRobot: boolean = false;

    /**
  * 加入时间
  */
    private joinTimes: dcodeIO.Long = dcodeIO.Long.ZERO;


    public serialize(ar: ObjectSerializer) {
        
        this.playerId = ar.sLong(this.playerId);
        this.playerName = ar.sString(this.playerName);
        this.tablePos = ar.sInt(this.tablePos);
        this.headImageUrl = ar.sString(this.headImageUrl);
        this.sex = ar.sInt(this.sex);
        this.isReady = ar.sBoolean(this.isReady);
        this.isLinkBroken = ar.sBoolean(this.isLinkBroken);
        this.isRobot = ar.sBoolean(this.isRobot);
        this.joinTimes = ar.sLong(this.joinTimes);

    }


}
