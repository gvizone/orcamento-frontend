import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
