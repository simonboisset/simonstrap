import { makeStyles } from '@material-ui/core';
import React from 'react';
import { drawerWidth } from './Drawer';
import { RouteParam, Router } from './Router';

export const PageRouter = ({
  header,
  drawer,
  routes
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  routes: RouteParam[];
}) => {
  const classes = useStyles();
  return (
    <>
      {header}
      {drawer}
      <div className={classes.page}>
        <Router routes={routes} />
      </div>
    </>
  );
};

const useStyles = makeStyles(({ spacing }) => ({
  page: {
    marginLeft: drawerWidth + spacing(2),
    marginBottom: spacing(2),
    marginTop: spacing(2),
    marginRight: spacing(2)
  }
}));
