import * as React from 'react';
import { AppBar, Menu, useDrawer, useMenu } from '../simon-ui';
export const Header = () => {
  const { toogleDrawer } = useDrawer();
  const menu = useMenu();
  return (
    <AppBar
      title="Simon UI"
      leftElements={
        <Menu
          {...menu}
          icon="menu"
          edge="start"
          items={[
            { label: 'Drawer', onClick: toogleDrawer },
            { label: 'Logout', onClick: () => {} },
          ]}
        />
      }
    />
  );
};
