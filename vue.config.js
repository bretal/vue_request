const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,//会伪装服务器源头
        ws: true,//websocket 用于支持socket.io  
        pathRewrite: { "^/api": "" },//把路径中的/api替换成空字符串
      },
    },
  },
})
