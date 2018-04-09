// @ Calvin Lee

const express = require('express');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

const port = process.env.PORT || 3000;

const server_base = require('./server_base');

if (env !== 'production') {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~ NOT IN PRODUCTION ~~~~~~~~~~~~~~~~~~~~~~~~');
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const config = require('./webpack.dev.config.js');
    const compiler = webpack(config);
    server_base.use(hotMiddleware(compiler));

    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            publicPath: config.output.publicPath,
            hot: true,
            inline: true,
            colors: true,
            stats: { colors: true },
            historyApiFallback: true,
        }});

    server_base.use(middleware);
    server_base.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });

    // Reload server-side code without affecting Webpack
    // const chokidar = require('chokidar');
    // const watcher = chokidar.watch('./server');
    // watcher.on('ready', function() {
    //     watcher.on('all', function() {
    //         console.log("Reload /api server...");
    //         Object.keys(require.cache).forEach(function(id) {
    //             if (/\/server\//.test(id)) delete require.cache[id];
    //         });
    //     });
    // });
} else {
    console.log('++++++++++++++++++++++ PRODUCTION +++++++++++++++++++++++');
    server_base.use('/static', express.static(__dirname + '/dist'));
    server_base.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}
server_base.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
