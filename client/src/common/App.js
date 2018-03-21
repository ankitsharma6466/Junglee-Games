import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import './app.css';

import Home from "../views/home"
import Payment from "../views/payment"
import NotFound from "../views/notfound"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/payment" component={Payment}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
