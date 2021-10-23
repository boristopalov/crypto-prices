import React, { Component } from 'react';
import Nav from './Nav';
import PriceCard from './PriceCard';
import {
  Switch,
  Route,
} from "react-router-dom";
import './style.css';


class App extends Component {
  render() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/btc" render={ () => <PriceCard coin="BTC" />} />
        <Route path="/eth" render={ () => <PriceCard coin="ETH" />} />
      </Switch>
    </div>
  );  
  }
}

export default App;
 