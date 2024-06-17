// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { subStr } from "../../../../../Script/Utils/utils_common";
import { LANGUAGE_TYPE, trueTimeItem } from "../../Constant";
import prefab_avatar_ctrl from "../../Index/prefab_avatar_ctrl";
import { SnakeDataMgr } from "../../SnakeDataMgr";

const { ccclass, property } = cc._decorator;

const RankColor = [
    cc.color(246, 220, 91),
    cc.color(244, 244, 244),
    cc.color(208, 152, 123),
    cc.color(64, 87, 130),
]

@ccclass
export default class item_trueTimeRank extends cc.Component {

    @property(cc.Label)
    text_name: cc.Label = null;

    @property(cc.Label)
    text_score: cc.Label = null;

    @property(cc.Node)
    node_rankIcon: cc.Node = null;

    @property(cc.Node)
    node_rankLabel: cc.Node = null;

    @property(cc.Node)
    node_color: cc.Node = null;

    @property(cc.Node)
    node_avatar = null;

    // LIFE-CYCLE CALLBACKS:
    @property([cc.SpriteFrame])
    rankIconList: Array<cc.SpriteFrame> = [];

    public score: number = 0;

    public rank: number = 0;

    public id: number = 0;

    init(data: trueTimeItem) {
        // console.log(data);
        this.setName(data.name);
        this.setScore(data.score);
        this.setRank(data.rank);
        this.setAvatar(data.avatar)
        this.id = data.id;
        if (this.id == SnakeDataMgr.getInstance().UserId) {
            this.setPlayerStyle(data.rank);
        } else {
            this.setOtherStyle();
        }
    }



    /**设置本人的实时排行榜样式 */
    setPlayerStyle(rank) {
        this.setNodeColor(cc.Color.GREEN, this.text_name.node);
        this.setNodeColor(cc.Color.GREEN, this.text_score.node);
        if (rank < 3) {
            return;
        }
        this.setNodeColor(cc.Color.GREEN, this.node_rankLabel);
    }

    /** 设置其他人的实时排行榜样式 */
    setOtherStyle() {

        this.setNodeColor(cc.Color.WHITE, this.text_name.node);
        this.setNodeColor(cc.Color.WHITE, this.text_score.node);
        this.setNodeColor(cc.Color.WHITE, this.node_rankLabel);

    }



    /** 设置排名 */
    setRank(num: number) {
        this.rank = num;
        if (num <= 3) {
            this.node_rankIcon.active = true;
            this.node_rankLabel.active = false;
            this.node_rankIcon.getComponent(cc.Sprite).spriteFrame = this.rankIconList[num - 1];
            this.node_color.color = RankColor[num - 1];
        } else {
            this.node_rankIcon.active = false;
            this.node_rankLabel.active = true;
            this.node_color.color = RankColor[3];
            this.node_rankLabel.getComponent(cc.Label).string = num + '';
        }
    }

    /** 设置分数 */
    setScore(score: number) {
        this.score = score;
        this.setLabelString(this.text_score, score.toLocaleString('en-US'));
    }

    /**设置名字 */
    setName(name: string) {
        let type: number = null;
        if (GameMgr.getInstance().Language == LANGUAGE_TYPE.EN) {
            type = 1;
        } else {
            type = 2;
        }
        const str = subStr(name, 10, '...', 1);
        this.setLabelString(this.text_name, str);
    }

    /** 设置label的内容 */
    setLabelString(label: cc.Label, content: string | number) {
        const str = content + '';
        label.string = str;
    }

    /**设置名字的颜色 */
    setNodeColor(color: cc.Color, node: cc.Node) {
        node.color = color;
    }

    /** 设置头像 */
    setAvatar(url) {
        const script = this.node_avatar.getComponent(prefab_avatar_ctrl);
        script.setAvatarView(36, url, cc.Mask.Type.ELLIPSE);
    }

    start() {

    }

    // update (dt) {}
}
