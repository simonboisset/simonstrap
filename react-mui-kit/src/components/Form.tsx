import React, { useContext } from 'react';
import { UseFormType } from '../hooks/useForm';
import { useInput } from '../hooks/useInput';

const FormContext = React.createContext({});

type FormProps<T> = { children: JSX.Element; form: UseFormType<T>; nested?: boolean };

export function Form<T>({ children, form, nested }: FormProps<T>) {
  const validateThenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.submit();
  };
  return (
    <FormContext.Provider value={form}>
      {nested ? children : <form onSubmit={validateThenSubmit}>{children}</form>}
    </FormContext.Provider>
  );
}

export function useFormContext<T>(name: keyof T) {
  const form = useContext(FormContext) as UseFormType<T>;
  const value = useInput(form, name);
  return value;
}
