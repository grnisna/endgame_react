import React from 'react';
import robotImg from '../Assets/job1.jpg'
import robotBlob from '../Assets/job2.png'
import './SectionStyle01.css'

const Section01 = () => {
 return (
  <section className='Business-Summery grid lg:grid-cols-2 grid-cols-1 py-10'>
   <div className="robot-img"
    style={{
     backgroundImage: `url(${robotImg})`,
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat"
    }}
   >
   </div>
   <div className="content-section relative grid">
    <div className="robot-blob absolute items-center pr-5" >
     <img className='items-center robotBlob ' src={robotBlob} alt="" />
    </div>
    <div className="human-job p-20 text-start z-10">
     <h1 className="job-heading">Enhancing, Not Replacing, Human Jobs</h1>
     <p className='leading-7 py-2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Quis ipsum suspendisse ultrices gravida.
      Risus commodo viverra maecenas accumsan lacus vel facilisis.
     </p>
     <ul className='grid grid-cols-2'>
      <li>Higher Revenue</li>
      <li>Lower Revenue</li>
      <li>Lower Cost</li>
      <li>Fast Implementation</li>
      <li>Greater Efficiency</li>
      <li>Better Safety</li>
     </ul>
    </div>
   </div>
  </section>
 );
};

export default Section01;