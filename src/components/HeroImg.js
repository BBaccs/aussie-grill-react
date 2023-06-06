import React, { Component } from "react";

class HeroImg extends Component {
    static defaultProps = {
        imgFilePath: "other",
    };
    render() {
        return (
            <div>
                <picture>
                    <source srcSet={`/assets/${this.props.imgFilePath}/desktop/desktop-${this.props.img}`} media="(min-width: 1400px)" />
                    <source srcSet={`assets/${this.props.imgFilePath}/desktop/tablet-${this.props.img}.jpg`} media="(min-width: 600px)" />
                    <img srcSet={`/assets/${this.props.imgFilePath}/mobile/mobile-${this.props.img}`} className="d-block w-100" media="(max-width: 1400px)"
                        style={{maxHeight: '700px'}} alt="" />
                </picture>    
            </div>
        );
    }
}
export default HeroImg;