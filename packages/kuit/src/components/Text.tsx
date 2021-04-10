import { Typography } from '@material-ui/core';
import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
type TextProps = Omit<React.ComponentProps<typeof Typography> & GridItemProps, 'children'> & { children?: string };

export const Text = ({ xs, sm, md, lg, xl, className, ...props }: TextProps) => {
  return (
    <GridItem {...{ xs, sm, md, lg, xl, className }}>
      <Typography {...props} className={className} />
    </GridItem>
  );
};
