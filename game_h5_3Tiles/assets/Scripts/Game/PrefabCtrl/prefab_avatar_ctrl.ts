// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { loadPictureByUrl } from "../../Utils/utils_common";

const { ccclass, property } = cc._decorator;

@ccclass
export default class prefab_avatar_ctrl extends cc.Component {

    public avatarSize = null;

    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Sprite)
    sprite_avatar: cc.Sprite = null;

    @property(cc.SpriteFrame)
    default_avatar: cc.SpriteFrame = null;

    protected onLoad(): void {
        // this.setAvatarSize(36);
        // this.formatImage(this.sprite_avatar.spriteFrame);
    }

    protected onEnable(): void {

    }


    setDefaultView(size, url, mType) {
        this.setAvatarSize(size);
        this.formatImage(this.default_avatar);
        this.setMaskMode(mType);
    }

    setAvatarView(size: number, url: string, mode: number) {
        this.setAvatarSize(size);
        this.setMaskMode(mode);
        this.setAvatar(url);
        this.setMaskSize(size);
        // console.log(mode);
        // console.log(cc.Mask.Type.ELLIPSE, cc.Mask.Type.RECT, cc.Mask.Type.IMAGE_STENCIL)
        // console.log(this.node.height);
        // console.log(this.node.width);
    }

    /** 直接设置图片 */
    setAvatarBySpriteFrame() {

    }

    /** 设置头像大小 */
    setAvatarSize(num) {
        this.avatarSize = num;
    }

    /** 设置mask节点的大小 */
    setMaskSize(num) {
        this.mask.node.height = num;
        this.mask.node.width = num;
    }

    // 设置头像
    async setAvatar(url) {
        let sprite;
        try {
            sprite = await loadPictureByUrl(url);
            // console.log(sprite);
        } catch (err) {
            // console.log(err);
            sprite = this.sprite_avatar.spriteFrame;
        }
        this.formatImage(sprite);
    }


    /**格式化图片的展示 */
    formatImage(sf) {

        const min = Math.min(sf._originalSize.height, sf._originalSize.width);
        this.sprite_avatar.spriteFrame = sf;
        this.sprite_avatar.node.scale = this.avatarSize / min;
        // console.log(this.avatarSize,this.sprite_avatar.node);
    }

    /** 展示图片片的全部 */
    showImageFull(sf) {
        const originSize = sf.getOriginalSize();
        const max = Math.max(originSize.height, originSize.width);
        this.sprite_avatar.spriteFrame = sf;
        this.sprite_avatar.node.scale = this.avatarSize / max;

    }


    setMaskMode(type) {

        // console.log('setMaskMode', type);
        /**设置mask的类型 */
        this.mask.type = type;
        // debugger
        if (this.mask.type == cc.Mask.Type.IMAGE_STENCIL) {
            this.mask.spriteFrame = this.sprite_avatar.spriteFrame;
            this.mask.alphaThreshold = 0.3;
        }
        else if (this.mask.type == cc.Mask.Type.ELLIPSE) {
            this.mask.segements = 64;
        }
        else {
        // debugger
        // console.log('11111111111111111', '显示国旗');
        // (this.mask.type == cc.Mask.Type.RECT) 
            // this.showImageFull();
        }

    }


    start() {

    }

    // update (dt) {}
}
