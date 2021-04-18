import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { Direction, useDirectionStyle } from '../styles/direction';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemRadioType<T> = { name?: string; value: T; icon?: string };

type InputDateProps = {
  name: string;
  label?: string;
  items: ItemRadioType<string>[];
  direction?: Direction;
} & GridItemProps;

export const InputRadio = ({ name, label, items, direction, ...rest }: InputDateProps) => {
  const classes = useDirectionStyle({ direction });
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name) || '';
  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup value={value} onChange={e => onChange(e.target.value)}>
          <div className={classes.direction}>
            {items.map(item => (
              <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
            ))}
          </div>
        </RadioGroup>
        <FormHelperText error={!!errors}>{errors}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
