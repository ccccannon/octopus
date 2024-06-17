import { getSocketRequiredData } from "../Utils/utils_netWork"
import httpUtil from "./httpUtil";
cc.Class({
    extends: cc.Component,
    properties: {

    },
    onLoad() {

        const url = 'http://129.226.169.100:7615/account/guestLogin';
        const data = getSocketRequiredData();


        const data1 = {
            "UUID": "81d39280c27770908b02eb7d98a2c718",
            "ChannelID": 6001,
            "Nick": "",
            "Adid": "81d39280c27770908b02eb7d98a2c718",
            "GPSAdid": "81d39280c27770908b02eb7d98a2c718",
            "Share": 0,
            "UID": 1272
        }

        console.log(data, '动态数据');
        console.log(data1, '写死的数据');
        try {
            this.sendPostRequest(url, data1);
        } catch (err) {
            console.log('err ajax', err);
        }

        // this.getTestResp(url, data1);

    },


    /**  */
    async getTestResp(url, data) {
        try {
            const res = await axios.post(url, data);
            console.log(res, '这是axios请求回来的数据');
        } catch (err) {
            console.log('err axios', err);
        }


    },

    handleEvent(e) {
        console.log( e,'xhr加载事件',e.type);
    },

    sendPostRequest(url, data) {
        console.log('1');
        console.log('sjfsdlfjlsjdlkfslk');
        let option = {
            url: url,
            method:"POST",
            data:data,
            success:(resultData)=>{
                console.log("结果为"+JSON.stringify(resultData));
            },
            fail:(status)=>{
                
            }
        }
        console.log(JSON.stringify(option)+"><<<<<<<");
        httpUtil.request(option);
        // let xhr = new XMLHttpRequest();
        // // xhr.withCredentials = true;
        // xhr.onreadystatechange = function () {
        //     console.log('2', xhr);
        //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        //         console.log(xhr.responseText, 'ajax返回的数据');
        //     }
        // };

        // xhr.addEventListener('loadstart', this.handleEvent);
        // xhr.addEventListener('load', this.handleEvent);
        // xhr.addEventListener('loadend', this.handleEvent);
        // xhr.addEventListener('progress', this.handleEvent);
        // xhr.addEventListener('error', this.handleEvent);
        // xhr.addEventListener('abort', this.handleEvent);


        // console.log('3');
        //  xhr.open('POST', url, true);
        // console.log('4');
        // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // console.log('5');
        // // xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
        // xhr.send(JSON.stringify(data));

        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "http://www.baidu.com", true);
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
        //         console.log(xhr.responseText);
        //     }
        // };
        // xhr.send();

    }


})