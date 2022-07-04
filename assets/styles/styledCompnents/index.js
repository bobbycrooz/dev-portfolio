import { createGlobalStyle } from 'styled-components';


// global config for styled components
const GlobalStyle = createGlobalStyle`

  

`;

export const appThemeLight = {
  pri: {
    main: '#4285F4',
    900: '#010A18',
    800: '#041E48',
    700: '#073278',
    600: '#0A46A9',
    500: '#0D5AD9',
    400: '#5692F5',
    300: '#87B1F8',
    200: '#B7D0FB',
    100: '##E7EFFE',
    50: '##ECF3FE'
  },

  sec: {
    main: '#F44285',
    900: '#780732',
    800: '#A90A46',
    700: '#D90D5A',
    600: '#F22673',
    500: '#DC3B78',
    400: '#F55692',
    300: '#F887B1',
    200: '#FBB7D0',
    100: '#FEE7EF',
    50: '#FEECF3'
  },
  err: {
    main: '#FD0404',
    bg: '#FE9A9A',
    dk: '#CA0202'
  },

  warn: {
    main: '#FBBC05',
    dk: '#F19E13',
    bg: '#FDE49B'
  },

  suc: {
    main: '#34A853',
    dk: '#4A925D',
    bg: '#96DEA9'
  }
};

export default GlobalStyle;
