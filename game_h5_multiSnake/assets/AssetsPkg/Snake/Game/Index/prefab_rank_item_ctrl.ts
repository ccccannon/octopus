
import GameMgr from "../../../../Script/Managers/GameMgr";
import { numberFormat, subStr } from "../../../../Script/Utils/utils_common";

import { LANGUAGE_TYPE } from "../Constant";
import prefab_avatar_ctrl from "./prefab_avatar_ctrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class prefab_rank_item_ctrl extends cc.Component {

    @property(cc.Label)
    // label: cc.Label = null;
    text_rank: cc.Label = null;

    @property(cc.Node)
    node_avatar: cc.Node = null;

    @property(cc.Label)
    text_user_name: cc.Label = null;

    @property(cc.Label)
    text_score: cc.Label = null;

    @property(cc.Node)
    node_rank: cc.Node = null;

    @property([cc.SpriteFrame])
    viewList_rank: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    viewList_bg: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    bg_item: cc.Sprite = null;


    initRankItem(info) {

        // console.log('info', info);
        let { avatar, name, rankNo, length, userId } = info;
        let isSelf = false;
        this.setDescribeText();
        this.setUserRank(rankNo);
        const strScore = numberFormat(length.toNumber());
        this.setLabeString(this.text_score, strScore);
        this.setUserName(name);
        this.setUserAvatar(avatar);
        if (userId.toNumber() == GameMgr.getInstance().UserId) {
            isSelf = true;
        }
        this.setItemBg(isSelf);
        // console.log(cInfo);

    }


    /** 设置背景 */
    setItemBg(isSelf: boolean) {
        if (!isSelf) {
            this.bg_item.spriteFrame = this.viewList_bg[0];
        } else {
            this.bg_item.spriteFrame = this.viewList_bg[1];
        }
    }

    /** 设置用户的排行信息 */
    setUserRank(num: number) {
        // console.log(num);
        if (num <= 3) {
            this.text_rank.node.active = false;
            this.node_rank.getComponent(cc.Sprite).spriteFrame = this.viewList_rank[num - 1];
        } else {
            this.text_rank.node.active = true;
            this.node_rank.active = false;
            this.setLabeString(this.text_rank, num + '')
        }
    }


    /** 设置用户名 */
    setUserName(nickName) {

        let type = null;
        if (GameMgr.getInstance().Language == LANGUAGE_TYPE.EN) {
            type = 1;
        } else {
            type = 2;
        }

        const str = subStr(nickName, 20, '...', type);

        this.setLabeString(this.text_user_name, str);

    }

    /** 根据语言展示文字 */
    setDescribeText() {
        // if (SnakeDataMgr.getInstance().Language != LANGUAGE_TYPE.ARAB) {
        //     this.setLabeString(this.text_gameWin, language.en.rank.item.gameWin);
        // } else {
        //     this.setLabeString(this.text_gameWin, language.ar.rank.item.gameWin);
        // }
    }

    /**设置用户的头像 */
    setUserAvatar(url, type?: number) {
        const script = this.node_avatar.getComponent(prefab_avatar_ctrl);

        script.setDefaultView(61, null, cc.Mask.Type.ELLIPSE);

        if (url) {
            script.setAvatarView(61, url, cc.Mask.Type.ELLIPSE);
        }
    }

    /** */
    setLabeString(label: cc.Label, str: string) {
        label.string = str;
        // @ts-ignore
        label._forceUpdateRenderData(true);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {} 

    // update (dt) {}
}
