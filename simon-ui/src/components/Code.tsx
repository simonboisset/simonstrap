import { makeStyles } from '@material-ui/core';
import Prism from 'prismjs';
import React from 'react';
type Language = 'javascript';

export const Code = ({ children, language }: { children: string; language: Language }) => {
  const classes = useStyles();
  return <div className={classes.code}>{Prism.highlight(children, Prism.languages[language], language)}</div>;
};
const useStyles = makeStyles(({ shape }) => ({
  code: {
    borderRadius: shape.borderRadius,
  },
}));
