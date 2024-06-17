// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { numberFormat } from '../../Utils/utils_common';
import GameData from '../MainUI/GameData';

cc.Class({
    extends: cc.Component,

    properties: {
        sprite_avatar: cc.Sprite,
        sprite_frame: cc.Sprite,
        sprite_tag_rank: cc.Sprite,
        text_win: cc.Label,
        resource_frame: cc.SpriteAtlas,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},    


    initInfo(info) {
        // console.log(info, '[item_top initInfo]');

        this.setWin(info.Win);

        this.setRankTag(info.rank);

        this.setAvatar(info.Avatar);

        this.setFrame(info.rank);

    },

    // 设置头像
    async setAvatar(url) {
        const sf = await GameData.loadPictureByUrl(url);
        this.sprite_avatar.spriteFrame = sf;
    },

    // 从合图资源中获取图片
    getSpriteFromAtlas(name, altas) {
        const spriteFrame = altas.getSpriteFrame(name);
        return spriteFrame;
    },


    // 设置框
    setFrame(rank) {
        const spriteName = 'top' + (rank + 1) + '_frame';
        this.sprite_frame.spriteFrame = this.getSpriteFromAtlas(spriteName, this.resource_frame);
    },

    // 设置排名标识
    setRankTag(rank) {
        const spriteName = 'icon_ranking' + (rank + 1);
        this.sprite_tag_rank.spriteFrame = this.getSpriteFromAtlas(spriteName, this.resource_frame);
    },

    // 设置赢的金币数量
    setWin(num) {
        this.text_win.string = numberFormat(num);
    },

    start() {

    },

    // update (dt) {},
});
