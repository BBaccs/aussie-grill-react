import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";
import { Link } from 'react-router-dom';

class MenuItems extends Component {
    static defaultProps = {
        menuData: menuCategoryData,
    };
    render() {
        const menuItems = this.props.menuData.map((menuItem, index) => (
            /* <!-- Menu Item --> */
            <div key={index} className="col-lg-4 col-md-6 pt-lg-0 menu-item-col">
                <Link className="d-block mt-5" to={menuItem.linkTo} >
                    <div className={`primary-subheading-wrapper ${menuItem.name.length >= 22 && 'xxl-wrapper'}`}>
                        <div className="w-100">
                            <div className='CHANGEMELATER mb-0 primary-subheading'>{menuItem.name}</div>
                        </div>
                    </div>
                    <div>
                    {/* lazy load test */}
                        <picture loading="lazy">
                            <source
                                srcSet={`/assets/${menuItem.imgFilePath}/desktop/500x375${menuItem.img}`}
                                media="(min-width: 768px)" />
                            <img className="w-100 menu-item-img"
                                srcSet={`/assets/${menuItem.imgFilePath}/mobile/345x260${menuItem.img}`}
                                alt="" />
                        </picture>
                        {menuItem.btn &&
                            <div className="btn-bottom-wrapper">
                                <div className="btn btn-primary menu-item-img-cta">{menuItem.btn}</div>
                            </div>}
                    </div>
                </Link>
            </div>
        ));
        const rows = [];
        for (let i = 0; i < menuItems.length; i += 3) {
            rows.push(
                <div key={i} className="row px-lg-4 justify-content-center">
                    {menuItems.slice(i, i + 3)}
                </div>
            );
        }
        return (
            // <!-- Start Menu Item Row-->
            <div >
                {rows}
            </div>
        );
    }
}

export default MenuItems;