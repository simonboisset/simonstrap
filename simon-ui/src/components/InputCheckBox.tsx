import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Direction, directionStyle } from '../styles/direction';
import { GridItem, GridItemProps } from './GridItem';
import { renderControlerProps } from './InputSwitch';

export type ItemCheckBoxType = { label?: string; name?: string; icon?: string };

type InputCheckBoxProps = {
  name: string;
  label?: string;
  items?: ItemCheckBoxType[];
  direction?: Direction;
} & GridItemProps;

export const InputCheckBox = ({ name, label, items, direction, ...rest }: InputCheckBoxProps) => {
  const { errors, control } = useFormContext();
  const itemChange = (index: number, value: boolean, props: renderControlerProps, item: ItemCheckBoxType) => {
    const nextValue = [...props.value];
    nextValue[index] = { ...item, value };
    props.onChange(nextValue);
  };
  return (
    <GridItem {...rest}>
      <Controller
        render={(props) => (
          <FormControl component="fieldset">
            {items ? (
              <>
                <FormLabel component="legend">{label}</FormLabel>
                <div className={directionStyle(direction)}>
                  {props.value.map((item: ItemCheckBoxType & { value: boolean }, i: number) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox onChange={(_, checked) => itemChange(i, checked, props, item)} checked={item.value} />
                      }
                      label={item.label}
                    />
                  ))}
                </div>
              </>
            ) : (
              <FormControlLabel
                control={<Checkbox onChange={(_, checked) => props.onChange(checked)} checked={props.value} />}
                label={label}
              />
            )}
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
        defaultValue={items ? items.map((item) => ({ ...item, value: false })) : false}
      />
    </GridItem>
  );
};
