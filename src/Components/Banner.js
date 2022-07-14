import React from 'react'
import bannerBGImage from './image/BannerImage/banner-bg.jpg';
import bannerImage from './image/BannerImage/banner-main.png';


const Banner = () => {
  return (
    <div className="hero py-14 w-full" style={ {
      backgroundImage: `url(${bannerBGImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

      <div className="lg:flex flex-row-reverse lg:flex-row">

        <div className='lg:w-[55%] w-full  lg:mt-10 mt-5 lg:ml-10'>
          <h1 style={{lineHeight:'1.2em'}} className="lg:text-6xl text-4xl font-bold text-white lg:text-left text-center ">
            Welcome Our Biggest Robotic Manufacture World
          </h1>
          <p className="py-6 text-white text-xl lg:text-left text-justify lg:mx-0 mx-10">
            Welcome Our Customer.We are always here For your services and we always provide unique and supper extra ordinary Robotic accessories
          </p>
          <button className="btn bg-orange-600 rounded border-orange-600 text-white lg:ml-0 ml-10">Discover More</button>
        </div>
        <div className=' lg:w-[35%] w-full'>
          <img src={bannerImage} className="lg:w-72 w-52 mx-auto lg:mt-0 mt-5"  />
        </div>

      </div>

    </div>
  )
}

export default Banner
