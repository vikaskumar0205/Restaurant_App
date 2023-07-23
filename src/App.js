import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const App = ()=> {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
      <Cart/>
    </React.Fragment>
  );
}

export default App;