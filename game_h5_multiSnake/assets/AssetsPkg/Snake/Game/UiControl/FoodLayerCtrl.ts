// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { FRESH_COIN_NUMBER } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import Food from "../Prefab/Food";
import { SnakeDataMgr } from "../SnakeDataMgr";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";
import BaseLayer from "./BaseLayer";

// import { randomColor } from "../Utils/SnakeUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class FoodLayerCtrl extends BaseLayer {


    // public foodPool: cc.NodePool = null;

    @property(cc.Prefab)
    prefab_food: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_body: cc.Prefab = null;

    @property(cc.Camera)
    camera_map: cc.Camera = null;

    public posMax: number = null;

    protected onLoad(): void {
        /** 开启碰撞检测 */
        this.posMax = Math.floor(this.node.width / 2 - 200);

    }


    /** 获取食物的实例 */
    getFoodInstance() {
        let food: cc.Node;
        const npMgr = NodePoolManager.getInstance()
        if (npMgr.CoinNodePool.size() > 0) {
            food = npMgr.CoinNodePool.get();
        } else {
            food = cc.instantiate(this.prefab_food);
        }
        return food;
    }

    /** 生成食物 */
    createFood(pos) {
        const food = this.getFoodInstance();
        const fScript = food.getComponent(Food);
        fScript.init();
        fScript.setFoodColor();
        fScript.setFoodValue(10);
        food.position = pos;
        food.parent = this.node;
        // food.active = false;
    }

    /** 随机位置 */
    createRandomPos() {
        const x = Math.floor(-this.node.width / 2 + this.node.width * Math.random());
        const y = Math.floor(-this.node.height / 2 + this.node.height * Math.random());
        return cc.v3(x, y, 0);
    }


    /**
* （新增代码）获取生成子节点的Generator
*/
    private *_getItemGenerator(length: number) {
        for (let i = 0; i < length; i++) {
            yield this._initItem();
        }
    }


    private *_putFoodToMapGenerator(num: number) {
        const utilMgr = SnakeUtilMgr.getInstance();
        const posList = utilMgr.getRandomPosList(num, this.posMax, -this.posMax);
        for (let i = 0; i < num; i++) {
            yield this.createFood(posList[i]);
        }
    }

    private *_snakeBodyGenerator(length) {
        for (let i = 0; i < length; i++) {
            yield this._initSnakeBody();
        }
    }

    private _initItem() {
        const item = cc.instantiate(this.prefab_food);
        const npMgr = NodePoolManager.getInstance()
        npMgr.CoinNodePool.put(item);
    }

    private _initSnakeBody() {
        const item = cc.instantiate(this.prefab_body);
        const npMgr = NodePoolManager.getInstance();
        npMgr.SnakeBodyNodePool.put(item);
    }


    putFoodToMap(num: number) {
        this.executePreFrame(this._putFoodToMapGenerator(num), 5);
    }


    /** 隐藏可视区外的节点 */
    hideOutSightFood() {

    }


    start() {

        SnakeUtilMgr.getInstance().Seed = SnakeDataMgr.getInstance().seed;
        this.executePreFrame(this._getItemGenerator(100), 5);
        this.executePreFrame(this._snakeBodyGenerator(100), 5);
    }

    // update (dt) {}
}
