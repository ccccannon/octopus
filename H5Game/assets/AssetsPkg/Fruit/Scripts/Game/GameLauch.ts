
import { SoundManager } from "../../../../Script/Managers/SoundManager";
import { loadAssetFinished } from "../../../../Script/Utils/AppInterface";


const { ccclass, property } = cc._decorator;
@ccclass
export default class Panel_Rank extends cc.Component {
    onLoad() {

        // 下载音频资源
        this.loadSoundAsset();

        // 资源加载完毕
        loadAssetFinished();


    }


    loadSoundAsset() {
        const sm = SoundManager.getInstance();
        sm.loadResourceInBundle('Fruit', 'Sound/Effect', sm.type.effect);
        sm.loadResourceInBundle('Fruit', 'Sound/Bg', sm.type.music);
    }


   

    start() {

    }
}



