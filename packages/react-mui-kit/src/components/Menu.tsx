import { Menu as MenuUI, MenuItem, MenuProps } from '@material-ui/core';
import React from 'react';
import { Button } from './Button';
import { IconButton } from './IconButton';

type MenuPropsType = Omit<MenuProps, 'children' | 'open'> & {
  items: { label: string; onClick: () => void }[];
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  label?: string;
  icon?: string;
  endIcon?: string;
  anchorEl: HTMLElement | null;
  edge?: 'start' | 'end';
};

export function Menu({ onOpen, onClose, label, items, icon, anchorEl, edge, endIcon, ...props }: MenuPropsType) {
  const handleClickItem = (onClick: () => void) => {
    onClick();
    onClose();
  };

  return (
    <>
      {icon && !label ? (
        <IconButton onClick={onOpen} edge={edge}>
          {icon}
        </IconButton>
      ) : (
        <Button onClick={onOpen} startIcon={icon} endIcon={endIcon} xs="auto">
          {label}
        </Button>
      )}
      <MenuUI anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={onClose} {...props}>
        {items.map((item, i) => (
          <MenuItem key={i} onClick={() => handleClickItem(item.onClick)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuUI>
    </>
  );
}
export const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };
  return { onOpen, onClose, anchorEl };
};
