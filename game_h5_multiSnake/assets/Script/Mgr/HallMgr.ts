// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { LogType, Logger } from "../Managers/Logger";
import { NetMgr } from "../Managers/NetMgr";

// import { MsgDispatcher } from "../DataHandler/MsgDispatcher";
// import GameMgr from "../Managers/GameMgr";
// import { Logger } from "../Managers/Logger";
// import { NetMgr } from "../Managers/NetMgr";
// import { IntoGameHallMsg } from "../msg/IntoGameHallMsg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallCtrl extends cc.Component {

    public bundleList: Array<cc.AssetManager.Bundle> = [];

    private _instance: HallCtrl = null;

    get Instance() {

        if (!this._instance) {
            this._instance = new HallCtrl();
        }
        return this._instance;
    }

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property(cc.Sprite)
    // view_cocos: cc.Sprite = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // if(!this.Instance){

        // }

    }

    start() {

        if (!CC_DEBUG && !CC_PREVIEW) {
            Logger.setTags();
        }

        this.login();
        this.loadBundle();
    }

    /** 加载bundle */
    loadBundle() {
        cc.assetManager.loadBundle('Snake', (err, bundle) => {
            if (err) {
                console.log(err);
                return;
            }

            bundle.loadScene('Index', (err, scene) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log('加载贪吃蛇场景结束');
                // cc.director.loadScene('MultiSnake');
                cc.director.runScene(scene);
            });

        })
    }

    login() {
        const netMgr = NetMgr.getInstance();
        const net = netMgr.getNet();
        if (!net) {
            netMgr.init();
            let options;
            if (CC_DEBUG || CC_PREVIEW) {
                options = {
                    // ip: "129.226.169.100",
                    ip: '192.168.1.33',
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


        }
    }

    // update (dt) {}
}
