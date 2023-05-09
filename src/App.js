/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItem from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
// import FranchisePage from "./pages/FranchisePage.js"
import { Routes, Route } from 'react-router-dom';
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import "./css/custom.css";
// import { Carousel } from "bootstrap";
// import Button from 'react-bootstrap/Button';
// import Toggler from "./components/Test.js";
import ACarousel from "./components/Carousel.js";
import AModal from './components/AModal.js';
import Menu from './components/Menu.js';
import MenuPages from "./components/TestMenuPage.js";
import { handheldData } from './data/menuData/handHeldData.js';


function App() {
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
                  <MenuItem />
                </div>
              </>
            }
          />
          {/* ORDER/PICKUP PAGE */}
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
                {/* <Menu /> */}
                {/* <MenuPages /> */}
                <MenuPages menuData={handheldData} dataTitle={'Handhelds'} titleDescription={'100% USDA CHOICE BEEF'} />
              </>
            }
          />
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