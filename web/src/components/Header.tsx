import { AppBar, Menu, useDrawer, useMenu } from 'react-mui-kit';
export const Header = () => {
  const { toogleDrawer } = useDrawer();
  const menu = useMenu();
  return (
    <AppBar
      title="React Mui Kit"
      leftElements={
        <Menu
          {...menu}
          icon="menu"
          edge="start"
          items={[
            { label: 'Drawer', onClick: toogleDrawer },
            { label: 'Logout', onClick: () => {} }
          ]}
        />
      }
    />
  );
};
