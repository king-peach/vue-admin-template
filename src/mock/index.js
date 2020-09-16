/**
 * 导出当前文件夹下的所有js文件
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./', true, /\.js$/)
requireAll(req)
