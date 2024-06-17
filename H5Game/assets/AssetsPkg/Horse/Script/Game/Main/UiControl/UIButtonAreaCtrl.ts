

import GameMgr from '../../../../../../Script/Managers/GameMgr';
import { Logger } from '../../../../../../Script/Managers/Logger';
import { LANGUAGE_TYPE } from '../../../../../../Script/Mgr/Config';
import { selectBtnList } from '../../Constants';

const { ccclass, property } = cc._decorator;
@ccclass
export default class UIButtonAreaCtrl extends cc.Component {

    @property([cc.SpriteFrame])
    toggleBgList: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    btnContainer: cc.Node = null;

    private currIndex: number = -1;

    private selectedCoinsObj: any = null;

    private cacheGuessBets: any = null;

    private betBtnInfoList: any = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.currIndex = -1;
        // this.updateBtnInfoByIndex(1);
        this.motifyBtnDisplayDir(GameMgr.getInstance().Language);
    }

    /** 检查配置是否一致 */
    checkSettingSame(list) {

        let isSame = true;
        if (!this.cacheGuessBets) {
            this.cacheGuessBets = list;
            isSame = false;
        } else {
            for (let i = 0, len = list.length; i < len; i++) {
                const cacheItem = this.cacheGuessBets[i];
                const listItem = list[i];
                if (cacheItem.id != listItem.id || cacheItem.value != listItem.value) {
                    isSame = false;
                    break;
                }
            }
        }
        return isSame;
    }



    init(guessBets) {

        // debugger;
        const isSame = this.checkSettingSame(guessBets);
        if (isSame) {
            Logger.logBusiness('按钮配置一致，不更新视图');
            return;
        } else {
            this.cacheGuessBets = guessBets;
        }

        const list = this.composeSelectBtnList(guessBets);
        for (let i = 0, len = list.length; i < len; i++) {
            const info = list[i];
            const item = this.btnContainer.children[i];
            const strNum = info.coinsNumber == 10000 ? "10K" : info.coinsNumber;
            item.getChildByName('number').getComponent(cc.Label).string = strNum;
        }
        this.betBtnInfoList = list;
    }

    /** 组装数据 */
    composeSelectBtnList(guessBets) {
        // debugger
        let tempList = [];
        for (let i = 0; i < guessBets.length; i++) {
            const item = guessBets[i];
            const obj = {
                id: item.id,
                coinsNumber: item.value,
                isSelected: item.id == 2 ? true : false,
            }
            tempList.push(obj);
        }
        return tempList;
    }

    onCoinBtnClick(evt, customEventData) {

        customEventData = parseInt(customEventData);

        this.updateBtnInfoByIndex(customEventData);

    }


    updateBtnInfoByIndex(index) {

        Logger.logBusiness(index, '被点击的按钮');

        if (this.currIndex == index ) {
            return;
        }

        this.currIndex = index;

        // 通知ui管理类
        cc.systemEvent.emit('onSelectedCoinsChange', this.betBtnInfoList[index]);

        // 更新当前被选中的金额对象
        this.setSelectCoinsObj(this.betBtnInfoList[index]);

        this.updateSelectedBtnSkin(index);

        Logger.logBusiness(this.betBtnInfoList[index], 'onSelectedCoinsChange');
    }


    /** 更新被选中按钮的皮肤 */
    updateSelectedBtnSkin(index) {
        const container = this.btnContainer.children;
        for (let i = 0, len = container.length; i < len; i++) {
            if (index == i) {
                container[i].getComponent(cc.Sprite).spriteFrame = this.toggleBgList[1];
            } else {
                container[i].getComponent(cc.Sprite).spriteFrame = this.toggleBgList[0];
            }
        }
    }

    /** 更新按钮的排列方向 */
    motifyBtnDisplayDir(lan) {
        if (lan === LANGUAGE_TYPE.ARAB) {
            this.btnContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
        } else {
            this.btnContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        }
    }

    setSelectCoinsObj(obj) {
        this.selectedCoinsObj = obj;
    }

    getSelectedCoinsObj() {
        return this.selectedCoinsObj;
    }

}
