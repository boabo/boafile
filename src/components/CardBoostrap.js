import React, {useEffect, useState} from 'react';
import AvartarFoto from '../images/avatar.png';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';


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
    contenidoDetalle:{       
      textAlign:'left',     
    },
    Cabecera:{      
        background:'#EAEAEA',
    }
  }));

const CardBoostrap= (props) => {
    const [fotoUsuario, setFotoUsuario] = useState(AvartarFoto);

    const classes = useStyles();
  
  useEffect(() => {    
    if (props.FotoUsuario !== '') {
        setFotoUsuario(props.FotoUsuario);
    }
   }, []);

  return (
     
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                    <div className="card bg-light">                        
                        <div className="card-body pt-0">
                            <div className="row">
                                <div className="col-7">
                                    <h2 className="lead"><b>{props.NombreUsuario}</b></h2>
                                    <p className="text-muted text-sm"><b><i className="fas fa-briefcase"></i> Cargo: </b> {props.Cargo} </p>
                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> <b>Gerencia:</b> {props.Gerencia}</li>
                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> <b>Teléfono #:</b> {props.Telefono}</li>
                                        <li className="small"><span className="fa-li"><i className="fas fa-envelope-square"></i></span> <b>Correo Electrónico:</b> {props.Correo}</li>
                                        <li className="small"><span className="fa-li"><i className="fas fa-table"></i></span> <b>Oficina:</b> {props.Oficina}</li>
                                    </ul>
                                </div>
                                <div className="col-5 text-center">
                                    <img src={fotoUsuario} alt className="img-circle img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="text-right">                            
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<VisibilityIcon />}
                            >
                                Ver Perfil
                            </Button> 
                            </div>
                        </div>
                    </div>                    
                </div>
         

  );
}
export default CardBoostrap;