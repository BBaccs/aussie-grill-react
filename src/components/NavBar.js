/* @TODO */
/* Transition animation for mobile nav btn */
import React, { Component } from "react";
import { navItems } from "../data/navItems.js";
import { socialNavItems } from "../data/socialNavItems.js";
import { NavLink } from 'react-router-dom';
import { franchiseNavItems } from "../data/franchiseNavItems.js";

class NavBar extends Component {
    static defaultProps = {
        alertBar: true,
        alertBarMsg: 'Follow the Adventure on',
        pickup: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            navData: window.location.pathname === '/franchise.html' ? franchiseNavItems : navItems
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(this.state.clicked ? { clicked: false } : { clicked: true });
    }

    // The prevProps parameter in the componentDidUpdate method represents the previous props that the component received before the update. 
    // It is automatically provided by React and does not need to be explicitly passed.
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location && location.pathname === '/franchise.html' && prevProps.location.pathname !== '/franchise.html') {
            this.setState({ navData: franchiseNavItems });
        }
        console.log('locaiton:', location, 'location.pathname:', location.pathname)
    }

    render() {

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
                <a href="/privacyPolicy/accessibilityStatement.html" className="sr-only sr-only-focusable">Skip to accessibility statement</a>
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
                                    this.state.navData.map((link, index) => {
                                        return (
                                            <li key={index} className={`${link.liClass ? link.liClass : ''} nav-item`}>
                                                {
                                                    link.externalLink || link.hashLink
                                                        ? <a className="nav-link" href={link.url}>{link.name}</a> :
                                                        <NavLink className="nav-link" to={link.url} exact={link.url.includes("#")} title={link.title}>{link.name}</NavLink>
                                                }
                                            </li>
                                        );
                                    })
                                    :
                                    this.state.navData.filter(link => link.name !== 'Order').map((link, index) => {
                                        return (
                                            <li key={index} className={`${link.liClass} nav-item`}>
                                                {
                                                    link.externalLink || link.hashLink
                                                        ? <a className="nav-link" href={link.url}>{link.name}</a>
                                                        : <NavLink className="nav-link" to={link.url}>{link.name}</NavLink>
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
                                {this.state.navData.map((link, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            {
                                                link.externalLink || link.hashLink
                                                    ? <a className="nav-link" href={link.url}>{link.name}</a> :
                                                    <NavLink
                                                        onClick={this.handleClick}
                                                        className="nav-link"
                                                        to={link.url}>{link.name}
                                                    </NavLink>
                                            }
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


