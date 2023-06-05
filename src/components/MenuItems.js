import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";
import { Link } from 'react-router-dom';


/* Handheld link works because it's the only way that's not using location.state, merge the two components */
class MenuItems extends Component {
    render() {
        const menuItems = menuCategoryData.map((menuItem, index) => (
        /* <!-- Menu Item --> */
            <div key={index} class="col-lg-4 col-md-6 pt-lg-0 menu-item-col"> 
                <Link class="d-block" to={menuItem.linkTo} >
                    <div class="primary-subheading-wrapper">
                        <div class="w-100">
                            <div class="CHANGEMELATER mb-0 primary-subheading">{menuItem.name}</div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source
                                srcSet={`/assets/foodImages/categoryImages/desktop/500x375${menuItem.img}`}
                                media="(min-width: 768px)" />
                            <img class="w-100 menu-item-img"
                                srcSet={`/assets/foodImages/categoryImages/mobile/345x260${menuItem.img}`}
                                alt="" />
                        </picture>
                    </div>
                </Link>
            </div>
        ));
        const rows = [];
        for (let i = 0; i < menuItems.length; i += 3) {
            rows.push(
                <div key={i} className="row px-lg-4 justify-content-center mb-5">
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