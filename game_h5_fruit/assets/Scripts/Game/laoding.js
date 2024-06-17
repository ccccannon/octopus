// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { loadAssetFinished } from '../Utils/App_connect.js';

cc.Class({
    extends: cc.Component,
    // update (dt) {},
    onLoad() {
        // console.log = () => { };
        this.preloadMainSence();
    },

    preloadMainSence() {
        cc.director.preloadScene('mainScene', () => { }, () => {
           
            // console.log('游戏加载完毕');
            cc.director.loadScene('mainScene');
        })
    }

});
