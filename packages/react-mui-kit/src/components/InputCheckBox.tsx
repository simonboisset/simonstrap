import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import React from 'react';
import { Direction } from '../styles/direction';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemCheckBoxType = { label?: string; name?: string; icon?: string };

type InputCheckBoxProps<T> = {
  name: keyof T;
  label?: string;
  items?: ItemCheckBoxType[];
  direction?: Direction;
} & GridItemProps;

export function InputCheckBox<T>({ name, label, items, direction, ...rest }: InputCheckBoxProps<T>) {
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
        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
