import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {useState} from "react"

/* importamos bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* importamos los componentes */
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContianer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './components/Context/CartContext';
import {NavBarProvider} from './components/NavBarContext/NarBarContex'

function App() {

  

  return (
    <>
    <CartProvider>
    <NavBarProvider>
        <BrowserRouter>
      
          <Routes> 
            <Route path="/" element={<NavBar />} />  
            <Route path="/productos" element={<ItemListContainer /> } />
            <Route path="/category/:id" element={<ItemListContainer /> } />
            <Route path="/item/:id" element={<ItemDetailContainer /> } />
            <Route path="/cart" element={<Cart /> } />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/" element={<Error />} */}
          </Routes>
            
        </BrowserRouter> 
    </NavBarProvider>
    </CartProvider>
    </>
    
  );
}

export default App;
