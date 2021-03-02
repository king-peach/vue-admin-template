/**
 * @method storage 封装localStorage方法
 */
export default {
  getItem: function (key: string) {
    const now = Date.now()
    const expires = localStorage[`${key}_expires_`] || Date.now() + 1

    if (now >= expires) {
      localStorage.removeItem(key)
      return false
    }

    const value = localStorage[key] ? JSON.parse(JSON.stringify(localStorage[key])) : false

    return value
  },

  setItem: function (param: { key: string, value: any, expires: number, startTime: number }) {
    if (!param.startTime) param.startTime = new Date().getTime()

    if (param.expires && String(param.key)) {
      localStorage[`${param.key}_expires_`] = param.startTime + param.expires * 60 * 1000
    }

    if (String(param.key)) {
      param.value = typeof param.value === 'object' ? JSON.stringify(param.value) : param.value
      localStorage[param.key] = param.value
    }
  },

  removeItem: function (key: string) {
    localStorage.removeItem(key)
  },

  clear: function () {
    localStorage.clear()
  }
}
