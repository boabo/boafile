/*
 * ContentMedicalData.js
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
import CardHeader from '@material-ui/core/CardHeader';
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

function createData(nombre_colegio, tipo_colegio, ultimo_grado, lugar) {
  return { nombre_colegio, tipo_colegio, ultimo_grado, lugar };
}

const rows = [
  createData('Santo Domingo', 'Fiscal', 'Bachillerato', 'Cochabamba-Bolivia'),  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    maxHeight: 600,
  },
  headerCard: {   
    background:"#3949ab",
    color:"#ffffff",
    borderBottom:"2px solid white",
  },
});


const ContentBachillerato = (props) => {

    const classes = useStyles();

    return (     
        <Card > 

            <CardHeader                      
                titleTypographyProps={{variant:'h3' }}
                title="La siguiente información hace referencia a su formación escolar"            
                /* subheaderTypographyProps={{variant:'h3' }}
                subheader="subtitle"   */
                align="center" 
                className={classes.headerCard}        
            /> 

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Nombre Colegio</StyledTableCell>
                        <StyledTableCell align="left">Tipo Colegio</StyledTableCell>
                        <StyledTableCell align="left">Último Grado Vencido</StyledTableCell>
                        <StyledTableCell align="left">Lugar</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.nombre_colegio}
                        </StyledTableCell>                       
                        <StyledTableCell align="left">{row.tipo_colegio}</StyledTableCell>
                        <StyledTableCell align="left">{row.ultimo_grado}</StyledTableCell>
                        <StyledTableCell align="left">{row.lugar}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
   
    );
};

export default ContentBachillerato;
