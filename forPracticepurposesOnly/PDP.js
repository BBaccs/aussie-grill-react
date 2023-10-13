import React, { Component } from "react";


class PDP extends Component {
    static defaultProps = {
        menuItem: 'baconBombBurger'
    };
    render() {
        const location = useLocation();
        const { pdpItem } = useParams()
        return (
            <>
                <div className="menu-page menu-page-bg product-description-page">
                    <div className="container-fluid mt-0 p-3 pt-4">
                        {/* <!-- Responsive pictures --> */}
                        <picture loading="lazy">
                            <source srcSet={`/assets/foodImages/productImages/desktop/salads/800x600${this.props.menuItem.img}`} media="(min-width: 1600px)" />
                            <source srcSet={`/assets/foodImages/productImages/desktop/${this.props.menuItem.category}/500x375${this.props.menuItem.img}`} media="(min-width: 768px)" />
                            {/* <!-- The <img loading="lazy" /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                            <img className="m-auto product-image" src={`/assets/foodImages/productImages/mobile/${this.props.menuItem.category}/345x260${this.props.menuItem.img}`} alt="" />
                        </picture>
                        <h1 className="pdp-header text-left text-md-center">{this.props.menuItem.name}</h1>
                        <div className="product-content-wrapper">
                            <p className="product-description text-left text-md-center pl-2 pl-md-0">{this.props.menuDescription}</p>
                            <p className="product-description text-left text-md-center pl-2 pl-md-0">{this.props.menuDescription2}</p>
                        </div>
                        <div className="row py-5 d-none d-lg-block">
                            <div className="m-auto">
                                <a href="/../pickup" className="btn btn-primary btn-lg mr-5 pdp-lg-button">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PDP;


