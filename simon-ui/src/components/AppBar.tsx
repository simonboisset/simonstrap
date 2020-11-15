import { css } from '@emotion/css';
import { AppBar as AppBarMUI, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { DrawerPosition, useDrawer } from './SimonProvider';

type AppBarProps = {
  title?: string;
  leftElements?: React.ReactNode;
  rigthElements?: React.ReactNode;
  className?: string;
};

export const AppBar = ({ title, leftElements, rigthElements, className }: AppBarProps) => {
  const { z, width, variant, position, open } = useDrawer();
  const marge = z === 'on' && (variant === 'permanent' || (open && variant === 'persistent'));
  return (
    <>
      <AppBarMUI position="fixed" className={className}>
        <Toolbar className={toolBarStyle(width, position, marge)}>
          {leftElements}
          <Typography className={titleStyle} variant="h6">
            {title}
          </Typography>
          {rigthElements}
        </Toolbar>
      </AppBarMUI>
      <Toolbar />
    </>
  );
};

const titleStyle = css({
  flexGrow: 1,
  paddingLeft: 8,
});

const toolBarStyle = (width: number, position?: DrawerPosition, marge?: boolean) =>
  css({
    marginLeft: position === 'left' && marge ? width : 0,
    marginBottom: position === 'bottom' && marge ? width : 0,
    marginTop: position === 'top' && marge ? width : 0,
    marginRight: position === 'right' && marge ? width : 0,
    transition: 'all 200ms',
  });
// type CSS = React.CSSProperties
