import { BlockType, GAME_STATUS } from "../GameData";

const { ccclass, property } = cc._decorator;

type BlockInfo = {
    row: number,
    column: number,
    bType: number,
    isClickable: boolean,
}

@ccclass
export default class BlockCtrl extends cc.Component {

    // @property(cc.SpriteAtlas)
    @property([cc.SpriteFrame])
    blockViewLightList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    blockViewDarkList: Array<cc.SpriteFrame> = [];

    /** 方块类型 */
    public bType: number = -1;

    /** 是否可点击 */
    public isClickable: boolean = false;

    /** 所在行 */
    public row: number = -1;

    /** 所在列 */
    public column: number = -1;

    /** 方块信息 */
    private bInfo: BlockType = null;

    /** 方块的原始层级 */
    private originSiblingIndex = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    public init(info: BlockType) {

        this.bInfo = info;

        if (info.lowerThanBlocks.length <= 0) {
            this.updateBlockView(info.type, true);
            this.addClickEvent();
        } else {
            this.updateBlockView(info.type, false);

        }

    }

    /**添加监听事件 */
    addClickEvent() {

        this.node.on(cc.Node.EventType.TOUCH_START, this.onItemTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onItemTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onItemTouchCancel, this);
    }

    /**移除监听事件 */
    removeClickEvent() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onItemTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onItemTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onItemTouchCancel, this);
    }

    /** 初始化方块信息 */
    initBlockInfo(info: BlockInfo) {
        this.row = info.row;
        this.column = info.column;
        this.isClickable = info.isClickable;
        this.bType = info.bType;
        this.updateBlockView(this.bType);
    }

    /** 更新方块的Ui视图 */
    updateBlockView(type: number, isClickable = false) {
        if (isClickable) {
            this.node.getComponent(cc.Sprite).spriteFrame = this.blockViewLightList[type];
        } else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.blockViewDarkList[type];

        }
    }

    onItemTouchStart() {
        // console.log('onItemTouchStart');
        if (cc.game.gameStatus == GAME_STATUS.GAME_STOP || cc.game.gameStatus == GAME_STATUS.GAME_END) {
            return;
        }


        /**点击放大节点   */
        cc.tween(this.node).to(0.2, { scale: 1.3 }, { easing: 'sineOut' }).start();

        /** 保存当前方块的同级索引 */
        this.originSiblingIndex = this.node.getSiblingIndex();

        this.node.setSiblingIndex(999);


        // console.log(this.bInfo, '方块信息');
    }

    onItemTouchEnd() {
        // console.log('onItemTouchEnd');

        if (cc.game.gameStatus == GAME_STATUS.GAME_STOP || cc.game.gameStatus == GAME_STATUS.GAME_END) {
            return;
        }

        this.node.active = false;
        this.removeClickEvent();
        const worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        // this.bInfo.worldPos = worldPos;
        cc.game.emit('onBlockClick', this.bInfo, worldPos);

    }

    onItemTouchCancel() {
        // console.log('onItemTouchCancel');
        if (cc.game.gameStatus == GAME_STATUS.GAME_STOP || cc.game.gameStatus == GAME_STATUS.GAME_END) {
            return;
        }

        /** 恢复原来的大小 */
        cc.tween(this.node).to(0.2, { scale: 1 }, { easing: 'sineOut' }).start();
        this.node.setSiblingIndex(this.originSiblingIndex);

    }

    /** 移除 */
    removeItemFromLowerList(id) {
        // debugger
        for (let i = 0; i < this.bInfo.lowerThanBlocks.length; i++) {
            const item = this.bInfo.lowerThanBlocks[i];
            if (item.id == id) {
                this.bInfo.lowerThanBlocks.splice(i, 1);
                break;
            }
        }

        this.checkIsClickable();
    }


    /** 唤醒被隐藏的block */
    resumeBlock() {
        this.node.stopAllActions();
        this.node.scale = 1;
        this.node.active = true;
        this.bInfo.status = 0;
        this.addClickEvent();
        this.addItemToLowerList()
    }

    /** 添加 */
    addItemToLowerList() {
        for (let i = 0; i < this.bInfo.higherThanBlocks.length; i++) {
            const item = this.bInfo.higherThanBlocks[i];
            // this.bInfo.lowerThanBlocks.push(item);
            item.lowerThanBlocks.push(this.bInfo);
            item.node.getComponent('prefab_block_ctrl').checkIsClickable();
        }
    }


    /** 判断是否可点击 */
    checkIsClickable() {
        if (this.bInfo.lowerThanBlocks.length <= 0) {
            this.updateBlockView(this.bInfo.type, true);
            this.addClickEvent();
        } else {
            this.updateBlockView(this.bInfo.type, false);
            this.removeClickEvent();
        }

    }


    start() {

    }

    // update (dt) {}
}
