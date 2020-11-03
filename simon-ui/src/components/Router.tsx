import { createBrowserHistory, Location } from 'history';
import React from 'react';

export const history = createBrowserHistory();

export type RouteParam = {
  path: string;
  component: JSX.Element;
  routes?: RouteParam[];
};

export const Router = ({ routes }: { routes: RouteParam[] }) => {
  const [location, setLocation] = React.useState<Location>(history.location);

  React.useEffect(() => {
    return history.listen(() => {
      setLocation(history.location);
    });
  }, []);

  const rendredRoute = (testedRoutes: RouteParam[]): JSX.Element | null => {
    for (const route of testedRoutes) {
      if (location.pathname.includes(route.path)) {
        if (!!route.routes) {
          const subrenderedRoute = rendredRoute(route.routes);
          if (subrenderedRoute) {
            return subrenderedRoute;
          }
        }
        return route.component;
      }
    }
    return null;
  };

  return rendredRoute(routes);
};
