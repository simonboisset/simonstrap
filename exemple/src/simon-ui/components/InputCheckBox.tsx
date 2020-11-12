import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { renderControlerProps } from './InputSwitch';
import { useFromStyle } from './InputText';

export type ItemCheckBoxType = { label?: string; name?: string; icon?: string };

export const InputCheckBox: React.FC<{
  name: string;
  label?: string;
  items?: ItemCheckBoxType[];
  spaceBelow?: boolean;
  spaceAfter?: boolean;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  direction?: 'horizontal' | 'vertical';
}> = ({ name, label, items, xs, direction = 'horizontal', spaceBelow, spaceAfter }) => {
  const { errors, control } = useFormContext();
  const classes = useFromStyle({ direction, spaceBelow, spaceAfter });
  const itemChange = (index: number, value: boolean, props: renderControlerProps, item: ItemCheckBoxType) => {
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
                  {props.value.map((item: ItemCheckBoxType & { value: boolean }, i: number) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox onChange={(_, checked) => itemChange(i, checked, props, item)} checked={item.value} />
                      }
                      label={item.label}
                    />
                  ))}
                </FormGroup>
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
    </Grid>
  );
};
