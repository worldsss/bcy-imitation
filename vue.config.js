module.exports = {
  devServer: {
    proxy: {
      // 所有的请求起始部分全部用 '/api'代替，比如访问"https://192.168.1.4/movie"，那么简写成"/api/movie"即可
      '/api': {
        target: 'http://localhost:8090', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
