/**
 * cardFuncionarioStyle.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */
import { makeStyles } from '@material-ui/core/styles';

const useStylesCardFuncionario = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 88,
    width: 88,
  },
  contentMenuButtons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default useStylesCardFuncionario;
