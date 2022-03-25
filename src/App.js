/* { Component } para los componentes de clase */
import React, { Component } from 'react';
import './App.css';

/* importamos los componentes */
import NavBar from './components/organisms/NavBar';
import ItemListContainer from './components/organisms/ItemListContainer';
import ItemCount from './components/molecules/ItemCount';

const stock=5;
const initial=1;
const onAdd=(cantidad)=>{
  if(cantidad==0){
    alert("Lo siento no tienes stock que comprar");
  }
}

function App() {
  return (
    <div>
    <header>
      <NavBar />
      <ItemListContainer
        
      />   
      <ItemCount
        stock={stock}
        initial={initial}
        onAdd={onAdd}
      />
    </header>
    </div>    
  );
}

export default App;
