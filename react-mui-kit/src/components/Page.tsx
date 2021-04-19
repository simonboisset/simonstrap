import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DrawerPosition, Theme, useDrawer } from './MuiKitProvider';

type PageProps = {
  header?: React.ReactNode;
  drawer?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ header, drawer, children }) => {
  const { width, variant, position, open } = useDrawer();
  const marge = variant === 'permanent' || (open && variant === 'persistent');
  const classes = useStyles({ width, marge, position });
  return (
    <>
      {drawer}
      {header}
      <div className={classes.page}>{children}</div>
    </>
  );
};

const useStyles = makeStyles<Theme, { position?: DrawerPosition; marge?: boolean; width: number }, 'page'>({
  page: props => ({
    marginLeft: props.position === 'left' && props.marge ? props.width + 16 : 16,
    marginBottom: props.position === 'bottom' && props.marge ? props.width + 16 : 16,
    marginTop: props.position === 'top' && props.marge ? props.width + 16 : 16,
    marginRight: props.position === 'right' && props.marge ? props.width + 16 : 16,
    transition: 'all 200ms'
  })
});
