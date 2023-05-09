// @TODO FIX MENUCATEGORYCATA, it's got some kind of casing issue or i'm using the wrong data for one of them.
import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";
import { Link } from 'react-router-dom';

class MenuPages extends Component {
    static defaultProps = {
        menuData: menuCategoryData
    };
    render() {
        return (
            <main id="handhelds-page" class="menu-page">

                <div class="d-none d-lg-block mobile-menu-item menu-item-bg menu-wrapper-lg pb-5">
                    <div class="select-category-bg">
                        <a href="./../../menu/index.html">
                            <div class="d-flex">
                                <h1 class="w-100 py-4 my-1">Select New Category ^</h1>
                            </div>
                        </a>
                    </div>

                    <div class="menu-category menu-category-selected">
                        <div class="d-flex justify-content-center">
                            <img class="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/bullHalfSmall.png" alt="" />
                            <div class="d-flex align-items-center w-100 flex-column pb-1">
                                <h2 class="pb-1">{this.props.dataTitle}</h2>
                                {this.props.titleDescription &&
                                    <p class="mt-0 pb-3 primary-color" style={{ fontSize: .6 + 'rem' }}>100% USDA CHOICE BEEF</p>
                                }
                            </div>
                            <img class="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png" alt="" />
                        </div>
                    </div>

                    {/* <!-- Start Menu Item Row--> */}
                    <div class="row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                        {this.props.menuData.map((item, index) => (
                            <div key={index}>
                                <div
                                    class="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                    <div class="primary-subheading-wrapper ">
                                        <div className="h3">{item.name}</div>
                                    </div>
                                    <div>
                                        <img class="w-100 subheading-img"
                                            src={`/assets/foodImages/productImages/handhelds/desktop/${item.img}500x375.jpg`}
                                            alt="" />
                                    </div>
                                    <div class="pt-3 product-content-wrapper">
                                        <p class="product-description">{item.pdpDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div class="m-auto">
                        <a class="btn btn-primary btn-lg mr-5" href="./../../pickup.html">Order</a>
                    </div>
                </div>
                {/* <!-- End Menu Item Row--> */}

                <div class="d-xl-none d-lg-none">

                    <div class="select-category-bg">
                        <a href="./../../menu/index.html">
                            <div class="d-flex">
                                <h1 class="w-100 py-4 my-1">Select New Category ^</h1>
                            </div>
                        </a>
                    </div>

                    <div class="menu-category menu-category-selected">
                        <div class="d-flex justify-content-center">
                            <div style={{ marginLeft: 125 + 'px' }} class="d-flex align-items-center w-100 flex-column pb-1">
                                <h2 class="pb-1">Handhelds</h2>
                                <p class="mt-0 pb-3 primary-color w-100" style={{ fontSize: .6 + 'rem' }}>100% USDA CHOICE BEEF</p>
                            </div>
                            <img class="pig-graphic" src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
                                alt="" />
                        </div>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        {/* <!-- need display block / w-100 on anchor for ADA --> */}
                        <a class="d-block" href="./../../menu/handhelds/baconBombBurger.html">
                            <h3>BACON BOMB BURGER <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/doubleDoubleBurger.html">
                            <h3>Double Double Burger <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/classicBurger.html">
                            <h3>Classic Cheeseburger <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/aussieBurger.html">
                            <h3>AUSSIE BURGER <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/volcanoBurger.html">
                            <h3>Volcano Burger <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/crispyShrimpPoBoy.html">
                            <h3>CRISPY SHRIMP PO'BOY <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/jamminGrilledChickenSandwich.html">
                            <h3>Jammin’ Grilled Chicken Sandwich <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/agOgChickenSandwich.html">
                            <h3>AG OG Chicken Sandwich <span></span></h3>
                        </a>
                    </div>

                    <div class="mobile-menu-item menu-item-bg">
                        <a class="d-block" href="./../../menu/handhelds/crispyChickenSrirachaSandwich.html">
                            <h3>CRISPY SRIRACHA CHICKEN Sandwich <span></span></h3>
                        </a>
                    </div>

                </div>

            </main>
        );
    }
}
export default MenuPages;