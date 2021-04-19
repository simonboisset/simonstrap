import { Icon, IconButton as IconButtonMUI } from '@material-ui/core';
import React from 'react';

type IconButtonProps = React.ComponentProps<typeof IconButtonMUI>;

export const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <IconButtonMUI {...props}>
      <Icon>{children}</Icon>
    </IconButtonMUI>
  );
};
