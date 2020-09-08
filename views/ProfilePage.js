/*
 * ProfilePage.js
 * @copyright Disydes 2020
 * @author Favio Figueroa
 */

import React, {useEffect,useState} from 'react';
import ContenidoPerfil from '../components/ContenidoPerfil';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';
import useJsonStore from '../../_pxp/hooks/useJsonStore';
import { getUrlForView } from '../../_pxp/utils/Common';

const ProfilePage = (props) => {
  
  const { id } = useParams();   

  const { data } = useJsonStore({
    url: 'organigrama/Funcionario/listarFuncionario',
    params: {
      id_funcionario:id,
      start:"0",limit:"50",sort:"PERSON.nombre_completo1",dir:"ASC",groupBy:"nacionalidad",groupDir:"ASC"
    },
  });
 
  const [funcionario, setFuncionario] = useState();
    // when the data has gotten an resp
    useEffect(() => {
      if (data) {
        setFuncionario(data.datos[0]);
      }
      console.log("aqui llega el dato",data);
    }, [data]);
   
    const zipPostal = '';

    return (
       <div>
        {funcionario && (<Menu 
        id_funcionario={id}
        foto={getUrlForView({
            nameFile: funcionario?.nombre_archivo,
            folder: funcionario?.folder,
            extension: funcionario?.extension,
            // size: 'pequeno',
          })} 
        usuario={funcionario.desc_person} 
        contenido={
                    <ContenidoPerfil usuario={funcionario.desc_person} 
                                     foto={getUrlForView({
                                                          nameFile: funcionario?.nombre_archivo,
                                                          folder: funcionario?.folder,
                                                          extension: funcionario?.extension,
                                                            // size: 'pequeno',
                                                          })} 
                                      cargo={funcionario.nombre_cargo} 
                                      email={funcionario.correo} 
                                      postal={zipPostal} 
                                      direccion={funcionario.direccion} 
                                      celular={funcionario.celular1} 
                                      telefono={funcionario.telefono1}

                                      fecha_nacimiento={funcionario.fecha_nacimiento}
                                      estado_civil={funcionario.estado_civil}
                                      ciudad_nacimiento={funcionario.nombre_lugar}
                                      nacionalidad={funcionario.nacionalidad}
                                      
                                      />}/>)}
      </div> 
      
    );
};

export default ProfilePage;
