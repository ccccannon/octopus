// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

enum CameraState {
    Follow,
    Static
}

@ccclass
export default class PlayerViewCameraCtrl extends cc.Component {

    @property(cc.Camera)
    camera_playerView: cc.Camera = null;

    targetNode: cc.Node = null;

    state: CameraState = CameraState.Follow;

    /** 设置摄像机跟踪的节点 */
    setTargetNode(node: cc.Node) {
        this.targetNode = node;
        this.state = CameraState.Follow;
    }

    /** 摄像机位置重置 */
    resetCameraPos() {
        this.state = CameraState.Static;
        this.camera_playerView.node.position = cc.v3(0, 0, 0);
    }

    /** 同步摄像机位置 */
    syncCameraPos() {
        if (this.targetNode && this.targetNode.isValid && this.state === CameraState.Follow) {
            this.camera_playerView.node.position = this.targetNode.position;
        }
    }

    /**渲染帧 */
    updateRenderFrame(dt) {

        /** 同步摄像机位置 */
        this.syncCameraPos();

    }

    /** 逻辑帧 */
    updateLogicFrame() {

    }


    protected update(dt: number): void {
        this.syncCameraPos();
    }

}
