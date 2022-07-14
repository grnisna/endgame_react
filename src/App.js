import React from 'react';
import './App.css';
import Products from './Products/Products';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Section01 from './Components/TreeSection/Section01';
import Promotion from './Component/Promotion';
import Testimonial from './Component/Testimonial';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Section01></Section01>
      <Promotion></Promotion>
      <Testimonial></Testimonial>
      <Footer />
    </div>
  )
}

export default App;
