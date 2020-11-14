import { FormControl, FormHelperText, Icon, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GridItem, GridItemProps } from './GridItem';

export type ItemSelectType<T> = { name?: string; value: T; icon?: string };
type InputSelectProps = {
  name: string;
  label?: string;
  items: ItemSelectType<string>[];
} & GridItemProps;
export const InputSelect = ({ name, label, items, ...rest }: InputSelectProps) => {
  const { errors, control } = useFormContext();
  return (
    <GridItem {...rest}>
      <Controller
        render={(props) => (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={props.value} onChange={props.onChange} label={label} error={!!errors[name]}>
              <MenuItem value={undefined} disabled>
                {label}
              </MenuItem>
              {items.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.icon && <Icon>{item.icon}</Icon>}
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
        defaultValue=""
      />
    </GridItem>
  );
};
