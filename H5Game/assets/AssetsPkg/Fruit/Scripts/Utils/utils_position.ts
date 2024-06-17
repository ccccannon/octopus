

/**
 * 
 * 将一组坐标从依赖节点转换到目标节点
 * 
 * @param {cc.Node} targetNode 目标节点 
 * @param {cc.Node} depandNode 依赖节点
 * @param {Array} posList 坐标数组
 * @returns 
 */
export const convertPositionForList = (targetNode, depandNode, posList) => {
    let posTempList = [];
    for (let i = 0, len = posList.length; i < len; i++) {
        const pos = posList[i];
        const targetNodePos = targetNode.convertToNodeSpaceAR(depandNode.convertToWorldSpaceAR(pos));
        posTempList.push(targetNodePos);
    }
    return posTempList;
}


// 
/**
 * 
 * 将单个从依赖节点转换到目标节点
 * 
 * @param {cc.Node} targetNode 目标节点 
 * @param {cc.Node} depandNode 依赖节点
 * @param {cc.Vec2} pos 坐标数组
 * @returns 
 * 
 */
export const convertPositionForSingle = (targetNode, depandNode, pos) => {
    let convertPos = null;
    const targetNodePos = targetNode.convertToNodeSpaceAR(depandNode.convertToWorldSpaceAR(pos));
    convertPos = targetNodePos;
    return pos;
}