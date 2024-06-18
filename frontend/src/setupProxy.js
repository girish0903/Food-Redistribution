// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Change '/api' to match your backend API path
    createProxyMiddleware({
      target: 'http://localhost:8080', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
