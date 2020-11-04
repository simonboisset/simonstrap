import { Drawer as DrawerUI, DrawerProps, List, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';

export const drawerWidth = 300;

export const Drawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <DrawerUI {...props}>
      <Toolbar />
      <List component="nav" className={classes.drawer}>
        {children}
      </List>
    </DrawerUI>
  );
};
const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
  },
}));
