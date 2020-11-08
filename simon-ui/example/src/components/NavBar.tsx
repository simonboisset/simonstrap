import * as React from 'react';
import { Divider, Drawer, history, Item, ItemLink } from 'simon-ui';

export const NavBar = () => {
  return (
    <Drawer variant="permanent">
      <ItemLink icon="home" to="/">
        Home
      </ItemLink>
      <Divider />
      <ItemLink to="/form">Form</ItemLink>
      <ItemLink to="/router">Router</ItemLink>
      <ItemLink to="/test">Page</ItemLink>
      <ItemLink to="/test">Theme</ItemLink>
      <ItemLink to="/modal">Modal</ItemLink>
      <Divider />
      <Item onClick={() => history.push('/button')}>Button</Item>
      <Item onClick={() => history.push('/ripple')}>Ripple</Item>
    </Drawer>
  );
};
