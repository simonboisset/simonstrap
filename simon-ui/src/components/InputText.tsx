import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GridItem, GridItemProps } from './GridItem';

type InputTextProps = {
  name: string;
  label?: string;
  type?: 'password';
} & GridItemProps;

export const InputText = ({ name, label, type, ...rest }: InputTextProps) => {
  const { errors, control } = useFormContext();
  return (
    <GridItem {...rest}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        variant="outlined"
        label={label}
        fullWidth
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        defaultValue=""
      />
    </GridItem>
  );
};
