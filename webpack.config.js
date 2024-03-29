import webpack from "webpack";

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || "./";

export default {
  output: {
    publicPath: "./",
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};

module.exports = {
  output: {
    publicPath: "auto",
  },
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
