import { FormHelperText, Grid, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type ItemSliderType<T> = { name?: string; value: T; icon?: string };

export const InputSlider: React.FC<{
  name: string;
  label?: string;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, xs }) => {
  const { errors, control } = useFormContext();

  return (
    <Grid item xs={xs ? xs : 12}>
      <Controller
        render={(props) => (
          <>
            <Typography gutterBottom>{label}</Typography>
            <Slider
              getAriaValueText={props.value}
              onChange={props.onChange}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </>
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};
