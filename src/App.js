/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItems from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
import { Routes, Route } from 'react-router-dom';
import UseParamszzzz from "./components/UseParamszzzz.js";
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import "./css/custom.css";
import ACarousel from "./components/Carousel.js";
import AModal from './components/AModal.js';
import Menu from './components/Menu.js';
import MenuPages from "./components/MenuPages.js";
import { handHelds } from './data/menuData/handHelds.js';
import { largePlates } from './data/menuData/largePlates.js';
import { dessertsAndBeverages } from './data/menuData/dessertsAndBeverages.js';
import { kids } from './data/menuData/kids.js';
import { salads } from './data/menuData/salads.js';
import { sidesAndSnacks } from './data/menuData/sidesAndSnacks.js';
import { dumbyData } from './data/menuData/dumbyData.js';
import { useLocation, useParams } from 'react-router-dom';
import { allMenus } from './data/menuData/allMenus.js';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <h1 class="sr-only">Welcome to Aussie Grill</h1> */}
      <NavBar />
      <main id="main-content">
        <Routes>
          <Route
            exact index
            element={
              <>
                <ACarousel />
                <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
                  <MenuItems />
                </div>
              </>
            }
          />

          { /*  Menu Category Pages */}
          <Route path={'/menu/index.html'} element={<Menu />} />
          {/* REMOVE TITLE DESCREIPTION PROP? */}
          <Route path={`/menu/handhelds/index.html`} element={<MenuPages dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />} />
          <Route path={`/menu/${location.state}/index.html`} element={<MenuPages dataTitle={location.state} />} />
          <Route
            exact path={'/pickup.html'}
            element={
              <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
                <AModal />
              </div>
            }
          />

          <Route
            exact path={'/franchise.html'}
            element={
              <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
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
      <div class="cta-wrapper">
        <div class="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img class="bull-cta" src="./assets/agGraphicElements/animals/mobile/bullFullSmall.png" alt="" />
          <a href="/pickup.html" class="btn btn-primary cta-primary">Order now</a>
        </div>
      </div>
    </div>
  );
}

export default App;