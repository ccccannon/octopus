// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { numberFormat, subStr } from "../../Utils/utils_common.js"
import GameData from "../Main/GameData.js";

const NAME_LEN_LIMIT = 35;

const TOP = cc.Enum({
    ONE: 1,
    TWO: 2,
    THREE: 3,
})

const SEX = cc.Enum({
    SECRET: 0,
    MALE: 1,
    FEMALE: 2
})

cc.Class({
    extends: cc.Component,

    properties: {
        text_coin: cc.Label,
        sprite_avatar: cc.Sprite,
        text_name: cc.Label,
        text_rank: cc.Label,
        sprite_rank: cc.Sprite,
        sprite_sex: cc.Sprite,
        rankSpriteList: [cc.SpriteFrame],
        sexSpriteList: [cc.SpriteFrame],
        spriteFrame_default: cc.SpriteFrame,
        // spriteAltas: cc.SpriteAtlas,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // 初始化
    init(info) {
        // const tempUrl = 'https://img-community.csdnimg.cn/avatar/d104fc8a00d14620a33edc5c9fab6d74.png';
        this.setCoins(info.Win);
        // this.setAvatar(tempUrl);
        this.setNickName(info.Nick);
        this.setRank(info.Rank);

        this.setAvatar(info.Avatar);
        this.setSex(info.Sex);
        // {
        //     "avatar": "www.baidu.com",
        //     "nickName": "helloworld",
        //     "rank": 1,
        //     "gender": "male",
        //     "betCoins": 11000000
        // }

        // console.log(info);

    },

    // 设置金币数量
    setCoins(num) {
        const str = numberFormat(num);
        this.text_coin.string = str;
    },

    // 设置昵称
    setNickName(nickName) {

        let type = null;
        if (window.localLang == window.languageType.EN) {
            type = 1;
        } else {
            type = 2;
        }
        this.text_name.string = subStr(nickName, NAME_LEN_LIMIT, null, type);
    },

    // 设置头像
    async setAvatar(url) {
        let sprite;
        try {
            sprite = await GameData.loadPictureByUrl(url);
        } catch (err) {
            // console.log(err);
            sprite = this.spriteFrame_default;
        }

        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);

        // console.log(sprite._originalSize.height, sprite._originalSize.width,'设置头像');

        this.sprite_avatar.spriteFrame = sprite;

        this.sprite_avatar.node.scale = 100 / min;

    },


    // 根据名字从贴图中获取图片资源
    getSpriteByName(name, altas) {
        const sprite = altas.getSpriteFrame(name);
        return sprite;
    },


    setSex(num) {

        // 0 保密 1男 2女

        // 性别图片的展示
        if (num == SEX.SECRET) {
            this.sprite_sex.spriteFrame = this.sexSpriteList[0];
            return;
        }

        if (num == SEX.MALE) {
            this.sprite_sex.spriteFrame = this.sexSpriteList[1];
            return;
        }

        if (num == SEX.FEMALE) {
            this.sprite_sex.spriteFrame = this.sexSpriteList[2];
            return;
        }


    },

    // 设置排行
    setRank(num) {

        if (num > TOP.THREE) {
            this.sprite_rank.node.active = false;
            this.text_rank.node.active = true;
            this.text_rank.string = num;
        } else {
            this.sprite_rank.node.active = true;
            this.text_rank.node.active = false;
            this.sprite_rank.spriteFrame = this.rankSpriteList[num - 1];
            // this.sprite_rank.spriteFrame = this.getSpriteByName('top' + num, this.spriteAltas);
            // if (num == TOP.ONE) {

            //     return;
            // }
            // if (num == TOP.TWO) {
            //     this.sprite_rank.spriteFrame = '';
            //     return;
            // }
            // if (num == TOP.THREE) {
            //     this.sprite_rank.spriteFrame = '';
            //     return;
            // }
        }

    },

    start() {

    },

    // update (dt) {},
});
