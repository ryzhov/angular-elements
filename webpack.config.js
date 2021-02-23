const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new NgCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: './src/index.ts'
    }),
  ],
  mode: 'development',
};
