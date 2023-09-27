const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({ mode }) => {
  const envConfig = require(`./webpack.${mode}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
