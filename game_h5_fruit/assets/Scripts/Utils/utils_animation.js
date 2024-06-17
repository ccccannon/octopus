//节点移动动画移动动画
/**
 * 
 * @param {cc.Node} node 被移动的节点
 * @param {Array[cc.Vec2]} poslist 位置坐标数组
 * @returns 
 */
export const nodeMoveWithPosList = (node, poslist) => {
    if (!cc.isValid(node) || !poslist || poslist.length < 1) return;
    let len = poslist.length;
    let acts = [];
    for (let i = 0; i < len; i++) {
        let pos = poslist[i];
        // let act = cc.sequence(
        //     cc.delayTime(1),
        //     cc.moveTo(0.5, pos.x, pos.y).easing(cc.easeIn(0.5))
        // )

        const act = cc.tween().delay(1).to(0.5, { position: pos }, { easing: "sineIn" });

        acts.push(act)
    }
    // 将节点位置定位在第一个坐标处
    node.setPosition(poslist[0]);
    // node.runAction(cc.repeatForever(cc.sequence(acts)));
    // cc.tween(node).then(acts).repeatForever().start();
    cc.tween(node).sequence(...acts).repeatForever().start();
}
