import React, { Component } from "react";

class Carousel extends Component {
    static defaultProps = {
        carousel: false,
    };
    constructor(props) {
        super(props);
        // this.state = { clicked: false };
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(e) {
    //     this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    // }
    render() {
        return (
            // id="home-carousel" 
            <div id={this.props.id} class="food-carousel carousel slide" data-ride="carousel">
            <div class="carousel-indicators-wrapper mx-0">
                <button class="button carousel-button pause-button" aria-label="Pause carousel"></button>
                <svg width="2em" height="2em" viewBox="0 0 16 16"
                    class="bi bi-play-fill button carousel-button play-button d-none" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <ol class="carousel-indicators mx-0">
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="First slide"
                        data-slide-to="0" class="active"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Second slide"
                        data-slide-to="1"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Third slide"
                        data-slide-to="2"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Fourth slide"
                        data-slide-to="3"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Fifth slide"
                        data-slide-to="4"></li>
                </ol>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <!-- Responsive pictures --> */}
                    <picture>
                        <source srcset={`/assets/carouselImages/desktop/lg-${this.props.img}`}
                            media="(min-width: 1400px)" />
                        <source srcset={`/assets/carouselImages/tablet/med${this.props.img}`}
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src={`/assets/carouselImages/mobile/sm-${this.props.img}`}
                            class="d-block w-100 carousel-img" alt={this.props.alt} />
                    </picture>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcset="assets/carouselImages/desktop/crispySrirachaChickenSandwichHero2000x800.jpg"
                            media="(min-width: 1400px)" />
                        <source srcset="assets/carouselImages/tablet/crispySrirachaChickenSandwichHero1024x600.jpg"
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src="assets/carouselImages/mobile/crispySrirachaChickenSandwichHero375x280.jpg"
                            class="d-block w-100 carousel-img" alt="Sweetness + Heatness" />
                    </picture>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcset="assets/carouselImages/desktop/slicedSirloinFriesHero2000x800.jpg"
                            media="(min-width: 1400px)" />
                        <source srcset="assets/carouselImages/tablet/slicedSirloinFriesHero1024x600.jpg"
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src="assets/carouselImages/mobile/slicedSirloinFriesHero375x280.jpg"
                            class="d-block w-100 carousel-img" alt="Where Tender Meets Juicy" />
                    </picture>
                    <div class="carousel-caption d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcset="assets/carouselImages/desktop/crispyChickenTendersHero2000x800.jpg"
                            media="(min-width: 1400px)" />
                        <source srcset="assets/carouselImages/tablet/crispyChickenTendersHero1024x600.jpg"
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src="assets/carouselImages/mobile/crispyChickenTendersHero375x280.jpg"
                            class="d-block w-100 carousel-img" alt="Best Tenders In Town" />
                    </picture>
                    <div class="carousel-caption d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcset="assets/carouselImages/desktop/tenderTuesday2000x800.jpg"
                            media="(min-width: 1400px)" />
                        <source srcset="assets/carouselImages/tablet/tenderTuesday1024x600.jpg"
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src="assets/carouselImages/mobile/tenderTuesday375x280.jpg"
                            class="d-block w-100 carousel-img" alt="Tender Tuesday – special deals available." />
                    </picture>
                    <div class="carousel-caption d-md-block">
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Carousel;