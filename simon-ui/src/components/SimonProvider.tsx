import { ThemeOptions } from '@material-ui/core';
import React from 'react';
import { history, useURL } from 'react-router-url';
import { ThemeProvider } from './ThemeProvider';
const SimonContext = React.createContext(
  {} as {
    drawer?: boolean;
    setDrawer: (open: boolean) => void;
    modal?: string;
    setModal: (active?: string) => void;
  }
);
export type Theme = ThemeOptions;
export const SimonProvider: React.FC<{ theme: Theme }> = ({ children, theme }) => {
  const [drawer, setDrawer] = React.useState(false);
  const [modal, setModal] = React.useState<string>();
  return (
    <ThemeProvider theme={theme}>
      <SimonContext.Provider value={{ drawer, modal, setDrawer, setModal }}>{children}</SimonContext.Provider>
    </ThemeProvider>
  );
};
export const useDrawer = () => {
  const { drawer, setDrawer } = React.useContext(SimonContext);

  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };
  const toogleDrawer = () => {
    setDrawer(!drawer);
  };
  return { open: drawer, closeDrawer, openDrawer, toogleDrawer };
};
export const useModal = (name: string) => {
  const { modal, setModal } = React.useContext(SimonContext);

  const openModal = () => {
    setModal(name);
  };
  const closeModal = () => {
    setModal();
  };
  return { open: modal === name, openModal, closeModal, setModal };
};
export const useModalURL = (pathName: string) => {
  const { path } = useURL();

  const openModal = () => {
    history.push(pathName);
  };
  const closeModal = () => {
    const nextPath = path.split('/').slice(0, -1).join('/');

    history.push(nextPath);
  };
  return { open: path === pathName, openModal, closeModal };
};
