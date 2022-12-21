/* next.config.js */
module.exports = {
  // target: "serverless", // <- add here

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    loader: "akamai",
    path: "",
  },
};
