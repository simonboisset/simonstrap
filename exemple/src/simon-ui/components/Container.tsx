import { Grid } from '@material-ui/core';
import React from 'react';
import { GridItemProps } from './GridItem';

export const Container = ({ xs = 12, ...props }: GridItemProps) => {
  return (
    <Grid container justify="center">
      <Grid container item xs={xs} spacing={2} {...props} />
    </Grid>
  );
};
