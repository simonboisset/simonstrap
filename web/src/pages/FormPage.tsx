import React from 'react';
import {
  Button,
  Form,
  InputCheckBox,
  InputDate,
  InputRadio,
  InputSelect,
  InputSlider,
  InputSwitch,
  InputText,
  Text,
  useForm,
  yup,
} from 'simon-ui';

const FormSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  gender: yup.string().matches(/(male|female)/),
  poids: yup.number().positive().integer().required(),
});

const genders = [
  { name: 'male', value: 'male' },
  { name: 'female', value: 'female' },
];

const pets = [
  { name: 'Chat', value: 'cat' },
  { name: 'Chien', value: 'dog' },
  { name: 'Souris', value: 'mousse' },
  { name: 'Poisson', value: 'fish' },
  { name: 'Oiseau', value: 'bird' },
];

export const FormPage = () => {
  const methods = useForm(FormSchema);
  return (
    <Form methods={methods} onSubmit={() => {}}>
      <Text variant="h3" spaceBelow>
        Formulaire
      </Text>
      <InputText name="name" label="Name" spaceBelow />
      <InputText name="age" label="Age" spaceBelow />
      <InputSelect name="gender" label="Gender" items={genders} />
      <InputRadio name="gender" label="Gender" items={genders} />
      <InputSlider name="poids" label="Poids" />
      <InputSwitch name="pets" label="Annimaux" items={pets} />
      <InputCheckBox name="pets" label="Annimaux" items={pets} />
      <InputDate name="birthDate" label="Date de naissance" />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};
