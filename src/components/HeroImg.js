import React, { Component } from "react";

class HeroImg extends Component {
    render() {
        return (
            <div>
                <picture>
                    <source src={`/assets/other/desktop/desktop-${this.props.img}`} media="(min-width: 1400px)" />
                    <img src={`/assets/other/mobile/mobile-${this.props.img}`} className="d-block w-100"
                        style={{maxHeight: '700px'}} alt="" />
                </picture>
            </div>
        );
    }
}

export default HeroImg;