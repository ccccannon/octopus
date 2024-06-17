class SoundManager {


    type = cc.Enum({
        effect: 1,
        music: 2
    })

    constructor() {
        // 缓存音效
        this.effectCacheList = new Map();
        // 缓存音乐
        this.bgCacheList = new Map();
        // 缓存正在播放的音乐
        this.playingList = new Map();
    }

    /** 音频资源下载 */
    loadAudioResource(path, type) {
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
                if (container.has(item._name)) {
                    continue;
                }
                container.set(item._name, item);
            }

        })
    }

    /** 是否开启音乐 */
    isAudioOn() {
        const isAudioOn = cc.sys.localStorage.get('isAudioOn');
        if (isAudioOn === undefined || isAudioOn === null) {
            this.openAudio();
            return true;
        } else {
            if (isAudioOn === 'on') {
                return true;
            } else {
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

        } else {
            console.log('Check the bgName ' + bgName + ' , this audioClip is no exist!');
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

    /** 金币音效 */
    coinEffect() {
        this.playEffect('effect_gold', false, 0.2);
    }

    /** 其他人下注 */
    otherPlayerBet() {

        if (this.isOthersBeting) {
            return;
        }

        this.isOthersBeting = true;
        // const duration = this.effectCacheList.get('effect_gold').duration;
        this.playEffect('effect_gold', false, 0.2);

        setTimeout(() => {
            this.isOthersBeting = false;
        }, 2);

    }

     /**赢钱金币音效 */
     winEffect() {
        this.playEffect('effect_win', false, 0.1);
    }



    /**水果的背景音乐 */
    fruitGameBgm() {
        // this.playBg('*****', true);
    }

}

export default new SoundManager();