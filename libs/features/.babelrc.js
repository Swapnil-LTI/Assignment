module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@nx/react/babel',
        {
          runtime: 'automatic',
          useBuiltIns: 'usage',
        },
        // ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        // "nativewind/babel",
      ],
    ],
    plugins: [
      // 'react-native-reanimated/plugin',
    ],
    env: {
    
    },
  };
};
