// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { Decimal } from "../Utils/Decimal";
import { GameState, LOGIC_FRAME_DT, PorpsType, RENDER_FRAME_DT, SHIELD_PERSIST_BORN, SnakeMoveState, SnakeProps, SnakeStatus, SnakeType } from "../Constant";
import FoodLayerCtrl from "./FoodLayerCtrl";
import CollisionCtrl from "./CollisionCtrl";
import SnakeRobot from "../Prefab/SnakeModeGoldRobot";
import { JoyStick } from "../JoyStick";
import SnakePlayerCtrl from "../Prefab/SnakeModeGoldPlayer";
import PlayerViewCameraCtrl from "./PlayerViewCameraCtrl";
import { SpeedUp } from "../SpeedUp";
import PropsLayerCtrl from "./PropsLayerCtrl";
import BaseSnake from "../Prefab/BaseSnake";
import SnakeModeGold from "../Prefab/SnakeModeGold";

const renderFrame = new Decimal((1000 / RENDER_FRAME_DT).toFixed(3));
const logicFrame = new Decimal((1000 / LOGIC_FRAME_DT).toFixed(3));

@ccclass
export default class GameUiControl extends cc.Component {

    @property(cc.Prefab)
    Prefeb_Snake_Normal: cc.Prefab = null;

    @property(cc.Prefab)
    Prefeb_Snake_Robot: cc.Prefab = null;

    @property(cc.Node)
    Node_Map: cc.Node = null;

    /** 摇杆 */
    @property(JoyStick)
    joyStick: JoyStick = null;

    /** 加速按钮 */
    @property(SpeedUp)
    speedUpBtn: SpeedUp = null;

 
    /** 复活按钮 */
    // @property(cc.Node)
    // continueBtn: cc.Node = null;

    totalFrame: number = 0;

    /** 摄像机控制 */
    playerCameraCtrl: PlayerViewCameraCtrl = null;

    /** 道具控制 */
    @property(PropsLayerCtrl)
    propsCtrl: PropsLayerCtrl = null;

    player: SnakePlayerCtrl = null;

    /** 正常的蛇，由玩家控制 */
    public SnakeList: Array<cc.Node> = [];

    /** 非正常的蛇，程序控制蛇的行为 */
    public AutoSnakeList: Array<cc.Node> = [];

    /** 渲染帧 */
    private _renderFrame: number = renderFrame.toNumber() / 1000;

    /** 逻辑帧 */
    private _logicFrame: number = logicFrame.toNumber() / 1000;

    public GameState: GameState = GameState.Playing;

    public currViewSnake: number = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        /** 设置为横板 */
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)

        this.playerCameraCtrl = this.node.getComponent(PlayerViewCameraCtrl);

        // this.propsCtrl = this.node.getComponent(PropsLayerCtrl);

        this.addEventListener();
    }

    protected onDestroy(): void {
        this.removeEventListener();
    }

    /** 添加事件监听 */
    addEventListener() {
        cc.systemEvent.on('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.on('onSnakeDeath', this.onSnakeDeath, this);

        cc.systemEvent.on('onSnakeEatProps', this.onSnakeEatProp, this);

    }

    /** 移除事件监听 */
    removeEventListener() {
        cc.systemEvent.off('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.off('onSnakeDeath', this.onSnakeDeath, this);
    }

    /** 初始化游戏 */
    initGame() {

        /** 初始化食物 */
        this.Node_Map.getComponent(FoodLayerCtrl).putFoodToMap(100);

        /** 初始化 机器蛇 */

        for (let i = 0; i < 10; i++) {
            this.initRobotSnake(i);
        }

        /** 初始化控制的蛇 */
        this.initSelfSnake(1000);

        /** 刷新食物 */
        setInterval(this.freshFood.bind(this), 30 * 1000);

        /** 刷新道具 */
        // setInterval(this.freshProps.bind(this), 35 * 1000);

        setTimeout(() => {
            this.freshProps();
        }, 1000 * (SHIELD_PERSIST_BORN + 2));

    }

    /** 当游戏结束 */
    onGameEnd() {

        /** 隐藏摇杆 */
        this.joyStick.node.active = false;

        /**隐藏加速按钮 */
        this.speedUpBtn.node.active = false;

        /** 游戏进入观战模式 */
        this.GameState = GameState.Observe;

        /** 显示视角选取菜单 */

        /** 显示复活按钮 */
        // this.continueBtn.active = true;

        const node = this.getAliveSnakeView();
        if (!node) {
            return;
        }

        this.currViewSnake = node.getComponent(BaseSnake).SnakeId;

        this.playerCameraCtrl.setTargetNode(node);

    }



    /** 蛇死亡 */
    onSnakeDeath(type, id) {

        this.refreshSnakeCollision();

        /** 如果当前的蛇死亡，切换到其他蛇的视角 */
        if (id == this.currViewSnake) {
            const node = this.getAliveSnakeView();
            this.playerCameraCtrl.setTargetNode(node);
            this.currViewSnake = node.getComponent(BaseSnake).SnakeId;
        }
    }


    /** 获取依然存活的蛇 */
    getAliveSnakeView() {

        let index: number = null;
        for (let i = 0; i < this.AutoSnakeList.length; i++) {
            const item = this.AutoSnakeList[i];
            if (item.getComponent(SnakeRobot).snakeStatus == SnakeStatus.Alive) {
                index = i;
                break;
            }

        }
        return this.AutoSnakeList[index]
    }



    /** 定时刷新食物 */
    freshFood() {
        this.Node_Map.getComponent(FoodLayerCtrl).putFoodToMap(100);
        setTimeout(() => {
            this.refreshSnakeCollision();
        }, 1000)
    }


    /** 定时刷新道具 */
    freshProps() {
        this.Node_Map.getComponent(PropsLayerCtrl).createProps();
        setTimeout(() => {
            this.refreshSnakeCollision();
        }, 1000)
    }


    /** 刷新所有蛇头的碰撞检测点 */
    refreshSnakeCollision() {

        /** 刷新机器蛇的碰撞容器数据 */
        for (let i = 0; i < this.AutoSnakeList.length; i++) {
            const snake = this.AutoSnakeList[i];
            if (snake.active) {
                snake.getComponent(SnakeRobot).refreshAllCollider();
            }
        }

        /** 刷新自己的碰撞容器数据 */
        //@ts-ignore
        if (this.player.snakeStatus == SnakeStatus.Alive) {
            this.player.refreshAllCollider();
        }

    }


    /** 初始化机器蛇 */
    initRobotSnake(id?: number) {

        const robotSnake = cc.instantiate(this.Prefeb_Snake_Robot);
        robotSnake.parent = this.Node_Map;
        const robot = robotSnake.getComponent(SnakeRobot);

        const list = [5, 10, 15];
        const idx = Math.floor(Math.random() * list.length);
        robot.initRobot(list[idx], 50, id);
        robot.setMapNode(this.Node_Map);
        robot.setSnakeType(SnakeType.Other);
        robot.setOwnedCoinNumber(300);
        robot.addUserInfoUi();
        robot.updateUserOwnedCoins();
        this.AutoSnakeList.push(robotSnake);

    }


    /** 初始化自己控制的蛇 */
    initSelfSnake(id?: number) {
        const player = cc.instantiate(this.Prefeb_Snake_Normal);
        player.parent = this.Node_Map;
        const playerCtrl = player.getComponent(SnakePlayerCtrl);

        /** 初始化蛇身信息 */
        playerCtrl.initPlayer(5, 50, id);

        /** 设置蛇头的碰撞检测的节点 */
        playerCtrl.setMapNode(this.Node_Map);

        /** 添加加速监听 */
        playerCtrl.addSnakeListener();

        playerCtrl.setSnakeType(SnakeType.Self);

        playerCtrl.setOwnedCoinNumber(300);

        playerCtrl.addUserInfoUi();

        playerCtrl.updateUserOwnedCoins();



        /** 缓存当前游戏玩家的脚本对象 */
        this.player = playerCtrl;

        /**设置相机跟随对象 */
        this.playerCameraCtrl.setTargetNode(player);

        /** 摇杆控制 */
        this.joyStick.setPlayerNode(player);

        setTimeout(() => {
            this.player.snakeBornProtect();
        });

    }



    render(dt) {

        /** 计算总帧数 */
        this.totalFrame++;

        if (this.totalFrame % 6 == 0) {
            this.sendFrameDataToServer();
        }

        for (let i = 0; i < this.AutoSnakeList.length; i++) {
            const item = this.AutoSnakeList[i];
            item.getComponent(SnakeRobot).updateRenderFrame(dt);
        }

        this.player.updateRenderFrame(dt);

        this.playerCameraCtrl.updateRenderFrame(dt);

        /** 道具管理 */
        this.propsCtrl.updateRenderFrame(dt);

        // this.joyStick.updateFrame(dt);

    }

    /** 逻辑帧的数据同步 */
    sendFrameDataToServer() {

        if (this.GameState === GameState.Playing) {
            // console.log('send to server')
            // console.log(this.joyStick.dir.x);
            const posX = new Decimal(this.joyStick.dir.x.toString()).toNumber();
            const posY = new Decimal(this.joyStick.dir.y.toString()).toNumber();
            // console.log(posX, posY);
        }

    }

    /** 当蛇吃了道具  */
    onSnakeEatProp(propType: PorpsType, snakeType: SnakeType, snakeId: number) {

        // console.log('111111111111111111111', '当蛇吃了道具', propType, snakeType, snakeId);

        let snake: SnakeModeGold = null;
        if (snakeType == SnakeType.Self) {
            snake = this.player;
        } else {
            snake = this.AutoSnakeList[snakeId].getComponent(SnakeRobot);
        }

        switch (propType) {
            case PorpsType.Coin:
                snake.addOwnedCoinNumber(20);
                break;
            case PorpsType.Absorb:
                snake.updateAbsorbArea();
                break;

            case PorpsType.Shield:

                snake.snakeEatShield();
                break;
            case PorpsType.Rocket:
                snake.snakeRocket();
                break;
            case PorpsType.Mushroom:

                if (snake.hasMushroom) {

                } else {
                    snake.snakeEatMushroom();
                    setTimeout(() => {
                        snake.shapeTurnToSmall();
                    }, 10000)
                }


                break;

        }

    }


    /** 复活逻辑 */
    snakeRevive() {

        /** 隐藏摇杆 */
        this.joyStick.node.active = true;

        /**隐藏加速按钮 */
        this.speedUpBtn.node.active = true;

        /** 游戏进入观战模式 */
        this.GameState = GameState.Playing;

        /** 隐藏视角选取菜单 */

        /** 显示复活按钮 */
        // this.continueBtn.active = false;

        this.player.resetSnake();
        this.player.revive();

        this.playerCameraCtrl.setTargetNode(this.player.node);
        this.currViewSnake = 1000;


    }


    start() {

        // cc.game.setFrameRate(60);

        this.initGame();

        // console.log(cc.game.getFrameRate(), '游戏帧率');
        // this.render();

        setInterval(this.render.bind(this), renderFrame.toNumber(), this._renderFrame);


    }

    // update (dt) {}
}
