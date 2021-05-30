/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:44:43
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-27 23:30:09
 * @Description: TODO
 */
import { RouteRecordRaw } from "vue-router";

export const login: Array<RouteRecordRaw> = [
  {
    path: "login",
    component: () => import(/* webpackChunkName: "group-sys" */ "@/views/Login/Login.vue"),
  },
];
