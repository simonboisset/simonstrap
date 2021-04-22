import React, { useContext } from 'react';
import { UseFormType, useInput } from '../hooks/useInput';

const FormContext = React.createContext({});

type FormProps<T> = { children: JSX.Element; form: UseFormType<T> };

export function Form<T>({ children, form }: FormProps<T>) {
  const validateThenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.submit();
  };
  return (
    <FormContext.Provider value={form}>
      <form onSubmit={validateThenSubmit}>{children}</form>;
    </FormContext.Provider>
  );
}

export function useFormContext<T>(name: keyof T) {
  const form = useContext(FormContext) as UseFormType<T>;
  const value = useInput(name, form);
  return value;
}
