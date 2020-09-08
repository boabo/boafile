/**
 * Menu.js
 * @copyright BoA 2020
 * @author Ismael Valdivia
 */

import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AvartarFoto from '../assets/img/avatar.png';
import PeopleIcon from '@material-ui/icons/People';
import AttachmentIcon from '@material-ui/icons/Attachment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import WorkIcon from '@material-ui/icons/Work';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  menuMainProfile: {
    display: 'flex',   

  },
  grow: {
    flexGrow: 1,
  },
  hover:{
     color:"white",
    '&:hover': {
      background: "#00A9B7",      
   },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  etiqueta:{
    fontWeight: 'bold',
  },
  avatar: {
    width:200,
    height:200,
  },
  Cabecera:{    
    textAlign: 'left',
    background:'linear-gradient(45deg, #deefff 0%,#98bede 100%)',
  },
  detalle:{    
    textAlign: 'left',
    background:'linear-gradient(45deg, #d2ebf9 0%,#feffff 100%)',
  },
  
  expand: {
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
    minWidth:60,
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
},
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:'#3f51b5',
  },
  drawerClose: {
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
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

const Menu = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const [fotoUsuario, setFotoUsuario] = useState(AvartarFoto);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  useEffect(() => {
    if (props.foto !== '') {
        setFotoUsuario(props.foto);
    }
   }, []);

   const preventDefault = (event) => event.preventDefault();

    return (
      <div className={classes.menuMainProfile}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > 

            <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}
                >
                <MenuIcon />
              </IconButton>
              <Typography variant="h3" color="inherit" className={classes.grow}>
                <Button color="inherit"  className={classes.hover}
                  onClick={() => {
                    history.push("/profiles/");
                  }}
                ><ListItemIcon><HomeIcon style={{ color: 'white' }}/></ListItemIcon>Inicio</Button>
              </Typography>
              <Avatar aria-label="recipe" src={fotoUsuario} >
              </Avatar>
              <Typography variant="h5" noWrap>
                &nbsp; {props.usuario}
              </Typography>
            </Toolbar>
        
        {/* <Toolbar>    
          
          
          <Button color="inherit">Login</Button>
        </Toolbar> */}
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h2" noWrap style={{ color: 'white' }}>
            Perfil de Usuario
          </Typography>
          <IconButton onClick={handleDrawerClose} className={classes.hover}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{ color: 'white' }}>

            <Tooltip title="Perfil" placement="right">
              <ListItem button key="Perfil" onClick={() => {
                history.push(`/profiles/${props.id_funcionario}`); }} className={classes.hover}>
                <ListItemIcon className={classes.iconos}><FaceIcon /></ListItemIcon>
                <ListItemText primary="Perfil" />              
              </ListItem>
            </Tooltip>         
          
            <Tooltip title="Declaración Parentesco" placement="right">
              <ListItem button key="Declaración Parentesco" onClick={() => {
                history.push(`/profiles/parentescos/${props.id_funcionario}`); }} className={classes.hover}>
                <ListItemIcon className={classes.iconos}><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Declaración Parentesco" />
              </ListItem>
            </Tooltip>  

            {/* <Tooltip title="Documentos Personales" placement="right">
              <ListItem button key="Documentos Personales" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><AttachmentIcon /></ListItemIcon>
                <ListItemText primary="Documentos Personales" />
              </ListItem>
            </Tooltip>   */}

            <Tooltip title="Datos Médicos" placement="right">
              <ListItem button key="Datos Médicos" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><LocalHospitalIcon /></ListItemIcon>
                <ListItemText primary="Datos Médicos" />
              </ListItem>
            </Tooltip>  

            <Tooltip title="Bachillerato" placement="right">
              <ListItem button key="Bachillerato" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><AssignmentIndIcon /></ListItemIcon>
                <ListItemText primary="Bachillerato" />
              </ListItem>
            </Tooltip>
       
            <Tooltip title="Idiomas" placement="right">
              <ListItem button key="Idiomas" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><GTranslateIcon /></ListItemIcon>
                <ListItemText primary="Idiomas" />
              </ListItem>
            </Tooltip>
            
            <Tooltip title="Experiencia Laboral" placement="right">
              <ListItem button key="Experiencia Laboral" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><TrendingUpIcon /></ListItemIcon>
                <ListItemText primary="Experiencia Laboral" />
              </ListItem>
            </Tooltip>

            <Tooltip title="Tallas" placement="right">
              <ListItem button key="Tallas" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><AccessibilityIcon /></ListItemIcon>
                <ListItemText primary="Tallas" />
              </ListItem>
            </Tooltip>

            <Tooltip title="Laborales BoA" placement="right">
              <ListItem button key="Laborales BoA" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><WorkIcon /></ListItemIcon>
                <ListItemText primary="Laborales BoA" />
              </ListItem>
            </Tooltip>
 
           {/*  <Tooltip title="Datos Personales" placement="right">
              <ListItem button key="Datos Personales" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><PermContactCalendarIcon /></ListItemIcon>
                <ListItemText primary="Datos Personales" />
              </ListItem>
            </Tooltip> */}

            <Tooltip title="Titulos" placement="right">
              <ListItem button key="Titulos" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><AssignmentIcon  /></ListItemIcon>
                <ListItemText primary="Titulos" />
              </ListItem>
            </Tooltip>

            <Tooltip title="Beneficiarios" placement="right">
              <ListItem button key="Beneficiarios" className={classes.hover}>
                <ListItemIcon className={classes.iconos}><PeopleAltIcon  /></ListItemIcon>
                <ListItemText primary="Beneficiarios" />
              </ListItem>
            </Tooltip>      
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

            {props.contenido}

      </main>
    </div>
    );
};

export default Menu;
