/* importamos bootstrap y los estilos css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* importamos los componentes */
import Home from "./components/Home/Home.jsx";
import ErrorRoute from './components/ErrorRoute/ErrorRoute'
import ItemListContainer from './components/ItemListContianer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './components/Context/CartContext';
import { NavBarProvider } from './components/NavBarContext/NarBarContex'


function App() {

  /* "homepage": "https://Nano1104.github.io/Joyas-Gil", */

  return (
    <>
    <CartProvider>
      <NavBarProvider>
          <BrowserRouter>
        
            <Routes> 
              <Route path="/" element={<Home />} />  
              <Route path="/productos" element={<ItemListContainer /> } />
              <Route path="/category/:id" element={<ItemListContainer /> } />
              <Route path="/item/:id" element={<ItemDetailContainer /> } />
              <Route path="/cart" element={<Cart /> } />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<ErrorRoute />} />
            </Routes>
              
          </BrowserRouter> 
      </NavBarProvider>
    </CartProvider>
    </>
    
  );
}

export default App;
