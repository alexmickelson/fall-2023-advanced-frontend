const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://reactdemo.duckdns.org:3011',
      changeOrigin: true,
    })
  );
};