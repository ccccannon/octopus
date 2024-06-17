
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    sprite_block: cc.Sprite = null;



    @property([cc.SpriteFrame])
    list_sf_block: Array<cc.SpriteFrame> = [];


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    setViewByType(type) {
        this.sprite_block.spriteFrame = this.list_sf_block[type];
    }

    start() {

    }

    // update (dt) {}
}
