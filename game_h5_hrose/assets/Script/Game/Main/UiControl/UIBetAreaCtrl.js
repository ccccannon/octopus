import { betAreaPosInfo } from '../../Constants'

cc.Class({
    extends: cc.Component,

    properties: {

        prefab_betArea_item: cc.Prefab,

    },


    onLoad() {
        this.betAreaNodeList = [];
        this.initBetArea();

    },

    /** 初始化下注界面 */
    initBetArea() {
        this.node.removeAllChildren();
        for (let i = 0, len = betAreaPosInfo.length; i < len; i++) {
            const cItem = cc.instantiate(this.prefab_betArea_item);
            const script = cItem.getComponent('main_betArea_item_ctrl');
            script.init(i);
            this.node.addChild(cItem);
            cItem.position = betAreaPosInfo[i];
            this.betAreaNodeList.push(cItem);
        }
    },


    /** 根据id获取下注区域的节点 */
    getBetAreaItemNodeById(index) {
        return this.betAreaNodeList[index];
    },


    /** 重置下注区域的所有信息 */
    resetAllBetArea() {
        this.betAreaNodeList.map((item) => {
            const script = item.getComponent('main_betArea_item_ctrl');
            script.resetBetArea();
            return item;
        })
    },



    /** 更新所有下注区域的个人下注金币 */
    updateAllMyBetNumber(list) {
        for (let i = 0, len = list.length; i < len; i++) {

            if (0 >= list[i]) {
                continue;
            }
            const info = { index: i, number: list[i] };
            this.updateSingleMyBetNumber(info);
        }
    },

    /** 更新所有下注区域的金币总数 */
    updateAllTotalBetNumber(list) {
        for (let i = 0, len = list.length; i < len; i++) {

            if (0 >= list[i]) {
                continue;
            }
            const info = { index: i, number: list[i] };
            this.updateSingleTotalBetNumber(info);
        }
    },

    /**更新某个下注区域的下注总额 */
    updateSingleTotalBetNumber(info) {
        const { index, number } = info;
        const item = this.getBetAreaItemNodeById(index);
        const script = item.getComponent('main_betArea_item_ctrl');
        script.setTotalNumber(number);
    },


    /** 更新某个下注区域的个人下注金币 */
    updateSingleMyBetNumber(info) {
        const { index, number } = info;

        // console.log(index, number);

        // debugger
        const item = this.getBetAreaItemNodeById(index);
        const script = item.getComponent('main_betArea_item_ctrl');
        script.setMyBetNumber(number);
    },

    /** 更新下注成功的提示 */
    updateBetSuccess(param) {
        const { index, number, totalBet } = param;
        this.updateSingleTotalBetNumber({ index, number: totalBet });
        this.updateSingleMyBetNumber({ index, number })
    },



    /** 更新节点信息*/
    updateBetNodeInfo(totalBetList, myBetList) {
        this.updateAllMyBetNumber(myBetList);
        this.updateAllTotalBetNumber(totalBetList);
    },


    start() {
        // this.resetBetArea();
    },

});
