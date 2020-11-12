import { Button as ButtonUI } from '@material-ui/core';
import React from 'react';
import { Component, ComponentProps } from './Component';

export type GridSize = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ButtonProps = Omit<React.ComponentProps<typeof ButtonUI> & ComponentProps, 'children'> & { children?: string };

export const Button = ({ xs, sm, lg, md, xl, ...props }: ButtonProps) => {
  return (
    <Component xs={xs} sm={sm} lg={lg} md={md} xl={xl}>
      <ButtonUI {...props} fullWidth />
    </Component>
  );
};
