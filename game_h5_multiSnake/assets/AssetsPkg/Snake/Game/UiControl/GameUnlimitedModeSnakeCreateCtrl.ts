// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { ABSORB_AREA, ABSORB_DURATION, SnakeStatus, SnakeType } from "../Constant";
import SnakeModeUnlimitedRobot from "../Prefab/SnakeModeUnlimitedRobot";
import { SnakeDataMgr } from "../SnakeDataMgr";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";
import CollisionCtrl from "./CollisionCtrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUnlimitedModeSnakeCreateCtrl extends cc.Component {

    /** 玩家节点 */
    playerNode: cc.Node = null;

    /** 地图节点 */
    @property(cc.Node)
    node_map: cc.Node = null;

    @property(cc.Prefab)
    prefab_robot: cc.Prefab = null;

    @property(cc.Camera)
    camera_map: cc.Camera = null;

    private autoAddInterval: number = null;

    private id: number = 0;

    private playerSkinType: number = -1;

    robotSnakeList: Array<cc.Node> = [];

    private aliveList: Array<number> = [];

    private deathList: Array<number> = [];

    protected onLoad(): void {
        // console.log(this.camera_map.orthoSize);
        // console.log(this.camera_map);
        // this.getCameraViewArea();
        // this.launchAddStep();

        cc.systemEvent.on('onRobotSnakeDeath', this.onRobotSnakeDeath, this);
    }


    protected onDestroy(): void {
        this.autoAddInterval && clearInterval(this.autoAddInterval);
    }



    /** 设置玩家节点 */
    setPlayerNode(node: cc.Node, playerSkinType: number) {
        this.playerNode = node;
        this.playerSkinType = playerSkinType;
        // console.log(this.camera_map.containsNode(this.playerNode));
    }

    /** 设置地图节点 */
    setMapNode(node: cc.Node) {
        this.node_map = node;
    }

    /** 检查在玩家周围的蛇的数量 */
    checkSnakeAroundPlayer() {
    }



    launchAddStep() {
        this.autoAddInterval = setInterval(this.addRobotSnake.bind(this), 1000 * 2);
        // this.addRobotSnake();
    }





    /** 机器蛇死亡 */
    onRobotSnakeDeath(type, id) {

        /** 移除ai蛇节点 */
        this.removeRobotById(id);
        /** 从存活列表中移除 */
        this.removeFromAliveList(id);
        /** 加入到死亡列表 */
        this.deathList.push(id);
        this.id++;
        /** 如果id大于100，标识所有的ai蛇都用上了，开始使用死亡列表制造新的ai蛇 */
        if (this.id >= SnakeDataMgr.getInstance().AiSnakeList.length) {
            const idx = Math.floor(Math.random() * this.deathList.length);
            this.addSnakeAroundPlayer(this.deathList[idx]);
            this.deathList.splice(idx, 1);
        } else {
            this.addSnakeAroundPlayer(this.id);
        }

    }


    addRobotSnake() {

        if (this.robotSnakeList.length >= 10) {
            this.autoAddInterval && clearInterval(this.autoAddInterval)
            return;
        }
        this.id++;

        this.addSnakeAroundPlayer(this.id);

    }


    /** 移除机器蛇 */
    removeRobotById(id) {

        for (let i = 0; i < this.robotSnakeList.length; i++) {
            const itemScript = this.robotSnakeList[i].getComponent(SnakeModeUnlimitedRobot);
            if (itemScript.SnakeId == id) {
                this.robotSnakeList.splice(i, 1);
                itemScript.removeSnakeNode();
                break;
            }
        }

    }


    /** 设置机器人吸铁石范围 */
    setAbsorbAreaById(id) {

        for (let i = 0; i < this.robotSnakeList.length; i++) {
            const itemScript = this.robotSnakeList[i].getComponent(SnakeModeUnlimitedRobot);
            if (itemScript.SnakeId == id) {
                itemScript.setAbsorbArea(ABSORB_AREA);
                setTimeout(() => {
                    if (itemScript && itemScript.snakeStatus != SnakeStatus.Death) {
                        itemScript.resumeAbsorbArea();
                    }
                }, ABSORB_DURATION * 1000);
                break;
            }
        }
    }


    /** 复活机器蛇 */
    reviveRobotById() {

    }

    /** 将蛇从活着的列表移除 */
    removeFromAliveList(id) {

        for (let i = 0; i < this.aliveList.length; i++) {
            if (this.aliveList[i] == id) {
                this.aliveList.splice(i, 1);
                break;
            }
        }

    }


    /** 向玩家周围加蛇 */
    addSnakeAroundPlayer(id) {

        /** 维护一个活着的蛇的列表 */
        this.aliveList.push(id);

        const util = SnakeUtilMgr.getInstance();
        const maxPos = this.node_map.width / 2 - 200;
        const posX = util.getRandomNumer(maxPos, -maxPos);
        const posY = util.getRandomNumer(maxPos, -maxPos);
        this.addUnlimitedRobot(id, cc.v3(posX, posY, 0));

    }


    /** 添加无尽模式机器人 */
    addUnlimitedRobot(id?: number, pos?: cc.Vec3) {
        const snakeInfo = SnakeDataMgr.getInstance().getSnakeInfoById(id);
        // 如果获取不到机器人信息，暂时不显示机器人；
        if (!snakeInfo) {
            return;
        }

        /** 机器蛇的id不应该大于100 */
        id = id % 100;

        const robot = cc.instantiate(this.prefab_robot);
        robot.parent = this.node_map;
        const script = robot.getComponent(SnakeModeUnlimitedRobot);
        // script.QuadCollision = CollisionCtrl.getInstance().CustomQuadCollision;

        script.QuadCollision = CollisionCtrl.getInstance().QuadCollision;

        script.setRobotSnakeDiffcultLevel(SnakeUtilMgr.getInstance().getRandomNumer(300, 100));
        // script.setRobotSnakeDiffcultLevel(1);
        const length = Math.floor(Math.random() * 10 + 5);
        script.setPlayerSkinType(this.playerSkinType);

        script.initSnakeNew(length, 20, id, pos);
        script.updateUserName(snakeInfo.name, SnakeType.Other);
        script.updateSnakeScore(snakeInfo.score);
        script.setMapNode(this.node_map);
        script.setSnakeType(SnakeType.Other);
        script.snakeBornProtect();
        this.robotSnakeList.push(robot);
    }

    updateRenderFrame(dt) {

        if (!this.robotSnakeList || this.robotSnakeList.length <= 0) {
            return;
        }

        for (let i = 0; i < this.robotSnakeList.length; i++) {
            const item = this.robotSnakeList[i];
            item.getComponent(SnakeModeUnlimitedRobot).updateRenderFrame(dt);
        }

    }


}
