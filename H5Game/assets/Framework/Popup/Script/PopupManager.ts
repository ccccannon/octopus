import Popup from "./Popup";

const { ccclass, property } = cc._decorator;

/** 弹窗数据 */
export interface IPopup {
    popupName: string;
    popupNode: cc.Node;
    priority: number;
    isActive: boolean;
    isDestory: boolean;
}

@ccclass
export default class PopupManager {

    public static _instance: PopupManager = null;

    public static getInstance() {

        if (!this._instance) {
            this._instance = new PopupManager();
        }
        return this._instance;
    }

    /** 弹窗列表 */
    private popups: IPopup[] = [];

    /**
     * 添加弹窗
     * @param popupList 
     */
    public pushPopup(popupList: IPopup[]) {
        this.popups = [].concat(popupList);
        this.popups.sort((a, b) => a.priority - b.priority);
        // this.updateVisibility();
    }

    /**
     * 移除弹窗
     * @param popupName 
     */
    public deletePopup(popupName: string) {
        this.popups.forEach(v => {
            if (v.popupName == popupName && v.isActive) {
                v.popupNode.active = false;
            }
        })
        this.popups = this.popups.filter(v => v.popupName != popupName);
        PopupManager.getInstance().updateVisibility();
    }

    /**
     * 显示指定弹窗
     * @param nameList 
     */
    public showPopup(nameList: string[]) {
        this.popups.forEach(v => {
            if (nameList.indexOf(v.popupName) > -1) {
                v.isActive = true;
            }
        });

        this.updateVisibility();
    }

    /**
     * 隐藏指定弹窗
     * @param nameList 
     */
    public hidePopup(nameList: string[]) {
        this.popups.forEach(v => {
            if (nameList.indexOf(v.popupName) > -1) {
                v.isActive = false;
                v.popupNode.active = false;
            }
        });
    }

    /**
     * 更新弹窗显示
     */
    public async updateVisibility() {
        const parent = cc.director.getScene().getChildByName("Canvas").getChildByName("parent");
        let popupIndex = this.popups.findIndex(item => item.isActive);
        // console.log("popupIndex", popupIndex);
        if (popupIndex > -1) {
            let popup = this.popups[popupIndex];
            // console.log(popup.priority);
            popup.popupNode.parent = parent;
            popup.popupNode.active = true;
            popup.popupNode.name = popup.popupName;
            let res = await popup.popupNode.getComponent(Popup).show(popup.popupName, true);
            console.log("res", res);
            if (popup.isDestory) {
                popup.popupNode.removeFromParent();
                this.popups = this.popups.filter(v => v.popupName != popup.popupName);
            } else {
                this.popups[popupIndex].isActive = false;
            }

            popupIndex = this.popups.findIndex(item => item.isActive);
            if (popupIndex > -1) {
                this.updateVisibility();
            }
        }
    }
}
