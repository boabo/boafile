/*
 * ContentRelationShip.js
 * @copyright BoA 2020
 * @author Ismael Valdivia
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tituloCabecera: {
    color:'white',
    padding:'25px',
    background:'#3949ab',
  },
  subtituloCabecera:{
    color:'red',
    padding:'25px',
    border:'2px solid #3949ab'
  },
  tituloContenido:{
    background:'#3949ab',
    padding:'10px',
    color:'white',
  },
  paper: {
    padding: theme.spacing(2),
    /* margin: 'auto', */
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function createData(nombre, apellido_paterno, apellido_materno, ci, finado, benef, relacion) {
  return { nombre, apellido_paterno, apellido_materno, ci, finado, benef, relacion };
}

const rows = [
  createData('MARCO', 'GARCIA', 'ANDRADE', '564563453', 'NO','SI','PADRE'),  
  createData('MARIA', 'ARCE', 'AGUILAR', '564765656', 'NO','SI','MADRE'),  
  createData('TERESA', 'GARCIA', 'ARCE', '434543543', 'NO','NO','HERMANA'),  
  createData('ELIANA', 'GARCIA', 'ARCE', '675675456', 'NO','NO','HERMANA'),  
  createData('MARIO', 'GARCIA', 'ANDRADE', '675675456', 'NO','NO','TIO'),  
  createData('ANDREA', 'LOPEZ', 'GUITIERREZ', '234212321', 'NO','NO','TIA'),  
 ];




const ContentRelationship = (props) => {

    const classes = useStyles();

    return (     
      <div className={classes.root}>
      
        <Paper className={classes.tituloCabecera}>
          <Typography variant="h3">
              La siguiente informacion hace referencia a su declaracion jurada de parentesco, la seleccion de beneficiarios se la debe realizar unicamente en coordinación con RRHH previa presentación de documentación solicitada
          </Typography>
        </Paper>
      <br/>

      <Paper className={classes.subtituloCabecera}>
          <Typography variant="h5">
              Yo {props.usuario} con C.I. N° {props.ci}, estado civil {props.estado_civil} y con domicilio en {props.domicilio} declaro que no tengo ningún parentesco hasta el cuarto grado de consanguinidad o segundo de afinidad, con otros funcionarios de Boliviana de Aviación - BoA Asi mismo, detallo a continuación las relaciones de parentesco hasta cuarto grado de consanguinidad y segundo de afinidad:
          </Typography>
        </Paper>
      <br/>

        <Paper className={classes.tituloContenido}>
          <Typography variant="h6" align="center">
              REGISTRO FAMILIARES
          </Typography>
        </Paper>
        <br/>

      <Grid container spacing={3}> 

      {rows.map((row) => (
        <Grid item xs={12} sm={3} >
        <Paper className={classes.paper}>
          <Grid container spacing={2}>         
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Parentesco:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.relacion}
                      </Typography>
                    </Grid> 
                  </Grid> 

                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Nombre:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.nombre}
                      </Typography>
                    </Grid> 
                  </Grid>
                  
                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Apellido Paterno:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.apellido_paterno}
                      </Typography>
                    </Grid> 
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Apellido Materno:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.apellido_materno}
                      </Typography>
                    </Grid> 
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Nro C.I:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.ci}
                      </Typography>
                    </Grid> 
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Finado:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.finado}
                      </Typography>
                    </Grid> 
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        Benef:
                      </Typography>
                    </Grid> 
                    <Grid item xs={6} sm={6} >
                      <Typography gutterBottom>
                        {row.benef}
                      </Typography>
                    </Grid> 
                  </Grid>

                </Grid>            
              </Grid>            
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      ))}
       </Grid>
    </div>
   
    );
};

export default ContentRelationship;
