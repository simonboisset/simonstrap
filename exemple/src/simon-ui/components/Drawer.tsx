import { Drawer as DrawerUI, List, Toolbar } from '@material-ui/core';
import { css } from 'emotion';
import React from 'react';
import { Child } from './Component';
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
      <List component="nav" className={listStyle(width)}>
        {children}
      </List>
    </DrawerUI>
  );
};

const listStyle = (width: number) =>
  css({
    width,
  });
