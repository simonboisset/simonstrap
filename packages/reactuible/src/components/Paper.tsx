import { Paper as PaperUI } from '@material-ui/core';
import React from 'react';
import { useFullWidthStyle } from '../styles/fullWidth';
import { GridItem, GridItemProps } from './GridItem';

type PaperProps = React.ComponentProps<typeof PaperUI> & GridItemProps;

export const Paper = ({ xs, sm, lg, md, xl, className, ...props }: PaperProps) => {
  const classes = useFullWidthStyle();
  return (
    <GridItem xs={xs} sm={sm} lg={lg} md={md} xl={xl}>
      <PaperUI {...props} className={className ? className : classes.fullWidth} />
    </GridItem>
  );
};
