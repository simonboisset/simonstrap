import React from 'react';
import { Router } from '../router/components/Router';
import { Route } from '../router/types/Route';
import { Page } from './Page';

export const PageRouter = ({
  header,
  drawer,
  routes,
  auth,
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  routes: Route[];
  auth?: boolean;
}) => {
  return (
    <Page header={header} drawer={drawer}>
      <Router auth={auth} routes={routes} />
    </Page>
  );
};
