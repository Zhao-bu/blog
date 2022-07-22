module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3300', // 跨域地址
          ws: true,
          changOrigin: true, //允许跨域
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }