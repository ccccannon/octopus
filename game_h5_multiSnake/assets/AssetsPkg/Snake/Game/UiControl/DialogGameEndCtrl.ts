// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Lang/index";
import { handleTranslate } from "../../../../Script/Utils/utils_common";
import GameMgr from "../../../../Script/Managers/GameMgr";
import GetSnakeGameResultMsg from "../../../../Script/msg/GetSnakeGameResultMsg";
import { SnakeDataMgr } from "../SnakeDataMgr";
import { MsgDispatcher } from "../../../../Script/DataHandler/MsgDispatcher";
import { Logger } from "../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../Script/Managers/NetMgr";
import { MsgCmdConstant } from "../../../../Script/DataHandler/MsgCmdConstant";
import { SingleGameUsePropMsg } from "../../../../Script/msg/SingleGameUsePropMsg";
import { GetSnakeGameRankMsg } from "../../../../Script/msg/GetSnakeGameRankMsg";
import item_settleRank from "../Prefab/item/item_settleRank";
import { noticeAPPOpenCloseEffect, openShare } from "../../../../Script/Utils/App_connect";
import { SingleGameStatusMsg } from "../../../../Script/msg/SingleGameStatusMsg";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";

const { ccclass, property } = cc._decorator;

enum Lang {
    en = 0,
    ar,
}

export enum DialogType {
    KeepPlay = 0,
    Quit,
}


@ccclass
export default class DialogGameEndCtrl extends cc.Component {

    @property(cc.Label)
    text_rank_title: cc.Label = null;

    @property(cc.Label)
    text_describe_kill: cc.Label = null;

    @property(cc.Label)
    text_kill_number: cc.Label = null;

    @property(cc.Label)
    text_describe_rank: cc.Label = null;

    @property(cc.Label)
    text_rank_number: cc.Label = null;

    @property(cc.Label)
    text_length_number: cc.Label = null;

    @property(cc.Label)
    text_lengt_number_shadow: cc.Label = null;

    @property(cc.Sprite)
    sprite_length: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_length: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    myRankInfo: cc.Node = null;

    @property(cc.Prefab)
    prefab_item_settle: cc.Prefab = null;

    @property(cc.Node)
    node_rank_container: cc.Node = null;

    @property(cc.Label)
    text_number_revive: cc.Label = null;

    @property(cc.Node)
    node_revive: cc.Node = null;

    @property(cc.Node)
    node_exit: cc.Node = null;

    @property(cc.Node)
    node_share: cc.Node = null;

    @property(cc.Node)
    node_continue: cc.Node = null;

    // @property(cc.Node)
    // node_snake: cc.Node = null;

    // @property(cc.Node)
    // node_snake_head: cc.Node = null;

    @property(cc.Label)
    text_describe_quit: cc.Label = null;

    @property(cc.Label)
    text_describe_revive: cc.Label = null;

    @property(cc.Label)
    text_describe_keepPlay: cc.Label = null;

    public actFlag: boolean = false;

    public myRank: number = 0;

    public topFiveList = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.addSocketEventListener();
    }

    protected onDestroy(): void {
        this.removeSocketEventListener();
    }

    start() {
        // this.initGameEndDialog();
        // this.showGameEndDialog(DialogType.KeepPlay)
        // const height = cc.view.getFrameSize().height;
        // const width = cc.view.getFrameSize().width;

        // console.log(height, this.node.width);
        // console.log(width, this.node.height);

        // this.node.scale = height / this.node.width
        // this.node.scale = width / height

    }

    /** 添加长链接事件监听 */
    addSocketEventListener() {
        cc.systemEvent.on('getShareGame', this.onGetShareGame, this);
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK, this.onUsePropMsgAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK_ACK, this.onGetSnakeRankMsgAck, this);
    }


    /** 移除长链接事件监听 */
    removeSocketEventListener() {
        cc.systemEvent.off('getShareGame', this.onGetShareGame, this);
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK, this.onUsePropMsgAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK_ACK, this.onGetSnakeRankMsgAck, this);
    }

    /** ============================== 长链接业务开始    ======================== */

    /** 使用道具回调 */
    onUsePropMsgAck(msgAck) {
        Logger.logNet(msgAck, '使用道具回调');
        const { propJson } = msgAck;
        const prop = JSON.parse(propJson);
        GameMgr.getInstance().Props = prop;
        cc.systemEvent.emit('onPlayerRevive');
        // this.updateSnakeReviveCoinNumber();
    }

    /**  发送使用道具信息 */
    sendUsePorpMsg() {
        const msg = new SingleGameUsePropMsg();
        const gm = GameMgr.getInstance();
        msg.propId = gm.Props.id;
        msg.type = 2;
        msg.tableId = gm.TableId;
        MsgDispatcher.sendMsg(msg);
    }

    /** 分享复活 */
    onShareRevive() {
        // TODO 需调用分享接口
        // cc.systemEvent.emit('onPlayerRevive');
        // SnakeUtilMgr.getInstance().setFirstRevive();

        let data = {
            "content": "贪吃蛇的游戏",
            "url": "https://www.baidu.com/",
            "title": "贪吃蛇分享",
            "image": "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            "type": "1",        // 类型，暂定 游戏：1，H5：2
            "internal": "1",    // 0 or 1， 0代表不展示 app内部的分享，1代表展示app内部的分享
            "ext": "test",      // 扩展字段
        }
        openShare(JSON.stringify(data));
    }

    onGetShareGame() {
        cc.systemEvent.emit('onPlayerRevive');
        SnakeUtilMgr.getInstance().setFirstRevive();
    }

    /** 发送获取排行榜的信息 */
    sendGetSnakeRankMsg() {
        const msg = new GetSnakeGameRankMsg();
        const gm = GameMgr.getInstance();
        msg.gameId = gm.GameId;
        msg.tableId = gm.TableId;
        msg.pageNum = 1;
        msg.pageSize = 100;
        // public pageNum: number = 1;
        // public pageSize: number = 10;
        Logger.logNet(msg, '获取排行榜信息');
        MsgDispatcher.sendMsg(msg);

    }

    /** 发送游戏放弃状态 */
    sendGameQuitStatus() {
        const gameStatus = new SingleGameStatusMsg();
        const gm = GameMgr.getInstance();
        // const sdm = SnakeDataMgr.getInstance();
        gameStatus.userId = dcodeIO.Long.fromNumber(gm.UserId);
        gameStatus.gameId = gm.GameId;
        // gameStatus.gameNo = gm.MapId;
        gameStatus.statusType = 2;
        gameStatus.tableId = gm.TableId;
        MsgDispatcher.sendMsg(gameStatus);
        Logger.logBusiness(gameStatus, '发送游戏放弃状态');
    }



    /** 获取玩家排行榜 */
    onGetSnakeRankMsgAck(msgAck) {
        Logger.logNet(msgAck, '排行榜信息');
        const { snakeRankItemList } = msgAck;
        // this.initSettleRank(snakeRankItemList);
        // this.handleRankList(snakeRankItemList);
        this.myRank = this.getMyCurrentRank(snakeRankItemList);
        const myRankInfo = this.composeMyRankInfo(this.myRank);
        // snakeRankItemList.splice(this.myRank, 1, myRankInfo)
        this.topFiveList = this.getTopFiveRank(snakeRankItemList);

        // console.log(this.myRank, '我的排行');

        const list = this.checkTopList(this.topFiveList, myRankInfo);

        // console.log(this.topFiveList, this.myRank, list);
        this.initSettleRank(list);
        this.initMyRankInfo(myRankInfo);
        this.updateWeeklyRank(this.myRank);
    }


    /** ============================== 长链接业务结束    ======================== */


    /** 初始化游戏结束的弹框 */
    initGameEndDialog() {
        const gm = GameMgr.getInstance();
        const lang = gm.Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        const sdm = SnakeDataMgr.getInstance();
        this.updateKillNumber(sdm.Kill, lang);
        // this.updatePreviewRank(sdm.PreviewRank, lang);

        this.updateSnakeLength(sdm.SnakeScore);
        if (lang == 'ar') {
            this.updateLengthDesribe(Lang.ar);
        } else {
            this.updateLengthDesribe(Lang.en);
        }
        // this.SnakeFadeIn();
        this.updateDescribe(lang);
    }


    /** 返回开始界面 */
    jumpToIndexScene() {

        if (!CC_PREVIEW) {
            noticeAPPOpenCloseEffect('1');
        }
        cc.director.loadScene('Index');
    }

    /** TODO  复活 */
    reviveSnkaeByCoin() {

    }

    /** 更新击杀数 */
    updateKillNumber(number: number, lang: string) {

        // console.log(number, '更新击杀数');

        // console.log(number, str, '更新击杀数');
        this.text_kill_number.string = number + "";
        // this.text_describe_kill.string = str;
        // @ts-ignore
        this.text_kill_number._forceUpdateRenderData();

    }

    /** 更新周排名 */
    updateWeeklyRank(num) {
        if (num > 100) {
            this.text_rank_number.string = '100+';
        } else {
            this.text_rank_number.string = num;
        }
    }

    /** 更新长度 */
    updateSnakeLength(number: number) {

        this.text_length_number.string = number.toLocaleString('en-US');
        this.text_lengt_number_shadow.string = number.toLocaleString('en-US');

    }

    /** 更新描述 */
    updateLengthDesribe(type: Lang) {
        if (type == Lang.ar) {
            this.sprite_length.spriteFrame = this.viewList_length[0];
        } else {
            this.sprite_length.spriteFrame = this.viewList_length[1];
        }
    }

    /** 更新描述 */
    updateDescribe(lang) {

        const strQuit = language[lang].exitGame;
        this.text_describe_quit.string = strQuit;

        const strRevive = language[lang].resurrect;
        this.text_describe_revive.string = strRevive;

        const strKeepGame = language[lang].continueGame;
        this.text_describe_keepPlay.string = strKeepGame;

        this.text_describe_kill.string = language[lang].kill;
        this.text_describe_rank.string = language[lang].previewRank;
        this.text_rank_title.string = language[lang].Ranking;

    }

    /** 更新复活的金币数量 */
    updateSnakeReviveCoinNumber() {

        const propsInfo = GameMgr.getInstance().Props;

        if (propsInfo.buyNum >= 5) {
            this.node_revive.active = false;
            setTimeout(() => {
                this.node_exit.x = 0;
            })

            return;
        }
        const number = propsInfo.prices[propsInfo.buyNum];
        this.text_number_revive.string = number + "";
    }


    /** 更新预计排行 */
    updatePreviewRank(number: number, lang: string) {

        const str = handleTranslate(number, language[lang].previewRank);
        this.text_describe_rank.string = str;
        // @ts-ignore
        this.text_describe_rank._forceUpdateRenderData();
    }

    /** 显示游戏结束的 */
    showGameEndDialog(type: DialogType) {

        // console.log('显示游戏结束的', type);
        this.node.active = true;
        if (type == DialogType.KeepPlay) {
            this.node_exit.x = -177;
            this.node_continue.active = true;
            this.node_revive.active = false;
            this.node_share.active = false;
        } else {
            // 获取是否首次复活
            let isTodayFirstRevive = SnakeUtilMgr.getInstance().getIsTodayFirstRevive();
            this.node_continue.active = false;
            this.node_revive.active = !isTodayFirstRevive;
            this.node_share.active = isTodayFirstRevive;
            this.updateSnakeReviveCoinNumber();
        }
        this.initGameEndDialog();
        /** 上报分数 */
        this.submitPlayerScore();

        /** 获取游戏排行榜 */
        this.sendGetSnakeRankMsg();

    }

    /** 上报分数 */
    submitPlayerScore() {
        const msg = new GetSnakeGameResultMsg();
        msg.length = dcodeIO.Long.fromNumber(SnakeDataMgr.getInstance().SnakeScore);
        msg.tableId = GameMgr.getInstance().TableId;
        Logger.logBusiness(msg, '上报分数');
        MsgDispatcher.sendMsg(msg);
    }


    /** 隐藏游戏结束界面 */
    hideGameEndDialog() {
        this.node.active = false;
    }


    /** 处理当前的排行数据 */
    handleRankList(list) {
        // Logger.logBusiness(list, '排行数据');

        const currentScore = SnakeDataMgr.getInstance().SnakeScore;
        let rank = 100;
        for (let i = list.length - 1; i >= 0; i--) {
            const score = list[i].length.toNumber();
            if (currentScore < score) {
                rank = i + 1;
                break;
            }
        }
        return rank;
        // avatar: "https://pic.hghggh.com/trird/20211225225158274.jpg"
        // byteSize: 0
        // length: d {low: 253109, high: 0, unsigned: false}
        // name: "LiChong"
        // rankNo: 1
        // startPosition: 62

    }

    /** 获取我的当前排名 */
    getMyCurrentRank(list) {
        const currentScore = SnakeDataMgr.getInstance().SnakeScore;
        let rank = 1;
        for (let i = list.length - 1; i >= 0; i--) {
            const score = list[i].length.toNumber();
            if (currentScore < score) {
                rank = list[i].rankNo + 1;
                break;
            }
        }
        return rank;
    }

    composeMyRankInfo(rank) {
        const gm = GameMgr.getInstance();
        const sdm = SnakeDataMgr.getInstance();
        let myRankInfo = {
            avatar: gm.Player.headImageUrl,
            name: gm.Player.playerName,
            length: dcodeIO.Long.fromNumber(sdm.SnakeScore),
            rankNo: rank,
            userId: dcodeIO.Long.fromNumber(gm.UserId)
        }
        return myRankInfo;
    }

    /**获取前5的数据排名 */
    getTopFiveRank(list) {
        let templist;
        if (list.length <= 5) {
            templist = list;
        } else {
            templist = list.slice(0, 5);
        }
        return templist;
    }

    /** 初始化结算排行榜信息 */
    initSettleRank(list) {
        // console.log(list);
        this.node_rank_container.removeAllChildren();
        for (let i = 0, len = list.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_item_settle);
            item.scale = 0.9;
            item.parent = this.node_rank_container;
            const script = item.getComponent(item_settleRank);
            script.init(list[i]);
        }

    }

    initMyRankInfo(info) {
        // console.log(info);
        let myRank: cc.Node;
        if (this.myRankInfo.children.length > 0) {
            myRank = this.myRankInfo.children[0];
        } else {
            myRank = cc.instantiate(this.prefab_item_settle);
            myRank.parent = this.myRankInfo;
        }
        const script = myRank.getComponent(item_settleRank);
        myRank.scale = 0.9;
        script.init(info);
        script.setPlayerStyle(info.rankNo);
        myRank.getComponent(cc.Sprite).enabled = false;

    }

    /** 检查top列表的数据  */
    checkTopList(topList, myInfo) {
        let isContain = false;
        let tempList = [];
        if (topList.length <= 0) {
            tempList.push(myInfo);
            return tempList;
        }
        for (let i = 0, len = topList.length; i < len; i++) {
            const item = topList[i];
            // debugger
            if (item.userId.toNumber() == myInfo.userId.toNumber()) {
                isContain = true;
                if (item.length.toNumber() < myInfo.length.toNumber()) {
                    item.length = myInfo.length;
                }
            }
        }

        if (isContain) {
            topList.sort((a, b) => {
                return b.length.toNumber() - a.length.toNumber();
            })

            tempList = topList.map((item, index) => {
                item.rankNo = index + 1;
                return item;
            })
        }

        // console.log(topList, '检查top列表的数据');


        // topList.map((item) => {
        //     if (item.userId == myInfo.userId) {
        //         if (item.length < myInfo.score) {   

        //         }
        //     }
        // });
        return topList

    }


    // update (dt) {}
}
