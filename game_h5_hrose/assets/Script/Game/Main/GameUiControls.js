import { CMD_LIST, HORSE_LIST } from "../../Utils/MessageHandler";

import MessageHandler from "../../Utils/MessageHandler";

import { winMarkPosList, TIME_GAME_STATUS, GameStatus, BET_LEVEL_COINS, BET_LEVEL, CUSTOM_GAME_STATUS } from "../Constants";
import GameData from "./GameData";

import { evokeNativeChargePage } from '../../Utils/App_connect'

import { raceState } from "./UiControl/RacingAreaCtrl";


cc.Class({
    extends: cc.Component,

    properties: {
        raceLine: cc.Node,
        startHorseNode: cc.Node,
        rateNode: cc.Node,
        racingNode: cc.Node,
        winMarkNode: cc.Node,
        bgRollNode: cc.Node,
        betAreaNode: cc.Node,
        node_GameApp: cc.Node,
        label_number_time: cc.Label,
        node_mask_area: cc.Node,
        node_draw: cc.Node,
        node_result: cc.Node,
        node_prompt_Manager: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.initSocketResponseListener();
        this.initUiInfoListener();

        /** 赛跑动画控制脚本 */
        this.RacingAreaCtrl = this.racingNode.getComponent('RacingAreaCtrl');

        /**背景动画控制脚本 */
        this.BgRollCtrl = this.bgRollNode.getComponent('BgRollCtrl');

        /** 下注区域控制脚本 */
        this.betAreaControl = this.betAreaNode.getComponent('UIBetAreaCtrl');

        /** 长连接控制脚本 */
        this.socketControl = this.node_GameApp.getComponent('SocketHandle');

        /**文本节点控制脚本 */
        this.textNodeControl = this.node.getComponent('TextNodeCtrl');

        /** 遮罩区域的动画控制脚本 */
        this.maskAreaControl = this.node.getComponent('MaskNodeUIAnimationCtrl');

        /** 抽屉弹窗的控制脚本 */
        this.drawControl = this.node_draw.getComponent('draw_result_bet');

        /** 之前轮次的比赛结果控制脚本 */
        this.resultControl = this.node_result.getComponent('UIResultAreaCtrl');

        /** tip提示语控制脚本 */
        this.tipsControl = this.node_prompt_Manager.getComponent('promptLayerManager');

    },

    /**
     * 初始化长连接监听
     */
    initSocketResponseListener() {
        // 监听桌子信息
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.TABLE_INFO.pid_res, this.onRecieveTableInfo, this);

        // 监听游戏开始
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.GAME_START.pid_res, this.onRecieveGameStartInfo, this);

        // 监听游戏结算
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.GAME_SETTLE.pid_res, this.onRecieveGameSettleInfo, this);

        // 监听赛马结果历史
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.HORSE_HISTORY.pid_res, this.onRecieveHorseHistory, this);

        // 监听下注成功
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.BET.pid_res, this.onRecieveBetSuccess, this);

        // 监听在线人数广播
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.PLAYER_NUMBER.pid_res, this.onRecievePlayerNumber, this);

        // 监听其他玩家下注
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.BET_BROADCAST.pid_res, this.onRecieveOtherBetBroadcast, this);

        // 监听离开房间
        MessageHandler.addResListener(CMD_LIST.HORSE_RECV_MSG.mid, HORSE_LIST.LEAVE_ROOM.pid_res, this.onRecieveLeaveHome, this);

        // 监听用户余额
        MessageHandler.addResListener(CMD_LIST.PLAYER_BALANCE.mid, CMD_LIST.PLAYER_BALANCE.pid_res, this.onRecieveUserBalance, this);
    },

    /** 注册UI控制的事件 */
    initUiInfoListener() {
        cc.game.evtManager.on('onSelectedCoinsChange', this.onSelectedCoinsChange, this);
        cc.game.evtManager.on('onGameEnd', this.GameEnd, this);
        cc.game.evtManager.on('hideWinMarkNode', this.hideWinMarkNode, this);
        cc.game.evtManager.on('onBet', this.onBetAreaClick, this);
        cc.game.evtManager.on('onNetWork', this.netWorkDisplay, this);
        cc.game.evtManager.on('stopAllGameStatus', this.stopAllGameUiStatus, this);
    },


    /** 监听到按钮选择变化 */
    onSelectedCoinsChange(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log(msg, '监听到按钮选择变化');
        // 设置当前的筹码选择信息
        this.currentSelectedCoinInfo = msg;
    },

    /** 下注区域被点击 */
    onBetAreaClick(param) {

        console.log('[GameUiControls] onBetAreaClick(param)', param,);

        // 如果下注不合法，需要给玩家反馈 TODO

        let code = this.isValid();

        if (code != 1) {
            // console.log(code);

            if (code == 1003) {
                this.tipsControl.showAnimationTips(1002, 0);
            } else {
                this.tipsControl.showAnimationTips(2001, 0);
            }
            return;
        }


        // 判断余额是否能完成此次下注
        // console.log(GameData.Balance);


        if (GameData.Balance >= this.currentSelectedCoinInfo.coinsNumber) {
            GameData.setBalance(GameData.Balance - this.currentSelectedCoinInfo.coinsNumber);
        } else {

            /** 及时更新余额信息 */
            cc.game.evtManager.emit('updateBalanceText');

            // 提示余额不足
            this.tipsControl.showAnimationTips(3001, 0);

            // 调起充值界面
            setTimeout(() => {
                evokeNativeChargePage();
            }, 1000)
            return;
        }

        // SocketHandle.sendFruitMessage()
        // 下注请求
        // message GameMsgBetReq{		
        // 	uint32 Area = 1; // 下注区域
        // 	uint32 Index = 2; // 下注筹码角标
        // }

        const betInfo = {
            Area: param.index,
            Index: this.currentSelectedCoinInfo.id,
        };

        this.socketControl.sendFruitMessage(HORSE_LIST.BET.pid_req, betInfo);

    },

    /** 判断下注是否合法 */
    isValid() {

        const isStatesValid = this.isStatesValid();
        if (isStatesValid != 1) {
            return isStatesValid;
        }
        return 1;
    },


    /** 判断状态是否合法 */
    isStatesValid() {

        // 1 根据当前状态，返回不同的错误码,需要根据不同的错误码，提供相应的错误提示。
        if (this.GameStatus != GameStatus.GameStatusPlaying) {
            // 非法
            if (this.GameStatus === GameStatus.GameStatusInvalid) {
                return 1001;
            }
            // 结算
            if (this.GameStatus === GameStatus.GameStatusSettle) {
                return 1003;
            }

        }
        return 1;
    },




    /** 重置UI视图 */
    gameUiReset(Round, NewBetAmounts, AreaCoins, PlayerBet) {

        const totalBet = GameData.areaCoinsAdapter(AreaCoins, NewBetAmounts);

        const playerBet = GameData.areaCoinsAdapter(PlayerBet, NewBetAmounts);

        /** 重置下注节点信息 */
        this.betAreaControl.resetAllBetArea();

        // 更新下注节点信息
        this.betAreaControl.updateBetNodeInfo(totalBet, playerBet);

        /** 更新回合的数字信息 */
        cc.game.evtManager.emit('updateRoundText', Round);

        // 更新用户余额信息
        cc.game.evtManager.emit('updateBalanceText');

        //更新用户今日赢数据
        cc.game.evtManager.emit('updateTodayWinText');

    },

    /** =========================界面UI处理===================================== */


    /** 隐藏胜出者的标记节点 */
    hideWinMarkNode() {
        this.winMarkNode.active = false;
        this.raceLine.active = false;
    },


    /** 更新胜利者标记节点 */
    updateWinMarkNodePos(index) {

        this.winMarkNode.active = true;

        this.winMarkNode.position = winMarkPosList[index];

        this.winMarkNode.children[0].getComponent(cc.Label).string = '' + (index + 1);

        // this.winNode.position = ;

    },

    /** 控制赛跑线 */
    raceLinePlaceCtrl(isStart) {

        if (isStart) {
            /** 设置赛跑线的起始位置 */
            this.raceLine.position = cc.v2(-270, -65);

            /**设置起跑线的层级 */
            this.raceLine.setSiblingIndex(1);

            /** 如果赛跑线是隐藏起来的，变成显示 */
            if (!this.raceLine.active) {
                this.raceLine.active = true;
            }


        } else {

            /** 设置终点线的位置 */
            this.raceLine.position = cc.v2(330, -65);

            /**设置起跑线的层级 */
            this.raceLine.setSiblingIndex(5);

            /** 显示终点线 */
            this.raceLine.active = true;
        }

    },


    /** 断网状态展示 */
    netWorkDisplay() {
        /** 游戏断网状态 */
        this.GameInvalid();
    },


    /** =========================界面UI处理结束===================================== */



    /** =============================接收socket数据开始============================================ */

    /** 接收桌子的信息 */
    onRecieveTableInfo(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('接收桌子的信息', msg);
        // 将桌子的信息保存起来
        GameData.setTabelInfo(msg);


        // GameData.setTodayWinSet(TodayWinSet);

        // 重置下注区域所有数值
        // this.betAreaScript.resetBetArea();

        const { Result, PlayerBet, NewBetAmounts, AreaCoins, TotalBet, Rount, Status, TimeLeft, TodayWon } = msg;

        // 将今日获利信息保存起来
        GameData.setTodayWinSet(TodayWon);


        // 根据桌子的数据初始化 UI界面
        this.gameUiReset(Rount, NewBetAmounts, AreaCoins, PlayerBet, TodayWon);


        // 根据游戏状态更新当前的Ui视图

        if (Status === GameStatus.GameStatusPlaying) {
            this.GameBet(TimeLeft);
        } else {
            /**如果没有处于可玩状态 就显示为准备状态 */
            this.GamePrepare(true, TimeLeft);

        }

        // if (Status === GameStatus.GameStatusPlaying || Status === GameStatus.GameStatusNormal) {
        //     this.onGameStatusChange(GameStatus.GameStatusInit, { time: TimeLeft });
        // } else {
        //     this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 0 });
        // }
    },


    /**接收游戏开始的信息 */
    onRecieveGameStartInfo(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('接收游戏开始的信息', msg);
        const { Rount, TimeLeft } = msg;

        // 更新游戏轮次数
        cc.game.evtManager.emit('updateRoundText', Rount);

        this.GameBet(TimeLeft);
    },

    /**接收游戏结算的信息 */
    onRecieveGameSettleInfo(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('接收游戏结算的信息', msg);
        const { Result, TimeLeft, BestWinners, SettleAmount, TodayWon } = msg;
        /**将游戏状态置为结算状态 */
        this.GameStatus = GameStatus.GameStatusSettle;

        // 设置本局游戏的top3玩家
        GameData.setBestWinners(BestWinners);

        // 设置本局的获胜金币数
        GameData.setSettleAmount(SettleAmount);

        // 设置今日的赚的金币
        GameData.setTodayWinSet(TodayWon)

        /** 进入比赛前的准备 */
        this.scheduleOnce(() => {
            this.GameReadyGo(Result, TimeLeft - TIME_GAME_STATUS.TIME_READY_GO);
        }, 2)
    },

    /** 接收赛马的历史信息 */
    onRecieveHorseHistory(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('接收赛马的历史信息', msg);

        const { Result } = msg;
        this.resultControl.init(Result);
    },

    /** 监听下注成功的信息 */
    onRecieveBetSuccess(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('监听下注成功的信息', msg);

        const { Area, Index, TotalBet, Rewards, ProductID, CurrencyPair, Code } = msg;

        if (Code != 0) {
            // 提示下注失败
            // console.log('下注失败');
            GameData.setBalance(GameData.Balance + this.currentSelectedCoinInfo.coinsNumber);
            this.tipsControl.showAnimationTips(3002, 0);

            return;
        }

        const callback = function (val) {

            this.betAreaControl.updateBetSuccess(val);

            cc.game.evtManager.emit('updateBalanceText', GameData.Balance);
        }

        // 将玩家的下注状态设置为1；
        GameData.setRebetStatus(1);

        let param = {};

        param.index = Area;

        const btnNode = this.betAreaControl.getBetAreaItemNodeById(Area)

        const mybetNode = btnNode.getChildByName('mybetNode');

        const worldPos = btnNode.convertToWorldSpaceAR(mybetNode.position);

        param.worldPos = worldPos;

        param.betLevel = this.getBetLevel();

        // const balance = GameData.Balance - this.currentSelectedCoinInfo.coinsNumber;

        // GameData.setBalance(balance);

        const balance = GameData.Balance;

        param.balance = balance;

        param.number = this.currentSelectedCoinInfo.coinsNumber;

        param.totalBet = TotalBet[Area];

        param.callback = callback.bind(this);

        // 下注动画
        cc.systemEvent.emit('ANIMA_COIN_BET', param);
    },

    /** 监听玩家人数信息 */
    onRecievePlayerNumber(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('监听玩家人数信息', msg);
    },

    /** 接收其他人广播信息 */
    onRecieveOtherBetBroadcast(msg) {

        // cc.game.DebugMgr && cc.game.DebugMgr.log('接收其他人广播信息', msg);

        const { AreaCoins, Avatar, TotalBet, UID } = msg;

        const [areaIndex] = GameData.getBetBroadcastDetail(AreaCoins);
        // console.log(area,index);

        cc.game.evtManager.emit('userAvatarFly', Avatar, UID, areaIndex, TotalBet[areaIndex]);

    },


    /** 监听离开房间的信息 */
    onRecieveLeaveHome(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('监听离开房间的信息', msg);



        /** 判断当前的状态 如果已经进入结算状态，将UI重置为等待游戏 */
        if (this.GameStatus === GameStatus.GameStatusSettle) {

            /**隐藏时间 */
            this.stopTimeInterval();

            this.stopAllGameUiStatus();


            /** 将Ui置为准备状态*/
            this.GamePrepare();
        }

        /**请求杀死长连接 */
        cc.game.evtManager.emit('killSocket');
    },

    /** 监听用户的余额信息 */
    onRecieveUserBalance(msg) {
        cc.game.DebugMgr && cc.game.DebugMgr.log('监听用户的余额信息', msg);

        // 更新用户的余额
        const { balance } = msg.parsedMsg;

        // console.log('接收用户的余额', balance);

        GameData.setBalance(balance);

    },

    /** =============================接收socket数据结束============================================ */





    // 获取下注等级
    getBetLevel() {
        if (this.currentSelectedCoinInfo) {

            if (this.currentSelectedCoinInfo.id === BET_LEVEL.ONE) {
                return BET_LEVEL_COINS.TINY;
            }
            if (this.currentSelectedCoinInfo.id === BET_LEVEL.TWO) {
                return BET_LEVEL_COINS.SOME;
            }

            if (this.currentSelectedCoinInfo.id === BET_LEVEL.THREE) {
                return BET_LEVEL_COINS.MEDIUM;
            }

            if (this.currentSelectedCoinInfo.id === BET_LEVEL.FOUR) {
                return BET_LEVEL_COINS.HUGE;
            }
        } else {
            return BET_LEVEL_COINS.TINY;
        }
    },




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

    },


    /** 执行数字的倒数 */
    runTimeInterval(timeLeft) {

        this.label_number_time.node.active = true;
        this.setCustomTimeInterval(timeLeft);

    },

    /** 隐藏数字倒数 */
    stopTimeInterval() {

        this.label_number_time.node.active = false;
        this.customTimeInterval && clearInterval(this.customTimeInterval);

    },


    /** 游戏状态模拟 */
    GameStatesMock() {
        this.GamePrepare();

        setTimeout(() => {
            this.GameGo();
        }, 3000);

    },


    /** 游戏准备 */
    GamePrepare(isShowStatic = false, timeLeft = null) {
        /**准备状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_PREPARING;

        if (isShowStatic) {

            if (!timeLeft) {
                this.stopTimeInterval();
            } else {

                // 判断是否够时间执行下注前的预备动画
                if (timeLeft >= 2) {

                    const prepareTime = timeLeft - TIME_GAME_STATUS.TIME_START_FORECAST - 1;
                    /** 执行飘屏的动画 */
                    this.maskAreaControl.showFlyScreenStatic(0);

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
        this.maskAreaControl.hideFinger();

        /** 重置下注界面数据 */
        this.betAreaControl.resetAllBetArea();

        /** 隐藏下注区域 */
        this.betAreaNode.active = false;

        /** 展示待机状态 */
        this.startHorseNode.active = true;

        /**摄像机复位 */
        this.RacingAreaCtrl.resetCamera();

        /**隐藏赛马的节点 */
        this.racingNode.active = false;
        this.RacingAreaCtrl.setRaceState(raceState.END);

        /**移除静态tips */
        this.tipsControl.removeStaticTips();

        /**设置背景静止 */
        this.BgRollCtrl.setBgRollState();


    },


    /** 下注开始前2秒 */
    BeforeGameStart2Sec() {
        /** 预备状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_START_FORECAST;
        const time = TIME_GAME_STATUS.TIME_START_FORECAST;
        this.runTimeInterval(time);
        /** 飘屏展示2秒前的状态 */
        this.maskAreaControl.showFlySceenDynamic(1);

        /** 展示下注区域 */
        this.betAreaNode.active = true;

    },


    /** 游戏下注阶段 */
    GameBet(TimeLeft) {

        /**移除静态tips */
        this.tipsControl.removeStaticTips();

        /**设置游戏状态 */
        this.GameStatus = GameStatus.GameStatusPlaying;

        /**下注状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_BETTING;

        /** 展示倍率 */
        this.rateNode.active = true;

        /** 展示赛马等待状态的动画 */
        this.startHorseNode.active = true;

        /** 展示下注区域 */
        this.betAreaNode.active = true;

        /** 展示赛跑线 */
        this.raceLinePlaceCtrl(true);

        /** 开始倒计时 */
        this.runTimeInterval(TimeLeft);

        /** 执行手指动画 */
        this.maskAreaControl.showFingerAnimation();

        /** 隐藏飘屏动画 */
        this.maskAreaControl.hideFlyScreen();

        /**摄像机复位 */
        this.RacingAreaCtrl.resetCamera();

    },

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
        this.maskAreaControl.showFlySceenDynamic(2);

        /** 如果手指动画在执行 隐藏手指动画 */
        this.maskAreaControl.hideFinger();

        /** 重置下注界面数据 */
        this.betAreaControl.resetAllBetArea();

        /** 隐藏下注界面 */
        this.betAreaNode.active = false;

        this.readyGoTimeout && clearTimeout(this.readyGoTimeout);
        this.readyGoTimeout = setTimeout(() => {
            this.GameRacing(Result, timeLeft - time);
        }, time * 1000);

    },

    /** 比赛开始 */
    GameRacing(Result, timeLeft) {

        /** 比赛开始状态 */
        this.customGameStatus = CUSTOM_GAME_STATUS.GAME_RACING;

        /** 服务器状态已经是结算状态 */
        this.GameStatus = GameStatus.GameStatusSettle;

        this.raceLine.active = false;
        this.startHorseNode.active = false;
        this.rateNode.active = false;
        this.racingNode.active = true;
        this.betAreaNode.active = false;
        // 设置背景滚动
        this.BgRollCtrl.setBgRollState(false);

        /**设置赛跑事件 */
        this.RacingAreaCtrl.setTimeLeft(timeLeft);

        /** 赛跑开始 */
        this.RacingAreaCtrl.RacingStart(Result);



    },

    /** 游戏结束*/
    GameEnd(winIndex, timeLeft) {

        if (CC_DEBUG) {
            // console.log(winIndex, '跑赢的马的索引');
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
        this.BgRollCtrl.setBgRollState(true);

        /** 游戏音效 TODO */

        // console.log(timeLeft, 'GameEnd');

        /** 弹出结果界面 和top3玩家 TODO */
        this.drawControl.showResultDraw(this.GamePrepare.bind(this), timeLeft);

        /** 更新赛马结果 */
        this.resultControl.updateRecordById(winIndex);

        setTimeout(() => {
            /** 决出胜利者之后的操作 */
            this.RacingAreaCtrl.afterGetWinner();
        }, 2000);

    },


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
        this.betAreaNode.active = false;

        /**隐藏跑马动画*/
        this.racingNode.active = false;

        /** 隐藏时间 */
        this.stopTimeInterval();

        /** 隐藏倍率 */
        this.rateNode.active = false;

        /** 显示静态提示语 */
        this.tipsControl.showStaticTips(1003);

    },

    /** 停止所有的游戏状态 */
    stopAllGameUiStatus() {

        /** 如果处在ready go状态直接停止该定时器 */
        this.readyGoTimeout && clearTimeout(this.readyGoTimeout);

        /** 停止赛马 */
        this.RacingAreaCtrl.RacingStop();

        /** 隐藏时间 */
        this.stopTimeInterval();

    },


    /** ==============================游戏状态管理结束=========================== */


    /** ==========================app交互相关==================================== */

    /** 点击空白区域退出游戏 */
    leaveRoom() {
        // console.log('点击空白区域退出游戏');
        cc.game.evtManager.emit('leaveRoom');


    },

    /** 唤起充值界面 */
    evokeChargePage() {
        evokeNativeChargePage();
    },



    /** ==========================app交互相关结束==================================== */



    start() {

        // this.GameStatesMock();

    },

    // update (dt) {},
});
