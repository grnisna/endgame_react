import React from 'react';
import Banner from './Components/Banner';
import BusinessSummary from './Components/BusinessSummary';
import Footer from './Components/Footer';
import Promotion from './Components/Promotion';
import Testimonial from './Components/Testimonial';
import Section01 from "./Components/TreeSection/Section01";



function App() {
  return (
    <div>
      <Banner></Banner>
      <Promotion></Promotion>
      <Section01></Section01>
      <BusinessSummary></BusinessSummary>
      <Testimonial></Testimonial> 
      <Footer />

    </div>
  );
}

export default App;
