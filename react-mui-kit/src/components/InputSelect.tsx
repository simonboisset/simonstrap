import { FormControl, FormHelperText, Icon, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
import { InputProps } from './InputCheckBox';

export type ItemSelectType = { name?: string; value: string; icon?: string };
type InputSelectProps = InputProps<string> & {
  items: ItemSelectType[];
} & GridItemProps;
export const InputSelect: React.FC<InputSelectProps> = ({ value, onChange, error, label, items, ...rest }) => {
  const handleChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: any;
    }>
  ) => {
    onChange(e.target.value);
  };
  return (
    <GridItem {...rest}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value || ''} onChange={handleChange} label={label} error={!!error}>
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
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
