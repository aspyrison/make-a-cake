import React, { Component } from 'react';
import PocHeader from './components/PocHeader';
import PocMain from './components/PocMain';
import PocFooter from './components/PocFooter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <PocHeader />
        <PocMain />
        <PocFooter />
      </div>
    );
  }
}

export default App;
