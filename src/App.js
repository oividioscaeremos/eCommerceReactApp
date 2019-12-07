import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const TShirtsPage = () => (
  <div>
    <h1>SELAM CANIM</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component ={HomePage}/>
      <Route path='/shop/tshirts' component={TShirtsPage}/>
    </div>
  );
}

export default App;
