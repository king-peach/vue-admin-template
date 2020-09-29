export default class Storage {
  constructor(storage) {
    this.storage = localStorage
  }

  getItem(key) {}

  setItem({ key, value, expires, startTime = new Date().getTime() }) {
    if (expires && String(key)) {
      this.storage[`${key}_expires_`] = startTime + expires * 60 * 1000
    }

    if (String(key)) {
      value = typeof value === 'object' ? JSON.stringify(value) : value
      this.storage[key] = value
    }
  }
}
