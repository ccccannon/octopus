
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

    // console.log('h5游戏加载完毕 通知原生: loadAssetFinished');

    if (isIos()) {
        window.webkit.messageHandlers.loadWebFinish.postMessage({});
        return;
    }

    if (isAndroid()) {
        // console.log('通知安卓加载完毕: loadAssetFinished');
        window.androidJsObj.loadWebFinish();
        return;
    }

    console.log('unhandle situation', cc.sys.os);

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

    console.log('unhandle situation', cc.sys.os);
}


/**关闭游戏 */
export const evokeNativeToQuitGame = () => {



    if (CC_DEBUG) {
        console.log('触发关闭游戏方法: evokeNativeToQuitGame');
    }

    if (isIos()) {

        if (window.webkit.messageHandlers.alloFinish) {
            window.webkit.messageHandlers.alloFinish.postMessage({});
        } else if (window.webkit.messageHandlers.finish) {
            window.webkit.messageHandlers.finish.postMessage({});
        } else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in ios')
        }
        return;
    }

    if (isAndroid()) {
        if (window.androidJsObj.alloFinish) {
            window.androidJsObj.alloFinish(true);
        } else if (window.androidJsObj.finish) {
            window.androidJsObj.finish(true);
        } else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in android ');
        }

        return;
    }

    console.log('unhandle situation', cc.sys.os);

}

/** 重新唤起游戏界面 */
export const setRefreshGameView = (callback) => {

    // console.log('重新唤起游戏界面: setRefreshGameView');

    if (window && !window.refreshGameView) {
        window.refreshGameView = () => {

            if(CC_DEBUG){
                console.log('refreshGameView被app调起',cc.sys.os);
            }
            callback && callback();
        };
    } else {
        callback = null;
    }
}


