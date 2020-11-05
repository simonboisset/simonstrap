import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type ItemRadioType<T> = { name?: string; value: T; icon?: string };

export const InputRadio: React.FC<{
  name: string;
  label?: string;
  items: ItemRadioType<string>[];
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, items, xs }) => {
  const { errors, control } = useFormContext();

  return (
    <Grid item xs={xs ? xs : 12}>
      <Controller
        render={(props) => (
          <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup value={props.value} onChange={props.onChange}>
              {items.map((item) => (
                <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
              ))}
            </RadioGroup>
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};
