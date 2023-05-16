// @TODO FIX MENUCATEGORYCATA, it's got some kind of casing issue or i'm using the wrong data for one of them.
// @TODO CLEAN UP CONDITIONALS
// @TODO wrapper ID must be dynamic, and should be div (not a <main>)
// @todo, could optimitze this so it's assets/mobile or assets/desktop, then just ite.imgfilepath which includes the img name and jpg or etc.
// src={`/assets/${item.imgFilePath}/desktop/${item.img}500x375.jpg`}
// You don't even need the "500X375" because you've got it divided by mobile/desktop/tablet.



import React, { Component } from "react";
import { menuCategoryData } from "../data/menuCategoryData.js";
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';
import { Link } from 'react-router-dom';

class MenuPages extends Component {
    static defaultProps = {
        menuData: menuCategoryData
    };
    
    render() {
        // console.log(location.state, location)
        return (
            <main id='handhelds-page' class="menu-page">

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
                            {this.props.titleDescription ?
                                <div class="d-flex align-items-center w-100 flex-column pb-1">
                                    <h2 className="pb-1">{this.props.dataTitle}</h2>
                                    <p class="mt-0 pb-3 primary-color" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                </div>
                                :
                                <div class="d-flex align-items-center w-100 flex-column pb-1">
                                    <h2 className="no-subhead-padding">{this.props.dataTitle}</h2>
                                </div>
                            }
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
                                            src={`/assets/${item.imgFilePath}/desktop/500x375${item.img}`}
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
                            <div class="d-flex align-items-center w-100 flex-column pb-1">
                                {this.props.titleDescription ?
                                    <div style={{ marginLeft: 125 + 'px' }} class="d-flex align-items-center w-100 flex-column pb-1">
                                        <h2 class="pb-1">{this.props.dataTitle}</h2>
                                        <p class="mt-0 pb-3 primary-color w-100" style={{ fontSize: .6 + 'rem' }}>{this.props.titleDescription}</p>
                                    </div>
                                    :
                                    <h2 class="no-subhead-padding pig-heading lg-pig-heading w-100">{this.props.dataTitle}</h2>
                                }
                            </div>
                            <img class="pig-graphic" src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
                                alt="" />
                        </div>
                    </div>

                    {this.props.menuData.map((item, index) => (
                        <div key={index} class="mobile-menu-item menu-item-bg">
                            {/* <!-- need display block / w-100 on anchor for ADA --> */}
                            <a class="d-block" href={item.src}>
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

            </main>
        );
    }
}
export default MenuPages;
