const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/**
 * @type {import('metro-config').MetroConfig}
 */
module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Update resolver settings
  config.resolver = {
    ...config.resolver,
    assetExts: [
      ...(config.resolver.assetExts || []), // Ensure existing extensions are included
      "glb",
      "gltf",
      "png",
      "jpg",
    ],
    sourceExts: [
      ...(config.resolver.sourceExts || []),
      "glb",
      "js",
      "jsx",
      "json",
      "ts",
      "tsx",
      "cjs",
      "mjs",
    ],
  };

  // Apply NativeWind configuration
  return withNativeWind(config, { input: "./global.css" });
})();
