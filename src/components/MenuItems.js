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
            <div key={index} class="col-lg-4 col-md-6 pt-lg-0 menu-item-col">
                <Link class="d-block mt-5" to={menuItem.linkTo} >
                    <div class="primary-subheading-wrapper">
                        <div class="w-100">
                            <div class="CHANGEMELATER mb-0 primary-subheading">{menuItem.name}</div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source
                                srcSet={`/assets/${menuItem.imgFilePath}/desktop/500x375${menuItem.img}`}
                                media="(min-width: 768px)" />
                            <img class="w-100 menu-item-img"
                                srcSet={`/assets/${menuItem.imgFilePath}/mobile/345x260${menuItem.img}`}
                                alt="" />
                        </picture>
                        {menuItem.btn &&
                            <div class="btn-bottom-wrapper">
                                <div class="btn btn-primary menu-item-img-cta">{menuItem.btn}</div>
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