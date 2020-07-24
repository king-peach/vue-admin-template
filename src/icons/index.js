import IconSvg from '@/components/IconSvg'
import Vue from 'vue'

// 全局注册icon-svg
Vue.component('icon-svg', IconSvg)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons/svg', true, /\.svg$/)
requireAll(req)
