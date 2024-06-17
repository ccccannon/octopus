// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { loadPictureByUrl, subStr } from "../../../../../Script/Utils/Utils_Common";

const { ccclass, property } = cc._decorator;

@ccclass
export default class item_record_jackpot_item extends cc.Component {

    @property(cc.Label)
    nickName: cc.Label = null;

    @property(cc.Sprite)
    avatar: cc.Sprite = null;

    @property(cc.Label)
    jackpotWin: cc.Label = null;

    @property(cc.SpriteAtlas)
    texture: cc.SpriteAtlas = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    init(info) {

        const { name, avatar, win } = info;
        this.nickName.string = subStr(name, 15, '...', 1);
        this.jackpotWin.string = win;
        // @ts-ignore
        this.jackpotWin._forceUpdateRenderData();

        this.setSpriteToNode(this.avatar.node, avatar);
    }

    /** 设置图片到节点 */
    async setSpriteToNode(node: cc.Node, url: string) {

        let sprite = node.getComponent(cc.Sprite);
        const func = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res(this.getSpriteByName('view_user_avatar_default', this.texture))
                }, 1000)
            })
        }
        let sf;
        try {
            sf = await Promise.race([loadPictureByUrl(url), func()]).catch(() => {
                sf = this.getSpriteByName('view_user_avatar_default', this.texture);
            });
        } catch (err) {
            sf = this.getSpriteByName('view_user_avatar_default', this.texture);
        }

        // console.log(sf);
        const min = Math.min(sf._originalSize.height, sf._originalSize.width);

        sprite.spriteFrame = sf;

        node.scale = node.parent.width / min;

    }

    // 根据名字从贴图中获取图片资源
    getSpriteByName(name, altas) {
        const sprite = altas.getSpriteFrame(name);
        return sprite;
    }

    start() {

    }

    // update (dt) {}
}
