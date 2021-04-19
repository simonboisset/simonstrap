import React, { useContext, useMemo, useState } from 'react';
import { SchemaOf, ValidationError } from 'yup';

function useFormProvider<T>(schema: SchemaOf<T>) {
  const defaultValue = useMemo(() => schema.getDefault() as T, []);
  const [formValue, setFormValue] = useState<T>(defaultValue);
  const [formErrors, setFormErrors] = useState<ValidationError[] | null>(null);
  const setInputValue = (name: keyof T, value: T[typeof name]) => {
    setFormValue({ ...formValue, [name]: value });
  };
  const onInputChange = (name: keyof T) => (value: T[typeof name]) => {
    const nextValue = { ...formValue, [name]: value };
    setFormValue(nextValue);
    valideForm(nextValue);
  };
  const getInputValue = (name: keyof T): Partial<T>[keyof T] | undefined => formValue[name];
  const getInputError = (name: keyof T) =>
    formErrors && formErrors.filter(err => err.path === name)[0]
      ? formErrors.filter(err => err.path === name)[0].message
      : null;
  const resetForm = () => {
    setFormValue(defaultValue);
  };

  const valideForm = (value: T) => {
    let nextError: ValidationError[] | null = null;
    try {
      schema.validateSync(value, { abortEarly: false, stripUnknown: true });
    } catch (errors) {
      nextError = errors.inner as ValidationError[];
    }

    setFormErrors(nextError);
    const isValid = !!nextError;

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
  formErrors: { [k: string]: ValidationError } | null;
  getInputValue: (name: keyof T) => I | undefined;
  getInputError: (name: keyof T) => string | null;
};

const FormContext = React.createContext({});

type FormProps<T> = { children: JSX.Element; onSubmit: (data: T) => void; schema: SchemaOf<T> };

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
  const validateThenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = valideForm(formValue);
    if (isValid) {
      onSubmit(formValue);
    }
  };
  return <form onSubmit={validateThenSubmit}>{children}</form>;
}
