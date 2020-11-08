import * as React from 'react';
import { Button, Container, Text } from 'simon-ui';
import { FormExemple } from '../components/FormExample';

export const FormPage = () => {
  return (
    <Container>
      <Text variant="h3">Formulaire</Text>
      <FormExemple />
      <Button variant="contained" color="secondary" xs={6}>
        Cancel
      </Button>
      <Button variant="contained" type="submit" color="primary" xs={6}>
        Submit
      </Button>
    </Container>
  );
};
