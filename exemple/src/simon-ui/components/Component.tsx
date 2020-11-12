import { Grid } from '@material-ui/core';
import React from 'react';

export type GridSize = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Child = JSX.Element | JSX.Element[];
export type ComponentProps = {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  children?: Child;
  className?: string;
};

export const Component = ({ xs = 12, md, sm, lg, xl, children, className }: ComponentProps) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={className}>
      {children}
    </Grid>
  );
};
