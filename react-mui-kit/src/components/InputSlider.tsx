import { FormHelperText, Slider, Typography } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
import { InputProps } from './InputCheckBox';

type InputSliderProps = InputProps<number | number[]> & {
  min?: number;
  max?: number;
  step?: number;
} & GridItemProps;
export const InputSlider: React.FC<InputSliderProps> = ({
  value,
  onChange,
  error,
  label,
  step,
  max = 100,
  min = 0,
  ...rest
}) => {
  const handleChange = (_: React.ChangeEvent<{}>, value: number | number[]) => {
    onChange(value);
  };
  return (
    <GridItem {...rest}>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        getAriaValueText={value => `${value}`}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={step}
        marks={!!step}
        value={value}
        min={min}
        max={max}
      />
      <FormHelperText error={!!error}>{error}</FormHelperText>
    </GridItem>
  );
};
