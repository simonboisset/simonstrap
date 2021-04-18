import { FormHelperText, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemSliderType<T> = { name?: string; value: T; icon?: string };
type InputSliderProps<T> = {
  name: keyof T;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
} & GridItemProps;
export function InputSlider<T>({ name, label, step, max = 100, min = 0, ...rest }: InputSliderProps<T>) {
  const { getInputValue, onInputChange, getInputError } = useForm<T, number | number[]>();
  const value = getInputValue(name) || 0;
  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        getAriaValueText={value => `${value}`}
        onChange={(_, value) => onChange(value)}
        valueLabelDisplay="auto"
        step={step}
        marks={!!step}
        value={value}
        min={min}
        max={max}
      />
      <FormHelperText error={!!errors}>{errors}</FormHelperText>
    </GridItem>
  );
}
