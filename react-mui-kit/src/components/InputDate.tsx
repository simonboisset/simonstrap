import DayjsUtils from '@date-io/dayjs';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { GridItem, GridItemProps } from './GridItem';

export type ItemDateType<T> = { name?: string; value: T; icon?: string };

type InputDateProps = InputProps<Date | undefined> & GridItemProps & { label?: string };

export const InputDate: React.FC<InputDateProps> = ({ value, onChange, error, label, ...rest }) => {
  const inputValue = value ? value.toISOString() : null;
  const handleChange = (e: MaterialUiPickersDate) => {
    onChange(e?.toDate());
  };
  return (
    <GridItem {...rest}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <KeyboardDatePicker
          fullWidth
          focused={!!inputValue}
          label={label}
          format="DD/MM/YYYY"
          inputVariant="outlined"
          value={inputValue}
          onChange={handleChange}
          error={!!error}
        />
      </MuiPickersUtilsProvider>
    </GridItem>
  );
};
