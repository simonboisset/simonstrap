import { FormHelperText, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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
  const { errors, control } = useFormContext();
  return (
    <GridItem {...rest}>
      <Controller
        render={(props) => (
          <>
            <Typography gutterBottom>{label}</Typography>
            <Slider
              getAriaValueText={(value) => `${value}`}
              onChange={(_, value) => props.onChange(value)}
              valueLabelDisplay="auto"
              step={step}
              marks={!!step}
              value={props.value}
              min={min}
              max={max}
            />
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </>
        )}
        name={name}
        control={control}
        defaultValue={min}
      />
    </GridItem>
  );
};
