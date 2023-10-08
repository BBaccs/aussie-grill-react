import React, { Component } from "react";
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';
import { salads } from "../data/menuData/salads.js";
import { sidesAndSnacks } from "../data/menuData/sidesAndSnacks.js";
import { kids } from "../data/menuData/kids.js";
import { dessertsAndBeverages } from "../data/menuData/dessertsAndBeverages.js";
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
        case 'saladPlatters':
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
        // const categoryData = this.getCategoryData(menuCategory);
        this.state = {
            category: [],
            menuTitle: normalizeMenuCategory(menuCategory)
        };
    }

    componentDidMount() {
        const menuCategory = window.location.pathname.split('/')[2];
        const categoryData = this.getCategoryData(menuCategory);
        // console.log(menuCategory, window.location.pathname)
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
            case 'saladPlatters':
                return saladPlattersCatering;
            case 'desserts&Sides':
                return dessertsAndSidesCatering;
            default:
                return null;
        }
    }

    render() {
        console.log('<MenuPages />')
        let menuCategoryPage = window.location.pathname.includes('catering') ? './../../catering/index.html' : './../../menu/index.html';
        return (
            <div id={`${this.state.category}-page`} className="menu-page">
                <div className="d-none d-lg-block mobile-menu-item menu-item-bg menu-wrapper-lg pb-5">
                    <div className="select-category-bg">
                        <a href={menuCategoryPage}>
                            <div className="d-flex">
                                <span className="w-100 py-4 my-1">Select New Category ^</span>
                            </div>
                        </a>
                    </div>
                    <div className="menu-category menu-category-selected">
                        <div className="d-flex justify-content-center">
                            <img className="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/bullHalfSmall.png" alt="" />
                            {this.props.titleDescription ?
                                <div className="d-flex align-items-center w-100 flex-column pb-1">
                                    <h1 className="pb-1">{this.state.menuTitle}</h1>
                                    <p className="mt-0 pb-3 primary-color" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                </div>
                                :
                                <div className="d-flex align-items-center w-100 flex-column pb-1">
                                    <h1 className="no-subhead-padding">{this.state.menuTitle}</h1>
                                </div>
                            }
                            <img className="animal-graphic d-lg-none"
                                src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png" alt="" />
                        </div>
                    </div>
                    {/* <!-- Start Menu Item Row--> */}
                    <div className="row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                        {this.state.category.map((item, index) => (
                            <>
                                <div key={index}
                                    className="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                    <div className={`primary-subheading-wrapper ${item.name.length >= 22 && 'xxl-wrapper'}`}>
                                        <div className="h3">{item.name}</div>
                                    </div>
                                    {!item.imgFilePath ? '' :
                                        <div>
                                            <img className="w-100 subheading-img"
                                                src={`/assets/${item.imgFilePath}/desktop/500x375${item.img}`}
                                                alt="" />
                                        </div>
                                    }
                                    <div className="pt-3 product-content-wrapper">
                                        <p className="product-description">{item.pdpDescription}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="m-auto">
                        <a className="btn btn-primary btn-lg mr-5" href="./../../pickup.html">Order</a>
                    </div>
                </div>
                {/* <!-- End Menu Item Row--> */}
                <div className="d-xl-none d-lg-none">
                    <div className="select-category-bg">
                        <a href={menuCategoryPage}>
                            <div className="d-flex">
                                <span className="w-100 py-4 my-1">Select New Category ^</span>
                            </div>
                        </a>
                    </div>
                    <div className="menu-category menu-category-selected">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex align-items-center w-100 flex-column pb-1">
                                {this.props.titleDescription ?
                                    <div style={{ marginLeft: 125 + 'px' }} className="d-flex align-items-center w-100 flex-column pb-1">
                                        <h1 className="pb-1">{this.state.menuTitle}</h1>
                                        <p className="mt-0 pb-3 primary-color w-100" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                    </div>
                                    :
                                    <h2 className="no-subhead-padding pig-heading lg-pig-heading w-100">{this.state.menuTitle}</h2>
                                }
                            </div>
                            <img className="pig-graphic" src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
                                alt="" />
                        </div>
                    </div>
                    {this.state.category.map((item, index) => (
                        <div key={index} className="mobile-menu-item menu-item-bg">
                            {/* <!-- need display block / w-100 on anchor for ADA --> */}
                            <a className="d-block" href={item.linkTo}>
                                {!item.new ?
                                    <>
                                        {
                                            item.pdpPreview ?
                                                <div className="h3 pb-0">{item.name}</div>

                                                :
                                                <div className="h3">{item.name}</div>
                                        }

                                        {item.pdpPreview && <div className="product-description-preview">{item.pdpPreview}</div>}
                                    </>
                                    :
                                    <>
                                        <div className="d-flex justify-content-center mr-4">
                                            <img className="mobile-bug" src="/assets/agGraphicElements/bug75x75.png" alt=""/>
                                            <div className={`h3 ${!item.pdpPreview && 'pb-0'}`}>{item.name}</div>
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
