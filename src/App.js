/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItems from "./components/MenuItems.js";
import MenuItems2 from "./components/MenuItems2.js";
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
import PDP from "./components/PDP.js";
import { handHelds } from './data/menuData/handHelds.js';
import { largePlates } from './data/menuData/largePlates.js';
import { dessertsAndBeverages } from './data/menuData/dessertsAndBeverages.js';
import { kids } from './data/menuData/kids.js';
import { salads } from './data/menuData/salads.js';
import { sidesAndSnacks } from './data/menuData/sidesAndSnacks.js';
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



          {/* MENU PAGES */}


          <Route
            path="/tests/:id/index.html"
            element={
              <>
                <MenuItems2 />
              </>
            }
          />
          {/* <Route path="*" element={<NotFound404 />} */}



          <Route path="/menu">
            {/* This one will match the parent route (/menu/:id) extacly */}
            <Route index element={<MenuItems2 />} />
            <Route path=":id" element={<MenuItems2 />} />
          </Route>










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
                <MenuPages menuData={handHelds} dataTitle={'Handhelds'} titleDescription={'100% USDA CHOICE BEEF'} />
              </>
            }
          />
          <Route
            path={'/menu/largeplates/index.html'}
            element={
              <>
                <MenuPages menuData={largePlates} dataTitle={'Large Plates'} />
              </>
            }
          />
          <Route
            path={'/menu/salads/index.html'}
            element={
              <>
                <MenuPages menuData={salads} dataTitle={'Salads'} />
              </>
            }
          />
          <Route
            path={'/menu/sidesAndSnacks/index.html'}
            element={
              <>
                <MenuPages menuData={sidesAndSnacks} dataTitle={'Sides + fix'} />
              </>
            }
          />
          <Route
            path={'/menu/kids/index.html'}
            element={
              <>
                <MenuPages menuData={kids} dataTitle={'Kids'} />
              </>
            }
          />
          <Route
            path={'/menu/dessertsAndBeverages/index.html'}
            element={
              <>
                <MenuPages menuData={dessertsAndBeverages} dataTitle={'Desserts + fix'} />
              </>
            }
          />

          {/* @TO DO, OPTIMIZE ROUTING */}
          <Route
            path={'/menu/salads/aussieSalad.html'}
            element={
              <>
                <PDP />
              </>
            }
          />
          <Route
            path={'/menu/salads/appleArugulaSalad.html'}
            element={
              <>
                <PDP />
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