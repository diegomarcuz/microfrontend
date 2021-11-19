const {merge} = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require('./webpack.common')

const devConfig = {
    mode:"development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingIndex': './src/bootstrap'
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig) // devConfig overrides similar config
