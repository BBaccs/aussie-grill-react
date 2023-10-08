import Carousel from 'react-bootstrap/Carousel';
import { carouselData } from "../data/carouselData.js";
function ACarousel() {
    return (
        <Carousel fade hover>
            {carouselData.map((item, index) => (
                <Carousel.Item key={index}>
                    <picture>
                        <source srcSet={`/assets/carouselImages/desktop/lg-${item.imgName}`}
                            media="(min-width: 1400px)" />
                        <source srcSet={`/assets/carouselImages/tablet/md-${item.imgName}`}
                            media="(min-width: 700px) and (max-width: 1400px)" />
                        <img src={`/assets/carouselImages/mobile/sm-${item.imgName}`}
                            className="d-block w-100 carousel-img" alt={item.alt} />
                    </picture>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ACarousel;