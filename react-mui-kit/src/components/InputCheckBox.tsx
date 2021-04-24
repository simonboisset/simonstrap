import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { GridItem, GridItemProps } from './GridItem';

type InputCheckBoxProps = InputProps<boolean> & GridItemProps;

export const InputCheckBox: React.FC<InputCheckBoxProps> = ({ label, error, value, onChange, ...rest }) => {
  const hadleChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormControlLabel control={<Checkbox onChange={hadleChange} checked={value || false} />} label={label} />
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
