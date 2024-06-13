import React from "react";

function HeroImg({ img, imgFilePath = "/assets/other", alt = "" }) {
    return (
        <picture loading="lazy">
            <source srcSet={`${imgFilePath}/desktop/desktop-${img}`} media="(min-width: 1400px)" />
            <source srcSet={`${imgFilePath}/tablet/tablet-${img}`} media="(min-width: 600px)" />
            <img src={`${imgFilePath}/mobile/mobile-${img}`} className="d-block w-100"
                style={{ maxHeight: '700px' }} alt={alt} />
        </picture>
    );
}

export default HeroImg;
