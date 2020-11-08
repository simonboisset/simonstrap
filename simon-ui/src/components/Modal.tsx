import { Dialog, DialogContentProps, DialogProps, makeStyles } from '@material-ui/core';
import React from 'react';
import { IconButton } from './IconButton';

type ModalProps = Omit<DialogProps & DialogContentProps, 'onClose' | 'title'> & {
  onClose: () => void;
};

export const Modal = ({ children, onClose, maxWidth = 'md', scroll = 'body', ...props }: ModalProps) => {
  const classes = useStyles();
  return (
    <Dialog {...props} onClose={onClose} fullWidth maxWidth={maxWidth} scroll={scroll}>
      <IconButton className={classes.fab} onClick={onClose}>
        close
      </IconButton>
      {children}
    </Dialog>
  );
};
const useStyles = makeStyles(({ spacing }) => ({
  fab: {
    position: 'absolute',
    right: spacing(1),
    top: spacing(1),
  },
}));
