// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { ABSORB_DURATION } from "../Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StateDisplayCtrl extends cc.Component {

    @property(cc.Node)
    node_absorb: cc.Node = null;


    public absorbInterval: number = -1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected onDestroy(): void {
        this.absorbInterval && clearInterval(this.absorbInterval);
    }

    /** 隐藏所有的节点 */
    hideAllChild() {
        const children = this.node.children;
        for (let i = 0, len = children.length; i < len; i++) {
            children[i].active = false;
        }
    }

    /** 移除定时器 */
    removeState() {
        this.absorbInterval && clearInterval(this.absorbInterval);
        this.node_absorb.active = false;
    }

    /** 设置吸铁石的状态展示 */
    setAbsorbInterval(callbacks?: Function) {
        this.node_absorb.active = true;
        this.absorbInterval && clearInterval(this.absorbInterval);
        const maskSprite = this.node_absorb.getChildByName('mask').getComponent(cc.Sprite);
        maskSprite.fillRange = 1;
        const stepRate = 1 / ABSORB_DURATION;

        this.absorbInterval = setInterval(() => {
            maskSprite.fillRange -= stepRate;
            if (maskSprite.fillRange <= 0) {
                callbacks && callbacks();
                clearInterval(this.absorbInterval);
                this.node_absorb.active = false;
            }
        }, 1000);

        // if(this.absorbInterval )

    }



    start() {
        // this.setAbsorbInterval();
        this.hideAllChild();
    }

    // update (dt) {}
}
