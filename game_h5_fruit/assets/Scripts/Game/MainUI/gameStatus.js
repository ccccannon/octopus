// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { fruitPosList, GameStatus, BET_LEVEL, BET_LEVEL_COINS, MAX_BET_AREA } from "./constants.js"
import { convertPositionForList } from "../../Utils/utils_position.js"
import { nodeMoveWithPosList } from "../../Utils/utils_animation.js"

import MessageHandler from "../../Utils/MessageHandler";

import { CMD_LIST, FRUIT_LIST } from "../../Utils/MessageHandler";

import GameData from "./GameData";

import { evokeNativeChargePage } from '../../Utils/App_connect.js'


cc.Class({
    extends: cc.Component,

    properties: {
        finger: cc.Node,
        fruitArea: cc.Node,
        betArea: cc.Node,
        horesRaceLamp: cc.Node,
        promptLayerManager: cc.Node,
        resultDraw: cc.Node,
        gameManager: cc.Node,
        headeArea: cc.Node,
        recordArea: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // 隐藏并重置手指
        this.hideAndResetFinger();

        cc.systemEvent.on("ON_BET_CLICK", this.onBetBtnClick, this);

        cc.systemEvent.on("ON_COIN_SELECT_CLICK", this.onCoinSelectClick, this);

        this.horesRaceLampScript = this.horesRaceLamp.getComponent('horseRaceLamp');

        this.fruitAreaScript = this.fruitArea.getComponent('fruitArea');

        this.betAreaScript = this.betArea.getComponent('betArea');

        this.promptLayerManagerScript = this.promptLayerManager.getComponent('promptLayerManager');

        this.resultDrawScript = this.resultDraw.getComponent('draw_result_bet');

        this.gameManagerScript = this.gameManager.getComponent('SocketHandle');

        this.headeAreaScript = this.headeArea.getComponent('headArea');

        this.recordAreaScript = this.recordArea.getComponent('RecordArea');


        // 我的下注信息
        this.myBetInfoList = [];

        this.initSocketResponseListener();

        // console.log(this.gameManagerScript);

        cc.game.evtManager.on('updateGameStatus', this.onGameStatusChange, this);


    },


    /**
     * 初始化
     */
    initSocketResponseListener() {
        // 监听桌子信息
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.TABLE_INFO.pid_res, this.onRecieveTableInfo, this);
        // 监听游戏开始
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.GAME_START.pid_res, this.onRecieveGameStartInfo, this);
        // 监听游戏结算
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.GAME_SETTLE.pid_res, this.onRecieveGameSettleInfo, this);
        // 监听水果历史
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.FRUIT_HISTORY.pid_res, this.onRecieveFruitHistory, this);
        // 监听下注成功
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.BET.pid_res, this.onRecieveBetSuccess, this);
        // 监听在线人数广播
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.PLAYER_NUMBER.pid_res, this.onRecievePlayerNumber, this);

        // 监听其他玩家下注
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.BET_BROADCAST.pid_res, this.onRecieveOtherBetBroadcast, this);

        // 监听离开房间
        MessageHandler.addResListener(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.LEAVE_ROOM.pid_res, this.onRecieveLeaveHome, this);

        // 监听用户余额
        MessageHandler.addResListener(CMD_LIST.PLAYER_BALANCE.mid, CMD_LIST.PLAYER_BALANCE.pid_res, this.onRecieveUserBalance, this);
    },




    // 手指的移动动画
    fingerMoveAnimation() {
        let posList = convertPositionForList(this.node, this.fruitArea, fruitPosList);
        nodeMoveWithPosList(this.finger, posList);
    },

    // 隐藏手指 重置状态
    hideAndResetFinger() {
        this.finger.stopAllActions();
        this.finger.active = false;
    },

    // 显示手指并执行手指动画
    showFinger() {
        this.finger.stopAllActions();
        this.finger.active = true;
        this.fingerMoveAnimation();
    },


    // 重置游戏状态
    resetGameStateToStart() {
        this.betAreaScript.resetBetArea();
        this.fruitAreaScript.resetNodeListInfo();
    },

    // test
    gameStatusTestFun(msg) {
        // console.log(msg);
        // console.log(this);
    },


    // 接收服务器下发的桌子信息数据
    onRecieveTableInfo(msg) {

        const { AreaCoins, BetAmounts, BetAmountsLevel, Multiple,
            NewBetAmounts, PlayerBet, PlayerBetLimit, PlayersCount,
            ProductID, Result, Status, TimeLeft,
            User, TodayWinSet, Rebet, Round } = msg;
        // console.log('桌子信息');
        // console.log('AreaCoins', AreaCoins);
        // console.log('BetAmounts', BetAmounts);
        // console.log('BetAmountsLevel', BetAmountsLevel);
        // console.log('Multiple', Multiple);
        // console.log('NewBetAmounts', NewBetAmounts);
        // console.log('PlayerBet', PlayerBet);
        // console.log('PlayerBetLimit', PlayerBetLimit);
        // console.log('PlayersCount', PlayersCount);
        // console.log('ProductID', ProductID);
        // console.log('Result', Result);
        // console.log('Status', Status);
        // console.log('TimeLeft', TimeLeft);
        // console.log('User', User);
        // console.log('TodayWinSet', TodayWinSet);
        // console.log('Rebet', Rebet);

        // 将桌子的信息保存起来
        GameData.setTabelInfo(msg);

        // 将今日获利信息保存起来
        GameData.setTodayWinSet(TodayWinSet);

        // 设置玩家上局是否押注
        // GameData.setRebetStatus(Rebet);

        // 重置下注区域所有数值
        this.betAreaScript.resetBetArea();


        // 根据桌子的数据初始化 UI界面
        this.gameReset(TodayWinSet, Round, NewBetAmounts, AreaCoins, PlayerBet);



        // 根据游戏状态更新当前的Ui视图

        if (Status === GameStatus.GameStatusPlaying || Status === GameStatus.GameStatusNormal) {
            this.onGameStatusChange(GameStatus.GameStatusInit, { time: TimeLeft });
        } else {
            this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 0 });
        }

        // this.resetGameBaseOnGameStatus(Status, { time: TimeLeft });


    },

    // 接收游戏开始的数据
    onRecieveGameStartInfo(msg) {

        // console.log('接收游戏开始的数据');
        // console.log(msg);

        const { TimeLeft, Round } = msg;

        // 更新回合数据
        this.headeAreaScript.setRound(Round);

        // 更新ui视图
        this.onGameStatusChange(GameStatus.GameStatusNormal, { time: TimeLeft });


        // this.isLimiting = false;



    },

    // 接收游戏结算的数据   
    onRecieveGameSettleInfo(msg) {

        // console.log('接收游戏结算的数据');

        // console.log(msg);

        const { TimeLeft, Result, RandomNum, Frees, BestWinners, SeatSettles, SettleAmount, TodayWinSet } = msg;

        // console.log("TimeLeft", TimeLeft)
        // console.log("Result", Result)
        // console.log("RandomNum", RandomNum)
        // console.log("Frees", Frees)
        // console.log("BestWinners", BestWinners)
        // console.log("SeatSettles", SeatSettles)
        // console.log("SettleAmount", SettleAmount)
        // console.log("SettleAmount", TodayWinSet)

        // 设置本局游戏的top3玩家
        GameData.setBestWinners(BestWinners);

        // 设置本局的获胜金币数
        GameData.setSettleAmount(SettleAmount);

        // 设置今日的赚的金币
        GameData.setTodayWinSet(TodayWinSet)

        this.onGameStatusChange(GameStatus.GameStatusPlaying, { time: 3, start: 0, end: Result, constCircle: RandomNum + 3 });

        this.gameSettleTimeOut && setTimeout(this.gameSettleTimeOut);

        this.gameSettleTimeOut = setTimeout(() => {
            // 更新状态为结算状态
            this.onGameStatusChange(GameStatus.GameStatusSettle);

            // 更新水果历史记录
            this.recordAreaScript.updateRecordById(Result);


        }, 6.6 * 1000);

        // {
        //     "TimeLeft": 15,
        //     "Result": 5,
        //     "RandomNum": 1
        // }
    },

    // 接收用户的余额
    onRecieveUserBalance(msg) {

        const { balance } = msg.parsedMsg;

        // console.log('接收用户的余额', balance);

        GameData.setBalance(balance);

        // this.isBeting = false;

        // 更新余额
        // cc.game.evtManager.emit('updateBalance', GameData.Balance);

        // cc.game.evtManager.onceEmit('updateBalanceOnce',balance);

        // this.headeAreaScript.setDisplayCoinBalance(balance);

    },

    // 接收水果的历史记录
    onRecieveFruitHistory(msg) {
        // console.log('接收水果的历史记录');
        // console.log(msg);
        const { Results } = msg
        // 初始化水果的记录
        this.recordAreaScript.init(Results);
    },

    // 接收用户下注成功的信息
    onRecieveBetSuccess(msg) {
        // console.log('接收用户下注成功的信息', msg);
        // console.log(msg);
        const { Area, Index, TotalBet, Rewards, ProductID, CurrencyPair, Code } = msg;

        if (Code != 0) {
            // 提示下注失败
            // console.log('下注失败');

            // this.isBeting = false;

            GameData.setBalance(GameData.Balance + this.currentBetCoins.coinsNumber);

            this.promptLayerManagerScript.showAnimationTips(3002, 0);

            return;
        }

        const callback = function (val) {
            // console.log(val, 'callback showMyBetNumber');
            this.betAreaScript.showMyBetNumber(val);

            cc.game.evtManager.emit('updateBalance', GameData.Balance);
        }

        // 将玩家的下注状态设置为1；
        GameData.setRebetStatus(1);

        let param = {};

        param.id = Area;

        // 将水果显示为选中状态
        this.fruitAreaScript.setFruitSelectedById(param.id);

        const btnNode = this.betAreaScript.getBetBtnById(Area)

        const worldPos = btnNode.parent.convertToWorldSpaceAR(btnNode.position);

        param.worldPos = worldPos;

        param.betLevel = this.getBetLevel();

        // const balance = GameData.Balance - this.currentBetCoins.coinsNumber;

        // GameData.setBalance(balance);

        const balance = GameData.Balance;

        param.balance = balance;

        param.betNumber = this.currentBetCoins.coinsNumber;

        param.totalBet = TotalBet[Area];

        param.callback = callback.bind(this);

        // 下注动画
        cc.systemEvent.emit('ANIMA_COIN_BET', param);

    },

    //  接收其他用户的下注广播
    onRecieveOtherBetBroadcast(msg) {
        // console.log(msg);
        // console.log('接收其他用户的下注广播');
        const { AreaCoins, TotalBet, UID, Avatar } = msg;

        // console.log(AreaCoins);

        //  是否需要限制动画的播放  TODO:这种按照事件来取数据的方式需要进一步优化 
        if (this.isNeedLimited) {
            this.limitedAnimation(Avatar, UID, AreaCoins, TotalBet);

        } else {
            const [jettonArea] = this.getBetBroadcastDetail(AreaCoins);
            // 执行其他玩家下注的展示动画
            cc.game.evtManager.emit('userAvatarFly', Avatar, UID, jettonArea, TotalBet[jettonArea]);
        }
    },

    onRecievePlayerNumber(msg) {
        // 根据参加的人数，决定是否需要限制展示其他玩家下注的动画
        const { Num } = msg;
        // console.log('本局参加人数', Num);
        if (Num <= 20) {
            this.isNeedLimited = false;
        } else {
            this.isNeedLimited = true;
        }

    },

    /** 接收到离房间的响应 */
    onRecieveLeaveHome(msg) {
        // console.log(msg, '收到离开房间的回调');

        if(CC_DEBUG){
            console.log('收到离开房间的响应','onRecieveLeaveHome');
        }

        cc.game.evtManager.emit('killSocket');
;

    },



    /** 限制动画的展示次数 */
    limitedAnimation(Avatar, UID, AreaCoins, TotalBet) {

        if (this.isLimiting) {
            return;
        }

        const [jettonArea] = this.getBetBroadcastDetail(AreaCoins);

        // 执行其他玩家下注的展示动画
        cc.game.evtManager.emit('userAvatarFly', Avatar, UID, jettonArea, TotalBet[jettonArea]);

        this.isLimiting = true;

        if (this.limitedAnimaInterval) {
            return;
        }

        window.requestAnimationFrame(() => {
            this.isLimiting = false;
        })

        // this.limitedAnimaInterval = setInterval(() => {

        // }, 150);

    },




    // 获取其他玩家的下注信息详情
    getBetBroadcastDetail(coins) {

        if (coins instanceof Array) {
            let len = coins.length;
            let iLen = null;
            let jettonArea = null,
                jettonIndex = null;

            for (let i = 0; i < len; i++) {

                let item = coins[i].Element;

                if (!item) {
                    console.error('the array type is error');
                    break;
                }
                iLen = item.length;
                for (let j = 0; j < iLen; j++) {

                    if (item[j] !== 0) {
                        jettonIndex = j;
                        jettonArea = i;
                        break;
                    }

                }

                if (jettonArea !== null && jettonIndex !== null) {

                    // console.log([jettonArea, jettonIndex]);

                    return [jettonArea, jettonIndex];
                }
            }

        }


    },


    /** 点击空白区域退出游戏 */
    leaveRoom() {
        // console.log('点击空白区域退出游戏');
        cc.game.evtManager.emit('leaveRoom');
    },


    /** 唤起充值界面 */
    evokeChargePage() {
        evokeNativeChargePage();
    },



    // 游戏状态变化后相应的视图变化
    onGameStatusChange(state, msg) {

        this.GameStatus = state;

        // 非法状态
        if (this.GameStatus === GameStatus.GameStatusInvalid) {
            this.promptLayerManagerScript.showStaticTips(1003);
            return;

        }

        if (this.GameStatus === GameStatus.GameStatusInit) {

            // 移除静态提示
            this.promptLayerManagerScript.removeStaticTips();

            // 显示手指转圈
            this.showFinger();

            const { time } = msg;

            // 设置跑马灯    
            this.horesRaceLampScript.betTimer(time);

            // 执行水果下移动画
            this.fruitAreaScript.beforeGuessAnimation();
            return;

        }

        // 可下注状态
        if (this.GameStatus === GameStatus.GameStatusNormal) {

            // 初始化下注状态
            // this.isBeting = false;

            // 显示手指转圈
            this.showFinger();

            // 移除静态提示
            this.promptLayerManagerScript.removeStaticTips();

            const { time } = msg;
            // 设置跑马灯倒计时
            this.horesRaceLampScript.betTimer(time);

            //重置每个水果的可下注总额 
            this.betAreaScript.resetTotalNumber();

            // 执行水果下移动画
            this.fruitAreaScript.beforeGuessAnimation();
            return;

        }

        // 计算结果
        if (this.GameStatus === GameStatus.GameStatusPlaying) {

            setTimeout(() => {
                // 隐藏手指
                this.hideAndResetFinger();

                // 移除静态提示
                this.promptLayerManagerScript.removeStaticTips();

                // 清空下注信息
                this.myBetInfoList = [];

                const { time, start, end, constCircle } = msg;

                // 水果机旋转动画
                this.fruitAreaScript.spinAnimation(start, end, constCircle);

                // 跑马灯3秒倒计时
                this.horesRaceLampScript.betTimer(time);
            }, 2000)

            return;

        }

        // 将结算状态进行拆分 5s展示结果 
        if (this.GameStatus === GameStatus.GameStatusSettle) {

            // 弹出结果界面
            this.resultDrawScript.showResultDraw(function () {
                this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 2 });
            }.bind(this));

            return;
        }

        // 准备状态
        if (this.GameStatus === GameStatus.GameStatusPrepare) {

            const { time } = msg;

            this.betAreaScript.resetBetArea();

            this.fruitAreaScript.resetNodeListInfo();

            // 移除静态提示
            this.promptLayerManagerScript.removeStaticTips();

            // 设置跑马灯3秒倒计时
            this.horesRaceLampScript.betTimer(time);

            // 提示游戏准备开始 
            this.promptLayerManagerScript.showStaticTips(1001);

            this.fruitDownTimeOut && clearTimeout(this.fruitDownTimeOut);

            this.fruitDownTimeOut = setTimeout(() => {
                // 执行水果下移动画
                this.fruitAreaScript.beforeGuessAnimation();
            }, 1000);

            return;
        }

    },



    gameReset(TodayWinSet, Round, NewBetAmounts, AreaCoins, PlayerBet) {
        // 设置今日获利
        this.headeAreaScript.setDisplayCoinWin(TodayWinSet);

        // 更新回合数据
        this.headeAreaScript.setRound(Round);

        // 渲染下注总额
        const totalBetList = GameData.areaCoinsAdapter(AreaCoins, NewBetAmounts);
        // console.log(totalBetList, '下注总额 数据重新组装');

        // 渲染我的下注信息
        const myBetList = GameData.areaCoinsAdapter(PlayerBet, NewBetAmounts);
        // console.log(myBetList, '我的下注信息 数据重新组装');

        // 渲染水果的选中状态
        this.fruitAreaScript.updateFruitSelectStatus(myBetList);

        this.betAreaScript.updateBetInfo(totalBetList, myBetList);

        setTimeout(() => {
            cc.game.evtManager.emit('updateBalance', GameData.Balance);
        }, 100);

    },

    testHoresRaceLamp() {
        // const randomTime = Math.floor(Math.random() * 15);
        const randomTime = 15;
        this.showFinger();
        this.fruitAreaScript.resetNodeListInfo();
        this.horesRaceLampScript.betTimer(randomTime, () => {
            this.hideAndResetFinger();
            this.horesRaceLampScript.threeSecondTimer();
            this.fruitAreaScript.spinAnimation(0, 0, 5);
        });
    },

    // 
    onBetBtnClick(param) {


        if (this.isBeting) {

            // console.log(this.isBeting, '下注失败');
            return;
        }

        // this.isBeting = true;

        // 如果下注不合法，需要给玩家反馈 TODO

        let code = this.isValid(param);

        if (code != 1) {
            // console.log(code);

            // 当前状态下有静态提示在，不展示动态提示。
            if (this.promptLayerManagerScript.ShowList.length > 0) {
                return;
            }

            if (code == 1002 || code == 1003 || code == 1004) {
                this.promptLayerManagerScript.showAnimationTips(1002, 0);
            } else {
                this.promptLayerManagerScript.showAnimationTips(2001, 0);
            }
            return;
        }


        // 判断余额是否能完成此次下注
        // console.log(GameData.Balance);


        if (GameData.Balance >= this.currentBetCoins.coinsNumber) {
            GameData.setBalance(GameData.Balance - this.currentBetCoins.coinsNumber);
        } else {
            // 提示余额不足
            this.promptLayerManagerScript.showAnimationTips(3001, 0);

            // 调起充值界面
            setTimeout(() => {
                evokeNativeChargePage();
            }, 1000)
            return;
        }



        // if (GameData.TempBalance < this.currentBetCoins.coinsNumber) {

        //       // 提示余额不足
        //       this.promptLayerManagerScript.showAnimationTips(3001, 0);

        //       // 调起充值界面
        //       setTimeout(() => {
        //           evokeNativeChargePage();
        //       }, 1000)

        //     return;

        // } else {
        //     GameData.setTempBalance(GameData.TempBalance - this.currentBetCoins.coinsNumber);
        // }


        // if (GameData.Balance < this.currentBetCoins.coinsNumber) {
        //     console.log('余额不足');

        //     // 提示余额不足
        //     this.promptLayerManagerScript.showAnimationTips(3001, 0);

        //     // 调起充值界面
        //     setTimeout(() => {
        //         evokeNativeChargePage();
        //     }, 1000)
        //     return;
        // }


        // console.log(param, 'onBetBtnClick');





        // SocketHandle.sendFruitMessage()
        // 下注请求
        // message GameMsgBetReq{		
        // 	uint32 Area = 1; // 下注区域
        // 	uint32 Index = 2; // 下注筹码角标
        // }



        const betInfo = {
            Area: param.id,
            Index: this.currentBetCoins.id,
        };

        this.gameManagerScript.sendFruitMessage(FRUIT_LIST.BET.pid_req, betInfo);



    },

    // 
    onCoinSelectClick(params) {
        // console.log('[gameStatus onCoinSelectClick] params', params);
        // 当前选择的下注金币数额；
        this.currentBetCoins = params;
    },



    // 判断下注是否合法
    isValid(param) {

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
    },

    // 判断下注是否合法 TODO
    isStatesValid() {

        // 1 根据当前状态，返回不同的错误码,需要根据不同的错误码，提供相应的错误提示。
        if (this.GameStatus != GameStatus.GameStatusNormal) {

            // 非法
            if (this.GameStatus === GameStatus.GameStatusInvalid) {
                return 1001;
            }
            // if (this.GameStatus === GameStatus.GameStatusPlaying) {
            //     return 1002;
            // }
            // 结算
            if (this.GameStatus === GameStatus.GameStatusSettle) {
                return 1003;
            }
            // 准备中
            if (this.GameStatus === GameStatus.GameStatusPrepare) {
                return 1004;
            }

        }
        return 1;
    },

    // 判断当前押注是否合法
    isCurrentBetValid(param) {


        if (this.myBetInfoList.length <= 0) {

            let betInfo = this.initBetInfo(param.id);
            this.myBetInfoList.push(betInfo);

            return 1;
        }

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

    },

    // 初始化下注信息
    initBetInfo(id) {
        // console.log(this.currentBetCoins);
        let betInfo = { betNumber: 0 };
        betInfo.id = id;
        betInfo.betNumber += this.currentBetCoins.coinsNumber;
        return betInfo;
    },


    // 获取下注等级
    getBetLevel() {
        if (this.currentBetCoins) {

            if (this.currentBetCoins.id === BET_LEVEL.ONE) {
                return BET_LEVEL_COINS.TINY;
            }
            if (this.currentBetCoins.id === BET_LEVEL.TWO) {
                return BET_LEVEL_COINS.SOME;
            }

            if (this.currentBetCoins.id === BET_LEVEL.THREE) {
                return BET_LEVEL_COINS.MEDIUM;
            }

            if (this.currentBetCoins.id === BET_LEVEL.FOUR) {
                return BET_LEVEL_COINS.HUGE;
            }
        } else {
            return BET_LEVEL_COINS.TINY;
        }
    },


    onDestroy() {
        this.horesRaceLampScript = null;
        this.fruitAreaScript = null;
    },


    start() {
        // setTimeout(() => {
        //     this.showFinger();
        // }, 2000)
        // this.showFinger();
        this.onGameStatusChange(GameStatus.GameStatusPrepare, { time: 10 });
    },

    // update (dt) {},
});
