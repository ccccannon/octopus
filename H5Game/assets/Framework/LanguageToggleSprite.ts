// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../Script/Mgr/Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LanguageToggleSprite extends cc.Component {

    @property([cc.SpriteFrame])
    viewList: Array<cc.SpriteFrame> = [];
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 更新图片 */
    updateSprite() {

        const lang = GameMgr.getInstance().Language;

        if (lang == LANGUAGE_TYPE.ARAB) {
            this.node.getComponent(cc.Sprite).spriteFrame = this.viewList[1];
        } else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.viewList[0];
        }
    }


    start() {
        this.updateSprite();
    }

    // update (dt) {}
}
