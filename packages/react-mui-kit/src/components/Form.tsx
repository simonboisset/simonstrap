import Ajv, { ErrorObject, JSONSchemaType, ValidateFunction } from 'ajv';
import React, { useContext, useMemo, useState } from 'react';

const ajv = new Ajv();
ajv.addFormat('date', (date: string) => {
  return !isNaN(Date.parse(date));
});

function getDefaultValue<T>(schema: JSONSchemaType<T>) {
  let defaultValue: Partial<T> = {};
  for (const key in schema.properties) {
    if (schema.properties[key].default) {
      //@ts-ignore
      defaultValue[key] = schema.properties[key].default;
    }
  }
  return defaultValue;
}

function useFormProvider<T>(schema: JSONSchemaType<T>) {
  const defaultValue = useMemo(() => getDefaultValue(schema), []);
  const [formValue, setFormValue] = useState<Partial<T>>(defaultValue);
  const [formErrors, setFormErrors] = useState<ValidateFunction<T>['errors']>(null);
  const setInputValue = (name: keyof T, value: T[typeof name]) => {
    setFormValue({ ...formValue, [name]: value });
  };
  const onInputChange = (name: keyof T) => (value: T[typeof name]) => {
    const nextValue = { ...formValue, [name]: value };
    setFormValue(nextValue);
    valideForm(nextValue);
  };
  const getInputValue = (name: keyof T): Partial<T>[keyof T] | undefined => formValue[name];
  const getInputError = (name: keyof T) => (formErrors ? formErrors.filter(err => err.keyword === name)[0] : null);
  const resetForm = () => {
    setFormValue(defaultValue);
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

  return {
    formValue,
    setFormValue,
    setInputValue,
    resetForm,
    onInputChange,
    valideForm,
    formErrors,
    getInputValue,
    getInputError
  };
}

type ContextType<T = any, I = T[keyof T]> = {
  formValue: Partial<T>;
  setFormValue: React.Dispatch<React.SetStateAction<Partial<T>>>;
  setInputValue: (name: keyof T, value: T[typeof name] | undefined) => void;
  resetForm: () => void;
  onInputChange: (name: keyof T) => (value: I | undefined) => void;
  valideForm: (value: Partial<T>) => boolean;
  formErrors: ValidateFunction<T>['errors'];
  getInputValue: (name: keyof T) => I | undefined;
  getInputError: (name: keyof T) => ErrorObject<string, Record<string, any>, unknown> | null;
};

const FormContext = React.createContext({});

type FormProps<T> = { children: JSX.Element; onSubmit: (data: any) => void; schema: JSONSchemaType<T> };

export function Form<T>({ children, onSubmit, schema }: FormProps<T>) {
  const value = useFormProvider<T>(schema);
  return (
    <FormContext.Provider value={value}>
      <FormContainer onSubmit={onSubmit}>{children}</FormContainer>
    </FormContext.Provider>
  );
}

export function useForm<T, I = unknown>() {
  const value = useContext(FormContext);
  return value as ContextType<T, I>;
}

function FormContainer<T>({ children, onSubmit }: { children: JSX.Element; onSubmit: (data: any) => void }) {
  const { valideForm, formValue } = useForm<T>();
  const validateThenSubmit = () => {
    const isValid = valideForm(formValue);
    if (isValid) {
      onSubmit(formValue);
    }
  };
  return <form onSubmit={validateThenSubmit}>{children}</form>;
}
