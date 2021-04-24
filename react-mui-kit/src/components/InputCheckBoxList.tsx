import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import { InputProps } from 'react-hook-input';
import { Direction, useDirectionStyle } from '../styles/direction';
import { GridItem, GridItemProps } from './GridItem';

export type ItemCheckBoxType = { label?: string; name?: string; icon?: string };

type InputCheckBoxListProps = InputProps<boolean[]> & {
  label?: string;
  items: ItemCheckBoxType[];
  direction?: Direction;
} & GridItemProps;

export const InputCheckBoxList: React.FC<InputCheckBoxListProps> = ({
  label,
  value,
  onChange,
  error,
  items,
  direction,
  ...rest
}) => {
  const classes = useDirectionStyle({ direction });

  const values = items.map((item, i) => ({ ...item, value: value ? value[i] : false }));

  const itemChange = (index: number, itemValue: boolean, _: ItemCheckBoxType) => {
    const nextValue = !!value ? [...value] : items.map(_ => false);
    nextValue[index] = itemValue;
    onChange(nextValue);
  };
  return (
    <GridItem {...rest}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <div className={classes.direction}>
          {values.map((item: ItemCheckBoxType & { value: boolean }, i: number) => (
            <FormControlLabel
              key={i}
              control={<Checkbox onChange={(_, checked) => itemChange(i, checked, item)} checked={item.value} />}
              label={item.label}
            />
          ))}
        </div>
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </GridItem>
  );
};
