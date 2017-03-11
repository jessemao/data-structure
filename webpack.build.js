var webpack = require('webpack');

module.exports = {
  entry: {
    'data-structure': './src/index.js'
  },

  output: {
    filename: './lib/[name].js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
        {
          loader: 'css-loader'
        },
        {
          loader: 'autoprefixer-loader'
        }
      ]
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
