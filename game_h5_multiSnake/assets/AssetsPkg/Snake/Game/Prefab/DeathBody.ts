// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Food from "./Food";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DeathBody extends Food {

    // @property(cc.Sprite)
    // view: cc.Sprite = null;

    // @property([cc.SpriteFrame])
    // viewList: Array<cc.SpriteFrame> = [];

    /** 初始化尸体 */
    initDeathBody(value: number) {
        // const idx = this.getRandomIndex();
        // this.view.spriteFrame = this.viewList[idx];
        this.coinValue = value;
        this.init();
    }

    /** 获取随机的尸体类型 */
    // getRandomIndex() {
    // if (!this.viewList || this.viewList.length <= 0) {
    //     return;
    // }
    // return Math.floor(Math.random() * this.viewList.length);
    // }

}
