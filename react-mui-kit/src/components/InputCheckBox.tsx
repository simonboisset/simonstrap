import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

type InputCheckBoxProps<T> = {
  name: keyof T;
  label?: string;
} & GridItemProps;

export function InputCheckBox<T>({ name, label, ...rest }: InputCheckBoxProps<T>) {
  const { getInputValue, onInputChange, getInputError } = useForm<T, boolean>();
  const value = getInputValue(name) || false;
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormControlLabel
          control={<Checkbox onChange={(_, checked) => onChange(checked)} checked={value} />}
          label={label}
        />
        <FormHelperText error={!!errors}>{errors}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
