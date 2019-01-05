import React from 'react';

export default class PocIntro extends React.Component {
    render() {
       return (
          <div>
           
            <h2>
               Our Story
            </h2>
            <p>
               Peace of Cake draws inspiration from one our founders childhood dreams. To have a build-a-bear style cake and dessert shop. After working together for two years in the tech industry, the three of us decided to make this dream a reality. 
            </p>

            <h2>
               How it works:
            </h2>
            <table>
               <tbody>
               <tr>
                  <td>
                     <img className='intro-guide-image' src={require('../assets/Step1.png')} alt='Step1' />
                  </td>
                  <td>
                     <img className='intro-guide-image' src={require('../assets/Step2.png')} alt='Step2' />
                  </td>
                  <td>
                     <img className='intro-guide-image' src={require('../assets/Step3.png')} alt='Step3' />
                  </td>
                  <td>
                     <img className='intro-guide-image' src={require('../assets/Step4.png')} alt='Step4' />
                  </td>
               </tr>
               <tr>
                  <td>Step 1. Create the perfect cake for your next event using our simple but powerful cake designer.</td>
                  <td>Step 2. We'll get the best local bakeries to bid for the opportunity to make your masterpiece.</td>
                  <td>Step 3. Sit back and relax. We'll pass on detailed instructions to the winning bakery.</td>
                  <td>Step 4. Pick up your cake, or have it safely delivered to the event by professionals.</td>
               </tr>
            </tbody>
            </table>
         
          </div>
       );
    }
 };