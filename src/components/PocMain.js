import React from 'react';
import PocIntro from './PocIntro';
import WhatIsPoc from './WhatIsPoc';
import PocCarousel from './PocCarousel';

export default class PocMain extends React.Component {
    render() {
       return (
          <div>
            <WhatIsPoc />
            <PocCarousel />
            <PocIntro />
          </div>
       );
    }
 };