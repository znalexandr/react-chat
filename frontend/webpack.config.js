const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV, BUNDLE_ANALYZER } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = function exports() {
  const plugins = [
    new HtmlPlugin({
      template: './src/static/index.html',
      favicon: './src/static/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
      hashDigestLength: 6,
    }),
  ];

  if (BUNDLE_ANALYZER === 'localhost') {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 7779,
      })
    );
  }

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
        },
        {
          test: /\.(woff2|jpg|png)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !isProd },
            },
            {
              loader: 'css-loader',
              options: { sourceMap: !isProd },
            },
          ],
        },
      ],
    },
    plugins,
    devServer: {
      port: 7777,
      historyApiFallback: true,
      compress: true,
      stats: {
        chunks: false,
        modules: false,
        assets: false,
      },
    },
    devtool: isProd ? 'none' : 'source-map',
    stats: false,
  };
};
