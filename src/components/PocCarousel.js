import React from 'react';
import { Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class PocCarousel extends React.Component {
    render() {
       return (
         <div className='carouselConatiner'>
            <Carousel autoPlay showArrows={true}>
               <div>
                  <img className='carousel-image' src={require('../assets/1.png')} alt=''/>
                  <p className='legend'>Legend 1</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/2.png')} alt=''/>
                  <p className='legend'>Legend 2</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/3.png')} alt=''/>
                  <p className='legend'>Legend 3</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/4.png')} alt=''/>
                  <p className='legend'>Legend 4</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/5.png')} alt=''/>
                  <p className='legend'>Legend 5</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/6.png')} alt=''/>
                  <p className='legend'>Legend 6</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/7.png')} alt=''/>
                  <p className='legend'>Legend 7</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/8.png')} alt=''/>
                  <p className='legend'>Legend 8</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/9.png')} alt=''/>
                  <p className='legend'>Legend 9</p>
               </div>
               <div>
                  <img className='carousel-image' src={require('../assets/10.png')} alt=''/>
                  <p className='legend'>Legend 10</p>
               </div>
            </Carousel>
         </div> 
      );
    }
 };