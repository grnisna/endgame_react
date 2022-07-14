import React from 'react';
import socialImg from '../Assets/social-main.jpg'
import './Section03.css'

const Section03 = () => {
 return (
  <div className='section-3  py-5 lg:p-20'>
   <div className="social">
    <div className="row flex">
     <div className="social-row">
      <img src={socialImg} alt="" />
     </div>
     <div className="social-content pt-10 z-10 pr-10">
      <div className="social-data text-start p-10">
       <h1>Social Robotics Is The Future</h1>
       <h4>The Vision Processing Solution That Uses Deep-Learning To Enable Building And Depalletizing Of Mixed-SKU Pallets.</h4>
       <div className="button">
        <button className='benefits-btn px-5 py-3 text-white font-semibold rounded'>Know Details</button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section03;