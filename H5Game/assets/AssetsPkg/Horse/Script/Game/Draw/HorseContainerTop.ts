const { ccclass, property } = cc._decorator;

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/horse_index";
import ItemTop from "../prefab/ItemTop";



@ccclass
export default class HorseContainerTop extends cc.Component {

    @property(cc.Layout)
    container: cc.Layout = null;

    @property(cc.Prefab)
    prefab_topItem: cc.Prefab = null;

    @property(cc.Label)
    text_top: cc.Label = null;

    public lang: string = null;

    onLoad() {
        // @ts-ignore
        this.lang = window.localLang || 'ar';
        this.setLayoutHorizontalDirection();
        this.setTextTop3();
    }


    setTextTop3() {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.text_top.string = language[lang].result.top;
    }


    // 设置水平方向
    setLayoutHorizontalDirection() {

        if (this.lang && this.lang === 'en') {
            this.container.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
            
            //  TODO
            // this.container.node.position = cc.v3(0, 0, 0)

        } else {
            this.container.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
            // this.container.node.position = cc.v3(0, 0, 0)
        }
    }


    updateContainerNodeWidth(len) {
        this.container.node.width = len * 180 + (len - 1) * this.container.spacingX;
    }

    init(info) {

        // console.log('[container-top] info ', info);
        this.updateContainerNodeWidth(info.length);
        this.container.node.removeAllChildren();
        for (let i = 0, len = info.length; i < len; i++) {

            const itemInfo = info[i];
            itemInfo.rank = i;
            const item = cc.instantiate(this.prefab_topItem);
            const script = item.getComponent(ItemTop);
            script.initInfo(itemInfo);
            item.parent = this.container.node;

        }

    }

}
