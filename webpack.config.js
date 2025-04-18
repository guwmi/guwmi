// module.exports = {
//   rules: [
//     {
//       test: /\.tsx?$/,
//       use: 'ts-loader',
//       exclude: /node_modules/,
//     },
//   ],
//   mode: 'production',
//   entry: './src/index.ts',
//   output: {
//     filename: 'bundle.js',
//   },
// };

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          "sass-loader",
          "style-loader", 
          "css-loader"
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};