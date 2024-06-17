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