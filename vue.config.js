// const pageConfig = require("./pages.config")
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

// console.log("page", pageConfig.getPages)
module.exports = {

  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'webApp',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_p', resolve('public'))
  },
  // 当使用 pages 选项构建多页面应用时。
  // pages: pageConfig.getPages,
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 8189, // 端口号
    https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器
    hotOnly: true,
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
    //   ],
    // },
    proxy: {
      "/api": {
        // target: 'http://127.0.0.1:28000',
        target: 'http://127.0.0.1:8828',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    } // 配置多个代理
  }
}