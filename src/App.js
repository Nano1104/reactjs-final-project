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


function App() {

  

  return (
    <>
    <CartProvider>
        <BrowserRouter>
        <NavBar />

        <Routes> 
          <Route path="/" element={<ItemListContainer /> } />
          <Route path="/category/:id" element={<ItemListContainer /> } />
          <Route path="/detail/:id" element={<ItemDetailContainer /> } />
          <Route path="/cart" element={<Cart /> } />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
            
        </BrowserRouter> 
    </CartProvider>
    </>
    
  );
}

export default App;
