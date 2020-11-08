import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  makeStyles
} from '@material-ui/core';
import React from 'react';
import { IconButton } from './IconButton';

type ModalProps = Omit<DialogProps & DialogContentProps & { actions?: JSX.Element }, 'onClose'> & {
  onClose: () => void;
};

export const Modal = ({
  children,
  title,
  dividers,
  actions,
  onClose,
  maxWidth = 'md',
  scroll = 'body',
  ...props
}: ModalProps) => {
  const classes = useStyles();
  return (
    <Dialog {...props} onClose={onClose} fullWidth maxWidth={maxWidth} scroll={scroll}>
      <IconButton className={classes.fab} onClick={onClose}>
        close
      </IconButton>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {!!actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
const useStyles = makeStyles(({ spacing }) => ({
  fab: {
    position: 'absolute',
    right: spacing(1),
    top: spacing(1)
  }
}));
