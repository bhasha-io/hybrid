const path = require('path');

module.exports = {
    entry: "./index.web.js",
    output: {
        filename: "web/js/bundle.js",
        sourceMapFilename: "web/js/bundle.map"
    },
    resolve: {
       extensions: [ '.web.js', '.js' ],
       symlinks: false
     },
    module: {
        rules: [
            {
              test: /\.js$/,
              include:[
                path.resolve(__dirname, 'index.web.js'),
                path.resolve(__dirname, 'src'),
              ],
              loader: ['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
    },
};


// Add eslint-loader to have es lint displayed in console.
// {
//   test: /\.js$/,
//   exclude: /node_modules/,
//   loader: ['babel-loader','eslint-loader']
// }
