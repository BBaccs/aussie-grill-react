import React, { Component } from "react";

class CarouselSlides extends Component {
    render() {
        return (
            <ol class="carousel-indicators mx-0">
                {/* <!-- Make carosuel buttons child component --> */}
                <li data-target={this.props.id} tabindex="0" role="button" aria-label={`Slide number ${index}`}
                    data-slide-to={index} className="active"></li>
                {/* <li data-target={this.props.id} tabindex="0" role="button" aria-label="Second slide"
                    data-slide-to={index}></li>
                <li data-target={this.props.id} tabindex="0" role="button" aria-label="Third slide"
                    data-slide-to={index}></li>
                <li data-target={this.props.id} tabindex="0" role="button" aria-label="Fourth slide"
                    data-slide-to={index}></li>
                <li data-target={this.props.id} tabindex="0" role="button" aria-label="Fifth slide"
                    data-slide-to={index}></li> */}
            </ol>
        );
    }
}

export default CarouselSlides;