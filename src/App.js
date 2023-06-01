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


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h1 className="sr-only">Welcome to Aussie Grill</h1>
      <NavBar />
      <main id="main-content">
        <Routes>
          <Route
            exact index
            element={
              <>
                <ACarousel />
                <div id="homepage-container-fluid" className="container-fluid-fluid py-5">
                  <MenuItems />
                </div>
              </>
            }
          />

          <Route path={`/menu/handhelds/baconBombBurger.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/brisketStackBurger.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/classicCheeseBurger.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/aussieBurger.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/jamminChickenSandwich.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/impossibleBurger.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/crispyshrimpPoBoy.html`} element={<PDP />} />
          <Route path={`/menu/handhelds/crispySrirachaChickenSandwich.html`} element={<PDP />} />

          <Route path={`/menu/largePlates/crispyChickenTenders.html`} element={<PDP />} />
          <Route path={`/menu/largePlates/toppedGrilledChicken.html`} element={<PDP />} />
          <Route path={`/menu/largePlates/center-cutSirloin.html`} element={<PDP />} />

          <Route path={`/menu/salads/aussieSalad.html`} element={<PDP />} />
          <Route path={`/menu/salads/appleArugulaSalad.html`} element={<PDP />} />

          <Route path={`/menu/sides&Snacks/aussiePetals.html`} element={<PDP />} />
          <Route path={`/menu/sides&Snacks/aussieCheeseFries.html`} element={<PDP />} />
          <Route path={`/menu/sides&Snacks/fries.html`} element={<PDP />} />
          <Route path={`/menu/sides&Snacks/appleArugulaSalad.html`} element={<PDP />} />
          <Route path={`/menu/sides&Snacks/COLESLAW.html`} element={<PDP />} />

          <Route path={`/menu/kids/kidsCrispyChickenTenders.html`} element={<PDP />} />
          <Route path={`/menu/kids/kidsCheeseburger.html`} element={<PDP />} />
          <Route path={`/menu/kids/kidsGrilledCheeseSandwich.html`} element={<PDP />} />

          <Route path={`/menu/desserts&Beverages/saltedCaramelCookie.html`} element={<PDP />} />
          <Route path={`/menu/desserts&Beverages/ghirardelliDoubleDarkChocolateBrownie.html`} element={<PDP />} />
          <Route path={`/menu/desserts&Beverages/saltedCaramelCookieSundae.html`} element={<PDP />} />
          <Route path={`/menu/desserts&Beverages/doubleDarkChocolateBrownieSundae.html`} element={<PDP />} />
          



          { /*  Menu Category Pages */}
          <Route path={'/menu/index.html'} element={<Menu />} />
          { /*  Menu Category for CATERING */}
          <Route path={'/catering/index.html'} element={<Menu menuData={CateringCategoryData} />} />
          <Route path={`/catering/${location.state}/index.html`} element={<MenuPages dataTitle={location.state} />} />
          {/* REMOVE TITLE DESCREIPTION PROP? */}
          <Route path={`/menu/handhelds/index.html`} element={<MenuPages dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />} />
          <Route path={`/menu/${location.state}/index.html`} element={<MenuPages dataTitle={location.state} />} />

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
          <Route
            path={'/menu/index.html'}
            element={
              <>
                <Menu />
              </>
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