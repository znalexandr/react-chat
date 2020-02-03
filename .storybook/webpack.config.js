const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: 'babel-loader'
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    enforce: 'pre',
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ]
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    enforce: 'pre',
    loader: 'source-map-loader'
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

  if (isDev) {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
