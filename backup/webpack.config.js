const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({

  // ENTRY
  entry: [
    './src/js/index.js',
    './src/scss/app.scss',
  ],

  // OUTPUT
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/scrpit.js',
  },

  // OPTIIZATION

  optimization: {
   minimizer: [
     new TerserPlugin(),
     new OptimizeCSSAssetsPlugin(),
     new CopyPlugin({
       patterns: [
         {
         from: 'src/*.html',
         to: '[name].[ext]',
       },
       {
         from: 'src/images/*',
         to: 'images/[name].[ext]',
       }
     ],
     }),
   ],
 },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  // PLGUGINS
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['page1'],
      minify: false,
      inject: false,
    }),
    new HtmlWebpackPlugin({ 
      filename: 'about.html',
      template: 'src/about.html',
      chunks: ['page2'],
      minify: false,
      inject: false,
    }),
    new HtmlWebpackPlugin({ 
      filename: '404.html',
      template: 'src/404.html',
      chunks: ['page3'],
      minify: false,
      inject: false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css',
    })
  ],

  // MODE
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,

  // SERVER
  devServer: {
   contentBase: [
     path.join(__dirname, '/src'),
   ],
   watchContentBase: true,
   compress: true,
   port: 9000,
   open: true,
 },

});