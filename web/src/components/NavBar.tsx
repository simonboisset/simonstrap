import React from "react";
import { Drawer, history, Item } from "simon-ui";

export const NavBar = () => {
  return (
    <Drawer variant="permanent">
      <Item icon="home" onClick={() => history.push("/")}>
        Home
      </Item>
      <Item icon="home" onClick={() => history.push("/test")}>
        Test
      </Item>
      <Item icon="home" onClick={() => history.push("/button")}>
        Button
      </Item>
      <Item icon="home" onClick={() => history.push("/button2")}>
        Button
      </Item>
    </Drawer>
  );
};
