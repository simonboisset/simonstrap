import { Button as ButtonUI, ButtonTypeMap, ExtendButtonBase, makeStyles } from '@material-ui/core';
import React from 'react';

export const Button: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = ({ ...props }) => {
  const classes = useStyles();
  return <ButtonUI {...props} className={classes.button} />;
};
const useStyles = makeStyles(() => ({
  button: {}
}));
