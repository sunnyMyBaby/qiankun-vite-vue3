/* eslint-disable no-control-regex */

/**
 * 去掉字符串所有空格
 * @param val
 * @returns
 */
const trimString = (val: string) => {
  const trimVal = `${val}`.replace(/\s/g, '');
  return trimVal;
};
/**
 * 电话
 * @param val
 * @returns
 */
const isMobile = (val: string) => {
  const reg = /^1[34578]\d{9}$/;
  // const reg2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  // return reg.test(val) || reg2.test(val);
  return reg.test(val);
};
/**
 * 邮箱
 * @param {*} val
 */
const isEmail = (val: string) => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val);

/**
 * 字节长度
 * @param val
 * @returns
 */
const byteLength = (val: String) => {
  if (!val) return 0;
  return val.replace(/[^\x00-\xff]/g, 'xx').length;
};

/**
 * 是否是整数
 * @param val
 * @param min
 * @param max
 * @returns
 */
const isInt = (val: number, min: number, max: number) => {
  let nVal = val;
  if (/^[1-9][0-9]*$/.test(`${nVal}`)) {
    nVal = parseInt(`${nVal}`, 2);
    if (typeof min === 'number' && nVal < min) {
      return false;
    }
    if (typeof max === 'number' && nVal > max) {
      return false;
    }
    return true;
  }
  return false;
};

/**
 * 是否url
 * @param url
 * @returns
 */
const isUrl = (url: string) => {
  if (isInt(byteLength(url), 1, 255)) {
    const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)?(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+\.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().?:@&=+$,%#-]+)+\/?)$/;
    return reg.test(url);
  }
  return false;
};

export {
  byteLength, isInt, isUrl, isEmail, trimString, isMobile
};
