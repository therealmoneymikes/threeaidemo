const { getDefaultConfig } = require("expo/metro-config");

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { resolver } = config;

  config.resolver = {
    ...resolver,
    assetExts: [...(resolver.assetExts || []), "glb", "gltf", "png", "jpg"],
    sourceExts: [
      ...resolver.sourceExts,
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

  return config;
})();
