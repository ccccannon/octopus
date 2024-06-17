
const { ccclass, property } = cc._decorator;

@ccclass
export default class item_fruit_record extends cc.Component {

    @property(cc.Sprite)
    view_fruit:cc.Sprite = null;
    @property(cc.Node)
    tag_new:cc.Node = null;
    @property(cc.SpriteAtlas)
    fruit_atlas:cc.SpriteAtlas = null;

    public itemFruitInfo : any = null;
    

    // 初始化
    init(info) {
        this.itemFruitInfo = info;
        this.isShowTag(info.isShow);
        this.setView(info.name);
    }


    // 是否展示new的标记
    isShowTag(val) {
        this.tag_new.active = val;
    }

    // 设置标记文字 TODO
    setTagLabel() {

    }

    // 设置贴图 
    setView(name) {
        const str = 'fruit_' + name + "_small";
        this.view_fruit.spriteFrame = this.fruit_atlas.getSpriteFrame(str);
    }


    start() {

    }
}

