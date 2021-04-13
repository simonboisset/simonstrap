import { AppBar as AppBarMUI, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { DrawerPosition, Theme, useDrawer } from './MuiKitProvider';

type AppBarProps = {
  title?: string;
  leftElements?: JSX.Element;
  rigthElements?: JSX.Element;
  className?: string;
};

export const AppBar = ({ title, leftElements, rigthElements, className }: AppBarProps) => {
  const { z, width, variant, position, open } = useDrawer();

  const marge = z === 'on' && (variant === 'permanent' || (open && variant === 'persistent'));
  const classes = useStyles({ position, width, marge });
  return (
    <>
      <AppBarMUI position="fixed" className={className}>
        <Toolbar className={classes.toolBar}>
          {leftElements}
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          {rigthElements}
        </Toolbar>
      </AppBarMUI>
      <Toolbar />
    </>
  );
};

const useStyles = makeStyles<Theme, { position?: DrawerPosition; marge?: boolean; width: number }, 'title' | 'toolBar'>(
  {
    title: {
      flexGrow: 1,
      paddingLeft: 8
    },
    toolBar: props => ({
      marginLeft: props.position === 'left' && props.marge ? props.width : 0,
      marginBottom: props.position === 'bottom' && props.marge ? props.width : 0,
      marginTop: props.position === 'top' && props.marge ? props.width : 0,
      marginRight: props.position === 'right' && props.marge ? props.width : 0,
      transition: 'all 200ms'
    })
  }
);
