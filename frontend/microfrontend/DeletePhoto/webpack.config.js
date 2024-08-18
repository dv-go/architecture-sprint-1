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
      name: 'DeletePhoto',
      filename: 'remoteEntry.js',
      exposes: {
        './DeletePhotoButton': './src/components/DeletePhotoButton.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};
