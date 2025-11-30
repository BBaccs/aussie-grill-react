/* @TODO: Transition animation for mobile nav btn fix catering order button on navabar! */
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import {
    socialNavItems,
    franchiseNavItems,
    navItems,
} from "../data/linksData";

function NavBar({ alertBar = true, alertBarMsg = 'Follow the Adventure on', pickup = false }) {
    const location = useLocation();
    const [data, setData] = useState({
        open: false,
        navData: []
        // navData: location.pathname === '/franchise' ? franchiseNavItems : navItems
    });
    const { open, navData } = data;

    const resolveClickHandler = (clickHandler) => {
        setData(prevData => {
            if (prevData.open) {
                return { ...prevData, open: false };
            } else if (clickHandler === 'franchise') {
                return { ...prevData, navData: franchiseNavItems };
            }
            return prevData; // Return the previous state unchanged if none of the conditions match
        });
    }


    const handleClick = () => {
        setData(prevData => ({ ...prevData, open: !prevData.open }));
    };

    const NavItemsRenderer = ({ navData, resolveClickHandler, hideFromTabOrder }) => {
        return (
            <> {navData.map((link, index) => (
                <li key={index} className={`nav-item ${link.liClass || ''}`}>
                    {link.externalLink || link.hashLink
                        ? <a className="nav-link" href={link.url} target={link.target} rel={link.rel} title={link.title} tabIndex={hideFromTabOrder ? -1 : undefined }>
                            {link.name}
                        </a>
                        : <NavLink onClick={() => resolveClickHandler(link.clickHandler)} // Close hamburger for mobile version, franchise link will update franchise nav
                            className="nav-link" exact={link.url.includes("#")} to={link.url} tabIndex={hideFromTabOrder ? -1 : undefined}>
                            {link.name}
                        </NavLink>
                    }
                </li>
            ))
            }
            </>
        )
    }

    const onDialogKeyDown = (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            setData(prev => ({ ...prev, open: false }));
        }
    };


    useEffect(() => {
        // console.log("Current Location:", location);
        if (location.pathname === '/franchise') {
            setData(prevData => {
                // console.log("Previous Data before updating to franchiseNavItems:", prevData);
                return {
                    ...prevData,
                    navData: franchiseNavItems,
                };
            });
        } else {
            setData(prevData => {
                // console.log("Previous Data before updating to navItems:", prevData);
                return {
                    ...prevData,
                    navData: navItems
                };
            });
        }
    }, [location.pathname]);


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
        <header>
            <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>
            <Link to="/privacyPolicy/accessibilityStatement" className="sr-only sr-only-focusable">Skip to accessibility statement</Link>
            {generateAlertBar}
            <div className="sticky-top nav-border">
                <nav className="navbar navbar-dark bg-ag-dark">
                    <div className="container-lg d-flex nav-inner-wrapper">
                        {/* @TODO: When the transition animation is added we'll need to add classes like 'collapse' to the btn, which temporarily hides it during transition*/}
                        <button onClick={handleClick} className={open ? "navbar-toggler d-md-none d-lg-none d-xl-none" : "navbar-toggler d-md-none d-lg-none d-xl-none collapsed"} type="button"
                            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded={open ? 'true' : 'false'} aria-label={open ? 'Close navigation' : 'Open navigation'} >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="nav nav-uncollapsed ag-nav" aria-hidden={open ? 'true' : 'false'}>
                            {!pickup ?
                                <NavItemsRenderer hideFromTabOrder={open} navData={navData} resolveClickHandler={resolveClickHandler} />
                                :
                                <NavItemsRenderer hideFromTabOrder={open} navData={navData.filter(link => link.name !== 'Order')} resolveClickHandler={resolveClickHandler} />
                            }
                        </ul>
                        <a href="/" tabIndex={open ? -1 : undefined}  >
                            <picture loading="lazy">
                                <source srcSet="/assets/other/mobile/agLogo.png" media="(min-width: 1024px)" />
                                <img className="ml-2 ag-logo" src="/assets/other/mobile/agLogo.png"
                                    alt="Home" />
                            </picture>
                        </a>
                    </div>
                </nav>
                <div className={`bg-ag-dark p-4 ${open ? "collapse show" : "collapse"}`} id="navbarToggleExternalContent" onKeyDown={onDialogKeyDown}>
                    <nav aria-label="Mobile navigation">
                        <ul className="hamburger-dropdown nav d-flex flex-column">
                            <NavItemsRenderer navData={navData} resolveClickHandler={resolveClickHandler} open={data.open} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );

}

export default NavBar;