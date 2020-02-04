const path = require('path');

const { NODE_ENV } = process.env;

module.exports = {
  stories: ['../src/ui/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, '../src'),
      loaders: ['babel-loader']
    });

    config.module.rules.push({
      test: /\.(woff2|jpg|png)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'file-loader'
    });

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    if (NODE_ENV === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
