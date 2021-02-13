import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import cartItems from './cart-items';

import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import reducer from './reducer';

// redux stuff
const inititalStore = {
  cart: cartItems,
  amount: 0,
  total: 0,
};

// store
const store = createStore(reducer, inititalStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
