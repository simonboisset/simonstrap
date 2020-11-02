import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';

type ItemProps = Omit<React.ComponentProps<typeof ListItem>, 'children' | 'button'> & {
  children?: string;
  icon?: string;
};

export const Item = ({ children, icon, ...props }: ItemProps) => {
  return (
    <ListItem {...props} button>
      {icon && (
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
