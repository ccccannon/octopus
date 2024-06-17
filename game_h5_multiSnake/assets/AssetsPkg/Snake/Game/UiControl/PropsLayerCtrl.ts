// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { PorpsType, SHIELD_PERSIST_BORN } from "../Constant";
import { BaseProp } from "../Prefab/BaseProp";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";
import BaseLayer from "./BaseLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PropsLayerCtrl extends BaseLayer {

    @property(cc.Prefab)
    prefab_props: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    private propsPool: cc.NodePool = null;

    private propsList: Array<cc.Node> = [];

    private posMax: number = null;

    onLoad() {

        this.posMax = Math.floor(this.node.width / 2 - 200);

    }

    protected onEnable(): void {
        if (!this.propsPool) {
            this.propsPool = new cc.NodePool();
        }
        this.framingLoad(20);
    }


    protected onDisable(): void {
        this.propsPool.clear();
        this.propsPool = null;
    }


    /** 随机位置 */
    randomPos() {
        // get random position
        let width = this.node.parent.width;
        let height = this.node.parent.height;
        let x = Math.round(Math.random() * (width - 500)) - width / 2;
        let y = Math.round(Math.random() * (height - 500)) - height / 2;
        return cc.v3(x, y, 0);
    }


    /** 将道具加入到地图中 */
    addPropsToNode(pos: cc.Vec3, type: number) {
        const prop = this.getPorpsInstance();
        // const pos = this.randomPos();
        prop.parent = this.node;
        prop.position = pos;
        // prop.name = 'Props_Coins';
        prop.getComponent(BaseProp).initPorps(type)
        // prop.propsType =  
        this.propsList.push(prop);

        // console.log('将道具加入到地图中',this.node.children.length);
    }


    /**获取道具实例 */
    getPorpsInstance() {
        let prop;
        if (this.propsPool.size() > 0) {
            prop = this.propsPool.get();
        } else {
            prop = cc.instantiate(this.prefab_props);
        }
        return prop;
    }

    /**
 * （新增代码）获取生成子节点的Generator
 */
    private *_getItemGenerator(length: number) {
        for (let i = 0; i < length; i++) {
            yield this._initItem();
        }
    }


    private *_porpsItemGenerator(posList, typeList) {
        for (let i = 0, len = posList.length; i < len; i++) {
            yield this.addPropsToNode(posList[i], typeList[i]);
        }
    }


    /**
     * （和拆分前的代码一致）
     */
    private _initItem() {
        const item = cc.instantiate(this.prefab_props);
        this.propsPool.put(item);
    }

    /**
 * 实现分帧加载
 */
    async framingLoad(length: number) {
        await this.executePreFrame(this._getItemGenerator(length), 1);
    }



    async frameCreateProps(posList, typeList) {
        await this.executePreFrame(this._porpsItemGenerator(posList, typeList), 2);
    }

    // /**
    //  * 分帧执行 Generator 逻辑
    //  *
    //  * @param generator 生成器
    //  * @param duration 持续时间（ms）
    //  *          每次执行 Generator 的操作时，最长可持续执行时长。
    //  *          假设值为8ms，那么表示1帧（总共16ms）下，分出8ms时间给此逻辑执行
    //  */
    // private executePreFrame(generator: Generator, duration: number) {
    //     return new Promise((resolve, reject) => {
    //         let gen = generator;
    //         // 创建执行函数
    //         let execute = () => {

    //             // 执行之前，先记录开始时间戳
    //             let startTime = new Date().getTime();

    //             // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
    //             for (let iter = gen.next(); ; iter = gen.next()) {

    //                 // 判断是否已经执行完所有 Generator 的小代码段
    //                 // 如果是的话，那么就表示任务完成
    //                 if (iter == null || iter.done) {
    //                     resolve(null);
    //                     return;
    //                 }

    //                 // 每执行完一段小代码段，都检查一下是否
    //                 // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
    //                 if (new Date().getTime() - startTime > duration) {

    //                     // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
    //                     this.scheduleOnce(() => {
    //                         execute();
    //                     });
    //                     return;
    //                 }
    //             }
    //         };

    //         // 运行执行函数
    //         execute();
    //     });
    // }


    /** 更新渲染帧 */
    updateRenderFrame(dt) {

        if (!this.propsList || this.propsList.length <= 0) {
            return;
        }
        for (let i = 0, len = this.propsList.length; i < len; i++) {
            const item = this.propsList[i];
            if (item.isValid) {
                item.getComponent(BaseProp).updateRenderFrame(dt);
            }
        }
    }


    /** 创建道具 */
    createProps() {

        const utilMgr = SnakeUtilMgr.getInstance();

        const len = 15;

        const typeList = [3, 3, 3, 3, 3];

        const posList = utilMgr.getRandomPosList(len, this.posMax, -this.posMax);

        this.frameCreateProps(posList, typeList);


    }

    // update (dt) {}
}
