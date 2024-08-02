import React from "react";
import { Link } from 'react-router-dom';
import { menuCategoryData } from "../data/menuData";

function MenuItems({ menuData = menuCategoryData }) {
    const menuItems = menuData.map((menuItem, index) => (
        /* <!-- Menu Item --> */
        <div key={index} className="col-lg-4 col-md-6 pt-lg-0 menu-item-col mb-5">
            <Link className="d-block mt-5" to={menuItem.linkTo} >
                <div className={`primary-subheading-wrapper ${menuItem.name.length >= 22 && 'xxl-wrapper'}`}>
                    <div className="w-100">
                        <div className='CHANGEMELATER mb-0 primary-subheading'>{menuItem.name}</div>
                    </div>
                </div>
                <>
                    <picture loading="lazy">
                        <source
                            srcSet={`${menuItem.imgFilePath}/desktop/500x375${menuItem.img}`}
                            media="(min-width: 768px)" />
                        <img className="w-100 menu-item-img"
                            srcSet={`${menuItem.imgFilePath}/mobile/345x260${menuItem.img}`}
                            alt="" />
                    </picture>
                    {menuItem.btn &&
                        <div className="btn-bottom-wrapper">
                            <div className="btn btn-primary menu-item-img-cta">{menuItem.btn}</div>
                        </div>}
                </>
            </Link>
        </div>
    ));
    const sections = [];
    for (let i = 0; i < menuItems.length; i += 3) {
        sections.push(
            <div key={i} className="row px-lg-4 justify-content-center">
                {menuItems.slice(i, i + 3)}
            </div>
        );
    }
    return (
        <section>
            {sections}
        </section>
    );
}

export default MenuItems;