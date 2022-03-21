/* { Component } para los componentes de clase */
import React, { Component } from 'react';
import './App.css';

/* importamos los componentes */
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const arrayProductos=["Anillos", "Aros", "Cadenas", "Pulseras"]

function App() {
  return (
    <div>
    <header>
      <NavBar />
      <ItemListContainer
        anillos={arrayProductos[0]}
        aros={arrayProductos[1]}
        cadenas={arrayProductos[2]}
        pulseras={arrayProductos[3]}
      />   
      <ItemCount />
    </header>
    </div>    
  );
}

export default App;
