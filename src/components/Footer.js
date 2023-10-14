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
                <div className="footer-wrapper px-3 py-4 bg-ag-dark">
                    <div className="footer-grid">
                        <ul className="nav nav-uncollapsed hide-mobile main-links">
                            {footerItemsDataMain.map((link, index) => {
                                return (
                                    <li className={link.liClass} key={index}>
                                        <a className={link.anchorClass} href={link.url} target={link.target}>{link.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="nav nav-uncollapsed g-second privacy-links">
                            {footerItemsSecondary.map((link, index) => {
                                return (
                                    <li className={link.liClass} key={index}>
                                        <a className={link.anchorClass} href={link.url} target={link.target}>{link.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="social-links m-0 p-0 w-100 h-100 d-flex text-center flex-column g-third">
                            {socialNavItems.map((link, index) => {
                                return (
                                    <li key={index}><a href={link.url}
                                        className={link.anchorClass} aria-label={link.ariaLabel} target={link.target}></a></li>
                                );
                            })}
                        </ul>
                        <div className="footer-text">
                            <span className="rights-reserved"> &#169;{year} Bloomin'
                                Brands, Inc. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


