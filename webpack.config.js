
const path = require('path');

module.exports = {
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
        use: 'babel-loader',
      }
    ],
  }
};