import { ValidationError } from 'yup';
import { UseFormType } from './useForm';

const getInputValue = <T>(formValue: T, name: keyof T, formErrors: ValidationError[] | null) => {
  const value: T[typeof name] = formValue[name];
  const error =
    formErrors && formErrors.filter(err => err.path === name)[0]
      ? formErrors.filter(err => err.path === name)[0].message
      : null;
  return { value, error };
};

export const useInput = <T>(form: UseFormType<T>, name: keyof T) => {
  const { value, error } = getInputValue<T>(form.value, name, form.errors);
  const onChange = (v: T[typeof name]) => form.setFormValue({ ...form.value, [name]: v });
  return { value, error, onChange };
};
