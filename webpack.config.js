const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // define o ambiente em que o webpack esta rodando
  mode: isDevelopment ? 'development' : 'production',
  // determina qual a configuracao de source map utilizado no ambiente, para poder determinar a clareza que o codigo deve ter no browser
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // define qual o ponto de entrada da aplicacao
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // define o que deve sair da aplicacao em si
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // eh colocado quais sao os tipos de extencoes que ele tera de lidar
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // essa configuracao determina o arquivo estatico da aplicacao e cria um server para o webpack
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    hot: true
  },
  // o plugins define quais elementos extras seram utilizados nesse processo
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ].filter(Boolean),
  // determina como lidar com cada tipo de extencao
  /*
    * o test determina o que deve ser validado (sempre usando expresoes regulares),
    * o exclude determina o que nao deve ser testado
    * use determina o que deve ser feito com os arquivos que passarem no teste da regra
  */
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader' , 'css-loader', 'sass-loader'],
      }
    ],
  },
};