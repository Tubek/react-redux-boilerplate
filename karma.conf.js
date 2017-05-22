const path = require('path');

module.exports = (config) => {
  config.set({
    basePath: '',
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['Chrome'],
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.spec.js': ['webpack'],
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    webpack: {
      resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src', 'test'],
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
              presets: ["es2015", "stage-0", "react"],
          }
        },
      ],
      },
    },
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
      },
    },
  });
};
