import React, {useEffect, useState} from 'react';
import AvartarFoto from '../images/avatar.png'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,   
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
  contenidoDetalle:{       
    textAlign:'left',     
  },
  Cabecera:{      
      background:'#EAEAEA',
  }
}));

const CardBoa = (props) => {

  const [fotoUsuario, setFotoUsuario] = useState(AvartarFoto);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    if (props.FotoUsuario !== '') {
        setFotoUsuario(props.FotoUsuario);
    }
   }, []);

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={fotoUsuario}
        title="Paella dish"
      />

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={fotoUsuario} className={classes.large}>            
          </Avatar>
        }
        action={
            <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={props.NombreUsuario}
        subheader={props.Cargo}
        className={classes.Cabecera}
      />  
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Grid container>                
                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                <p>Teléfono:</p>
                </Grid>

                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                    <p>{props.Telefono}</p>
                </Grid> 

                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                    <p>Correo Electronico:</p>
                </Grid>

                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                    <p>{props.Correo}</p>
                </Grid>               
   
                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                    <p>Oficina:</p>
                </Grid>

                <Grid item xs={6} sm={6} className={classes.contenidoDetalle}>
                    <p>{props.Oficina}</p>
                </Grid>
             
            </Grid>          
        </CardContent>
        <CardActions disableSpacing>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<VisibilityIcon />}
            >
                Ver Perfil
            </Button>        
      </CardActions>
      </Collapse>
    </Card>  
  );
}
export default CardBoa;