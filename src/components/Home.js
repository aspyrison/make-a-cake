import React from 'react';
import PocHeader from './PocHeader';
import PocMain from './PocMain';
import PocFooter from './PocFooter';

export default class Home extends React.Component {
    render() {
       return (
          <div className='app'>
            <PocHeader />
            <PocMain />
            <PocFooter />
          </div>
       );
    }
 };