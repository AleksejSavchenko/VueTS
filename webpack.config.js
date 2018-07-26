const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let config = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist",
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue']
    },
    // devServer: {
    //     noInfo: true
    // },
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                        loader: 'ts-vue-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                use: 'vue-template-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config