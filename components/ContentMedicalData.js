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

function createData(nombre, direccion, telefonoFijo, telefonoCelular, direccionTrabajo, telefonoTrabajo, relacion) {
  return { nombre, direccion, telefonoFijo, telefonoCelular, direccionTrabajo, telefonoTrabajo, relacion };
}

const rows = [
  createData('MARCO ANTONIO GARCIA ARCE', 'AV. KILLMAN N°892', '42876176', '78652781', 'AV.AYACUCHO ESQ JORDAN','43829837','PADRE'),  
];

function createDataMedico(medicoCabecera, direccionConsultorio, telefonoFijo, telefonoCelular, alergias, medicamentos, factorSanguineo, rh_sanguineo) {
                 return { medicoCabecera, direccionConsultorio, telefonoFijo, telefonoCelular, alergias, medicamentos, factorSanguineo, rh_sanguineo };
}

const medicoData = [
  createDataMedico('JOSE VARGAR ARCE', 'AV. AYACUCHO N°992', '45676387', '72273890', 'NINGUNO','PARACETAMOL','O','+'),  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    maxHeight: 600,
  },
  headerCard: {
    color:"red",
  }
});


const ContentMedicalData = (props) => {

    const classes = useStyles();

    return (     
        <Card > 

          <CardHeader                      
            titleTypographyProps={{variant:'h3' }}
            title="CONTACTO DE EMERGENCIA"            
            /* subheaderTypographyProps={{variant:'h3' }}
            subheader="subtitle"   */
            align="center"
            className={classes.headerCard}         
          /> 
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Nombre</StyledTableCell>
                        <StyledTableCell align="left">Dirección</StyledTableCell>
                        <StyledTableCell align="left">Teléfono Fijo</StyledTableCell>
                        <StyledTableCell align="left">Teléfono Celular</StyledTableCell>
                        <StyledTableCell align="left">Dirección Trabajo</StyledTableCell>
                        <StyledTableCell align="left">Teléfono Trabajo</StyledTableCell>
                        <StyledTableCell align="left">Relación</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.nombre}
                        </StyledTableCell>                       
                        <StyledTableCell align="left">{row.direccion}</StyledTableCell>
                        <StyledTableCell align="left">{row.telefonoFijo}</StyledTableCell>
                        <StyledTableCell align="left">{row.telefonoCelular}</StyledTableCell>
                        <StyledTableCell align="left">{row.direccionTrabajo}</StyledTableCell>
                        <StyledTableCell align="left">{row.telefonoTrabajo}</StyledTableCell>
                        <StyledTableCell align="left">{row.relacion}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <CardHeader                      
            titleTypographyProps={{variant:'h3' }}
            title="MEDICO CABECERA"            
            /* subheaderTypographyProps={{variant:'h3' }}
            subheader="subtitle"   */
            align="center"
            className={classes.headerCard}         
          />

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Medico Cabecera</StyledTableCell>
                        <StyledTableCell align="left">Dirección Consultorio</StyledTableCell>
                        <StyledTableCell align="left">Teléfono Fijo</StyledTableCell>
                        <StyledTableCell align="left">Teléfono Celular</StyledTableCell>
                        <StyledTableCell align="left">Alergias</StyledTableCell>
                        <StyledTableCell align="left">Medicamentos</StyledTableCell>
                        <StyledTableCell align="left">Factor Sanguineo</StyledTableCell>
                        <StyledTableCell align="left">RH Sanguineo</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {medicoData.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.medicoCabecera}
                        </StyledTableCell>                    
                        <StyledTableCell align="left">{row.direccionConsultorio}</StyledTableCell>
                        <StyledTableCell align="left">{row.telefonoFijo}</StyledTableCell>
                        <StyledTableCell align="left">{row.telefonoCelular}</StyledTableCell>
                        <StyledTableCell align="left">{row.alergias}</StyledTableCell>
                        <StyledTableCell align="left">{row.medicamentos}</StyledTableCell>
                        <StyledTableCell align="left">{row.factorSanguineo}</StyledTableCell>
                        <StyledTableCell align="left">{row.rh_sanguineo}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>





        </Card>
   
    );
};

export default ContentMedicalData;
