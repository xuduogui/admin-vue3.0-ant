/*
 * @Author: xuziyong
 * @Date: 2021-05-30 00:21:18
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-05-31 00:52:14
 * @Description: TODO
 */

import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { FormItemProps } from "ant-design-vue/lib/form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fromEvent, fromEventPattern } from "rxjs";
import { reactive, Ref, ref, UnwrapRef } from "vue";
import { FormState } from "./modules/form";
import { validatePass } from "./modules/rule";

interface Rules {
  pass: Array<unknown>;
}

interface Login {
  formState: FormState;
  formRef: Ref;
  rules: Rules;
  layout: FormItemProps;
  handleFinishFailed: (errors: ValidateErrorEntity<FormState>) => void;
  handleFinish: (values: FormState) => void;
  resetForm: () => void;
  submitRef: Ref;
}

export default (): Login => {
  const formRef = ref();
  const formState: UnwrapRef<FormState> = reactive({
    pass: "",
    username: ""
  });

  const rules: Rules = {
    pass: [{ validator: validatePass(), trigger: "change" }]
  };

  const layout: FormItemProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  };

  const handleFinish = (values: FormState) => {
    console.log(values, formState);
  };

  const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
    console.log(errors);
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };

  const submitRef = ref();

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
};
