/*
 * Parentesco.js
 * @copyright BoA 2020
 * @author Ismael Valdivia
 */
import React,{useEffect,useState} from 'react';
import Menu from '../components/Menu';
import ContentMedicalData from '../components/ContentMedicalData';
import { useParams } from 'react-router-dom';
import useJsonStore from '../../_pxp/hooks/useJsonStore';
import { getUrlForView } from '../../_pxp/utils/Common';


const MedicalData = (props) => {

    const { id } = useParams();  
    console.log("aqui llega id dle funcionario",id);
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
      console.log("aqui llega el dato medical",data);
    }, [data]);
  
      return (
        <div>
        {funcionario && (
        <Menu id_funcionario={id} 
            foto={getUrlForView({
             nameFile: funcionario?.nombre_archivo,
             folder: funcionario?.folder,
             extension: funcionario?.extension,
             // size: 'pequeno',
           })}  
           usuario={funcionario.desc_person} 
           contenido={<ContentMedicalData/>}/> )}
        </div>

       
      );
};

export default MedicalData;
