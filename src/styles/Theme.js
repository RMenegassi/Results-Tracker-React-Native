import React from 'react';

import {ThemeProvider} from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    turquese: '#1abc9c',
    turqueseDark: '#16a085',
    green: '#2ecc71',
    greenDark: '#27ae60',
    blue: '#4C63DD',
    blueDark: '#2980b9',
    violet: '#9b59b6',
    violetDark: '#8e44ad',
    yellow: '#CFC58E',
    yellowDark: '#f39c12',
    orange: '#e67e22',
    orangeDark: '#d35400',
    red: '#CE6B6B',
    redDark: '#c0392b',
    champagne: '#ecf0f1',
    champagneDark: '#bdc3c7',
    metal: '#95a5a6',
    metalDark: '#7f8c8d',
    asphalt: '#34495e',
    asphaltDark: '#2c3e50',
    carbon: '#555459',
    carbonDark: '#3b3a3e',
    primary: '#3498db',
    secondary: '#2ecc71',
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#34495e',
    button: '#2A2828',
    background: '#2D3957',
  },
};

export function Theme({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
