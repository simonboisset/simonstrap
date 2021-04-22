import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';

export type InputProps<T> = {
  value: T | undefined;
  error: string | null;
  onChange: (value: T | undefined) => void;
  label?: string;
};

type InputCheckBoxProps = InputProps<boolean> & GridItemProps;

export const InputCheckBox: React.FC<InputCheckBoxProps> = ({ label, error, value, onChange, ...rest }) => {
  const hadleChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormControlLabel control={<Checkbox onChange={hadleChange} checked={value} />} label={label} />
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
