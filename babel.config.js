module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@pages': './src/pages',
        },
      },
    ],
  ],
};
