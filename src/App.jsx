import './App.css'
import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Item/ItemListContainer'
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Otros/Error';
import Cart from './components/CartWidget/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Otros/Checkout';


function App() {

  return (
    <>

    <BrowserRouter>

      <CartProvider>

        <NavBar/>

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>

          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

          <Route path='/cart' element={<Cart/>}/>

          <Route path='/checkout' element={<Checkout/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>

      </CartProvider>

    </BrowserRouter>

    </>
  );
};

export default App;