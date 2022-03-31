import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
/* importamos bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* importamos los componentes */
import NavBar from './components/organisms/NavBar';
import ItemListContainer from './components/organisms/ItemListContainer';
import ItemCount from './components/molecules/ItemCount';
import ItemDetailContainer from './components/organisms/ItemDetailContainer';
import ErrorComponente from './components/molecules/ErrorComponente'

function App() {
  return (
    <div>
    <header>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer /> } />
        <Route path="/category/:id" element={<ItemListContainer /> } />
        <Route path="/detail/:id" element={<ItemDetailContainer /> } />
      </Routes>
      {/* <ItemCount stock={stock}
                initial={initial}
                onAdd={onAdd} /> */}
      
      </BrowserRouter>

      
    </header>
    </div>    
  );
}

export default App;
