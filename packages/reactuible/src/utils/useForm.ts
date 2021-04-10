import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useHookForm } from 'react-hook-form';
import { yup } from '..';
export const useForm = (schema: yup.ObjectSchema, defaultValues?: { [x: string]: any }) => {
  return useHookForm({ resolver: yupResolver(schema), defaultValues });
};
