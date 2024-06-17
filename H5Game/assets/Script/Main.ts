import GameMgr from "./Managers/GameMgr"
import { Logger } from "./Managers/Logger";
import { NetMgr } from "./Managers/NetMgr"

const { ccclass, property } = cc._decorator

@ccclass
export default class Main extends cc.Component {

    protected onLoad(): void {
        if (CC_BUILD && !CC_DEBUG) {
            Logger.setTags();
        }
        NetMgr.getInstance().connectServer();

    }


}
