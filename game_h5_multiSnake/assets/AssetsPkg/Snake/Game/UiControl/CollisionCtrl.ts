// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import CustomQuadtreeCollision from "../Utils/CustomQuatdtreeCollision";
import QuadtreeCollision from "../Utils/QuadtreeCollision";

export default class CollisionCtrl {

    private static _instance: CollisionCtrl = null;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new CollisionCtrl();
        }
        return this._instance;
    }


    // private _all_collider: cc.Node[] = [];

    private _quadCollision: CustomQuadtreeCollision;
    // private _quadCollision: QuadtreeCollision;

    private _quad: QuadtreeCollision;

    get CustomQuadCollision() {
        return this._quadCollision;
    }

    get QuadCollision() {
        return this._quad;
    }


    protected start(): void {

        // setTimeout(() => {
        //     this._all_collider = this.all_collider_parent.getComponentsInChildren(cc.Collider);
        //     // 这边是挂载在canvas下的脚本，用canvas的rect初始化创建。
        //     this._quadCollision = new QuadtreeCollision(this.node.getBoundingBoxToWorld());
        // }, 2000);
        // this.initCollider();

    }



    /** 初始化 */
    initCollider(node) {

        // this._all_collider = this.node.children;
        // this._quadCollision = new QuadtreeCollision(node.getBoundingBoxToWorld());
        // this._quadCollision = new CustomQuadtreeCollision(node.getBoundingBoxToWorld());

        // this._quadCollision.updateTree(node);

        this._quad = new QuadtreeCollision(node.getBoundingBoxToWorld());

        this._quad.updateTree(node);

        // console.log(this._quad);

        // console.log(this._quadCollision);

        // this._quadCollision.check(this.player);

        // const result = this._quadCollision.check(this.player);
        // console.log('jieguo ', result);

    }


    /**  清除四叉树数据 */
    clearQuadCollision() {
        this._quad.clear();
    }


    // lateUpdate(dt) {

    //     if (!this._quadCollision) {
    //         return;
    //     }
    //     const { retrieve, contacts } = this._quadCollision.check(this._all_collider, this.collider_role);

    //     /** 预选中执行碰撞检测的碰撞体 */
    //     retrieve.forEach((c => {

    //         if (c.node.name == 'Food') {
    //             /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //             if (c.node.position.sub(this.collider_role.node.position).mag() < 100) {
    //                 c.node.position = c.node.position.add(this.collider_role.node.position.sub(c.node.position).normalize().mul(1500 * dt))

    //             }
    //         }
    //         // console.log(c.node.name);

    //     }))

    //     /** 碰撞到的碰撞体 */
    //     contacts.forEach((c) => {
    //         // console.log(c.node.name);

    //         /**
    //          *  死亡判定 
    //          * 1 撞墙
    //          * 2 撞其他蛇身
    //          * 
    //         */

    //         /** 撞墙 */
    //         if (c.node.name.startsWith('wall')) {
    //             // console.log(c.node.name);
    //             cc.game.pause();
    //             alert('GameOver');
    //         } else {

    //             // console.log(c.node.name);

    //             if (c.node.name.startsWith('Props')) {
    //                 // debugger;
    //                 // console.log(c.node.uuid);
    //                 // cc.game.pause();
    //                 // c.node.active = false;
    //                 c.node.removeFromParent();
    //                 // cc.game.resume();
    //                 // console.log('吃到了道具');
    //             }

    //             if (c.node.name.startsWith('Food')) {
    //                 c.node.removeFromParent();
    //                 // console.log(c.node.uuid);
    //                 // console.log('吃到了金币');
    //             }

    //         }

    //     })



    // }
}
