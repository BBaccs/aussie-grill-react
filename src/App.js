/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItems from "./components/MenuItems.js";
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
import { largePlatesData } from './data/menuData/largePlatesData.js';
import { dessertsAndBeveragesData } from './data/menuData/dessertsAndBeveragesData.js';
import { kidsData } from './data/menuData/kidsData.js';
import { saladsData } from './data/menuData/saladsData.js';
import { sidesAndSnacksData } from './data/menuData/sidesAndSnacksData.js';
import { dumbyData } from './data/menuData/dumbyData.js';

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
                  <MenuItems />
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
                <Menu />
              </>
            }
          />
          <Route
            path={'/menu/handhelds/index.html'}
            element={
              <>
                {/* <MenuPages menuData={dumbyData} dataTitle={'dumbydata'} /> */}
                <MenuPages menuData={handheldData} dataTitle={'Handhelds'} titleDescription={'100% USDA CHOICE BEEF'} />
              </>
            }
          />
          <Route
            path={'/menu/largeplates/index.html'}
            element={
              <>
                <MenuPages menuData={largePlatesData} dataTitle={'Large Plates'} />
              </>
            }
          />
          <Route
            path={'/menu/salads/index.html'}
            element={
              <>
                <MenuPages menuData={saladsData} dataTitle={'Salads'} />
              </>
            }
          />
          <Route
            path={'/menu/sidesAndSnacks/index.html'}
            element={
              <>
                <MenuPages menuData={sidesAndSnacksData} dataTitle={'Sides + fix'} />
              </>
            }
          />
          <Route
            path={'/menu/kids/index.html'}
            element={
              <>
                <MenuPages menuData={kidsData} dataTitle={'Kids'} />
              </>
            }
          />
          <Route
            path={'/menu/dessertsAndBeverages/index.html'}
            element={
              <>
                <MenuPages menuData={dessertsAndBeveragesData} dataTitle={'Desserts + fix'} />
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