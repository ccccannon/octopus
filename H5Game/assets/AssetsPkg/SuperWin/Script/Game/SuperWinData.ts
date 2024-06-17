import { PlayerView } from "../Constant";

const coinList = [100, 1000, 5000, 10000];

export class SuperWinData {

    public static _instance: SuperWinData = null;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new SuperWinData();
        }
        return this._instance;
    }

    public coinLevel: number = 1;

    /** 门票金额 */
    public ticket: number = 1000;

    /** 游戏的最大参与人数 */
    public gameMaxNum = 10;

    /** 当前玩家是否在麦上 */
    public isOnMic = true;

    /** 桌子的信息 */
    public tableInfo: any;

    /** 桌子id */
    public tabelId: string;

    /**游戏玩家信息 */
    public gamePlayers: Array<any> = [];

    /** 出局的玩家 */
    public outPlayerList: Array<any> = [];

    /** 单局淘汰的玩家id */
    roundOutId: number = 0;

    /** 单局淘汰的玩家信息 */
    roundOutPlayer: any = null;

    /** 当前游戏是否完成 */
    public isGameFinished: boolean = false;

    /** 当前游戏是否开始 */
    public isGameStart: boolean = false;

    /** 幸运玩家id */
    public luckyerId: number = 0;

    /** 幸运玩家赢得的金币数量 */
    public luckyerWinGold: number = 0;

    /** 赢家id */
    public winnerId: number = 0;

    /** 胜出者赢得的金币数量 */
    public winnerGold: number = 0;


    /** 更新当前的金币等级 */
    updateCoinLevel() {
        this.coinLevel = coinList.indexOf(this.ticket);
    }


    /** 判断玩家的用户id是否已经存在  */
    isPlayerInList(userId): boolean | number {

        if (!this.gamePlayers || this.gamePlayers.length <= 0) {
            return false;
        }

        const idx = this.gamePlayers.findIndex((item) => {
            return item.playerId.toNumber() == userId;
        })

        if (idx <= -1) {
            return false;
        } else {
            return idx;
        }

    }

    /** 判断当前玩家的游戏状态 */
    judgePlayerGameStatus(userId: number) {

        let isContain = false;
        for (let i = 0; i < this.gamePlayers.length; i++) {
            const { playerId } = this.gamePlayers[i];
            if (playerId.toNumber() == userId) {
                isContain = true;
                break;
            }
        }

        if (isContain) {
            if (userId == this.getHosterId()) {
                return PlayerView.Host
            } else {
                return PlayerView.Participation;
            }
        } else {

            if (this.isCanAutoStart()) {
                return PlayerView.Watch
            } else {
                return PlayerView.UnParticipation;
            }
        }

    }

    /** 获取当前房间的主持者的id */
    getHosterId() {
        let hosterId = -1;
        let minJoinTime = -1;
        for (let i = 0; i < this.gamePlayers.length; i++) {
            const { joinTimes, playerId } = this.gamePlayers[i];
            if (minJoinTime <= -1) {
                minJoinTime = joinTimes;
                hosterId = playerId.toNumber();
            } else {
                if (minJoinTime > joinTimes) {
                    minJoinTime = joinTimes;
                    hosterId = playerId.toNumber();
                }
            }
        }
        return hosterId;
    }

    /** 根据userId获取用户信息  */
    getPlayerInfoByPlayerId(playerId: number) {

        const item = this.gamePlayers.find((item) => {
            return item.playerId.toNumber() == playerId;
        })
        return item;
    }

    /**  更新用户信息 */
    updatePlayerInfoByPlayerId(playerId: number) {

        // /** 缓存当前被移除的用户id */
        // this.roundOutId = playerId;

        for (let i = 0; i < this.gamePlayers.length; i++) {
            const info = this.gamePlayers[i];
            if (info.playerId.toNumber() == playerId) {
                info.isLeaveHalfWay = true;
                this.removePlayerInfoByIndex(i, true);
                this.roundOutPlayer = info;
                break;
            }
        }


    }


    /** 移除用户信息 */
    removePlayerInfoByPlayerId(playerId: number) {

        const res = this.isPlayerInList(playerId);
        if (typeof res == "boolean") {
            return;
        } else {
            const outPlayer = this.gamePlayers.splice(res, 1)[0];
            this.outPlayerList.push(outPlayer);
        }

    }

    /** 根据Index移除用户,如果时淘汰的放入，淘汰列表，否者直接移除 */
    removePlayerInfoByIndex(idx: number, isOut?) {
        const outPlayer = this.gamePlayers.splice(idx, 1)[0];
        if (isOut) {
            this.outPlayerList.push(outPlayer);
        }
    }

    /** 根据加入时间将数组排序  */
    sortGamePlayerByJoinTime() {
        this.gamePlayers.sort((a, b) => {
            return a.joinTimes.toNumber() - b.joinTimes.toNumber();
        })
    }

    /** 将已经被淘汰的玩家移除出数组 */
    removeOutPlayer(playerList) {

        playerList.sort((a, b) => {
            return a.joinTimes.toNumber() - b.joinTimes.toNumber();
        });

        let tempList1 = [];
        let tempList2 = [];

        for (let i = 0; i < playerList.length; i++) {
            const item = playerList[i];
            if (item.isLeaveHalfWay) {
                tempList2.push(item);
            } else {
                tempList1.push(item);
            }
        }

        this.gamePlayers = tempList1;
        this.outPlayerList = tempList2;

    }

    /** 判断是否可以自动开始 */
    isCanAutoStart() {

        return this.gamePlayers.length === this.gameMaxNum;

    }


    /** 从已出局的玩家中获取幸运玩家 */
    getLuckyerFromOutPlayer(id) {
        const luckyer = this.outPlayerList.find((item) => {
            return item.playerId.toNumber() === id;
        })
        return luckyer;
    }

}