// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import SoundManager from "../Manager/SoundManager";
import { adjustWebviewzIndex, evokeNativeChargePage, evokeNativeToQuitGame, getNoticeAPPOpenCloseEffectRespond, noticeAPPOpenCloseEffect, openCloseMICStateCtrl, openCloseMICStateCtrlRespond, queryUserMICState, queryUserMICStateRespond, replaceRoomBg, onShareResponse } from "../../../../Script/Utils/App_connect";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingCtrl extends cc.Component {

    @property(cc.Sprite)
    sprite_mic: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_mic: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    sprite_music: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_music: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    sprite_singel: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_singel: Array<cc.SpriteFrame> = [];

    @property(cc.Label)
    text_singel: cc.Label = null;

    public isMicOn: boolean = false;

    public isMusicOn: boolean = false;

    public singelNumber: number = 10;

    public isMICEnableClick: boolean = true;

    public isMusicEnableClick: boolean = true;

    private singleInterval: number = null;

    onLoad() {

        this.singleInterval = setInterval(this.singelNumberChange.bind(this), 2 * 1000);

        this.loadMusicAsset();
        this.addGlobalEvent();

        // loadAssetFinished();
        /** 默认麦位处于关闭状态 */
        // this.MICDisplayControl(false);

        cc.macro.ENABLE_TRANSPARENT_CANVAS = false;

    }


    protected onDestroy(): void {
        this.stopSingleInterval();
        this.removeGlobalEvent();
        SoundManager.getInstance().stopAllSound();
    }



    /** 注册全局事件 接收app的返回 */

    addGlobalEvent() {
        /** 接收当前麦位状态信息 */
        queryUserMICStateRespond(this.getMICOpenCloseState.bind(this));

        /** 接收用户的开闭麦状态信息 */
        openCloseMICStateCtrlRespond(this.getOnOrLeaveState.bind(this));

        /** 接收开关特效的信息 */
        getNoticeAPPOpenCloseEffectRespond(this.getOpenCloseEffect.bind(this));

        // getNoticeAPPOpenCloseEffectRespond
        /** 接收分享的结果 */
        onShareResponse(this.getShareGame.bind(this));
    }



    /** 移除全局事件 */
    removeGlobalEvent() {

        // @ts-ignore
        window && window.queryUserMICStateRespond && (window.queryUserMICStateRespond = null);
        // @ts-ignore
        window && window.openCloseMICStateCtrlRespond && (window.openCloseMICStateCtrlRespond = null);
        // @ts-ignore
        window && window.openCloseEffectRespond && (window.openCloseEffectRespond = null);
        // @ts-ignore
        window && window.shareGameRespond && (window.shareGameRespond = null);

    }

    /**加载音频资源 */
    loadMusicAsset() {
        const soundMgr = SoundManager.getInstance();
        soundMgr.loadResourceInBundle('Snake', 'Sound/bgm', soundMgr.type.music);
        soundMgr.loadResourceInBundle('Snake', 'Sound/effect', soundMgr.type.effect);
    }

    /** 接收开启关闭特效 */
    getOpenCloseEffect(res: string) {
        res = JSON.parse(res);
        // console.log('接收开启关闭特效的回调', res);
    }


    /** 麦位的开关状态 */
    getMICOpenCloseState(res: string) {
        res = JSON.parse(res);
        // console.log('接收到的麦位状态信息', res);
        // console.log(this.viewList_mic, '麦位状态标识');
        // console.log(this);
        // @ts-ignore
        if (res.isOnMIC == "1") {
            //  @ts-ignore
            if (res.isOpenMIC && res.isOpenMIC == "1") {
                this.isMicOn = true;
                this.MICDisplayControl(true);
            } else {
                this.isMicOn = false;
                this.MICDisplayControl(false);
            }
            // console.log('当前为上麦状态');

        } else {
            this.isMicOn = false;
            // console.log('当前不在麦上');
            this.MICDisplayControl(false);
        }
    }

    /** 麦位的开闭状态 */
    getOnOrLeaveState(res: string) {
        res = JSON.parse(res);
        // console.log('接收开闭麦的状态信息', res);
        // @ts-ignore
        const type = res.type; const isSucced = res.isSucced;

        /** 闭麦成功 */
        if (type == "0" && isSucced == "1") {
            this.MICDisplayControl(false);
            this.isMicOn = false;
            return;
        }

        /** 开麦成功 */
        if (type == "1" && isSucced == "1") {
            this.MICDisplayControl(true);
            this.isMicOn = true;
            return;
        }

    }

    /** 游戏分享结果 */
    getShareGame(res: string) {
        console.log("getShareGame", res);
        cc.systemEvent.emit('getShareGame');
    }

    /** 清理游戏数据 */
    onClearReviveData() {
        cc.sys.localStorage.setItem('firstResurrection', null);
    }

    start() {

        this.queryMIC();

        // SoundManager.getInstance().openAudio();

        this.initMusicIconDisplay();

        setTimeout(() => {
            SoundManager.getInstance().playGamingBmg();
            //     console.log('音乐播放成功!!');
        }, 3 * 1000);

    }

    /**信号数值变化 */
    singelNumberChange() {
        this.text_singel.string = '' + (Math.floor(Math.random() * 10) + 20) + 'ms';
    }


    /** 查询麦位状态 */
    queryMIC() {
        // if (!CC_PREVIEW) {
        // queryUserMICState();
        // }
    }

    /** 麦位展示管理 */
    MICDisplayControl(isOnMIC: boolean) {
        if (isOnMIC) {
            this.sprite_mic.spriteFrame = this.viewList_mic[0];
        } else {
            this.sprite_mic.spriteFrame = this.viewList_mic[1];
        }
    }

    /** 控制app麦位交互 */
    appMICCtrl() {

        if (this.isMicOn) {
            openCloseMICStateCtrl("0");
            //TODO
            this.MICDisplayControl(false);
            this.isMicOn = false;
        } else {
            openCloseMICStateCtrl("1");
            //TODO
            this.MICDisplayControl(true);
            this.isMicOn = true;
        }

    }


    /**麦位点击 */
    onMICIconClick() {
        if (!this.isMICEnableClick) {
            return;
        }
        this.isMICEnableClick = false;
        setTimeout(() => {
            this.isMICEnableClick = true;
        }, 2 * 1000);
        this.appMICCtrl();
    }

    /** 音乐按钮点击 */
    onMusicIconClick() {
        const soundMgr = SoundManager.getInstance();
        const isAudioOn = soundMgr.isAudioOn();
        if (isAudioOn) {
            this.musicIconDisplayCtrl(false);
            soundMgr.closeAudio();
            soundMgr.stopAllSound();
        } else {
            this.musicIconDisplayCtrl(true);
            soundMgr.openAudio();
            soundMgr.playGamingBmg();
        }
    }

    /** 音乐按钮的展示 */
    musicIconDisplayCtrl(isMusicOn: boolean) {

        if (isMusicOn) {
            this.sprite_music.spriteFrame = this.viewList_music[0];
        } else {
            this.sprite_music.spriteFrame = this.viewList_music[1];
        }

    }


    /** 初始化音乐图标的展示 */
    initMusicIconDisplay() {
        const isAudioOn = SoundManager.getInstance().isAudioOn();
        this.musicIconDisplayCtrl(isAudioOn);
    }


    /** 停止定时器 */
    stopSingleInterval() {
        this.singleInterval && clearInterval(this.singleInterval);
    }

    /** 隐藏设置界面 */
    hideSetting() {
        this.node.active = false;
    }

    /**  显示设置界面 */
    showSetting() {
        this.node.active = true;
    }

    adjustGameLayer() {

        // let obj = { isAdjust: '1', dHeight: 400 };

        const isAdjust = "1";
        const dHeight = 400;

        adjustWebviewzIndex(isAdjust, dHeight);
        // setTimeout(() => {
        //     adjustWebviewzIndex('0');
        // }, 2 * 1000);
    }

    quit() {
        evokeNativeToQuitGame();
    }

    onCharge() {
        evokeNativeChargePage();
    }

    /** 更换图片 */
    changeBgPic() {
        replaceRoomBg(400005, "http://pic.hghggh.com/game/games/dev/1l244myl2gc.jpg");
    }

    // update (dt) {}
}
