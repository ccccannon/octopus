import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { evokeNativeChargePage, evokeNativeToQuitGame, setRefreshGameView } from "../../../../../Script/Utils/AppInterface";
import { GuessGameStakeMsg } from "../../../../../Script/msg/GuessGameStakeMsg";
import { IntoGameHallMsg } from "../../../../../Script/msg/IntoGameHallMsg";
import { UpdatePlayerPurseMsg } from "../../../../../Script/msg/UpdatePlayerPurseMsg";
import { BET_LEVEL, BET_LEVEL_COINS, CUSTOM_GAME_STATUS, GameStatus, RaceState, TIME_GAME_STATUS, winMarkPosList } from "../Constants";
import HorseDrawResult from "../Draw/HorseDrawResult";
import AnimationManager from "./AnimationManager";
import { HorseData } from "./HorseData";
import PromptManager from "./PromptManager";
import BgRollCtrl from "./UiControl/BgRollCtrl";
import MaskNodeUIAnimationCtrl from "./UiControl/MaskNodeUIAnimationCtrl";
import RacingAreaCtrl from "./UiControl/RacingAreaCtrl";
import TextNodeCtrl from "./UiControl/TextNodeCtrl";
import UIBetAreaCtrl from "./UiControl/UIBetAreaCtrl";
import UIButtonAreaCtrl from "./UiControl/UIButtonAreaCtrl";
import UIRateCtrl from "./UiControl/UIRateCtrl";
import UIResultAreaCtrl from "./UiControl/UIResultAreaCtrl";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HorseUiControls extends cc.Component {

    @property(cc.Node)
    raceLine: cc.Node = null;

    @property(cc.Node)
    startHorseNode: cc.Node = null;

    @property(cc.Node)
    rateNode: cc.Node = null;

    @property(RacingAreaCtrl)
    UIRacingAreaCtrl: RacingAreaCtrl = null;

    @property(cc.Node)
    winMarkNode: cc.Node = null;

    @property(BgRollCtrl)
    UIBgRollCtrl: BgRollCtrl = null;

    @property(UIBetAreaCtrl)
    UIBetCtrl: UIBetAreaCtrl = null;


    @property(UIButtonAreaCtrl)
    UIButtonCtrl: UIButtonAreaCtrl = null;


    // @property(cc.Node)
    // node_GameApp: cc.Node = null;

    @property(cc.Label)
    label_number_time: cc.Label = null;

    @property(MaskNodeUIAnimationCtrl)
    UIMaskAreaCtrl: MaskNodeUIAnimationCtrl = null;

    @property(HorseDrawResult)
    UIDrawResultCtrl: HorseDrawResult = null;

    @property(UIResultAreaCtrl)
    UIResultCtrl: UIResultAreaCtrl = null;

    @property(PromptManager)
    UIPromptManagerCtrl: PromptManager = null;

    @property(AnimationManager)
    UIAnimationManager: AnimationManager = null;

    @property(UIRateCtrl)
    UIRateCtrl: UIRateCtrl = null;


    private currentSelectedCoinInfo: any = null;

    public GameStatus: GameStatus = GameStatus.GameStatusInvalid;

    private customGameStatus: CUSTOM_GAME_STATUS = CUSTOM_GAME_STATUS.GAME_PREPARING;

    public myBetInfoList = [];

    private customTimeInterval: number = null;

    private prepareTimeout: number = null;

    private readyGoTimeout: number = null;


    // LIFE-CYCLE CALLBACKS:

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
                { id: 1, odds: 2 },
                { id: 2, odds: 4 },
                { id: 3, odds: 6 },
                { id: 4, odds: 14 },
                { id: 5, odds: 28 },
                { id: 6, odds: 50 },
            ]
        }

        const tableConfig = JSON.stringify(Config);

        const tableState = 5;
        const countDownTime = 15000;
        const currConsume = Math.floor(Math.random() * 1000);

        /** 缓存桌子id */
        HorseData.getInstance().tableId = 'mock123456';


        /**初始化历史记录 */
        this.UIResultCtrl.init(results);

        /** 同步服务器配置 */
        this.ansycServerSetting(tableConfig);

        // /** 更新当前的游戏状态 */
        // this.updateGameStatus(tableState, countDownTime);

        // /**更新当前回合数 */
        // this.headeAreaCtrl.setRound(currConsume);

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
            itemId: Math.floor(Math.random() * 6) + 1,
            playerId: dcodeIO.Long.fromNumber(GameMgr.getInstance().UserId + 1),
            playerAvatar: 'https://pic.hghggh.com/avatar/16546767826711200_800.gif'
        }
        this.guessGameStaticAck(msg);

        // const msgAck = { goldNum: dcodeIO.Long.fromNumber(Math.floor(Math.random() * 100000)) };

    }



    onLoad() {

        this.initSocketResponseListener();

        this.initUiInfoListener();


        this.loginGameHall();



        // cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);

        /** 添加回调 */
        // setRefreshGameView(this.onGameShow.bind(this));

        // // 隐藏并重置手指
        // this.hideAndResetFinger();

        // // 我的下注信息
        // this.myBetInfoList = [];

        // @ts-ignore
        cc.game.isInScene = true;

    }

    /**
     * 初始化长连接监听
     */
    initSocketResponseListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_STATUS_ACK, this.getTableInfo, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_STAKE_GAME_ACK, this.guessGameStaticAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE_ACK, this.updatePlayerPurseAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_RESULT_ACK, this.guessGameResultAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK, this.guessGamePlayerTodayWinAck, this);
    }

    /** 注册UI控制的事件 */
    initUiInfoListener() {
        cc.systemEvent.on('onSelectedCoinsChange', this.onSelectedCoinsChange, this);
        cc.systemEvent.on('onGameEnd', this.GameEnd, this);
        cc.systemEvent.on('hideWinMarkNode', this.hideWinMarkNode, this);
        cc.systemEvent.on('onBet', this.onBetAreaClick, this);

        // cc.systemEvent.on("ON_BET_CLICK", this.onBetBtnClick, this);

        // cc.systemEvent.on("ON_COIN_SELECT_CLICK", this.onCoinSelectClick, this);

        cc.systemEvent.on('COIN_FLY_BALANCE', this.coinFlyToBalance, this);
        cc.systemEvent.on('COIN_ROLL_TODAYWIN', this.coinTodayWinRoll, this);

        // COIN_FLY_BALANCE
        cc.systemEvent.on('netOffline', this.netWorkOfflineDisplay, this);

        cc.systemEvent.on('LOGIN_GAME_HALL', this.loginGameHall, this);

        cc.systemEvent.on('SHOW_TIPS', this.showTips, this);

        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);

        setRefreshGameView(this.onGameShow.bind(this));

        cc.game.on(cc.game.EVENT_HIDE, this.stopAllGameUiStatus, this);

    }

    onGameShow() {
        NetMgr.getInstance().reconnect();
        this.loginGameHall();
    }


    /** =============================接收socket数据开始============================================ */

    /** 获取桌子信息 */
    getTableInfo(msgAck) {
        Logger.logModel(msgAck, '桌子信息');

        // Logger.logModel(this,'this');

        const { countDownTime, currConsume, results, tableConfig, tableId, tableState, tableIndex, myStakeJson, otherStakeJson, gameId } = msgAck;

        if (gameId != GameMgr.getInstance().GameId) {
            return;
        }

        /** 缓存桌子id */
        HorseData.getInstance().tableId = tableId;

        /**初始化历史记录 */
        this.UIResultCtrl.init(results);

        /** 同步服务器配置 */
        this.ansycServerSetting(tableConfig);

        /** 更新当前的游戏状态 */
        this.updateGameStatus(tableState, countDownTime);

        /**更新当前回合数 */
        this.node.getComponent(TextNodeCtrl).updateDescribeRoundText(currConsume);

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
            // this.fruitAreaCtrl.setFruitSelectedById(itemId - 1);

            //获取被下注的按钮
            const btnNode = this.UIBetCtrl.getBetAreaItemNodeById(parseInt(itemId) - 1);

            const worldPos = btnNode.parent.convertToWorldSpaceAR(btnNode.position);

            const param = {
                worldPos: worldPos,
                betLevel: this.getBetLevel(betId),
                // callback: callback.bind(this)
            }

            // console.log(param, '111111111111111111111111111111111111');

            // 下注动画
            this.UIAnimationManager.coinBet(param);

            // 余额变动动画
            setTimeout(() => {
                this.UIAnimationManager.numberRollAnimation(this.UIAnimationManager.target_coin_balance, { number: HorseData.getInstance().balance, time: 0.6 });
            }, 100)

            const betInfo = {
                id: itemId - 1,
                betNumber: betCoin,
            }

            //展示我的下注金额
            this.UIBetCtrl.addMyBetNumber(betInfo);

        } else {
            Logger.logView('别人下注', betCoin);

            // cc.systemEvent.emit(EVENT_ANIMA.AVATAR,);
            this.UIAnimationManager.avatarAnimation(playerAvatar, itemId - 1, betCoin);

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
        // this.UIResultCtrl.updateRecordById(result);
        const hd = HorseData.getInstance();

        // 设置本局游戏的top3玩家
        hd.topList = rankItems;

        // 设置本局的获胜金币数
        hd.roundWinGold = winGold.toNumber();


        // 设置今日的赚的金币
        // hd.todayWinSet = 

        this.GameReadyGo(result, 17);

        // this.onGameStatusChange(GameStatus.GameStatusPlaying, { time: 3, start: 0, end: result, constCircle: 1 + 3 });

        // this.gameSettleTimeOut && clearTimeout(this.gameSettleTimeOut);

        // this.gameSettleTimeOut = setTimeout(() => {
        //     // 更新状态为结算状态
        //     this.onGameStatusChange(GameStatus.GameStatusSettle);

        //     // 更新水果历史记录
        //     this.recordAreaCtrl.updateRecordById(result);

        // }, 4.6 * 1000);

    }

    /** 接收今日赢得金币的信息 */
    guessGamePlayerTodayWinAck(msgAck) {
        Logger.logModel(msgAck, '接收今日赢得金币的信息');
        const { winGold } = msgAck;
        Logger.logModel(winGold.toNumber(), '今日赢得金币');

        const hd = HorseData.getInstance();
        // 第一次接收今日金币信息时直接展示
        if (!hd.todatWinGold) {
            const todayWin = winGold.toNumber();
            hd.todatWinGold = todayWin;
            this.node.getComponent(TextNodeCtrl).updateNumberTodayWinText();
            // this.headeAreaCtrl.setDisplayCoinWin(todayWin);
            // this.headeAreaCtrl.setDisplayCoinWin(Math.floor(Math.random() * 10000));
        } else {
            /** 缓存数据 为动画做准备 */
            hd.todatWinGold = winGold.toNumber();
        }
    }

    /** 获取账户余额信息 */
    updatePlayerPurseAck(msgAck) {
        Logger.logModel(msgAck, '获取账户余额信息');
        const { goldNum } = msgAck;
        Logger.logModel(goldNum.toNumber(), '账户余额信息');

        const hd = HorseData.getInstance();
        // 第一次接收今日金币信息时直接展示
        if (!hd.balance) {
            const balance = goldNum.toNumber();

            hd.balance = balance;

            this.node.getComponent(TextNodeCtrl).updateNumberBalanceText();
            // this.headeAreaCtrl.setDisplayCoinBalance(balance);
            // this.headeAreaCtrl.setDisplayCoinWin(Math.floor(Math.random() * 10000));
        } else {
            /** 缓存数据 为动画做准备 */
            hd.balance = goldNum.toNumber();
        }

        /** 缓存账户余额 */
        // GameData.getInstance().balance = goldNum.toNumber();


    }

    /** 发送下注信息 */
    sendBetInfo(betId, itemId) {
        const msg = new GuessGameStakeMsg();
        msg.betId = betId;
        msg.itemId = itemId;
        msg.tableId = HorseData.getInstance().tableId;
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


    /** =============================接收socket数据结束============================================ */



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
                { id: 1, odds: 2 },
                { id: 2, odds: 4 },
                { id: 3, odds: 6 },
                { id: 4, odds: 14 },
                { id: 5, odds: 28 },
                { id: 6, odds: 50 },
            ]
        }

        const tableConfig = JSON.stringify(Config);
        this.ansycServerSetting(tableConfig);
        // this.GameInvalid();
    }


    /** 更新下注信息 */
    updateBetInfo(myBetJson, otherBetJson) {


        Logger.logModel(myBetJson, 'myBetJson');
        Logger.logModel(otherBetJson, 'otherBetJson');

        if (myBetJson && myBetJson.length > 0) {
            // debugger
            const myBet = JSON.parse(myBetJson);
            this.UIBetCtrl.updateAllMyBetInfo(myBet);
        }

        if (otherBetJson && otherBetJson.length > 0) {
            const otherBet = JSON.parse(otherBetJson);
            this.UIBetCtrl.updateAllTotalBetInfo(otherBet);
        }

    }

    /** 更新游戏状态 */
    updateGameStatus(tableState, countDownTime) {

        const time = Math.floor(countDownTime / 1000);

        if (tableState == 5) {
            this.GameBet(time);
        } else {
            this.GamePrepare(true, time);
        }
    };


    /** 监听到按钮选择变化 */
    onSelectedCoinsChange(msg) {
        Logger.logBusiness(msg, '监听到按钮选择变化');
        // 设置当前的筹码选择信息
        this.currentSelectedCoinInfo = msg;
    }

    /** 下注区域被点击 */
    onBetAreaClick(param) {

        Logger.logBusiness(param, '下注区域被点击');

        // // 如果下注不合法，需要给玩家反馈 TODO
        const code = this.isBetValid();
        if (code == 1) {
            if (HorseData.getInstance().balance - this.currentSelectedCoinInfo.coinsNumber >= 0) {
                const betId = this.currentSelectedCoinInfo.id;
                const itemId = param.id.toString();
                this.sendBetInfo(betId, itemId);
            } else {
                // 防止出现余额显示错误的情况
                this.node.getComponent(TextNodeCtrl).updateNumberBalanceText();
                this.evokeChargePage();
            }
        } else {
            this.UIPromptManagerCtrl.showAnimationTips(code);
        }


    }



    // 判断下注是否合法
    isBetValid() {

        const isStatesValid = this.isStatesValid();
        if (isStatesValid != 1) {
            return isStatesValid;
        }
        return 1;
    }

    // 判断下注是否合法 TODO
    isStatesValid() {
        // debugger
        // 1 根据当前状态，返回不同的错误码,需要根据不同的错误码，提供相应的错误提示。
        if (this.GameStatus != GameStatus.GameStatusNormal) {
            return 1002;
        }
        return 1;
    }



    // 初始化下注信息
    initBetInfo(id) {
        console.log(this.currentSelectedCoinInfo);
        let betInfo = {
            betNumber: 0,
            id: id,
        };
        betInfo.betNumber += this.currentSelectedCoinInfo.coinsNumber;
        return betInfo;
    }

    /** 重置UI视图 */
    gameUiReset(Round, NewBetAmounts, AreaCoins, PlayerBet) {

        // const totalBet = GameData.areaCoinsAdapter(AreaCoins, NewBetAmounts);

        // const playerBet = GameData.areaCoinsAdapter(PlayerBet, NewBetAmounts);

        // /** 重置下注节点信息 */
        // this.betAreaControl.resetAllBetArea();

        // // 更新下注节点信息
        // this.betAreaControl.updateBetNodeInfo(totalBet, playerBet);

        // /** 更新回合的数字信息 */
        // cc.game.evtManager.emit('updateRoundText', Round);

        // // 更新用户余额信息
        // cc.game.evtManager.emit('updateBalanceText');

        // //更新用户今日赢数据
        // cc.game.evtManager.emit('updateTodayWinText');

    }

    /** =========================界面UI处理===================================== */
    // constructor

    /** 金币飞向余额 */
    coinFlyToBalance(basePos) {
        const param = {
            number: HorseData.getInstance().balance,
            time: 1,
            basePos: basePos,
        }
        this.UIAnimationManager.coinFly(param);
    }


    /** 今日赢得金币的滚动 */
    coinTodayWinRoll() {
        const param = {
            number: HorseData.getInstance().todatWinGold,
            time: 1,
        }
        this.UIAnimationManager.coinsTodayWinRoll(param);
    }


    /** 同步服务器配置 */
    ansycServerSetting(tableConfig) {
        const tableSetting = JSON.parse(tableConfig);
        const { guessBets, guessItems } = tableSetting;
        Logger.logModel(guessBets, '押注按钮配置');
        Logger.logModel(guessItems, '马的倍数');
        this.UIButtonCtrl.init(guessBets);
        /** 默认选中第二档 */
        if (!HorseData.getInstance().balance) {
            this.UIButtonCtrl.updateBtnInfoByIndex(1);
        }

        this.UIRateCtrl.initRate(guessItems);

        this.UIBetCtrl.initBetArea(guessItems);
    }


    /** 隐藏胜出者的标记节点 */
    hideWinMarkNode() {
        this.winMarkNode.active = false;
        this.raceLine.active = false;
    }


    /** 更新胜利者标记节点 */
    updateWinMarkNodePos(index) {

        this.winMarkNode.active = true;

        this.winMarkNode.position = winMarkPosList[index];

        this.winMarkNode.children[0].getComponent(cc.Label).string = '' + (index + 1);

    }

    /** 控制赛跑线 */
    raceLinePlaceCtrl(isStart) {

        if (isStart) {
            /** 设置赛跑线的起始位置 */
            this.raceLine.position = cc.v3(-270, -65);

            /**设置起跑线的层级 */
            this.raceLine.setSiblingIndex(1);

            /** 如果赛跑线是隐藏起来的，变成显示 */
            if (!this.raceLine.active) {
                this.raceLine.active = true;
            }

        } else {

            /** 设置终点线的位置 */
            this.raceLine.position = cc.v3(330, -65);

            /**设置起跑线的层级 */
            this.raceLine.setSiblingIndex(5);

            /** 显示终点线 */
            this.raceLine.active = true;
        }

    }


    /** 断网状态展示 */
    netWorkOfflineDisplay() {
        /** 游戏断网状态 */
        this.GameInvalid();
        /** 显示静态提示语 */
        this.UIPromptManagerCtrl.showStaticTips(1003);
    }


    /** =========================界面UI处理结束===================================== */

    /** */
    showTips() {
        this.UIPromptManagerCtrl.showAnimationTips(1002);
    }


    // 获取下注等级
    getBetLevel(id) {


        if (id === BET_LEVEL.ONE) {
            return BET_LEVEL_COINS.TINY;
        }
        if (id === BET_LEVEL.TWO) {
            return BET_LEVEL_COINS.SOME;
        }

        if (id === BET_LEVEL.THREE) {
            return BET_LEVEL_COINS.MEDIUM;
        }

        if (id === BET_LEVEL.FOUR) {
            return BET_LEVEL_COINS.HUGE;
        }

    }




    /** ==============================游戏状态管理=========================== */



    /** 设置自己的倒计时*/
    setCustomTimeInterval(time) {
        // let downTime = time;
        let count = time;
        this.label_number_time.string = count + 's';

        this.customTimeInterval && clearInterval(this.customTimeInterval);

        this.customTimeInterval = setInterval(() => {
            count--;
            this.label_number_time.string = count + 's';
            if (count <= 0) {
                this.customTimeInterval && clearInterval(this.customTimeInterval);
                this.stopTimeInterval();
            }
        }, 1000)

    }


    /** 执行数字的倒数 */
    runTimeInterval(timeLeft) {

        this.label_number_time.node.active = true;
        this.setCustomTimeInterval(timeLeft);

    }

    /** 隐藏数字倒数 */
    stopTimeInterval() {
        this.label_number_time.node.active = false;
        this.customTimeInterval && clearInterval(this.customTimeInterval);
    }


    /** 游戏状态模拟 */
    GameStatesMock() {
        // this.GamePrepare();

        // setTimeout(() => {
        //     this.GameGo();
        // }, 3000);

    }


    /** 游戏准备 */
    GamePrepare(isShowStatic = false, timeLeft = null) {

        Logger.logBusiness(timeLeft, '游戏准备');

        /**准备状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_PREPARING;

        this.GameStatus = GameStatus.GameStatusSettle;

        if (isShowStatic) {

            if (!timeLeft) {
                this.stopTimeInterval();
            } else {

                // 判断是否够时间执行下注前的预备动画
                if (timeLeft >= 2) {

                    const prepareTime = timeLeft - TIME_GAME_STATUS.TIME_START_FORECAST;
                    /** 执行飘屏的动画 */
                    this.UIMaskAreaCtrl.showFlyScreenStatic(0);

                    this.runTimeInterval(prepareTime);

                    // 如果已经开启定时器，先关闭再重开
                    this.prepareTimeout && clearTimeout(this.prepareTimeout);
                    /**预留2秒事件执行下注前提醒 */
                    this.prepareTimeout = setTimeout(() => { this.BeforeGameStart2Sec(); }, prepareTime * 1000);

                } else {
                    this.runTimeInterval(timeLeft);
                }

            }

        } else {
            const time = TIME_GAME_STATUS.TIME_PREPARING;
            this.runTimeInterval(time);
        }

        /** 重置赛跑线的位置 */
        this.raceLinePlaceCtrl(true);

        /** 如果手指动画在执行 隐藏手指动画 */
        this.UIMaskAreaCtrl.hideFinger();

        /** 重置下注界面数据 */
        this.UIBetCtrl.resetAllBetArea();

        /** 隐藏下注区域 */
        this.UIBetCtrl.node.active = false;

        /** 展示待机状态 */
        this.startHorseNode.active = true;

        /**摄像机复位 */
        this.UIRacingAreaCtrl.resetCamera();

        /**隐藏赛马的节点 */
        this.UIRacingAreaCtrl.node.active = false;
        this.UIRacingAreaCtrl.setRaceState(RaceState.END);

        /**移除静态tips */
        this.UIPromptManagerCtrl.removeStaticTips();

        /**设置背景静止 */
        this.UIBgRollCtrl.setBgRollState();

    }


    /** 下注开始前2秒 */
    BeforeGameStart2Sec() {
        /** 预备状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_START_FORECAST;
        const time = TIME_GAME_STATUS.TIME_START_FORECAST;
        this.runTimeInterval(time);
        /** 飘屏展示2秒前的状态 */
        this.UIMaskAreaCtrl.showFlySceenDynamic(1);

        /** 展示下注区域 */
        this.UIBetCtrl.node.active = true;

    }


    /** 游戏下注阶段 */
    GameBet(TimeLeft) {

        /**移除静态tips */
        this.UIPromptManagerCtrl.removeStaticTips();

        /**设置游戏状态 */
        this.GameStatus = GameStatus.GameStatusNormal;

        /**下注状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_BETTING;

        /** 展示倍率 */
        this.rateNode.active = true;

        /** 展示赛马等待状态的动画 */
        this.startHorseNode.active = true;

        /** 展示下注区域 */
        this.UIBetCtrl.node.active = true;

        /** 展示赛跑线 */
        this.raceLinePlaceCtrl(true);

        /** 开始倒计时 */
        this.runTimeInterval(TimeLeft);

        /** 执行手指动画 */
        this.UIMaskAreaCtrl.showFingerAnimation();

        /** 隐藏飘屏动画 */
        this.UIMaskAreaCtrl.hideFlyScreen();

        /**摄像机复位 */
        this.UIRacingAreaCtrl.resetCamera();

    }

    /**比赛准备开始 */
    GameReadyGo(Result, timeLeft) {

        /** 比赛开始状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_REDAY_GO;

        /** 服务器状态已经是结算状态 */
        this.GameStatus = GameStatus.GameStatusSettle;

        //展示倒计时 ：2s
        const time = TIME_GAME_STATUS.TIME_READY_GO;
        this.runTimeInterval(time);

        // 展示飘屏提示
        this.UIMaskAreaCtrl.showFlySceenDynamic(2);

        /** 如果手指动画在执行 隐藏手指动画 */
        this.UIMaskAreaCtrl.hideFinger();

        /** 重置下注界面数据 */
        this.UIBetCtrl.resetAllBetArea();

        /** 隐藏下注界面 */
        this.UIBetCtrl.node.active = false;

        this.readyGoTimeout && clearTimeout(this.readyGoTimeout);
        this.readyGoTimeout = setTimeout(() => {
            this.GameRacing(Result, timeLeft - time);
        }, time * 1000);

    }

    /** 比赛开始 */
    GameRacing(Result, timeLeft) {

        /** 比赛开始状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_RACING;

        /** 服务器状态已经是结算状态 */
        this.GameStatus = GameStatus.GameStatusSettle;

        this.raceLine.active = false;
        this.startHorseNode.active = false;
        this.rateNode.active = false;
        this.UIRacingAreaCtrl.node.active = true;
        this.UIBetCtrl.node.active = false;

        // 设置背景滚动
        this.UIBgRollCtrl.setBgRollState(false);

        /**设置赛跑事件 */
        this.UIRacingAreaCtrl.setTimeLeft(timeLeft);

        /** 赛跑开始 */
        this.UIRacingAreaCtrl.RacingStart(Result - 1);

    }

    /** 游戏结束*/
    GameEnd(winIndex, timeLeft) {

        if (CC_DEBUG) {
            Logger.logBusiness(winIndex, '跑赢的马的索引');
        }

        /** 比赛结果状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_RESULT;

        /** 服务器状态已经是结算状态 */
        this.GameStatus = GameStatus.GameStatusSettle;

        /** 游戏结束，kongzhi */
        this.raceLinePlaceCtrl(false);

        /**标记赢得赛道和赛马的编号 */
        this.updateWinMarkNodePos(winIndex);

        /** 停止背景滚动 */
        this.UIBgRollCtrl.setBgRollState(true);

        /** 游戏音效 TODO */

        // console.log(timeLeft, 'GameEnd');

        /** 弹出结果界面 和top3玩家 TODO */
        this.UIDrawResultCtrl.showResultDraw(this.GamePrepare.bind(this), timeLeft);

        /** 更新赛马结果 */
        this.UIResultCtrl.updateRecordById(winIndex);

        setTimeout(() => {
            /** 决出胜利者之后的操作 */
            this.UIRacingAreaCtrl.afterGetWinner();
        }, 2000);

    }


    /** 游戏断网 或处于非法状态 */
    GameInvalid() {

        /**非法状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_INVALID;

        /** 将游戏置为非法状态 */
        this.GameStatus = GameStatus.GameStatusInvalid;

        /**隐藏开始状态 */
        this.startHorseNode.active = false;

        /** 隐藏起跑线 */
        this.raceLine.active = false;

        /** 隐藏下注节点 */
        this.UIBetCtrl.node.active = false;

        /**隐藏跑马动画*/
        this.UIRacingAreaCtrl.node.active = false;

        /** 隐藏手指动画 */
        this.UIMaskAreaCtrl.hideFinger();

        /**隐藏飘屏 */
        this.UIMaskAreaCtrl.hideFlyScreen();

        /**重置滚动背景 */
        this.UIBgRollCtrl.resetBgPosition();

        /** 清除所有的抽屉状态 */
        this.UIDrawResultCtrl.clearDrawStatus();

        /** 隐藏时间 */
        this.stopTimeInterval();

        /** 隐藏倍率 */
        this.rateNode.active = false;

        this.customTimeInterval && clearInterval(this.customTimeInterval);

        /** 移除赛马动画 */
        this.readyGoTimeout && clearTimeout(this.readyGoTimeout);

    }

    /** 停止所有的游戏状态 */
    stopAllGameUiStatus() {


        Logger.logBusiness('stopAllGameUiStatus,停止所有的游戏状态');

        /**清除历史记录中的缓存数据 */
        this.UIResultCtrl.clearCacheHistory();

        /** 如果处在ready go状态直接停止该定时器 */
        this.readyGoTimeout && clearTimeout(this.readyGoTimeout);

        /** 停止赛马 */
        this.UIRacingAreaCtrl.RacingStop();

        this.GameInvalid();

    }


    /** ==============================游戏状态管理结束=========================== */


    /** ==========================app交互相关==================================== */

    /** 点击空白区域退出游戏 */
    leaveRoom() {
        // console.log('点击空白区域退出游戏');
        // cc.game.evtManager.emit('leaveRoom');
        evokeNativeToQuitGame();

    }

    /** 唤起充值界面 */
    evokeChargePage() {
        evokeNativeChargePage();
    }



    /** ==========================app交互相关结束==================================== */



    start() {

        // this.GameStatesMock();
        this.defaultDisplay();


    }

    // update (dt) {},
}
