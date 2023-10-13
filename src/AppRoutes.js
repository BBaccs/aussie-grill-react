// Is menu items component necessarry? it's on home page but maybe should be deleted. (The difference is in the mobile view, check other HTML difference), prob shouuld combine into one component.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ACarousel from './hooks/ACarousel.js';
import MenuItems from './components/MenuItems.js';
import Ordering from './components/Ordering';
import OurStoryPage from './pages/OurStoryPage.js';
import CareersPage from './pages/Careers.js';
import ContactPage from './pages/Contact.js';
import GiveawaysPage from './pages/GiveawaysPage.js';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import CcpaPage from './pages/CcpaPage.js';
import AccessibilityPage from './pages/AccessibilityPage.js';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.js';
import Menu from './components/Menu.js';
import MenuPages from './components/MenuPages.js';
import PDP from './hooks/PDP.js';
import FranchisePage from './pages/FranchisePage';
import HeroImg from './components/HeroImg.js';
import { CateringCategoryData } from './data/cateringMenuData/CateringCategoryData.js';
import { homePageCards } from "./data/homePageCards";


function AppRoutes(props) {
    const { category, menuItem } = props;

    return (
        <main id="main-content">
            <Routes>
                {/* Home Page */}
                <Route exact index
                    element={
                        <>
                            <h1 className="sr-only">Welcome to Aussie Grill</h1>
                            <ACarousel />
                            <div id="homepage-container-fluid" className="container-fluid-fluid py-5 pt-1">
                                <MenuItems />
                                <MenuItems menuData={homePageCards} />
                            </div>
                        </>
                    }
                />
                { /*  Static Pages */}
                <Route exact path={'/pickup.html'}
                    element={

                        <Ordering />
                    }
                />
                <Route path={'/ourStory.html'} element={<OurStoryPage />} />
                <Route path={'/careers.html'} element={<CareersPage />} />
                <Route path={'/contact.html'} element={<ContactPage />} />
                <Route path={'/giveaways.html'} element={<GiveawaysPage />} />
                <Route path={'/privacyPolicy/privacyPolicy.html'} element={<PrivacyPolicyPage />} />
                <Route path={'/privacyPolicy/ccpa.html'} element={<CcpaPage />} />
                <Route path={'/privacyPolicy/accessibilityStatement.html'} element={<AccessibilityPage />} />
                <Route path={'/privacyPolicy/termsAndConditions.html'} element={<TermsAndConditionsPage />} />
                { /*  Menu Category Pages */}
                <Route path={'/menu/index.html'} element={<Menu />} />
                {/* @TODO remove title description PROP? */}
                <Route path={`/menu/handhelds/index.html`} element={<MenuPages dataTitle={category} titleDescription={'100% USDA CHOICE BEEF'} />} />
                <Route path={`/menu/${category}/index.html`} element={<MenuPages dataTitle={category} />} />
                { /*  Menu Category for CATERING */}
                <Route path={'/catering/index.html'} element={
                    <>
                        <div className="menu-page mt-0 pt-lg-5 py-4 mb-4">
                            <div className="px-4">
                                <h1 className="pt-lg-2 pb-2">CATERING DONE MORE DARINGLY</h1>
                                <p className="mb-0 primary-color">We offer up a variety of platters to get you fueled through a work
                                    meeting, house party or wherever your next adventure takes you.</p>
                                <p className="mb-0 primary-color">3-hour notice required, some restrictions apply.</p>
                                <p className="mb-0 primary-color">All platters serve 6-8.</p>
                            </div>
                        </div>
                        <Menu menuData={CateringCategoryData} />
                    </>
                } />
                <Route path={`/catering/${category}/index.html`} element={<MenuPages dataTitle={category} />} />

                {/* Individual Catering Menu PDP Pages */}
                <Route path={`/catering/${category}/${menuItem}`} element={<PDP />} />
                {/* Individual Menu PDP Pages */}
                <Route path={`/menu/${category}/${menuItem}`} element={<PDP />} />
                <Route exact path={'/franchise.html'} element={<FranchisePage />}
                />
                <Route path='*' element={<HeroImg img={"productPlaceholderImage.jpg"} />} />
            </Routes>
        </main>
    );
}

export default AppRoutes;
