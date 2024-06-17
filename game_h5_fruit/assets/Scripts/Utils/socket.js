// document.write("<script type='text/javascript' src='/js/ByteBuffer.js'></script>");

import { customDataPack, customDataUnPack } from "./dataHandle";

/**
 * 字头,固定
 */
let FIELD_HEAD = 0XCC;

/**
 * 长度（数据长度2位 + 1位校验位）
 */
let FILED_LEN = 3;

//心跳
let HEART_BEAT = 0;

//登录
let LOGIN = 1;

// const 



const WsSocket = function () {
    this.socket = null;
    //服务器地址
    // 129.226.169.100:6615
    // this.wsUrl = "ws://129.226.169.100:6615/";
    this.wsUrl = "";
    //避免重复连接
    this.lockReconnect = false;
    //重连标识
    this.reconnectFlag = null;
    // 最大重连次数
    this.maxReconnectNum = 3;
    // 当前重连次数
    this.currentReconnectNum = 0;
    // 重连间隔，4s
    this.reconnectTime = 4000;
    // 心跳响应
    this.heartCheckTimeoutObj = null;
    // websocket默认是传输字符串的，需要改为arraybuffer二进制传输类型
    this.binaryType = "arraybuffer";
    // 连接建立后处理的方法
    // this.onOpen = onOpen;
    //传递过来的参数
    // this.param = param;
    // 对消息的处理过程
    this.onMessage = function (evt) { };

    // 建立连接
    this.createWebSocket = function () {
        try {
            if (typeof (WebSocket) == "undefined") {
                console.log("unsupport WebSocket");
            } else {
                console.log("support WebSocket");
            }

            // debugger
            this.socket = new WebSocket(this.wsUrl, "websocket-protocol");

            // console.log(this.socket, '2222222222222222222');

            //websocket默认是传输字符串的，需要改为arraybuffer二进制传输类型
            this.socket.binaryType = this.binaryType;
            //初始化
            this.init();
        } catch (e) {
            console.log('[socket] createWebSocket ', error);
            this.reconnect();
        }
    };

    //重新连接
    this.reconnect = function () {
        if (this.isEnd) {
            return;
        }
        let _self = this;
        if (this.lockReconnect) {
            console.log('socket, reconnect');
            return;
        }
        this.lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        this.reconnectFlag && clearTimeout(this.reconnectFlag);
        this.reconnectFlag = setTimeout(function () {
            // console.log("第" + _self.currentReconnectNum + '次重连');
            if (_self.currentReconnectNum < _self.maxReconnectNum) { // 限制重连次数
                // console.log("第" + _self.currentReconnectNum + '次重连');
                _self.currentReconnectNum++;
                _self.createWebSocket();
                _self.operationAfterReconnect();
            } else { // 重连失败，弹出错误信息
                // console.log('重连失败！')
                // TODO：页面弹出错误提示框
            }
            _self.lockReconnect = false;
        }, _self.reconnectTime);
    };

    // 设置消息处理
    this.setMessageHandle = (callback) => {
        this.onMessageHandle = callback;
        return this;
    }

    // 设置错误处理
    this.setSocketErrorHandle = (callback) => {
        this.onErrorHandle = callback;
        return this;
    }


    // 设置重连操作
    this.setOperationAfterReconnect = (callback) => {
        this.operationAfterReconnect = callback;
        return this;
    }


    // 设置连接后的操作
    this.setOperationAfterOnOpen = (callback) => {
        this.operationAfterOnOpen = callback;
        return this;
    }


    // 设置socket的url
    this.setSocketUrl = (url) => {
        if (url.startsWith('ws://')) {
            this.wsUrl = url;
        } else {
            this.wsUrl = "ws://" + url;
        }
        return this;
    };

    // websocket连接成功后，初始化配置
    this.init = function () {

        let _self = this;

        this.socket.onclose = function (e) {
            // console.log('链接关闭', e.code + ' ' + e.reason + ' ' + e.wasClean);
            // _self.reconnect();
            // this.lockReconnect = false;

            if (_self.isEnd) {
                return;
            }
            _self.reconnect();

        };

        this.socket.onerror = function (e) {
            // console.log('发生异常了');
            _self.reconnect();
            _self.onErrorHandle && _self.onErrorHandle(e);
        };

        this.socket.onopen = function () {

            // console.log("连接成功！");
            _self.currentReconnectNum = 0; // 重置当前重连次数

            _self.operationAfterOnOpen && _self.operationAfterOnOpen();

            _self.heartCheck();
        };

        this.socket.onmessage = function (event) {

            // console.log(event, 'onmessage');

            const data = customDataUnPack(event.data);

            // _self.heartCheck();

            _self.onMessageHandle && _self.onMessageHandle(data);

        };
    };

    //  关闭socket
    this.closeSocket = function () {
        this.isEnd = true;
        this.socket.close();
        if (this.heartCheckTimeoutObj) {
            clearInterval(this.heartCheckTimeoutObj);
        }
        this.socket = null;
    }


    // 传递消息
    this.sendData = (buffer) => {

        if (this.socket.readyState === 1) {
            this.socket.send(buffer);
            // console.log('信息发送成功');
            return;
        } else {

            this.reconnect();
        }
    }


    //WebSocket心跳检测
    this.heartCheck = function () {
        let timeout = 15000; //心跳检测时间
        let _self = this;

        if (this.heartCheckTimeoutObj) {
            clearInterval(this.heartCheckTimeoutObj);
        }

        this.heartCheckTimeoutObj = setInterval(function () {

            const buffer = customDataPack(1000, 9)
            // console.log('心跳');
            _self.sendData(buffer);

            //这里发送一个心跳，后端收到后，返回一个心跳消息，
        }, timeout)
    }

    this.getNowTime = function () {
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours();       //获取当前小时数(0-23)
        var m = myDate.getMinutes();     //获取当前分钟数(0-59)
        var s = myDate.getSeconds();
        return year + '-' + this.p(month) + "-" + this.p(date) + " " + this.p(h) + ':' + this.p(m) + ":" + this.p(s);
    };
    //处理时间的
    this.p = function (s) {
        return s < 10 ? '0' + s : s;
    };
    // int/byte/short型数据，低八位获取
    this.getLow8 = function (number) {
        return number & 0xff;
    };
    // 求和
    this.sum = function (integers) {
        let result = 0;
        for (let i = 0; i < integers.length; i++) {
            result += integers[i];
        }
        return result;
    };
}

const websocket = new WsSocket();


export default websocket;