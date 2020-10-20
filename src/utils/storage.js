/**
 * @method storage 封装localStorage方法
 */
export default {
  getItem: function(key) {
    const now = Date.now()
    const expires = localStorage[`${key}_expires_`] || Date.now() + 1

    if (now >= expires) {
      localStorage.removeItem(key)
      return false
    }

    const value = localStorage[key] ? JSON.parse(JSON.stringify(localStorage[key])) : false

    return value
  },

  setItem: function({ key, value, expires, startTime = new Date().getTime() }) {
    if (expires && String(key)) {
      localStorage[`${key}_expires_`] = startTime + expires * 60 * 1000
    }

    if (String(key)) {
      value = typeof value === 'object' ? JSON.stringify(value) : value
      localStorage[key] = value
    }
  },

  removeItem: function(key) {
    localStorage.removeItem(key)
  },

  clear: function() {
    localStorage.clear()
  }
}
