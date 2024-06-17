import { GameDataManager } from "../../Managers/GameDataManager";
import SoundManager from "../../Managers/SoundManager";
import { BlockType, containerPosList, arabContainerPosList, popPosList } from "../GameData";
import BlockContainerCtrl from "./BlockContainerCtrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CollectContainerCtrl extends cc.Component {


    public collectList: Array<BlockType> = [];

    @property(cc.Prefab)
    prefab_block: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_effect_remove: cc.Prefab = null;

    @property(BlockContainerCtrl)
    blockContainer: BlockContainerCtrl = null;

    @property(cc.Node)
    popContainer: cc.Node = null;

    public diffcontainerPosList: Array<cc.Vec3> = [];

    public popNodeList: Array<cc.Node> = [];

    public blockInstanceList: Array<cc.Node> = [];

    public blockNodePool: cc.NodePool = null;

    public removeEffectPool: cc.NodePool = null;

    protected onLoad(): void {
        this.initBlockNodePool();
        this.initRemoveEffectNodePool();
    }

    protected onEnable(): void {
        this.addCollectContainerListener();
        // @ts-ignore 
        this.diffcontainerPosList = window.localLang === window.languageType.EN ? containerPosList : arabContainerPosList;

    }


    protected onDisable(): void {
        this.removeCollectContainerListener();
    }


    /** 添加收集框的监听 */
    addCollectContainerListener() {
        cc.systemEvent.on('rollback', this.blockRollback, this);
        cc.systemEvent.on('shiftBlock', this.shiftBlock, this);
    }

    /** 移除收集框的事件监听 */
    removeCollectContainerListener() {
        cc.systemEvent.off('rollback', this.blockRollback, this);
        cc.systemEvent.off('shiftBlock', this.shiftBlock, this);
    }


    /** 重置收集框的数据 */
    resetCollectContainer() {
        this.node.removeAllChildren();
        this.blockInstanceList = [];
        this.collectList = [];
        this.popContainer.removeAllChildren();
        // this.popNodeList = [];

    }


    /** 初始化消除动画的节点池 */
    initRemoveEffectNodePool() {

        if (!this.removeEffectPool) {
            this.removeEffectPool = new cc.NodePool();
        }

        for (let i = 0; i < 4; i++) {
            const effect_remove = cc.instantiate(this.prefab_effect_remove);
            this.removeEffectPool.put(effect_remove);
        }

    }


    /** 初始化方块节点池 */
    initBlockNodePool() {
        if (!this.blockNodePool) {
            this.blockNodePool = new cc.NodePool();
        }
        for (let i = 0; i < 10; i++) {
            const block = cc.instantiate(this.prefab_block);
            this.blockNodePool.put(block);
        }
    }

    /** 获取下一个方块的插入位置 */
    getNextBlockIndex(block) {

        let sortIndex = -1;

        // for (let i = 0; i < this.collectList.length; i++) {
        //     if (this.collectList[i] && this.collectList[i].type == block.type && this.collectList[i + 1] && this.collectList[i + 1].type != block.type) {
        //         sortIndex = i + 1;
        //     }
        // }

        // if (sortIndex < 0) {
        //     sortIndex = this.collectList.length;
        // }

        if (this.collectList.length < 2) {
            sortIndex = this.collectList.length;
        } else {
            for (let i = 0; i < this.collectList.length; i++) {
                if (this.collectList[i].type == block.type) {
                    sortIndex = i + 1;
                }
            }
        }

        if (sortIndex < 0) {
            sortIndex = this.collectList.length;
        }

        return sortIndex;
        // console.log(sortIndex, 'sortIndex');

    }

    /** 将方块信息加入列表 */
    addBlockInfoToList(block) {

        const index = this.getNextBlockIndex(block);

        // console.log(index);

        this.collectList.splice(index, 0, block);

        // console.log(this.collectList);
        this.addBlockToCollectContainer(block, index);

        this.moveBlock();
    }



    /** 恢复数据*/
    resumeBlockToSlot(block) {
        this.collectList.push(block);
        this.resumeBlockInContainer(block);
    }



    /** 判断是否已经满了 */
    isContainerFull() {

        /** 判断未来是否能消除 */
        let willRemove = false;
        const temp = {};
        for (let i = 0; i < this.collectList.length; i++) {
            const item = this.collectList[i];
            if (!temp[item.type]) {
                temp[item.type] = 1;
            } else {
                temp[item.type]++;
                if (temp[item.type] >= 3) {
                    willRemove = true;
                    break;
                }
            }
        }

        const isFull = this.collectList.length >= 7 ? true : false;

        return isFull && !willRemove;

    }



    /**移动方块 */
    moveBlock() {
        for (let i = 0; i < this.blockInstanceList.length; i++) {
            const item = this.blockInstanceList[i];
            // if (item.active) {
            cc.tween(item).to(0.3, { position: this.diffcontainerPosList[i] }, { easing: 'sineOut' }).start();
            // }
        }
    }

    /**获取方块实体 */
    getBlockInstance() {
        let block;
        if (this.blockNodePool.size() > 0) {
            block = this.blockNodePool.get();
        } else {
            block = cc.instantiate(this.prefab_block);
        }
        block.active = true;
        return block;
    }

    /**获取移除动画实体 */
    getRemoveEffectInstance() {
        let effect;
        if (this.removeEffectPool.size() > 0) {
            effect = this.removeEffectPool.get();
        } else {
            effect = cc.instantiate(this.prefab_effect_remove);
        }
        return effect;
    }


    /** 往容器内放置方块 */
    addBlockToCollectContainer(block, index) {
        // block = JSON.parse(JSON.stringify(block));
        let item = this.getBlockInstance();
        item.parent = this.node;
        item.active = false;
        item.setSiblingIndex(index);
        item.position = this.diffcontainerPosList[index];
        // block.higherThanBlocks = [];
        // block.lowerThanBlocks = [];
        const script = item.getComponent('prefab_block_ctrl');
        script.init(block);
        script.removeClickEvent();
        // this.blockInstanceList.push(item);
        this.blockInstanceList.splice(index, 0, item);
    }

    /** 恢复容器中放置的方块 */
    resumeBlockInContainer(block) {
        let item = this.getBlockInstance();
        item.parent = this.node;
        item.position = this.diffcontainerPosList[item.getSiblingIndex()];
        const script = item.getComponent('prefab_block_ctrl');
        // console.log(block.lowerThanBlocks,'1111111111111111111');
        script.init(block);
        this.blockInstanceList.push(item);
        setTimeout(() => {
            script.removeClickEvent();
            this.moveBlock();
        })
    }

    /** 判断是否可消除 */
    isCanRemove() {
        // debugger
        let isRemove = false;
        let removeType = -1;
        let obj = {};
        const children = this.blockInstanceList;
        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            if (!item.active) {
                continue;
            }
            const script = item.getComponent('prefab_block_ctrl');
            const type = script.bInfo.type;

            if (!obj[type]) {
                obj[type] = 1;
            } else {
                obj[type]++;
                if (obj[type] >= 3) {
                    isRemove = true;
                    removeType = type;
                    break;
                }

            }

        }
        // console.log(isRemove, removeType);
        return { isRemove, removeType }

    }

    /** 消除 */
    checkRemove() {

        const { isRemove, removeType } = this.isCanRemove();
        if (!isRemove) {
            const isFull = this.isContainerFull();
            if (isFull) {
                //TODO
                cc.systemEvent.emit('onGameEnd');
            }

        } else {

            // 移除操作
            this.remove(removeType);

        }

    }





    /** 显示所有方块 */
    showAllBlock() {
        this.blockInstanceList.map((item) => {
            item.active = true;
            item.getComponent('prefab_block_ctrl').checkIsClickable();
            return item;
        })
        // this.moveBlock();
    }

    /** 根据id显示节点 */
    showBlockById(id) {

        this.blockInstanceList.map((item) => {
            if (item.getComponent('prefab_block_ctrl').bInfo.id == id) {
                item.active = true;
            }
            return item;
        })

    }



    /** 消除 */
    remove(type) {

        // 消除音效
        // cc.game.soundMgr.playEffectRemove();
        SoundManager.getInstance().playEffectRemove();

        let count = 0;
        for (let i = this.blockInstanceList.length - 1; i >= 0; i--) {
            if (count >= 3) {
                break;
            }
            const item = this.blockInstanceList[i];
            const script = item.getComponent('prefab_block_ctrl');
            if (item.active && script.bInfo.type == type) {
                count++;
                const pos = item.position;
                this.removeEffect(pos, count);
                this.blockNodePool.put(item);
                this.blockInstanceList.splice(i, 1);
                // 将状态置为消除
                script.bInfo.status = 2;
                // 对数据进行处理 只有为第一关时才处理
                if (this.blockContainer.currentStage == 1) {
                    // GameDataManager.getInstance().updateMapInfo(script.bInfo);
                    GameDataManager.getInstance().updateRemovedList(script.bInfo);
                }
                // item.active = false;
                this.collectList = this.collectList.filter((item) => {
                    return item.id != script.bInfo.id;
                })
            }

        }

        /** 消除后 记录剩下块的类型 */
        // const typeList = this.blockContainer.getUnremoveBlockTypeList();

        // GameDataManager.getInstance().BlockType = typeList;

        // this.blockContainer.getUnremoveBlockTypeList();

    }


    /** 消除动效 */
    removeEffect(pos, count) {

        const effect = this.getRemoveEffectInstance();

        // console.log(effect);
        effect.position = pos;
        effect.parent = this.node;
        const anima = effect.getComponent(cc.Animation);
        // console.log(anima,'anima');
        const instance = anima.play();
        // console.log(instance.duration);

        setTimeout(() => {
            this.removeEffectPool.put(effect);
            if (count >= 3) {
                this.moveBlock();
                if (this.blockContainer.restBlockNumber <= 10) {
                    // 判断游戏是否通关
                    cc.systemEvent.emit('checkStagePass');
                }
            }
        }, 0.5 * 1000)
    }


    /** 回退操作 */

    blockRollback() {

        if (this.collectList.length <= 0) {
            console.log('collect container has no block');
            return;
        }
        const lastBlock = this.collectList.pop();
        const block = this.blockInstanceList.pop();
        // console.log(block.position.x, block.position.y);
        const worldPos = this.node.convertToWorldSpaceAR(block.position);
        const targetPos = this.blockContainer.node.convertToWorldSpaceAR(lastBlock.pos)

        const callback = () => {
            lastBlock.node.getComponent('prefab_block_ctrl').resumeBlock();
            lastBlock.node.setSiblingIndex(999);
            this.blockContainer.restBlockNumber++;
        }

        cc.systemEvent.emit('moveBlock', { worldPos, targetPos, type: lastBlock.type, callback })

        this.blockNodePool.put(block);
        // console.log(lastBlock);

    }


    /** 出槽固定的数量 */
    shiftBlockByNumber(num) {
        // const list  = this.collectList.slice(0,num);
        const blockList = this.blockInstanceList.slice(0, num);
        this.collectList.splice(0, num);
        this.blockInstanceList.splice(0, num);
        // debugger
        this.moveToPopContainer(blockList);

        // 判断卡槽中是否还存在节点
        if (this.blockInstanceList.length <= 0) {
            return;
        }
        // 执行剩余方块的移动操作
        this.moveBlock();

    }


    /**出槽操作 */
    shiftBlock() {

        /**备用槽的最大数值为6 */
        if (this.popContainer.childrenCount >= 6) {
            return;
        }

        const list = this.collectList.slice(0, 3);
        const blockList = this.blockInstanceList.slice(0, 3);
        this.collectList.splice(0, 3);
        this.blockInstanceList.splice(0, 3);

        // 回收节点
        // blockList.forEach((item) => {
        //     // this.blockNodePool.put(item);
        //     item.parent = this.popContainer;
        // })

        this.moveToPopContainer(blockList);


        // 判断卡槽中是否还存在节点
        if (this.blockInstanceList.length <= 0) {
            return;
        }

        // 执行剩余方块的移动操作
        this.moveBlock();

        // console.log(list, '出槽操作');

    }

    /** 移动到备用槽 */
    moveToPopContainer(list) {
        // debugger

        const totalLen = this.popContainer.childrenCount + list.length;
        let startIndex = -1;
        if (totalLen <= 1) {
            startIndex = 3;
        }
        else if (totalLen == 2 || totalLen == 3) {
            startIndex = 2;
        }
        else if (totalLen == 4 || totalLen == 5) {
            startIndex = 1;
        } else {
            startIndex = 0;
        }

        // console.log(startIndex, '移动到备用槽');

        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            item.parent = this.popContainer;
            item.position = popPosList[i + startIndex];
            setTimeout(() => {
                item.getComponent('prefab_block_ctrl').addClickEvent();
            }, 10)
            // item.getComponent('prefab_block_ctrl').checkIsClickable();
            this.blockContainer.restBlockNumber++;
            // this.popNodeList.push(item);
        }

        this.popContainer.children.map((item, index) => {
            cc.tween(item).to(0.2, { position: popPosList[index + startIndex] }).start();
        })
        // debugger
        // setTimeout(() => {
        //     this.popContainer.children.map((item, index) => {
        //         console.log(item.position.x);
        //     })
        // }, 3000)

    }

    /** 保存道具槽中的数据 */
    savePopContainerInfo() {

        const children = this.popContainer.children;
        let propSlotList = [];
        for (let i = 0; i < children.length; i++) {
            if (!children[i].active) {
                continue;
            }
            const info: BlockType = children[i].getComponent('prefab_block_ctrl').bInfo;
            let slotInfo = {
                level: info.level,
                row: info.row,
                col: info.col,
                type: info.type,
            };
            propSlotList.push(slotInfo);
        }
        GameDataManager.getInstance().PropsSlot = propSlotList;

    }


    /** 保存收集槽中的数据 */
    savaCollectContainerInfo() {
        let collectList = [];
        for (let i = 0; i < this.collectList.length; i++) {
            const info = this.collectList[i];
            let slotInfo = {
                level: info.level,
                row: info.row,
                col: info.col,
                type: info.type,
            };
            collectList.push(slotInfo);
        }
        GameDataManager.getInstance().CollectSlot = collectList;
    }




}