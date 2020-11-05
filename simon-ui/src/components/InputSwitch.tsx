import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Switch } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type ItemSwitchType<T> = { name?: string; value: T; icon?: string };

export const InputSwitch: React.FC<{
  name: string;
  label?: string;
  items: ItemSwitchType<string>[];
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, items, xs }) => {
  const { errors, control } = useFormContext();

  return (
    <Grid item xs={xs ? xs : 12}>
      <Controller
        render={(props) => (
          <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
              {items.map((item) => (
                <FormControlLabel key={item.value} control={<Switch onChange={props.onChange} />} label={item.name} />
              ))}
            </FormGroup>
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};
