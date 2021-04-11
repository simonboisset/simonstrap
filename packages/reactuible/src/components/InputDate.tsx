import DayjsUtils from '@date-io/dayjs';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

type InputDateProps = {
  name: string;
  label?: string;
} & GridItemProps;

export const InputDate = ({ name, label, ...rest }: InputDateProps) => {
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name);
  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <KeyboardDatePicker
          fullWidth
          label={label}
          format="DD/MM/YYYY"
          inputVariant="outlined"
          value={value}
          onChange={onChange}
          error={!!errors}
        />
      </MuiPickersUtilsProvider>
    </GridItem>
  );
};
