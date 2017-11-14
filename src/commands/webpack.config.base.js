import webpack from 'webpack';

const HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

export default {
  context: __dirname,
  entry: [
    // 添加一个和HotMiddleWare通信的客户端
    HotMiddleWareConfig,
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // 在 webpack 插件中引入 webpack.HotModuleReplacementPlugin
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
