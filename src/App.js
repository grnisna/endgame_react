import React from 'react';
import './App.css';
import Promotion from './Components/Promotion';
import Testimonial from './Components/Testimonial';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Promotion></Promotion>
      <Testimonial></Testimonial>
      <Footer />
    </div>
  );
}

export default App;
