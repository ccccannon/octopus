import GameMgr from "../../../Script/Managers/GameMgr";
import { Player } from "../../../Script/domain/Player";

interface SnakeInfo {
    rank: number,
    score: number,
    avatar: string,
    name: string,
    id: number,
}

export class SnakeDataMgr {

    // PlayerList: Array<any> = [


    //     {
    //         name: '狼烟起',
    //         score: 500,
    //         rank: 1,
    //         id: 1001
    //     },
    //     {
    //         name: '江山北望',
    //         score: 700,
    //         rank: 2,
    //         id: 1002
    //     },
    //     {
    //         name: '龙旗卷',
    //         score: 500,
    //         rank: 3,
    //         id: 1003
    //     },
    //     {
    //         name: '马长嘶',
    //         score: 800,
    //         rank: 4,
    //         id: 1004
    //     },
    //     {
    //         name: '剑气如霜',
    //         score: 200,
    //         rank: 5,
    //         id: 1005
    //     },
    //     {
    //         name: '心似黄河水茫茫',
    //         score: 1000,
    //         rank: 6,
    //         id: 1006
    //     },
    //     {
    //         name: '二十年',
    //         score: 2000,
    //         rank: 7,
    //         id: 1007
    //     },
    //     {
    //         name: '纵横间',
    //         score: 150,
    //         rank: 8,
    //         id: 1008
    //     },
    //     {
    //         name: '谁能相抗',
    //         score: 360,
    //         rank: 9,
    //         id: 1009
    //     },
    //     {
    //         name: '凑数的',
    //         score: 115,
    //         rank: 10,
    //         id: 1010
    //     },
    //     {
    //         name: 'hey we go~',
    //         score: 0,
    //         rank: 100,
    //         id: 1000
    //     },
    // ]
    private static _instance: SnakeDataMgr = null;

    public static getInstance(): SnakeDataMgr {
        if (!this._instance) {
            this._instance = new SnakeDataMgr();
        }
        return this._instance;
    }
    public seed: number = 100;
    public Kill: number = 0;
    public PreviewRank: number = 1000;
    public SnakeLength: number = 100000000;
    public SnakeScore: number = 1000;
    public WeeklyBest: number = 10000000;
    public PersonalBest: number = 100000;

    public AiSnkaeAvatar: Array<string> = GameMgr.getInstance().Avatars;
    public AiSnkaeName: Array<string> = GameMgr.getInstance().Nicks;
    public AiSnakeList: Array<SnakeInfo> = [];
    public DeathList: Array<SnakeInfo> = [];

    public UserId = GameMgr.getInstance().UserId;

    /** 游戏登录时间 */
    public loginServerTime: number = 0;

    /** 设置蛇的击杀数量 */
    setPlayerKillNumber(val) {
        this.Kill = val;
    }

    /** 将数据组合成ai蛇数据 */
    composeAiSnakeInfo() {

        if (this.AiSnkaeAvatar.length <= 0 || this.AiSnkaeName.length <= 0) {
            return;
        }

        for (let i = 0; i < 100; i++) {

            /** 如果ai蛇的名字跟用户相同，不写入ai蛇库 */
            if (this.AiSnkaeName[i] === GameMgr.getInstance().Player.playerName) {
                // continue;
                this.AiSnkaeName[i] = this.AiSnkaeName[Math.floor(Math.random() * this.AiSnkaeName.length)];
                this.AiSnkaeAvatar[i] = this.AiSnkaeAvatar[Math.floor(Math.random() * this.AiSnkaeAvatar.length)];
            }

            let snake: SnakeInfo = {
                avatar: this.AiSnkaeAvatar[i],
                name: this.AiSnkaeName[i],
                score: i % 25 == 0 ? 2000 - Math.floor(Math.random() * 500) : 100 + Math.floor(Math.random() * 400),
                id: i,
                rank: i + 1
            };
            this.AiSnakeList.push(snake);
        }
    }


    /** 获取玩家的信息 */
    getPlayerInfo() {
        const gm = GameMgr.getInstance();
        gm.Player = new Player();
        let player: SnakeInfo = {
            avatar: gm.Player.headImageUrl,
            name: gm.Player.playerName,
            score: 100 + Math.floor(Math.random() * 500),
            id: gm.UserId,
            rank: 100,
        };
        return player;
    }




    /** 获取蛇的数据信息 */
    getSnakeInfoById(id: number) {

        // console.log(id,'蛇的id');


        if (id >= 100) {
            id = id % 100;
        }
        let info;
        for (let i = 0, len = this.AiSnakeList.length; i < len; i++) {
            const item = this.AiSnakeList[i];
            if (item.id == id) {
                info = item;
                break;
            }
        }
        return info;
    }


    /**逻辑帧数据列表 */


}