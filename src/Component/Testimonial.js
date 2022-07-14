import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import Review from "./Review";
const testimonials = require('../Image/Testimonial/testimonial.png');
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-20">
            <div className='review' style={{ backgroundImage: `url(${testimonials})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", backgroundPosition: "center", zIndex: '1', color: "white" }}>
                <div className=''>
                    <h3>Testimonial</h3>
                    <h2 className='text-center'>What Our Clients Say</h2>
                    <div className='d-none d-md-block'>
                        <Carousel itemsToShow={2}>
                            {
                                reviews?.map(review => <Review
                                    review={review}
                                    key={review.id}>
                                </Review>)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;