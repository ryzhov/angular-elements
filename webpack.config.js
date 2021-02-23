const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NgCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    module: './src/index.ts',
  },
  
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new NgCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: './src/index.ts'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['app', 'module', 'vendor'],
      minify: false,
    }),
  ],
  
  optimization: {
    moduleIds: 'hashed',
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    } 
  },
  
  mode: 'production',
};
