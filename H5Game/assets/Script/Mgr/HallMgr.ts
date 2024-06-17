// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgDispatcher } from "../DataHandler/MsgDispatcher";
import GameMgr from "../Managers/GameMgr";
import { Logger } from "../Managers/Logger";
import { NetMgr } from "../Managers/NetMgr";
import { IntoGameHallMsg } from "../msg/IntoGameHallMsg";
import { GameSessionId } from "./Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallMgr {

    public bundleList: Array<cc.AssetManager.Bundle> = [];

    public static _instance: HallMgr = null;

    public static getInstance() {

        if (!this._instance) {
            this._instance = new HallMgr();
        }
        return this._instance;
    }


    start() {

    }




    LoadGame(GameId: GameSessionId) {

        // debugger
        if (GameId == GameSessionId.Fruit) {

            this.loadFruitParty();
            return;
        }


        if (GameId == GameSessionId.Horse) {
            this.loadHorseRacing();
            return;
        }

        if (GameId == GameSessionId.SuperWin) {
            this.loadSuperWin();
            return;
        }

    }



    /** 加载转盘 */
    loadSuperWin() {
        // debugger
        cc.assetManager.loadBundle('SuperWin', (err, bundle) => {
            if (err) {
                console.log(err);
                return;
            }

            bundle.loadScene('main', (err, scene) => {
                if (err) {
                    console.log(err);
                    return;
                }
                Logger.logView('加载转盘游戏成功');
                cc.director.runScene(scene);
            });

        })
    }


    /**  加载水果机  */
    loadFruitParty() {

        cc.assetManager.loadBundle('Fruit', (err, bundle) => {
            if (err) {
                console.log(err);
                return;
            }

            bundle.loadScene('mainScene', (err, scene) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log('加载贪吃蛇场景结束');
                // cc.director.loadScene('MultiSnake');
                Logger.logView('加载水果机成功！！！');
                cc.director.runScene(scene);
                // this.loginGameHall(GameSessionId.Fruit);
            });

        })
    }


    /** 加载赛马 */

    loadHorseRacing() {
        cc.assetManager.loadBundle('Horse', (err, bundle) => {
            if (err) {
                console.log(err);
                return;
            }
            bundle.loadScene('mainScene', (err, scene) => {
                if (err) {
                    console.log(err);
                    return;
                }
                Logger.logView('加载赛马成功！！！');
                cc.director.runScene(scene);
            });
        })
    }




    // update (dt) {}
}
