/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:31:33
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-28 01:07:28
 * @Description: TODO
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  // {
  //   path: "/sys",
  //   redirect: "/sys/login",
  //   children: <Array<RouteRecordRaw>>[...sys],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
