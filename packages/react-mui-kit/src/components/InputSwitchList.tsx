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
type InputSwitchListProps<T> = {
  name: keyof T;
  label?: string;
  items: ItemSwitchType[];
  direction?: Direction;
} & GridItemProps;
export function InputSwitchList<T>({ name, label, items, direction, ...rest }: InputSwitchListProps<T>) {
  const classes = useDirectionStyle({ direction });
  const { getInputValue, onInputChange, getInputError } = useForm<T, boolean[]>();
  const values = getInputValue(name) || items.map(_ => false);
  const value = items.map((item, i) => ({ ...item, value: values[i] }));
  const onChange = onInputChange(name);
  const errors = getInputError(name);

  const itemChange = (index: number, itemValue: boolean, _: ItemSwitchType) => {
    const nextValue = [...values];
    nextValue[index] = itemValue;
    onChange(nextValue);
  };

  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
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

        <FormHelperText error={!!errors}>{errors?.message}</FormHelperText>
      </FormControl>
    </GridItem>
  );
}
