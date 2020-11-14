import DayjsUtils from '@date-io/dayjs';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

type InputDateProps = {
  name: string;
  label?: string;
} & GridItemProps;

export const InputDate = ({ name, label, ...rest }: InputDateProps) => {
  const { errors, control } = useFormContext();
  return (
    <GridItem {...rest}>
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
    </GridItem>
  );
};
