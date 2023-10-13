/* @TODO Remake footer links so there is not a mobile and a desktop but one, use React media queries instead of CSS media queries becasue there may be HTML differences */
import React, { Component } from "react";
import { footerItemsDataMain } from "../data/footerItemsDataMain.js";
import { footerItemsSecondary } from "../data/footerItemsSecondary.js";
import { socialNavItems } from "../data/socialNavItems.js";

class Footer extends Component {
    render() {
        let year = new Date().getFullYear();
        return (
            <footer className="footer-outer-wrapper">
                <div className="footer-wrapper px-3 py-4 bg-ag-dark text-white">
                    <div className="m-auto d-lg-flex d-none justify-content-between desktop-footer">
                        <div>
                            <ul className="nav nav-uncollapsed main-links">
                                {footerItemsDataMain.map((link, index) => {
                                    return (
                                        <li className={link.liClass} key={index}>
                                            <a className={link.anchorClass} href={link.url} target={link.target}>{link.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="nav nav-uncollapsed privacy-links">
                                {footerItemsSecondary.map((link, index) => {
                                    return (
                                        <li className={link.liClass} key={index}>
                                            <a className={link.anchorClass} href={link.url} target={link.target}>{link.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="mt-n-10">
                            <ul className="social-links d-flex text-center flex-row justify-content-end m-0 p-0 w-100 h-auto">
                                {socialNavItems.map((link, index) => {
                                    return (
                                        <li className={"m-2"} key={index}><a href={link.url}
                                            className={link.anchorClass} aria-label={'Aussie Grill ' + link.ariaLabel} target={link.target}></a></li>
                                    );
                                })}
                            </ul>
                            <div><span className="rights-reserved text-capitalize text-right w-100 font-small"> &#169;{year} Bloomin'
                                Brands, Inc. All Rights Reserved.</span></div>
                        </div>
                    </div>
                    <div className="d-grid d-lg-none mobile-footer-grid">
                        <ul className="nav nav-uncollapsed d-grid">
                            {footerItemsSecondary.map((link, index) => {
                                return (
                                    <li className={link.liClass} key={index}>
                                        <a className={link.anchorClass} href={link.url} target={link.target}>{link.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="social-links m-0 p-0 w-100 h-100 d-flex text-center flex-column">
                            {socialNavItems.map((link, index) => {
                                return (
                                    <li className={"m-2"} key={index}><a href={link.url}
                                        className={link.anchorClass} aria-label={link.ariaLabel} target={link.target}></a></li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="mt-3 d-lg-none">
                        <span className="rights-reserved text-capitalize text-center w-100 font-small">
                            &#169;{year} Bloomin' Brands, Inc.
                            All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


