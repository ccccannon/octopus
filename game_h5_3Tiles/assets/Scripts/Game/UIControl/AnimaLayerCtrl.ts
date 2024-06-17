import PropsCtrl from "./PropsCtrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimaLayerCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_anima_block: cc.Prefab = null;

    @property(cc.NodePool)
    animaBlockPool: cc.NodePool = null;


    @property(PropsCtrl)
    poprsArea: PropsCtrl = null;

    // onLoad () {}

    protected onLoad(): void {
        // this.animaBlockPool = new cc.NodePool();

        this.initBlockPool();


    }

    protected onEnable(): void {
        this.addAnimaListener();
    }


    protected onDisable(): void {
        this.removeAnimaListener();
    }

    /** 添加事件监听 */
    addAnimaListener() {
        // 方块移动
        cc.systemEvent.on('moveBlock', this.moveBlock, this);
        // 购买道具成功
        cc.systemEvent.on('buyProps', this.buyPropsSuccess, this);
    }

    /** 移除事件监听 */
    removeAnimaListener() {
        cc.systemEvent.off('moveBlock', this.moveBlock, this);
        cc.systemEvent.off('buyProps', this.buyPropsSuccess, this);

    }


    /** 初始化方块节点池 */
    initBlockPool() {
        if (!this.animaBlockPool) {
            this.animaBlockPool = new cc.NodePool();
        }
        for (let i = 0; i < 10; i++) {
            const item = cc.instantiate(this.prefab_anima_block);
            this.animaBlockPool.put(item);
        }
    }


    /** 获取动效方块 */
    getAnimaBlock() {
        let animaBlock;
        if (this.animaBlockPool.size() > 0) {
            animaBlock = this.animaBlockPool.get();
        } else {
            animaBlock = cc.instantiate(this.prefab_anima_block);
        }
        return animaBlock;
    }


    /** 将方块移动到收集槽 */
    moveBlock(param) {

        // console.log('将方块移动到',param);

        const { type, worldPos, targetPos, callback } = param;
        const block = this.getAnimaBlock();
        block.getComponent('prefab_anima_block_ctrl').setViewByType(type)
        const startPos = this.node.convertToNodeSpaceAR(worldPos);
        block.position = startPos;
        block.parent = this.node;
        block.active = true;
        block.scale = 1.3;
        const endPos = this.node.convertToNodeSpaceAR(targetPos);
        const speed = 2000;
        const distance = startPos.sub(endPos).mag();

        const time = distance / speed;

        cc.tween(block)
            .parallel(
                cc.tween().to(0.2, { scale: 1 }, { easing: 'sineOut' }),
                cc.tween().to(time, { position: endPos }, { easing: "sineOut" })
            )
            .call(() => {
                block.active = false;
                this.animaBlockPool.put(block);
                callback();
            })
            .start();

    }


    /** 购买道具成功的动画 */
    buyPropsSuccess(node, id) {

        // console.log(node, id);
        const pos = this.node.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
        let tempNode = cc.instantiate(node);
        tempNode.position = pos;
        tempNode.parent = this.node;
        const targerNode = this.poprsArea.propsNodeList[id];
        const targetPos = this.node.convertToNodeSpaceAR(targerNode.parent.convertToWorldSpaceAR(targerNode.position));
        cc.tween(tempNode).to(0.5, { position: targetPos, scale: 0.6 }, { easing: 'sineOut' }).call(() => {
            tempNode.removeFromParent(true);
            cc.tween(targerNode).to(0.1, { scale: 0.9 }, { easing: 'backIn' }).to(0.1, { scale: 1 }, { easing: 'backOut' }).start()
            // this.poprsArea.addPropsById(id);
            this.poprsArea.updatePropInfoById(id);
        }).start();

        // node.
    }



    // update (dt) {}
}
