import React, { Component } from "react";
import { navItems } from "../data/navItems.js";
import { socialNavItems } from "../data/socialNavItems.js";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>

                <div class="py-2 nav-banner text-white">
                    <div class="d-flex justify-content-center align-items-center">
                        <span class="mr-2">Follow the Adventure on</span>
                        <ul class="social-links d-flex mb-1 pl-0">
                            {socialNavItems.map((link, index) => {
                                return (
                                    <li key={index}><a href={link.url}
                                        class={link.anchorClass} aria-label={link.ariaLabel} target={link.target}></a></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div class="sticky-top nav-border">
                    <nav class="navbar navbar-dark bg-ag-dark">
                        <div class="container-lg d-flex nav-inner-wrapper">
                            <button onClick={this.handleClick} class="navbar-toggler d-md-none d-lg-none d-xl-none" type="button" data-toggle="collapse"
                                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <ul class="nav nav-uncollapsed ag-nav">
                                {navItems.map((link, index) => {
                                    return (
                                        <li key={index} class={link.liClass}>
                                            <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                        </li>
                                    )
                                })};
                            </ul>
                            <a aria-label="homepage" href="index.html">
                                <picture>
                                    <source srcSet="assets/other/mobile/agLogoLarge.png" media="(min-width: 1024px)" />
                                    <img class="ml-2 ag-logo" src="assets/other/mobile/agLogo.png"
                                        alt="Aussie Grill By Outback Steakhouse" />
                                </picture>
                            </a>
                        </div>
                    </nav>
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-ag-dark p-4">
                            <ul class="nav d-flex flex-column">
                                {navItems.map((link, index) => {
                                    return (
                                        <li key={index} class="nav-item">
                                            <a className={link.anchorClass} href={link.url}>{link.name}</a>
                                        </li>
                                    )
                                })};
                            </ul>
                        </div>
                    </div>
                </div>

                {/* {navItems.map((link, index) => {

                })} */}
            </div>
        );
    }
}

export default NavBar;


