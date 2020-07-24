const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new uglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log', 'console.info'] // 移除打印语句
            }
          },
          sourceMap: true,
          parallel: true
        })
      )
      config.performance = {
        hints: 'warning',
        maxAssetSize: 30000000,
        maxEntryPoingtSize: 50000000,
        assetsFilter: function(assetsFilename) {
          return assetsFilename.endWith('.css') || assetsFilename.endWith('.js')
        }
      }
    } else {
      // 非生产环境配置
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/icons'))
      .end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
    // 配置打包hash文件名
    config
      .output
      .filename('js/[name].[hash:3].js')
      .chunkFilename('js/[name].[chunkhash:3].js')
      .end()
    // 修复热更新失效
    config.resolve.symlinks(true)
  },
  devServer: {
    disableHostCheck: true // 开启webpack热重载检查
  },
  publicPath: './', // 配置打包基础路径
  lintOnSave: process.env.NODE_ENV !== 'production',
  integrity: true // CDN安全属性选项
}