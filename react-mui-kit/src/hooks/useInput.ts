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

export const useInput = <T, G extends keyof T>(form: UseFormType<T>, name: G) => {
  const { value, error } = getInputValue(name, form.value, form.errors);
  const onChange = (v: T[G]) => form.setFormValue({ ...form.value, [name]: v });
  return { value, error, onChange };
};
