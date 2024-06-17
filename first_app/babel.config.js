module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '^@expo/(.*)': './node_modules/@expo/\\1',
          },
        },
      ],
    ],
  };
};