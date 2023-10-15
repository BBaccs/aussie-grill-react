/* @TODO: Transition animation for mobile nav btn */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    socialNavItems,
    franchiseNavItems,
    navItems,
} from "../data";

const Test = ({ navData, handleClick, isMobile = false }) => {
    return (
        <> {navData.map((link, index) => (
            <li key={index} className={`nav-item ${link.liClass || ''}`}>
                {link.externalLink || link.hashLink
                    ? <a className="nav-link" href={link.url} target={link.target} rel={link.rel} title={link.title}>
                        {link.name}
                    </a>
                    : <NavLink onClick={isMobile ? handleClick : undefined} // Close hamburger for mobile version
                        className="nav-link" exact={link.url.includes("#")} to={link.url}>
                        {link.name}
                    </NavLink>
                }
            </li>
        ))
        }
        </>
    )
}

class NavBar extends Component {
    static defaultProps = {
        alertBar: true,
        alertBarMsg: 'Follow the Adventure on',
        pickup: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            navData: window.location.pathname === '/franchise' ? franchiseNavItems : navItems
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.target.className.includes('navbar-toggler-icon') && this.setState(prevState => ({ open: !prevState.open }));
    }

    // The prevProps parameter in the componentDidUpdate method represents the previous props that the component received before the update. 
    // It is automatically provided by React and does not need to be explicitly passed.
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location && location.pathname === '/franchise' && prevProps.location.pathname !== '/franchise') {
            this.setState({ navData: franchiseNavItems });
        }
    }

    render() {
        const { alertBar, alertBarMsg, pickup } = this.props;
        const { open, navData } = this.state;
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
                <Link to="/privacyPolicy/accessibilityStatement" className="sr-only sr-only-focusable">Skip to accessibility statement</Link>
                {generateAlertBar}
                <div className="sticky-top nav-border">
                    <nav className="navbar navbar-dark bg-ag-dark">
                        <div className="container-lg d-flex nav-inner-wrapper">
                            {/* @TODO: When the transition animation is added we'll need to add classes like 'collapse' to the btn, which temporarily hides it during transition*/}
                            <button onClick={this.handleClick} className={open ? "navbar-toggler d-md-none d-lg-none d-xl-none" : "navbar-toggler d-md-none d-lg-none d-xl-none collapsed"} type="button"
                                data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded={open ? 'true' : 'false'} aria-label={open ? 'Close navigation' : 'Open navigation'} >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <ul className="nav nav-uncollapsed ag-nav">
                                {!pickup ?
                                    <Test navData={navData} />
                                    :
                                    <Test navData={navData.filter(link => link.name !== 'Order')} />
                                }
                            </ul>
                            <a href="/">
                                <picture loading="lazy">
                                    <source srcSet="/assets/other/mobile/agLogo.png" media="(min-width: 1024px)" />
                                    <img className="ml-2 ag-logo" src="/assets/other/mobile/agLogo.png"
                                        alt="Aussie Grill By Outback Steakhouse" />
                                </picture>
                            </a>
                        </div>
                    </nav>
                    <nav className={`bg-ag-dark p-4 ${open ? "collapse show" : "collapse"}`} id="navbarToggleExternalContent">
                        <>
                            <ul className="hamburger-dropdown nav d-flex flex-column">
                                <Test navData={navData} isMobile={true} />
                            </ul>
                        </>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;