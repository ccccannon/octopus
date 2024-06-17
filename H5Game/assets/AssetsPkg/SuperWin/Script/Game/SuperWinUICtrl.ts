// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgCmdConstant } from "../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../Script/Managers/NetMgr";
import { adjustWebviewzIndex, evokeNativeToQuitGame, loadAssetFinished, queryUserMICState, queryUserMICStateRespond, setRefreshGameView } from "../../../../Script/Utils/AppInterface";
import { CreateGameTableMsg } from "../../../../Script/msg/CreateGameTableMsg";
import { DismissGameTableMsg } from "../../../../Script/msg/DismissGameTableMsg";
import { GameTableBeginMsg } from "../../../../Script/msg/GameTableBeginMsg";
import { IntoGameHallMsg } from "../../../../Script/msg/IntoGameHallMsg";
import { JoinGameTableMsg } from "../../../../Script/msg/JoinGameTableMsg";
import { PlayerLeaveTableMsg } from "../../../../Script/msg/PlayerLeaveTableMsg";
import { PlayerView, RotaryStatus } from "../Constant";
import UIIndexCtrl from "./GUI/UIIndexCtrl";
import UIPrompRuleCtrl from "./GUI/UIPrompRuleCtrl";
import { UIRotaryCtrl } from "./GUI/UIRotaryCtrl";
import PromptCtrl from "./PromptCtrl";
import { SuperWinData } from "./SuperWinData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SuperWinUICtrl extends cc.Component {

    @property(UIIndexCtrl)
    IndexCtrl: UIIndexCtrl = null;

    @property(UIRotaryCtrl)
    RotaryCtrl: UIRotaryCtrl = null;
    // LIFE-CYCLE CALLBACKS:

    @property(PromptCtrl)
    PromptCtrl: PromptCtrl = null;


    /** 添加长链接事件监听   */
    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_SUPER_WIM_GAME_HALL_ACK, this.MsgIntoSuperWinGameHallAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.MsgIntoGameTableAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GAME_PLAYER_LEAVE_TABLE_ACK, this.MsgGamePlayerLeaveTabelAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GAME_PLAYER_INFO_CHANGE_ACK, this.MsgGamePlayerInfoChangeAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_SUPER_WIN_GAME_OVER_RESULT_ACK, this.MsgSuperWinGameOverResultAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK, this.msgSuperWinTableOverResultAck, this);
    }


    /** 移除长链接事件监听   */
    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_SUPER_WIM_GAME_HALL_ACK, this.MsgIntoSuperWinGameHallAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.MsgIntoGameTableAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_GAME_PLAYER_LEAVE_TABLE_ACK, this.MsgGamePlayerLeaveTabelAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_GAME_PLAYER_INFO_CHANGE_ACK, this.MsgGamePlayerInfoChangeAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_SUPER_WIN_GAME_OVER_RESULT_ACK, this.MsgSuperWinGameOverResultAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK, this.msgSuperWinTableOverResultAck, this);

    }


    protected onLoad(): void {

        // @ts-ignore 标志位，防止断线重连后重新加载整个场景
        cc.game.isInScene = true;
        cc.systemEvent.on('LOGIN_GAME_HALL', this.onGameShow, this);
        cc.systemEvent.on('quitGame', this.packUpGame, this);
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);

        /** 告知app本地资源加载完成 */
        if (!CC_PREVIEW) {
            loadAssetFinished();
        }

        this.addSocketEventListener();

        /** 接收当前麦位状态信息 */
        queryUserMICStateRespond(this.getMICOpenCloseState.bind(this));

        /** 提供给app唤醒游戏时调用 */
        setRefreshGameView(this.onGameShow.bind(this));

        /** 调整游戏界面层级 */
        // if (!CC_PREVIEW) {
        //     adjustWebviewzIndex('1', 800);
        // }

    }

    protected onDestroy(): void {

        this.removeSocketEventListener();
        cc.systemEvent.off('LOGIN_GAME_HALL', this.onGameShow, this);
        cc.systemEvent.off('quitGame', this.packUpGame, this);
        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);


    }

    /** 麦位的开关状态 */
    getMICOpenCloseState(res: string) {
        res = JSON.parse(res);
        // console.log('接收到的麦位状态信息', res);
        // console.log(this.viewList_mic, '麦位状态标识');
        // console.log(this);
        Logger.logBusiness(res, '麦位信息');
        const swd = SuperWinData.getInstance();
        // @ts-ignore
        if (res.isOnMIC == "1") {
            swd.isOnMic = true;
        } else {
            swd.isOnMic = false;
        }
    }

    /** 游戏进入前台 */
    onGameShow() {
        this.loginGameHall();
        if (!CC_PREVIEW) {
            queryUserMICState();
        }
    }

    /** 游戏进入后台 */
    onGameHide() {
        this.RotaryCtrl.stopRotaryAnimation();
    }

    /** 开启游戏 */
    onSuperWinGameStart() {
        this.startGame();
    }


    /** 加入游戏 */
    onSuperWinJoinGame() {
        this.joinInGame();
    }

    /*************************** socket 相关逻辑开始   */

    /** 登录游戏大厅 */
    loginGameHall() {
        const gm = GameMgr.getInstance();
        const intoGameHall = new IntoGameHallMsg();
        intoGameHall.userId = dcodeIO.Long.fromNumber(gm.UserId);
        intoGameHall.gameId = gm.GameId;
        intoGameHall.roomUid = dcodeIO.Long.fromNumber(gm.RoomUid);
        MsgDispatcher.sendMsg(intoGameHall);
        console.log('登录游戏大厅', gm.UserId, gm.Token, gm.Language, gm.GameId);
        // debugger
        Logger.logBusiness(intoGameHall, '登录游戏大厅');

    }


    /** 创建转盘游戏桌子 */
    createSuperWinGameTable() {
        const gm = GameMgr.getInstance();
        const swd = SuperWinData.getInstance();
        const cMsg = new CreateGameTableMsg();
        cMsg.gameId = gm.GameId;
        cMsg.isOnMic = swd.isOnMic;
        cMsg.roomUid = dcodeIO.Long.fromNumber(gm.RoomUid);
        cMsg.playerMaxNum = swd.gameMaxNum;
        cMsg.subGamePlayJsonFields = JSON.stringify({ bringGold: swd.ticket });

        MsgDispatcher.sendMsg(cMsg);

        Logger.logBusiness(cMsg, '创建桌子发送的信息');

    }

    /** 玩家离开当前座位 */
    playerLeaveTable() {
        const pMsg = new PlayerLeaveTableMsg();
        const swd = SuperWinData.getInstance();
        pMsg.leaveFlag = 5;
        pMsg.tableId = swd.tabelId;
        MsgDispatcher.sendMsg(pMsg);
        Logger.logBusiness(pMsg, '玩家离开桌子');
    }

    /** 开始游戏 */
    startGame() {
        const swd = SuperWinData.getInstance();
        const sMsg = new GameTableBeginMsg();
        sMsg.tableId = swd.tabelId;
        MsgDispatcher.sendMsg(sMsg);
        Logger.logBusiness(sMsg, '开始游戏');
    }

    /** 加入游戏 */
    joinInGame() {

        const swd = SuperWinData.getInstance();

        const jMsg = new JoinGameTableMsg();
        // 2 :坐下
        jMsg.intoType = 2;
        jMsg.tableId = swd.tabelId;
        MsgDispatcher.sendMsg(jMsg);
        Logger.logBusiness(jMsg, '加入游戏');

    }

    /** 解散桌子 */
    dismissGameTable() {
        const dMsg = new DismissGameTableMsg();
        dMsg.tableId = SuperWinData.getInstance().tabelId;
        MsgDispatcher.sendMsg(dMsg);
        Logger.logBusiness(dMsg, '解散桌子')
    }


    /** 接收桌子的消息 */
    MsgIntoGameTableAck(msgAck) {
        Logger.logBusiness(msgAck, '接收桌子的响应');

        const { tableInfo, gamePlayers, tableId, subGamePlayJsonFields, isTableStart, playersNum } = msgAck;

        const swd = SuperWinData.getInstance();

        const userId = GameMgr.getInstance().UserId;

        swd.tableInfo = JSON.parse(tableInfo);

        swd.removeOutPlayer(gamePlayers);
        // swd.gamePlayer = gamePlayers;

        swd.sortGamePlayerByJoinTime();

        swd.tabelId = tableId;

        swd.ticket = JSON.parse(subGamePlayJsonFields).bringGold;

        /**  同步服务器最大人数 */
        // swd.gameMaxNum = playersNum;

        swd.updateCoinLevel();

        /**缓存本局游戏的金币等级 */
        this.IndexCtrl.cacheLastCoinLevel(swd.coinLevel);

        // totalBringGold

        this.RotaryCtrl.renderGamePlayer(swd.gamePlayers);

        this.RotaryCtrl.updateJackpot();

        this.RotaryCtrl.showTableHosterTag();

        this.RotaryCtrl.winnerCtrl.hideView();

        /** 重置开始按钮的展示 */
        this.RotaryCtrl.notAuotStartViewDisplay();

        this.RotaryCtrl.OutCtrl.hideView();

        /** 如果游戏已经开始 默认进入观察者模式 否则进入 */
        let status;
        if (isTableStart) {
            status = PlayerView.Watch;
            /** 将游戏置为开始状态 */
            swd.isGameStart = true;
            /** 如果游戏处于开始状态，将整个转盘的位置下移 */
            this.RotaryCtrl.moveDownRotary();
            /** 游戏开始后隐藏倒计时 */
            this.RotaryCtrl.hideTimeCountDown();
            // this.RotaryCtrl.restTimeCountDown();

        } else {
            /**将游戏置为未开始状态 */
            swd.isGameStart = false;

            /** 转盘回到最开始的位置 */
            this.RotaryCtrl.resetRotaryDefaultPos();

            /** 判断当前用户的游戏状态 */
            status = swd.judgePlayerGameStatus(userId);

        }
        this.RotaryCtrl.btnDisplayByPlayerStatus(status);

        Logger.logBusiness(swd, '转盘游戏数据');

        this.showRotaryPrompt();


    }

    /** 登录转盘游戏的返回值 */
    MsgIntoSuperWinGameHallAck(msgAck) {
        Logger.logBusiness(msgAck, '登录转盘游戏的返回');
        this.showIndexPrompt();
    }


    /** 玩家离开座位响应 */
    MsgGamePlayerLeaveTabelAck(msgAck) {
        Logger.logBusiness(msgAck, '玩家离开桌子响应');
        const { leaveFlag, playerId } = msgAck;
        const swd = SuperWinData.getInstance();
        if (leaveFlag == 5) {
            const userId = GameMgr.getInstance().UserId;
            const res = swd.isPlayerInList(playerId.toNumber());
            if (typeof res != 'boolean') {
                this.RotaryCtrl.removePlayerFromRotaryById(res);
                if (userId == playerId.toNumber()) {
                    this.RotaryCtrl.btnDisplayByPlayerStatus(PlayerView.UnParticipation);
                }
                swd.removePlayerInfoByIndex(res, false);
                this.RotaryCtrl.updateJackpot();

                if (!swd.isCanAutoStart()) {
                    this.RotaryCtrl.notAuotStartViewDisplay();
                    this.RotaryCtrl.stopAutoStartInterval();
                }
                this.RotaryCtrl.showTableHosterTag();

                /** 判断当前用户的游戏状态 更新当前的按钮展示状态 */
                const status = swd.judgePlayerGameStatus(userId);
                this.RotaryCtrl.btnDisplayByPlayerStatus(status);

                /** 更新奖池 */
                // this.RotaryCtrl.updateJackpot();
            }

        } else if (leaveFlag == 3) {
            /** 强制刷新界面 TODO:隐藏游戏界面 */
            // window.location.reload();          
            if (!swd.isGameStart && this.RotaryCtrl.rotaryContainer.active) {
                this.PromptCtrl.showDisslovePrompt();
            } else {
                swd.isGameFinished = true;
            }
        }

    }


    /** 玩家数据发生变化 */
    MsgGamePlayerInfoChangeAck(msgAck) {

        const { gamePlayer } = msgAck;

        const { playerId } = gamePlayer;
        const swd = SuperWinData.getInstance();

        const res = swd.isPlayerInList(playerId.toNumber());

        if (typeof res == 'boolean' && !res) {
            Logger.logBusiness(msgAck, '新玩家加入');
            /** 同步数据 */
            swd.gamePlayers.push(gamePlayer);

            swd.sortGamePlayerByJoinTime();

            // const isFirst = swd.gamePlayer.length == 1

            this.RotaryCtrl.renderGamePlayer(swd.gamePlayers);

            /** 显示桌子的主持者tag */
            this.RotaryCtrl.showTableHosterTag();

            if (swd.isCanAutoStart()) {
                this.RotaryCtrl.autoStartViewDisplay();
                this.RotaryCtrl.autoStartTimeDown();
            }

            /** 将玩家加入到转盘 */
            // this.RotaryCtrl.addUserItemToRatary(gamePlayer, isFirst);

            /** 更新奖池的金额 */
            this.RotaryCtrl.updateJackpot();
        } else {
            // Logger.logBusiness(msgAck, '当前玩家被淘汰');
            // debugger;
            /** 替换当前的数据 */
            // swd.gamePlayer.splice(res as number, 1, gamePlayer);


            /** TODO 更新当前的玩家信息 */

        }

    }

    /** 单局游戏结果 */
    MsgSuperWinGameOverResultAck(msgAck) {

        Logger.logBusiness(msgAck, '单局游戏结果');
        const { outPlayerId } = msgAck;
        const swd = SuperWinData.getInstance();
        const idx = SuperWinData.getInstance().isPlayerInList(outPlayerId.toNumber());
        swd.updatePlayerInfoByPlayerId(outPlayerId.toNumber());

        if (!swd.isGameStart) {
            swd.isGameStart = true;
            // this.RotaryCtrl.targetId = idx as number;
            /** 移除隐藏在移除节点的节点 */
            this.RotaryCtrl.removeNode.removeAllChildren();
            this.RotaryCtrl.btnDisplayByPlayerStatus(PlayerView.Watch);
            this.RotaryCtrl.hideTimeCountDown();
            this.RotaryCtrl.moveDownRotary();
            setTimeout(() => {
                this.RotaryCtrl.rotaryLaunch(idx as number);
            }, 300);

        } else {
            this.RotaryCtrl.rotaryLaunch(idx as number);
        }

    }

    /** 桌子结算结果 */
    msgSuperWinTableOverResultAck(msgAck) {
        Logger.logBusiness(msgAck, '桌子结算结果');
        const { bigWinGold, luckGold, luckPlayerId, winPlayerId } = msgAck;
        const swd = SuperWinData.getInstance();
        swd.luckyerId = luckPlayerId.toNumber();
        swd.luckyerWinGold = luckGold.toNumber();
        swd.winnerGold = bigWinGold.toNumber();
        swd.winnerId = winPlayerId.toNumber();
        // this.RotaryCtrl.showWinnerView();
    }


    /*************************** socket 相关逻辑结束  */

    /** 游戏创建 */
    onRotaryGameCreate() {
        // this.IndexCtrl.hideView();
        // this.RotaryCtrl.showView();

        this.createSuperWinGameTable();
    }

    /** 获取当前玩家的麦位状态 */
    getPlayerMIC() {

    }


    /**  显示创建弹窗 */
    showCreateGamePrompt() {
        // this.RotaryCtrl.
        this.RotaryCtrl.hideView();
        this.IndexCtrl.showView();
    }

    /** 显示转盘弹窗 */
    showRotaryPrompt() {
        this.IndexCtrl.hideView();
        this.RotaryCtrl.showView();
    }

    /** 显示金额选择界面 */
    showIndexPrompt() {
        this.IndexCtrl.showView();
        this.RotaryCtrl.hideView();
    }

    /** 收起游戏 */
    packUpGame() {
        Logger.logBusiness('点击收起游戏');
        evokeNativeToQuitGame();
    }


    start() {
        this.loginGameHall();
        if (!CC_PREVIEW) {
            queryUserMICState();
        }
    }

    // update (dt) {}
}
