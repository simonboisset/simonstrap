import { Grid, makeStyles } from '@material-ui/core';
import { createBrowserHistory, Location } from 'history';
import React from 'react';
import { drawerWidth } from './Drawer';

export const history = createBrowserHistory();

type RouteParam = {
  path: string;
  component: JSX.Element;
  routes?: RouteParam[];
};

export const PageRouter = ({
  header,
  drawer,
  routes
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  routes: RouteParam[];
}) => {
  const classes = useStyles();
  const [location, setLocation] = React.useState<Location>(history.location);

  React.useEffect(() => {
    return history.listen(() => {
      setLocation(history.location);
    });
  }, []);

  const rendredRoute = (testToutes: RouteParam[]): JSX.Element | null => {
    for (const route of testToutes) {
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

  return (
    <>
      {header}
      {drawer}
      <Grid container className={classes.page}>
        {rendredRoute(routes)}
      </Grid>
    </>
  );
};
const useStyles = makeStyles(() => ({
  page: {
    marginLeft: drawerWidth
  }
}));
