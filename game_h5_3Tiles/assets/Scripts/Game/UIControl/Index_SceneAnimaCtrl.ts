// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Index_SceneAnimaCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_camel: cc.Prefab = null;

    @property(cc.Node)
    container: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 往容器中添加骆驼 */
    addCamelToContainer() {
        for (let i = 0; i < 36; i++) {
            const item = cc.instantiate(this.prefab_camel);
            item.parent = this.container;
            item.scale = 1.5;
            const row = Math.floor(i / 6);
            const posY = -450 + row * 150 + Math.random() * 20;
            const col = Math.floor(i % 6);
            const posX = -200 + col * 150 + Math.random() * 20;
            item.zIndex = (10 - row) * 10 + col;
            item.position = cc.v3(posX, posY, 0);
        }
    }

    /** 过场动画 */
    sceneAnima(callback = null) {
        this.container.position = cc.v3((cc.view.getVisibleSizeInPixel().width + this.container.width) / 2, 0, 0);
        cc.tween(this.container).to(1.5, { position: cc.v3(-30, 0, 0) }, { easing: 'sineOut' }).call(() => {
            callback && callback();
        }).start();
    }


    start() {
        this.addCamelToContainer();
        this.sceneAnima();
    }

    // update (dt) {}
}
