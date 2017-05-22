const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../dist')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: [PATHS.app],

    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [
            '', '.jsx', '.js', '.json', '.scss'
        ],
        modulesDirectories: [
            'node_modules', PATHS.app
        ],
        alias: {
            styles: 'styles'
        }
    },

    module: {
        noParse: /node_modules\\json-schema\\lib\\validate\.js/,
        loaders: [
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff2'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-otf'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/],
                query: {
                    presets: ["es2015", "stage-0", "react"],
                }
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }, {
                test: /\.png$/,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.jpg$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'mock',
        tls: 'empty',
        dns: 'mock'
    },
    postcss: (webpack) => {
        return [
            autoprefixer({browsers: ['last 2 versions']}),
            postcssImport({addDependencyTo: webpack})
        ];
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
    module.exports = merge(production, common);
}
