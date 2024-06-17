import { Logger } from '../../../../../../Script/Managers/Logger';
import { betAreaPosInfo } from '../../Constants'
import PrefabBetItemCtrl from '../PrefabControl/PrefabBetItemCtrl';

const { ccclass, property } = cc._decorator;
@ccclass
export default class UIBetAreaCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_betArea_item: cc.Prefab = null;


    public betAreaNodeList = [];

    private cacheGuessItems = null;

    onLoad() {
        this.betAreaNodeList = [];
        // this.initBetArea();
    }


    initBetArea(guessItems) {

        const isSame = this.checkSettingSame(guessItems);
        // debugger
        if (isSame) {
            Logger.logBusiness('下注区域的数值一致，不进行更新操作');
            return;
        } else {
            this.cacheGuessItems = guessItems;
        }

        const list = this.composeBetInfo(guessItems);
        for (let i = 0, len = list.length; i < len; i++) {
            const betItem = cc.instantiate(this.prefab_betArea_item);
            const script = betItem.getComponent(PrefabBetItemCtrl);
            // console.log(list[i]);
            // script.init(list[i].id);
            script.init(i);
            this.node.addChild(betItem);
            betItem.position = betAreaPosInfo[i];
            betItem.parent = this.node;
            this.betAreaNodeList.push(betItem);
        }

        Logger.logBusiness(this.betAreaNodeList,'this.betAreaNodeList');

        // console.log(this.betAreaNodeList);

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
                pos: betAreaPosInfo[i]
            }
            tempList.push(obj);
        }

        return tempList;
    }


    /** 初始化下注界面 */
    // initBetArea() {
    //     this.node.removeAllChildren();
    //     for (let i = 0, len = betAreaPosInfo.length; i < len; i++) {
    //         const cItem = cc.instantiate(this.prefab_betArea_item);
    //         const script = cItem.getComponent('main_betArea_item_ctrl');
    //         script.init(i);
    //         this.node.addChild(cItem);
    //         cItem.position = betAreaPosInfo[i];
    //         this.betAreaNodeList.push(cItem);
    //     }
    // }


    /** 根据id获取下注区域的节点 */
    getBetAreaItemNodeById(index) {
        return this.betAreaNodeList[index];
    }


    /** 重置下注区域的所有信息 */
    resetAllBetArea() {
        this.betAreaNodeList.map((item) => {
            const script = item.getComponent(PrefabBetItemCtrl);
            script.resetBetArea();
            return item;
        })
    }



    /** 更新所有下注区域的个人下注金币 */
    // updateAllMyBetNumber(list) {
    //     for (let i = 0, len = list.length; i < len; i++) {

    //         if (0 >= list[i]) {
    //             continue;
    //         }
    //         const info = { index: i, number: list[i] };
    //         this.updateSingleMyBetNumber(info);
    //     }
    // }

    /** 更新所有下注区域的金币总数 */
    // updateAllTotalBetNumber(list) {
    //     for (let i = 0, len = list.length; i < len; i++) {

    //         if (0 >= list[i]) {
    //             continue;
    //         }
    //         const info = { index: i, number: list[i] };
    //         this.updateSingleTotalBetNumber(info);
    //     }
    // }


    /** 增加我的下注金额  */
    addMyBetNumber(info) {
        const { id, betNumber } = info;
        const item = this.getBetAreaItemNodeById(id);
        const script = item.getComponent(PrefabBetItemCtrl);
        script.addMyBetNumber(betNumber);
        script.addTotalNumber(betNumber);
    }


    /** 更新我的下注记录 */
    updateAllMyBetInfo(obj) {
        const list = Object.keys(obj);
        // console.log(list, obj, '更新我的所有下注记录');
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            const id = parseInt(key);
            const item = this.getBetAreaItemNodeById(id - 1);
            item.getComponent(PrefabBetItemCtrl).setMyBetNumber(obj[key]);
        }
    }


    /** 更新所有下注的总数 */
    updateAllTotalBetInfo(obj) {
        const list = Object.keys(obj);
        // console.log(list, obj, '更新所有下注的总数');
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            const id = parseInt(key);
            const item = this.getBetAreaItemNodeById(id - 1);
            item.getComponent(PrefabBetItemCtrl).setTotalNumber(obj[key]);
        }
    }




    // /**更新某个下注区域的下注总额 */
    // updateSingleTotalBetNumber(info) {
    //     const { index, number } = info;
    //     const item = this.getBetAreaItemNodeById(index);
    //     const script = item.getComponent(PrefabBetItemCtrl);
    //     script.setTotalNumber(number);
    // }


    // /** 更新某个下注区域的个人下注金币 */
    // updateSingleMyBetNumber(info) {
    //     const { index, number } = info;
    //     const item = this.getBetAreaItemNodeById(index);
    //     const script = item.getComponent(PrefabBetItemCtrl);
    //     script.setMyBetNumber(number);
    // }

    /** 更新下注成功的提示 */
    // updateBetSuccess(param) {
    //     const { index, number, totalBet } = param;
    //     this.updateSingleTotalBetNumber({ index, number: totalBet });
    //     this.updateSingleMyBetNumber({ index, number })
    // }

    /** 更新节点信息*/
    // updateBetNodeInfo(totalBetList, myBetList) {
    //     this.updateAllMyBetNumber(myBetList);
    //     this.updateAllTotalBetNumber(totalBetList);
    // }

}
