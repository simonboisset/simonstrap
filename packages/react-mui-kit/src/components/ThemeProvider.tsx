import { createMuiTheme, CssBaseline, ThemeOptions, ThemeProvider as ThemeProviderUI } from '@material-ui/core';
import React from 'react';

export const ThemeProvider: React.FC<{ theme: ThemeOptions }> = ({ children, theme }) => {
  const themeUI = createMuiTheme(theme);
  return (
    <ThemeProviderUI theme={themeUI}>
      <CssBaseline /> {children}
    </ThemeProviderUI>
  );
};
