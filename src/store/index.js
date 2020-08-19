import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import router from './modules/router'
import getters from './getters'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// console.log(modules)

const store = new Vuex.Store({
  modules: {
    app,
    router
  },
  getters
})

export default store
