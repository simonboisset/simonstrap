import { Grid } from '@material-ui/core';
import React from 'react';

export type GridSize = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Child = JSX.Element | JSX.Element[];
export type GridItemProps = {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  children?: Child;
  className?: string;
};

export const GridItem = ({ xs = 12, children, ...props }: GridItemProps) => {
  return (
    <Grid item xs={xs} {...props}>
      {children}
    </Grid>
  );
};
