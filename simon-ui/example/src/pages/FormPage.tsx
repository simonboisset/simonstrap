import * as React from 'react';
import {
  Button,
  Container,
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
  { label: 'Chat', name: 'cat' },
  { label: 'Chien', name: 'dog' },
  { label: 'Souris', name: 'mousse' },
  { label: 'Poisson', name: 'fish' },
  { label: 'Oiseau', name: 'bird' },
];

export const FormPage = () => {
  const methods = useForm(FormSchema);
  return (
    <Form methods={methods} onSubmit={() => {}}>
      <Container>
        <Text variant="h3">Formulaire</Text>
        <InputText name="name" label="Name" xs={8} />
        <InputText name="age" label="Age" xs={4} />
        <InputSelect name="gender" label="Gender" items={genders} xs={4} />
        <InputDate name="birthDate" label="Date de naissance" xs={8} />
        <InputRadio name="gender" label="Gender" items={genders} xs={4} />
        <InputSlider name="poids" label="Poids" xs={8} />
        <InputSwitch name="pets" label="Annimaux" items={pets} />
        <InputCheckBox name="pets" label="Annimaux" items={pets} />
        <InputCheckBox name="conditions" label="J'accepte les condition générales" />
        <InputSwitch name="conditions" label="J'accepte les condition générales" />
        <Button variant="contained" color="secondary" xs={6}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" color="primary" xs={6}>
          Submit
        </Button>
      </Container>
    </Form>
  );
};
