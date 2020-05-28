// 配置文件别名
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  productionSourceMap: false,//配置不显示源码     
//   publicPath: '/special/gww_test/dist/',
  // 设置本地访问接口时允许跨域
  devServer: {
    proxy: {
        '/api': {
            // 此处的写法，我访问的是http://localhost:8080/api/dataHome.json设置代理后，axios请求不需要把域名带上，只需要把路径前面加上 /api 即可。
            target: 'https://www.imbatv.cn/api/',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
},
chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
}

