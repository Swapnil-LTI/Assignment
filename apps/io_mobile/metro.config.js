// const { withNxMetro } = require('@nx/expo');
// const { withNativeWind } = require("nativewind/metro");
// const { getDefaultConfig } = require('@expo/metro-config');
// const { mergeConfig } = require('metro-config');

// const defaultConfig = getDefaultConfig(__dirname);
// const { assetExts, sourceExts } = defaultConfig.resolver;

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const customConfig = {
//   cacheVersion: 'io_mobile',
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//   },
//   resolver: {
//     assetExts: assetExts.filter((ext) => ext !== 'svg'),
//     sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
//   },
// };

//   const nxMetroConfig = withNxMetro(mergeConfig(defaultConfig, customConfig), {
//   // Change this to true to see debugging info.
//   // Useful if you have issues resolving modules
//   debug: false,
//   // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
//   extensions: [],
//   // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
//   watchFolders: [],
// });

// module.exports = withNativeWind(nxMetroConfig, { input: './global.css' });


const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');
const { withNativeWind } = require('nativewind/metro');

async function config(){
  const defaultConfig = getDefaultConfig(__dirname);
  const { assetExts, sourceExts } = defaultConfig.resolver;
  defaultConfig.resolver.disableHierarchicalLookup = true;
  /**
   * Metro configuration
   * https://facebook.github.io/metro/docs/configuration
   *
   * @type {import('metro-config').MetroConfig}
   */
  const customConfig = {
    cacheVersion: 'io_mobile',
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    },
  };
   
  const nxMetroConfig = await withNxMetro(mergeConfig(defaultConfig, customConfig),  {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
    extensions: [],
    // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
    watchFolders: [],
  });

  const finalConfig = withNativeWind(nxMetroConfig, { input: './global.css' });
  return finalConfig;
}

module.exports = config()