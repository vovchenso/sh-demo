const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gulp-util');
const webpack = require('webpack');
const open = require('open');

const runWebpackDevServer = ({ host, port, sourceFile }, customConfig) => {
  const config = Object.assign(customConfig, {
    entry: {
      index: [
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        sourceFile
      ]
    }
  });

  let server;
  try {
    server = new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true,
      stats: { colors: true },
      noInfo: true
    });
  } catch (error) {
    gutil.log('webpack dev server config error:', error);
  }

  server.listeningApp.on('error', (error) => {
    gutil.log('webpack-dev-server fails listening to: ', `http://${host}:${port}`);
    throw new gutil.PluginError('webpack-dev-server', error);
  });

  server.listen(port, host, () => {
    gutil.log('webpack-dev-server is running on: ', `http://${host}:${port}`);
    open(`http://${host}:${port}`);
  });
};

module.exports = runWebpackDevServer;
