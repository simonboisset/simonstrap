import * as React from 'react';
import { AppBar, IconButton, useDrawer } from '../simon-ui';
export const Header = () => {
  const { toogleDrawer } = useDrawer();
  return <AppBar title="Simon UI" leftElements={<IconButton onClick={toogleDrawer}>menu</IconButton>} />;
};
