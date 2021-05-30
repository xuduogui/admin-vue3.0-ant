/*
 * @Author: xuziyong
 * @Date: 2021-05-27 22:31:33
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-31 01:36:56
 * @Description: TODO
 */
import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login/Login.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Login, {
      props: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
