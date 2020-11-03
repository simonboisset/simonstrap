import { Typography } from '@material-ui/core';
import React from 'react';
import { useSpaces } from './InputText';

type TextProps = React.ComponentProps<typeof Typography> & {
  spaceBelow?: boolean;
};

export const Text = ({ spaceBelow, className, ...props }: TextProps) => {
  const classes = useSpaces({ spaceBelow });
  return <Typography {...props} className={className + classes.space} />;
};
