import React from "react";
import { Button, history, Router } from "simon-ui";

export const RouterPage = () => {
  return (
    <div>
      <Button onClick={() => history.push("/router/page1")}>Page 1</Button>
      <Button onClick={() => history.push("/router/page2")}>Page 2</Button>
      <Button onClick={() => history.push("/router/page3")}>Page 3</Button>
      <Button onClick={() => history.push("/router/page4")}>Page 4</Button>
      <Router
        routes={[
          { path: "/router/page1", component: <div>Page 1</div> },
          { path: "/router/page2", component: <div>Page 2</div> },
          { path: "/router/page3", component: <div>Page 3</div> },
          { path: "/router/page4", component: <div>Page 4</div> },
        ]}
      />
    </div>
  );
};
