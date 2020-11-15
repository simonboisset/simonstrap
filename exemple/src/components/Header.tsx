import * as React from 'react';
import { AppBar, useDrawer } from '../simon-ui';
import Menu, { useMenu } from '../simon-ui/components/Menu';
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
