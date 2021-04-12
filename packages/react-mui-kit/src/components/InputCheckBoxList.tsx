import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import { Direction, useDirectionStyle } from '../styles/direction';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemCheckBoxType = { label?: string; name?: string; icon?: string };

type InputCheckBoxListProps<T> = {
  name: keyof T;
  label?: string;
  items: ItemCheckBoxType[];
  direction?: Direction;
} & GridItemProps;

export function InputCheckBoxList<T>({ name, label, items, direction, ...rest }: InputCheckBoxListProps<T>) {
  const classes = useDirectionStyle({ direction });
  const { getInputValue, onInputChange, getInputError } = useForm<T, boolean[]>();
  const values = getInputValue(name) || items.map(_ => false);
  const value = items.map((item, i) => ({ ...item, value: values[i] }));
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  const itemChange = (index: number, itemValue: boolean, _: ItemCheckBoxType) => {
    const nextValue = [...values];
    nextValue[index] = itemValue;
    onChange(nextValue);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <div className={classes.direction}>
          {value.map((item: ItemCheckBoxType & { value: boolean }, i: number) => (
            <FormControlLabel
              key={i}
              control={<Checkbox onChange={(_, checked) => itemChange(i, checked, item)} checked={item.value} />}
              label={item.label}
            />
          ))}
        </div>

        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
