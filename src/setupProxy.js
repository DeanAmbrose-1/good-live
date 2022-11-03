
const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/api1",
        createProxyMiddleware({
            target:"http://pv.sohu.com",
            changeOrigin:true,
            pathRewrite:{
            "^/api1":""
            }
        })
    )
}