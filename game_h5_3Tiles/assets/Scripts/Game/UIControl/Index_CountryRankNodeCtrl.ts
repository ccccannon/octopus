// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgDispatcher } from "../../DataHandler/MsgDispatcher";
import { GameDataManager } from "../../Managers/GameDataManager";
import { GetGameHallAvatarMsg } from "../../msg/GetGameHallAvatarMsg";
import { GameId } from "../Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Index_CountryRankNodeCtrl extends cc.Component {

    // public currentShowIndexList = [0];

    public currentShowIndex = [];

    public rankList = [];

    /** 已经拉去过头像的列表 */
    public readyAvatarCountryList = [];

    @property(cc.Node)
    countryRank: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Prefab)
    prefab_countryCircle: cc.Prefab = null;

    @property(cc.ScrollView)
    circleScrollview: cc.ScrollView = null;

    @property(cc.Node)
    node_title: cc.Node = null;

    @property(cc.Node)
    node_myRank: cc.Node = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected onEnable(): void {
        this.countryRank.on('scrolling', this.onScrollViewRolling, this);
        this.countryRank.on('scroll-ended', this.onScrollViewEnd, this);

    }

    /** 标题的显示隐藏 */
    titleShowCtrl() {
        if (this.circleScrollview.getScrollOffset().y < 100) {
            this.node_title.active = true;
            this.node_myRank.active = true;
        } else {
            this.node_title.active = false;
            this.node_myRank.active = false;
        }
    }

    onScrollViewRolling() {
        // console.log('1111111111111');
        this.optimizationDrawCall();
        this.titleShowCtrl();
        // console.log(this.container.y);

    }

    /** 滑动停止 */
    onScrollViewEnd() {
        // this.optimizationDrawCall();
        const list = this.getShowingItemIndex();
        // console.log(list, "滑动停止");
        this.getAvatarByNodeIndex(list);
        // console.log(this.circleScrollview.getScrollOffset());

    }

    /** 发送获取头像url的请求 */
    sendGetAvatarMsgReq(areaId = 225) {

        /** 判断当前数据是否已经请求过了 请求过就不再重复请求 */
        if (this.readyAvatarCountryList.indexOf(areaId) > -1) {
            // console.log('当前数据已经请求过，不再重复请求');
            return;
        }

        // console.log(areaId,'111111111111111111111111111111111111111111111111111111111');

        const msg = new GetGameHallAvatarMsg();
        // msg.a
        msg.areaId = areaId;
        msg.gameId = GameId;
        MsgDispatcher.sendMsg(msg);
    }

    updatePlayerAvatar(areaId: number, avatars: Array<string>) {

        // 保存已经请求过的数据
        this.readyAvatarCountryList.push(areaId);

        this.updateAvatarByAreaId(areaId, avatars);

    }

    updateAvatarByAreaId(areaId, avatars) {

        // console.log('根据国家信息来更新数据', areaId);

        const idx = this.rankList.findIndex((item) => {
            return item.areaId == areaId;
        });


        /** 国家节点 */
        const nodeItem = this.container.children[idx];

        // console.log(idx, nodeItem, '国家节点');

        nodeItem.getComponent("prefab_countryCircle").exchanegAvatarImage(avatars);


    }

    /** 根据节点来执行头像请求 */
    getAvatarByNodeIndex(list) {
        if (this.rankList.length <= 0) {
            return;
        }
        for (let i = 0; i < list.length; i++) {
            const idx = list[i];
            const areaId = this.rankList[idx].areaId;
            // console.log(idx, areaId, '根据节点来执行头像请求');
            this.sendGetAvatarMsgReq(areaId);
        }
    }

    getShowingItemIndex() {
        const indexList = this.container.children.reduce((pre, cur, curIdx) => {
            if (cur.opacity != 0) {
                pre.push(curIdx);
            }
            return pre;
        }, []);
        return indexList;
    }


    // 优化DrawCall
    private optimizationDrawCall() {
        if (this.container.childrenCount == 0) {
            return;
        }
        let svLeftBottomPoint: cc.Vec2 = this.countryRank.parent.convertToWorldSpaceAR(
            cc.v2(
                this.countryRank.x - this.countryRank.anchorX * this.countryRank.width,
                this.countryRank.y - this.countryRank.anchorY * this.countryRank.height
            )
        );
        // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）
        let svBBoxRect: cc.Rect = cc.rect(svLeftBottomPoint.x, svLeftBottomPoint.y, this.countryRank.width, this.countryRank.height);
        // 遍历 ScrollView Content 内容节点的子节点，对每个子节点的包围盒做和 ScrollView 可视区域包围盒做碰撞判断
        this.container.children.forEach((childNode: cc.Node, index: number) => {
            // 如果相交了，那么就显示，否则就隐藏
            let childNodeBBox = childNode.getBoundingBoxToWorld();
            if (childNode.active) {
                if (childNodeBBox.intersects(svBBoxRect)) {
                    if (childNode.opacity === 0) {
                        childNode.opacity = 255;
                        // console.log(index, '显示');
                        // this.currentShowIndexList.push(index);
                    }
                } else {
                    if (childNode.opacity !== 0) {
                        childNode.opacity = 0;
                        // console.log(index, '隐藏');

                        // this.currentShowIndexList = this.currentShowIndexList.filter((item) => {
                        //     return item != index;
                        // })

                    }
                }

            }
        });
    }


    /** 初始化容器数据 */
    initContainer(list) {
        // console.log(list, '初始化容器数据');

        this.container.removeAllChildren();

        if (!list || list.length <= 0) {
            const item = cc.instantiate(this.prefab_countryCircle);
            // const iInfo = list[i];
            item.parent = this.container;
            item.getComponent('prefab_countryCircle').initCircle();
            return;
        }
        // 缓存排行榜数据
        this.rankList = list;
        for (let i = 0; i < list.length; i++) {
            const item = cc.instantiate(this.prefab_countryCircle);
            const iInfo = list[i];
            item.parent = this.container;
            item.getComponent('prefab_countryCircle').initCircle(iInfo);
        }

        // for (let i = 0; i < 10; i++) {
        //     const item = cc.instantiate(this.prefab_countryCircle);
        //     const iInfo = list[0];
        //     this.rankList.push(iInfo);
        //     item.parent = this.container;
        //     item.getComponent('prefab_countryCircle').initCircle(iInfo);
        // }

        this.sendGetAvatarMsgReq(list[0].areaId);

    }


    /** 跳转到指定国家的位置 */
    jumpToCountryLocation() {

        if (!this.rankList || this.rankList.length <= 0) {
            return;
        }

        const areaId = GameDataManager.getInstance().Player.areaId;

        const index = this.rankList.findIndex((item) => {
            return item.areaId == areaId;
        })

        // let index = Math.floor(Math.random() * this.rankList.length);

        // console.log(index);

        // 计算需要移动到的位置
        const posY = this.container.children[index].y;
        const height = this.container.children[index].height;

        // console.log(posY);

        this.circleScrollview.scrollToOffset(cc.v2(0, -(posY + height / 2)), 2);

    }


    start() {

    }

    // update (dt) {}
}
