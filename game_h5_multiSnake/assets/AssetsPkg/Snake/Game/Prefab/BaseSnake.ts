import { LOGIC_FRAME_DT, RENDER_FRAME_DT, SnakeProps, SnakeMoveState, SnakeStatus, AbsorbArea, SNAKE_SPEED, PorpsType, SnakeType, SHIELD_PERSIST_BORN, SNAKE_MAX_LENGTH, SNAKE_GAP_MIN } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import CustomQuadtreeCollision from "../Utils/CustomQuatdtreeCollision";
import { Decimal } from "../Utils/Decimal";
import QuadtreeCollision from "../Utils/QuadtreeCollision";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";
import { BaseProp } from "./BaseProp";
import DeathBody from "./DeathBody";
import Food from "./Food";
import ShieldCtr from "./ShieldCtr";
// import SnakeRobot from "./SnakeRobot";

const { property, ccclass } = cc._decorator;

const renderFrame = new Decimal((1000 / RENDER_FRAME_DT).toFixed(3));
const logicFrame = new Decimal((1000 / LOGIC_FRAME_DT).toFixed(3));

export enum Dir {
    Normal,
    Left,
    Right,
    Bottom,
    Top,
    LeftBottm,
    LeftTop,
    RightBottom,
    RightTop,
}

@ccclass('Skin')
class Skin {

    @property({ displayName: "skinList", type: cc.SpriteFrame })
    skinList: Array<cc.SpriteFrame> = [];

}



export default class BaseSnake extends cc.Component {


    @property(cc.Prefab)
    prefab_deathBody: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_body: cc.Node = null;

    @property(cc.Prefab)
    prefab_effect_speedUp: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_userInfo: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_shield: cc.Prefab = null;

    /** 需要计算碰撞检测的节点 */
    @property(cc.Collider)
    collider_role: cc.Collider = null;

    @property(Skin)
    skin: Skin[] = [];

    /** 渲染帧 */
    private _renderFrame: Decimal = renderFrame;

    /** 逻辑帧 */
    private _logicFrame: Decimal = logicFrame;

    /** 速度 */
    protected _speed: number = SNAKE_SPEED;

    /** 方向 */
    protected _dir: cc.Vec3 = null;

    /** x方向的安全距离 */
    protected safePosX: number = 0;

    /** y方向的安全距离 */
    protected safePosY: number = 0;

    set dir(val) {
        this._dir = val;
    }

    get dir() {
        return this._dir;
    }

    /** 蛇节点的列表 */
    private _snakeArray: Array<cc.Node> = [];

    public get SnakeArray() {
        return this._snakeArray;
    }

    /** 蛇经过的节点 */
    protected pointsArray: Array<cc.Vec3> = [];

    /** 蛇的长度 */
    private bodyLength: number = 0;

    public get BodyLen() {
        return this.bodyLength;
    }

    /** 蛇身的节点长度 */
    private sectionLen: number = 50;

    public get SectionLen() {
        return this.sectionLen;
    }

    public set SectionLen(val) {
        this.sectionLen = val;
    }

    /** 经过节点的长度 */
    private recordLength: number = 0;

    /**蛇头经过的位置 */
    private headPointsNum: number = 0;

    /**移动倍数 */
    protected _mulTimes: number = 1;

    /** 蛇的道具状态 */
    protected snakeProps: SnakeProps = SnakeProps.None;

    /** 蛇的移动状态 */
    protected snakeMoveState: SnakeMoveState = SnakeMoveState.Normal;

    /** 蛇的生存状态 */
    public snakeStatus: SnakeStatus = SnakeStatus.Alive;

    /** 蛇的类型 */
    protected snakeType: SnakeType = null;

    /** 蛇的编号 */
    protected snakeId: number = null;

    public get SnakeId() {
        this.snakeId = 0;
        return this.snakeId;
    }

    /** 所有碰撞节点的容器 */
    private _all_collider: cc.Collider[] = [];

    public get AllCollider() {
        return this._all_collider;
    }

    /** 四叉树对象 */
    // private _quadCollision: CustomQuadtreeCollision;
    private _quadCollision: QuadtreeCollision;

    public get QuadCollision() {
        return this._quadCollision;
    }

    public set QuadCollision(val) {
        this._quadCollision = val;
    }

    /** 地图节点 */
    protected mapNode: cc.Node = null;

    /** 皮肤类型 */
    public skinType: number = 0;

    /**玩家信息 */
    protected userInfo: cc.Node = null;

    /** 加速效果的持续定时器 */
    protected effectInterval: number = null;

    /** 吸取金币的范围 */
    protected absorbArea: number = AbsorbArea.Normal;

    /** 是否陷入死循环 */
    protected isCircle: boolean = false;

    /** 循环计数 */
    protected circleCount: number = 0;

    /** 是否检测碰撞体 */
    protected isCheckCollider: boolean = false;

    protected checkInterval: number = null;

    public shieldCtrl: ShieldCtr = null;

    protected middlleIndex: number = null;

    public hasShield: boolean = false;

    protected checkLevel: number = 1;

    /** 击杀数 */
    killNumber: number = 0;


    /** 获取随机位置 */
    protected getRandomDir() {

        const vec2 = cc.Vec2.random(new cc.Vec2());

        return cc.v3(vec2.x, vec2.y, 0);

    }


    protected setIntervalLevel(num) {
        this.checkLevel = num;
    }


    /** 设置检测碰撞检测的间隔 */
    setCheckColliderInterval() {

        this.checkInterval && clearInterval(this.checkInterval);

        this.checkInterval = setInterval(() => {
            this.isCheckCollider = !this.isCheckCollider;
        }, 1000 * this.checkLevel)
    }


    /** 随机蛇的颜色 */
    protected randomColor() {
        // get random color
        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);

        return new cc.Color(red, green, blue);
    }

    /** 更新头和各身体节点的层级关系 */
    protected changeZIndex() {
        for (let i = 0; i < this._snakeArray.length; i++) {
            this._snakeArray[i].zIndex = SNAKE_MAX_LENGTH - i;
        }
    }


    /** 获取角度 */
    getRotationByVector(vec) {
        if (vec.x == 0 && vec.y == 0) {
            return;
        }

        let angle = cc.v2(1, 0).signAngle(vec) * 180 / Math.PI;
        let newAngle = angle - 90;
        return newAngle;
    }


    /** 控制蛇头的旋转 */
    protected rotateHead(headPos) {
        // change head's direction

        if (headPos.x == 0 && headPos.y == 0) {
            return;
        }

        let angle = cc.v2(1, 0).signAngle(headPos) * 180 / Math.PI;
        let newAngle = angle - 90;
        this.node.angle = newAngle;

    }

    /** 初始化蛇的信息 */
    initSnake(bodyNum: number, sectionLen: number, id?: number) {

        /**初始化蛇的行进方向 */
        this.dir = this.getRandomDir();

        /** 蛇身体的间隔 */
        this.sectionLen = sectionLen;
        /** 初始化蛇的长度 */
        this.bodyLength = bodyNum;
        /**随机蛇的颜色 */
        // this.node.color = this.randomColor();
        /** 随机蛇的位置 */
        this.node.position = SnakeUtilMgr.getInstance().getRandomPos(1500, -1500);

        this._snakeArray.push(this.node);

        this.rotateHead(this.node.position);

        if (typeof id == 'number') {
            this.setSnakeId(id);
        }

        this.safePosX = this.node.parent.width / 2 - 150;
        this.safePosY = this.node.parent.height / 2 - 150;

        // debugger;

        for (let i = 1; i <= this.bodyLength; i++) {
            this.addNewBody();
        }

        this.changeZIndex();

    }


    /** 初始化蛇的信息 */
    initSnakeNew(bodyNum: number, sectionLen: number, id?: number, pos?: cc.Vec3) {
        /**初始化蛇的行进方向 */
        this.dir = this.getRandomDir();

        /** 蛇身体的间隔 */
        this.sectionLen = sectionLen;
        /** 初始化蛇的长度 */
        this.bodyLength = bodyNum;
        /**随机蛇的颜色 */
        // this.node.color = this.randomColor();
        if (typeof id == 'number') {
            this.setSnakeId(id);
        }
        this.rotateHead(this.node.position);

        this.safePosX = this.node.parent.width / 2 - 150;
        this.safePosY = this.node.parent.height / 2 - 150;


        if (!!pos) {
            this.node.position = pos;
        }

        this._snakeArray.push(this.node);
        for (let i = 1; i <= this.bodyLength; i++) {
            this.addBodyToTail();
        }

        this.changeZIndex();

        // this.initCollisionCtrl();
    }

    /** 设置蛇的类型 */
    setSnakeType(type: SnakeType) {
        this.snakeType = type;
    }

    /** 设置蛇的id 将蛇头和蛇身统一 判定蛇头撞在自己身上不死亡 */
    setSnakeId(id) {
        this.snakeId = id;
        // this.node.getComponent(cc.Collider).tag = id;
    }



    /**蛇回到正常速度 */
    onSnakeSpeedNormal() {
        if (this.snakeMoveState != SnakeMoveState.AddSpeed) {
            return;
        }

        // this.unschedule(this.speedUpEffect.bind(this));
        // clearInterval(this.effectInterval);

        this._speed = this._speed * 1 / this._mulTimes;
        this.snakeMoveState = SnakeMoveState.Normal;
        this.pointsArray = [];
        this.updateRecordPoints();
    }

    /** 增加新的身体  */
    addNewBody() {
        // initialize body or get longer after eating food
        let newBody = cc.instantiate(this.prefab_body);

        if (this._snakeArray.length > this.bodyLength) {
            // @ts-ignore
            newBody.curIndex = this._snakeArray[this._snakeArray.length - 1].curIndex;
        }
        else {
            // @ts-ignore
            newBody.curIndex = 0;
        }
        // set new body's position
        if (this._snakeArray.length == 1) {
            let dir = this.node.position.normalize();
            newBody.setPosition(this.node.position.sub(dir.mul(this.sectionLen)));
        }
        else {
            let lastBody = this._snakeArray[this._snakeArray.length - 1];
            let lastBOBody = this._snakeArray[this._snakeArray.length - 2];
            let dir = lastBOBody.position.sub(lastBody.position).normalize();
            newBody.setPosition(lastBody.position.sub(dir.mul(this.sectionLen)));
        }

        // new body's color should be same as that of head
        newBody.color = this.node.color;

        newBody.scale = this.node.scale;

        newBody.getComponent(cc.Collider).tag = this.snakeId;

        // @ts-ignore
        newBody.script = this;

        // add to canvas and snakeArray
        this.node.parent.addChild(newBody);
        this._snakeArray.push(newBody);
        this.initRecordPoints();
    }

    /** 在蛇的尾部增加蛇身 TODO:增加皮肤的相关逻辑 
     * 
     * 蛇身的尾部增加长度 
        增加后的位置位于蛇的当前的尾部位置 
        将蛇的位置
    */
    addBodyToTail() {

        // console.log(this.recordLength,'addBodyToTail');

        // let addedBody = cc.instantiate(this.prefab_body);
        // let addedBody = cc.instantiate(this.prefab_body);

        let addedBody = this.getBodyInstance();
        // @ts-ignore
        addedBody.curIndex = this._snakeArray[this._snakeArray.length - 1].curIndex;
        if (this.getSnakeLength() % 2 == 0) {
            addedBody.getComponent(cc.Sprite).spriteFrame = this.skin[this.skinType].skinList[0];
        } else {
            addedBody.getComponent(cc.Sprite).spriteFrame = this.skin[this.skinType].skinList[1];
        }
        const tailPos = this._snakeArray[this._snakeArray.length - 1].position;
        addedBody.color = this.node.color;
        addedBody.scale = this.node.scale;
        addedBody.getComponent(cc.Collider).tag = this.snakeId;
        addedBody.position = tailPos;
        addedBody.zIndex = SNAKE_MAX_LENGTH - this.getSnakeLength();
        this.node.parent.addChild(addedBody);
        // @ts-ignore
        addedBody.script = this;
        this._snakeArray.push(addedBody);

        this.updateTailPos();

    }

    /** 获取身体节点实体 */
    getBodyInstance() {
        let body;

        const nodePool = NodePoolManager.getInstance().SnakeBodyNodePool;
        if (nodePool.size() > 0) {
            body = nodePool.get();
        } else {
            body = cc.instantiate(this.prefab_body);
        }
        return body;
    }


    /** 在蛇尾移除节点 */
    removeBodyFromTail() {
        const sBody = this._snakeArray.pop();
        // sBody.removeFromParent();
        NodePoolManager.getInstance().SnakeBodyNodePool.put(sBody);

        this.pointsArray = [];
        this.updateRecordPoints();
        this.updateSnakeMiddleIndex();

    }


    /** 初始化下一帧的位置信息 */
    initRecordPoints() {
        this.addBodyPointArray();
        this.recordLength = this.pointsArray.length;
    }

    /** 更新记录的蛇头应该经过的点 */
    updateRecordPoints() {
        this.updateCurrentPointArray();
        this.recordLength = this.pointsArray.length;
    }


    /** 更新蛇尾的点坐标 */
    updateTailPos() {
        const long = this._snakeArray.length - 1;
        let len = 0;
        while (len < this.sectionLen) {
            len += this._speed * this._renderFrame.toNumber() / 1000;
            let lastBody = this._snakeArray[long - 1];
            let lastBOBody = this._snakeArray[long];
            let dir = lastBOBody.position.sub(lastBody.position).normalize();
            let pos = lastBody.position.add(dir.mul(len));
            this.pointsArray.unshift(pos);
        }

    }

    /** 更新当前位置的点列表 */
    updateCurrentPointArray() {

        for (let i = 1; i < this._snakeArray.length; i++) {
            let len = 0;
            while (len < this.sectionLen) {
                len += this._speed * this._renderFrame.toNumber() / 1000;
                let lastBody = this._snakeArray[i - 1];
                let lastBOBody = this._snakeArray[i];
                let dir = lastBOBody.position.sub(lastBody.position).normalize();
                let pos = lastBody.position.add(dir.mul(len));
                this.pointsArray.unshift(pos);
            }
        }

    }

    /** 初始化蛇头经过的每段蛇身的点 */
    addBodyPointArray() {
        let len = 0;
        let index = 0;
        while (len < this.sectionLen) {
            len += this._speed * this._renderFrame.toNumber() / 1000;
            let lastBody = this._snakeArray[this._snakeArray.length - 1];
            let lastBOBody = this._snakeArray[this._snakeArray.length - 2];
            let dir = lastBOBody.position.sub(lastBody.position).normalize();
            let pos = lastBody.position.add(dir.mul(len));
            this.pointsArray.splice(index, 0, pos);
            index += 1;
        };
    }

    /** 蛇的每帧移动逻辑*/
    move(dt) {

        if (this.snakeStatus == SnakeStatus.Death) {
            return;
        }
        this.rotateHead(this.dir);
        // this.node.x += this.dir.x * this._speed * dt;
        // this.node.y += this.dir.y * this._speed * dt;
        this.node.setPosition(this.node.position.add(this.dir.normalize().mul(this._speed * dt)));
        // return
        this.pointsArray.push(this.node.position);
        // console.log(this.node.position.x, this.node.position.y, this.pointsArray.length);
        this.headPointsNum += 1;
        for (let i = 1; i < this._snakeArray.length; i++) {
            let num = Math.floor((this.pointsArray.length - this.headPointsNum) / (this._snakeArray.length - 1) * (this._snakeArray.length - 1 - i));
            let itemPos = this.pointsArray[num];
            const lastPos = this._snakeArray[i - 1].position;
            const tempLen = lastPos.sub(itemPos).mag();
            let targetPos, vec;
            vec = lastPos.sub(itemPos);
            if (tempLen <= this.sectionLen) {
                targetPos = lastPos.sub(lastPos.sub(itemPos).normalize().mul(tempLen));
            } else {
                targetPos = lastPos.sub(lastPos.sub(itemPos).normalize().mul(this.sectionLen));
            }
            this._snakeArray[i].setPosition(targetPos);
            const angle = this.getRotationByVector(vec);
            this._snakeArray[i].angle = angle;

        }

        if (this.pointsArray.length > this.recordLength) {
            this.pointsArray.splice(0, 1);
            this.headPointsNum -= 1;
        }

    }



    /** 指定地图节点 */
    setMapNode(node) {
        this.mapNode = node;
    }

    /** 当地图上刷新金币或者道具的时候 需要重新初始化地图数据 刷新 */
    refreshAllCollider() {
        this._all_collider = [];
        this._all_collider = this.mapNode.getComponentsInChildren(cc.Collider);
    }



    /** 判断是否靠近墙 */
    isNearWall(point) {

        if (Math.abs(point.x) < this.safePosX && Math.abs(point.y) < this.safePosY) {
            return Dir.Normal;
        } else {

            /**  处于右上位置 靠近右边的墙体 */
            if (point.x > this.safePosX && point.x >= 0 && (point.y < this.safePosY && point.y >= 0)) {
                return Dir.Right;
            }

            /**  处于右上位置 靠近右边和上边的墙体 */
            if ((point.x > this.safePosX && point.x >= 0) && (point.y > this.safePosY && point.y >= 0)) {
                return Dir.RightTop;
            }

            /**  处于右下位置 靠近右边的墙体  */
            if ((point.x > this.safePosX && point.x >= 0) && (point.y > -this.safePosY && point.y < 0)) {
                return Dir.Right
            }

            /**  处于右下位置 靠近右边的墙体  */
            if ((point.x > this.safePosX && point.x >= 0) && (point.y < -(this.safePosY) && point.y < 0)) {
                return Dir.RightBottom
            }

            /**  处于左上位置 靠近左边的墙体 */
            if ((point.x < -this.safePosX && point.x < 0) && (point.y < this.safePosY && point.y >= 0)) {
                return Dir.Left;
            }

            /**  处于左上位置 靠近左边和上面的墙体 */
            if ((point.x < -this.safePosX && point.x < 0) && (point.y > this.safePosY && point.y >= 0)) {
                return Dir.LeftTop;
            }

            /**  处于左下位置 靠近左边的墙体  */
            if ((point.x < -this.safePosX && point.x < 0) && (point.y > -this.safePosY && point.y < 0)) {
                return Dir.Left
            }

            /**  处于左下位置 靠近左边和下边的墙体  */
            if ((point.x < -this.safePosX && point.x < 0) && (point.y < -this.safePosY && point.y < 0)) {
                return Dir.LeftBottm
            }

            if ((Math.abs(point.x) < this.safePosX) && (point.y < -this.safePosY && point.y < 0)) {
                return Dir.Bottom;
            }

            if ((Math.abs(point.x) < this.safePosX) && (point.y > this.safePosY && point.y > 0)) {
                return Dir.Top;
            }

        }
    }




    /** 自动选择行进方向 */
    autoChooseMoveDir() {

        const dir = this.isNearWall(this.node.position);
        if (dir !== Dir.Normal) {
            let radian = cc.misc.degreesToRadians(15);    // 将角度转换为弧度
            let comVec = this.dir;    // 一个水平向右的对比向量
            let dirVec = cc.v2(comVec).rotate(radian);
            this.dir = cc.v3(dirVec.x, dirVec.y);

            if (!this.isCircle) {
                this.circleCount++;
                if (this.circleCount > 120) {
                    this.isCircle = true;
                    this.dir = cc.v3(0, 0, 0).sub(this.dir);
                }
            }

            return;
        } else {
            /** 重置死循环逻辑 */
            this.isCircle = false;
            this.circleCount = 0;
        }
    }

    /** 更新道具状态 */
    updateAbsorbArea() {
        this.absorbArea = AbsorbArea.Strong;
        // setTimeout
    }




    /** 隐藏蛇的相关节点 */
    hideSnake() {


        // console.log()
        for (let i = this._snakeArray.length - 1; i >= 0; i--) {

            // const item = this._snakeArray[i];
            // console.log(item.name);
            // if (item.name == 'Collider_DeathBody') {
            //     nodePool.put(item);
            // } else {
            //     item.destroy();
            // }

            this._snakeArray[i].removeFromParent();

        }

        // console.log(this._snakeArray,'隐藏蛇的相关节点');

    }


    /** 移除节点 */
    removeSnakeNode() {
        const nodePool = NodePoolManager.getInstance().SnakeBodyNodePool;
        for (let i = this._snakeArray.length - 1; i >= 0; i--) {
            const item = this._snakeArray[i];
            // console.log(item.name);
            if (item.name == 'Collider_DeathBody') {
                nodePool.put(item);
            } else {
                item.destroy();
            }
        }
    }





    /** 蛇出生的保护罩 */
    snakeBornProtect() {

        this.addShiled();
        this.updateSnakeMiddleIndex();
        this.updateShieldPos();
        this.updateShieldScale();
        this.setShieldPersistTime(SHIELD_PERSIST_BORN);
    }


    /** 加盾 */
    addShiled() {
        this.hasShield = true;
        const shield = cc.instantiate(this.prefab_shield);
        shield.parent = this.mapNode;
        this.shieldCtrl = shield.getComponent(ShieldCtr);
        this.shieldCtrl.setTarget(this);
    }

    /** 更新盾的大小 */
    updateShieldScale() {
        if (this.shieldCtrl && this.hasShield) {
            const len = this._snakeArray.length + 6;
            this.shieldCtrl.updateNodeScale(len * this.sectionLen);
        }
    }

    /** 更新盾的位置 */
    updateShieldPos() {
        if (this.shieldCtrl && this.hasShield) {
            this.shieldCtrl.node.position = this._snakeArray[this.middlleIndex].position;
        }
    }

    /** 更新蛇的中间位置 */
    updateSnakeMiddleIndex() {
        const middle = Math.floor(this._snakeArray.length / 2);
        this.middlleIndex = middle;
    }

    setShieldPersistTime(time) {
        this.shieldCtrl.setPersistentTime(time);
        this.shieldCtrl.circleInterval();
    }

    /**
     *  获取蛇的长度
     */
    getSnakeLength() {
        return this.SnakeArray.length;
    }


    /** 增加蛇的间隙 */
    addSecitonLen() {
        this.sectionLen += 0.1;
    }

    /** 减少蛇的间隙 */
    reduceSectionLen() {
        if (this.sectionLen <= SNAKE_GAP_MIN) {
            return;
        }
        this.sectionLen -= 0.1;
    }


    /** 设置蛇的皮肤类型 */
    setSnakeSkinType(val: number) {
        this.skinType = val;
    }


    /** 隐藏玩家信息 */
    hideUserInfo() {
        // this.userInfo.active = false;
        if (!this.userInfo) {
            return;
        }
        this.userInfo.destroy();
        this.userInfo = null;
    }


    resetSnake() {
        this.snakeMoveState = SnakeMoveState.Normal;
        this._speed = SNAKE_SPEED;
    }

    /** 显示蛇的节点将蛇的节点置为0 */
    showSnake() {
        for (let i = 0, len = this._snakeArray.length; i < len; i++) {
            const item = this._snakeArray[i];
            item.active = true;
            item.position = cc.v3(0, 0, 0);
            item.scale = 1;
        }
    }

    /** 增加击杀数量 */
    addKillNumber() {
        this.killNumber += 1;
        if (this.snakeType == SnakeType.Self) {
            // console.log('你已击杀了 ' + this.getKillNumber() + ' 条蛇');

            cc.systemEvent.emit('onPlayerKillSnake', this.killNumber);
        }
    }

    /** 获取击杀数 */
    getKillNumber() {
        return this.killNumber;
    }

}


