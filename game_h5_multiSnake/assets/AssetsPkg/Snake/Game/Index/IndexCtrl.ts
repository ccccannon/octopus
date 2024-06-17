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
import { loadAssetFinished, adjustWebviewzIndex, evokeNativeToQuitGame } from "../../../../Script/Utils/App_connect";
import { handleTranslate, numberFormat } from "../../../../Script/Utils/utils_common";
import { GetGameNickAvatarMsg } from "../../../../Script/msg/GetGameNickAvatarMsg";
import { IntoGameHallMsg } from "../../../../Script/msg/IntoGameHallMsg";
import { SingleGameStatusMsg } from "../../../../Script/msg/SingleGameStatusMsg";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Lang/index";
import Index_RankCtrl from "./Index_RankCtrl";
import PromptHelpCtrl from "./PromptHelpCtrl";

const { ccclass, property } = cc._decorator;
@ccclass
export default class IndexCtrl extends cc.Component {

    @property(cc.Label)
    text_best_total: cc.Label = null;

    @property(cc.Label)
    text_best_personal: cc.Label = null;

    @property(cc.Label)
    text_describe_start: cc.Label = null;

    @property(cc.Node)
    node_start: cc.Node = null;

    @property(cc.Node)
    node_loading: cc.Node = null;

    @property(cc.ProgressBar)
    progressNode: cc.ProgressBar = null;
    // LIFE-CYCLE CALLBACKS:
    @property(cc.Label)
    pecent: cc.Label = null;

    @property(Index_RankCtrl)
    rank: Index_RankCtrl = null;

    @property(PromptHelpCtrl)
    help: PromptHelpCtrl = null;

    public isOppesite: boolean = false;

    onLoad() {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);

        this.addSocketEventListener();

        this.preloadScene();

        /** 提示app调整层级 */
        // adjustWebviewzIndex()

        /** 调整进度条的加载方向 */
        this.adjustProgressDir();

        // if (!CC_PREVIEW) {
        /** 加载结束 */
        loadAssetFinished();
        /** 设置webview为低层级 */
        this.noticeAppAdjustzIndex("0");
        // }

    }

    protected onDestroy(): void {
        this.removeSocketEventListener();
    }


    /** 添加长链接事件监听 */
    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();

        // 获取ai数据列表
        net.addResponeHandler(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR_ACK, this.getAiNickAvatarList, this);
        // snake登录大厅
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_SNAKE_GAME_HALL_ACK, this.onIntoSnakeGameHallAck, this);
        // 进入桌子 
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onGetGameStatus, this);
    }

    /** 移除长链接事件监听 */
    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR_ACK, this.getAiNickAvatarList, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_SNAKE_GAME_HALL_ACK, this.onIntoSnakeGameHallAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onGetGameStatus, this);
    }

    /**===================socket业务开始======================= */


    /** 获取ai蛇的名字和头像 */
    getAiNickAvatarList(msgAck) {

        // console.log(msgAck, '获取ai蛇的名字和头像');

        const { avatars, nicks } = msgAck;
        // const sdm = SnakeDataMgr.getInstance();
        // sdm.AiSnkaeAvatar = avatars;
        // sdm.AiSnkaeName = nicks;
        // sdm.composeAiSnakeInfo();

        // SnakeDataMgr.getInstance().AiSnkaeAvatar = avatars;
        // SnakeDataMgr.getInstance().AiSnkaeName = nicks;
        // SnakeDataMgr.getInstance().composeAiSnakeInfo();

        GameMgr.getInstance().Avatars = avatars;
        GameMgr.getInstance().Nicks = nicks;

        Logger.logNet(msgAck, '获取ai蛇的名字和头像');
        // debugger;

        // console.log(SnakeDataMgr.getInstance(), '111111111111111111111111111');
    }

    /** 登录snake大厅响应 */
    onIntoSnakeGameHallAck(msgAck) {
        const { maxRecord, myRecord } = msgAck;
        Logger.logNet(msgAck, "登录snake大厅响应");
        // SnakeDataMgr.getInstance().PersonalBest = myRecord.toNumber();
        // SnakeDataMgr.getInstance().WeeklyBest = maxRecord.toNumber();

        this.updatePersonalBestScore(myRecord.toNumber());
        this.updateWeeklyBestScore(maxRecord.toNumber());
    }

    /** 登录贪吃蛇游戏大厅 */
    onIntoSnakeGameHall() {
        const intoGameHall = new IntoGameHallMsg();
        const gm = GameMgr.getInstance();
        intoGameHall.userId = dcodeIO.Long.fromNumber(gm.UserId);
        intoGameHall.gameId = gm.GameId;
        MsgDispatcher.sendMsg(intoGameHall);
    }



    /** 获取ai蛇信息 */
    sendMsgGetGameNickAvatarMsg() {
        // console.log('发送获取ai蛇的信息');
        // const sdm = SnakeDataMgr.getInstance();
        const gm = GameMgr.getInstance();
        const msg = new GetGameNickAvatarMsg();
        msg.gameId = gm.GameId;
        // msg.userId = dcodeIO.Long.fromNumber(gm.UserId);
        // msg.gameId = 40000;
        Logger.logModel(msg, '组装成的发射信息');
        MsgDispatcher.sendMsg(msg);
    }

    /** 接收游戏状态 */
    onGetGameStatus(msgAck) {
        Logger.logNet(msgAck, '接收游戏状态');
        const { subGamePlayJsonFields, tableId } = msgAck;
        const gm = GameMgr.getInstance();
        gm.TableId = tableId;
        gm.Props = JSON.parse(subGamePlayJsonFields).props[0];

        Logger.logNet(gm.Props, '道具信息');
        this.jumpToGameScene();

    }


    /** 发送游戏开始状态 */
    sendGameStartMsg() {
        const msg = new SingleGameStatusMsg();
        const gm = GameMgr.getInstance()
        msg.gameId = gm.GameId;
        msg.userId = dcodeIO.Long.fromNumber(gm.UserId);
        msg.gameNo = 0;
        msg.statusType = 0;
        // msg.tableId = gdm.getLocalTableId(gdm.UserId) + '';
        // MsgDispatcher.sendMsg(msg);
       this.jumpToGameScene();
    }

    /**===================socket业务结束======================= */

    /** 调整进度条 */
    adjustProgressDir() {
        const language = GameMgr.getInstance().Language;
        const node = this.progressNode.node;
        if (language == LANGUAGE_TYPE.ARAB) {
            node.angle = 180;
            node.scaleY = -1;
            this.isOppesite = true;
        } else {
            node.angle = 0;
            node.scaleY = 1;
            this.isOppesite = false;
        }
    }

    /** 提示app调整webview层级 */
    noticeAppAdjustzIndex(str: string) {
        adjustWebviewzIndex(str, this.node_start.height);
    }


    /** 预加载场景 */
    preloadScene() {
        cc.director.preloadScene('MultiSnake');
    }

    /** 跳转到游戏场景 */
    jumpToGameScene() {

        // this.sendGameStartMsg();

        const winsize = cc.view.getFrameSize();
        this.pecent.string = '0%';
        this.progressNode.progress = 0;
        // cc.tween(this.node_start).to(0.5, { angle: -90 }).call(() => {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
        this.node_loading.active = true;
        this.node_start.active = false;
        this.node_loading.scale = winsize.width / winsize.height;
        /** 调整webview层级 */
        // if (!CC_PREVIEW) {

        // }

        // }).start();



        cc.director.preloadScene('MultiSnake', (completedCount: number, totalCount: number, item: any) => {
            const porgress = completedCount / totalCount;
            const num = Math.floor(porgress * 100);
            if (this.progressNode.progress > porgress) {
                return;
            }
            this.progressNode.progress = porgress;
            if (this.isOppesite) {
                this.pecent.string = "%" + num;
            } else {
                this.pecent.string = num + "%";
            }

        }, () => {

            // if (!CC_PREVIEW) {
            /** 通知app关闭礼物特效 */
            // noticeAPPOpenCloseEffect("0");
            // }

            setTimeout(() => {
                cc.director.loadScene('MultiSnake');
            }, 500)
        });

        this.noticeAppAdjustzIndex("1");
    }


    /** 更新周最长数据 */
    updateWeeklyBestScore(score) {
        // const sdm = SnakeDataMgr.getInstance();
        const gm = GameMgr.getInstance();
        // const wbs = sdm.WeeklyBest;
        const str = numberFormat(score);
        let lastStr: string = null;
        if (gm.Language != LANGUAGE_TYPE.ARAB) {
            lastStr = handleTranslate(str, language.en.weeklyBest);
        } else {
            lastStr = handleTranslate(str, language.ar.weeklyBest);
        }
        this.text_best_total.string = lastStr;
    }

    /** 更新本人最长数据 */
    updatePersonalBestScore(score) {
        // const sdm = SnakeDataMgr.getInstance();
        const gm = GameMgr.getInstance();
        // const pbs = sdm.PersonalBest;
        const str = numberFormat(score);
        let lastStr: string = null;
        if (gm.Language != LANGUAGE_TYPE.ARAB) {
            lastStr = handleTranslate(str, language.en.personalBest);
        } else {
            lastStr = handleTranslate(str, language.ar.personalBest);
        }
        this.text_best_personal.string = lastStr;
    }

    /** 更新开始按钮的文案 */
    updateStartBtnDescribe() {

        const gm = GameMgr.getInstance();
        let lastStr: string = null;
        if (gm.Language != LANGUAGE_TYPE.ARAB) {
            lastStr = language.en.startChallenge;
        } else {
            lastStr = language.ar.startChallenge;
        }
        this.text_describe_start.string = lastStr;
    }


    /** 打开排行榜 */
    showRank() {

        /** 通知调高层级 */
        // if (!CC_PREVIEW) {
        this.noticeAppAdjustzIndex("1");
        // }

        /** 打开排行榜 */
        this.rank.onRankPromptShow();
    }

    /** 隐藏排行榜 */
    hideRank() {
        /** 通知调低层级 */
        // if (!CC_PREVIEW) {
        this.noticeAppAdjustzIndex("0");
        // }

        /** 隐藏排行榜 */
        this.rank.onRankPromptHide();
    }

    /** 打开帮助界面 */
    showHelp() {

        /** 通知调整层级 */
        // if (!CC_PREVIEW) {
        this.noticeAppAdjustzIndex("1");
        // }

        /** 打开帮助*/
        this.help.onHelpPromptShow();

    }

    /** 隐藏帮助界面 */
    hideHelp() {
        /** 通知调低层级 */
        // if (!CC_PREVIEW) {
        this.noticeAppAdjustzIndex("0");
        // }

        /** 隐藏帮助 */
        this.help.onHelpPromptHide();
    }

    /** 收起游戏 */
    onGameClose() {
        evokeNativeToQuitGame();
    }


    loginSnakeGame() {
        // @ts-ignore
        if (!cc.game.isGameLogin) {
            setTimeout(() => {
                this.loginSnakeGame();
            }, 300)
            return;
        }
        this.onIntoSnakeGameHall();
        this.sendMsgGetGameNickAvatarMsg();
    }


    protected start(): void {
        this.updateStartBtnDescribe();
        this.updatePersonalBestScore(0);
        this.updateWeeklyBestScore(0);
        this.loginSnakeGame();
    }


}
