import { css } from '@emotion/css';
import React from 'react';
import { DrawerPosition, useDrawer } from './SimonProvider';

export const Page = ({
  header,
  drawer,
  children,
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  children: React.ReactNode;
}) => {
  const { width, variant, position, open } = useDrawer();
  const marge = variant === 'permanent' || (open && variant === 'persistent');
  return (
    <>
      {drawer}
      {header}
      <div className={pageStyle(width, position, marge)}>{children}</div>
    </>
  );
};

const pageStyle = (width: number, position: DrawerPosition = 'left', marge?: boolean) => {
  return css({
    marginLeft: position === 'left' && marge ? width + 16 : 16,
    marginBottom: position === 'bottom' && marge ? width + 16 : 16,
    marginTop: position === 'top' && marge ? width + 16 : 16,
    marginRight: position === 'right' && marge ? width + 16 : 16,
    transition: 'all 200ms',
  });
};
