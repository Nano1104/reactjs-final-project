/* { Component } para los componentes de clase */
import React, { Component } from 'react';
import './App.css';

/* importamos los componentes */
import NavBar from './components/organisms/NavBar';
import ItemListContainer from './components/organisms/ItemListContainer';
import ItemCount from './components/molecules/ItemCount';

function App() {
  return (
    <div>
    <header>
      <NavBar />
      <ItemListContainer
        
      />   
      <ItemCount />
    </header>
    </div>    
  );
}

export default App;
