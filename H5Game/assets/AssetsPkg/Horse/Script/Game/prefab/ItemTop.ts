import { Logger } from "../../../../../Script/Managers/Logger";
import { loadPictureByUrl, numberFormat } from "../../../../../Script/Utils/Utils_Common";

const { ccclass, property } = cc._decorator;
@ccclass
export default class ItemTop extends cc.Component {
    @property(cc.Sprite)
    sprite_avatar: cc.Sprite = null;

    @property(cc.Sprite)
    sprite_frame: cc.Sprite = null;

    @property(cc.Sprite)
    sprite_tag_rank: cc.Sprite = null;

    @property(cc.Label)
    text_win: cc.Label = null;

    // @property(cc.SpriteAtlas)
    // resource_frame: cc.SpriteAtlas=null;

    @property([cc.SpriteFrame])
    viewListFrame: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    viewListRank: Array<cc.SpriteFrame> = [];


    initInfo(info) {
        // console.log(info, '[item_top initInfo]');


        Logger.logBusiness(info, 'top3排名');

        this.setWin(info.winGold.toNumber());

        this.setRankTag(info.rank);

        this.setAvatar(info.playerAvatar);

        this.setFrame(info.rank);

    }

    // 设置头像
    async setAvatar(url) {
        const sf = await loadPictureByUrl(url);
        this.sprite_avatar.spriteFrame = sf;
    }

    // 从合图资源中获取图片
    getSpriteFromAtlas(name, altas) {
        const spriteFrame = altas.getSpriteFrame(name);
        return spriteFrame;
    }


    // 设置框
    setFrame(rank) {
        // const spriteName = 'top' + (rank + 1) + '_frame';
        this.sprite_frame.spriteFrame = this.viewListFrame[rank];
    }

    // 设置排名标识
    setRankTag(rank) {
        // const spriteName = 'icon_ranking' + (rank + 1);
        this.sprite_tag_rank.spriteFrame = this.viewListRank[rank];
    }

    // 设置赢的金币数量
    setWin(num) {
        this.text_win.string = numberFormat(num, 2);
    }

    start() {

    }
}

