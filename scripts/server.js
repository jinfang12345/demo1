const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);
const app = express();
app.use(webpackMiddleware(compiler));
app.listen(3000, function(){
    console.log('server is running');
})