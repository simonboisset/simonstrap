import { FormHelperText, Grid, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useFromStyle } from './InputText';

export type ItemSliderType<T> = { name?: string; value: T; icon?: string };

export const InputSlider: React.FC<{
  name: string;
  label?: string;
  spaceBelow?: boolean;
  spaceAfter?: boolean;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  min?: number;
  max?: number;
  step?: number;
}> = ({ name, label, xs, spaceBelow, spaceAfter, step, max = 100, min = 0 }) => {
  const { errors, control } = useFormContext();
  const classes = useFromStyle({ spaceBelow, spaceAfter });
  return (
    <Grid item xs={xs ? xs : 12} className={classes.space}>
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
    </Grid>
  );
};
