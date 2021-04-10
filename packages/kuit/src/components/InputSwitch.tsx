import { FormControl, FormControlLabel, FormHelperText, FormLabel, Switch } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Direction, directionStyle } from '../styles/direction';
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
  const { errors, control } = useFormContext();

  const itemChange = (index: number, value: boolean, props: renderControlerProps, item: ItemSwitchType) => {
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
                  {props.value.map((item: ItemSwitchType & { value: boolean }, i: number) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Switch onChange={(_, checked) => itemChange(i, checked, props, item)} checked={item.value} />
                      }
                      label={item.label}
                    />
                  ))}
                </div>
              </>
            ) : (
              <FormControlLabel
                control={<Switch onChange={(_, checked) => props.onChange(checked)} checked={props.value} />}
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
