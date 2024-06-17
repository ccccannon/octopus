
import { shuffle, getTotalBlockNumber, getRandomBlockNumber, indexToPosSingle, indexToPosDouble, getNormalBlockNumber } from '../GameUtils';

import { blockHeight, blockWidth, maxCol, maxRow } from "../Constant"

import { mapList, BlockType, stageInfo, Goods, randomItem, Offset, Direction, GoodList } from '../GameData'
import PromptDiffcultCtrl from './PromptDiffcultCtrl';
import { GameDataManager } from '../../Managers/GameDataManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BlockContainerCtrl extends cc.Component {

    @property(PromptDiffcultCtrl)
    promptDiffcult: PromptDiffcultCtrl = null;
    @property(cc.Prefab)
    prefab_block: cc.Prefab = null;

    public totalBlockList: Array<Array<cc.Node>> = null;

    public currentStage: number = null;

    public totalNumber: number = 0;

    public blockList: Array<BlockType> = [];

    public randomBlockList: Array<BlockType> = [];

    public normalBlockList: Array<BlockType> = [];

    public mapNormalInfoList = null;

    public typeList: Array<number> = [];

    private normalList: Array<any> = [];

    private randomList: Array<randomItem> = [];

    /** 剩余的方块数量 */
    public restBlockNumber: number = 0;


    // private chessBoard: Array<Array<any>> = [];

    protected onLoad(): void {

        // this.initGame();

    }

    protected onEnable(): void {
        this.addBlockContainerListener();
    }

    protected onDisable(): void {
        this.removeBlockContainerLister();
    }

    /** 添加方块容器的监听事件  */
    addBlockContainerListener() {
        cc.systemEvent.on('shuffle', this.BlockShuffle, this);
    }

    /**移除方块容器的事件监听 */
    removeBlockContainerLister() {
        cc.systemEvent.off('shuffle', this.BlockShuffle, this);
    }

    /** 初始化游戏  */
    initGameNew = (stageInfo: stageInfo, stage = 0) => {
        this.currentStage = stage;
        const { normalList, randomList, typeNum } = stageInfo;
        /** 正常卡片的位置信息 */
        this.normalList = normalList;
        /** 随机卡片的位置信息 */
        this.randomList = randomList;
        /** 关卡的类型列表 */
        // const typeOriginList = Goods.slice(0, typeNum);
        const basicTypeList = GoodList[GameDataManager.getInstance().MapId % 3];

        const typeOriginList = basicTypeList.slice(0, typeNum);

        // console.log(typeOriginList,'initGameNew');

        /**获取需要生成的方块总数 */
        const mapNumber = getTotalBlockNumber(stageInfo);
        /**获得需要生成的总方块数 */
        this.totalNumber = this.checkTheTotalNumber(typeNum, mapNumber);
        // 将方块的总数量赋值给剩余方块数量
        this.restBlockNumber = this.totalNumber;
        /** 获得随机的类型列表 */
        this.typeList = this.initBlockType(this.totalNumber, typeOriginList);

        /** 初始化所有的方块 */
        this.blockList = this.initBlockInfo(this.totalNumber, this.typeList);

        /** 如果当前关卡为第一关  需要将数据缓存起来*/
        if (this.currentStage == 1) {
            const dataManager = GameDataManager.getInstance();
            // dataManager.MapNormal = JSON.parse(JSON.stringify(normalList));
            // dataManager.MapRandom = JSON.parse(JSON.stringify(randomList));
            // console.log(this.typeList);
            dataManager.BlockType = this.typeList;
            dataManager.removedBlockList = [];
            // console.log(dataManager);
        }

        // console.log(this.blockList, 'this.randomBlockList');

        this.fillMap();

        // this.addNormalBlocksToContainer();

        // this.setRandomBlockRelative();   
        if (stage == 0) {
            this.stage1BlockFadeIn();
            this.addRandomBlocksToContainer();
        } else {
            this.stage2BlockFadeIn();
        }

    }



    /** 继续游戏 */
    continueGame(info, localData) {
        /** 重置游戏数据 */
        this.resetBlockContainer();
        // ''
        // console.log('继续游戏', info);
        this.currentStage = 1;

        const dataManager = GameDataManager.getInstance();
        // dataManager.MapNormal = JSON.parse(JSON.stringify(info.normalList));
        // dataManager.MapRandom = JSON.parse(JSON.stringify(info.randomList));

        // 剩余正常块等于总块数-收集槽数量-道具槽数量
        // const normalLen = localData.blockTypeList.length - localData.collectList.length - localData.propsSlotList.length - localData.removedBlockList.length;
        const normalLen = localData.restBlockTypeList.length;
        this.typeList = localData.blockTypeList;
        // 将最开始随机出来的数据 缓存起来
        dataManager.BlockType = localData.blockTypeList;
        dataManager.removedBlockList = localData.removedBlockList;


        /** 正常卡片的位置信息 */
        this.normalList = info.normalList;
        /** 随机卡片的位置信息 */
        this.randomList = info.randomList;

        this.restBlockNumber = normalLen;

        /** 初始化所有的方块 */
        this.blockList = this.initBlockInfo(this.typeList.length, this.typeList);

        this.fillMap();
        // 继续第二关
        this.continueStage2();
        // 处理被移除的方块

        this.handleRemoveBlock(localData.removedBlockList);

        // console.log(this.restBlockNumber, '剩余步数');

    }

    /** 处理被移除的方块 */
    handleRemoveBlock(removedList) {
        if (removedList.length <= 0) {
            return;
        }
        removedList.forEach((item) => {
            this.blockList.forEach((bItem) => {
                if (bItem.level == item.level && bItem.row == item.row && bItem.col == item.col && bItem.type == item.type) {
                    // debugger
                    this.handleTheLowerThanList(bItem);
                    bItem.status = 2;
                    bItem.node.getComponent('prefab_block_ctrl').removeClickEvent();
                    bItem.node.active = false;
                    // console.log(bItem);
                }
            })
        })
        // this.blockList

    }


    /** 判断地图上方块个数是否能完全消除 */
    checkTheTotalNumber(typeNum, totalNumber) {
        let oldTotalNumber = totalNumber;
        const tileNum = typeNum * 3;
        /** 保证总数能被消除 */
        if (totalNumber % tileNum != 0) {
            totalNumber = (Math.floor(totalNumber / tileNum) + 1) * tileNum;
            console.log(oldTotalNumber, totalNumber, '当前地图的数据不可完全消除');

        } else {
            console.log(oldTotalNumber, totalNumber, '当前地图的数据正确，可完全消除');

        }

        return totalNumber;
    }



    /** 初始化并随机打乱方块类型 */
    initBlockType = (number: number, list: Array<any>) => {
        let arr = [];
        const len = list.length;
        for (let i = 0; i < number; i++) {
            arr.push(list[i % len]);
        }
        arr = shuffle(arr);
        return arr;
    }


    /** 将数据回填到 正常的数据列表 和 随机的数据列表*/
    fillMap = () => {

        const pos = 0;

        const randomNum = getRandomBlockNumber(this.randomList);
        // 1 填充随机数据
        this.randomBlockList = this.blockList.slice(0, randomNum);
        this.fillRandomListBlock(this.randomBlockList)

        // 2 填充正常的数据
        const normalIndex = pos + randomNum;
        this.normalBlockList = this.blockList.slice(normalIndex);
        // this.fillNormalListBlock(normalIndex);

        this.fillNormalListBlock1(this.normalBlockList);

    }


    /** 向随机数组中填充数据 */
    fillRandomListBlock = (arr: Array<BlockType>) => {

        let randomList = [];
        let idx = 0;

        for (let i = 0; i < this.randomList.length; i++) {

            const item = this.randomList[i];
            let tempRandomList: Array<BlockType> = [];
            for (let j = 0, len = item.Len; j < len; j++) {

                const block = arr[idx];

                block.row = item.row;
                block.col = item.col;
                block.level = j;
                block.dir = item.dir;
                block.randomId = item.index;
                tempRandomList.push(block);
                idx++;
            }
            randomList.push(tempRandomList);
        }


        // console.log(randomList, '向随机数组中填充数据');
        this.createRandomRelative(randomList);

        return randomList;
    }



    /** 向正常的数组中填充数据 */
    fillNormalListBlock1 = (arr: Array<any>) => {

        let idx = 0;

        this.mapNormalInfoList = JSON.parse(JSON.stringify(this.normalList));

        for (let n = 0; n < this.normalList.length; n++) {
            const levelList = this.normalList[n];
            const len = levelList.length;
            for (let i = 0; i < len; i++) {

                const colList = levelList[i];
                const colLen = colList.length;
                for (let j = 0; j < colLen; j++) {
                    if (colList[j] != 0) {
                        const block = arr[idx];
                        this.mapNormalInfoList[n][i][j] = block;
                        block.row = i;
                        block.col = j;
                        block.level = n;
                        idx++;
                    }
                }
            }

        }
        // console.log(this.mapNormalInfoList);
        this.createNormalRelative1();

    }


    /** 向正常的数组中填充数据 */
    fillNormalListBlock = (ixd: number) => {

        this.mapNormalInfoList = JSON.parse(JSON.stringify(this.normalList));

        for (let n = 0; n < this.normalList.length; n++) {
            const levelList = this.normalList[n];
            const len = levelList.length;
            for (let i = 0; i < len; i++) {

                const colList = levelList[i];
                const colLen = colList.length;
                for (let j = 0; j < colLen; j++) {
                    if (colList[j] != 0) {
                        const block = this.blockList[ixd];
                        this.mapNormalInfoList[n][i][j] = block;
                        block.row = i;
                        block.col = j;
                        block.level = n;
                        ixd++;
                    }
                }
            }

        }


        // console.log(this.mapNormalInfoList);
        this.createNormalRelative1();

    }

    createNormalRelative1() {

        for (let i = 0; i < this.normalBlockList.length; i++) {
            this.setNormalBlockRelative(this.normalBlockList[i]);
        }

        // console.log(this.mapNormalInfoList, 'mapNormalInfoList');
    }

    /** 填充正常块的层级关系 */
    setNormalBlockRelative(block: BlockType) {

        let minX, minY, maxX, maxY;

        let len = this.mapNormalInfoList.length;

        let isOffset = block.level % 2 == 0

        for (let level = block.level + 1; level < len; level++) {

            const isOffsetB = level % 2 == 0;

            if (isOffset && isOffsetB) {
                // console.log(level, block.row, block.col,'填充正常块的层级关系');
                const tempBlock = this.mapNormalInfoList[level][block.row][block.col]
                if (tempBlock) {
                    tempBlock.higherThanBlocks.push(block);
                    block.lowerThanBlocks.push(tempBlock);
                }
            }
            else if (isOffset && !isOffsetB) {
                minX = Math.max(block.row - 1, 0);
                minY = Math.max(block.col - 1, 0);
                maxX = block.row;
                maxY = block.col;
                // console.log('minX:' + minX + '----->' + "maxX:" + maxX);
                // console.log('minY:' + minY + '----->' + "maxY:" + maxY);
                for (let i = minX; i <= maxX; i++) {
                    for (let j = minY; j <= maxY; j++) {
                        // console.log(level, i, j,'填充1111');
                        const temp = this.mapNormalInfoList[level][i][j];
                        if (temp) {
                            temp.higherThanBlocks.push(block);
                            block.lowerThanBlocks.push(temp);
                        }
                    }
                }

            }
            else if (!isOffset && isOffsetB) {

                minX = block.row;
                minY = block.col;
                maxX = Math.min(block.row + 1, maxRow);
                maxY = Math.min(block.col + 1, maxCol);

                // console.log('minX:' + minX + '----->' + "maxX:" + maxX);

                // console.log('minY:' + minY + '----->' + "maxY:" + maxY);

                for (let i = minX; i <= maxX; i++) {
                    for (let j = minY; j <= maxY; j++) {
                        // console.log(level, i, j,'填充');
                        const temp = this.mapNormalInfoList[level][i][j];
                        if (temp) {
                            temp.higherThanBlocks.push(block);
                            block.lowerThanBlocks.push(temp);
                        }
                    }
                }

            }



        }


    }


    /** 创建随机块的关系 */
    createRandomRelative(randomList) {

        for (let i = 0, len = randomList.length; i < len; i++) {
            const itemList = randomList[i];
            this.setRandomBlockRelative(itemList);
        }
        // this.mapRandomList = randomList;
        // console.log(this.randomBlockList, '填充随机块的层级关系');

    }

    /** 填充随机块的层级关系 */
    setRandomBlockRelative(arr: Array<any>) {

        const len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                arr[i].lowerThanBlocks.push(arr[j]);
                arr[j].higherThanBlocks.push(arr[i]);
            }
        }

    }


    /** 初始化所有的方块信息 */
    initBlockInfo = (totalNumber: number, typeList: Array<number>): Array<any> => {
        const tempArr = [];
        const len = typeList.length;
        for (let i = 0; i < totalNumber; i++) {
            let block: BlockType = {
                id: i,
                row: 0,
                col: 0,
                level: 0,
                type: typeList[i],
                status: 0,
                higherThanBlocks: [],
                lowerThanBlocks: [],
            }
            tempArr.push(block);
        }

        return tempArr;

    }


    /** 操作当前块遮挡的块 */

    handleTheLowerThanList(block: BlockType) {

        /** 将方块的状态改为已点击 */
        block.status = 1;

        const higherThanBlocks = block.higherThanBlocks;

        for (let i = 0; i < higherThanBlocks.length; i++) {
            const blockInfo = higherThanBlocks[i];
            const node = blockInfo.node;
            node.getComponent('prefab_block_ctrl').removeItemFromLowerList(block.id);
        }

    }

    // /** 添加单个方块到地图中 */
    // addSingleBlockToContainer(info: BlockType) {

    //     const item = cc.instantiate(this.prefab_block);

    // }


    /** 第一关的入场动画 */
    stage1BlockFadeIn() {

        const gap = (this.node.width - blockWidth * maxCol) / 2;
        for (let i = 0; i < this.normalBlockList.length; i++) {
            const item = cc.instantiate(this.prefab_block);
            const blockInfo = this.normalBlockList[i];
            item.parent = this.node;
            item.active = false;
            blockInfo.node = item;

            let targetPos, startPos;

            if (blockInfo.level % 2 != 0) {
                if (this.currentStage == 0) {
                    targetPos = indexToPosDouble(blockInfo.row, blockInfo.col, gap - item.width / 2);
                    startPos = indexToPosDouble(10, blockInfo.col, gap - item.width / 2);
                } else {
                    targetPos = indexToPosDouble(blockInfo.row, blockInfo.col, gap);
                    startPos = indexToPosDouble(10, blockInfo.col, gap);
                }
                // targetPos = indexToPosDouble(blockInfo.row, blockInfo.col, gap - item.width / 2);
                // startPos = indexToPosDouble(10, blockInfo.col, gap - item.width / 2);
            } else {
                targetPos = indexToPosSingle(blockInfo.row, blockInfo.col, gap);
                startPos = indexToPosSingle(10, blockInfo.col, gap);
            }
            item.zIndex = blockInfo.level * 10 - blockInfo.row;
            item.getComponent('prefab_block_ctrl').init(blockInfo);
            item.position = startPos;
            cc.tween(item).delay(i * 0.05).call(() => {
                item.active = true;
            }).to(0.5, { position: targetPos }, { easing: 'sineOut' }).call(() => {
                item.position = targetPos;
                blockInfo.pos = item.position;
            }).start();
        }

    }


    /** 第二关的入场动画 */
    stage2BlockFadeIn() {

        this.addNormalBlocksToContainer();
        this.addRandomBlocksToContainer();
        this.node.x = cc.view.getVisibleSize().width;
        // cc.tween(this.node).to(0.6, { position: cc.v3(-365, -180, 0) }, { easing: 'elasticInOut' }).start();
        cc.tween(this.node).to(1, { position: cc.v3(-365, -186, 0) }, { easing: 'backInOut' }).call(() => {
            this.promptDiffcult.onPromptDiffcultShow();
        }).start();

    }

    /**继续第二关 */
    continueStage2() {
        this.addNormalBlocksToContainer();
        this.addRandomBlocksToContainer();
    }


    /** 将正常的方块放入容器中 */
    addNormalBlocksToContainer() {

        // console.log(this.normalBlockList);

        const gap = (this.node.width - blockWidth * maxCol) / 2;

        for (let i = 0; i < this.normalBlockList.length; i++) {
            const item = cc.instantiate(this.prefab_block);
            const blockInfo = this.normalBlockList[i];
            item.parent = this.node;
            blockInfo.node = item;
            if (blockInfo.level % 2 != 0) {

                if (this.currentStage == 0) {
                    item.position = indexToPosDouble(blockInfo.row, blockInfo.col, gap - item.width / 2);
                } else {
                    item.position = indexToPosDouble(blockInfo.row, blockInfo.col, gap);
                }
            } else {
                item.position = indexToPosSingle(blockInfo.row, blockInfo.col, gap);
            }
            item.zIndex = blockInfo.level * 10 - blockInfo.row;
            item.getComponent('prefab_block_ctrl').init(blockInfo);
            blockInfo.pos = item.position;
        }

    }

    /** 将随机方块加入到容器中 */
    addRandomBlocksToContainer() {
        const gap = (this.node.width - blockWidth * maxCol) / 2;
        for (let i = 0, len = this.randomBlockList.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_block);
            const blockInfo = this.randomBlockList[i];
            item.parent = this.node;
            blockInfo.node = item;
            item.position = indexToPosSingle(blockInfo.row, blockInfo.col, gap);
            item.getComponent('prefab_block_ctrl').init(blockInfo);

            if (blockInfo.dir === Direction.TOP) {
                item.y -= blockInfo.level * Offset;
            }
            else if (blockInfo.dir === Direction.DOWN) {
                item.y += blockInfo.level * Offset;
            }
            else if (blockInfo.dir === Direction.LEFT) {
                item.x -= blockInfo.level * Offset;
            }
            else if (blockInfo.dir === Direction.RIGHT) {
                item.x += blockInfo.level * Offset;
            }
            blockInfo.pos = item.position;
            item.zIndex = 800;
            // console.log(item.x)
            // console.log(item.y)
            // item.position.x += blockInfo.level * Offset;
        }

    }

    /** 重置游戏数据 */
    resetBlockContainer() {
        this.currentStage = null;
        this.restBlockNumber = 0;
        this.node.removeAllChildren();
    }


    /** 打乱道具 */
    BlockShuffle() {
        // console.log('打乱游戏');
        // 遮罩展示

        //  获取当前剩余节点的类型
        const tempList = this.blockList.filter((item) => {
            return item.status == 0;
        })


        let typeList = tempList.reduce((pre, item) => {
            pre.push(item.type);
            return pre;
        }, [])

        // console.log(typeList);

        typeList = shuffle(typeList);
        // console.log(typeList);

        tempList.map((item, index) => {
            item.type = typeList[index];
            let isClickable;
            if (item.lowerThanBlocks.length <= 0) {
                isClickable = true;
            } else {
                isClickable = false;
            }
            item.node.getComponent('prefab_block_ctrl').updateBlockView(item.type, isClickable)
        })


        const center = indexToPosDouble(3, 3, 0);

        // 将所有的方块都汇聚的一点
        tempList.forEach((item) => {
            cc.tween(item.node).to(0.2, { position: center, angle: -360 }).to(0.2, { angle: 0 }).to(0.2, { position: item.pos }).start();
        })


        // console.log(tempList);

        // 将获取后的节点类型打乱并重新赋值

        // 执行打乱动画
    }


    /** 恢复未点击的方块 */
    resumeUnclickBlock(bList) {
        //  获取当前剩余节点的类型
        const tempList = this.blockList.filter((item) => {
            return item.status == 0;
        })

        tempList.map((item, index) => {
            item.type = bList[index];
            let isClickable;
            if (item.lowerThanBlocks.length <= 0) {
                isClickable = true;
            } else {
                isClickable = false;
            }
            item.node.getComponent('prefab_block_ctrl').updateBlockView(item.type, isClickable)
        })
    }



    /** 获取当前没有被点击的块的类型 */
    getUnclickBlockTypeList() {
        //  获取当前剩余节点的类型
        const tempList = this.blockList.filter((item) => {
            return item.status == 0;
        })

        let typeList = tempList.reduce((pre, item) => {
            pre.push(item.type);
            return pre;
        }, [])

        // console.log("获取当前没有被点击的块的类型", typeList)
        return typeList;
    }


    /** 保存方块类型 */
    saveUnclickBlockType() {
        const typeList = this.getUnclickBlockTypeList();
        GameDataManager.getInstance().RestBlockType = typeList;
    }


    start() {
        // this.addNormalBlocksToContainer();
        // // this.setRandomBlockRelative();
        // this.addRandomBlocksToContainer();
    }

    // update (dt) {}
}
