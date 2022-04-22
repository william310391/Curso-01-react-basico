import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicionado from './components/RenderizadoCondicionado';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponenteStilizados from './components/ComponenteStilizados';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Component msg="soy un componente desde de funcion flecha" />
          <hr />
          <Propiedades cadena="esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "William", correo: "william310391@gmail.com" }}
            funcion={(num)=> num*num}
            elementoReact={<i>Esto es un elemento react</i>}
            componeteReact={ <Component msg="soy un componente react pasado como props" />}
          />
          <hr />
          <Estado/>
          <hr />
          <RenderizadoCondicionado/>
          <hr />
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks titulo="Seguidores"/>
          <hr/>      
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizados/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formularios/>
          <hr/>
          <Estilos/>
          <hr/>
          <ComponenteStilizados/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
      </header>
    </div>
  );
}

export default App;
