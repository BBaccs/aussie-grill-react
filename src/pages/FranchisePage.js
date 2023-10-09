import HeroImg from '../components/HeroImg';

export default function FranchisePage() {
    return (
        <>
            {/* <NavBar navData={franchiseNavItems} /> */}
            <div id="franchise-page" className="landing-page">
                <HeroImg img={"freestanding.jpg"} />
                <div id="why-aussie-section-anchor" className="nav-anchor"></div>
                <div style={{ paddingRight: '0px', paddingLeft: '0px' }} className="container-fluid landing-content-wrapper">
                    <div className="content-inner-wrapper m-auto">
                        <h1 className="sr-only">Franchise Information</h1>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <h2 className="landing-subheading">WHY AUSSIE GRILL</h2>
                                <p>Aussie Grill<sup>®</sup> is here to redefine the possibilities of fast-casual dining. We
                                    feature an unrivaled menu variety of sandwiches, burgers, large plates, and salads in just 4
                                    minutes, unlike any other fast-casual restaurant on the market today.</p>
                                <p>Our chef-driven menu delivered at wild speeds is the envy of our industry. In a world
                                    increasingly strapped for time and starved for quality, we bring bold, bright, adventurous
                                    flavors and fresh ingredients to a fun, invigorating, fast-casual setting in a way our
                                    competition cannot replicate.</p>
                                <p>We offer convenient, fast, and genuinely friendly service in a fun environment. Our designs
                                    incorporate a mixture of exposed brick, wood, metals, and graphic art that brings the
                                    adventurous spirit of Australia to life. With flexible footprints, our restaurant is ideal
                                    for venues of all shapes and sizes. From food halls to freestanding locations – perfect for
                                    everyone.</p>
                            </div>

                            <div className="row mb-md-4">
                                <div className="col-12 col-md-4">
                                    <picture loading="lazy">
                                        <source srcSet="/assets/other/desktop/webFloorPlanFreeStandingv3.jpg"
                                            media="(min-width: 1024px)" />
                                        <img className="w-100 h-100"
                                            srcSet="/assets/other/mobile/webFloorPlanFreeStandingv3Mobile.jpg"
                                            alt="2,605 square feet, 72 seats & 23 tables" />
                                    </picture>
                                </div>
                                <div className="col-12 col-md-4 my-3 my-md-0">
                                    <picture loading="lazy">
                                        <source srcSet="/assets/other/desktop/webFloorPlanv3.jpg"
                                            media="(min-width: 1024px)" />
                                        <img className="w-100 h-100" srcSet="/assets/other/mobile/webFloorPlanv3Mobile.jpg"
                                            alt="2,000 square feet, 74 seats & 24 tables" />
                                    </picture>
                                </div>
                                <div className="col-12 col-md-4 mb-3 mb-md-0">
                                    <picture loading="lazy">
                                        <source srcSet="/assets/other/desktop/webFloorPlanFoodHallv3.jpg"
                                            media="(min-width: 1024px)" />
                                        <img className="w-100 h-100"
                                            srcSet="/assets/other/mobile/webFloorPlanFoodHallv3Mobile.jpg"
                                            alt="Shared Dining, 803 square ft & 18 fot frontage" />
                                    </picture>
                                </div>
                            </div>

                            <div id="investment-wrapper" className="col-12 d-flex bring-up-z-index p-0">
                                <div
                                    className="investment-section footer-wrapper col-8 col-lg-4 col-md-9 mt-md-4 text-white text-center p-4 pl-lg-0">

                                    <h2 className="mb-4"><span className="landing-subheading text-white">INVESTMENT
                                        CONSIDERATIONS</span></h2>

                                    <h3><span>INITIAL INVESTMENT</span></h3>
                                    <p>starting at $500k</p>

                                    <h3><span>COMPACT FOOTPRINTS</span></h3>
                                    <p><span className="d-block m-auto">from 75m<sup>2</sup>/805ft<sup>2</sup> to
                                        242m2/2,605ft<sup>2</sup>
                                        support efficient and fast operations</span></p>

                                    <h3><span>FAST-CASUAL SERVICE MODEL</span></h3>
                                    <p>reduces staffing</p>

                                    <h3><span>EFFICIENT KITCHEN & MENU DESIGN</span></h3>
                                    <p>reduces operational complexity</p>

                                    <h3><span>PER PERSON CHECK</span></h3>
                                    <p>average between USD $10-$12</p>

                                    <h3><span>LOCALIZED SUPPLY CHAIN</span></h3>
                                    <p>lowers complexity and cost of goods</p>

                                    <h3><span>INITIAL FRANCHISE FEE</span></h3>
                                    <p>of USD $35K and 5% royalty on gross sales</p>

                                </div>

                                <div className="bring-up-z-index col-4 col-lg-2 col-md-3 px-0 text-left ml-0 mt-md-4">
                                    <picture loading="lazy">
                                        <source srcSet="/assets/other/desktop/verticalImage.jpg"
                                            media="(min-width: 1024px)" />
                                        <img className="w-100 h-100 vertical-food-img"
                                            srcSet="/assets/other/mobile/verticalImage.jpg" alt="" />
                                    </picture>
                                </div>

                                {/* <!-- DESKTOP SUPPORT SECTION --> */}
                                <div className="col-lg-5 col-md-12 mt-4 mt-md-4 ml-3">
                                    <div className="orange-bg mb-2" style={{ Height: '45px' }}>
                                        <h2 className="landing-subheading pt-2">SUPPORT YOU GET</h2>
                                    </div>
                                    <div className="row">
                                        <ul className="text-left d-inline-block col-md-6 mb-0">
                                            <li>
                                                <h3>
                                                    SITE SELECTION & DESIGN
                                                </h3>
                                                <p>
                                                    Flexible footprints to meet the diverse needs of each location.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    SUPPLY CHAIN & PROCUREMENT
                                                </h3>
                                                <p>
                                                    Assistance with Procurement; Logistics, Quality and Assurance, Planning and
                                                    Analytics.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    RESEARCH & DEVELOPMENT
                                                </h3>
                                                <p>
                                                    Ensure that the menu and products mirror the brand perception in the market
                                                    to attract your targeted customer.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    CONSTRUCTION
                                                </h3>
                                                <p>
                                                    Seasoned leadership to help consult and guide you through the construction
                                                    process.
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="text-left d-inline-block col-md-6">
                                            <li>
                                                <h3>
                                                    RESTAURANT OPERATIONS TRAINING
                                                </h3>
                                                <p>
                                                    New store opening training support.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    NEW STORE OPENING MARKETING
                                                </h3>
                                                <p>
                                                    Support of marketing plans and materials for all channels and new store
                                                    opening events.
                                                </p>
                                            </li>
                                            <li>
                                                <h3>
                                                    ONGOING ASSISTANCE
                                                </h3>
                                                <p>
                                                    Cross-functional ongoing support from Finance, Marketing, Operations, R&D,
                                                    Supply Chain, IT and Human Resources.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <div id="investment-section-anchor-dropdown"></div> */}
                            <div id="support-anchor" className="nav-anchor"></div>

                            {/* <!-- MOBILE SUPPORT SECTION --> */}
                            <div className="support-section mobile-support-section">
                                <div className="slanted-bg orange-bg">
                                    <h2 className="landing-subheading pt-2 w-100">SUPPORT YOU GET</h2>
                                </div>
                                <div className="row mt-4">
                                    <ul className="d-inline-block col-6 mb-0">
                                        <li>
                                            <h3>
                                                SITE SELECTION & DESIGN
                                            </h3>
                                            <p>
                                                Flexible footprints to meet the diverse needs of each location.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                SUPPLY CHAIN & PROCUREMENT
                                            </h3>
                                            <p>
                                                Assistance with Procurement; Logistics, Quality and Assurance, Planning and
                                                Analytics.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                RESEARCH & DEVELOPMENT
                                            </h3>
                                            <p>
                                                Ensure that the menu and products mirror the brand perception in the market to
                                                attract your targeted customer.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                CONSTRUCTION
                                            </h3>
                                            <p>
                                                Seasoned leadership to help consult and guide you through the construction
                                                process.
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="d-inline-block col-6 d-flex flex-column justify-content-center mb-0">
                                        <li>
                                            <h3>
                                                RESTAURANT OPERATIONS TRAINING
                                            </h3>
                                            <p>
                                                New store opening training support.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                NEW STORE OPENING MARKETING
                                            </h3>
                                            <p>
                                                Support of marketing plans and materials for all channels and new store opening
                                                events.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                ONGOING ASSISTANCE
                                            </h3>
                                            <p>
                                                Cross-functional ongoing support from Finance, Marketing, Operations, R&D,
                                                Supply Chain, IT and Human Resources.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="d-flex w-100 justify-content-end">
                                                <img loading="lazy" style={{ marginRight: '-50px' }}
                                                    srcSet="/assets/agGraphicElements/animals/bullFullMedium.png" alt="" />
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-12 orange-box p-3 text-white m-auto mt-lg-4">
                                <h2 className="landing-subheading text-white sr-only">TESTOMONIAL</h2>
                                <q>It has been great being part of the Aussie Grill family for the last couple of years. We
                                    currently have two
                                    restaurants, and already have new locations planned for expansion. I believe that the menu
                                    variety and the
                                    quality of food we serve, along with great hospitality is what makes our guests keep coming
                                    back.
                                </q>
                                <div className="w-100 text-white mt-2">-Sultan S. Alsorayai, Saudi Arabia franchisee</div>
                            </div>

                            <div id="qualifications-anchor" className="nav-anchor"></div>
                            <div id="qualifications-section" className="col-md-12 mb-3">
                                <h2 className="landing-subheading mt-4">QUALIFICATIONS</h2>
                                <div className="row">
                                    <ul className="text-left d-inline-block col-md-6 mb-0">
                                        <li>Business success with multi-unit restaurant or hospitality sector operations.</li>
                                        <li>Experience in non-traditional locations such as airports, universities, and military
                                            bases.</li>
                                        <li>Local knowledge and market intelligence relating to consumer preferences, real
                                            estate, government regulations, labor, and distribution.</li>
                                        <li>Passion for food, people and community.</li>
                                    </ul>
                                    <ul className="text-left d-inline-block col-md-6">
                                        <li>Desire to grow - minimum commitment of 5-10 units.</li>
                                        <li>Focused on exceptional operations and customer service.</li>
                                        <li>Able to develop and lead teams, manage operations and deliver financial results.
                                        </li>
                                        <li>Financially strong, with material liquidity and access to capital to development our
                                            brand - clear access to at least $1M for the minimum 5-unit franchise.</li>
                                    </ul>
                                </div>
                            </div>

                            <span id="available-opportunities-anchor" className="nav-anchor"></span>
                            <div className="col-md-12 mb-4">
                                <h2 className="landing-subheading">AVAILABLE OPPORTUNITIES</h2>
                                <p>Please contact us to learn about our available opportunities</p>
                            </div>

                            <span id="contact-us-anchor" className="nav-anchor"></span>
                            <div className="animal-franchise-wrapper col-md-12 mb-4 ml-md-0">
                                <img loading="lazy" srcSet="/assets/agGraphicElements/animals/mobile/chickenMobile.png" alt="" />
                                <div>
                                    <h2 className="landing-subheading w-100">READY TO JOIN THE ADVENTURE? </h2>
                                    <p>Email us at <a className="standard-link primary-color"
                                        href="mailto:Franchise@AussieGrill.com">Franchise@AussieGrill.com</a></p>
                                </div>
                                <img loading="lazy" srcSet="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png" alt="" />
                            </div>

                            <div className="col-md-12">
                                <p className="disclaimer-txt">This information is not intended as an offer to sell (or the
                                    solicitation of an offer to buy) a franchise. This is for information purposes only. If you
                                    are a resident of, or wish to acquire a franchise for an Aussie Grill by Outback<sup>®</sup>
                                    restaurant to be located in a country or governmental jurisdiction with franchise
                                    regulations, we will not offer you a franchise unless and until we have complied with
                                    applicable pre-sale registration and/or disclosure requirements in your jurisdiction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}