import { FormControl, FormControlLabel, FormHelperText, Switch } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
import { InputProps } from './InputCheckBox';

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
