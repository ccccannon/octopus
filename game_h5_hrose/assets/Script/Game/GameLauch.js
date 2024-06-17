
import evtManager from "../Managers/EventManager";
import { getQueryString } from "../Utils/utils_common";
import { LANGUAGE_TYPE } from "./Constants";
import SoundManager from "../Managers/SoundManager";

import { loadAssetFinished } from '../Utils/App_connect'

import horseRact from '../3rd/horseRace';

import DebugManager from '../Managers/DebugManager';

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // 将事件管理挂载到全局变量
        cc.game.evtManager = evtManager;

        // 下载音频资源
        SoundManager.loadAudioResource('Sound/Effect', SoundManager.type.effect);
        SoundManager.loadAudioResource('Sound/Bg', SoundManager.type.music);

        // 将音频管理挂载到全局变量
        cc.game.soundManager = SoundManager;

        // 初始化语言
        const lang = getQueryString("lan", window.location.href);
        window.localLang = lang || LANGUAGE_TYPE.ARAB;
        window.languageType = LANGUAGE_TYPE;


        if (CC_DEBUG) {
            cc.game.DebugMgr = DebugManager;
        }

        // cc.game.DebugMgr.log('初始化语言',LANGUAGE_TYPE);


        // 资源加载完毕
        loadAssetFinished();

        cc.game.DebugMgr && cc.game.DebugMgr.log('通知服务器资源加载完毕');

    },

    start() {

    },

    // update (dt) {},
});
