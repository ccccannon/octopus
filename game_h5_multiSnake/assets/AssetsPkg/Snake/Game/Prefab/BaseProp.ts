
import { SNAKE_SPEED, SnakeProps, PorpsType, PropsNameList } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";


enum Dir {
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

enum PropsStates {
    MOVEING,
    EATED,
}


const { ccclass, property } = cc._decorator
@ccclass
export class BaseProp extends cc.Component {


    @property(cc.Sprite)
    view_prop: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_props: Array<cc.SpriteFrame> = [];

    private dir: cc.Vec3 = null;

    private speed: number = SNAKE_SPEED;

    private dirTimer: any = null;

    protected safePosX: number = null;

    protected safePosY: number = null;

    public propType: PorpsType = null;

    public propState: PropsStates = PropsStates.MOVEING;

    /** 是否进入了死循环 */
    protected isCircle: boolean = false;

    /** 循环次数的判断 */
    protected circleCount: number = 0;

    protected onLoad(): void {
        this.dir = this.getRandomDir();
        this.dirInterval();
        this.safePosX = this.node.parent.width / 2 - 500;
        this.safePosY = this.node.parent.height / 2 - 500;

    }

    /** 自行移动算法 */
    AutoMove(dt) {
        // this.node.x += 1;

        // console.log('AutoMove');

        const res = this.isNearWall(this.node.position);
        if (res != Dir.Normal) {
            let radian = cc.misc.degreesToRadians(10);    // 将角度转换为弧度
            let comVec = this.dir;    // 一个水平向右的对比向量
            let dirVec = cc.v2(comVec).rotate(radian);
            this.dir = cc.v3(dirVec.x, dirVec.y);
            this.correctPropsPos(res);
        }

        this.isCircle = false;
        this.circleCount = 0;

        const tempPos = this.dir.mul(this.speed * dt);

        let newPos = this.node.position.add(tempPos)

        this.node.setPosition(newPos);
        let angle = cc.v2(1, 0).signAngle(cc.v2(this.dir.x, this.dir.y)) * 180 / Math.PI;
        let newAngle = angle - 90;
        this.node.angle = newAngle;
    }

    /** 初始化道具 */
    initPorps(type: PorpsType) {
        this.propType = type;
        this.initView(type);
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        this.node.name = 'Props_' + PropsNameList[type];
        this.propState = PropsStates.MOVEING;
    }


    /** 初始化视图 */
    initView(type: PorpsType) {
        this.view_prop.spriteFrame = this.viewList_props[type];
    }



    /** 道具从地图移除 */
    removeProp(snakeType, snakeId) {
        if (this.propState == PropsStates.EATED) {
            return;
        }
        // cc.systemEvent.emit('onSnakeEatProps', this.propType, snakeType, snakeId);
        if(this.propType != undefined){
            cc.systemEvent.emit('onSnakeEatAbsorb', this.propType, snakeType, snakeId);
        }
        this.propState = PropsStates.EATED;
        const mgr = NodePoolManager.getInstance();
        mgr.PorpsNodePool.put(this.node);

    }


    /**蛇移动的纠正逻辑 */
    correctPropsPos(res) {
        if (!this.isCircle) {
            this.circleCount++;
            if (this.circleCount > 120) {
                this.isCircle = true;
                this.dir = cc.v3(0, 0, 0).sub(this.dir)
            }
        }
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

        }


    }

    getRandomDir() {
        const dirList = [
            cc.v3(1, 0, 0),
            cc.v3(-1, 0, 0),
            cc.v3(0, 1, 0),
            cc.v3(0, -1, 0),
            cc.v3(1, -1, 0),
            cc.v3(1, 1, 0),
            cc.v3(-1, -1, 0),
            cc.v3(-1, 1, 0),
        ]
        const index = Math.floor(Math.random() * dirList.length);
        return dirList[index];
    }

    dirRandomChange() {
        this.dir = this.getRandomDir();
    }

    /** 位置变化 */
    dirInterval() {
        this.dirTimer = setInterval(this.dirRandomChange.bind(this), 3000);
    }


    /** 更新渲染帧 */
    updateRenderFrame(dt) {
        this.AutoMove(dt);
    }

}

