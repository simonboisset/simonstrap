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
  JSONSchemaType,
  Text,
} from 'react-mui-kit';

type FormType = {
  name: string;
  age: number;
  gender: 'male' | 'female';
  poids: number;
};

const FormSchema: JSONSchemaType<FormType> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 0 },
    gender: { type: 'string', enum: ['male', 'female'] },
    poids: { type: 'number', minimum: 0 },
  },
  required: ['name', 'age', 'gender', 'poids'],
  additionalProperties: false,
};

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
  const handleSubmit = (data: FormData) => {};

  return (
    <Form schema={FormSchema} onSubmit={handleSubmit}>
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
