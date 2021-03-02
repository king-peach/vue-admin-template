/**
 * @method 校验基本数据类型
 * @param {String} type 待校验类型
 * @param {*} value 待校验值
 */
function isType (type: string) {
  return (value: string) => {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

export const judgementType = {
  isObject: (value: any) => {
    return isType('object')(value)
  },
  isArray: (value: any) => {
    return isType('Array')(value)
  }
}
