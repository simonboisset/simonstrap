import { FormControl, FormControlLabel, FormHelperText, Switch } from '@material-ui/core';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { GridItem, GridItemProps } from './GridItem';

type InputSwitchProps = InputProps<boolean> & GridItemProps;
export const InputSwitch: React.FC<InputSwitchProps> = ({ value, onChange, error, label, ...rest }) => {
  const hadleChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange(checked);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormControlLabel control={<Switch onChange={hadleChange} checked={value || false} />} label={label} />
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
