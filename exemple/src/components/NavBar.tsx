import * as React from 'react';
import { Divider, Drawer, ItemLink } from '../simon-ui';

export const NavBar = () => {
  return (
    <Drawer>
      <ItemLink icon="home" to="/">
        Home
      </ItemLink>
      <Divider />
      <ItemLink to="/form">Form</ItemLink>
      <ItemLink to="/router">Router</ItemLink>
      <ItemLink to="/redirect">Redirect</ItemLink>
      <ItemLink to="/page">Page</ItemLink>
      <ItemLink to="/theme">Theme</ItemLink>
      <ItemLink to="/modal">Modal</ItemLink>
    </Drawer>
  );
};
