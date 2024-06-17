



import { FRUIT_ITEM_HEIGHT, FRUIT_ITEM_WIDTH, fruitPosList } from "./constants"


const { ccclass, property } = cc._decorator;
@ccclass
export default class betArea extends cc.Component {

    @property(cc.Prefab)
    betBtn: cc.Prefab = null;

    public betBtnList = [];

    public cacheGuessItems = null;


    onLoad() {
        // console.log(FRUIT_ITEM_HEIGHT);
        // console.log(FRUIT_ITEM_WIDTH);
        // this.initBetArea();
    }

    initBetArea(guessItems) {

        const isSame = this.checkSettingSame(guessItems);

        if (isSame) {
            // console.log('下注信息的配置一致，不更新视图');
            return;
        } else {
            this.cacheGuessItems = guessItems;
        }

        const list = this.composeBetInfo(guessItems);
        for (let i = 0, len = list.length; i < len; i++) {
            const betItem = cc.instantiate(this.betBtn);
            const script = betItem.getComponent('item_bet');
            script.init(list[i]);
            script.setHeight(FRUIT_ITEM_HEIGHT);
            script.setWidth(FRUIT_ITEM_WIDTH);
            betItem.parent = this.node;
            this.betBtnList.push(betItem);
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
                pos: fruitPosList[i]
            }
            tempList.push(obj);
        }

        return tempList;
    }


    getBetBtnById(id) {
        return this.betBtnList[id];
    }

    getBetBtnScriptById(id) {
        return this.betBtnList[id] && this.betBtnList[id].getComponent('item_bet');
    }

    // 本人的下注数量
    addMyBetNumber(info) {
        // console.log('showMyBetNumber', info);
        const { id, betNumber } = info;
        const script = this.getBetBtnScriptById(id);
        script.addMyBetNumber(betNumber);
        script.addTotalNumber(betNumber);
    }


    // 更新所有人下注的币种变化
    updateTotalBetNumber(arr) {

        for (let i = 0; i < arr.length; i++) {
            const script = this.getBetBtnById(i).getComponent('item_bet');
            script.updateTotalNumber(arr[i]);
        }
    }

    /** 更新下注总额  */
    updateBetInfo(totalBetList, myBetList) {

        for (let i = 0, len = totalBetList.length; i < len; i++) {
            const total_item = totalBetList[i];
            const my_item = myBetList[i];
            const script = this.getBetBtnById(i).getComponent('item_bet');
            script.updateTotalNumber(total_item);
            if (my_item > 0) {
                script.setMyBetNumber(my_item);
            }
        }
    }


    /** 更新我的下注记录 */
    updateAllMyBetInfo(obj) {
        const list = Object.keys(obj);
        // console.log(list, obj, '更新我的所有下注记录');
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            const id = parseInt(key);
            const itemScript = this.getBetBtnScriptById(id - 1);
            itemScript.setMyBetNumber(obj[key]);
        }


    }

    /** 更新所有下注的总数 */
    updateAllTotalBetInfo(obj) {
        const list = Object.keys(obj);
        // console.log(list, obj, '更新所有下注的总数');
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            const id = parseInt(key);
            const itemScript = this.getBetBtnScriptById(id - 1);
            itemScript.setTotalNumber(obj[key]);
        }
    }


    resetTotalNumber() {
        this.betBtnList.map((item) => {
            const script = item.getComponent('item_bet');
            script.setTotalNumber(0);
        })
    }


    // 重置下注区域
    resetBetArea() {

        this.betBtnList.map((item) => {
            const script = item.getComponent('item_bet');
            script.resetBetBtnState();
            return item;
        })

    }


    start() {

    }

}

