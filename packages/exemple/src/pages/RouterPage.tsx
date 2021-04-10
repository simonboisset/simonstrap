import * as React from 'react';
import { Button, Container, history, Paper, Router, Text } from '../simon-ui';

export const RouterPage = () => {
  return (
    <Container xs={6}>
      <Text variant="h3">Router</Text>
      <Button onClick={() => history.push('/router/page1')} xs={3}>
        Page 1
      </Button>
      <Button onClick={() => history.push('/router/page2')} xs={3}>
        Page 2
      </Button>
      <Button onClick={() => history.push('/router/page3')} xs={3}>
        Page 3
      </Button>
      <Button onClick={() => history.push('/router/page4')} xs={3}>
        Page 4
      </Button>
      <Container xs={6}>
        <Paper>
          <Router
            routes={[
              { path: '/router/page1', component: <div>Page 1</div> },
              { path: '/router/page2', component: <div>Page 2</div> },
              { path: '/router/page3', component: <div>Page 3</div> },
              { path: '/router/page4', component: <div>Page 4</div> },
            ]}
          />
        </Paper>
      </Container>
    </Container>
  );
};
