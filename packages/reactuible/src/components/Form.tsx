import React from 'react';
import { FormProvider, UseFormMethods } from 'react-hook-form';

export const Form: React.FC<{
  methods: UseFormMethods<any>;
  onSubmit: (data: any) => void;
}> = ({ children, methods, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
