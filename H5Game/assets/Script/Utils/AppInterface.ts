
/** 是否为ios平台 */
export const isIos = () => {
    return cc.sys.os === cc.sys.OS_IOS
}

/** 是否为安卓平台 */
export const isAndroid = () => {
    return cc.sys.os === cc.sys.OS_ANDROID;
}

/** h5游戏加载完毕 通知原生 */
export const loadAssetFinished = () => {


    if (CC_DEBUG) {
        console.log('h5游戏加载完毕 通知原生: loadAssetFinished');
    }

    if (isIos()) {
        // @ts-ignore
        window.webkit.messageHandlers.loadWebFinish.postMessage({});
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        window.androidJsObj.loadWebFinish();
        return;
    }

    if (CC_DEBUG) {
        console.log('unhandle situation', cc.sys.os);
    }

}


/** 唤起app的充值界面  */
export const evokeNativeChargePage = () => {

    if (isIos()) {
        // @ts-ignore
        window.webkit.messageHandlers.opencharge.postMessage({});
        return;
    }

    if (isAndroid()) {
        // 0 表示app充值 1表示游戏充值 
        // @ts-ignore
        window.androidJsObj.openChargePage(1);
        return;
    }

    if (CC_DEBUG) {
        console.log('unhandle situation', cc.sys.os);
    }
}


/**关闭游戏 */
export const evokeNativeToQuitGame = () => {

    if (CC_DEBUG) {
        console.trace();
        console.log('触发关闭游戏方法: evokeNativeToQuitGame');
    }

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.alloFinish) {
            handler.alloFinish.postMessage({});
        } else if (handler.finish) {
            handler.finish.postMessage({});
        } else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        // if (handler.alloGameFinish) {
        //     handler.alloGameFinish();//这个接口针对全屏游戏
        // } else 
        if (handler.alloFinish) {
            handler.alloFinish(true); // 这个接口针对半屏游戏
        } else if (handler.finish) {
            handler.finish(true);
        }
        else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in android ');
        }

        return;
    }

    console.log('unhandle situation', cc.sys.os);

}

/** 重新唤起游戏界面 */
export const setRefreshGameView = (callback?) => {
    // @ts-ignore
    if (window && !window.refreshGameView) {
        if (CC_DEBUG) {
            console.log('添加游戏界面刷新的监听: setRefreshGameView');
        }
        // @ts-ignore
        window.refreshGameView = () => {
            callback && callback();
        };
    } else {
        callback = null;
    }
}

/** 调整游戏层级 */
export const adjustWebviewzIndex = (isAdjust: string, dHeight: number) => {

    if (CC_DEBUG) {
        // console.trace();
        console.log('触发调整游戏层级: adjustWebviewzIndex');
    }
    const objJson = JSON.stringify({ isAdjust, dHeight });

    if (CC_DEBUG) {
        console.log(objJson);
    }

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.adjustWebviewzIndex) {
            handler.adjustWebviewzIndex.postMessage(objJson);
        } else {
            console.log('unexcept sutiation on adjustWebviewzIndex in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.adjustWebviewzIndex) {
            handler.adjustWebviewzIndex(objJson);
        } else {
            console.log('unexcept sutiation on adjustWebviewzIndex in android ');
        }

        return;
    }

}

/** 控制上下麦 */
export const openCloseMICStateCtrl = (act: string) => {

    if (CC_DEBUG) {
        // console.trace();
        console.log('触发控制上下麦: openCloseMICStateCtrl');
    }
    const objJson = JSON.stringify({ act });

    if (CC_DEBUG) {
        console.log(objJson);
    }

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.openCloseMICStateCtrl) {
            handler.openCloseMICStateCtrl.postMessage(objJson);
        } else {
            console.log('unexcept sutiation on openCloseMICStateCtrl in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.openCloseMICStateCtrl) {
            handler.openCloseMICStateCtrl(objJson);
        } else {
            console.log('unexcept sutiation on openCloseMICStateCtrl in android ');
        }

        return;
    }
}

/** 接收app上下麦的结果 */
export const openCloseMICStateCtrlRespond = (callback) => {
    if (CC_DEBUG) {
        console.log('接收麦位返回信息');
    }

    // @ts-ignore
    if (window && !window.openCloseMICStateCtrlRespond) {
        if (CC_DEBUG) {
            console.log('接收app返回的麦位信息: openCloseMICStateCtrlRespond');
        }
        // @ts-ignore
        window.openCloseMICStateCtrlRespond = (res: string) => {
            console.log(res, "接收app上下麦的结果");
            callback && callback(res);
        };
    } else {
        callback = null;
    }

}


/** 查询麦位状态 */
export const queryUserMICState = (): string => {
    if (CC_DEBUG) {
        // console.trace();
        console.log('查询麦位状态: queryUserMICState');
    }

    let micState = null;

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.queryUserMICState) {
            micState = handler.queryUserMICState.postMessage({});
            console.log(micState, "result in queryUserMICState in ios")
        } else {
            console.log('unexcept sutiation on queryUserMICState in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.queryUserMICState) {
            micState = handler.queryUserMICState();
            console.log(micState, "result in queryUserMICState in android")
        } else {
            console.log('unexcept sutiation on queryUserMICState in android ');
        }

        return micState;
    }

}

/** 接收app返回的麦位状态 */
export const queryUserMICStateRespond = (callback) => {

    if (CC_DEBUG) {
        console.log('注册接收麦位返回信息的方法');
    }

    // @ts-ignore 
    if (window && !window.queryUserMICStateRespond) {
        if (CC_DEBUG) {
            console.log('接收app返回的麦位信息: queryUserMICStateRespond');
        }
        // @ts-ignore
        window.queryUserMICStateRespond = (res: string) => {
            console.log(res, "接收app返回的麦位信息");
            callback && callback(res);
        };
    } else {
        callback = null;
    }

}


/** 替换房间背景图片 */
export const replaceRoomBg = (GameId: number, PicUrl: string) => {

    if (CC_DEBUG) {
        // console.trace();
        console.log('查询麦位状态: replaceRoomBg');
    }

    const objJson = JSON.stringify({ GameId, PicUrl });

    if (CC_DEBUG) {
        // console.trace();
        console.log('查询麦位状态: replaceRoomBg', objJson);
    }

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.replaceRoomBg) {
            handler.replaceRoomBg.postMessage(objJson);
        } else {
            console.log('unexcept sutiation on replaceRoomBg in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.replaceRoomBg) {
            handler.replaceRoomBg(objJson);
        } else {
            console.log('unexcept sutiation on replaceRoomBg in android ');
        }
        return;
    }


}

/** 通知app开启关闭特效 */
export const noticeAPPOpenCloseEffect = (isShowAnima: string) => {

    if (CC_DEBUG) {
        // console.trace();
        console.log('通知app控制特效: noticeAPPOpenCloseEffect', isShowAnima);
    }
    const objJson = JSON.stringify({ isShowAnima });

    if (CC_DEBUG) {
        // console.trace();
        console.log('通知app控制特效: noticeAPPOpenCloseEffect', objJson);
    }

    if (isIos()) {
        /** 在ios中，如果特效位于底层，会直接不展示，无需通知关闭特效 */
        return;
        // @ts-ignore 
        const handler = window.webkit.messageHandlers;

        if (handler.openCloseEffect) {
            handler.openCloseEffect.postMessage(objJson);
        } else {
            console.log('unexcept sutiation on openCloseEffect in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.openCloseEffect) {
            handler.openCloseEffect(objJson);
        } else {
            console.log('unexcept sutiation on openCloseEffect in android ');
        }
        return;
    }

}

/** 接收app开关特效是否成功 */
export const getNoticeAPPOpenCloseEffectRespond = (callback) => {
    if (CC_DEBUG) {
        console.log('注册接收app开关特效是否成功的方法');
    }

    // @ts-ignore 
    if (window && !window.openCloseEffectRespond) {
        if (CC_DEBUG) {
            console.log('接收app返回的开关特效是否成功: openCloseEffectRespond');
        }
        // @ts-ignore
        window.openCloseEffectRespond = (res: string) => {
            console.log(res, "接收app返回开关特效是否成功");
            callback && callback(res);
        };
    } else {
        callback = null;
    }
}