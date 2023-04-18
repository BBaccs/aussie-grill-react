import React, { Component } from "react";
import { carouselData } from "../data/carouselData.js";

class CarouselAnnn extends Component {
    // static defaultProps = {
    //     carousel: false,
    // };

    // handleClick(e) {
    //     this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    // }
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
                            <li key={index} data-target={this.props.id} tabindex="0" role="button" aria-label={`Slide ${index}`}
                                data-slide-to={index} class={index === item.number ? "active" : ""}></li>
                        )
                        )}
                    </ol>
                </div>
                <div className="carousel-inner">
                    {carouselData.map((item, index) => (
                        <div className="carousel-item active">
                            {/* <!-- Responsive pictures --> */}
                            <picture>
                                <source srcset={`/assets/carouselImages/desktop/lg-${item.name}`}
                                    media="(min-width: 1400px)" />
                                <source srcset={`/assets/carouselImages/tablet/md-${item.name}`}
                                    media="(min-width: 700px) and (max-width: 1400px)" />
                                <img src={`/assets/carouselImages/mobile/sm-${item.name}`}
                                    className="d-block w-100 carousel-img" alt={item.alt} />
                            </picture>
                        </div>
                    )
                    )}
                    <div className="carousel-item active">
                        {/* <!-- Responsive pictures --> */}
                        <picture>
                            <source srcset={`/assets/carouselImages/desktop/lg-baconBombBurgerHero.jpg`}
                                media="(min-width: 1400px)" />
                            <source srcset="/assets/carouselImages/tablet/md-baconBombBurgerHero.jpg"
                                media="(min-width: 700px) and (max-width: 1400px)" />
                            <img src="/assets/carouselImages/mobile/sm-baconBombBurgerHero.jpg"
                                className="d-block w-100 carousel-img" alt="Soooooo Much Bacon" />
                        </picture>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="/assets/carouselImages/desktop/crispySrirachaChickenSandwichHero.jpg"
                                media="(min-width: 1400px)" />
                            <source srcset="/assets/carouselImages/tablet/crispySrirachaChickenSandwichHero.jpg"
                                media="(min-width: 700px) and (max-width: 1400px)" />
                            <img src="/assets/carouselImages/mobile/crispySrirachaChickenSandwichHero.jpg"
                                className="d-block w-100 carousel-img" alt="Sweetness + Heatness" />
                        </picture>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="/assets/carouselImages/desktop/slicedSirloinFriesHero.jpg"
                                media="(min-width: 1400px)" />
                            <source srcset="/assets/carouselImages/tablet/slicedSirloinFriesHero.jpg"
                                media="(min-width: 700px) and (max-width: 1400px)" />
                            <img src="/assets/carouselImages/mobile/slicedSirloinFriesHero.jpg"
                                className="d-block w-100 carousel-img" alt="Where Tender Meets Juicy" />
                        </picture>
                        <div className="carousel-caption d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="/assets/carouselImages/desktop/crispyChickenTendersHero.jpg"
                                media="(min-width: 1400px)" />
                            <source srcset="/assets/carouselImages/tablet/crispyChickenTendersHero.jpg"
                                media="(min-width: 700px) and (max-width: 1400px)" />
                            <img src="/assets/carouselImages/mobile/crispyChickenTendersHero.jpg"
                                className="d-block w-100 carousel-img" alt="Best Tenders In Town" />
                        </picture>
                        <div className="carousel-caption d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source srcset="/assets/carouselImages/desktop/tenderTuesday.jpg"
                                media="(min-width: 1400px)" />
                            <source srcset="/assets/carouselImages/tablet/tenderTuesday1.jpg"
                                media="(min-width: 700px) and (max-width: 1400px)" />
                            <img src="/assets/carouselImages/mobile/tenderTuesday.jpg"
                                className="d-block w-100 carousel-img" alt="Tender Tuesday – special deals available." />
                        </picture>
                        <div className="carousel-caption d-md-block">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselAnnn;