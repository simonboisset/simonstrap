import { FormHelperText, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemSliderType<T> = { name?: string; value: T; icon?: string };
type InputSliderProps = {
  name: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
} & GridItemProps;
export const InputSlider = ({ name, label, step, max = 100, min = 0, ...rest }: InputSliderProps) => {
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name);
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
      <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
    </GridItem>
  );
};
