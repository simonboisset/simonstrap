import { css } from 'emotion';
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
      <div className={containerStyle(width, position, marge)}>
        {header}
        <div className={pageStyle}>{children}</div>
      </div>
    </>
  );
};

const containerStyle = (width: number, position?: DrawerPosition, marge?: boolean) => {
  return css({
    marginLeft: position === 'left' && marge ? width : 0,
    marginBottom: position === 'bottom' && marge ? width : 0,
    marginTop: position === 'top' && marge ? width : 0,
    marginRight: position === 'right' && marge ? width : 0,
    transition: 'all 200ms',
  });
};

const pageStyle = css({
  margin: 16,
});
