// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        view_fruit: cc.Sprite,
        tag_new: cc.Node,
        fruit_atlas: cc.SpriteAtlas,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // 初始化
    init(info) {

        this.itemFruitInfo = info;
        this.isShowTag(info.isShow);
        this.setView(info.name);

    },


    // 是否展示new的标记
    isShowTag(val) {
        this.tag_new.active = val;
    },

    // 设置标记文字 TODO
    setTagLabel() {

    },

    // 设置贴图 
    setView(name) {
        const str = 'fruit_' + name + "_small";
        this.view_fruit.spriteFrame = this.fruit_atlas.getSpriteFrame(str);
    },


    start() {

    },

    // update (dt) {},
});
