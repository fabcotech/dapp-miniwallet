module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    redux: "Redux",
    "react-redux": "ReactRedux"
  }
};
