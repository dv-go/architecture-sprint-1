const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'LikePhoto',
      filename: 'remoteEntry.js',
      exposes: {
        './LikeButton': './src/components/LikeButton.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};
