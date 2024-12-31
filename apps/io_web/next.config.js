//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withExpo} = require("@expo/next-adapter");
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: false,
  transpilePackages:[
    "react-native",
    "react-native-web",
    "solito",
    // "react-native-screens",
    // "react-native-safe-area-context",
    // "expo-linking",
    // "@react-navigation/native",
    // "@react-navigation/native-stack"
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$":"react-native-web"
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ".web.js",
      ...config.resolve.extensions,
    ],
    config.module.rules.push({
      test:/\.(ts|tsx)$/,
      use:[{
        loader:'ts-loader',
        options:{
          transpileOnly : true
        }
      }]
    });
    config.module.rules.push({
      test:/\.(js|jsx)$/,
      loader:'babel-loader',
      options:{
        presets:['@babel/preset-env',['@babel/preset-react',{runtime:'automatic'}]],
      },
      exclude: /node_modules/,
    })
    return config;
  }
};

module.exports = withExpo(nextConfig);
