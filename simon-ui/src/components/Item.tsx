import { Icon, ListItem, ListItemIcon, ListItemProps, ListItemText } from '@material-ui/core';
import React from 'react';

type ItemProps = Omit<ListItemProps, 'children' | 'button'> & {
  children?: string;
  icon?: string;
  selected?: boolean;
};

export const Item = ({ children, icon, onClick, ...props }: ItemProps) => {
  const itemProps: any = props;
  if (!!onClick) {
    itemProps.button = true;
  }
  return (
    <ListItem {...itemProps} onClick={onClick}>
      {icon && (
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
