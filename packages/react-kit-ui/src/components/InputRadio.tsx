import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Direction, directionStyle } from '../styles/direction';
import { GridItem, GridItemProps } from './GridItem';

export type ItemRadioType<T> = { name?: string; value: T; icon?: string };

type InputDateProps = {
  name: string;
  label?: string;
  items: ItemRadioType<string>[];
  direction?: Direction;
} & GridItemProps;

export const InputRadio = ({ name, label, items, direction, ...rest }: InputDateProps) => {
  const { errors, control } = useFormContext();
  return (
    <GridItem {...rest}>
      <Controller
        render={(props) => (
          <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup value={props.value} onChange={props.onChange}>
              <div className={directionStyle(direction)}>
                {items.map((item) => (
                  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
                ))}
              </div>
            </RadioGroup>
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
        defaultValue=""
      />
    </GridItem>
  );
};
