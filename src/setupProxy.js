const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/places/search/json", {
      target: "https://atlas.mapmyindia.com/api",
      changeOrigin: true,
    })
  );
};
