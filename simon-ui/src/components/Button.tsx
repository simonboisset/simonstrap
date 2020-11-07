import { Button as ButtonUI, Grid } from '@material-ui/core';
import React from 'react';

export type GridSize = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ButtonProps = React.ComponentProps<typeof ButtonUI> & { xs?: GridSize };

export const Button = ({ xs = 12, ...props }: ButtonProps) => {
  return (
    <Grid item xs={xs}>
      <ButtonUI {...props} fullWidth />
    </Grid>
  );
};
