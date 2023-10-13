import React, { Component } from "react";
import { carouselData } from "../data/carouselData.js";
import { Carousel, Button } from "react-bootstrap";

class CarouselAnnn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeSlide: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    }
    render() {
        return (
            // id="home-carousel" 
            <div id={`#${this.props.id}`} className="food-carousel carousel slide" data-ride="carousel">
                <div className="carousel-indicators-wrapper mx-0">
                    <button className="button carousel-button pause-button" aria-label="Pause carousel"></button>
                    <svg width="2em" height="2em" viewBox="0 0 16 16"
                        className="bi bi-play-fill button carousel-button play-button d-none" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <ol className="carousel-indicators mx-0">
                        {/* Fix active name w/ state */}
                        {carouselData.map((item, index) => (
    
                            <li key={index} onClick={this.handleClick} data-target={this.props.id} tabindex="0" role="button" aria-label={`Slide ${index}`}
                                data-slide-to={index} className={this.state.activeSlide ? "active" : ""}> {console.log(item.number)}</li>
                        )
                        )}
                    </ol>
                </div>
                <div className="carousel-inner">
                    {carouselData.map((item, index) => (
                        <div key={index} className={index === item.number ? "active" : ""}>
                            {/* <!-- Responsive pictures --> */}
                            <picture>
                                <source srcSet={`/assets/carouselImages/desktop/lg-${item.imgName}`}
                                    media="(min-width: 1400px)" />
                                <source srcSet={`/assets/carouselImages/tablet/md-${item.imgName}`}
                                    media="(min-width: 700px) and (max-width: 1400px)" />
                                <img src={`/assets/carouselImages/mobile/sm-${item.imgName}`}
                                    className="d-block w-100 carousel-img" alt={item.alt} />
                            </picture>
                        </div>
                    )
                    )}
                </div>
            </div>
        );
    }
}

export default CarouselAnnn;