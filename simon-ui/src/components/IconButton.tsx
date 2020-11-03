import { Icon, IconButton as IconButtonMUI } from '@material-ui/core';
import React from 'react';

type IconButtonProps = {
  type?: 'submit';
  children?: string;
  edge?: 'start' | 'end';
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  onClick?: (event: React.MouseEvent) => void;
};

export const IconButton = ({ children, edge, color, onClick, type }: IconButtonProps) => {
  return (
    <IconButtonMUI type={type} edge={edge} color={color} onClick={onClick}>
      <Icon>{children}</Icon>
    </IconButtonMUI>
  );
};
