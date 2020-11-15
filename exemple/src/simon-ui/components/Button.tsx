import { Button as ButtonUI, Icon } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';

type ButtonProps = Omit<React.ComponentProps<typeof ButtonUI> & GridItemProps, 'children' | 'startIcon' | 'endIcon'> & {
  children?: string;
  endIcon?: string;
  startIcon?: string;
};

export const Button = ({ xs, sm, lg, md, xl, startIcon, endIcon, ...props }: ButtonProps) => {
  return (
    <GridItem {...{ xs, sm, lg, md, xl }}>
      <ButtonUI
        {...props}
        fullWidth
        startIcon={startIcon && <Icon>{startIcon}</Icon>}
        endIcon={endIcon && <Icon>{endIcon}</Icon>}
      />
    </GridItem>
  );
};
