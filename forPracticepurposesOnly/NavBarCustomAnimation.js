import React, { Component } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/navItems.js";
import { socialNavItems } from "../data/socialNavItems.js";
import { NavLink } from 'react-router-dom';
import { franchiseNavItems } from "../data/franchiseNavItems.js";

class NavBar2 extends Component {
  static defaultProps = {
    alertBar: true,
    alertBarMsg: 'Follow the Adventure on',
    pickup: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      transitioning: false,
      navData: window.location.pathname === '/franchise' ? franchiseNavItems : navItems
    };
  }

  startTransition = () => {
    this.setState({ transitioning: true });

    setTimeout(() => {
      this.setState({ transitioning: false });
    }, 1500); // Duration of the transition animation in milliseconds
  };

  handleClick = () => {
    const { open } = this.state;
      this.startTransition();
      this.setState({ open: !open });
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location && location.pathname === '/franchise' && prevProps.location.pathname !== '/franchise') {
      this.setState({ navData: franchiseNavItems });
    }
  }

  render() {
    const { alertBar, alertBarMsg, pickup } = this.props;
    const { open, transitioning } = this.state;

    const generateAlertBar = alertBar ? (
      <div className="py-2 nav-banner text-white">
        <div className="d-flex justify-content-center align-items-center">
          <span className="mr-2">{alertBarMsg}</span>
          <ul className="social-links d-flex mb-1 pl-0">
            {socialNavItems.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={link.anchorClass} aria-label={link.ariaLabel} target={link.target}></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : null;

    return (
      <div>
        <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>
        <Link href="/privacyPolicy/accessibilityStatement" className="sr-only sr-only-focusable">Skip to accessibility statement</Link>
        {generateAlertBar}
        <div className="sticky-top nav-border">
          <nav className="navbar navbar-dark bg-ag-dark">
            <div className="container-lg d-flex nav-inner-wrapper">
              <button
                onClick={this.handleClick}
                className={open ? "navbar-toggler d-md-none d-lg-none d-xl-none" : "navbar-toggler d-md-none d-lg-none d-xl-none collapsed"}
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded={open ? 'true' : 'false'}
                aria-label={open ? 'Close navigation' : 'Open navigation'}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="nav nav-uncollapsed ag-nav">
                {!pickup
                  ? this.state.navData.map((link, index) => (
                      <li key={index} className={`${link.liClass ? link.liClass : ''} nav-item`}>
                        {link.externalLink || link.hashLink
                          ? <a className="nav-link" href={link.url}>{link.name}</a>
                          : <NavLink className="nav-link" to={link.url} exact={link.url.includes("#")} title={link.title}>{link.name}</NavLink>
                        }
                      </li>
                    ))
                  : this.state.navData.filter(link => link.name !== 'Order').map((link, index) => (
                      <li key={index} className={`${link.liClass} nav-item`}>
                        {link.externalLink || link.hashLink
                          ? <a className="nav-link" href={link.url}>{link.name}</a>
                          : <NavLink className="nav-link" to={link.url}>{link.name}</NavLink>
                        }
                      </li>
                    ))
                }
              </ul>
              <a href="/">
                <picture loading="lazy">
                  <source srcSet="/assets/other/mobile/agLogo.png" media="(min-width: 1024px)" />
                  <img className="ml-2 ag-logo" src="/assets/other/mobile/agLogo.png" alt="Aussie Grill By Outback Steakhouse" />
                </picture>
              </a>
            </div>
          </nav>
          <div className={open ? "collapse show" : transitioning ? " collapsing" : "collapse"} id="navbarToggleExternalContent" style={ transitioning ? {height: '450px'} : {height: 'ç'}}>
            <div className="bg-ag-dark p-4">
              <ul className="hamburger-dropdown nav d-flex flex-column">
                {this.state.navData.map((link, index) => (
                  <li key={index} className="nav-item">
                    {link.externalLink || link.hashLink
                      ? <a className="nav-link" href={link.url}>{link.name}</a>
                      : <NavLink
                          onClick={this.handleClick}
                          className="nav-link"
                          to={link.url}>{link.name}
                        </NavLink>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar2;
