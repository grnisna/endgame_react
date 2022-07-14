import React from 'react';
import zotex from '../../src/Image/Promotion/zotex.png';
import bizcom from '../../src/Image/Promotion/bizcom.png';
import dotex from '../../src/Image/Promotion/dotex.png';
import geobt from '../../src/Image/Promotion/geobt.png';
const Promotion = () => {
    return (
        <div className='grid justify-center lg:grid-cols-4 md:grid-cols-4 grid-cols-2 mt-10 h-[100px] gap-x-5 gap-y-7'>
            <img className='mx-auto grayscale hover:grayscale-0 transition-all duration-300' src={zotex} alt="" />
            <img className="mx-auto grayscale hover:grayscale-0 transition-all duration-300" src={bizcom} alt="" />
            <img className="mx-auto grayscale hover:grayscale-0 transition-all duration-300" src={dotex} alt="" />
            <img className="mx-auto grayscale hover:grayscale-0 transition-all duration-300" src={geobt} alt="" />
        </div>
    );
};

export default Promotion;