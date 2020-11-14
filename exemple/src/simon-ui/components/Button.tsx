import { Button as ButtonUI } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';

type ButtonProps = Omit<React.ComponentProps<typeof ButtonUI> & GridItemProps, 'children'> & { children?: string };

export const Button = ({ xs, sm, lg, md, xl, ...props }: ButtonProps) => {
  return (
    <GridItem xs={xs} sm={sm} lg={lg} md={md} xl={xl}>
      <ButtonUI {...props} fullWidth />
    </GridItem>
  );
};
