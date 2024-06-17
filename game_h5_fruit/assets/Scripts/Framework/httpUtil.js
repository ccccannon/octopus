
let httpUtil = {


    /**
     * @description:数据请求封装
     * @param {*} option = {url,method,data,success,fail,,responseType,timeout}
     * @return {*}
     */
    request(option) {
        if (String(option) != "[object Object]") return;
        option.method = option.method ? option.method.toUpperCase() : "GET"; //toUpperCase() 将字符转换成大写
;
    

        if (cc.sys && cc.sys.getNetworkType && cc.sys.getNetworkType() === 0) {
            if (option.fail && typeof option.fail === 'function') {
                option.fail("offline");
            }
            return;
        }

        var xhr = new XMLHttpRequest();
        xhr.responseType = option.responseType || 'json';
        xhr.timeout = option.timeout || 10000;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (option.success && typeof option.success === 'function') {
                        let resultData = xhr.response;
                    
                        option.success(resultData);
                    }
                }
            }
        }
        xhr.ontimeout = function () {
          // cc.log("httpUtil:request====> ontimeout");
            if (option.fail && typeof option.fail === 'function') {
                option.fail("ontimeout");
            }
        }
        xhr.onerror = function () {
          // cc.log("httpUtil:request====> onerror");
            if (option.fail && typeof option.fail === 'function') {
                option.fail("onerror");
            }
        }
        xhr.onabort = function () {
          // cc.log("httpUtil:request====> onabort");
            if (option.fail && typeof option.fail === 'function') {
                option.fail("onabort");
            }
        }

        var formData = [];
        for (let key in option.data) {
            let value = option.data[key];
           // console.log(key+">>>>>key")
            //console.log(value+">>>>>value")
            formData.push("".concat(key, "=", value)); //.concat(arrayX, arrayY...) 连接两个或多个数组
        }
        let headData = formData.join("&"); //.join("&")把数组中所有的元素放入一个字符串并用指定的分隔符分隔。
        //GET请求，则把参数组装在url地址中
        if (option.method === "GET" && headData !== "") {
            option.url += "".concat("?", headData);
        }

      // cc.log("httpUtil:request headData = " + headData);
      // cc.log("httpUtil:request option.url = " + option.url);
      // cc.log("httpUtil:request option.data = " + JSON.stringify(option.data));

        xhr.open(option.method, option.url, true);

    
        // TODO 
        // if(mySelfInfo && mySelfInfo.userData && mySelfInfo.userData.token && mySelfInfo.userData.token != "") {
        //     xhr.setRequestHeader("Token", mySelfInfo.userData.token);
        // }

        // TODO 
        //白名单 需要把uuid（设备号）加入到http的head里
       // let devId = window.DeviceMgr.getDeviceId();
        let devId = "devId";
        if(devId != null) {
            xhr.setRequestHeader("uuid", devId);
        }
        // let verStr = window.curVer || "1.0.0";
        // let verNum = utils.verToNum(verStr);
        let verNum = "100";
        if(verNum) {
            xhr.setRequestHeader("version", verNum);
          // cc.log("httpUtil:request setRequestHeader version = " + verNum);
        }

        let channelId = 6001;
        if(channelId) {
            xhr.setRequestHeader("Channel", channelId);
          // cc.log("httpUtil:request setRequestHeader channelId = " + channelId);
        }

        //分享，通过分享码的用户
        // let shareCode = window.SDKMgr.java_getInviteCode();
        // if(shareCode && shareCode != 0) {
        //     xhr.setRequestHeader("share", shareCode);
        //   // cc.log("httpUtil:request setRequestHeader shareCode = " + shareCode);
        // }

        if (option.method === "POST") {
            xhr.setRequestHeader('Content-type', 'application/json');
            let data = JSON.stringify(option.data);


            xhr.send(data);
        } else {
            xhr.send(null);
        }
        return xhr;
    },

};
module.exports = httpUtil;
