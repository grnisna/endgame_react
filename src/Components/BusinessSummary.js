import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaTrophy } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { FaHandHoldingUsd } from 'react-icons/fa';
import Bgimg from './image/growthImg/growthBG.jpg';
import GrowthImg from './image/growthImg/growthImg.png';




const BusinessSummary = () => {
  return (
    <div className='lg:flex pt-24 pb-40 bg-white' >
      <div className='lg:w-[40%]  '>
        <h4 className=' text-orange-600 font-bold lg:ml-10 font-segoe_ui ml-5'>About Business Summery</h4>
        <h2 className='text-4xl lg:ml-10 font-segoe_ui my-5 ml-5'>Know More About Our Bussiness</h2>


        {/* ******************** */}
        <div className="flex justify-center items-center lg:gap-48 gap-10  ">

          <div className="">
            <span className="stat-title "><IoIosPeople size={42} color="black" /></span>
            <h1 className="text-4xl text-orange-600">27000+</h1>
            <p className=" text-black text-xl">Happy Customer</p>
          </div>
          <div className="">
            <span className="stat-title "><FaTrophy size={42} color="black" /></span>
            <h1 className="text-4xl text-orange-600">27000+</h1>
            <p className=" text-black text-xl">Reviews</p>
          </div>
        </div>

        {/* ******************** */}
        <div className="flex justify-center items-center lg:gap-48 gap-10  my-10 ">

          <div className="">
            <span className="stat-title "><BsGearFill size={42} color="black" /></span>
            <h1 className="text-4xl text-orange-600 ">27000+</h1>
            <p className=" text-black text-xl">Tools</p>
          </div>

          <div className="">
            <span className="stat-title "><FaHandHoldingUsd size={42} color="black" /></span>
            <h1 className="text-4xl text-orange-600">27000+</h1>
            <p className=" text-black text-xl">Annual revenue</p>
          </div>
        </div>

        <button className="btn bg-orange-600 rounded border-orange-600 text-white lg:ml-10 ml-5">Discover More</button>

      </div>


      <div className='lg:rounded-full lg:w-[40%]  lg:ml-24 relative' style={{
        backgroundImage: `url(${Bgimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} >

        <img className='absolute bottom-[-8rem] lg:w-52 w-32' src={GrowthImg} alt="" />

      </div>
    </div>

  );
};

export default BusinessSummary;
