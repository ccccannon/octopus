// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageDisplayCtrl extends cc.Component {


    @property(cc.Node)
    node_bg_stage1: cc.Node = null;

    @property(cc.Node)
    node_bg_stage2: cc.Node = null;


    @property(cc.Label)
    text_stage_2: cc.Label = null;

    @property(cc.Node)
    node_bg_1: cc.Node = null;

    @property(cc.Node)
    node_bg_2: cc.Node = null;


    @property(cc.Node)
    node_stage_1: cc.Node = null;

    @property(cc.Node)
    node_stage_2: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 显示第一关的视图 */
    showStage1View() {
        this.node_bg_stage1.active = true;
        this.node_bg_stage2.active = false;
        this.node_bg_1.active = true;
        this.node_bg_2.active = false;
        this.text_stage_2.node.color = cc.Color.WHITE;
    }

    /** 显示第二关的视图 */
    showStage2View() {
        this.node_bg_stage1.active = false;
        this.node_bg_stage2.active = true;
        this.node_bg_1.active = true;
        this.node_bg_2.active = true;
        this.text_stage_2.node.color = cc.Color.BLACK;
    }

    updateStagePos() {
        // @ts-ignore
        if (window.localLang === window.languageType.EN) {
            this.node_stage_1.position = cc.v3(-33, 0, 0);
            this.node_stage_2.position = cc.v3(33, 0, 0);
        } else {
            this.node_stage_1.position = cc.v3(33, 0, 0);
            this.node_stage_2.position = cc.v3(-33, 0, 0);
        }
    }


    start() {
        this.updateStagePos();
    }

    // update (dt) {}
}
