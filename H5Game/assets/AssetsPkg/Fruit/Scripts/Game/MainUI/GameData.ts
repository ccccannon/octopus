import { GameSessionId } from "../../../../../Script/Mgr/Config";
import { RankItem } from "../../../../../Script/domain/RankItem";
import { fruitId } from "./constants";

export class GameData {

    public static _instance: GameData = null;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new GameData();
        }
        return this._instance;
    }

    _currRestTime: number = 0;

    /** 桌子id */
    tableId: string = null;

    /** top3 */
    public topList: Array<RankItem> = null;

    /** 单局赢得金币 */
    public roundWinGold: number = 0;

    /** 账户余额 */
    public balance: number = 0;

    /** 今日赢得金币 */
    public todatWinGold: number = 0;

    /** 当局结果 */
    public roundResult: number = 0;

    /** 游戏id */
    public gameId: number = GameSessionId.Fruit;

    /** jackpot信息 */
    public jackpotTop3: any = [];

    public jackpotWin: number = 123450;

    // /** 是否为jackpot局 */
    // public isJackPotRound: boolean = false;

    /** 用户信息 */
    // userInfo = null;


    constructor() {
        // this.SpirteCache = new Map();
        // this.init();
    }


    /** 判断是否为jackpot回合 
     *  判断条件：有人下注，且jackpot排行有人
    */
    isJackPotRound() {
        return this.roundResult === fruitId.GRAPE && this.jackpotTop3.length > 0;
        // return (this.roundResult === fruitId.ORANGE || this.roundResult === fruitId.PITAYA) && this.jackpotTop3.length > 0;
        //  || this.roundResult === fruitId.APPLE || this.roundResult === fruitId.WATERMELON 
    }


    /** 获取剔除掉jackpot的余额 */
    getBalanceWithoutJackpot() {
        let balance;
        if (this.jackpotWin > 0) {
            balance = this.balance - this.jackpotWin;
        } else {
            balance = this.balance;
        }
        return balance;
    }

    /** 获取剔除了jackpot的今日赢得金币 */
    getTodayWinWithoutJackpot() {
        let todayWin;
        if (this.jackpotWin > 0) {
            todayWin = this.todatWinGold - this.jackpotWin;
        } else {
            todayWin = this.todatWinGold;
        }
        return todayWin;
    }


    // BaseUrl = CC_DEBUG ? "http://129.226.169.100:7615" : 'http://43.131.42.46:7615';

    // init() {
    //     // 提取url里面的信息
    //     const token = getQueryString('token', window.location.href);
    //     const uid = getQueryString('uid', window.location.href);
    //     const version = getQueryString('version', window.location.href);
    //     const GameId = getQueryString('gid', window.location.href);
    //     this.userToken = token;
    //     this.userID = uid;
    //     this.appVersion = version || 0;
    //     this.GameId = 4005;
    // }


    // setTempBalance(value) {
    //     this.tempBalance = value > 0 ? value : 0;
    // }

    // get TempBalance() {
    //     return this.tempBalance;
    // }

    // /** 设置游戏状态 */
    // setGameStatus(status) {
    //     this.gameStatus = status;
    // }

    // get GameStatus() {
    //     return this.gameStatus;
    // }

    // set TabelInfo(info) {
    //     this.tableInfo = info;
    // }

    // set Balance(num) {
    //     // console.log('设置余额', num);
    //     this.balance = num;
    // }

    // get ProductID() {
    //     this.tableInfo.ProductID;
    // }

    // // 获取玩家余额
    // get Balance() {
    //     return this.balance;
    // }

    // // 下注金额等级
    // get BetAmounts() {
    //     this.tableInfo.BetAmounts || [1, 10, 100, 1000];
    // }

    // get NewBetAmounts() {
    //     this.tableInfo.NewBetAmounts || [1, 10, 100, 1000, 200, 500, 1000, 2000, 500, 1000, 2000, 5000, 1000, 2000, 5000, 10000]
    // }

    // // 下注的金额限制
    // get BetLimited() {
    //     return this.tableInfo.PlayerBetLimit || 500000;
    // }

    // // 下注的倍数
    // get Multiple() {
    //     return this.tableInfo.Multiple || [5, 5, 5, 5, 10, 15, 25, 40];
    // }

    // // 设置top3的玩家
    // set BestWinners(list) {
    //     this.bestWinners = list;
    // }

    // get BestWinners() {
    //     return this.bestWinners;
    // }

    // // 设置玩家获利金币数
    // set SettleAmount(amount) {
    //     this.settleAmount = amount;
    // }

    // get SettleAmount() {
    //     return this.settleAmount;
    // }

    // // 设置下注状态
    // set RebetStatus(bool) {
    //     this.reBetStatus = bool;
    // }

    // get ReBetStatus() {
    //     return this.reBetStatus;
    // }

    // // 设置玩家当天的赢得的金币数量
    // set TodayWinSet(num) {
    //     this.todayWinSet = num;
    // }

    // get TodayWinSet() {
    //     return this.todayWinSet;
    // }


    // // 设置水果的历史
    // set FruitHistory(history) {
    //     this.fruitHistory = history;
    // }

    // get FruitHistory() {
    //     return this.fruitHistory;
    // }


    // /**
    //  * 
    //  * @param {Number} uid 用户id
    //  * @param {String} url 图片地址
    //  * @returns 
    //  */
    // async getPictureFromCache(uid, url) {
    //     // if (this.SpirteCache.has(uid)) {
    //     //     return this.SpirteCache.get(uid);
    //     // } else {
    //     //     const sprite = await this.loadPictureByUrl(url);
    //     //     this.SpirteCache.set(uid, sprite);
    //     //     return this.SpirteCache.get(uid);
    //     // }
    // }


    // /** 根据url下载图片  */
    // async loadPictureByUrl(url) {
    //     const texture = await loadPicture(url);
    //     const sprite = new cc.SpriteFrame();
    //     sprite.setTexture(texture);
    //     return sprite;
    // }

    // /** 清除图片缓存 */
    // clearPictureFromCache() {
    //     this.SpirteCache.clear();
    // }

    /** 获取排行榜数据 */
    // async getRankData(data) {
    //     // data:
    //     // {
    //     //     "Page":0,
    //     //     "Num":10,
    //     // }

    //     const  gm = GameMgr.getInstance();

    //     data = { ...data, GameID: gm.GameId };
    //     // console.log(this.UserInfo,'this.UserInfo');
    //     // console.log(data, 'getRankData params');
    //     const url = this.BaseUrl + '/game/rank';
    //     const list = await getRankData(url, gm.Token, data);
    //     return list;
    // }

    // async getFruitRecordData(data) {
    //     data = { ...data, GameID: this.GameId };
    //     const url = this.BaseUrl + '/game/fruitRecords';
    //     const list = await getFruitRecordData(url, this.UserInfo.Token, data);
    //     return list;
    // }


    /** 设置用户信息 */
    // setUserInfo(info) {
    //     this.userInfo = info;
    // }

    // get UserInfo() {
    //     return this.userInfo || {}
    // }

    /**
     * 
     * @returns  userInfo: 登录用户信息 ; { GameID:0,GateAddr:"129.226.169.100:6615",Token:"JADXVMYHNSGJEJ",UID:1272}
     */
    // async getUserInfo() {
    //     const url = this.BaseUrl + '/account/guestLogin';
    //     const data = getSocketRequiredData();

    //     if (CC_DEBUG) {
    //         console.log(url, 'url details');
    //         console.log(data, 'socket address info');
    //     }

    //     // post_ajax(url,data);

    //     const data1 = await getGameSocketData(url, data);

    //     if (CC_DEBUG) {
    //         console.log(' 登录用户信息', data1);
    //     }

    //     // 缓存用户信息
    //     this.setUserInfo(data1);
    //     return data1;
    // }

    /** 转换桌子上所有人的下注信息
     * @param {Array} list 下注信息
     * @param {Array} NewBetAmounts  筹码信息
     * 
     * @example 
     * list 的item格式：{Element:[]} 
     * 
     * @returns 返回被处理后的信息
     * 
     */
    // areaCoinsAdapter(list, NewBetAmounts) {
    //     const len = list.length;
    //     let areaCoinList = [];
    //     for (let i = 0; i < len; i++) {
    //         const cList = list[i].Element;
    //         let cSum = 0;
    //         for (let j = 0, cLen = cList.length; j < cLen; j++) {

    //             if (cList[j] != 0) {
    //                 cSum += NewBetAmounts[j] * cList[j];
    //             }
    //         }

    //         areaCoinList.push(cSum);

    //     }
    //     return areaCoinList;
    // }




}