/**
 * Dark BoA theme index file
 * @copyright BoA Boliviana de Aviacion 2020
 * @uthor Favio Figueroa
 */
import { colors } from '@material-ui/core';
import { strongShadows } from '../shadows';

export default {
  name: 'BOA_DARK',
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
    MuiIcon: {
      root: {
        fontFamily: 'Material Icons Outlined',
      },
    },
  },
  palette: {
    type: 'dark',
    action: {
      active: 'rgba(239, 170, 53)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
    },
    background: {
      default: '#1F3656',
      dark: '#1F3656',
      paper: '#1F3656',
    },
    primary: {
      main: 'rgba(239, 170, 53)',
      light: 'rgba(239, 170, 53)',
      dark: 'rgba(239, 170, 53)',
    },
    secondary: {
      main: 'rgba(239, 170, 53)',
      light: 'rgba(239, 170, 53, 0.9)',
      dark: 'rgba(239, 170, 53)',
    },
    text: {
      primary: '#e6e5e8',
      secondary: '#adb0bb',
    },
  },
  shadows: strongShadows,
};
