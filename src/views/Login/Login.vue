<!--
 * @Author: xuziyong
 * @Date: 2021-05-27 22:39:54
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-30 23:02:08
 * @Description: TODO
-->
<template>
  <a-form
    class="login"
    name="custom-validation"
    ref="formRef"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item required has-feedback label="UserName" name="username">
      <a-input
        v-model:value="formState.username"
        type="text"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item required has-feedback label="Password" name="pass">
      <a-input
        v-model:value="formState.pass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" ref="submitRef">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm" ref="resetRef"
        >Reset</a-button
      >
    </a-form-item>
  </a-form>
</template>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import login from "./login";

export default defineComponent({
  setup() {
    const {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      submitRef
    } = login();

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      submitRef
    };
  }
});
</script>
