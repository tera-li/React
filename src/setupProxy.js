const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {  // api1是需要转发的请求(所有带有/api1前缀的请求都会转发给http://localhost:5000)
      target: 'https://smcmall-1256457449.cos.ap-chengdu.myqcloud.com/image', // 配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} // 匹配/api1替换成空字符串
    }),
 		// 可以配置多个代理   
    proxy('/api', { 
      target: 'http://localhost:6000',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    })
  )
}