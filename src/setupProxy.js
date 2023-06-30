const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/",
        createProxyMiddleware({
            target: "https://develop.api.emoshield.link",
            changeOrigin: true,
        })
    );
}
