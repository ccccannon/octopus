
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
        window.webkit.messageHandlers.loadWebFinish.postMessage({});
        return;
    }

    if (isAndroid()) {
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
        window.webkit.messageHandlers.opencharge.postMessage({});
        return;
    }

    if (isAndroid()) {
        // 0 表示app充值 1表示游戏充值
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
        console.log('触发关闭游戏方法: evokeNativeToQuitGame');
    }

    if (isIos()) {
        window.webkit.messageHandlers.finish.postMessage({});
        return;
    }

    if (isAndroid()) {
        window.androidJsObj.finish(true);
        return;
    }

    if (CC_DEBUG) {
        console.log('unhandle situation', cc.sys.os);
    }

}

/** 重新唤起游戏界面 */
export const setRefreshGameView = (callback) => {

    if (window && !window.refreshGameView) {
        if (CC_DEBUG) {
            console.log('添加游戏界面刷新的监听: setRefreshGameView');
        }
        window.refreshGameView = () => {
            callback && callback();
        };
    } else {
        callback = null;
    }
}


