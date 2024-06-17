




const { ccclass, property } = cc._decorator;

@ccclass
export default class item_btn_select extends cc.Component {

    @property([cc.SpriteFrame])
    spriteList: Array<cc.SpriteFrame> = [];

    @property(cc.Label)
    label_coins: cc.Label = null;

    public btnInfo: any = null;

    init(info) {
        this.btnInfo = info;
        this.setCoinNumber(info.coinsNumber);
        this.setBtnStatus(info.isSelected);
        // this.setBtnOriginScale(info.isSelected);
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBtnTouchStart, this);
    }

    // 设置金币数量
    setCoinNumber(num) {

        // todo 引入 工具函数 处理数字 
        if (num === 10000) {
            num = '10K';
        }
        this.label_coins.string = num;
    }

    // 设置按钮状态
    setBtnStatus(isSelect) {
        if (isSelect) {
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
        } else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[1];
        }
    }

    setBtnOriginScale(isSelect) {
        if (isSelect) {
            this.node.scale = 1;
        } else {
            this.node.scale = 1;
        }
    }

    setAnimationStatus(isSelect) {
        // if (isSelect) {
        //     this.toNormalAnimation();
        // } else {
        //     this.toSmallAnimation();
        // }
    }

    updateSelectStatus(val) {
        this.btnInfo.isSelected = val;
        this.setBtnStatus(val);
        this.setAnimationStatus(val);
    }

    //  缩小动画
    toSmallAnimation() {
        // if (this.node.scale <= 0.8) {
        //     return;
        // }
        // cc.tween(this.node).to(0.2, { scale: 0.8 }, { easing: 'sineOut' }).start();
    }

    toNormalAnimation() {
        if (this.node.scale >= 1) {
            return;
        }
        cc.tween(this.node).to(0.2, { scale: 1 }, { easing: 'sineOut' }).start();
    }

    // 获取按钮信息
    getBtnInfo() {
        return this.btnInfo || {};
    }

    onBtnTouchStart() {
        cc.systemEvent.emit('selectBtnClick', this.getBtnInfo());
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBtnTouchStart, this);
    }

}


