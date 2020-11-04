import { makeStyles } from '@material-ui/core';
import React from 'react';
import { drawerWidth } from './Drawer';

export const Page = ({
  header,
  drawer,
  children,
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  children: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <>
      {header}
      {drawer}
      <div className={classes.page}>{children}</div>
    </>
  );
};

const useStyles = makeStyles(({ spacing }) => ({
  page: {
    marginLeft: drawerWidth + spacing(2),
    marginBottom: spacing(2),
    marginTop: spacing(2),
    marginRight: spacing(2),
  },
}));
