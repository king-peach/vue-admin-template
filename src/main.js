import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import { Button, Select, Menu, Submenu, MenuItem, MenuItemGroup, Tooltip, Breadcrumb, BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import '@/permission'
import '@/icons'

Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.config.productionTip = false

// 根据视窗宽度来改变layout状态, 待优化（节流）
window.addEventListener('resize', handleTransformAsidebar, false)

function handleTransformAsidebar() {
  const docWidth = document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth
  store.commit('UPDATE_IS_MOBILE', docWidth < 1000)
  if (!store.getters.isCollapse) store.commit('UPDATE_COLLAPSE', docWidth < 1000)
}

handleTransformAsidebar()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
