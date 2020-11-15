import { css } from '@emotion/css';
import { Drawer as DrawerUI, List, Toolbar } from '@material-ui/core';
import React from 'react';
import { Child } from './GridItem';
import { useDrawer } from './SimonProvider';

type DrawerProps = {
  children?: Child;
  className?: string;
};

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const { open, closeDrawer, variant, position, width, z } = useDrawer();
  return (
    <DrawerUI {...props} open={open} onClose={closeDrawer} variant={variant} anchor={position}>
      {z === 'under' && <Toolbar />}
      <List component="nav" className={css({ width })}>
        {children}
      </List>
    </DrawerUI>
  );
};
