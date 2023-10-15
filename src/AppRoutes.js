// Is menu items component necessarry? it's on home page but maybe should be deleted. (The difference is in the mobile view, check other HTML difference), prob shouuld combine into one component.
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Hooks
import { ACarousel, PDP } from './hooks';

// Components
import { MenuItems, Ordering, Menu, MenuPages, HeroImg } from './components';

// Pages
import FranchisePage from './pages/FranchisePage';
import OurStoryPage from './pages/OurStoryPage';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';
import GiveawaysPage from './pages/GiveawaysPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CcpaPage from './pages/CcpaPage';
import AccessibilityPage from './pages/AccessibilityPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

// Data
import { CateringCategoryData } from './data/cateringMenuData/CateringCategoryData';
import { homePageCards } from "./data/otherData/homePageCards";

function AppRoutes(props) {
    const { category, menuItem } = props;
    function HomePage() {
        return (
            <>
                <h1 className="sr-only">Welcome to Aussie Grill</h1>
                <ACarousel />
                <div id="homepage-container-fluid" className="container-fluid-fluid py-5 pt-1">
                    <MenuItems />
                    <MenuItems menuData={homePageCards} />
                </div>
            </>
        )
    }

    function CateringPage() {
        return (
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
        )
    }

    function PageNotFound() {
        return (
            <>
                <h1>404, Page not found Bwakkk Bwakkk!</h1>
                <HeroImg img={"productPlaceholderImage.jpg"} alt="" />
            </>
        )
    }

    return (
        <main id="main-content">
            <Routes>
                {/* Home Page */}
                <Route exact index element={<HomePage />} />

                { /*  Static Pages */}
                <Route exact path={'/pickup'} element={<Ordering />} />
                <Route path={'/ourStory'} element={<OurStoryPage />} />
                <Route path={'/careers'} element={<CareersPage />} />
                <Route path={'/contact'} element={<ContactPage />} />
                <Route path={'/giveaways'} element={<GiveawaysPage />} />
                <Route path={'/franchise'} element={<FranchisePage />} />
                <Route path={'/privacyPolicy/privacyPolicy'} element={<PrivacyPolicyPage />} />
                <Route path={'/privacyPolicy/ccpa'} element={<CcpaPage />} />
                <Route path={'/privacyPolicy/accessibilityStatement'} element={<AccessibilityPage />} />
                <Route path={'/privacyPolicy/termsAndConditions'} element={<TermsAndConditionsPage />} />

                { /*  Menu Category Pages */}
                <Route path={'/menu'} element={<Menu />} />
                <Route path={`/menu/handhelds`} element={<MenuPages dataTitle={category} titleDescription={'100% USDA CHOICE BEEF'} />} />{/* @TODO remove title description PROP? */}
                <Route path={`/menu/${category}`} element={<MenuPages dataTitle={category} />} />

                { /*  Menu Category for CATERING */}
                <Route path={'/catering'} element={<CateringPage />} />
                <Route path={`/catering/${category}`} element={<MenuPages dataTitle={category} />} />
                
                {/* Individual Menu PDP Pages */}
                <Route path={`/menu/${category}/${menuItem}`} element={<PDP />} />
                <Route path={`/catering/${category}/${menuItem}`} element={<PDP />} />

                {/* 404 Page */}
                <Route path={'*'} element={<PageNotFound />} />
            </Routes>
        </main>
    );
}

export default AppRoutes;
