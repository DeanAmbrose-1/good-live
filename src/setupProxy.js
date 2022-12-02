
const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/api1",
        createProxyMiddleware({
            target:"https://api.map.baidu.com",
            changeOrigin:true,
            pathRewrite:{
            "^/api1":""
            }
        })
    )
}