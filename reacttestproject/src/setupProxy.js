const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/stockinformation",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7206',
        secure: false
    });

    app.use(appProxy);
};
