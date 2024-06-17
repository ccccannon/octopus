import { Logger } from "../../../../../../Script/Managers/Logger";

const { ccclass, property } = cc._decorator;
@ccclass
export default class UIRateCtrl extends cc.Component {

    private cacheGuessItems: any = null;

    initRate(guessItems) {

        const isSame = this.checkSettingSame(guessItems);
        // debugger
        if (isSame) {
            Logger.logBusiness('倍率的数值一致，不进行更新操作');
            return;
        } else {
            this.cacheGuessItems = guessItems;
        }

        const list = this.composeBetInfo(guessItems);
        const children = this.node.children;  
        for (let i = 0, len = list.length; i < len; i++) {
            // const betItem = cc.instantiate(this.prefab_betArea_item);
            // const script = betItem.getComponent(PrefabBetItemCtrl);
            const rateNode = children[i];
            rateNode.getComponent(cc.Label).string = 'x' + list[i].odds
        }

    }


    /** 检查配置是否一致 */
    checkSettingSame(list) {

        let isSame = true;
        if (!this.cacheGuessItems) {
            this.cacheGuessItems = list;
            isSame = false;
        } else {
            for (let i = 0, len = list.length; i < len; i++) {
                const cacheItem = this.cacheGuessItems[i];
                const listItem = list[i];
                if (cacheItem.id != listItem.id || cacheItem.odds != listItem.odds) {
                    isSame = false;
                    break;
                }
            }
        }
        return isSame;
    }


    /** 组装下注信息 */
    composeBetInfo(guessItems) {
        let tempList = [];
        for (let i = 0, len = guessItems.length; i < len; i++) {
            const item = guessItems[i];
            const obj = {
                id: item.id,
                odds:item.odds
            }
            tempList.push(obj);
        }

        return tempList;
    }


}