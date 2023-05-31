// @todo, could optimitze this so it's assets/mobile or assets/desktop, then just ite.imgfilepath which includes the img name and jpg or etc.
// src={`/assets/${item.imgFilePath}/desktop/${item.img}500x375.jpg`}
// You don't even need the "500X375" because you've got it divided by mobile/desktop/tablet.
// This may be a better way but not worth refactoring at this point.
//Could add a loading spinner in between the time it takes to load
import React, { Component } from "react";
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';
import { salads } from "../data/menuData/salads.js";
import { sidesAndSnacks } from "../data/menuData/sidesAndSnacks.js";
import { kids } from "../data/menuData/kids.js";
import { dessertsAndBeverages } from "../data/menuData/dessertsAndBeverages.js";
import { Link } from 'react-router-dom';
import { CateringCategoryData } from "../data/cateringMenuData/CateringCategoryData.js";
import { plattersCatering } from "../data/cateringMenuData/plattersCatering.js";
import { saladPlattersCatering } from "../data/cateringMenuData/saladPlattersCatering.js";
import { dessertsAndSidesCatering } from "../data/cateringMenuData/dessertsAndSidesCatering.js";

function normalizeMenuCategory(category) {
    switch (category) {
        case 'handhelds':
            return 'Handhelds';
        case 'largePlates':
            return 'Large Plates';
        case 'salads':
            return 'Salads';
        case 'sides&Snacks':
            return 'Sides & Snacks';
        case 'kids':
            return 'Kids';
        case 'desserts&Beverages':
            return 'Desserts & Beverages';
        case 'platters':
            return 'Platters';
        case 'saladPlatter':
            return 'Salad Platters';
        case 'desserts&Sides':
            return 'Desserts & Sides';
        default:
            return null;
    }
}

class MenuPages extends Component {
    constructor(props) {
        super(props);
        const menuCategory = window.location.pathname.split('/')[2];
        const categoryData = this.getCategoryData(menuCategory);
        this.state = {
            category: [],
            menuTitle: normalizeMenuCategory(menuCategory)
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        const menuCategory = window.location.pathname.split('/')[2];
        const categoryData = this.getCategoryData(menuCategory);
        console.log(menuCategory, window.location.pathname)
        if (categoryData) {
            this.setState({ category: categoryData });
        }
    }

    getCategoryData(category) {
        switch (category) {
            case 'handhelds':
                return handHelds;
            case 'largePlates':
                return largePlates;
            case 'salads':
                return salads;
            case 'sides&Snacks':
                return sidesAndSnacks;
            case 'kids':
                return kids;
            case 'desserts&Beverages':
                return dessertsAndBeverages;
            case 'platters':
                return plattersCatering;
            case 'saladPlatter':
                return saladPlattersCatering;
            case 'desserts&Sides':
                return dessertsAndSidesCatering;
            default:
                return null;
        }
    }

    render() {
        let menuCategoryPage = window.location.pathname.includes('catering') ? './../../catering/index.html' : './../../menu/index.html';
        return (
            <div id={`${this.state.category}-page`} class="menu-page">
                <div class="d-none d-lg-block mobile-menu-item menu-item-bg menu-wrapper-lg pb-5">
                    <div class="select-category-bg">

                        <a href={menuCategoryPage}>
                            <div class="d-flex">
                                <h1 class="w-100 py-4 my-1">Select New Category ^</h1>
                            </div>
                        </a>
                    </div>
                    <div class="menu-category menu-category-selected">
                        <div class="d-flex justify-content-center">
                            <img class="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/bullHalfSmall.png" alt="" />
                            {this.props.titleDescription ?
                                <div class="d-flex align-items-center w-100 flex-column pb-1">
                                    <h2 className="pb-1">{this.state.menuTitle}</h2>
                                    <p class="mt-0 pb-3 primary-color" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                </div>
                                :
                                <div class="d-flex align-items-center w-100 flex-column pb-1">
                                    <h2 className="no-subhead-padding">{this.state.menuTitle}</h2>
                                </div>
                            }
                            <img class="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png" alt="" />
                        </div>
                    </div>
                    {/* <!-- Start Menu Item Row--> */}
                    <div class="row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                        {this.state.category.map((item, index) => (
                            <>
                                <div key={index}
                                    class="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                    <div class="primary-subheading-wrapper ">
                                        <div className="h3">{item.name}</div>
                                    </div>
                                    <div>
                                        <img className="w-100 subheading-img"
                                            src={`/assets/${item.imgFilePath}/desktop/500x375${item.img}`}
                                            alt="" />
                                    </div>
                                    <div class="pt-3 product-content-wrapper">
                                        <p class="product-description">{item.pdpDescription}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div class="m-auto">
                        <a class="btn btn-primary btn-lg mr-5" href="./../../pickup.html">Order</a>
                    </div>
                </div>
                {/* <!-- End Menu Item Row--> */}
                <div class="d-xl-none d-lg-none">
                    <div class="select-category-bg">
                        <a href={menuCategoryPage}>
                            <div class="d-flex">
                                <h1 class="w-100 py-4 my-1">Select New Category ^</h1>
                            </div>
                        </a>
                    </div>
                    <div class="menu-category menu-category-selected">
                        <div class="d-flex justify-content-center">
                            <div class="d-flex align-items-center w-100 flex-column pb-1">
                                {this.props.titleDescription ?
                                    <div style={{ marginLeft: 125 + 'px' }} class="d-flex align-items-center w-100 flex-column pb-1">
                                        <h2 class="pb-1">{this.state.menuTitle}</h2>
                                        <p class="mt-0 pb-3 primary-color w-100" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                    </div>
                                    :
                                    <h2 class="no-subhead-padding pig-heading lg-pig-heading w-100">{this.state.menuTitle}</h2>
                                }
                            </div>
                            <img class="pig-graphic" src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
                                alt="" />
                        </div>
                    </div>
                    {this.state.category.map((item, index) => (
                        <div key={index} class="mobile-menu-item menu-item-bg">
                            {/* <!-- need display block / w-100 on anchor for ADA --> */}
                            <a class="d-block" href={item.linkTo}>
                                {!item.new ?
                                    <>
                                        {
                                            item.pdpPreview ?
                                                <div className="h3 pb-0">{item.name} <span>{`>`}</span></div>

                                                :
                                                <div className="h3">{item.name} <span>{`>`}</span></div>
                                        }

                                        {item.pdpPreview && <div class="product-description-preview">{item.pdpPreview}</div>}
                                    </>
                                    :
                                    <>
                                        <div className="d-flex justify-content-center mr-4">
                                            <img className="mobile-bug" src="/assets/agGraphicElements/bug75x75.png" />
                                            <div className={`h3 ${!item.pdpPreview && 'pb-0'}`}>{item.name} <span>{`>`}</span></div>
                                        </div>
                                    </>
                                }
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default MenuPages;
