import { FormControl, FormControlLabel, FormHelperText, FormLabel, Switch } from '@material-ui/core';
import React from 'react';
import { Direction, useDirectionStyle } from '../styles/direction';
import { useForm } from './Form';
import { GridItem, GridItemProps } from './GridItem';
export type ItemSwitchType = { label?: string; name?: string; icon?: string };

export type renderControlerProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  name: string;
  ref: React.MutableRefObject<any>;
};
type InputSwitchProps = {
  name: string;
  label?: string;
  items?: ItemSwitchType[];
  direction?: Direction;
} & GridItemProps;
export const InputSwitch = ({ name, label, items, direction, ...rest }: InputSwitchProps) => {
  const classes = useDirectionStyle({ direction });
  const { getInputValue, onInputChange, getInputError } = useForm<any>();
  const value = getInputValue(name);
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  const itemChange = (index: number, itemValue: boolean, item: ItemSwitchType) => {
    const nextValue = [...value];
    nextValue[index] = { ...item, value: itemValue };
    onChange(nextValue);
  };

  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        {items ? (
          <>
            <FormLabel component="legend">{label}</FormLabel>
            <div className={classes.direction}>
              {value.map((item: ItemSwitchType & { value: boolean }, i: number) => (
                <FormControlLabel
                  key={i}
                  control={<Switch onChange={(_, checked) => itemChange(i, checked, item)} checked={item.value} />}
                  label={item.label}
                />
              ))}
            </div>
          </>
        ) : (
          <FormControlLabel
            control={<Switch onChange={(_, checked) => onChange(checked)} checked={value} />}
            label={label}
          />
        )}

        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
