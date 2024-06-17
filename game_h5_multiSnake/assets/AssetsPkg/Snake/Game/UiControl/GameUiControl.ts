// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { Decimal } from "../Utils/Decimal";
import { GameMode, GameState, LOGIC_FRAME_DT, PorpsType, RENDER_FRAME_DT, SHIELD_PERSIST_BORN, SnakeMoveState, SnakeProps, SnakeStatus, SnakeType } from "../Constant";
const renderFrame = new Decimal((1000 / RENDER_FRAME_DT).toFixed(3));
const logicFrame = new Decimal((1000 / LOGIC_FRAME_DT).toFixed(3));

@ccclass
export default class GameUiControl extends cc.Component {

    totalFrame: number = 0;

    public GameState: GameState = GameState.Playing;

    public currViewSnake: number = null;

    public gameMode: GameMode = GameMode.Gold;


    @property(cc.Node)
    Node_Mode_Gold: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    Node_Mode_Unlimited: cc.Node = null;

    onLoad() {

        /** 设置为横板 */
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)

        this.setGameMode(GameMode.Unlimited);
        this.gameLaunch();

    }

    /** 设置游戏模式 */
    setGameMode(mode: GameMode) {
        this.gameMode = mode;
    }

    /** 游戏启动 */
    gameLaunch() {
        if (this.gameMode == GameMode.Gold) {
            this.Node_Mode_Gold.active = true;
            return;
        }

        if (this.gameMode == GameMode.Unlimited) {
            this.Node_Mode_Unlimited.active = true;
            return;
        }

    }


}
