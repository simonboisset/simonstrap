import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

export const InputDate: React.FC<{
  name: string;
  label?: string;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, xs }) => {
  const { errors, control } = useFormContext();

  return (
    <Grid item xs={xs ? xs : 12}>
      <Controller
        render={(props) => (
          <DatePicker
            label={label}
            inputVariant="outlined"
            value={props.value}
            onChange={props.onChange}
            error={!!errors[name]}
          />
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};
