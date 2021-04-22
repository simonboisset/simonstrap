import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { Direction, useDirectionStyle } from '../styles/direction';
import { GridItem, GridItemProps } from './GridItem';
import { InputProps } from './InputCheckBox';

export type ItemRadioType = { name?: string; value: string; icon?: string };

type InputDateProps = InputProps<string> & {
  items: ItemRadioType[];
  direction?: Direction;
} & GridItemProps;

export const InputRadio: React.FC<InputDateProps> = ({ value, onChange, error, label, items, direction, ...rest }) => {
  const classes = useDirectionStyle({ direction });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          <div className={classes.direction}>
            {items.map(item => (
              <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.name} />
            ))}
          </div>
        </RadioGroup>
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
