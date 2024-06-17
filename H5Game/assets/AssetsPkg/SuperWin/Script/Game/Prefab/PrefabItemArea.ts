
const { ccclass, property } = cc._decorator;

@ccclass
export default class PrefabItemArea extends cc.Component {

    @property([cc.SpriteFrame])
    AreaViewList: Array<cc.SpriteFrame> = [];

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
