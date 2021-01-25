const path = require('path');
const md5 = require('md5');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylexPlugin = require("@ladifire-opensource/stylex-webpack-plugin");

const fileHashMemo = {};

const getFileHash = (filepath) => {
    if (fileHashMemo[filepath]) {
        return fileHashMemo[filepath];
    }
    let contentHash = md5(fs.readFileSync(filepath, 'utf8'));
    fileHashMemo[filepath] = contentHash.substr(contentHash.length - 5);
    return fileHashMemo[filepath];
};

const generateScopedName = (localName, resourcePath) => {
    let componentName = resourcePath.split('/').slice(-2, -1);
    let contentHash = getFileHash(resourcePath);

    //let hash = md5(resourcePath);
    return `${componentName}_${localName}_${contentHash}`;
};

module.exports = ({config}, env) => {
    if (env === 'PRODUCTION') {
        // see https://github.com/storybooks/storybook/issues/1570
        config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
    }

    config.resolve.extensions.push('.ts', '.tsx');

    return Object.assign(config, {
        parallelism: 1,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [__dirname, path.resolve(__dirname + '/../src'), path.resolve(__dirname + '/../packages'), /collection-view/],
                    loader: require.resolve('babel-loader')
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: require.resolve('babel-loader'),
                        },
                        { loader: stylexPlugin.loader },
                    ]
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader'],
                    include: path.resolve(__dirname, '../'),
                    exclude: /packages\/.*\.css$/
                },
                {
                    test: /\.(ttf|woff|woff2|svg|gif|cur|eot|png|jpg)(\?[a-f0-9]{32})?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[contenthash:11].[ext]',
                                useRelativePath: true,
                                esModule: false,
                            }
                        },
                    ],
                }
            ]
        },
        plugins: [
            new stylexPlugin(),
            new MiniCssExtractPlugin(),
            ...config.plugins,
        ],
    });
};
