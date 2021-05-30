/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:31:33
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-31 01:31:18
 * @Description: TODO
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { pluginInstallCopAnt } from "@/components/outs/antVue";

const app = createApp(App);

pluginInstallCopAnt(app);

app
  .use(store)
  .use(router)
  .mount("#app");
