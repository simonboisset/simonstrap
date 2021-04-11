import React from 'react';
import { history, useURL } from 'react-router-url';
import { Item } from './Item';

type ItemLinkProps = {
  to: string;
  children?: string;
  icon?: string;
};

export const ItemLink = ({ to, children, icon }: ItemLinkProps) => {
  const location = useURL();
  return (
    <Item icon={icon} onClick={() => history.push(to)} selected={location.path === to}>
      {children}
    </Item>
  );
};
