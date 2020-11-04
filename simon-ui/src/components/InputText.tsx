import { Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputText: React.FC<{
  name: string;
  label?: string;
  type?: 'password';
  spaceBelow?: boolean;
  inputProps?: any;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, type, inputProps, spaceBelow, xs }) => {
  const { errors, control } = useFormContext();
  const classes = useSpaces({ spaceBelow });
  return (
    <Grid item xs={xs ? xs : 12} className={classes.space}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        variant="outlined"
        label={label}
        fullWidth
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        InputProps={inputProps}
        defaultValue=""
      />
    </Grid>
  );
};
export const useSpaces = makeStyles<Theme, { spaceBelow?: boolean }, 'space'>(({ spacing }) => ({
  space: {
    paddingBottom: (props) => (props.spaceBelow ? spacing(2) : 0),
  },
}));
