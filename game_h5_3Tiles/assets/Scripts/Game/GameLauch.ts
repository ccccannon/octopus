

import { getQueryString } from "../Utils/utils_common";
import { LANGUAGE_TYPE } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    protected onLoad(): void {
        this.loadSoundAssets();
    }

    loadSoundAssets() {
        
        // 初始化语言
        const lang = getQueryString("lan", window.location.href);
        // @ts-ignore
        window.localLang = lang || LANGUAGE_TYPE.ARAB;   window.languageType = LANGUAGE_TYPE;
     
        // const mgr = NetMgr.getInstance();

        // mgr.init();
        // const options = {
        //     ip: "192.168.0.171",
        //     port: 16829,
        //     protocol: 'ws',
        // }
        // mgr.connect(options);

    }

}
