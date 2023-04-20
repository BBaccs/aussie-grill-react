import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselData } from "../data/carouselData.js";
// import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
    return (
        <Carousel>
            {carouselData.map((item, index) => (
                <Carousel.Item key={index}>
                    {/* <!-- Responsive pictures --> */}
                    <picture>
                        <source srcset={`/assets/carouselImages/desktop/lg-${item.imgName}`}
                            media="(min-width: 1400px)" />
                        <source srcset={`/assets/carouselImages/tablet/md-${item.imgName}`}
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src={`/assets/carouselImages/mobile/sm-${item.imgName}`}
                            className="d-block w-100 carousel-img" alt={item.alt} />
                    </picture>
                    {/* Write a conditional if the accessibility state is true to show this info...
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))};
        </Carousel>
    );
}

export default UncontrolledExample;