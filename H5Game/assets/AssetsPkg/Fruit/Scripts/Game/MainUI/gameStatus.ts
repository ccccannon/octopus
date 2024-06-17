// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { fruitPosList, GameStatus, BET_LEVEL, BET_LEVEL_COINS, MAX_BET_AREA, EVENT_ANIMA } from "./constants"
import { convertPositionForList } from "../../Utils/utils_position"
import { nodeMoveWithPosList } from "../../Utils/utils_animation"

import horseRaceLamp from "./prefab/horseRaceLamp";
import fruitArea from "./fruitArea";
import betArea from "./betArea";
import promptLayerManager from "./promptLayerManager";
import { evokeNativeChargePage, evokeNativeToQuitGame, setRefreshGameView } from "../../../../../Script/Utils/AppInterface";
import draw_result_bet from "../Draw/draw_result_bet";
import RecordArea from "./RecordArea";
import headArea from "./headArea";
import { IntoGameHallMsg } from "../../../../../Script/msg/IntoGameHallMsg";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import betCoinSelectArea from "./betCoinSelectArea";
import { GuessGameStakeMsg } from "../../../../../Script/msg/GuessGameStakeMsg";
import { GameData } from "./GameData";
import { UpdatePlayerPurseMsg } from "../../../../../Script/msg/UpdatePlayerPurseMsg";
import animationLayerManager from "./animationLayerManager";
import jackpotCtrl from "./jackpotCtrl";
import Panel_Jackpot from "../Panel/Panel_Jackpot";



const { ccclass, property } = cc._decorator;
@ccclass
export default class gameStatus extends cc.Component {

    @property(cc.Node)
    finger: cc.Node = null;

    @property(horseRaceLamp)
    horesRaceLampCtrl: horseRaceLamp = null;

    @property(fruitArea)
    fruitAreaCtrl: fruitArea = null;

    @property(betArea)
    betAreaCtrl: betArea = null;

    @property(promptLayerManager)
    promptManagerCtrl: promptLayerManager = null;

    @property(draw_result_bet)
    resultDrawCtrl: draw_result_bet = null;

    @property(headArea)
    headeAreaCtrl: headArea = null;

    @property(RecordArea)
    recordAreaCtrl: RecordArea = null;

    @property(betCoinSelectArea)
    betCoinSelectAreaCtrl: betCoinSelectArea = null;
    // gameManager: cc.Node,
    // headeArea: cc.Node,
    // recordArea: cc.Node,

    @property(animationLayerManager)
    animationCtrl: animationLayerManager = null;

    @property(jackpotCtrl)
    jackpotCtrl: jackpotCtrl = null;

    @property(Panel_Jackpot)
    panelJackpotCtrl: Panel_Jackpot = null;


    public GameStatus: GameStatus = GameStatus.GameStatusInvalid;

    public myBetInfoList = null;

    public fruitDownTimeOut: number = null;

    public currentBetCoins: any = null;

    public gameSettleTimeOut: number = null;

    public isShow: boolean = true;

    onLoad() {

        this.initSocketResponseListener();
        cc.systemEvent.on("ON_BET_CLICK", this.onBetBtnClick, this);

        cc.systemEvent.on("ON_COIN_SELECT_CLICK", this.onCoinSelectClick, this);

        cc.systemEvent.on('COIN_FLY_BALANCE', this.coinFlyToBalance, this);
        cc.systemEvent.on('COIN_ROLL_TODAYWIN', this.coinTodayWinRoll, this);
        cc.systemEvent.on('updateGameStatus', this.onGameStatusChange, this);

        cc.systemEvent.on('LOGIN_GAME_HALL', this.loginGameHall, this);

        cc.systemEvent.on('SHOW_TIPS', this.showTips, this);

        cc.systemEvent.on('SHOW_JACKPOT', this.showJackpotAnimation, this);

        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);

        /** 添加回调 */
        setRefreshGameView(this.onGameShow.bind(this));

        // 隐藏并重置手指
        this.hideAndResetFinger();

        // 我的下注信息
        this.myBetInfoList = [];

        // console.log(this.gameManagerScript);

        /** 登录游戏 */
        // this.sendLoginMsg();

    }

    start() {

        this.defaultDisplay();

        this.loginGameHall();
        // @ts-ignore
        cc.game.isInScene = true;

    }


    onGameShow() {
        this.isShow = true;
        // if (!NetMgr.getInstance().isSocketWorking()) {
        //     return;
        // }
        NetMgr.getInstance().reconnect();

        this.loginGameHall();
    }

    onGameHide() {
        this.isShow = false;
        this.resetFruitGame();
    }

    /** 初始化长链接监听 */
    initSocketResponseListener() {

        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_STATUS_ACK, this.getTableInfo, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_STAKE_GAME_ACK, this.guessGameStaticAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE_ACK, this.updatePlayerPurseAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_RESULT_ACK, this.guessGameResultAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK, this.guessGamePlayerTodayWinAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_JACKPOT_ACK, this.msgGuessGameJackpotAck, this);

    }


    Mock_gameStart() {


        const results = ',1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4';

        const Config = {
            guessBets: [
                { id: 1, value: 10 },
                { id: 2, value: 100 },
                { id: 3, value: 1000 },
                { id: 4, value: 10000 },
            ],
            guessItems: [
                { id: 1, odds: 5 },
                { id: 2, odds: 5 },
                { id: 3, odds: 5 },
                { id: 4, odds: 5 },
                { id: 5, odds: 10 },
                { id: 6, odds: 15 },
                { id: 7, odds: 25 },
                { id: 8, odds: 40 },
            ]
        }

        const tableConfig = JSON.stringify(Config);

        const tableState = 5;
        const countDownTime = 15000;
        const currConsume = Math.floor(Math.random() * 1000);

        /** 缓存桌子id */
        GameData.getInstance().tableId = 'mock123456';

        /**初始化历史记录 */
        this.recordAreaCtrl.init(results);

        /** 同步服务器配置 */
        this.ansycServerSetting(tableConfig);

        /** 更新当前的游戏状态 */
        this.updateGameStatus(tableState, countDownTime);

        /**更新当前回合数 */
        this.headeAreaCtrl.setRound(currConsume);

    }

    Mock_gameSettle() {
        // const { rankItems, result, winGold } = msgAck;
        const msg = {
            rankItems: [],
            result: Math.floor(Math.random() * 8) + 1,
            winGold: dcodeIO.Long.fromNumber(-1),
        }

        this.guessGameResultAck(msg);
    }

    Mock_gameBetMe() {
        const msg = {
            betId: Math.floor(Math.random() * 4) + 1,
            betValue: dcodeIO.Long.fromNumber(10000),
            itemId: Math.floor(Math.random() * 8) + 1,
            playerId: dcodeIO.Long.fromNumber(GameMgr.getInstance().UserId),
            playerAvatar: 'https://pic.hghggh.com/avatar/16546767826711200_800.gif'
        }
        this.guessGameStaticAck(msg);

        const msgAck = { goldNum: dcodeIO.Long.fromNumber(Math.floor(Math.random() * 100000)) };

        this.updatePlayerPurseAck(msgAck);
    }

    Mock_gameBetOther() {
        const msg = {
            betId: Math.floor(Math.random() * 4) + 1,
            betValue: dcodeIO.Long.fromNumber(10000),
            itemId: Math.floor(Math.random() * 8) + 1,
            playerId: dcodeIO.Long.fromNumber(GameMgr.getInstance().UserId + 1),
            playerAvatar: 'https://pic.hghggh.com/avatar/16546767826711200_800.gif'
        }
        this.guessGameStaticAck(msg);

        // const msgAck = { goldNum: dcodeIO.Long.fromNumber(Math.floor(Math.random() * 100000)) };

    }


    /**********************===============长链接逻辑开始 =============********************/


    /** 获取桌子信息 */
    getTableInfo(msgAck) {
        Logger.logModel(msgAck, '桌子信息');




        // Logger.logModel(this,'this');

        const { countDownTime, currConsume, results, tableConfig, tableId, tableState, tableIndex, myStakeJson, otherStakeJson, gameId, jackPotPool } = msgAck;

        if (gameId != GameMgr.getInstance().GameId) {
            return;
        }

        /** 缓存桌子id */
        // GameData.getInstance().tableId = tableId;

        const gd = GameData.getInstance();

        gd.tableId = tableId;

        /**回合开始 重置jackpot的数值 */
        gd.jackpotWin = -1;
        gd.jackpotTop3 = [];

        /**初始化历史记录 */
        this.recordAreaCtrl.init(results);

        /** 同步服务器配置 */
        this.ansycServerSetting(tableConfig);

        /** 更新当前的游戏状态 */
        this.updateGameStatus(tableState, countDownTime);

        /**更新当前回合数 */
        this.headeAreaCtrl.setRound(currConsume);

        /** 更新jackpot数量 */
        this.jackpotCtrl.updateJackPotNumber(jackPotPool.toNumber());

        /** 隐藏Jackpot动画 */
        if (this.panelJackpotCtrl.node.active) {
            this.panelJackpotCtrl.hideView();
        }

        /** 更新下注信息 */
        if (tableState == 5) {
            this.updateBetInfo(myStakeJson, otherStakeJson);
        }


    }

    /** 竞猜游戏下注响应 */
    guessGameStaticAck(msgAck) {
        Logger.logModel(msgAck, '竞猜游戏下注响应');


        const { betId, betValue, itemId, playerAvatar, playerId } = msgAck;

        const betCoin = betValue.toNumber();

        if (playerId.toNumber() == GameMgr.getInstance().UserId) {
            Logger.logView('自己下注', betValue.toNumber());

            // 将水果显示为选中状态
            this.fruitAreaCtrl.setFruitSelectedById(itemId - 1);

            //获取被下注的按钮
            const btnNode = this.betAreaCtrl.getBetBtnById(itemId - 1);

            const worldPos = btnNode.parent.convertToWorldSpaceAR(btnNode.position);

            const param = {
                worldPos: worldPos,
                betLevel: this.getBetLevel(betId),
                // callback: callback.bind(this)
            }

            // 下注动画
            this.animationCtrl.coinBet(param);

            // 余额变动动画
            setTimeout(() => {
                this.animationCtrl.numberRollAnimation(this.animationCtrl.target_coin_balance, { number: GameData.getInstance().balance, time: 0.6 });
            }, 100)

            const betInfo = {
                id: itemId - 1,
                betNumber: betCoin,
            }

            //展示我的下注金额
            this.betAreaCtrl.addMyBetNumber(betInfo);

        } else {
            Logger.logView('别人下注', betCoin);

            // cc.systemEvent.emit(EVENT_ANIMA.AVATAR,);
            /** 如果已经被隐藏，不再执行后续的展示其他玩家下注的动画 */
            if (!this.isShow) {
                return;
            }
            this.animationCtrl.avatarAnimation(playerAvatar, itemId - 1, betCoin);

        }



        // param.worldPos = worldPos;

        // param.betLevel = this.getBetLevel();

        // // const balance = GameData.Balance - this.currentBetCoins.coinsNumber;

        // // GameData.setBalance(balance);

        // const balance = GameData.Balance;

        // param.balance = balance;

        // param.betNumber = this.currentBetCoins.coinsNumber;

        // param.totalBet = TotalBet[Area];

        // param.callback = callback.bind(this);



    }

    /** 接收单局结算信息 */
    guessGameResultAck(msgAck) {
        Logger.logModel(msgAck, '接收单局结算信息');
        const { rankItems, result, winGold, gameId } = msgAck;
        Logger.logModel(rankItems, 'top3');
        Logger.logModel(result, '本局结果');
        Logger.logModel(winGold.toNumber(), '本局赢得金币数量');

        if (gameId != GameMgr.getInstance().GameId) {
            return;
        }

        /** 更新历史记录 */
        // this.recordAreaCtrl.updateRecordById(result);
        const gd = GameData.getInstance();

        // 设置本局游戏的top3玩家
        gd.topList = rankItems;

        // 设置本局的获胜金币数
        gd.roundWinGold = winGold.toNumber();

        // 设置本局结果
        gd.roundResult = result;


        // // 设置今日的赚的金币
        // GameData.setTodayWinSet(TodayWinSet)

        this.onGameStatusChange(GameStatus.GameStatusPlaying, { time: 3, start: 0, end: result, constCircle: 1 + 3 });

        this.gameSettleTimeOut && clearTimeout(this.gameSettleTimeOut);

        this.gameSettleTimeOut = setTimeout(() => {
            // 更新状态为结算状态
            this.onGameStatusChange(GameStatus.GameStatusSettle);

            // 更新水果历史记录
            this.recordAreaCtrl.updateRecordById(result);

        }, 4.6 * 1000);

    }

    /** 接收今日赢得金币的信息 */
    guessGamePlayerTodayWinAck(msgAck) {
        Logger.logModel(msgAck, '接收今日赢得金币的信息');
        const { winGold } = msgAck;
        Logger.logModel(winGold.toNumber(), '今日赢得金币');

        const gd = GameData.getInstance();
        // 第一次接收今日金币信息时直接展示
        if (!gd.todatWinGold) {
            const todayWin = winGold.toNumber();
            gd.todatWinGold = todayWin;
            this.headeAreaCtrl.setDisplayCoinWin(todayWin);
            // this.headeAreaCtrl.setDisplayCoinWin(Math.floor(Math.random() * 10000));
        } else {
            /** 缓存数据 为动画做准备 */
            gd.todatWinGold = winGold.toNumber();
        }
    }

    /** 获取账户余额信息 */
    updatePlayerPurseAck(msgAck) {
        Logger.logModel(msgAck, '获取账户余额信息');
        const { goldNum } = msgAck;
        Logger.logModel(goldNum.toNumber(), '账户余额信息');

        const gd = GameData.getInstance();
        // 第一次接收今日金币信息时直接展示
        if (!gd.balance) {
            const balance = goldNum.toNumber();
            gd.balance = balance;
            this.headeAreaCtrl.setDisplayCoinBalance(balance);
            // this.headeAreaCtrl.setDisplayCoinWin(Math.floor(Math.random() * 10000));
        } else {
            /** 缓存数据 为动画做准备 */
            gd.balance = goldNum.toNumber();

            Logger.logBusiness(this.GameStatus, '当前的游戏状态');

        }

        // /** 缓存账户余额 */
        // GameData.getInstance().balance = goldNum.toNumber();


    }

    /** 获取jackpot结果 */
    msgGuessGameJackpotAck(msgAck) {
        Logger.logBusiness(msgAck, '获取jackpot结果');
        const { rankItems, jackPotWin } = msgAck;
        const gd = GameData.getInstance();
        gd.jackpotTop3 = rankItems;
        gd.jackpotWin = jackPotWin.toNumber(); // -1: 没参与  0：没中奖 

        // this.panelJackpotCtrl.showRankDisplay(info);
    }

    /** 发送下注信息 */
    sendBetInfo(betId, itemId) {
        const msg = new GuessGameStakeMsg();
        msg.betId = betId;
        msg.itemId = itemId;
        msg.tableId = GameData.getInstance().tableId;
        Logger.logNet(msg, '发送下注信息');
        MsgDispatcher.sendMsg(msg);
    }

    /** 发送查询账户余额信息 */
    sendQueryPurseMsg() {
        const msg = new UpdatePlayerPurseMsg();
        MsgDispatcher.sendMsg(msg);
        Logger.logNet(msg, '发送查询账户余额信息');
    }


    /** 登录游戏大厅 */
    loginGameHall() {
        const gm = GameMgr.getInstance();
        const intoGameHall = new IntoGameHallMsg();
        intoGameHall.userId = dcodeIO.Long.fromNumber(gm.UserId);
        intoGameHall.gameId = gm.GameId;
        MsgDispatcher.sendMsg(intoGameHall);
        // console.log('登录游戏大厅', gm.UserId, gm.Token, gm.Language);
        // debugger
        Logger.logBusiness(intoGameHall, '登录游戏大厅');

    }


    /**********************===============长链接逻辑结束 =============********************/


    showTips() {
        this.promptManagerCtrl.showAnimationTips(1002, 2);
    }

    // testShowTips(){
    //     cc.systemEvent.emit('SHOW_TIPS');
    // }


    /** 更新下注信息 */
    updateBetInfo(myBetJson, otherBetJson) {


        Logger.logModel(myBetJson, 'myBetJson');
        Logger.logModel(otherBetJson, 'otherBetJson');

        if (myBetJson && myBetJson.length > 0) {
            // debugger
            const myBet = JSON.parse(myBetJson);
            this.betAreaCtrl.updateAllMyBetInfo(myBet);
        }

        if (otherBetJson && otherBetJson.length > 0) {
            const otherBet = JSON.parse(otherBetJson);
            this.betAreaCtrl.updateAllTotalBetInfo(otherBet);
        }

    }


    /** 当处于断线状态的时候 */
    defaultDisplay() {
        const Config = {
            guessBets: [
                { id: 1, value: 10 },
                { id: 2, value: 100 },
                { id: 3, value: 1000 },
                { id: 4, value: 10000 },
            ],
            guessItems: [
                { id: 1, odds: 5 },
                { id: 2, odds: 5 },
                { id: 3, odds: 5 },
                { id: 4, odds: 5 },
                { id: 5, odds: 10 },
                { id: 6, odds: 15 },
                { id: 7, odds: 25 },
                { id: 8, odds: 40 },
            ]
        }

        const tableConfig = JSON.stringify(Config);
        this.ansycServerSetting(tableConfig);
        this.onGameStatusChange(GameStatus.GameStatusInvalid)
    }


    /** 同步服务器配置 */
    ansycServerSetting(tableConfig) {
        const tableSetting = JSON.parse(tableConfig);
        const { guessBets, guessItems } = tableSetting;
        Logger.logModel(guessBets, '押注按钮配置');
        Logger.logModel(guessItems, '各水果的倍数');
        this.betCoinSelectAreaCtrl.init(guessBets);
        this.fruitAreaCtrl.initFruitArea(guessItems);
        this.betAreaCtrl.initBetArea(guessItems);
    }


    /** 更新游戏的状态 */
    updateGameStatus(status, restTime) {
        restTime = Math.floor(restTime / 1000);
        if (status == 5) {
            Logger.logView('当前为下注状态');
            this.stopAllTimeout();
            this.GameStatus = GameStatus.GameStatusNormal;
            this.onGameStatusChange(GameStatus.GameStatusNormal, { time: restTime });
        } else {
            Logger.logView('当前为等待状态');
            this.resetFruitGame();
            this.GameStatus = GameStatus.GameStatusPrepare;
            this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: restTime });
        }

    }


    // 手指的移动动画
    fingerMoveAnimation() {
        let posList = convertPositionForList(this.node, this.fruitAreaCtrl.node, fruitPosList);
        nodeMoveWithPosList(this.finger, posList);
    }

    // 隐藏手指 重置状态
    hideAndResetFinger() {
        this.finger.stopAllActions();
        this.finger.active = false;
    }

    // 显示手指并执行手指动画
    showFinger() {
        this.finger.stopAllActions();
        this.finger.active = true;
        this.fingerMoveAnimation();
    }


    // 重置游戏状态
    resetGameStateToStart() {
        this.betAreaCtrl.resetBetArea();
        this.fruitAreaCtrl.resetNodeListInfo();
    }

    // test
    gameStatusTestFun(msg) {
        // console.log(msg);
        // console.log(this);
    }

    /** 点击空白区域退出游戏 */
    leaveRoom() {
        evokeNativeToQuitGame();
    }

    /** 重置水果机游戏 */
    resetFruitGame() {

        this.fruitAreaCtrl.removeTimer();
        this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 88 });
        this.horesRaceLampCtrl.stopBetTimer();

        this.gameSettleTimeOut && clearTimeout(this.gameSettleTimeOut);

        this.resultDrawCtrl.stopDownInterval();
        this.resultDrawCtrl.hideResultDraw();

        this.hideAndResetFinger();

        this.resetGameStateToStart();
    }

    /** 停止所有的定时器 */
    stopAllTimeout() {

        this.horesRaceLampCtrl.stopBetTimer();
        this.fruitAreaCtrl.stopDefaultDrawTimer();
        this.resultDrawCtrl.stopDownInterval();
        this.resultDrawCtrl.node.active = false;
        this.hideAndResetFinger();
    }



    /** 唤起充值界面 */
    evokeChargePage() {
        evokeNativeChargePage();
    }



    // 游戏状态变化后相应的视图变化
    onGameStatusChange(state, msg?) {

        if (!this.isShow) {
            return;
        }

        this.GameStatus = state;

        // 非法状态
        if (this.GameStatus === GameStatus.GameStatusInvalid) {
            this.promptManagerCtrl.showStaticTips(1003);
            return;

        }

        if (this.GameStatus === GameStatus.GameStatusInit) {

            // 移除静态提示
            this.promptManagerCtrl.removeStaticTips();

            // 显示手指转圈
            this.showFinger();

            const { time } = msg;

            // 设置跑马灯    
            this.horesRaceLampCtrl.betTimer(time);

            // 执行水果下移动画
            this.fruitAreaCtrl.beforeGuessAnimation();
            return;

        }

        // 可下注状态
        if (this.GameStatus === GameStatus.GameStatusNormal) {

            // 初始化下注状态
            // this.isBeting = false;

            // 显示手指转圈
            this.showFinger();

            // 移除静态提示
            this.promptManagerCtrl.removeStaticTips();

            const { time } = msg;
            // 设置跑马灯倒计时
            this.horesRaceLampCtrl.betTimer(time);

            //重置每个水果的可下注总额 
            this.betAreaCtrl.resetTotalNumber();

            // 执行水果下移动画
            this.fruitAreaCtrl.beforeGuessAnimation();
            return;

        }

        // 计算结果
        if (this.GameStatus === GameStatus.GameStatusPlaying) {

            // setTimeout(() => {
            // 隐藏手指
            this.hideAndResetFinger();

            // 移除静态提示
            this.promptManagerCtrl.removeStaticTips();

            // 清空下注信息
            this.myBetInfoList = [];

            const { time, start, end, constCircle } = msg;

            // 水果机旋转动画
            this.fruitAreaCtrl.spinAnimation(start, end, constCircle);

            // 跑马灯3秒倒计时
            this.horesRaceLampCtrl.betTimer(time);
            // }, 2000)

            return;

        }

        // 将结算状态进行拆分 5s展示结果 
        if (this.GameStatus === GameStatus.GameStatusSettle) {

            // 弹出结果界面
            this.resultDrawCtrl.showResultDraw(function () {
                this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 2 });
            }.bind(this));

            return;
        }

        // 准备状态
        if (this.GameStatus === GameStatus.GameStatusPrepare) {

            const { time } = msg;

            this.betAreaCtrl.resetBetArea();

            this.fruitAreaCtrl.resetNodeListInfo();

            // 移除静态提示
            this.promptManagerCtrl.removeStaticTips();

            // 设置跑马灯3秒倒计时
            this.horesRaceLampCtrl.betTimer(time);

            // 提示游戏准备开始 
            this.promptManagerCtrl.showStaticTips(1001);

            this.fruitDownTimeOut && clearTimeout(this.fruitDownTimeOut);

            this.fruitDownTimeOut = setTimeout(() => {
                // 执行水果下移动画
                this.fruitAreaCtrl.beforeGuessAnimation();
            }, 1000);

            return;
        }

    }


    /** 今日赢得金币滚动 */
    coinTodayWinRoll(todayWin?: number) {
        const param = {
            number: !!todayWin ? todayWin : GameData.getInstance().todatWinGold,
            time: 1,
        }
        this.animationCtrl.coinsTodayWinRoll(param);
    }

    /** 金币飞向余额 */
    coinFlyToBalance(basePos, balance?) {
        const param = {
            number: balance ? balance : GameData.getInstance().balance,
            time: 1,
            basePos: basePos,
        }
        this.animationCtrl.coinsMoveToBalance(param);
    }

    showJackpotAnimation() {
        const gd = GameData.getInstance();
        if (gd.isJackPotRound()) {
            this.scheduleOnce(() => {
                // const info = [
                //     {
                //         playerAvatar: 'https://pic.hghggh.com/avatar/16546767826711200_800.gif',
                //         winGold: dcodeIO.Long.fromNumber(12345),
                //         playerName: 'hellworold12345'
                //     },

                //     {
                //         playerAvatar: 'https://pic.hghggh.com/default/avatar/face_modern1%402x.png',
                //         winGold: dcodeIO.Long.fromNumber(1234),
                //         playerName: 'hellworold'
                //     },

                //     {
                //         playerAvatar: 'http://pic.hghggh.com/game/games/dev/1l244myl2gc.jpg',
                //         winGold: dcodeIO.Long.fromNumber(123),
                //         playerName: 'hellworold2222222222222222222222222222'
                //     },
                // ];
                const info = gd.jackpotTop3;
                this.panelJackpotCtrl.showRankDisplay(info);
                this.panelJackpotCtrl.showView();
            }, 2);
        } else {
            Logger.logBusiness('不是jackpot回合');
        }
    }


    /** 执行下注操作 */
    onBetBtnClick(param) {
        Logger.logBusiness(param, '下注');
        // const code = this.isCurrentBetValid(param);

        const code = this.isBetValid(param);
        if (code == 1) {
            if (GameData.getInstance().balance - this.currentBetCoins.coinsNumber >= 0) {
                const betId = this.currentBetCoins.id;
                const itemId = param.id.toString();
                this.sendBetInfo(betId, itemId);
            } else {
                // 防止出现余额显示错误的情况
                this.headeAreaCtrl.updateBalance(GameData.getInstance().balance);
                this.evokeChargePage();
            }
        } else {
            this.promptManagerCtrl.showAnimationTips(code);
        }

    }


    /** 模拟下注 */
    mockBet() {

        for (let i = 0; i < 1000; i++) {
            setTimeout(() => {
                const betId = 1;
                const itemId = Math.floor(Math.random() * 4) + 1;
                this.sendBetInfo(betId, itemId.toString());
            }, i);
        }

    }




    onCoinSelectClick(params) {
        Logger.logBusiness(params, '点击选取下注金额');
        // 当前选择的下注金币数额；
        this.currentBetCoins = params;
    }


    // 判断下注是否合法
    isBetValid(param) {

        const isStatesValid = this.isStatesValid();
        if (isStatesValid != 1) {
            return isStatesValid;
        } else {
            const isCurrentBetValid = this.isCurrentBetValid(param);
            if (isCurrentBetValid != 1) {
                return isCurrentBetValid;
            }
        }

        return 1;
    }

    // 判断下注是否合法 TODO
    isStatesValid() {
        // debugger
        // 1 根据当前状态，返回不同的错误码,需要根据不同的错误码，提供相应的错误提示。
        if (this.GameStatus != GameStatus.GameStatusNormal) {
            return 1002
        }
        return 1;
    }

    // 判断当前押注是否合法
    isCurrentBetValid(param) {

        if (this.myBetInfoList.length <= 0) {

            let betInfo = this.initBetInfo(param.id);
            this.myBetInfoList.push(betInfo);

            return 1;
        }
        // debugger;
        // console.log(this.myBetInfoList);

        const index = this.myBetInfoList.findIndex((item) => { return item.id == param.id });
        // console.log(index);
        // 判断当前选择下注的类型是否已经存在
        if (index > -1) {
            this.myBetInfoList.map((item) => {
                if (item.id === param.id) {
                    item.betNumber += this.currentBetCoins.coinsNumber;
                }
                return item;
            })
            return 1;
        } else {
            // 判断是否超过了最大允许下注的数量
            if (this.myBetInfoList.length >= MAX_BET_AREA) {
                return 2001;
            } else {
                let betInfo = this.initBetInfo(param.id);
                this.myBetInfoList.push(betInfo);
                return 1;
            }

        }

    }

    // 初始化下注信息
    initBetInfo(id) {
        // console.log(this.currentBetCoins);
        let betInfo = {
            betNumber: 0,
            id: id,
        };
        betInfo.betNumber += this.currentBetCoins.coinsNumber;
        return betInfo;
    }


    // 获取下注等级
    getBetLevel(betId) {

        if (betId === BET_LEVEL.ONE) {
            return BET_LEVEL_COINS.TINY;
        }
        if (betId === BET_LEVEL.TWO) {
            return BET_LEVEL_COINS.SOME;
        }

        if (betId === BET_LEVEL.THREE) {
            return BET_LEVEL_COINS.MEDIUM;
        }

        if (betId === BET_LEVEL.FOUR) {
            return BET_LEVEL_COINS.HUGE;
        }

    }


}
