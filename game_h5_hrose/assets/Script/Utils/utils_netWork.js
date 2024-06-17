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

    const config = {
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'uuid': data.uuid,
        }
    }
    const res = await axios.post(url, data, config);
    console.log(res);
    const resData = res.data.data;
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

    // 请求排行榜需要再header头里面加token
    const config = {
        headers: {
            'token': token,
        }
    }
    const rank = await axios.post(url, data, config);
    const res = rank.data;
    return res;

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
    const rank = await axios.post(url, data, config);
    const res = rank.data;
    return res;
}







