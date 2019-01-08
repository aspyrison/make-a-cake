import React, { Component } from 'react';
import PocHeader from './components/PocHeader';
import PocMain from './components/PocMain';
import PocFooter from './components/PocFooter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='app'>
          <PocHeader />
          <PocMain />
          <PocFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
