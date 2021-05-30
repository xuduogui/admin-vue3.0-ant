/*
 * @Author: xuziyong
 * @Date: 2021-05-27 23:04:38
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-30 02:43:17
 * @Description: TODO
 */
module.exports = {
  // module: {
  //     rules: [
  //         {
  //             test: /\.tsx?$/,
  //             loader: 'ts-loader',
  //             options: {
  //                 appendTsSuffixTo: [/\.vue$/],
  //             },
  //             exclude: /node_modules/,
  //         },
  //         {
  //             test: /\.vue$/,
  //             loader: 'vue-loader',
  //         }]
  // },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
