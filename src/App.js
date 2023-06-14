/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
// Is menu items component necessarry? it's on home page but maybe should be deleted.
// (The difference is in the mobile view, check other HTML difference), prob shouuld combine into one component.
// Fix footer links
import "./css/custom.css";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItems from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
import ACarousel from "./components/Carousel.js";
import AModal from './components/AModal.js';
import Menu from './components/Menu.js';
import MenuPages from "./components/MenuPages.js";
import PDP from './hooks/PDP.js';
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import { Routes, Route } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { CateringCategoryData } from './data/cateringMenuData/CateringCategoryData.js';
import { homePageCards } from "./data/homePageCards";
import OurStoryPage from './pages/OurStoryPage.js';
import CareersPage from "./pages/Careers.js";
import ContactPage from "./pages/Contact.js";
import GiveawaysPage from "./pages/GiveawaysPage.js";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.js";
import CcpaPage from "./pages/CcpaPage.js";
import AccessibilityPage from "./pages/AccessibilityPage.js";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage.js";
import OrderPage from "./pages/OrderPage.js";

function App() {
  const location = useLocation();
  let category = location.pathname.split('/')[2];
  let menuItem = location.pathname.split('/')[3];
  // location.state = category;
  return (
    <div className="App">
      {/* <h1 className="sr-only">Welcome to Aussie Grill</h1> */}
      <NavBar />
      <main id="main-content">
        <Routes>
          {/* Home Page */}
          <Route
            exact index
            element={
              <>
                <ACarousel />
                <div id="homepage-container-fluid" className="container-fluid-fluid py-5 pt-1">
                  <MenuItems />
                  <MenuItems menuData={homePageCards} />
                </div>
              </>
            }
          />

          { /*  Static Pages */}
          <Route
            exact path={'/pickup2.html'}
            element={
              <div id="pickup-page" className="landing-page">
                <div className="container-fluid text-center landing-content-wrapper">
                  <OrderPage />
                  <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
                    <AModal />
                  </div>
                </div>
              </div>
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

          { /*  Menu Category for CATERING */}
          <Route path={'/catering/index.html'} element={<Menu menuData={CateringCategoryData} />} />
          <Route path={`/catering/${category}/index.html`} element={<MenuPages dataTitle={category} />} />

          {/* Individual Catering Menu PDP Pages */}
          <Route path={`/catering/${category}/${menuItem}`} element={<PDP />} />

          {/* @TODO remove title description PROP? */}
          { /*  Menu Category */}
          <Route path={`/menu/handhelds/index.html`} element={<MenuPages dataTitle={category} titleDescription={'100% USDA CHOICE BEEF'} />} />
          <Route path={`/menu/${category}/index.html`} element={<MenuPages dataTitle={category} />} />

          {/* Individual Menu PDP Pages */}
          <Route path={`/menu/${category}/${menuItem}`} element={<PDP />} />
          <Route
            exact path={'/pickup.html'}
            element={
              <div id="homepage-container-fluid" className="container-fluid-fluid py-5">
                <AModal />
              </div>
            }
          />
          <Route
            exact path={'/franchise.html'}
            element={
              <div id="homepage-container-fluid" className="container-fluid-fluid py-5">
                {/* <NavBar navData={franchiseNavItems} /> */}
                <HeroImg img={"productPlaceholderImage.jpg"} />
              </div>
            }
          />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>

      </main>
      <Footer />
      {/* <!-- ORDER FOOD CTA --> */}
      <div className="cta-wrapper">
        <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img className="bull-cta" src="./assets/agGraphicElements/animals/mobile/bullFullSmall.png" alt="" />
          <a href="/pickup.html" className="btn btn-primary cta-primary">Order now</a>
        </div>
      </div>
    </div>
  );
}

export default App;