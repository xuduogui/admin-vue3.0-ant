/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:31:33
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-31 01:40:11
 * @Description: TODO
 */
module.exports = {
  plugins: ["cypress"],
  env: {
    mocha: true,
    "cypress/globals": true
  },
  rules: {
    strict: "off"
  }
};
