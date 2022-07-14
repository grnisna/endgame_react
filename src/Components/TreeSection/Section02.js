import React from 'react';
import benefitsImg from '../Assets/foreign2.jpg'
import './Section02.css'

const Section02 = () => {
 return (
  <div className="Benefits grid grid-cols-2 gap-10 items-center justify-center justify-items-center py-5 lg:p-20">

   <div className="benefits-content text-start ">
    <h1 className='text-4xl py-5 font-bold'>
     Get Benefits Of Using Latest Artificial Intelligence Technologies.
    </h1>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>

    <div className="category">
     <div className="options grid grid-cols-2 my-5 ">
      <div className='content'>
       <h4>Complete Technology Partner</h4>
      </div>
      <div className='content'>
       <h4>Backed By 100% Customer References</h4>
      </div>
      <div className='content'>
       <h4>Fast, Scalable, & Reliable</h4>
      </div>
      <div className='content'>
       <h4>The Emerging Tech Exparts</h4>
      </div>
     </div>
     <div className="button">
      <button className='benefits-btn px-5 py-3 text-white font-semibold rounded'>Know Details</button>
     </div>
    </div>
   </div>

   <div className="benefits-img"
   // style={{
   //  backgroundImage: `url(${benefitsImg})`,

   // }}
   >
    <img src={benefitsImg} alt="" />
   </div>
  </div>
 );
};

export default Section02;