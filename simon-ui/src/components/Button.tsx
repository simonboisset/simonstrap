import { Button as ButtonUI, ButtonTypeMap, ExtendButtonBase, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

export const Button: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <ButtonUI {...props} className={classes.button} fullWidth />
    </Grid>
  );
};
const useStyles = makeStyles(() => ({
  button: {},
}));
