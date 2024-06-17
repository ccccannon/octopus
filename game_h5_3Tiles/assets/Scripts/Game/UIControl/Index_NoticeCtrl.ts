// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameDataManager } from "../../Managers/GameDataManager";
import { handleTranslate } from "../../Utils/utils_common";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

const totalLen = 20;

@ccclass
export default class Index_NoticeCtrl extends cc.Component {

    @property(cc.ScrollView)
    scrollView_notice: cc.ScrollView = null;

    @property(cc.Node)
    container: cc.Node = null;


    @property(cc.Prefab)
    prefab_notice: cc.Prefab = null;

    public notice_list: Array<any> = [];

    // LIFE-CYCLE CALLBACKS:

    private timeout1 = null;
    private timeout2 = null;

    // onLoad () {}

    addItemToContainer(winnerList) {

        // console.log(winnerList.length, '111111111111');
        this.container.removeAllChildren();
        this.clearTimer();

        for (let i = 0; i < winnerList.length; i++) {
            const item = cc.instantiate(this.prefab_notice);
            if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
                item.getComponent(cc.Label).string = handleTranslate(winnerList[i], language.en.notice);
            } else {
                item.getComponent(cc.Label).string = handleTranslate(winnerList[i], language.ar.notice);
            }
            item.parent = this.container;
            item.setSiblingIndex(i);
        }
    }


    /** 初始化提示框里面的内容 */
    initNoticeContainer(winnerList) {
        this.addItemToContainer(winnerList);
        if (winnerList.length <= 1) {
            return;
        }

        // this.scheduleOnce(this.noticeTextRoll.bind(this), 1);
        this.noticeTextRoll();
    }

    protected onEnable(): void {
        // this.addItemToContainer();
        // this.scheduleOnce(this.noticeTextRoll, 3)
    }

    /** 提示词条的滚动 */
    noticeTextRoll() {

        let count = this.container.childrenCount;

        for (let i = 0; i < count; i++) {

            this.timeout1 = setTimeout(() => {

                if (!this.container || !this.container.children[i]) {
                    this.timeout1 && clearTimeout(this.timeout1);
                    this.timeout2 && clearTimeout(this.timeout2);
                    return;
                }
                const posY = this.container.children[i].y;
                const height = this.container.children[i].height;

                this.scrollView_notice.scrollToOffset(cc.v2(0, -(posY + height / 2)), 2);

                if (i == count - 1) {
                    this.timeout2 = setTimeout(() => {
                        this.scrollView_notice.scrollToTop(0);
                        this.noticeTextRoll();
                    }, 2000);
                }

            }, i * 2000)

        }

    }


    clearTimer() {
        this.timeout1 && clearTimeout(this.timeout1);
        this.timeout2 && clearTimeout(this.timeout2);
    }

    protected onDisable(): void {
        // this.
        this.clearTimer();
    }

    start() {

    }

    // update (dt) {}
}
