import React from 'react';
import Banner from '../../Components/Banner';
import Promotion from '../../Components/Promotion';
import Section01 from '../../Components/TreeSection/Section01';
import BusinessSummary from '../../Components/BusinessSummary';
import Testimonial from '../../Components/Testimonial';
import Footer from '../../Components/Footer';
import Products from '../../Products/Products';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Promotion></Promotion>
      <Products></Products>
      <Section01></Section01>
      <BusinessSummary></BusinessSummary>
      <Testimonial></Testimonial>
      <Footer />
    </div>
  );
};

export default Home;