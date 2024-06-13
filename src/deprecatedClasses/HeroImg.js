import React, { Component } from "react";

class HeroImg extends Component {
    static defaultProps = {
        imgFilePath: "/assets/other",
        alt: "",
    };
    render() {
        const { img, imgFilePath, alt } = this.props;
        return (
            <picture loading="lazy">
                <source srcSet={`${imgFilePath}/desktop/desktop-${img}`} media="(min-width: 1400px)" />
                <source srcSet={`${imgFilePath}/desktop/tablet-${img}`} media="(min-width: 600px)" />
                <img srcSet={`${imgFilePath}/mobile/mobile-${img}`} className="d-block w-100"
                    media="(max-width: 1400px)" style={{ maxHeight: '700px' }} alt={alt} />
            </picture>
        );
    }
}
export default HeroImg;