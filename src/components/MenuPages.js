import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { OrderButton } from "../components";
/* This utility imports & fixes types for handhelds, largeplates, catering platters, etc. */
import { getCategoryData } from '../utilities/categoryUtils';

const normalizedCategoryNames = {
    handhelds: 'Handhelds',
    largePlates: 'Large Plates',
    salads: 'Salads',
    'sides&Snacks': 'Sides & Snacks',
    kids: 'Kids',
    'desserts&Beverages': 'Desserts & Beverages',
    platters: 'Platters',
    saladPlatters: 'Salad Platters',
    'desserts&Sides': 'Desserts & Sides'
};

function MenuPages({ titleDescription }) {
    const menuCategory = window.location.pathname.split('/')[2];
    function normalizeMenuCategory(categoryData) {
        return normalizedCategoryNames[categoryData] || null;
    }
    const [categoryData, setCategoryData] = useState({
        category: [],
        menuTitle: normalizeMenuCategory(menuCategory)
      });
    let menuCategoryPage = window.location.pathname.includes('catering') ? './../../catering' : './../../menu';

    useEffect(() => {
        const data = getCategoryData(menuCategory);
        if (data) {
            setCategoryData({ category : data, menuTitle: normalizeMenuCategory(menuCategory) });
        }
    }, [window.location.pathname]);

    const { category } = categoryData;
    return (
        <div id={`${category}-page`} className="menu-page">
            <div className="d-none d-lg-block mobile-menu-item menu-item-bg menu-wrapper-lg pb-5">
                <div className="select-category-bg">
                    <Link to={menuCategoryPage}>
                        <div className="d-flex">
                            <span className="w-100 py-4 my-1">Select New Category ^</span>
                        </div>
                    </Link>
                </div>
                <div className="menu-category menu-category-selected">
                    <div className="d-flex justify-content-center">
                        <img loading="lazy" className="animal-graphic d-lg-none"
                            src="/assets/agGraphicElements/animals/mobile/bullHalfSmall.png" alt="" />
                        {titleDescription ?
                            <div className="d-flex align-items-center w-100 flex-column pb-1">
                                <h1 className="pb-1">{categoryData.menuTitle}</h1>
                                <p className="mt-0 pb-3 primary-color" style={{ fontSize: .6 + 'rem' }}>{titleDescription}</p>
                            </div>
                            :
                            <div className="d-flex align-items-center w-100 flex-column pb-1">
                                <h1 className="no-subhead-padding">{categoryData.menuTitle}</h1>
                            </div>
                        }
                        <img loading="lazy" className="animal-graphic d-lg-none"
                            src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png" alt="" />
                    </div>
                </div>
                {/* <!-- Start Menu Item Row--> */}
                <div className="row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
                    {category.map((item, index) => (
                        <>
                            <div key={index}
                                className="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
                                <div className={`primary-subheading-wrapper ${item.name.length >= 22 && 'xxl-wrapper'}`}>
                                    <div className="h3">{item.name}</div>
                                </div>
                                {!item.imgFilePath ? '' :
                                    <div>
                                        <img loading="lazy" className="w-100 subheading-img"
                                            src={`${item.imgFilePath}/desktop/500x375${item.img}`}
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
                <OrderButton />
            </div>
            {/* <!-- End Menu Item Row--> */}
            <div className="d-xl-none d-lg-none">
                <div className="select-category-bg">
                    <Link to={menuCategoryPage}>
                        <div className="d-flex">
                            <span className="w-100 py-4 my-1">Select New Category ^</span>
                        </div>
                    </Link>
                </div>
                <div className="menu-category menu-category-selected">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex align-items-center w-100 flex-column pb-1">
                            {titleDescription ?
                                <div style={{ marginLeft: 125 + 'px' }} className="d-flex align-items-center w-100 flex-column pb-1">
                                    <h1 className="pb-1">{categoryData.menuTitle}</h1>
                                    <p className="mt-0 pb-3 primary-color w-100" style={{ fontSize: .6 + 'rem' }}>{titleDescription}</p>
                                </div>
                                :
                                <h2 className="no-subhead-padding pig-heading lg-pig-heading w-100">{categoryData.menuTitle}</h2>
                            }
                        </div>
                        <img loading="lazy" className="pig-graphic" src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
                            alt="" />
                    </div>
                </div>
                {category.map((item, index) => (
                    <div key={index} className="mobile-menu-item menu-item-bg">
                        <Link className="d-block" to={item.linkTo}>
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
                                        <img loading="lazy" className="mobile-bug" src="/assets/agGraphicElements/bug75x75.png" alt="" />
                                        <div className={`h3 ${!item.pdpPreview && 'pb-0'}`}>{item.name}</div>
                                    </div>
                                </>
                            }
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MenuPages;