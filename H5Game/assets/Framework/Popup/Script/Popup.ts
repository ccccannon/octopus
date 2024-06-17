
const { ccclass, property } = cc._decorator;

@ccclass
export default class Popup extends cc.Component {

    @property(cc.Node)
    close: cc.Node = null;
    @property(cc.Node)
    confirm: cc.Node = null;
    @property(cc.Node)
    cancel: cc.Node = null;
    @property(cc.Label)
    content: cc.Label = null;

    private _rsShow?: (res: boolean) => void;
    onLoad(): void {
        this.close.on("click", this.onClose, this);
        this.confirm.on("click", this.onConfirm, this);
        this.cancel.on("click", this.onClose, this);
    }

    async onClose() {
        this.hide(false);
    }

    onConfirm() {
        this.hide(true);
    }

    hide(isConfirm: boolean) {
        return new Promise(rs => {
            cc.tween(this.node).to(0.2, { scale: 0 }, { easing: 'backIn' }).call(() => {
                this.node.active = false;
                this._rsShow?.(isConfirm);
            }).start();
        })
    }

    /**
     * 显示弹窗
     * @param content 内容
     * @param isBtnClose 是否显示关闭按钮
     * @param isBtnConfirm 是否显示确认按钮
     * @param isBtnCancel 是否显示取消按钮
     * @returns 
     */
    async show(content: string, isBtnClose: boolean = true, isBtnConfirm: boolean = true, isBtnCancel: boolean = false) {
        this.content.string = content;
        this.confirm.active = isBtnConfirm;
        this.cancel.active = isBtnCancel;
        this.close.active = isBtnClose;
        this.node.scale = 0.5;
        return new Promise(rs => {
            cc.tween(this.node).to(0.2, { scale: 1 }, { easing: 'backOut' }).call(() => {
                this._rsShow = rs;
            }).start();
        })
    }

}
