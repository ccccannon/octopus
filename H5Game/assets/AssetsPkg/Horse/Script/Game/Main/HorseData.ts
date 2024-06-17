import GameMgr from "../../../../../Script/Managers/GameMgr";

export class HorseData {

    public static _instance: HorseData = null;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new HorseData();
        }
        return this._instance;
    }

    public roundWinGold: number = 0;

    public topList: any = null;

    public tableId: string = GameMgr.getInstance().TableId;

    public balance: number = 0;

    public todatWinGold: number = 0;

    public gameId: number = GameMgr.getInstance().GameId;
}