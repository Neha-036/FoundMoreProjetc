const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const distUrl = 'dist'
const publicUrl = 'public'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

const CopyWebpackPluginConfig = () =>
  !isDevelopment
    ? new CopyWebpackPlugin([{ from: `${publicUrl}`, to: '' }])
    : () => null

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  inject: true
})
const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    PRISMA_API_GATEWAY_URL: JSON.stringify(process.env.PRISMA_API_GATEWAY_URL),
    WEBSOCKET_ENDPOINT: JSON.stringify(process.env.WEBSOCKET_ENDPOINT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})
const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin()

module.exports = {
  devtool: isDevelopment && 'eval-source-map',
  entry: ['whatwg-fetch', 'babel-polyfill', './src/index.js'],
  module: {
    rules: [
      !isProduction
        ? {
            enforce: 'pre',
            test: /\.jsx?$/,
            exclude: [/node_modules/, /common/],
            use: 'eslint-loader'
          }
        : {},
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: 1 }
          },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: []
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@/graphql': path.resolve(__dirname, './src/graphql'),
      '@': path.resolve(__dirname, './src/js'),
      Common: path.resolve(__dirname, '../common'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    WebpackDefinePluginConfig,
    CopyWebpackPluginConfig(),
    HtmlWebpackPluginConfig,
    HotModuleReplacementPluginConfig
  ],
  output: {
    path: path.resolve(distUrl),
    filename: !isDevelopment ? '[name].[hash:8].js' : 'bundle.js',
    chunkFilename: !isDevelopment
      ? '[name].[hash:8].chunk.js'
      : '[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8000,
    contentBase: path.resolve(__dirname, publicUrl),
    inline: true,
    publicPath: '/',
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
