import { LANGUAGE_TYPE } from "../Game/Constant";
import GameMgr from "../../../Script/Managers/GameMgr";

enum alignDirect {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom',
}

enum isAlign {
    isAbsoluteVerticalCenter = 'isAbsoluteVerticalCenter',
    isAlignBottom = 'isAlignBottom',
    isAlignHorizontalCenter = 'isAlignHorizontalCenter',
    isAlignLeft = 'isAlignLeft',
    isAlignRight = 'isAlignRight',
    isAlignTop = 'isAlignTop',
    isAlignVerticalCenter = 'isAlignVerticalCenter'
}

enum posDir {
    LEFT = "left",
    RIGHT = "right",
}

enum viewType {
    ARAB = 0,
    EN
}


const { ccclass, property } = cc._decorator;

@ccclass
export default class icon_label extends cc.Component {

    @property
    private offset: number = 0;

    @property
    private originPos: posDir = posDir.LEFT;

    @property
    private iconOffset: number = 0;

    @property
    private isNodeReverse: boolean = false;

    @property
    private isIconReverse: boolean = false;

    @property
    private iconOriginPos: posDir = posDir.LEFT;

    @property(cc.Node)
    icon: cc.Node = null;

    @property([cc.SpriteFrame])
    viewTypeList: Array<cc.SpriteFrame> = [];


    updateNodeWidgetToRight(node, offset) {
        const widget = node.getComponent(cc.Widget);
        if (!widget) {
            throw new Error('check the node, make sure the node have widget!');
        }

        widget[isAlign.isAlignLeft] = false;
        widget[isAlign.isAlignRight] = true;
        widget[alignDirect.RIGHT] = offset;
        widget.updateAlignment();
    }

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
    }

    // 是否需要翻转视图；
    nodeReverse(node, isReverse = false) {
        if (!isReverse) {
            node.scaleX = 1;
            return;
        }
        node.scaleX = -1;
    }

    // 初始话布局
    initDisplay() {
        // console.log(this.node);

        // const lang = SnakeDataMgr.getInstance().Language;
        const lang = GameMgr.getInstance().Language;

        if (lang == LANGUAGE_TYPE.ARAB) {
            this.arabDisplay()
            this.updateNodeView(viewType.ARAB);

        } else {
            this.normalDisplay();
            this.updateNodeView(viewType.EN);
        }

        // this.arabDisplay();
    }

    normalDisplay() {

        this.nodeReverse(this.node);

        if (this.originPos === posDir.LEFT) {
            this.updateNodeWidgetToLeft(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === posDir.LEFT) {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                }
            }
        } else if (this.originPos === posDir.RIGHT) {
            this.updateNodeWidgetToRight(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === posDir.LEFT) {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                }
            }
        }

    }

    arabDisplay() {

        if (this.isNodeReverse) {
            this.nodeReverse(this.node, this.isNodeReverse);
        }

        if (this.originPos === posDir.LEFT) {
            this.updateNodeWidgetToRight(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === posDir.LEFT) {
                    this.updateNodeWidgetToRight(this.icon, this.iconOffset);
                } else {
                    this.updateNodeWidgetToLeft(this.icon, this.iconOffset);
                }
                if (this.isIconReverse) {
                    this.nodeReverse(this.icon, this.isIconReverse);
                }
            }
        } else if (this.originPos === posDir.RIGHT) {
            this.updateNodeWidgetToLeft(this.node, this.offset);
            if (this.icon) {
                if (this.iconOriginPos === posDir.LEFT) {
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
    }


    /** 更新视图 */
    updateNodeView(typeId: viewType = viewType.ARAB) {
        if (this.viewTypeList.length > 0) {
            const sprite = this.node.getComponent(cc.Sprite);
            if (!sprite) {
                return;
            }
            sprite.spriteFrame = this.viewTypeList[typeId];
        }
    }


    onLoad() {
        this.initDisplay();
    }

}

