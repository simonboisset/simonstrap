import React from "react";
import { Drawer, history, Item } from "simon-ui";

export const NavBar = () => {
  return (
    <Drawer variant="permanent">
      <Item icon="home" onClick={() => history.push("/")}>
        Home
      </Item>
      <Item onClick={() => history.push("/test")}>Test</Item>
      <Item onClick={() => history.push("/button")}>Button</Item>
      <Item onClick={() => history.push("/form")}>Form</Item>
      <Item onClick={() => history.push("/modal")}>Modal</Item>
      <Item onClick={() => history.push("/router")}>Router</Item>
    </Drawer>
  );
};
