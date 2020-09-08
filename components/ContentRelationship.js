/*
 * ContentRelationShip.js
 * @copyright BoA 2020
 * @author Ismael Valdivia
 */

import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GroupIcon from '@material-ui/icons/Group';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3949ab',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(parentesco, nombres, apellidoPaterno, apellidoMaterno, Ci, Finado, Benef) {
  return { parentesco, nombres, apellidoPaterno, apellidoMaterno, Ci, Finado, Benef };
}

const rows = [
  createData('Bisabuelo(a)', 'Mario', 'Vargas', 'Gutierrez', '8728190','No','No'),
  createData('Primo', 'Alex', 'Arce', 'Cruz','82917283','No','No'),
  createData('Prima','Maria', 'Lopez', 'Vargas','21341221','No','No'),
  createData('Tio','Jose Luis', 'Andrade', 'Vargas','21341221','No','No'),
  createData('Prima','Maria', 'Lopez', 'Vargas','21341221','No','No'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const ContentRelationship = (props) => {

    const classes = useStyles();

    return (     
        <Card >          
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Parentesco</StyledTableCell>
                        <StyledTableCell align="left">Nombres</StyledTableCell>
                        <StyledTableCell align="left">Apellido Paterno</StyledTableCell>
                        <StyledTableCell align="left">Apellido Materno</StyledTableCell>
                        <StyledTableCell align="left">Nro CI</StyledTableCell>
                        <StyledTableCell align="left">Finado</StyledTableCell>
                        <StyledTableCell align="left">Benef</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.parentesco}
                        </StyledTableCell>                       
                        <StyledTableCell align="left">{row.nombres}</StyledTableCell>
                        <StyledTableCell align="left">{row.apellidoPaterno}</StyledTableCell>
                        <StyledTableCell align="left">{row.apellidoMaterno}</StyledTableCell>
                        <StyledTableCell align="left">{row.Ci}</StyledTableCell>
                        <StyledTableCell align="left">{row.Finado}</StyledTableCell>
                        <StyledTableCell align="left">{row.Benef}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
   
    );
};

export default ContentRelationship;
