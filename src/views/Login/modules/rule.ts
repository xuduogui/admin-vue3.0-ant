/*
 * @Author: xuziyong
 * @Date: 2021-05-30 00:37:24
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-30 22:27:05
 * @Description: TODO
 */

import { RuleObject } from "ant-design-vue/lib/form/interface";
import { UnwrapRef } from "vue";
import { FormState } from "./form";

export const checkAge = async (
  _rule: RuleObject,
  value: number
): Promise<string | void> => {
  if (!value) {
    return Promise.reject("Please input the age");
  }
  if (!Number.isInteger(value)) {
    return Promise.reject("Please input digits");
  } else {
    if (value < 18) {
      return Promise.reject("Age must be greater than 18");
    } else {
      return Promise.resolve();
    }
  }
};

export const validatePass = () => {
  return async (_rule: RuleObject, value: string): Promise<string | void> => {
    if (value === "") {
      return Promise.reject("Please input the password");
    } else {
      // if (formState.checkPass !== "") {
      //   formRef.value.validateField("checkPass");
      // }
      return Promise.resolve();
    }
  };
};

export const validatePass2 = (formState: UnwrapRef<FormState>) => {
  return async (_rule: RuleObject, value: string): Promise<string | void> => {
    if (value === "") {
      return Promise.reject("Please input the password again");
    } else if (value !== formState.pass) {
      return Promise.reject("Two inputs don't match!");
    } else {
      return Promise.resolve();
    }
  };
};
