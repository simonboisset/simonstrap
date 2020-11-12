import { Grid } from '@material-ui/core';
import React from 'react';
import { ComponentProps } from './Component';

export const Container = ({ children, xs = 12, sm, md, lg, xl }: ComponentProps) => {
  return (
    <Grid container justify="center">
      <Grid container item xs={xs} sm={sm} md={md} lg={lg} xl={xl} spacing={2}>
        {children}
      </Grid>
    </Grid>
  );
};
