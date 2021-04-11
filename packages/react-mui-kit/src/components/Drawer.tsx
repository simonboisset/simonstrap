import { Drawer as DrawerUI, List, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { Child } from './GridItem';
import { Theme, useDrawer } from './MuiKitProvider';

type DrawerProps = {
  children?: Child;
  className?: string;
};

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const { open, closeDrawer, variant, position, width, z } = useDrawer();
  const classes = useStyles({ width });
  return (
    <DrawerUI {...props} open={open} onClose={closeDrawer} variant={variant} anchor={position}>
      {z !== 'on' && <Toolbar />}
      <List component="nav" className={classes.width}>
        {children}
      </List>
    </DrawerUI>
  );
};
const useStyles = makeStyles<Theme, { width: number }, 'width'>({
  width: props => ({
    width: props.width
  })
});
