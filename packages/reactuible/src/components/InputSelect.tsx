import { FormControl, FormHelperText, Icon, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemSelectType<T> = { name?: string; value: T; icon?: string };
type InputSelectProps = {
  name: string;
  label?: string;
  items: ItemSelectType<string>[];
} & GridItemProps;
export const InputSelect = ({ name, label, items, ...rest }: InputSelectProps) => {
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name);
  const onChange = onInputChange(name);
  const errors = getInputError(name);
  return (
    <GridItem {...rest}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange} label={label} error={!!errors}>
          <MenuItem value={undefined} disabled>
            {label}
          </MenuItem>
          {items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.icon && <Icon>{item.icon}</Icon>}
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
