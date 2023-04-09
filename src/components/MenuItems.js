import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";


class MenuItem extends Component {
    constructor(props) {
        super(props);
        // this.state = { clicked: false };
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(e) {
    //     this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    // }
    render() {
        return (
            <div className="menuItems">
                {menuCategoryData.map((menuItem, index) => {
                    return (
                        /* <!-- {menuItem.name} Menu Item--> */
                        <div key={index} class="col-lg-4 col-md-6 pt-lg-0 menu-item-col">
                            <a class="d-block" href={menuItem.url}>
                                <div class="primary-subheading-wrapper">
                                    <div class="w-100">
                                        <h2 class="mb-0 primary-subheading">{menuItem.name}</h2>
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
                    )
                })}
            </div>
        );
    }
}

export default MenuItem;


