import DayjsUtils from '@date-io/dayjs';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

type InputDateProps<T> = {
  name: keyof T;
  label?: string;
} & GridItemProps;

export function InputDate<T>({ name, label, ...rest }: InputDateProps<T>) {
  const { getInputValue, onInputChange, getInputError } = useForm<T, Date>();
  const inputValue = getInputValue(name);
  const value = inputValue ? inputValue.toISOString() : null;

  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <KeyboardDatePicker
          fullWidth
          focused={!!inputValue}
          label={label}
          format="DD/MM/YYYY"
          inputVariant="outlined"
          value={value}
          onChange={e => onChange(e?.toDate())}
          error={!!errors}
        />
      </MuiPickersUtilsProvider>
    </GridItem>
  );
}
