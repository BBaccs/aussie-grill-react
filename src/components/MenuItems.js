/* Can imgfiel path be deleted in data set? */
import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";


class MenuItems extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menuItems = menuCategoryData.map((menuItem, index) => (
        /* <!-- Menu Item --> */
            <div key={index} class="col-lg-4 col-md-6 pt-lg-0 menu-item-col">
                <a class="d-block" href={menuItem.linkTo}>
                    <div class="primary-subheading-wrapper">
                        <div class="w-100">
                            <div class="CHANGEMELATER mb-0 primary-subheading">{menuItem.name}</div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source
                                srcSet={`/assets/foodImages/categoryImages/desktop/${menuItem.img}500x375.${menuItem.imgType}`}
                                media="(min-width: 768px)" />
                            <img class="w-100 menu-item-img"
                                srcSet={`/assets/foodImages/categoryImages/mobile/${menuItem.img}345x260.${menuItem.imgType}`}
                                alt="" />
                        </picture>
                    </div>
                </a>
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