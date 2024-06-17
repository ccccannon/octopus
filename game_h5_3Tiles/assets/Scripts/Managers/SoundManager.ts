import { isIos } from "../Utils/App_connect";
import { Logger } from "./Logger";

export default class SoundManager {

    // public static instance = ;
    private static _instance: SoundManager;

    public type = cc.Enum({
        effect: 1,
        music: 2
    })

    private effectCacheList: Map<string, cc.AudioClip> = null;
    private bgCacheList: Map<string, cc.AudioClip> = null;
    private playingList: Map<string, cc.AudioClip> = null;
    private currentBgId: number = -1;
    private isOthersBeting: boolean = false;

    private isOn: Boolean = false;

    constructor() {

        // 缓存音效
        this.effectCacheList = new Map();
        // 缓存音乐
        this.bgCacheList = new Map();
        // 缓存正在播放的音乐
        this.playingList = new Map();


    }

    public static getInstance(): SoundManager {
        if (!this._instance) {
            this._instance = new SoundManager();
        }
        return this._instance;
    }


    /** 音频资源下载 */
    loadAudioResource(path: string, type: number) {
        cc.resources.loadDir(path, cc.AudioClip, (err, audios) => {
            if (err) {
                console.log(err);
                return;
            }

            let container;
            if (type == this.type.effect) {
                container = this.effectCacheList;
            } else {
                container = this.bgCacheList;
            }

            for (let i = 0, len = audios.length; i < len; i++) {
                const item = audios[i];
                // 判断是否已经存在同名音效
                // @ts-ignore
                if (container.has(item._name)) {
                    continue;
                }
                // @ts-ignore
                container.set(item._name, item);
            }

        })
    }

    /** 是否开启音乐 */
    isAudioOn() {
        const isAudioOn = cc.sys.localStorage.getItem('isAudioOn');
        if (isAudioOn === undefined || isAudioOn === null) {
            this.openAudio();
            this.isOn = true;
            return true;
        } else {
            if (isAudioOn === 'on') {
                this.isOn = true;
                return true;
            } else {
                this.isOn = false;
                return false;
            }
        }
    }

    /** 开启音效 */
    openAudio() {
        // 设置音效
        cc.sys.localStorage.setItem('isAudioOn', 'on');
    }

    /** 关闭音效 */
    closeAudio() {
        cc.sys.localStorage.setItem('isAudioOn', 'off');
    }

    /**播放音效 */
    playEffect(effectName, isloop = false, volume = 0.5) {

        if (this.effectCacheList.has(effectName)) {

            const effect = this.effectCacheList.get(effectName);
            cc.audioEngine.play(effect, isloop, volume);

            if (!this.playingList.has(effectName)) {
                this.playingList.set(effectName, effect);
            }

        } else {
            console.log('Check the effectName ' + effectName + ' , this audioClip is no exist!');
        }
    }

    /** 停止播放音效 */
    stopEffect(effectName) {
        cc.audioEngine.stop(effectName);
    }

    /** 停止所有音效*/
    stopAllEffect() {
        cc.audioEngine.stopAllEffects();
    }

    /** 暂停所有音效 */
    pauseAudio() {
        cc.audioEngine.pauseAllEffects();
    }

    /** 播放背景音乐 */
    playBg(bgName, isloop = true, volume = 0.5) {
        if (this.bgCacheList.has(bgName)) {

            const bg = this.bgCacheList.get(bgName);
            this.currentBgId = cc.audioEngine.play(bg, isloop, volume);

            if (!this.playingList.has(bgName)) {
                this.playingList.set(bgName, bg);
            }
            // console.log('音乐播放', "音乐播放成功");

        } else {
            // console.log('Check the bgName ' + bgName + ' , this audioClip is no exist!');
            setTimeout(() => {
                this.playBg(bgName, isloop, volume);
            }, 1000);
        }
    }

    /** 关闭背景音乐 */
    stopBGM() {

        if (!this.currentBgId) {
            return;
        } else {
            cc.audioEngine.stop(this.currentBgId);
        }
    }

    /** 关闭所有声音 */
    stopAllSound() {
        cc.audioEngine.stopAll();
    }


    /**点击音效 */
    playTapEffect() {
        if (!this.isOn) {
            return;
        }
        this.playEffect('effect_tap', false, 0.5);
    }

    /** 消除音效 */
    playEffectRemove() {
        if (!this.isOn) {
            return;
        }
        this.playEffect('effect_remove', false, 0.3);
    }

    /** 播放开始的背景音乐 */
    playStartBgm() {
        this.stopAllSound();
        if (isIos()) {
            this.playBg('bgm_start', true, 0.5);
        } else {
            this.playBg('bgm_start', true, 0.3);
        }
    }

    /**播放游戏中的音效 */
    playGamingBmg() {
        this.stopAllSound();
        if (isIos()) {
            this.playBg('bgm_game', true, 0.5);
        } else {
            this.playBg('bgm_game', true, 0.2);
        }
    }

}
