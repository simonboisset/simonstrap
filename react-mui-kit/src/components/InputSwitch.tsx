import { FormControl, FormControlLabel, FormHelperText, Switch } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

type InputSwitchProps<T> = {
  name: keyof T;
  label?: string;
} & GridItemProps;
export function InputSwitch<T>({ name, label, ...rest }: InputSwitchProps<T>) {
  const { getInputValue, onInputChange, getInputError } = useForm<T, boolean>();
  const value = getInputValue(name) || false;
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormControlLabel
          control={<Switch onChange={(_, checked) => onChange(checked)} checked={value} />}
          label={label}
        />

        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
