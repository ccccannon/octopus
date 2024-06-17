const alignDirect = cc.Enum({
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom',
});

const isAlign = cc.Enum({
    isAbsoluteVerticalCenter: 'isAbsoluteVerticalCenter',
    isAlignBottom: 'isAlignBottom',
    isAlignHorizontalCenter: 'isAlignHorizontalCenter',
    isAlignLeft: 'isAlignLeft',
    isAlignRight: 'isAlignRight',
    isAlignTop: 'isAlignTop',
    isAlignVerticalCenter: 'isAlignVerticalCenter'
});

const Pos = cc.Enum({
    LEFT: "left",
    RIGHT: "right",
})

cc.Class({
    extends: cc.Component,
    // LIFE-CYCLE CALLBACKS:
    properties: {
        offset: {
            default: 0,
            type: cc.Integer,
            set(val) {
                this._offset = val;
            },
            get() {
                return this._offset;
            },
        },
        originPos: {
            default: Pos.LEFT,
            set(val) {
                this._originPos = val;
            },
            get() {
                return this._originPos;
            },
        },
        icon: cc.Node,
        iconOffset: {
            default: 0,
            type: cc.Integer,
            set(val) {
                this._iconOffset = val;
            },
            get() {
                return this._iconOffset;
            },
        },

        iconOriginPos: {
            default: Pos.LEFT,
            set(val) {
                this._originPos = val;
            },
            get() {
                return this._originPos;
            },
        },

        isNodeReverse: {
            default: false,
            set(val) {
                this._isNodeReverse = val;
            },
        },

        isIconReverse: {
            default: false,
            set(val) {
                this._isIconReverse = val;
            }
        }

    },

    updateNodeWidgetToRight(node, offset) {
        const widget = node.getComponent(cc.Widget);
        if (!widget) {
            throw new Error('check the node, make sure the node have widget!');
        }

        widget[isAlign.isAlignLeft] = false;
        widget[isAlign.isAlignRight] = true;
        widget[alignDirect.RIGHT] = offset;
        widget.updateAlignment();
    },

    // 更新节点的
    updateNodeWidgetToLeft(node, offset) {
        const widget = node.getComponent(cc.Widget);
        if (!widget) {
            throw new Error('check the node, make sure the node have widget!');
        }
        widget[isAlign.isAlignLeft] = true;
        widget[isAlign.isAlignRight] = false;
        widget[alignDirect.LEFT] = offset;
        widget.updateAlignment();
    },

    // 是否需要翻转视图；
    nodeReverse(node, isReverse = false) {
        if (!isReverse) {
            node.scaleX = 1;
            return;
        }
        node.scaleX = -1;
    },

    // 初始话布局
    initDisplay() {
        // console.log(this.node);
        this.lang = window.localLang || window.languageType.ARAB;
        if (this.lang === window.languageType.ARAB) {
            this.arabDisplay()
        } else {
            this.normalDisplay();
        }


        // this.arabDisplay();
    },

    normalDisplay() {
      
        this.nodeReverse(this.node);

        if (this.originPos === Pos.LEFT) {
            this.updateNodeWidgetToLeft(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === Pos.LEFT) {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                }
            }
        } else if (this.originPos === Pos.RIGHT) {
            this.updateNodeWidgetToRight(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === Pos.LEFT) {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                }
            }
        }

    },

    arabDisplay() {
      
        if (this.isNodeReverse) {
            this.nodeReverse(this.node, this.isNodeReverse);
        }

        if (this.originPos === Pos.LEFT) {
            this.updateNodeWidgetToRight(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === Pos.LEFT) {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                }
                if (this.isIconReverse) {
                    this.nodeReverse(this.icon, this.isIconReverse);
                }
            }
        } else if (this.originPos === Pos.RIGHT) {
            this.updateNodeWidgetToLeft(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === Pos.LEFT) {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                }
                if (this.isIconReverse) {
                    this.nodeReverse(this.icon, this.isIconReverse);
                }
            }

        }
        // this.updateNodeWidgetToLeft(this.node, this.offset);
        // if (this.icon) {
        //     this.updateNodeWidgetToRight(this.icon, this.iconOffset);
        // }
    },

    onLoad() {
        this.initDisplay();
    },

    start() {

    },

    // update (dt) {},
});
