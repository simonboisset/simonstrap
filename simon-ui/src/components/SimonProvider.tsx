import { css, CSSInterpolation } from '@emotion/css';
import { ThemeOptions } from '@material-ui/core';
import { ZIndex } from '@material-ui/core/styles/zIndex';
import React from 'react';
import { history, useURL } from 'react-router-url';
import { Child } from './GridItem';
import { ThemeProvider } from './ThemeProvider';
const SimonContext = React.createContext(
  {} as {
    drawer?: boolean;
    setDrawer: (open: boolean) => void;
    modal?: string;
    setModal: (active?: string) => void;
    components: ComponentsTheme;
    theme: Theme;
  }
);

export type ComponentsTheme = {
  drawer: { z?: DrawerZindex; variant?: DrawerVariant; position?: DrawerPosition; width: number };
};
export type Theme = ThemeOptions & { components: ComponentsTheme };
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
export type DrawerZindex = 'on' | 'under';
export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type SimonProviderProps = {
  theme: Theme;
  children?: Child;
};

export const SimonProvider = ({ children, theme }: SimonProviderProps) => {
  const [drawer, setDrawer] = React.useState(false);
  const [modal, setModal] = React.useState<string>();
  let { components, ...MUITheme } = theme;

  const zIndex: ZIndex = {
    appBar: components.drawer.z === 'on' ? 1100 : 1210,
    mobileStepper: 1000,
    snackbar: 1400,
    speedDial: 1050,
    drawer: 1200,
    tooltip: 1500,
    modal: 1300,
  };
  MUITheme.zIndex = zIndex;
  return (
    <ThemeProvider theme={MUITheme}>
      <SimonContext.Provider value={{ drawer, modal, setDrawer, setModal, components, theme }}>
        {children}
      </SimonContext.Provider>
    </ThemeProvider>
  );
};

export const useDrawer = () => {
  const { drawer, setDrawer, components } = React.useContext(SimonContext);

  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };
  const toogleDrawer = () => {
    setDrawer(!drawer);
  };
  return {
    open: drawer,
    closeDrawer,
    openDrawer,
    toogleDrawer,
    ...components.drawer,
  };
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
const useStyle = (fct: (thm: Theme) => CSSInterpolation) => {
  const { theme } = React.useContext(SimonContext);
  return css(fct(theme));
};
export const useTheme = () => {
  const { theme } = React.useContext(SimonContext);
  return theme;
};
export const makeCSS = (fct: (thm: Theme) => CSSInterpolation) => {
  return () => useStyle(fct);
};
