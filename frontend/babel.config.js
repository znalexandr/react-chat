const { NODE_ENV } = process.env;

module.exports = function exports(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Edge versions'
            ]
          }
        }
      ],
      '@babel/react',
      ['@babel/typescript', { allExtensions: true, isTSX: true }]
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/transform-runtime',
      ['emotion', { sourceMap: NODE_ENV === 'development' }]
    ],
    env: {
      development: {
        plugins: ['@babel/transform-runtime', 'react-hot-loader/babel']
      }
    }
  };
};
