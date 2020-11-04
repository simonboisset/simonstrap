import { Grid } from '@material-ui/core';
import React from 'react';

export const PageContent: React.FC<{
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  onSubmit: (data: any) => void;
}> = ({ children, xs }) => {
  return (
    <Grid container justify="center">
      <Grid container item xs={xs ? xs : 12}>
        {children}
      </Grid>
    </Grid>
  );
};
