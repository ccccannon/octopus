// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import { fruitName, fruitInfoList } from '../firstPage/script/constants';
// import { getQueryString } from "../firstPage/script/utils/utils_common"

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        // console.log(window.location.href);

        // const lang = getQueryString("lang", window.location.href);
        // // const uid = getQueryString("uid", window.location.href);

        // // 根据url中传入的语言类型 进行语言设置，默认为阿拉伯语。
        // window.localLang = lang || 'arab';

        // this.loadScene();

    },

    start() {
   
    },


    loadScene() {
        cc.assetManager.loadBundle('firstPage', (err, bundle) => {
            bundle.loadScene('/scene/mainScene', (err, scene) => {
                cc.director.runScene(scene);
            })
        })
    },

    // update (dt) {},
});
