/* @TODO */
/* Transition animation for mobile nav btn */
/* If we're on link X, activate given state (if necessarey), which could hide link X in navbar? Specifically for the PICKUP / ORDER page as well as the FRANCHISE page (different navigation data) */
/* However, if this is just done w/ an onClick, it won't work for manually typing in the URL / using the browser back button */

/* On either DOM load or when a new component / anything is loaded, we should check the URL, and activate said state per that URL. */
/* Fix Nav Link active state */

// @TODO, GIVEAWAYS should be in the hamburger menu only (and in the footer), not in the main nav.
import React, { Component } from "react";
import { navItems } from "../data/navItems.js";
import { socialNavItems } from "../data/socialNavItems.js";
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
    static defaultProps = {
        alertBar: true,
        alertBarMsg: 'Follow the Adventure on',
        pickup: false,
        navData: navItems,
    };
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
        // this.handleUrlChange = this.handleUrlChange.bind(this);
    }
    handleClick(e) {
        this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    }

    render() {
        function logURLChanges() {
            let prevPathname = window.location.pathname;

            window.addEventListener('popstate', () => {
                console.log(`Current URL: ${window.location.pathname}`);
                console.log(`Previous URL: ${prevPathname}`);
                prevPathname = window.location.pathname;
            });
        }

        logURLChanges();

        function hi() {
            window.addEventListener("DOMContentLoaded", () => {
                console.log("DOM fully loaded and parsed");
            });
        }
        hi();
        // Destructuring props & state
        const { alertBar, alertBarMsg, pickup } = this.props;
        const { clicked } = this.state;

        const generateAlertBar = alertBar ?
            <div className="py-2 nav-banner text-white">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="mr-2">{alertBarMsg}</span>
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
                <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>
                {generateAlertBar}
                <div className="sticky-top nav-border">
                    <nav className="navbar navbar-dark bg-ag-dark">
                        <div className="container-lg d-flex nav-inner-wrapper">
                            {/*When the transition animation is added we'll need to add classes like 'collapse' to the btn, which temporarily hides it during transition*/}
                            <button onClick={this.handleClick} className={clicked ? "navbar-toggler d-md-none d-lg-none d-xl-none" : "navbar-toggler d-md-none d-lg-none d-xl-none collapsed"} type="button"
                                data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded={clicked ? 'true' : 'false'} aria-label={clicked ? 'Close navigation' : 'Open navigation'} >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <ul className="nav nav-uncollapsed ag-nav">
                                {!pickup ?
                                    this.props.navData.map((link, index) => {
                                        return (
                                            <li key={index} className={`${link.liClass ? link.liClass : ''} nav-item`}>
                                                {
                                                    link.externalLink
                                                        ? <a className="nav-link" href={link.url}>{link.name}</a> :
                                                        <NavLink activeClassName="active-link" className="nav-link" to={link.url} title={link.title}>{link.name}</NavLink>}
                                            </li>
                                        );
                                    })
                                    :
                                    this.props.navData.filter(link => link.name !== 'Order').map((link, index) => {
                                        return (
                                            <li key={index} className={`${link.liClass} nav-item`}>
                                                {
                                                    link.externalLink
                                                        ? <a className="nav-link" href={link.url}>{link.name}</a>
                                                        : <NavLink activeClassName="active-link" className="nav-link" to={link.url}>{link.name}</NavLink>
                                                }
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <a href="/">
                                <picture>
                                    <source srcSet="/assets/other/mobile/agLogo.png" media="(min-width: 1024px)" />
                                    <img className="ml-2 ag-logo" src="/assets/other/mobile/agLogo.png"
                                        alt="Aussie Grill By Outback Steakhouse" />
                                </picture>
                            </a>
                        </div>
                    </nav>
                    <div className={clicked ? "collapse show" : "collapse"} id="navbarToggleExternalContent">
                        <div className="bg-ag-dark p-4">
                            <ul className="hamburger-dropdown nav d-flex flex-column">
                                {this.props.navData.map((link, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            {
                                                link.externalLink
                                                    ? <a className="nav-link" href={link.url}>{link.name}</a> :
                                                    <NavLink
                                                        className={isActive => "nav-link" + (!isActive ? " unselected" : "  active-link")}
                                                        to={link.url}>{link.name}
                                                    </NavLink>}
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


