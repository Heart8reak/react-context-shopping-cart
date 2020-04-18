import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import data from './data'


//components
import Navigation from './components/Navigation';
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

//context
import ProductContext from './context/ProductContext'
import CartContext from './context/CartContext'


function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    setCart([...cart, { ...item, id: Date.now().toString() }]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={cart}>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
