// import { LANGUAGE_TYPE } from "../Constant";
// import { language } from "../../AssetsPkg/Snake/Game/Lang/index";

import GameMgr from "../Managers/GameMgr";
import { language } from "./CommonTips";

/**
 * 
 * @param {String} name 需要提取的字段名
 * @param {String} url 被提取的链接
 * @returns 
 */
export const getQueryString = (name, url) => {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(url) || [
        ,
        "",
      ])[1].replace(/\+/g, "%20")
    ) || null
  );
};


// 对展示的数字进行格式处理
export const numberFormat = (number) => {

  const k = 10 ** 3;
  const w = 10 ** 4;
  const m = 10 ** 6;
  const b = 10 ** 10;

  if (number <= k) {
    return number.toLocaleString('en-US');
  }

  if (number > k && number <= m) {
    return (number / k).toFixed(1) + 'K';
  }

  if (number > m && number <= b) {
    return (number / m).toFixed(1) + 'M';
  }

  if (number > b) {
    return (number / b).toFixed(1) + 'B';
  }

}


// 处理翻译
export const handleTranslate = (variable, str) => {

  if (str.indexOf('{}') <= -1) {
    throw new Error('please check again,this str seems no need to handle');
  }

  return str.replace('{}', variable);

}

// 拼接两个字符串
export const composeTwoString = (str1, str2, cChat) => {
  return str1 + cChat + str2;
}



/**
  *
  * @desc   处理字符串
  * @param  {String|Number|String}
  * @return {String}
  */
export const subStr = (str, length, suffix, type) => {
  var ret;
  str = str || "";
  if (!suffix) {
    suffix = "...";
  }
  length = length || 10;
  if (_getStrLen(str) > length) {
    var len = 0;
    var code;
    ret = "";
    for (var i = 0; i < str.length; i++) {
      ret += str[i];
      code = str.charCodeAt(i);
      if (code >= 0x20 && code <= 0x7e) {
        len++;
      } else {
        len += 2;
      }
      if (len >= length) {
        break;
      }
    }

    if (type == 1) {
      ret += suffix;
    } else {
      ret = suffix + ret;
    }


  } else {
    ret = str;
  }
  return ret;
}

/**获取字符串长度 */
export const _getStrLen = (str) => {
  var chars = str.match(/[^ -~]/g);
  return str.length + (chars ? chars.length : 0);
}


/** 时间通用展示 */
export const formatTimeDisplay = (num: number) => {

  if (num < 0) {
    num = Math.abs(num);
    console.log('the params is error');
  }

  const hour = 60 * 60;
  const min = 60;

  // 获取时间的秒数
  num = Math.floor(num / 1000);

  const cHour = Math.floor(num / hour);
  const cMin = Math.floor((num - cHour * hour) / min);
  const cSec = num - cHour * hour - cMin * min;

  let strHour, strMin, strSec;

  strHour = cHour >= 10 ? "" + cHour : "0" + cHour;
  strMin = cMin >= 10 ? "" + cMin : "0" + cMin;
  strSec = cSec >= 10 ? "" + cSec : "0" + cSec;
  // console.log(cHour);
  // console.log(cMin);
  // console.log(cSec);
  const timeDisplay = strHour + ":" + strMin + ":" + strSec;
  // console.log(timeDisplay);

  return timeDisplay;


}

/** 获取当前年月日 2023-09-23 */
export const formatDate = (time: number) => {
  const now = new Date(time);
  const addLeadingZero = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  }

  const year = now.getFullYear();
  const month = addLeadingZero(now.getMonth() + 1); // 月份从0开始，所以要加1
  const day = addLeadingZero(now.getDate());
  return `${year}-${month}-${day}`;
}

// 获取动态图片资源
export const loadPicture = (url) => {
  // url = 'https://pic.hghggh.com/avatar/16546767826711200_800.gif';
  // url = 'https://pic.hghggh.com/default/avatar/face_modern1%402x.png';
  // url = 'http://pic.hghggh.com/game/games/dev/1l244myl2gc.jpg';
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


/** 根据url下载图片  */
export const loadPictureByUrl = async (url) => {
  const texture = await loadPicture(url);
  const sprite = new cc.SpriteFrame();
  sprite.setTexture(texture as cc.Texture2D);
  return sprite;
}

// export const getCountryInfoById = (id, lan) => {
//   return language[lan].country[id];
// }



/** 显示tips提示 */
export const showTips = (tipId) => {

  const lang = GameMgr.getInstance().Language ? GameMgr.getInstance().Language : 'en';

  console.log(lang);

  let str = language[lang][tipId];

  const node = cc.director.getScene().getChildByName('Tips')

  if (node) {
    const tips = cc.instantiate(node);
    tips.active = true;
    if (!!str) {
      tips.children[0].getComponent(cc.Label).string = str;
    } else {
      tips.children[0].getComponent(cc.Label).string = 'errorCode: ' + tipId;
    }
    cc.director.getScene().addChild(tips);
    const canvas = cc.find("Canvas")
    const position = canvas.parent.convertToWorldSpaceAR(canvas.position);
    tips.scale = 0;
    const height = (cc.view.getVisibleSizeInPixel().height - tips.height) / 2;
    tips.position = cc.v3(position.x, height, 0);
    cc.tween(tips).to(0.5, { scale: 1 }, { easing: "backOut" }).delay(2).to(0.5, { scale: 0 }, { easing: 'sineOut' }).call(() => {
      tips.active = false;
    }).start();

  } else {
    cc.assetManager.loadBundle('CommonUI', (error, bundle) => {
      if (error) {
        console.log(error, 'error on load commonUi!');
        return;
      }
      bundle.load('Tips', cc.Prefab, (error, prefab) => {
        if (error) {
          console.log(error, 'error when load tips prefab!');
          return;
        }

        const tips = cc.instantiate(prefab);
        if (!!str) {
          tips.children[0].getComponent(cc.Label).string = str;
        } else {
          tips.children[0].getComponent(cc.Label).string = 'errorCode: ' + tipId;
        }
        cc.director.getScene().addChild(tips);
        const canvas = cc.find("Canvas")
        const position = canvas.parent.convertToWorldSpaceAR(canvas.position);
        tips.scale = 0;
        const height = (cc.view.getVisibleSizeInPixel().height - tips.height) / 2;
        tips.position = cc.v3(position.x, height, 0);
        cc.tween(tips).to(0.5, { scale: 1 }, { easing: "backOut" }).delay(2).to(0.5, { scale: 0 }, { easing: 'sineOut' }).call(() => {
          tips.active = false;
        }).start();

      })

    })
  }

}


// export const getCountryInfoById = () => {
//   const gdm = GameDataManager.getInstance();
//   if (!gdm) {
//     return;
//   }
//   const lan = gdm.Language;
//   const id = gdm.Player ? gdm.Player.areaId : 0;
//   let cInfo;
//   if (language[lan].country[id]) {
//     cInfo = language[lan].country[id]
//   } else {

//     if (lan == LANGUAGE_TYPE.EN) {
//       cInfo = {
//         name: language.en.singBoard.unknown,
//         shortName: 'default',
//       }
//     } else {
//       cInfo = {
//         name: language.ar.singBoard.unknown,
//         shortName: 'default',
//       }
//     }
//   }

//   return cInfo;
// }


