import React from 'react';
import { Divider, Drawer, history, Item } from 'simon-ui';

export const NavBar = () => {
  return (
    <Drawer variant="permanent">
      <Item icon="home" onClick={() => history.push('/')}>
        Home
      </Item>
      <Divider />
      <Item onClick={() => history.push('/test')}>Form</Item>
      <Item onClick={() => history.push('/test')}>Router</Item>
      <Item onClick={() => history.push('/test')}>Page</Item>
      <Item onClick={() => history.push('/test')}>Theme</Item>
      <Divider />
      <Item onClick={() => history.push('/test')}>Test</Item>
      <Item onClick={() => history.push('/button')}>Button</Item>
      <Item onClick={() => history.push('/form')}>Form</Item>
      <Item onClick={() => history.push('/modal')}>Modal</Item>
      <Item onClick={() => history.push('/router')}>Router</Item>
      <Item onClick={() => history.push('/ripple')}>Ripple</Item>
    </Drawer>
  );
};
