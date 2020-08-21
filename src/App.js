import React from 'react';
import './App.css';
import CardBoa from './components/Card';
import CardBoostrap from './components/CardBoostrap';

function App() {
  const nombre_usuario = 'Jose Perez';
  const cargo = 'Desarrollador Sistemas';
  const telefono = '546342342';
  const correo = 'correo@boa.bo';
  const oficina = 'Cochabamba';
  const gerencia = 'Tecnologias de Informacion';
  const foto = 'https://competenciasdelsiglo21.com/wp-content/uploads/2019/04/disc-perfil-c-azul-948x640.jpg';

  const nombre_usuario2 = 'Mario Lopez';
  const cargo2 = 'Desarrollador Sistemas';
  const telefono2 = '75345345';
  const correo2 = 'mario.lopez@boa.bo';
  const oficina2 = 'Santa cruz';
  const gerencia2 = 'Tecnologias de Informacion';
  const foto2 = 'https://www.trecebits.com/wp-content/uploads/2017/05/snapchat-comun.jpg';

  const nombre_usuario3 = 'Pedro Arce';
  const cargo3 = 'Gerente General';
  const telefono3 = '654872912';
  const correo3 = 'predro.arce@boa.bo';  
  const gerencia3 = 'Tecnologias de Informacion';
  const foto3 = 'https://competenciasdelsiglo21.com/wp-content/uploads/2019/04/disc-perfil-c-azul-948x640.jpg';



  return (
    <div className="App">
<h1>Materialize UI</h1>
<div className="card card-solid">
        <div className="card-body pb-0">
            <div className="row d-flex align-items-stretch">
      
      
      <CardBoa
      NombreUsuario={nombre_usuario}
      Cargo={cargo}
      Telefono={telefono}
      Correo={correo}     
      Gerencia={gerencia2}
      Oficina={oficina}
      FotoUsuario={foto}
      />

<CardBoa
      NombreUsuario={nombre_usuario2}
      Cargo={cargo2}
      Telefono={telefono2}
      Correo={correo2}     
      Gerencia={gerencia2}
      Oficina={oficina2}
      FotoUsuario={foto2}
      />

<CardBoa
      NombreUsuario={nombre_usuario}
      Cargo={cargo}
      Telefono={telefono}
      Correo={correo}      
      Gerencia={gerencia}
      Oficina={oficina2}
      FotoUsuario={foto}
      />

</div>
        </div>
    </div>
      <h1>Bootstrap 4</h1>
     <div className="card card-solid">
        <div className="card-body pb-0">
            <div className="row d-flex align-items-stretch">
              <CardBoostrap
              NombreUsuario={nombre_usuario2}
              Cargo={cargo2}
              Telefono={telefono2}
              Correo={correo2}              
              Gerencia={gerencia}
              Oficina={oficina}
              FotoUsuario={foto2}
              />

              <CardBoostrap
              NombreUsuario={nombre_usuario2}
              Cargo={cargo2}
              Telefono={telefono2}
              Correo={correo2}              
              Gerencia={gerencia}
              Oficina={oficina}
              FotoUsuario={foto2}
              />

              <CardBoostrap
              NombreUsuario={nombre_usuario2}
              Cargo={cargo2}
              Telefono={telefono2}
              Correo={correo2}              
              Gerencia={gerencia}
              Oficina={oficina}
              FotoUsuario={foto2}
              />
              

         </div>
        </div>
    </div>
    </div>
  );
}

export default App;
