import { SoundManager } from "../../../../Script/Managers/SoundManager";
import { loadAssetFinished } from "../../../../Script/Utils/AppInterface";

const { ccclass, property } = cc._decorator

@ccclass
export default class GameLauch extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // 下载音频资源
        const sm = SoundManager.getInstance();
        sm.loadResourceInBundle('Horse', 'Sound/Effect', sm.type.effect);
        sm.loadResourceInBundle('Horse', 'Sound/Bg', sm.type.music);

        // 资源加载完毕
        if(!CC_PREVIEW){
            loadAssetFinished();
        }

    }

    start() {

    }

    // update (dt) {},
}
