import React, {useEffect, useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvartarFoto from '../assets/img/avatar.png';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
 /*  root: {
    display: 'flex',   

  }, */
  etiqueta:{
    fontWeight: 'bold',
  },
  avatar: {
    width:200,
    height:200,
  },
  Cabecera:{    
    textAlign: 'left',
    background:'#3949ab',
    color:'#ffffff',
  },
  detalle:{    
    textAlign: 'left',
    background:'#7F85AE',  
  },
  alineacion:{
    marginLeft:'120px'
  },
  textField: {   
    width: 150,
    background:"trans",  
  },
  comunicacion:{        
    background:'#ffffff',    
    padding:'15px',
    color:'#000000',
    /* borderRadius:"2px",
    border:"2px solid black" */
  },

  datosPersonales:{        
    background:'#ffffff', 
    padding:'15px',  
    color:'#000000',
   /*  borderRadius:"2px",    
    border:"2px solid black"  */ 
  },
  
  /* expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
  iconos: {
    color:'white',
  },
  image: {
    width: 128,
    height: 128,
    padding:0,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    padding:0,
  },
  paper: {
  padding: theme.spacing(2),
  maxWidth: '100%',
  marginLeft:0
}, */
 /*  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }, */
/*   appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }, */
 /*  menuButton: {
    marginRight: 36,
  }, */
 /*  hide: {
    display: 'none',
  }, */
  /* drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }, */
  /* drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:'#3f51b5',
  }, */
/*   drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background:'#3f51b5',
  }, */
/*   toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
   
  }, */
  /* content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }, */
  
}));

const ContenidoPerfil = (props) => {
  
 
  const classes = useStyles(); 
  
  const [fotoUsuario, setFotoUsuario] = useState(AvartarFoto);
 
  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    if (props.foto !== '') {
        setFotoUsuario(props.foto);
    }
   }, []);

   const preventDefault = (event) => event.preventDefault();

    return (     
        <Card className={classes.contenido}>          
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" src={fotoUsuario} className={classes.avatar}>            
              </Avatar>
            }            
            titleTypographyProps={{variant:'h2' }}
            title={props.usuario}
            subheaderTypographyProps={{variant:'h3' }}
            subheader= {props.cargo}
            className={classes.Cabecera}
          />  
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.detalle}>
            <Grid container>   
              <Grid item xs={12} sm={6} className={classes.comunicacion}>
                  <Grid item xs={12} sm={12}>
                      <Typography variant="h3" className={classes.alineacion}>
                        Comunicación
                      </Typography>
                  </Grid>                  
                  <Grid container> 
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Teléfono Fijo:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                    <p>{props.telefono}</p>
                    </Grid> 
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Teléfono Celular:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <p>{props.celular}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Email:</p>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <p>{props.email}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>ZIP/Postal:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <p>{props.postal}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Dirección:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <p>{props.direccion}</p>
                    </Grid>
                  </Grid>                
              </Grid>
              <Grid item xs={12} sm={6} className={classes.datosPersonales}>
                  <Grid item xs={12} sm={12} >
                      <Typography variant="h3" className={classes.alineacion}>
                        Datos Personales
                      </Typography>
                  </Grid>                  
                  <Grid container> 
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Fecha de Nacimiento:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                    {/* <p>{props.fecha_nacimiento} */}
                    <TextField
                      id="date"                     
                      type="date" 
                      disabled="true"                    
                      defaultValue={props.fecha_nacimiento}
                      className={classes.textField}                         
                    />
                   {/*  </p> */}
                    </Grid> 
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Estado Civil:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <p>{props.estado_civil}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Ciudad Nacimiento:</p>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <p>{props.ciudad_nacimiento}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Pais Nacimiento:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.etiqueta}>
                    <p>Nacionalidad:</p>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <p>{props.nacionalidad}</p>
                    </Grid>
                  </Grid>                
              </Grid>
            </Grid>          
        </CardContent>       
      </Collapse>
    </Card> 
   
    );
};

export default ContenidoPerfil;
