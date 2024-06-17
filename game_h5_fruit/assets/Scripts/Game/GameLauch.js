
import evtManager from "../Managers/EventManager";
import { getQueryString } from "../Utils/utils_common";
import { LANGUAGE_TYPE } from "./MainUI/constants";
import SoundManager from "../Managers/SoundManager";

import { loadAssetFinished } from '../Utils/App_connect'
import GameData from "./MainUI/GameData";

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // 设置主场景摄像机用于清屏的背景色为透明
        // cc.Camera.main.backgroundColor = new cc.Color(0, 0, 0, 0);

        // 将事件管理挂载到全局变量
        cc.game.evtManager = evtManager;

        // 下载音频资源
        SoundManager.loadAudioResource('Sound/Effect', SoundManager.type.effect);
        SoundManager.loadAudioResource('Sound/Bg', SoundManager.type.music);

        // 将音频管理挂载到全局变量
        cc.game.soundManager = SoundManager;

        // 初始化语言
        const lang = getQueryString("lan", window.location.href);

        /** 兼容非英语、阿拉伯语 */
        if (lang == LANGUAGE_TYPE.EN || lang == LANGUAGE_TYPE.ARAB) {
            window.localLang = lang
        } else {
            window.localLang = LANGUAGE_TYPE.ARAB;
        }

        window.languageType = LANGUAGE_TYPE;

        if (CC_DEBUG) {
            console.log(GameData.BaseUrl);
        }

        console.log(CC_DEBUG, CC_BUILD,'CC_DEBUG, CC_BUILD');

        // 资源加载完毕
        loadAssetFinished();


    },

    start() {

    },

    // update (dt) {},
});
