// @TODO FIX MENUCATEGORYCATA, it's got some kind of casing issue or i'm using the wrong data for one of them.
import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";
import { Link } from 'react-router-dom';

class MenuPages extends Component {
    static defaultProps = {
        menuData: menuCategoryData,
    };
    render() {
        return (
            <div id="menu-category-page" className="menu-page">
                <div className="d-none d-lg-block menu-item-bg menu-wrapper-lg pb-5">
                    <h1 className="sr-only">Choose A Menu Category</h1>
                    {/* Desktop */}
                    <div class="d-none d-lg-block row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                        {this.props.menuData.map((item, index) => (
                            <div key={index}
                                className="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                <Link class="d-block" to={item.linkTo} state={ item.name.replace(/\s/g, '') }>
                                    <div className="primary-subheading-wrapper">
                                        <div className="h2">{item.name}</div>
                                    </div>
                                    <div>
                                        <img class="w-100 subheading-img"
                                            src={`/assets/foodImages/categoryImages/mobile/${item.img}345x260.jpg`}
                                            alt="" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="d-flex justify-content-center">
                            <a className="btn btn-primary btn-lg mr-5" href="/pickup.html">Order</a>
                        </div>
                    </div>
                </div>
                {/* Mobile: */}
                <div className="d-lg-none">
                    <ul>
                        {this.props.menuData.map((item, index) => (
                            <li key={index}>
                                <Link className="d-block py-3 menu-item-bg" to={item.linkTo} state={ item.name.replace(/\s/g, '') } >
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