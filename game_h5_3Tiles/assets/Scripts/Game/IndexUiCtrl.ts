import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../DataHandler/MsgDispatcher";

import { GameDataManager } from "../Managers/GameDataManager";
import { Logger } from "../Managers/Logger";
import { NetMgr } from "../Managers/NetMgr";
import SoundManager from "../Managers/SoundManager";
import { NetNodeState } from "../Network/NetNode";
import { evokeNativeToQuitGame, loadAssetFinished } from "../Utils/App_connect";
import { formatTimeDisplay, handleTranslate } from "../Utils/utils_common";
import { IntoGameHallMsg } from "../msg/IntoGameHallMsg";
import { IntoYLGYGameHallMsgAck } from "../msg/IntoYLGYGameHallMsgAck";
import { SingleGameStatusMsg } from "../msg/SingleGameStatusMsg";
import { LANGUAGE_TYPE } from "./Constant";
import { language } from "./Language/index";
import Index_CountryRankNodeCtrl from "./UIControl/Index_CountryRankNodeCtrl";
import Index_NoticeCtrl from "./UIControl/Index_NoticeCtrl";


const { ccclass, property } = cc._decorator;

@ccclass
export default class IndexUiCtrl extends cc.Component {

    @property(Index_NoticeCtrl)
    noticeCtrl: Index_NoticeCtrl = null;

    @property(Index_CountryRankNodeCtrl)
    countryRankNodeCtrl: Index_CountryRankNodeCtrl = null;

    @property(cc.Node)
    node_sound: cc.Node = null;

    @property([cc.SpriteFrame])
    musicSpriteList: Array<cc.SpriteFrame> = [];

    @property(cc.Label)
    text_Tips_countryRank: cc.Label = null;

    @property(cc.Sprite)
    view_title: cc.Sprite = null;

    @property([cc.SpriteFrame])
    titleViewList: Array<cc.SpriteFrame> = [];

    public isGameStarting: boolean;

    public delayTimer: any = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        Logger.setTags();

        // this.login();

        this.preloadGameScene();

        // this.addSocketListener();




    }

    /** 加载音频资源 */
    addSoundAsset() {
        const sm = SoundManager.getInstance();
        sm.loadAudioResource('Sound/Effect', sm.type.effect);
        sm.loadAudioResource('Sound/Bg', sm.type.music);
    }

    public isGameSceneReady: boolean = false;

    protected onDestroy(): void {
        // this.removeSocketListener();
    }

    /** 预加载游戏界面 */

    preloadGameScene() {
        cc.director.preloadScene('Game', () => { }, () => {
            this.isGameSceneReady = true;
        })

    }


    /** 播放背景音乐 */
    playBgm() {

        const sm = SoundManager.getInstance();

        let isAudioOn = false;
        if (!!sm) {
            isAudioOn = sm.isAudioOn();
        }
        if (isAudioOn) {
            sm.playStartBgm();
        } else {
            sm.stopAllSound();
        }
        this.updateSoundBtnView();
    }

    /** 根据声音是否开启来改变按钮的展示 */
    updateSoundBtnView() {
        let isAudioOn = false;
        if (!!SoundManager) {
            isAudioOn = SoundManager.getInstance().isAudioOn();
        }
        if (isAudioOn) {
            this.node_sound.getComponent(cc.Sprite).spriteFrame = this.musicSpriteList[0];
        } else {
            this.node_sound.getComponent(cc.Sprite).spriteFrame = this.musicSpriteList[1];
        }
    }

    /** 点击音乐按钮 */
    onSoundBtnClick() {
        let isAudioOn = false;
        const sm = SoundManager.getInstance();
        if (!!sm) {
            isAudioOn = sm.isAudioOn();
            if (isAudioOn) {
                sm.closeAudio();
                // SoundManager.
            } else {
                sm.openAudio();
            }
            this.playBgm();
        }

    }

    /**跳转到游戏界面 */
    jumpToGameView() {

        /** 场景跳转时候关掉音乐 */
        SoundManager.getInstance().stopAllSound();
        // 跳转
        cc.director.loadScene('Game');

    }

    /********************===============socket相关业务开始=============********** */

    addSocketListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK, this.onLoginYLGYGameAck, this);
        net.addResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onGetGameStatus, this);
        net.addResponeHandler(MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_ACK, this.onGetAvatarUrlList, this);
        // net.addResponeHandler(MsgCmdConstant.msg)
        // this.net = net;
        // net.addResponeHandler()

    }

    /** 移除监听 */
    removeSocketListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK, this.onLoginYLGYGameAck, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onGetGameStatus, this);
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_ACK, this.onGetAvatarUrlList, this);
    }

    onLoginYLGYGameAck(msgAck: IntoYLGYGameHallMsgAck) {
        Logger.logNet("登录大厅成功", JSON.stringify(msgAck));
        const { items, winnersName } = msgAck;
        // 初始化提示框信息
        this.noticeCtrl.initNoticeContainer(winnersName);

        // 初始化地图数据
        this.countryRankNodeCtrl.initContainer(items);

        // 初始化我的国家当前排名
        const rankNum = this.getMyCountryRank(items);
        this.updateMyCountryRank(rankNum);
        //    console.log("登录大厅成功", JSON.stringify(msgAck));
        //   播放音乐

    }

    onGetGameStatus(msgAck) {
        Logger.logBusiness( msgAck,'返回的游戏状态',);
        // this.isGameStarting = false;

        const { subGamePlayJsonFields, totalConsume, playerId, gamePlayers, tableId } = msgAck;

        const dataManager = GameDataManager.getInstance();

        // 缓存游戏信息
        dataManager.Props = JSON.parse(subGamePlayJsonFields).props;
        dataManager.MapId = totalConsume;
        // dataManager.MapId = 5;
        dataManager.MyInfo = gamePlayers;
        dataManager.TableId = tableId;

        // dataManager.isGameContinue();
        // debugger;
        dataManager.diffServerAndLocalData(dataManager.UserId);
        this.jumpToGameView();

    }

    /** 获取到头像列表 */
    onGetAvatarUrlList(msgAck) {
        // console.log(msgAck, '获取到头像列表');
        const { areaId, avatars } = msgAck;
        this.countryRankNodeCtrl.updatePlayerAvatar(areaId, avatars);

    }

    /** 获取我的国家当前排名 */
    getMyCountryRank(list) {
        const countryId = GameDataManager.getInstance().Player.areaId;
        const item = list.find((item) => {
            return item.areaId == countryId;
        })
        let rankNum;
        if (!!item) {
            rankNum = item.rankNo
        }
        return rankNum;
    }

    /** 更新我的国家排名 */
    updateMyCountryRank(index) {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            if (!index) {
                this.text_Tips_countryRank.string = language.en.myCountryRank.out;
            } else {
                this.text_Tips_countryRank.string = handleTranslate(index, language.en.myCountryRank.in)
            }

        } else {
            if (!index) {
                this.text_Tips_countryRank.string = language.ar.myCountryRank.out;
            } else {
                this.text_Tips_countryRank.string = handleTranslate(index, language.ar.myCountryRank.in)
            }
        }
    }


    /** 登录游戏大厅 */
    loginGameHall() {
        const intoGameHall = new IntoGameHallMsg();
        intoGameHall.userId = dcodeIO.Long.fromNumber(GameDataManager.getInstance().UserId);
        intoGameHall.gameId = 40000;
        MsgDispatcher.sendMsg(intoGameHall);
    }

    //  this.userId = ar.sLong(this.userId);
    // this.gameId = ar.sInt(this.gameId);
    // this.gameNo = ar.sInt(this.gameNo);
    // this.statusType = ar.sInt(this.statusType);

    /** 查询游戏状态 */
    queryGameStatus() {

        if (this.isGameStarting) {
            return;
        }
        this.isGameStarting = true;

        const gameStatus = new SingleGameStatusMsg();
        const gdm = GameDataManager.getInstance();
        gameStatus.userId = dcodeIO.Long.fromNumber(gdm.UserId);
        gameStatus.gameId = 40000;
        gameStatus.gameNo = 0;
        gameStatus.statusType = 0;
        gameStatus.tableId = gdm.getLocalTableId(gdm.UserId) + '';
        // MsgDispatcher.sendMsg(gameStatus);
        setTimeout(() => {
            this.isGameStarting = false;
        }, 2000)
        this.jumpToGameView();
    }

    quitTouch() {
        // console.log('点击背景框生效了！！！！！');

        /**主动断开长连接 */
        // NetMgr.getInstance().close();

        /** 退出游戏 */
        evokeNativeToQuitGame();

        /** 停止播放音乐 */
        SoundManager.getInstance().stopAllEffect();

        /**关停定时器 */
        this.delayTimer && clearTimeout(this.delayTimer);
    }


    /**替换游戏名称 */
    updateGameTitle() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.view_title.spriteFrame = this.titleViewList[1];
        } else {
            this.view_title.spriteFrame = this.titleViewList[0];
        }
    }




    // 监听登录大厅的返回
    //   net.addResponeHandler(MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK, this.onLoginYLGYGameAck, this);
    /********************===============socket相关业务结束=============********** */

    start() {
        this.updateGameTitle();
        // @ts-ignore
        // console.log(NetMgr.getInstance().getNet()._state);
        // @ts-ignore
        // if (NetMgr.getInstance().getNet()._state == NetNodeState.Working) {
            this.loginGameHall();
            this.playBgm();
        // }

    }


    login() {

        const netMgr = NetMgr.getInstance();
        const net = netMgr.getNet();
        if (!net) {
            this.addSoundAsset();
            netMgr.init();
            let options;
            if (CC_DEBUG || CC_PREVIEW) {
                options = {
                    ip: "129.226.169.100",
                    // ip: '192.168.1.95',
                    // ip: "allogame.habibi.cc",
                    port: 16829,
                    protocol: 'ws',
                    // url: "wss://allogame.habibi.cc"
                }
            }

            if (CC_BUILD && !CC_DEBUG) {
                options = {
                    url: 'wss://allogame.habibi.cc'
                }
            }

            netMgr.connect(options);

            // console.log(CC_BUILD, CC_DEBUG, CC_PREVIEW, options);

            // 通知app数据加载完成
            if (!CC_PREVIEW) {
                loadAssetFinished();
            }

        }
    }

    protected onDisable(): void {
        // 防止服务器将玩家拉回游戏界面的时候，背景音乐错误播放
        this.delayTimer && clearTimeout(this.delayTimer);
    }

    // update (dt) {}
}
