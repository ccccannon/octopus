// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameId } from "../Mgr/Config";
import { Player } from "../domain/Player";


export default class GameMgr {
    public static _instance: GameMgr = null;
    public static getInstance() {
        if (!this._instance) {
            this._instance = new GameMgr();
        }
        return this._instance;
    }



    UserId: number = null;

    Token: string = null;

    Language: string = null;

    GameId: number = GameId;

    TableId: string = null;

    Avatars: Array<string>;
    Nicks: Array<string>;

    public Player: Player = null;

    public Props = null;

    constructor() {
        this.getInfoFromUrl();
    }

    /** 从url中获取消息 */
    getInfoFromUrl() {
        if (!window || !globalThis) {
            return;
        }
        this.UserId = parseInt(this.getQueryString('uid', window.location.href));
        this.Token = this.getQueryString('token', window.location.href);
        this.Language = this.getQueryString('lan', window.location.href);
    }

    getQueryString = (name, url) => {
        return (
            decodeURIComponent(
                (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(url) || [
                    ,
                    "",
                ])[1].replace(/\+/g, "%20")
            ) || null
        );
    };

}