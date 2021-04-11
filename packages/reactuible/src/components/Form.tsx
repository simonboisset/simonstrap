import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import React, { useContext, useState } from 'react';

const ajv = new Ajv();

function useFormProvider<T>(schema: JSONSchemaType<T>, defaultValue?: Partial<T>) {
  const [formValue, setFormValue] = useState<Partial<T>>(defaultValue || {});
  const [formErrors, setFormErrors] = useState<ValidateFunction<T>['errors']>(null);
  const setInputValue = (name: keyof T, value: T[typeof name]) => {
    setFormValue({ ...formValue, [name]: value });
  };
  const onInputChange = (name: keyof T) => (value: T[typeof name]) => {
    const nextValue = { ...formValue, [name]: value };
    setFormValue(nextValue);
    valideForm(nextValue);
  };
  const resetForm = () => {
    setFormValue(defaultValue || {});
  };

  const validate = ajv.compile(schema);
  const valideForm = (value: Partial<T>) => {
    const isValid = validate(value);
    if (!isValid) {
      setFormErrors(validate.errors);
    } else {
      setFormErrors(null);
    }
    return isValid;
  };

  return { formValue, setFormValue, setInputValue, resetForm, onInputChange, valideForm, formErrors };
}

type ContextType<T> = {
  formValue: Partial<T>;
  setFormValue: React.Dispatch<React.SetStateAction<Partial<T>>>;
  setInputValue: (name: keyof T, value: T[keyof T]) => void;
  resetForm: () => void;
  onInputChange: (name: keyof T) => (value: T[keyof T]) => void;
  valideForm: (value: Partial<T>) => boolean;
  formErrors: ValidateFunction<T>['errors'];
};
const FormContext = React.createContext({});
type FormProps<T> = { children: React.ReactNode; onSubmit: (data: any) => void; schema: JSONSchemaType<T> };

export function Form<T>({ children, onSubmit, schema }: FormProps<T>) {
  const value = useFormProvider<T>(schema);
  return (
    <FormContext.Provider value={value}>
      <FormContainer onSubmit={onSubmit}>{children}</FormContainer>
    </FormContext.Provider>
  );
}
export function useForm<T>() {
  const value = useContext(FormContext);
  return value as ContextType<T>;
}
function FormContainer<T>({ children, onSubmit }: { children: React.ReactNode; onSubmit: (data: any) => void }) {
  const { valideForm, formValue } = useForm<T>();
  const validateThenSubmit = () => {
    const isValid = valideForm(formValue);
    if (isValid) {
      onSubmit(formValue);
    }
  };
  return <form onSubmit={validateThenSubmit}>{children}</form>;
}
