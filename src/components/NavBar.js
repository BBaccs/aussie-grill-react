/* @TODO */
/* Transition animation for mobile nav btn */
/* Catering logic */

import React, { Component } from "react";
import { navItems } from "../data/navItems.js";
import { socialNavItems } from "../data/socialNavItems.js";

class NavBar extends Component {
    static defaultProps = {
        alertBar: true,
        alertBarMsg: 'Follow the Adventure on',
        pickup: false
        // ,
        // navData: NavItems,
        // catering: false,

    };
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    }
    render() {
        const alertBar = this.props.alertBar ?
            <div className="py-2 nav-banner text-white">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="mr-2">{this.props.alertBarMsg}</span>
                    <ul className="social-links d-flex mb-1 pl-0">
                        {socialNavItems.map((link, index) => {
                            return (
                                <li key={index}><a href={link.url}
                                    className={link.anchorClass} aria-label={link.ariaLabel} target={link.target}></a></li>
                            );
                        })}
                    </ul>
                </div>
            </div> :
            '';
        return (
            <div>
                {/* Skip Link */}
                <a
                    className="sr-only sr-only-focusable"
                    href="#skip-link"
                >
                    Skip to main content
                </a>
                {alertBar}
                <div className="sticky-top nav-border">
                    <nav className="navbar navbar-dark bg-ag-dark">
                        <div className="container-lg d-flex nav-inner-wrapper">
                            {/*When the transition animation is added we'll need to add classes like 'collapse' to the btn, which temporarily hides it during transition*/}
                            <button onClick={this.handleClick} className={this.state.clicked ? "navbar-toggler d-md-none d-lg-none d-xl-none" : "navbar-toggler d-md-none d-lg-none d-xl-none collapsed"} type="button"
                                data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded={this.state.clicked ? 'true' : 'false'} aria-label={this.state.clicked ? 'Close navigation' : 'Open navigation'} >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <ul className="nav nav-uncollapsed ag-nav">
                                {navItems.map((link, index) => {
                                    if (!this.props.pickup) {
                                        return (
                                            <li key={index} className={link.liClass}>
                                                <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                            </li>
                                        )

                                    } else {
                                        return (
                                            <li key={index} className={link.name === 'Order' ? `${link.liClass} hidePickup` : link.liClass}>
                                                <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                            </li>
                                        );
                                    }

                                })}
                            </ul> */}
                            <ul className="nav nav-uncollapsed ag-nav">
                                {!this.props.pickup ?
                                    navItems.map((link, index) => {
                                        return (
                                            <li key={index} className={link.liClass}>
                                                <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                            </li>
                                        );
                                    })
                                    : 
                                    navItems.filter(link => link.name !== 'Order').map((link, index) => {
                                        return (
                                            <li key={index} className={link.liClass}>
                                                <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <a href="index.html">
                                <picture>
                                    <source srcSet="assets/other/mobile/agLogo.png" media="(min-width: 1024px)" />
                                    <img className="ml-2 ag-logo" src="/assets/other/mobile/agLogo.png"
                                        alt="Aussie Grill By Outback Steakhouse" />
                                </picture>
                            </a>
                        </div>
                    </nav>
                    <div className={this.state.clicked ? "collapse show" : "collapse"} id="navbarToggleExternalContent">
                        <div className="bg-ag-dark p-4">
                            <ul className="nav d-flex flex-column">
                                {navItems.map((link, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;


