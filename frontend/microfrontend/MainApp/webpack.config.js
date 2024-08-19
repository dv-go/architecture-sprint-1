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
      name: 'MainApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.js',
        './Footer': './src/components/Footer.js',
        './PopupWithForm': './src/components/PopupWithForm.js',
        './ImagePopup': './src/components/ImagePopup.js',
        './ProtectedRoute': './src/components/ProtectedRoute.js',
        './InfoTooltip': './src/components/InfoTooltip.js',
        './CurrentUserContext': './src/contexts/CurrentUserContext.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
