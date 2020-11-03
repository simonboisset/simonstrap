import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { drawerWidth } from './Drawer';

export const Page: React.FC<{ header?: JSX.Element; drawer?: JSX.Element }> = ({ children, header, drawer }) => {
  const classes = useStyles();
  return (
    <>
      {header}
      {drawer}
      <Grid container className={classes.page}>
        {children}
      </Grid>
    </>
  );
};
const useStyles = makeStyles(() => ({
  page: {
    marginLeft: drawerWidth
  }
}));
