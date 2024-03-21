const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1', {
      target: 'http://3.37.117.95:8080/',
      changeOrigin: true,
    })
  );
};
