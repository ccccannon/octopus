// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import { circlePosList } from "../Constant";

@ccclass
export default class prefab_countryCircle extends cc.Component {

    public index: number = null;

    public playIndexList: Array<number> = [];

    public camelNodeList: Array<cc.Node> = [];

    public avatarList: Array<cc.Node> = [];

    @property(cc.Node)
    // label: cc.Label = null;
    animaLayer: cc.Node = null;

    @property(cc.Node)
    avatarLayer: cc.Node = null;

    @property(cc.Prefab)
    prefab_signBoard: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_cactus: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_camel: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_avatar: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_avatar_outer: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    initCircle(info) {
        if (!info) {
            this.initAnimaLayer1(0);
            this.addDefaultBoard();
            return;
        }
        const { winners, winning, areaId, rankNo } = info;
        // this.initAnimaLayer1(40);
        this.initAnimaLayer1(winners);

        /**初始化展示榜 */
        this.initSignBoard(winning, areaId, rankNo);
        /**初始化用户头像 */
        this.initAvatarLayer();


    }

    /** 初始化动画层 */
    initAnimaLayer1(num) {

        let radius = 130;
        let angle = 60;
        let layer = 0;
        const len = 40

        for (let i = 0; i < len; i++) {
            let posX;
            let posY;
            let item;

            if (i < 8) {
                let angle = 45;
                posX = Math.cos(angle * i * Math.PI / 180) * radius;
                posY = Math.sin(angle * i * Math.PI / 180) * radius;
                layer = 0;
            }
            else if (i >= 8 && i < 20) {
                angle = 30;
                radius = 200;
                posX = Math.cos(angle * (i - 6) * Math.PI / 180) * radius;
                posY = Math.sin(angle * (i - 6) * Math.PI / 180) * radius;
                layer = 1;
            }
            else if (i >= 20) {
                angle = 20;
                radius = 280;
                posX = Math.cos(angle * (i - 18) * Math.PI / 180) * radius;
                posY = Math.sin(angle * (i - 18) * Math.PI / 180) * radius;
                layer = 2;
            }
            if (i < num) {
                item = cc.instantiate(this.prefab_camel);
                item.scale = 0.7;
                this.camelNodeList.push(item);
                item.position = cc.v3(posX + 20, posY, 0);
            } else {
                item = cc.instantiate(this.prefab_cactus);
                item.scale = 1;
                item.position = cc.v3(posX, posY, 0);
            }
            item.parent = this.animaLayer;
            let zIndex;
            if (posY < 0) {
                zIndex = Math.floor(Math.abs(posY)) + 300;
            } else {
                zIndex = 300 - posY;
            }
            item.zIndex = zIndex;

        }


        // console.log(this.animaLayer);

    }


    /** 获取展示骆驼的index */
    getCamelListByNumber(number) {
        const len = circlePosList.length;
        let tempArr = [];
        while (tempArr.length < number) {
            const idx = Math.floor(Math.random() * len);
            if (tempArr.indexOf(idx) == -1) {
                tempArr.push(idx);
            }
        }
        return tempArr;
    }


    /** 初始化头像层 */
    initAvatarLayer() {

        for (let i = 0; i < this.camelNodeList.length; i++) {
            const avatarNode = cc.instantiate(this.prefab_avatar);
            const avatarNodeOuter = cc.instantiate(this.prefab_avatar_outer);
            avatarNode.getComponent('prefab_avatar_ctrl').setDefaultView(36, null, cc.Mask.Type.ELLIPSE);
            // console.log('初始化头像层');
            avatarNode.parent = avatarNodeOuter;
            avatarNodeOuter.parent = this.avatarLayer;
            const pos = this.avatarLayer.convertToNodeSpaceAR(this.camelNodeList[i].parent.convertToWorldSpaceAR(this.camelNodeList[i].position));
            avatarNodeOuter.position = cc.v3(pos.x + 10, pos.y + 50, 0);
            this.avatarList.push(avatarNode);
        }
    }

    /** 替换头像图片 */
    exchanegAvatarImage(avatars) {
        for (let i = 0; i < avatars.length; i++) {
            const url = avatars[i];
            const avatarNode = this.avatarList[i];
            // console.log('url', url);
            avatarNode.getComponent('prefab_avatar_ctrl').setAvatar(url);
        }
    }


    initSignBoard(winning, areaId, rankNo) {
        const sb = cc.instantiate(this.prefab_signBoard)
        sb.parent = this.node;
        sb.scale = 0.8;
        sb.getComponent('prefab_signBoard_ctrl').initSignBoard({ winning, areaId, rankNo });
        sb.y += 50;
        sb.x += 10;
        sb.zIndex = 1;
        this.avatarLayer.zIndex = 2;
    }

    /** 添加没排行榜的指示牌 */
    addDefaultBoard() {
        const sb = cc.instantiate(this.prefab_signBoard)
        sb.parent = this.node;
        sb.scale = 0.8;
        sb.getComponent('prefab_signBoard_ctrl').initSignBoard();
        sb.y += 50;
        sb.x += 10;
        sb.zIndex = 1;
        this.avatarLayer.zIndex = 2;
    }

    start() {
        // this.initAnimaLayer();
    }

    // update (dt) {}
}
