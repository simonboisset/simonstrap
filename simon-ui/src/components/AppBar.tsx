import { AppBar as AppBarMUI, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export const AppBar: React.FC<{
  title?: string;
  leftElements?: React.ReactNode;
  rigthElements?: React.ReactNode;
}> = ({ title, leftElements, rigthElements }) => {
  const classes = useStyles();
  return (
    <>
      <AppBarMUI position="fixed" className={classes.appBar}>
        <Toolbar>
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
const useStyles = makeStyles(({ zIndex }) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: zIndex.drawer + 1,
  },
}));
