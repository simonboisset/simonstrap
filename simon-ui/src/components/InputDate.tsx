import DayjsUtils from '@date-io/dayjs';
import { Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useFromStyle } from './InputText';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

export const InputDate: React.FC<{
  name: string;
  label?: string;
  spaceBelow?: boolean;
  spaceAfter?: boolean;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, xs, spaceBelow, spaceAfter }) => {
  const { errors, control } = useFormContext();
  const classes = useFromStyle({ spaceBelow, spaceAfter });
  return (
    <Grid item xs={xs ? xs : 12} className={classes.space}>
      <Controller
        render={(props) => (
          <MuiPickersUtilsProvider utils={DayjsUtils}>
            <KeyboardDatePicker
              fullWidth
              label={label}
              format="DD/MM/YYYY"
              inputVariant="outlined"
              value={props.value}
              onChange={props.onChange}
              error={!!errors[name]}
            />
          </MuiPickersUtilsProvider>
        )}
        name={name}
        control={control}
        defaultValue={new Date()}
      />
    </Grid>
  );
};
