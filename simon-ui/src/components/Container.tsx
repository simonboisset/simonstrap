import { Grid } from '@material-ui/core';
import React from 'react';

export const Container: React.FC<{
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ children, xs = 12 }) => {
  return (
    <Grid container justify="center">
      <Grid container item xs={xs} spacing={2}>
        {children}
      </Grid>
    </Grid>
  );
};
