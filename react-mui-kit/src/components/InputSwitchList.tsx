import { FormControl, FormControlLabel, FormHelperText, FormLabel, Switch } from '@material-ui/core';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { Direction, useDirectionStyle } from '../styles/direction';
import { GridItem, GridItemProps } from './GridItem';

export type ItemSwitchType = { label?: string; name?: string; icon?: string };

export type renderControlerProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  name: string;
  ref: React.MutableRefObject<any>;
};
type InputSwitchListProps = InputProps<boolean[]> & {
  label?: string;
  items: ItemSwitchType[];
  direction?: Direction;
} & GridItemProps;
export const InputSwitchList: React.FC<InputSwitchListProps> = ({
  value,
  onChange,
  error,
  label,
  items,
  direction,
  ...rest
}) => {
  const classes = useDirectionStyle({ direction });
  const values = items.map((item, i) => ({ ...item, value: value ? value[i] : false }));

  const itemChange = (index: number, itemValue: boolean, _: ItemSwitchType) => {
    const nextValue = !!value ? [...value] : items.map(_ => false);
    nextValue[index] = itemValue;
    onChange(nextValue);
  };

  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <div className={classes.direction}>
          {values.map((item: ItemSwitchType & { value: boolean }, i: number) => (
            <FormControlLabel
              key={i}
              control={<Switch onChange={(_, checked) => itemChange(i, checked, item)} checked={item.value} />}
              label={item.label}
            />
          ))}
        </div>
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
