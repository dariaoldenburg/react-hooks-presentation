import React from 'react';

export const themes = {
  light: {
    primaryColor: '#fff',
    secondaryColor: '#ff6961'
  },
  dark: {
    primaryColor: '#ff6961',
    secondaryColor: '#fff'
  }
};

export const ThemeContext = React.createContext(themes.light);
