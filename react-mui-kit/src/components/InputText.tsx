import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

type InputTextProps = {
  name: string;
  label?: string;
  type?: 'password' | 'number';
} & GridItemProps;

export const InputText = ({ name, label, type, ...rest }: InputTextProps) => {
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name) || '';
  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <TextField
        variant="outlined"
        label={label}
        fullWidth
        value={value}
        onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
        type={type === 'number' ? undefined : type}
        error={!!errors}
        helperText={errors}
      />
    </GridItem>
  );
};
