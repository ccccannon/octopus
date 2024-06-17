

const { ccclass, property } = cc._decorator;

import { GameDataManager } from "../../Managers/GameDataManager";
import { GAME_PROPS, GAME_STATUS } from "../GameData";

const PorpInfo = [
    {
        name: 'pop',
        type: 0,
        number: 1,
        useTimes: 2,
        buyTimes: 2,
    },
    {
        name: 'rollback',
        type: 1,
        number: 1,
        useTimes: 2,
        buyTimes: 2,
    },
    {
        name: 'shuffle',
        type: 2,
        number: 1,
        useTimes: 2,
        buyTimes: 2,
    },
]

@ccclass
export default class PropsCtrl extends cc.Component {

    @property([cc.Node])
    propsNodeList: Array<cc.Node> = [];

    @property([cc.SpriteFrame])
    numberStatusList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    forbidViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    normalViewList: Array<cc.SpriteFrame> = [];

    public propsInfo: any = null;

    ininPorpsInfo() {
        this.propsInfo=[{
            id:0,
            number:2,
            buyTimes:2,
            useNum:0,
            residueNum:2
        },{
            id:1,
            number:2,
            buyTimes:2,
            useNum:0,
            residueNum:2
        },{
            id:2,
            number:2,
            buyTimes:2,
            useNum:0,
            residueNum:2
        }]
        for (let i = 0; i < 3; i++) {
            // this.updatePropInfoById(i);
            this.resumePropUseById(i);
            this.costPorpsById(i);
        }
    }

    /** 更新单个道具的信息 */
    updatePropInfoById(id) {

        const node = this.propsNodeList[id]
        const numberIcon = node.children[0];
        numberIcon.getComponent(cc.Sprite).spriteFrame = this.numberStatusList[this.propsInfo[id].residueNum];
        // this.costPorpsById(id);

    }

    /** 禁止点击 */
    forbidPropUseById(id) {
        const node = this.propsNodeList[id]
        const numberIcon = node.children[0];
        // 隐藏数量展示
        numberIcon.active = false;
        // 按钮禁用
        node.getComponent(cc.Button).interactable = false;
        // 更换图片
        node.getComponent(cc.Sprite).spriteFrame = this.forbidViewList[id];
    }

    /** 恢复道具的使用 */
    resumePropUseById(id: number) {
        const node = this.propsNodeList[id]
        const numberIcon = node.children[0];
        // 隐藏数量展示
        numberIcon.active = true;
        // 更新道具数量
        this.updatePropInfoById(id);
        // 按钮禁用
        node.getComponent(cc.Button).interactable = true;
        // 更换图片
        node.getComponent(cc.Sprite).spriteFrame = this.normalViewList[id];
    }


    /** 更新数据信息 */
    updatePropsInfo(info) {

        this.propsInfo = this.propsInfo.map((item) => {
            if (item.id == info.id) {
                item = info;
            }
            return item;
        })

    }

    /** 消耗道具 */
    costPorpsById(id) {

        const useTime = this.getPorpsUseTimesById(id);

        if (useTime >= 2) {
            this.forbidPropUseById(id);
        } else {
            this.updatePropInfoById(id);
        }

    }

    /**增加道具 */
    addPropsById(id) {
        if (this.propsInfo[id].number < 2) {
            this.propsInfo[id].number += 1;
            this.propsInfo[id].buyTimes--;
            this.updatePropInfoById(id);
        } else {
            console.log('this props is limited !');
        }
    }


    /** 获取当前道具的购买次数 */
    getPorpsUseTimesById(id) {
        return this.propsInfo[id].useNum;
    }

    /**根据id获取道具 数量  */
    getPropsNumberById(id) {
        return this.propsInfo[id].residueNum;
    }

    getProps(id){
        return this.propsInfo[id];
    }


    init() {
        const info = this.getPropsInfo();
        this.propsInfo = info;
        this.ininPorpsInfo();
    }


    /** 获取道具信息 */
    getPropsInfo() {
        // console.log(GameDataManager.getInstance().Props, '获取道具信息');
        return GameDataManager.getInstance().Props;
    }


    /** 重置购买和使用次数 */
    resetBuyAndUseTime() {
        for (let i = 0; i < PorpInfo.length; i++) {
            this.propsInfo[i].buyTimes = 2;
            this.propsInfo[i].useTimes = 2;
            this.resumePropUseById(i);
        }
    }



    protected onLoad(): void {
        this.init();
    }

    start() {

    }

    // update (dt) {}
}
