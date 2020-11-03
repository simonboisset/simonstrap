import React from "react";
import { Form, IconButton, InputText, useForm, yup } from "simon-ui";

const FormSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  periode: yup.string().matches(/(days|weeks|months|years)/),
});

export const FormPage = () => {
  const methods = useForm(FormSchema, { name: "simon", age: "10" });
  return (
    <Form methods={methods} onSubmit={() => {}}>
      <InputText name="name" label="Name" />
      <InputText name="age" label="Age" />
      <IconButton type="submit">send</IconButton>
    </Form>
  );
};
