import { FormControl, FormControlLabel, FormHelperText, Switch } from '@material-ui/core';
import React from 'react';
import { Direction } from '../styles/direction';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';
export type ItemSwitchType = { label?: string; name?: string; icon?: string };

export type renderControlerProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  name: string;
  ref: React.MutableRefObject<any>;
};
type InputSwitchProps<T> = {
  name: keyof T;
  label?: string;
  items?: ItemSwitchType[];
  direction?: Direction;
} & GridItemProps;
export function InputSwitch<T>({ name, label, items, direction, ...rest }: InputSwitchProps<T>) {
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
