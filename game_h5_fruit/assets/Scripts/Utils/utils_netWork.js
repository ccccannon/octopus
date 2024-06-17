import { getQueryString } from "./utils_common";

// 从url中获取数据 并组装成获取长链接需要的数据
export const getSocketRequiredData = () => {

    const token = getQueryString('token', window.location.href);
    const uid = getQueryString('uid', window.location.href);
    // const gid = getQueryString('gid', window.location.href);
    const data = {
        "Adid": token,
        "GPSAdid": token,
        "Share": 0,
        "channelId": 6001,
        "nick": "",
        "uid": parseInt(uid),
        "uuid": token
    };
    return data;
}


// 获取进行长链接的数据
export const getGameSocketData = async (url, data) => {

    // const res = await fetch(url, {
    //     body: JSON.stringify(data),
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json;charset=utf-8'
    //     },
    //     mode: 'cors'
    // });

    // const data1 = await res.json();
    // const resData = data1.data
    // return resData;

    // const gameData = await post_ajax(url, data);

    // console.log(gameData);
    // return gameData;

    // 'content-type': 'application/x-www-form-urlencoded'
    const config = {
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'uuid': data.uuid,
        }
    }

    const res = await axios.post(url, data, config);
    const resData = res.data.data;
    // console.log(res);
    if (CC_DEBUG) {
        console.log(res, '长链接信息响应');
    }

    return resData;

}


// 获取动态图片资源
export const loadPicture = (url) => {
    // url = 'https://pic.hghggh.com/avatar/16546767826711200_800.gif';
    // axios.options();
    return new Promise((res) => {
        cc.assetManager.loadRemote(url, (err, sprite) => {
            if (err) {
                console.error(err);
                return;
            }
            // console.log(sprite,'获取动态图片资源');
            res(sprite);
        })
    })
}

/** 获取排行榜数据 */
export const getRankData = async (url, token, data) => {

    // const res = await fetch(url, {
    //     body: JSON.stringify(data),
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json;charset=utf-8',
    //         "token": token
    //     }
    // })

    // const rank = await res.json();
    // return rank;

    const config = {
        headers: {
            'token': token,
        }
    }
    const rank = await axios.post(url, data, config);
    const res = rank.data;
    return res

}


/** 
 * 获取水果押注记录的数据 
 * @param {String} url  网址
 * @param {String} token 身份验证标识
 * @param {Object} data 请求信息
 * @returns 水果押注记录
 * */
export const getFruitRecordData = async (url, token, data) => {
    const config = {
        headers: {
            'token': token,
        }
    }
    const record = await axios.post(url, data, config);
    const res = record.data;
    return res

    // const res = await fetch(url, {
    //     body: JSON.stringify(data),
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json;charset=utf-8',
    //         "token": token
    //     }
    // });

    // const record = await res.json();

    // console.log(record);

    // return record;

}



export const post_ajax = (url, data,) => {


    // return new Promise((res) => {
    var xhr = new XMLHttpRequest();
    // 2.调用open函数，决定请求方式和URL地址
    xhr.open('POST', url);
    // 3.设置 Content-Tyep 属性（固定写法）
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 4.调用send，同时将数据以查询字符串的形式提交给服务器
    xhr.send(JSON.stringify(data));
    // 5.监听 onreadystatechange 事件
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.responseText);
            // console.log(JSON.parse(xhr.response));
            const data = JSON.parse(xhr.response);
            // console.log(JSON.parse(xhr.response))
            // res(data.data);
            console.log(data, ' ajax的方式请求数据');

        }
    }
    // })


}







