const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {

    app.use('/api', 
    createProxyMiddleware({ 
              target: 'http://47.95.207.1:3000/fcj/',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":""
              } 
            }
         ));


}