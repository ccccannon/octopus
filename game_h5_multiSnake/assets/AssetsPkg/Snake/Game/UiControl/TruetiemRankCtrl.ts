// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { LANGUAGE_TYPE, trueTimeItem } from "../Constant";
import { SnakeDataMgr } from "../SnakeDataMgr";
import item_trueTimeRank from "../Prefab/item/item_trueTimeRank";
import GameMgr from "../../../../Script/Managers/GameMgr";

const { ccclass, property } = cc._decorator;

const playerPosList = [

    // cc.v3(0, 135, 0),
    // cc.v3(0, 105, 0),
    cc.v3(0, 100, 0),
    cc.v3(0, 50, 0),
    cc.v3(0, 0, 0),
    cc.v3(0, -50, 0),
    cc.v3(0, -100, 0),
    // cc.v3(0, -75, 0),
    // cc.v3(0, -105, 0),
    // cc.v3(0, -135, 0),

]


@ccclass
export default class TruetiemRankCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_trueTimerankItem: cc.Prefab = null;

    // public nodeList: Array<cc.Node> = [];

    /**展示列表 */
    public showList: Array<trueTimeItem> = [];

    /** 总列表 */
    public totalList: Array<trueTimeItem> = [];

    public scoreUpdateTimes: number = 0;

    public myPlayer: trueTimeItem = null;

    public displayDir: number = 1;


    protected onLoad(): void {
        this.addEventListener();
        // this.comfirmDirNumber();
    }

    protected onDestroy(): void {
        this.removeEventListener();
        // this.node.removeAllChildren();
        // this.totalList = null;
        /** 清空缓存数据 */
        SnakeDataMgr.getInstance().AiSnakeList = [];
    }

    /** 添加事件监听 */
    addEventListener() {
        cc.systemEvent.on('SCORE_UPDATE', this.onScoreUpdate, this);
    }

    /** 移除事件监听 */
    removeEventListener() {
        cc.systemEvent.off('SCORE_UPDATE', this.onScoreUpdate, this);
    }

    /**分数更新 */
    onScoreUpdate(score, id) {
        this.scoreUpdateTimes++;
        this.updateScoreById(score, id);
        if (this.scoreUpdateTimes % 20 == 0) {
            this.updateRankPosition();
        }
    }

    /** 初始化 游戏界面 */
    initRankItem(rankInfo, idx) {
        const rankItem = cc.instantiate(this.prefab_trueTimerankItem);
        rankItem.getComponent(item_trueTimeRank).init(rankInfo);
        rankItem.parent = this.node;
        const pos = playerPosList[idx];
        rankItem.position = pos;
        // this.nodeList.push(rankItem);
    }

    /** 额外加入的排行 */



    /** 确定方向系数 */

    comfirmDirNumber() {

        const language = GameMgr.getInstance().Language;
        if (language == LANGUAGE_TYPE.ARAB) {
            this.displayDir = -1;
        } else {
            this.displayDir = 1;
        }
        // console.log(this.displayDir);

    }



    /** 初始化列表 */
    initRankList(list) {

        /** 缓存玩家信息 */
        this.showList = list;

        for (let i = 0, len = list.length; i < len; i++) {
            const info = list[i];
            this.initRankItem(info, i);
        }
    }


    /** 根据id获取玩家信息  */
    getInfoById(id: number, list: Array<trueTimeItem>) {

        let item: trueTimeItem = null;
        for (let i = 0, len = list.length; i < len; i++) {
            if (id == list[i].id) {
                item = list[i];
                break;
            }
        }
        return item;
    }

    /** 判断某个id是否存在于某个数组 */
    isContainId(id: number, list: Array<trueTimeItem>) {

        let isContain = false;
        for (let i = 0, len = list.length; i < len; i++) {
            if (id === list[i].id) {
                isContain = true;
                break;
            }
        }
        return isContain;
    }


    /** 更新分数数据 */
    updateScoreById(score: number, id: number) {
        /** 更新分数 */

        if (id == GameMgr.getInstance().UserId) {
            this.totalList[100].score = score;
        } else {
            this.totalList[id].score = score;
        }

    }

    /** 获取展示列表 */
    getShowList(list) {

        let tempList: Array<trueTimeItem> = [];
        if (list.length < 5) {
            tempList = list;
        } else {

            const tList = JSON.parse(JSON.stringify(list));
            tList.sort((a, b) => {
                return b.score - a.score;
            });
            tList.map((item, index) => {
                item.rank = index + 1;
                return item
            })

            /** 更新需要展示的列表 */
            tempList = tList.slice(0, 5);

            /** 如果玩家不在前十， 展示玩家排名在第十的位置 */
            if (!this.isContainId(SnakeDataMgr.getInstance().UserId, tempList)) {
                const player = this.getInfoById(SnakeDataMgr.getInstance().UserId, tList);
                tempList.pop();
                tempList.push(player);
            };
        }
        return tempList;
    }


    /**  交换两个节点的位置 */
    swapTwoNode(node1: cc.Node, node2: cc.Node) {

        const pos1 = node1.position;
        const pos2 = node2.position;
        cc.tween(node1).to(0.5, { position: pos2 }).start();
        cc.tween(node2).to(0.5, { position: pos1 }).start();
    }



    getNodeByPropsName(prop: string, val: any) {
        const list = this.node.children;
        let item = null;
        for (let i = 0, len = list.length; i < len; i++) {
            const node = list[i];
            const script = node.getComponent(item_trueTimeRank);
            if (script[prop] == val) {
                item = node;
                break;
            }
        }
        return item;
    }

    /** 根据id获取节点  */
    getNodeById(id) {
        const list = this.node.children;
        let item = null;
        for (let i = 0, len = list.length; i < len; i++) {
            const node = list[i];
            const script = node.getComponent(item_trueTimeRank);
            if (script.id == id) {
                item = node;
                break;
            }
        }
        return item;
    }


    /**交换排行的位置 */
    updateRankPosition() {

        const list = this.getShowList(this.totalList);

        // console.log(JSON.stringify(list), '交换排行的位置');

        for (let i = 0, len = list.length; i < len; i++) {
            const info = list[i];
            let node: cc.Node = this.getNodeByPropsName('id', info.id);
            let script: item_trueTimeRank = null;
            if (!node) {
                node = this.node.children[4];
                if (node.getComponent(item_trueTimeRank).id === GameMgr.getInstance().UserId) {
                    // continue;
                    node = this.node.children[3];
                }
                const script = node.getComponent(item_trueTimeRank);
                script.init(info);
                node.stopAllActions();
                node.setSiblingIndex(info.rank - 1);
                const pos = playerPosList[info.rank - 1];
                // pos.x *= this.displayDir;
                cc.tween(node).to(0.5, { position: pos }).start();
                continue;
            }
            script = node.getComponent(item_trueTimeRank);
            script.setScore(info.score);
            /**  判断当前的排行和计算出来的排行是否一致，一致就不执行移动逻辑 */
            if (script.rank == info.rank) {
                // console.log(' 判断当前的排行和计算出来的排行是否一致，一致就不执行移动逻辑');
                continue;
            }
            script.setRank(info.rank);

            const pos = info.rank > playerPosList.length ? playerPosList[playerPosList.length - 1] : playerPosList[info.rank - 1]

            /** 布局的改变导致位置的变化 */
            // pos.x *= this.displayDir;

            node.stopAllActions();
            node.setSiblingIndex(info.rank - 1);
            cc.tween(node).to(0.5, { position: pos }).start();
        }

    }


    /** 往排行数据中增加新的数据 */
    addSnakeInfoToTotalList(info: trueTimeItem) {
        this.totalList.push(info);
    }


    initRankData() {
        const sdm = SnakeDataMgr.getInstance();
        this.totalList = JSON.parse(JSON.stringify(sdm.AiSnakeList));

        // console.log(this.totalList, 'initRankData');

        const player = sdm.getPlayerInfo();
        this.totalList.push(player);
        // this.updateScoreById();
        // this.rerankTotalList();
        const showList = this.getShowList(this.totalList);
        this.initRankList(showList);
        // this.updateRankPosition();
    }

    showRankList() {
        this.node.active = true;
    }

    start() {

        // setTimeout(() => {
        //     this.updateScoreById(10000, 1005);
        //     this.updateRankPosition();
        // }, 3000)

    }

    // update (dt) {}
}
