// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { RENDER_FRAME_DT, LOGIC_FRAME_DT, SnakeStatus, GameState, SnakeType, PorpsType, ABSORB_AREA } from "../Constant";
import { JoyStick } from "../JoyStick";
import SoundManager from "../Manager/SoundManager";
import BaseSnake from "../Prefab/BaseSnake";
import SnakeModeUnlimitedPlayer from "../Prefab/SnakeModeUnlimitedPlayer";
import SnakeModeUnlimitedRobot from "../Prefab/SnakeModeUnlimitedRobot";
import { SpeedUp } from "../SpeedUp";
import { Decimal } from "../Utils/Decimal";
import CollisionCtrl from "./CollisionCtrl";
import DialogGameEndCtrl, { DialogType } from "./DialogGameEndCtrl";
import FoodLayerCtrl from "./FoodLayerCtrl";
import GameUnlimitedModeSnakeCreateCtrl from "./GameUnlimitedModeSnakeCreateCtrl";
import PlayerViewCameraCtrl from "./PlayerViewCameraCtrl";
import SettingCtrl from "./SettingCtrl";
import TruetiemRankCtrl from "./TruetiemRankCtrl";
import NodePoolManager from "../Manager/NodePoolMgr";
import PropsLayerCtrl from "./PropsLayerCtrl";
import StateDisplayCtrl from "./StateDisplayCtrl";
import { SnakeDataMgr } from "../SnakeDataMgr";
import GameMgr from "../../../../Script/Managers/GameMgr";

const renderFrame = new Decimal((1000 / RENDER_FRAME_DT).toFixed(3));
const logicFrame = new Decimal((1000 / LOGIC_FRAME_DT).toFixed(3));


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUnlimitedModeUiCtrl extends cc.Component {

    @property(cc.Prefab)
    SnakeUnlimitedRobot: cc.Prefab = null;

    @property(cc.Prefab)
    SnakeUnlimitedPlayer: cc.Prefab = null;

    @property(cc.Node)
    node_map: cc.Node = null;

    @property(JoyStick)
    joyStick: JoyStick = null;

    @property(SpeedUp)
    speedUpBtn: SpeedUp = null;

    @property(DialogGameEndCtrl)
    gameEndCtrl: DialogGameEndCtrl = null;

    @property(cc.Node)
    beginTimer: cc.Node = null;

    @property(TruetiemRankCtrl)
    trueTimerankCtrl: TruetiemRankCtrl = null;

    @property(SettingCtrl)
    settingCtrl: SettingCtrl = null;

    @property(StateDisplayCtrl)
    stateCtrl: StateDisplayCtrl = null;

    @property(cc.Label)
    killNumber: cc.Label = null;

    // @property(CollisionCtrl)
    public customCollisionCtrl: CollisionCtrl = null;

    AutoSnakeList: Array<cc.Node> = [];

    playerCameraCtrl: PlayerViewCameraCtrl = null;

    foodLayerCtrl: FoodLayerCtrl = null;

    propsLayerCtrl: PropsLayerCtrl = null;

    public totalFrame: number = 0;

    public player: SnakeModeUnlimitedPlayer = null;

    public gameState: GameState = GameState.End;

    public snakeCreateCtrl: GameUnlimitedModeSnakeCreateCtrl = null;



    /** 渲染帧 */
    private _renderFrame: number = renderFrame.toNumber() / 1000;

    /** 逻辑帧 */
    private _logicFrame: number = logicFrame.toNumber() / 1000;

    private renderMainLoop: number = null;

    public foodInterval: number = -1;

    public propInterval: number = -1;


    protected onLoad(): void {
        this.initScript();
        this.addEventListener();
        SnakeDataMgr.getInstance().composeAiSnakeInfo();
        // console.log(SnakeDataMgr.getInstance());
        // console.log(GameMgr.getInstance());
    }

    protected onDestroy(): void {
        this.removeEventListener();
        this.clearInterval();
        this.clearCache();
        this.resetGameData();
    }

    initScript() {
        this.playerCameraCtrl = this.node.getComponent(PlayerViewCameraCtrl);
        this.foodLayerCtrl = this.node_map.getComponent(FoodLayerCtrl);
        this.snakeCreateCtrl = this.node.getComponent(GameUnlimitedModeSnakeCreateCtrl);
        this.customCollisionCtrl = CollisionCtrl.getInstance();
        this.propsLayerCtrl = this.node_map.getComponent(PropsLayerCtrl);
    }


    /** 重置部分游戏数据 */
    resetGameData() {

        /** 重置击杀数量 */
        SnakeDataMgr.getInstance().Kill = 0;

        /** 重置蛇的分数 */
        SnakeDataMgr.getInstance().SnakeScore = 0;

    }


    /** 清除定时器 */
    clearInterval() {
        this.renderMainLoop && clearInterval(this.renderMainLoop);
        this.foodInterval && clearInterval(this.foodInterval);
        this.propInterval && clearInterval(this.propInterval);
    }

    /** 清除缓存 */
    clearCache() {
        NodePoolManager.getInstance().clearAll();
        this.customCollisionCtrl.clearQuadCollision();
        this.customCollisionCtrl = null;
    }


    protected start(): void {
        this.settingCtrl.hideSetting();
        this.playBeginAnimation();
        setTimeout(() => {
            this.trueTimerankCtrl.initRankData();
        }, 1000);
    }


    /** 添加事件监听 */
    addEventListener() {
        cc.systemEvent.on('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.on('onSnakeDeath', this.onSnakeDeath, this);
        cc.systemEvent.on('onSnakeEatAbsorb', this.onSnakeEatAbsorb, this);
        cc.systemEvent.on('onPlayerKillSnake', this.onPlayerKillSnake, this,)
        cc.systemEvent.on('onPlayerRevive', this.onSnakeRevive, this,)
    }


    /** 移除事件监听 */
    removeEventListener() {
        cc.systemEvent.off('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.off('onSnakeDeath', this.onSnakeDeath, this);
    }


    onSnakeEatAbsorb(propType: PorpsType, snakeType: SnakeType, snakeId: number) {
        // this.propType, snakeType, snakeId  


        if (snakeType == SnakeType.Self) {
            this.player.setAbsorbArea(ABSORB_AREA);
            const callback = () => {
                this.player.resumeAbsorbArea();
            }
            this.stateCtrl.setAbsorbInterval(callback);
            // console.log(propType, snakeType, snakeId, '自己吃了磁铁');

        } else {
            /**  其他的蛇吃了磁铁 */
            // console.log('其他的蛇吃了磁铁', propType, snakeType, snakeId,)
            this.snakeCreateCtrl.setAbsorbAreaById(snakeId);
        }

    }

    /** 玩家击杀了蛇 */
    onPlayerKillSnake(number) {
        const node = this.killNumber.node;
        node.active = true;
        node.scale = 0;
        this.killNumber.string = number;
        node.stopAllActions();
        SnakeDataMgr.getInstance().setPlayerKillNumber(number);
        // 震动
        if (window && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10);
        }
        cc.tween(node).to(0.1, { scale: 1 }, { easing: "sineIn" }).delay(1.2).to(0.1, { scale: 0 }).call(() => {
            node.active = false;
        }).start();

    }


    /** 初始化 无尽模式 */
    initUnlimitedGame() {



        // for (let i = 1; i < 30; i++) {
        //     this.addUnlimitedRobot(i);
        // }
        this.trueTimerankCtrl.showRankList();

        this.addUnlimitedPlayer();

        /** 往地图上刷新300食物 */
        this.foodLayerCtrl.putFoodToMap(300);

        /** 20秒循环刷新一次 */
        this.foodInterval = setInterval(this.addFoodToMap.bind(this), 20 * 1000);

        /** 添加道具到地图中 */
        this.addPropsToMap();

        this.propInterval = setInterval(this.addPropsToMap.bind(this), 60 * 1000);

        /** 添加ai蛇 */
        this.snakeCreateCtrl.launchAddStep();

    }


    /** 增加道具到地图中 */
    addPropsToMap() {
        if (this.gameState != GameState.Playing) {
            return;
        }
        this.propsLayerCtrl.createProps();
    }

    /** 增加小食物到地图中 */
    addFoodToMap() {
        if (this.gameState != GameState.Playing) {
            return;
        }
        this.foodLayerCtrl.putFoodToMap(100);
    }


    /** 添加无尽模式机器人 */
    addUnlimitedRobot(id?: number) {
        const robot = cc.instantiate(this.SnakeUnlimitedRobot);
        robot.parent = this.node_map;
        const script = robot.getComponent(SnakeModeUnlimitedRobot);
        // script.QuadCollision = this.customCollisionCtrl.CustomQuadCollision;
        script.QuadCollision = this.customCollisionCtrl.QuadCollision
        script.initSnake(5, 50, id)
        script.setMapNode(this.node_map);
        script.setSnakeType(SnakeType.Other);
        // script.snakeBornProtect();
        // console.log('添加无尽模式机器人', this.node_map.children);
        this.AutoSnakeList.push(robot);
    }


    /** 刷新所有蛇头的碰撞检测点 */
    refreshSnakeCollision() {

        /** 刷新机器蛇的碰撞容器数据 */
        for (let i = 0; i < this.AutoSnakeList.length; i++) {
            const snake = this.AutoSnakeList[i];
            if (snake.active) {
                snake.getComponent(SnakeModeUnlimitedRobot).refreshAllCollider();
            }
        }

        /** 刷新自己的碰撞容器数据 */
        //@ts-ignore
        if (this.player.snakeStatus == SnakeStatus.Alive) {
            this.player.refreshAllCollider();
        }

    }



    /**
     * 添加无尽模式玩家
     */
    addUnlimitedPlayer() {

        const myInfo = SnakeDataMgr.getInstance().getPlayerInfo();
        // debugger;
        const player = cc.instantiate(this.SnakeUnlimitedPlayer);
        player.parent = this.node_map;
        const script = player.getComponent(SnakeModeUnlimitedPlayer);
        // script.QuadCollision = this.customCollisionCtrl.CustomQuadCollision;
        script.QuadCollision = this.customCollisionCtrl.QuadCollision;
        script.initSnakeNew(5, 20, SnakeDataMgr.getInstance().UserId);
        script.setMapNode(this.node_map);
        script.updateUserName(myInfo.name, SnakeType.Self);
        script.setSnakeType(SnakeType.Self);
        script.updateSnakeScore(0);
        this.player = script;
        this.playerCameraCtrl.setTargetNode(player);
        this.joyStick.setPlayerNode(player);
        script.snakeBornProtect();
        this.snakeCreateCtrl.setPlayerNode(player, script.skinType);
    }


    render(dt) {

        // if (!this.player.node.active || this.player.snakeStatus != SnakeStatus.Alive) {
        //     return;
        // }

        if (this.gameState != GameState.Playing) {
            return;
        }


        /** 计算总帧数 */
        this.totalFrame++;

        /** 更新碰撞组件 */
        // this.customCollisionCtrl.CustomQuadCollision.updateTree(this.node_map);

        this.customCollisionCtrl.QuadCollision.updateTree(this.node_map);

        this.snakeCreateCtrl.updateRenderFrame(dt);

        this.player.updateRenderFrame(dt);

        /** 刷新道具位置 */
        this.propsLayerCtrl.updateRenderFrame(dt);

        // this.playerCameraCtrl.updateRenderFrame(dt);

        // this.joyStick.updateFrame(dt);





    }


    /** 蛇死亡 */
    onSnakeDeath(type, id) {

        // console.log('蛇死亡');

    }



    /** 继续游戏*/
    onGameContinue() {
        /** 继续游戏 */
        this.gameState = GameState.Playing;

        /** 显示摇杆 */
        // this.joyStick.node.active = true;
        this.joyStick.showJoyStick();

        /**显示加速按钮 */
        this.speedUpBtn.node.active = true;

        SoundManager.getInstance().playGamingBmg();
    }

    /** 隐藏游戏结束弹窗  */
    onHideGameEndDialog() {

        /** 隐藏界面 */
        this.gameEndCtrl.hideGameEndDialog();

        /** 继续游戏 */
        this.onGameContinue();

    }

    /** 调起游戏结束弹窗 */
    onShowGameEndDialog() {
        /** 将游戏暂停 */
        this.gameState = GameState.Pause;

        /** 隐藏摇杆 */
        // this.joyStick.node.active = false;
        this.joyStick.hideJoyStick();

        /**隐藏加速按钮 */
        this.speedUpBtn.node.active = false;

        this.gameEndCtrl.showGameEndDialog(DialogType.KeepPlay);
    }



    /** 当游戏结束 */
    onGameEnd() {

        // console.log('当游戏结束');
        this.gameState = GameState.End;
        // return;
        /** 调起游戏结束界面 */
        this.gameEndCtrl.showGameEndDialog(DialogType.Quit);

        /** 重置摇杆位置 */
        this.joyStick.resetJoyStick();

        /** 隐藏摇杆 */
        // this.joyStick.node.active = false;

        this.joyStick.hideJoyStick();

        /**隐藏加速按钮 */
        this.speedUpBtn.node.active = false;

        /** 重置吸金币范围 */
        this.player.resumeAbsorbArea();

        /** 移除吸金币的状态 */
        this.stateCtrl.removeState();


        SoundManager.getInstance().stopAllSound();

    }


    /**播放开始动画 */
    playBeginAnimation() {
        this.beginTimer.active = true;
        const anima = this.beginTimer.getComponent(cc.Animation);
        const animaInfo = anima.play();
        this.customCollisionCtrl.initCollider(this.node_map);
        setTimeout(() => {
            this.beginTimer.active = false;
            this.renderMainLoop = setInterval(this.render.bind(this), renderFrame.toNumber(), this._renderFrame);
            this.onGameContinue();
            this.settingCtrl.showSetting();
            this.initUnlimitedGame();
        }, animaInfo.duration * 1000);
    }



    /** 跳转到Index场景 */
    jumpToIndexScene() {

        // this.renderMainLoop && clearInterval(this.renderMainLoop);
        /** 发送游戏放弃状态 */
        this.gameEndCtrl.sendGameQuitStatus();
        this.gameEndCtrl.hideGameEndDialog();
        this.gameEndCtrl.jumpToIndexScene();

    }

    /** 蛇复活 */
    onSnakeRevive() {
        this.playerCameraCtrl.setTargetNode(this.player.node);

        // console.log(this.player);

        this.player.onSnakeRevive();
        this.gameEndCtrl.hideGameEndDialog();
        this.onGameContinue();
    }

    /** 蛇的复活 */
    snakeRevive(type, id) {

        if (type == SnakeType.Self) {

            /** 隐藏摇杆 */
            this.joyStick.node.active = true;

            /**隐藏加速按钮 */
            this.speedUpBtn.node.active = true;

            this.playerCameraCtrl.setTargetNode(this.player.node);

            // console.log('蛇的复活1111111111111111111111111');
            this.player.onSnakeRevive();

        } else {
            const snakeNode = this.AutoSnakeList[id];
            if (!snakeNode) {
                return;
            }
            snakeNode.getComponent(SnakeModeUnlimitedRobot).onSnakeRevive();
        }

    }



}
