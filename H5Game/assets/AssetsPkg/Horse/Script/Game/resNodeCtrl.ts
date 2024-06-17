const { ccclass, property } = cc._decorator

@ccclass
export default class resNodeCtrl extends cc.Component {

    @property([cc.SpriteFrame])
    horseViewList: Array<cc.SpriteFrame> = [];

    getHorseViewList() {
        return this.horseViewList;
    }

}
