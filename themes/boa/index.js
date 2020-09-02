/**
 * Boa theme index file
 * @copyright Boliviana de Aviacion 2020
 * @uthor Favio Figueroa
 */
import { strongShadows } from '../shadows';

export default {
  name: 'BOA',
  palette: {
    type: 'light',
    action: {
      active: 'rgba(239, 170, 53)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
    },
    background: {
      default: '#222431',
      dark: '#222431',
      paper: '#2a2d3d',
    },
    primary: {
      main: '#1F3656',
    },
    secondary: {
      main: '#f99201',
    },
    text: {
      primary: '#f6f5f8',
      secondary: '#9699a4',
    },
  },
  shadows: strongShadows,
};
