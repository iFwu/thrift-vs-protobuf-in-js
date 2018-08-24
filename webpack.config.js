const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    pbjs: "./src/pbjs/rpc",
    thrift: "./src/thrift"
  },
  // devtool: 'module-source-map',
  output: {
    path: __dirname + "/dist",
    filename: "[name]/bundle.js",
  },
  // resolve: {
  //   alias: {
  //     thrift: './src/thrift/index.js' // for browser thrift runtime lib
  //   }
  // },
  module: {
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new UglifyJSPlugin({
      parallel: true,
      cache: true,
      sourceMap: false
    }),
    // new BundleAnalyzerPlugin()
    new webpack.ProvidePlugin({
      $protobuf: ['protobufjs/minimal'], // for pbjs es6 release file,
      Thrift: [__dirname + '/src/thrift/lib/thrift.js']
    })
  ]
}
