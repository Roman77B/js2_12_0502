let minCss = require ('mini-css-extract-plugin')
let HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'production',
                        },
                    },
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new minCss ({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, 
        }),
        new HtmlWebpackPlugin({
            template: '../src/public/index.html'
          })
    ]
}