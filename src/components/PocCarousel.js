import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Card from 'material-ui/Card';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class PocCarousel extends React.Component {
    render() {
       return (
         <div style={{display:'flex'}}>
         <Carousel autoPlay={true} showArrows={true} infiniteLoop={true}>
            <Card>
               <img className='carousel-image' src={require('../assets/1.png')} alt='Make a Cake - 1'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/2.png')} alt='Make a Cake - 2'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/4.png')} alt='Make a Cake - 4'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/5.png')} alt='Make a Cake - 5'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/6.png')} alt='Make a Cake - 6'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/7.png')} alt='Make a Cake - 7'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/8.png')} alt='Make a Cake - 8'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/9.png')} alt='Make a Cake - 9'/>
            </Card>
            <Card>
               <img className='carousel-image' src={require('../assets/10.png')} alt='Make a Cake - 10'/>
            </Card>
         </Carousel>
         </div>
      );
    }
 };