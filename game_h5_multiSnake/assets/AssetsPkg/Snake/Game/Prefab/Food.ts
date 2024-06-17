// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { FoodMoveSpeed } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import SoundManager from "../Manager/SoundManager";
import BaseSnake from "./BaseSnake";
import DeathBody from "./DeathBody";
import SnakeModeGold from "./SnakeModeGold";
import SnakeModeUnlimited from "./SnakeModeUnlimited";
import SnakeModeUnlimitedPlayer from "./SnakeModeUnlimitedPlayer";

const { ccclass, property } = cc._decorator;

enum FoodStates {
    STATIC,
    MOVEING,
    EATED,
}

/** 颜色列表 */
const colorList = [
    cc.color(255, 27, 112),
    cc.color(239, 61, 253),
    cc.color(244, 142, 17),
    cc.color(27, 112, 254),
    cc.color(59, 206, 127),
    cc.color(255, 235, 148),
]

@ccclass
export default class Food extends cc.Component {


    public targetNode: cc.Node = null;

    public state: FoodStates = FoodStates.STATIC;

    public point: cc.Vec3 = cc.Vec3.ZERO;

    protected coinValue: number = 1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 设置目标节点 */
    setTargetNode(node) {

        if (this.state == FoodStates.MOVEING) {
            return;
        }
        this.targetNode = node;
        this.state = FoodStates.MOVEING;
    }

    /** 获取食物的当前状态 */
    getState() {
        return this.state;
    }

    protected update(dt: number): void {

        if (this.state != FoodStates.MOVEING) {
            return;
        }

        if (!this.targetNode.isValid) {
            this.state = FoodStates.STATIC;
            return;
        }
        // this.targetNode.isValid

        this.node.position = this.node.position.add(this.targetNode.position.sub(this.node.position).normalize().mul(FoodMoveSpeed * dt));
        if (this.node.position.sub(this.targetNode.position).mag() < 30) {
            this.settle();
            this.state = FoodStates.EATED;
        }

    }

    init() {
        this.state = FoodStates.STATIC;
        this.targetNode = null;
    }


    setFoodColor() {
        this.node.color = colorList[Math.floor(Math.random() * colorList.length)];
    }

    /** 结算逻辑 */
    protected settle() {

        /** TODO  */
        // this.targetNode.getComponent(cc)

        // console.log('食物的结算逻辑');

        if (this.targetNode.getComponent(SnakeModeGold)) {
            this.targetNode.getComponent(SnakeModeGold).addOwnedCoinNumber(this.coinValue);
        }

        if (this.targetNode.getComponent(SnakeModeUnlimited)) {
            this.targetNode.getComponent(SnakeModeUnlimited).updateSnakeScore(this.coinValue);
            if (this.targetNode.getComponent(SnakeModeUnlimitedPlayer)) {
                if (this.node.getComponent(DeathBody)) {
                    SoundManager.getInstance().eatBigFoodEffect();
                } else {
                    SoundManager.getInstance().eatLittleFoodEffect();
                }
            }

        }


        if (this.node.getComponent(DeathBody)) {
            NodePoolManager.getInstance().DeathBodyNodePool.put(this.node);
            return;
        }

        NodePoolManager.getInstance().CoinNodePool.put(this.node);
        // SoundManager.getInstance().eatLittleFoodEffect();

    }



    /** 设置食物的价值 */
    setFoodValue(num?: number) {
        const value = num || 1;
        this.coinValue = value;
    }

    start() {

    }

}
