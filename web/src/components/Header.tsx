import React from "react";
import { AppBar, IconButton } from "simon-ui";
export const Header = () => {
  return (
    <AppBar
      leftElements={
        <IconButton edge="start" color="inherit">
          menu
        </IconButton>
      }
      rigthElements={
        <IconButton edge="end" color="inherit">
          home
        </IconButton>
      }
      title="Simon UI"
    />
  );
};
