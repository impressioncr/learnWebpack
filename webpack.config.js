const path = require('path') // nodejs自带模块 path.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // __dirname 常量, 当前根目录在电脑里的绝对路径
    filename: 'bundle.js',
    publicPath: 'build/'
  },
	module: {
  	rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
	  ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config