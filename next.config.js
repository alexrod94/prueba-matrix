module.exports = (nextConfig = {}, argv) => {
  const isEnvDevelopment =
    argv.mode === "development" || process.env.NODE_ENV === "development";
  return Object.assign({}, nextConfig, {
    webpack: (config, options) => {
      config.mode = isEnvDevelopment ? "development" : "production";
      config.optimization.minimize = !isEnvDevelopment;
      return config;
    },
  });
};
