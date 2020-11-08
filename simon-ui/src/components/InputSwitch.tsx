import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, Switch } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useFromStyle } from './InputText';

export type ItemSwitchType = { label?: string; name?: string; icon?: string };

export type renderControlerProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  name: string;
  ref: React.MutableRefObject<any>;
};

export const InputSwitch: React.FC<{
  name: string;
  label?: string;
  items?: ItemSwitchType[];
  spaceBelow?: boolean;
  spaceAfter?: boolean;
  direction?: 'horizontal' | 'vertical';
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, items, xs, spaceAfter, direction = 'horizontal', spaceBelow }) => {
  const { errors, control } = useFormContext();
  const classes = useFromStyle({ direction, spaceBelow, spaceAfter });

  const itemChange = (index: number, value: boolean, props: renderControlerProps, item: ItemSwitchType) => {
    const nextValue = [...props.value];
    nextValue[index] = { ...item, value };
    props.onChange(nextValue);
  };

  return (
    <Grid item xs={xs ? xs : 12} className={classes.space}>
      <Controller
        render={(props) => (
          <FormControl component="fieldset">
            {items ? (
              <>
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup className={classes.group}>
                  {props.value.map((item: ItemSwitchType & { value: boolean }, i: number) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Switch onChange={(_, checked) => itemChange(i, checked, props, item)} checked={item.value} />
                      }
                      label={item.label}
                    />
                  ))}
                </FormGroup>
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
    </Grid>
  );
};
