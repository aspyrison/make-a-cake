import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
