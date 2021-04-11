import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import { Direction, useDirectionStyle } from '../styles/direction';
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
  const classes = useDirectionStyle({ direction });
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name);
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  const itemChange = (index: number, itemValue: boolean, item: ItemCheckBoxType) => {
    const nextValue = [...value];
    nextValue[index] = { ...item, value: itemValue };
    onChange(nextValue);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        {items ? (
          <>
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
          </>
        ) : (
          <FormControlLabel
            control={<Checkbox onChange={(_, checked) => onChange(checked)} checked={value} />}
            label={label}
          />
        )}
        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
