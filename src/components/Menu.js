// catering uses desktop not mobile -  src={`/assets/foodImages/categoryImages/mobile/345x260${item.img}`} but it should both be
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { menuCategoryData} from "../data/menuData";
import { OrderButton } from '../functionalComponents';

class MenuPages extends Component {
    static defaultProps = {
        menuData: menuCategoryData,
    };
    render() {
        const { menuData } = this.props;
        return (
            <div id="menu-category-page" className="menu-page">
                <div className="d-none d-lg-block menu-item-bg menu-wrapper-lg pb-5">
                    <h1 className="sr-only">Choose A Menu Category</h1>
                    {/* Desktop */}
                    <div className="d-none d-lg-block row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                        {menuData.map((item, index) => (
                            <div key={index}
                                className="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                <Link className="d-block" to={item.linkTo}>
                                    <div className="primary-subheading-wrapper">
                                        <div className="h2">{item.name}</div>
                                    </div>
                                    <div>
                                        {/* @TODO remove category image (pointless) and restructure deskop/mobile images folders. */}
                                        <img loading="lazy" className="w-100 subheading-img"
                                            src={`/assets/foodImages/categoryImages/desktop/500x375${item.img}`}
                                            alt="" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <OrderButton />
                    </div>
                </div>
                {/* Mobile: */}
                <div className="d-lg-none">
                    <ul>
                        {menuData.map((item, index) => (
                            <li key={index}>
                                <Link className="d-block py-3 menu-item-bg" to={item.linkTo} >
                                    <div className='h2'>{item.name}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default MenuPages;