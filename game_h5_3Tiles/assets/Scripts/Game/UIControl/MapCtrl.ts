// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MapCtrl extends cc.Component {

    @property(cc.Prefab)
    prefab_cactus: cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected onEnable(): void {
        // this.addCactusToMap();
    }

    /** 加入仙人掌 */
    addCactusToMap() {
        this.node.removeAllChildren();
        const posList = this.getCactusPosition();
        const number = 10;
        for (let i = 0; i < number; i++) {

            const item = cc.instantiate(this.prefab_cactus);
            item.parent = this.node;
            item.position = posList[i];
        }

    }


    /** 获取坐标 */
    getCactusPosition() {
        let posMap = new Set();
        let mapList = [];
        let x, y;
        while (true) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            if (!posMap.has(`${x},${y}`)) {
                posMap.add(`${x},${y}`);
                mapList.push(cc.v3(300 - x * 60, 300 - y * 60))
            }

            if (mapList.length >= 10) {
                break;
            }

        }
        return mapList;
    }





    // update (dt) {}
}
