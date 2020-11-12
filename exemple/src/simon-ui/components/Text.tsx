import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useFromStyle } from './InputText';

type TextProps = React.ComponentProps<typeof Typography> & {
  spaceBelow?: boolean;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const Text = ({ spaceBelow, className, xs = 12, ...props }: TextProps) => {
  const classes = useFromStyle({ spaceBelow });
  return (
    <Grid item xs={xs} className={classes.space}>
      <Typography {...props} className={className} />
    </Grid>
  );
};
