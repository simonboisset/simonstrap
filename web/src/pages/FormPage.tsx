import React from "react";
import { Button, Form, InputText, Text, useForm, yup } from "simon-ui";

const FormSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  periode: yup.string().matches(/(days|weeks|months|years)/),
});

export const FormPage = () => {
  const methods = useForm(FormSchema);
  return (
    <Form methods={methods} onSubmit={() => {}}>
      <Text variant="h3" spaceBelow>
        Formulaire
      </Text>
      <InputText name="name" label="Name" spaceBelow />
      <InputText name="age" label="Age" spaceBelow />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};
