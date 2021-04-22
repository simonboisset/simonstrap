import { ValidationError } from 'yup';
import { UseFormType } from './useForm';

const getInputValue = <T>(name: keyof T, formValue: T, formErrors: ValidationError[] | null) => {
  const value = formValue[name];
  const error =
    formErrors && formErrors.filter(err => err.path === name)[0]
      ? formErrors.filter(err => err.path === name)[0].message
      : null;
  return { value, error };
};

export const useInput = <T>(form: UseFormType<T>, name: keyof T) => {
  const { value, error } = getInputValue(name, form.value, form.errors);
  const onChange = (v: T[typeof name]) => form.setFormValue({ ...form.value, [name]: v });
  return { value, error, onChange };
};

export type InputValue<T> = {
  value: T[keyof T];
  error: string | null;
  onChange: (v: T[keyof T]) => void;
};
