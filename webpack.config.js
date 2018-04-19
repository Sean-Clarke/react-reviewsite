var path = require('path'); // could be const

module.exports = {
  entry: './main.js', // change entry to app.js if that is what you call it
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/, // potentially should be /.jsx? /.jsx$ /\.jsx? /\.jsx$ /\.jsx?$
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'] // potentially should be es2015
        }
      }
    ]
  },
};
