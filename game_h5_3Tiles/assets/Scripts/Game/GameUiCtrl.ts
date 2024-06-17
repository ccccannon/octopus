// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html


import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../DataHandler/MsgDispatcher";
import { GameDataManager } from "../Managers/GameDataManager";
import { Logger } from "../Managers/Logger";
import { NetMgr } from "../Managers/NetMgr";
import SoundManager from "../Managers/SoundManager";
import { evokeNativeToQuitGame, isIos } from "../Utils/App_connect";
import { SingleGameStatusMsg } from "../msg/SingleGameStatusMsg";
import { SingleGameUsePropMsg } from "../msg/SingleGameUsePropMsg";
import { SingleGameUsePropMsgAck } from "../msg/SingleGameUsePropMsgAck";
import { GAME_PROPS, GAME_STATUS, containerPosList, arabContainerPosList, stage1Info, stage2InfoList, stageInfo } from "./GameData";
import { getIsTodayFirstRevive as getIsTodayFirstRevive, setFirstRevive } from "./GameUtils";
import BlockContainerCtrl from "./UIControl/BlockContainerCtrl";
import CollectContainerCtrl from "./UIControl/CollectContainerCtrl";
import PromptBuyPropCtrl from "./UIControl/PromptBuyPropCtrl";
import PromptFailCtrl from "./UIControl/PromptFailCtrl";
import PromptPassCtrl from "./UIControl/PromptPassCtrl";
import PromptPropsCtrl from "./UIControl/PromptPropsCtrl";
import PromptQuitCtrl from "./UIControl/PromptQuitCtrl";
import PromptReviveCtrl from "./UIControl/PromptReviveCtrl";
import PromptUsePropCtrl from "./UIControl/PromptUsePropCtrl";
import PropsCtrl from "./UIControl/PropsCtrl";
import StageDisplayCtrl from "./UIControl/StageDisplayCtrl";

const { ccclass, property } = cc._decorator;


@ccclass
export default class GameUiCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_camel: cc.Prefab = null;

    @property(BlockContainerCtrl)
    blockContianer: BlockContainerCtrl = null;

    @property(CollectContainerCtrl)
    collectContainer: CollectContainerCtrl = null;

    @property(PropsCtrl)
    propsArea: PropsCtrl = null;

    @property(PromptPropsCtrl)
    promptProps: PromptPropsCtrl = null;

    @property(PromptBuyPropCtrl)
    promptBuyPropCtrl: PromptBuyPropCtrl = null;

    @property(PromptFailCtrl)
    promptFail: PromptFailCtrl = null;

    @property(PromptReviveCtrl)
    promptRevive: PromptReviveCtrl = null;

    @property(PromptUsePropCtrl)
    promptUseProp: PromptUsePropCtrl = null;

    @property(PromptPassCtrl)
    promptPass: PromptPassCtrl = null;

    @property(PromptQuitCtrl)
    promptQuit: PromptQuitCtrl = null;

    @property(StageDisplayCtrl)
    stageDisplay: StageDisplayCtrl = null;

    @property(cc.Node)
    node_sound: cc.Node = null;

    @property([cc.SpriteFrame])
    musicSpriteList: Array<cc.SpriteFrame> = [];


    @property(cc.Node)
    node_return: cc.Node = null;

    @property(cc.Node)
    node_help: cc.Node = null;

    @property(cc.Node)
    node_mask: cc.Node = null;

    // @property(AnimaLayerCtrl)
    // animaLayer: AnimaLayerCtrl = null;

    @property(cc.Label)
    text_debug_stage: cc.Label = null;

    public debugCurrlevel = 0;

    public removeTimeOut = null;

    public gameStatus = null;

    public diffcontainerPosList: Array<cc.Vec3> = [];


    onLoad() {
        // this.createCamel();


        // console.log(this.blockContianer);
        // @ts-ignore
        this.diffcontainerPosList = window.localLang === window.languageType.EN ? containerPosList : arabContainerPosList;

        cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;

        // 更新声音按钮展示
        this.updateSoundBtnView();
        // 更新关卡指示
        this.stageDisplay.showStage1View();

        // this.scheduleOnce(() => {
        this.playBgm();
        // }, 2)

        // this.onGameStart();
        this.checkGame();

        this.addSocketResListener();

        // console.log('场景重新加载');

        // console.log(this);

        // 添加监听
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);

        // 添加监听断线重连
        cc.systemEvent.on('GameTabelDestroy', this.onTableDestroy, this);

    }

    protected onDestroy(): void {
        // console.log('销毁');

        //移除监听
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);

        this.removeSocketListener();

        //停止播放声音
        SoundManager.getInstance().stopAllSound();

        cc.systemEvent.off('GameTabelDestroy', this.onTableDestroy, this);

    }

    /** 增加长链接数据监听 */
    addSocketResListener() {
        const net = NetMgr.getInstance().getNet();
        // net.addResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_RESULT_ACK, this.onSingleGameResultAck, this);
        // net.addResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK, this.onSingleGameUsePropAck, this);
        // net.addResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onInfoGameTabelAck, this);
    }

    removeSocketListener() {
        const net = NetMgr.getInstance().getNet();
        // net.removeResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_RESULT_ACK, this.onSingleGameResultAck, this);
        // net.removeResponeHandler(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK, this.onSingleGameUsePropAck, this);
        // net.removeResponeHandler(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, this.onInfoGameTabelAck, this);

    }


    protected onEnable(): void {
        cc.game.on('onBlockClick', this.onBlockClick, this);
        cc.systemEvent.on('checkStagePass', this.checkStageIsPass, this);
        cc.systemEvent.on('onGameOver', this.onGameOver, this);
        cc.systemEvent.on('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.on('onGameRestart', this.onGameReset, this);
        cc.systemEvent.on('JumpToIndexPage', this.jumpToIndexPage, this);
        cc.systemEvent.on('saveGameData', this.saveGameData, this);
        cc.systemEvent.on('useProp', this.useProp, this);
        cc.systemEvent.on('cancelRevive', this.cancelRevive, this);

    }

    protected onDisable(): void {
        cc.game.off('onBlockClick', this.onBlockClick, this);
        cc.systemEvent.off('checkStagePass', this.checkStageIsPass, this);
        cc.systemEvent.off('onGameOver', this.onGameOver, this);
        cc.systemEvent.off('onGameEnd', this.onGameEnd, this);
        cc.systemEvent.off('onGameRestart', this.onGameReset, this);
        cc.systemEvent.off('JumpToIndexPage', this.jumpToIndexPage, this);
        cc.systemEvent.off('saveGameData', this.saveGameData, this);
        cc.systemEvent.off('useProp', this.useProp, this);
        cc.systemEvent.off('cancelRevive', this.cancelRevive, this);
    }

    onTableDestroy() {
        // console.log('桌子被销毁');
        this.jumpToIndexPage();
    }

    /** 游戏隐藏后 */
    onGameHide() {
        // console.log('游戏隐藏后');
        // this.removeSocketListener();
        if (this.blockContianer.currentStage == 1) {
            /** 保存数据 */
            this.saveGameData();
        }
        /** 关闭声音 */
        SoundManager.getInstance().stopAllSound();

    }

    /** 游戏显示后 */
    onGameShow() {
        // console.log('游戏显示后')
        // this.addSocketResListener();
        // this.playBgm();
        // if (cc.director.getScene().name == 'Game') {
        // SoundManager.getInstance().isAudioOn() && SoundManager.getInstance().playGamingBmg();
        this.playBgm();
        // }
    }

    onSingleGameResultAck(msgAck) {

        // console.log(msgAck, '提交游戏结果后的返回');

        const { gameTime, userId, gameNo, tableId, isDismiss } = msgAck;

        /** 是否为中途放弃 */
        if (isDismiss) {

            const gdm = GameDataManager.getInstance();

            const key = userId.toNumber() + '_' + gameNo + '_' + tableId;
            // 移除有可能存在的本地缓存的本局数据
            gdm.removeLocalDataByKey(key);
            gdm.removeLastData(userId);

            // this.promptQuit.jumpToIndexPage();

        } else {

            // console.log(gameTime.toNumber());
            // console.log(userId.toNumber());
            // console.log(gameNo);
            // console.log(tableId);

            // console.log(this, '11111111111111111111');
            // debugger;
            // TODO 传入哪个国家
            this.promptPass.onPromptPassShow({ gameTime, userId, gameNo, tableId });
            // 关闭声音
            // SoundManager.stopAllSound();
            SoundManager.getInstance().stopAllSound();

        }




        // 清空本地缓存数据 TODO

    }

    onSingleGameUsePropAck(msgAck: SingleGameUsePropMsgAck) {

        const { type, propJson } = msgAck;
        const prop = JSON.parse(propJson);
        const id = prop.id - 1;
        if (type == 0) {
            // console.log('使用成功', prop);
            // this.useProps
            // 使用道具
            this.usePropsById(id);

            // 更新道具信息
            this.propsArea.updatePropsInfo(prop);

            // 更新道具展示
            this.propsArea.costPorpsById(id);
        } else {
            // console.log('购买成功', prop);
            // 复活购买道具直接使用
            if (GameDataManager.getInstance().IsReviveBuyProp) {
                // 更新道具信息
                this.propsArea.updatePropsInfo(prop);
                let isPop = id == GAME_PROPS.PROP_POP;
                this.useProp(isPop);
                this.promptBuyPropCtrl.buySuccessAnimaStart();
                setFirstRevive();

                return;
            }
            // 更新道具信息
            this.propsArea.updatePropsInfo(prop);

            this.promptProps.buySuccessAnimaStart();

        }


        // console.log(msgAck, '使用道具成功');


    }

    /** 获取游戏状态 */
    onInfoGameTabelAck(msgAck) {
        // console.log('获取游戏状态');
        Logger.logModel(msgAck, '游戏场景数据');

        const { subGamePlayJsonFields, totalConsume, playerId, gamePlayers, tableId } = msgAck;

        const dataManager = GameDataManager.getInstance();

        const isContinue = dataManager.isGameContinue(dataManager.UserId);
        Logger.logModel(isContinue, '游戏是否需要重连');
        if (isContinue) {
            this.onGameContinue();
        } else {

            // 更新道具信息
            dataManager.Props = JSON.parse(subGamePlayJsonFields).props;

            //更新桌子信息 
            dataManager.TableId = tableId;

            /** 重置游戏道具数据 */
            this.propsArea.init();

            /** 重新开始游戏 */
            cc.systemEvent.emit('onGameRestart');

        }

        // dataManager.diffServerAndLocalData(dataManager.UserId);





    }

    /** 使用道具 */
    usePropsById(id) {
        if (id === GAME_PROPS.PROP_SHUFFLE) {
            cc.systemEvent.emit('shuffle');
        }
        else if (id === GAME_PROPS.PROP_ROLLBACK) {
            cc.systemEvent.emit('rollback');
        }
        else if (id === GAME_PROPS.PROP_POP) {
            cc.systemEvent.emit('shiftBlock');
        } else {
            console.log('no such porp,please check again');
            return;
        }
    }


    setPropUse(id){
        const propNumber = this.propsArea.getPropsNumberById(id);
        if(propNumber>0){
            this.usePropsById(id);

            let info = this.propsArea.getProps(id);
            info.residueNum--;
            // 更新道具信息
            this.propsArea.updatePropsInfo(info);
    
            // 更新道具展示
            this.propsArea.costPorpsById(id);
        }
    }

    sendGamePropShuffleUseMsg() {
        this.setPropUse(GAME_PROPS.PROP_SHUFFLE);
        // const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_SHUFFLE);
        // const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_SHUFFLE);
        // if (propNumber > 0) {
        //     this.sendGamePropsUseMsg(GAME_PROPS.PROP_SHUFFLE);
        // } else {
        //     this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_SHUFFLE, buyTimes)
        // }
    }

    sendGamePropRollBackUseMsg() {
        this.setPropUse(GAME_PROPS.PROP_ROLLBACK);
        // const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_ROLLBACK);
        // const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_ROLLBACK);
        // if (propNumber > 0) {
        //     if (this.collectContainer.collectList.length > 0) {
        //         this.sendGamePropsUseMsg(GAME_PROPS.PROP_ROLLBACK);
        //         cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
        //     } else {
        //         // console.log('当前收集槽槽为空,不能使用道具');
        //     }
        // } else {
        //     this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_ROLLBACK, buyTimes)
        // }

    }

    sendGamePropPopUseMsg() {
        this.setPropUse(GAME_PROPS.PROP_POP);
        // const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_POP);
        // const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_POP);
        // if (propNumber > 0) {
        //     if (this.collectContainer.collectList.length > 0 && (this.collectContainer.popContainer.childrenCount + 3) <= 6) {
        //         this.sendGamePropsUseMsg(GAME_PROPS.PROP_POP);
        //         cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
        //     } else {
        //         // console.log('当前条件下，无法使用出槽道具');
        //     }
        // } else {
        //     this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_POP, buyTimes)
        // }

    }

    /** 发送游戏处理信息 */
    sendGamePropsUseMsg(id) {
        // console.log(event, id);
        const buyTimes = this.propsArea.getPorpsUseTimesById(id);
        const propNumber = this.propsArea.getPropsNumberById(id);
        // 判断当前道具的个数,如果道具个数大于0 ,直接告知服务器，否则弹出购买弹窗
        if (propNumber > 0) {
            const prop = new SingleGameUsePropMsg();
            prop.propId = id + 1;
            prop.type = 0;
            prop.tableId = GameDataManager.getInstance().TableId;
            MsgDispatcher.sendMsg(prop);
        } else {
            this.promptProps.onPropsPromptShow(id, buyTimes);
        }

    }


    /** 检测游戏是否重新开始 */
    checkGame() {

        // console.log('检测游戏是否重新开始', GameDataManager.getInstance().isContinue);
        if (GameDataManager.getInstance().isContinue) {
            this.onGameContinue();
        } else {
            this.onGameStart();
        }
    }





    /** 游戏开始 */
    onGameStart(stage = 0) {
        cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
        let info: stageInfo;
        if (stage == 0) {
            info = stage1Info;
        } else {
            // TODO 游戏关卡暂时写死
            const index = GameDataManager.getInstance().MapId - 1 || 0;
            // const index = 9;
            // debugger
            info = stage2InfoList[index];
        }
        this.blockContianer.initGameNew(info, stage);
    }

    /** 游戏继续 */
    onGameContinue() {

        const gdm = GameDataManager.getInstance();
        const localData = gdm.getGameData(gdm.UserId);
        const mapId = gdm.getLocalMapId(gdm.UserId);
        const info = stage2InfoList[mapId - 1]
        // const info = stage2InfoList[0];
        this.blockContianer.continueGame(info, localData);
        this.stageDisplay.showStage2View();
        this.node_mask.active = true;

        this.scheduleOnce(() => {
            this.handleSolt();
            this.node_mask.active = false;
        }, 1)

    }


    /**处理槽中的方块 */
    handleSolt() {
        const gdm = GameDataManager.getInstance()
        const localData = gdm.getGameData(gdm.UserId);
        if (!localData) {
            return;
        }

        const clickedBlockList = this.getClickedBlockList(localData.collectList, localData.propsSlotList);

        this.putClickedBlockToCollectSlot(clickedBlockList);

        // const propSlot = clickedBlockList.slice(0, localData.propsSlotList.length);

        this.collectContainer.showAllBlock();

        if (localData.propsSlotList.length > 0) {
            this.collectContainer.shiftBlockByNumber(localData.propsSlotList.length);
        }

        // this.blockContianer.resumeUnclickBlock(localData.restBlockTypeList);

        // console.log('各部分数量', localData.collectList.length, localData.propsSlotList.length, localData.restBlockTypeList.length, localData.removedBlockList.length);
        // console.log('总方块数量', localData.blockTypeList.length);

    }


    /** 将方块放入卡槽和收集槽 */
    getClickedBlockList(collectSlotList, propSlotList) {

        // const collect = GameDataManager.getInstance().getGameData

        const specialList = [...propSlotList, ...collectSlotList]

        // console.log(specialList);

        const clickedBlockList = specialList.reduce((pre, curr) => {
            const item = this.blockContianer.blockList.find((item) => {
                return (item.level == curr.level && item.row == curr.row && item.col == curr.col && item.type == curr.type);
            })
            if (!!item) {
                // 将方块的状态置为已被点击未消除
                pre.push(item);
            }
            return pre;
        }, []);


        // console.log(clickedBlockList, '将方块放入卡槽和收集槽');
        return clickedBlockList;
    }

    /** 将被点击过的方块放入收集槽 */
    putClickedBlockToCollectSlot(clickedBlockList) {

        this.collectContainer.resetCollectContainer();

        for (let i = 0; i < clickedBlockList.length; i++) {
            const item = clickedBlockList[i];
            item.node.active = false;
            this.blockContianer.handleTheLowerThanList(item);
            item.status = 1;
            this.collectContainer.resumeBlockToSlot(item);
        }

    }


    onGameReset() {
        cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
        // 重置收集框
        this.collectContainer.resetCollectContainer();

        // 重置地图数据
        this.blockContianer.resetBlockContainer();
        this.blockContianer.currentStage = null;
        this.onGameStart(0);
        this.stageDisplay.showStage1View();
        // 清除本地有可能存储的上一局数据
        const gdm = GameDataManager.getInstance();
        gdm.removeLastData(gdm.UserId);
    }


    /** 检查当前关卡是否过关 */
    checkStageIsPass() {

        if (this.blockContianer.restBlockNumber <= 0) {
            // console.log('过关');
            if (this.blockContianer.currentStage >= 1) {

                if (cc.game.gameStatus == GAME_STATUS.GAME_PASS) {
                    return;
                }

                // 在这里发送游戏结束通知

                cc.game.gameStatus = GAME_STATUS.GAME_PASS;

                this.sendGameFinishStatus();
                return;
            } else {
                cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;

                this.collectContainer.resetCollectContainer();
                this.blockContianer.resetBlockContainer();
                // this.blockContianer.currentStage = 0;
                this.onGameStart(1);
                this.stageDisplay.showStage2View();
                // this.collectContainer.popContainer.removeAllChildren();
            }
        } else {
            // console.log('没有过关');
        }

    }

    /** 发送游戏通关状态 */
    sendGameFinishStatus() {
        const gameStatus = new SingleGameStatusMsg();
        const gdm = GameDataManager.getInstance();
        gameStatus.userId = dcodeIO.Long.fromNumber(gdm.UserId);
        gameStatus.gameId = 40000;
        gameStatus.gameNo = 0;
        gameStatus.statusType = 1;
        gameStatus.tableId = GameDataManager.getInstance().getLocalTableId(gdm.UserId) + '';
        MsgDispatcher.sendMsg(gameStatus);
    }


    /**接收游戏结束状态 */


    /** 游戏失败 玩家有可能通过道具让游戏回到正常状态  */
    onGameEnd() {
        // // TODO 弹出道具购买框  关闭游戏道具框的时需要判断游戏是否已经结束，如果结束 需要返回到第一个场景
        // if (cc.game.gameStatus == GAME_STATUS.GAME_END) {
        //     return;
        // }
        // cc.game.gameStatus = GAME_STATUS.GAME_END;
        // this.promptFail.onPromptFailShow();

        // 这里改走复活
        this.gameRevive();
    }


    /** 处理游戏结束的逻辑 */
    onGameOver() {
        // console.log('game end');
        cc.game.gameStatus = GAME_STATUS.GAME_FAIL;

        // alert('游戏结束！')
        // 重置游戏数据
        this.onGameReset();

    }


    /** 方块被点击事件 */
    onBlockClick(block, worldPos) {
        const sm = SoundManager.getInstance();
        // 点击震动效果（部分浏览器不支持）
        if (!isIos() && sm.isAudioOn()) {
            navigator.vibrate(10);
        }

        // 点击音效
        sm.playTapEffect();



        this.blockContianer.handleTheLowerThanList(block);
        block.status = 1;
        const index = this.collectContainer.getNextBlockIndex(block);
        const targetPos = this.collectContainer.node.convertToWorldSpaceAR(this.diffcontainerPosList[index])

        this.collectContainer.addBlockInfoToList(block);

        if (this.collectContainer.isContainerFull()) {
            // console.log('满了');
            cc.game.gameStatus = GAME_STATUS.GAME_STOP;
        }


        const callback = () => {

            this.collectContainer.showBlockById(block.id);

            // 在方块进入到收集框后 执行减操作 
            if (cc.game.gameStatus == GAME_STATUS.GAME_PLAYING || cc.game.gameStatus == GAME_STATUS.GAME_STOP) {
                this.blockContianer.restBlockNumber--;
                this.collectContainer.checkRemove();
                // console.log(this.blockContianer.restBlockNumber, '剩余方块');
            }

        }
        cc.systemEvent.emit('moveBlock', { targetPos, worldPos, type: block.type, callback })


    }


    /**================ 道具技能相关逻辑开始================= */


    /** 打乱方块 */
    shuffleBlock() {
        const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_SHUFFLE);
        const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_SHUFFLE);
        if (propNumber > 0) {
            cc.systemEvent.emit('shuffle');
            this.propsArea.costPorpsById(GAME_PROPS.PROP_SHUFFLE);
        } else {
            this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_SHUFFLE, buyTimes);
        }
    }


    /** 回退道具 */
    rollback() {

        const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_ROLLBACK);
        const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_ROLLBACK);
        if (propNumber > 0) {
            if (this.collectContainer.collectList.length > 0) {
                cc.systemEvent.emit('rollback');
                this.propsArea.costPorpsById(GAME_PROPS.PROP_ROLLBACK);
            }
        } else {
            this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_ROLLBACK, buyTimes);
        }

    }


    /** 出槽道具（将收集槽顶部的三张牌放回到地图中）*/
    shiftThreeBlock() {
        const buyTimes = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_POP);
        const propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_POP);
        // debugger
        if (propNumber > 0) {

            if (this.collectContainer.collectList.length > 0 && (this.collectContainer.popContainer.childrenCount + 3) <= 6) {
                cc.systemEvent.emit('shiftBlock');
                this.propsArea.costPorpsById(GAME_PROPS.PROP_POP);
            }

        } else {
            this.promptProps.onPropsPromptShow(GAME_PROPS.PROP_POP, buyTimes);
        }

    }

    /**================ 道具技能相关逻辑结束================= */


    /** 创建骆驼 */
    createCamel() {
        const camel = cc.instantiate(this.prefab_camel);
        camel.parent = this.node;
        const anima = camel.getComponent(cc.Animation);
        anima.play();
    }


    /*******======================ui管理开始===================== */

    /** 播放背景音乐 */
    playBgm() {

        let isAudioOn = false;
        const sm = SoundManager.getInstance();
        if (!!sm) {
            isAudioOn = sm.isAudioOn();
        }
        if (isAudioOn) {
            sm.playGamingBmg();
        } else {
            sm.stopAllSound();
        }
        this.updateSoundBtnView();
    }

    /** 根据声音是否开启来改变按钮的展示 */
    updateSoundBtnView() {
        let isAudioOn = false;
        const sm = SoundManager.getInstance();
        if (!!sm) {
            isAudioOn = sm.isAudioOn();
        }
        if (isAudioOn) {
            this.node_sound.getComponent(cc.Sprite).spriteFrame = this.musicSpriteList[0];
        } else {
            this.node_sound.getComponent(cc.Sprite).spriteFrame = this.musicSpriteList[1];
        }
    }

    /** 点击音乐按钮 */
    onSoundBtnClick() {
        let isAudioOn = false;
        const sm = SoundManager.getInstance();
        if (!!sm) {
            isAudioOn = sm.isAudioOn();
            if (isAudioOn) {
                sm.closeAudio();
                // SoundManager.
            } else {
                sm.openAudio();
            }
            this.playBgm();
        }

    }


    /*******======================ui管理结束===================== */


    /****************==============界面跳转管理开始 ============************* */

    jumpToIndexPage() {
        cc.director.loadScene('Index');
    }

    /****************==============界面跳转管理结束 ============************* */

    /** 从游戏场景退出  */
    quitFromGameScene() {

        this.saveGameData();

        /**主动断开长连接 */
        // NetMgr.getInstance().close();

        /** 退出游戏 */
        evokeNativeToQuitGame();

        /** 停止播放音乐 */
        SoundManager.getInstance().stopAllEffect();

    }

    /**保存游戏数据 */
    saveGameData() {

        /** 关卡不是第二关的时候，不保存 */
        if (this.blockContianer.currentStage != 1) {
            return;
        }

        // 保存地图中的类型信息
        this.blockContianer.saveUnclickBlockType();

        // 保存道具槽中的数据信息
        this.collectContainer.savePopContainerInfo();

        // 保存收集槽中的信息
        this.collectContainer.savaCollectContainerInfo();

        const gdm = GameDataManager.getInstance();

        gdm.saveGameData(gdm.UserId);
    }


    // update (dt) {}

    protected start(): void {
        // console.log(GameDataManager.getInstance());

    }


    /***** debug 开始 */

    DebugAddMapId() {
        this.debugCurrlevel += 1;
        this.debugCurrlevel = this.debugCurrlevel > 9 ? 9 : this.debugCurrlevel;
        this.text_debug_stage.string = '将要跳转关卡： ' + this.debugCurrlevel;
    }

    DebugReduceMapId() {
        this.debugCurrlevel -= 1;
        this.debugCurrlevel = this.debugCurrlevel < 0 ? 0 : this.debugCurrlevel;
        this.text_debug_stage.string = '将要跳转关卡： ' + this.debugCurrlevel;
    }

    DebugShowDebugLevelMap() {
        this.blockContianer.resetBlockContainer();
        const info = stage2InfoList[this.debugCurrlevel];
        this.blockContianer.initGameNew(info, 1);
        this.collectContainer.resetCollectContainer();
    }

    /** debug 结束*/

    /** 复活开始 */

    /** 复活 */
    gameRevive() {
        // 获取是否首次复活
        let isTodayFirstRevive = getIsTodayFirstRevive();
        // 获取道具次数
        let popNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_POP);
        let propNumber = this.propsArea.getPropsNumberById(GAME_PROPS.PROP_ROLLBACK);
        // 获取使用次数，大于等于两次，无可用次数
        let usePopTime = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_POP);
        let usePropTime = this.propsArea.getPorpsUseTimesById(GAME_PROPS.PROP_ROLLBACK);
        // console.log(`isTodayFirstResurrection${isTodayFirstRevive},popNumber${popNumber},propNumber${propNumber},usePopTime${usePopTime},usePropTime${usePropTime}`)

        // 首次复活
        if (isTodayFirstRevive) {
            // 使用道具或分享复活
            if (popNumber > 0 || propNumber > 0) {
                const isPop = popNumber > 0;
                const propNum = isPop ? popNumber : propNumber;
                this.promptRevive.onUsePropShare(isPop, propNum);
            }
            else {
                // 购买道具或分享复活
                if (usePopTime < 2 || usePropTime < 2) {
                    const isPop = usePopTime <= usePropTime;
                    const buyTimes = isPop ? usePopTime : usePropTime;
                    this.promptRevive.onBuyPropShare(isPop, buyTimes);
                }
                // 分享复活
                else {
                    this.promptRevive.onShowShare();
                }
            }
        } else {
            // 使用道具
            if (popNumber > 0 || propNumber > 0) {
                const isPop = popNumber > 0;
                const propNum = isPop ? popNumber : propNumber;
                this.promptUseProp.onPromptUsePropShow(isPop, propNum);
            }
            else {
                // 购买道具
                if (usePopTime < 2 || usePropTime < 2) {
                    const isPop = usePopTime <= usePropTime;
                    const buyTimes = isPop ? usePopTime : usePropTime;
                    if (isPop) {
                        this.promptBuyPropCtrl.onPropsPromptShow(GAME_PROPS.PROP_POP, buyTimes);
                    } else {
                        this.promptBuyPropCtrl.onPropsPromptShow(GAME_PROPS.PROP_ROLLBACK, buyTimes);
                    }
                }
                // 失败
                else {
                    this.cancelRevive();
                }
            }
        }
    }

    /** 使用复活道具 */
    useProp(isPop: boolean) {
        if (isPop) {
            this.sendGamePropsUseMsg(GAME_PROPS.PROP_POP);
        } else {
            this.sendGamePropsUseMsg(GAME_PROPS.PROP_ROLLBACK);
        }
        cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
    }

    /** 取消复活，直接失败 */
    cancelRevive() {
        if (cc.game.gameStatus == GAME_STATUS.GAME_END) {
            return;
        }
        cc.game.gameStatus = GAME_STATUS.GAME_END;
        this.promptFail.onPromptFailShow();
    }


    /** 复活结束 */

}
