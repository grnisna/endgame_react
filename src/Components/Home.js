import React from 'react';
import Section01 from "./TreeSection/Section01";
import Banner from "./Banner";
import Promotion from "./Promotion";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section01></Section01>
            <Promotion></Promotion>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;