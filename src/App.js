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
import Toggler from "./components/Test.js";
import ACarousel from "./components/Carousel.js";
import AModal from './components/AModal.js';


function App() {
  return (
    <div className="App">
      <div>
      <AModal />
      {/* <AModal />
      <AModal /> */}
      </div>
      {/* <Toggler /> */}
      <NavBar />
      {/* <h1 class="sr-only">Welcome to Aussie Grill</h1> */}
      <main id="main-content">
        {/* <Carousel img={"freestanding.jpg"} /> */}
        <Routes>
          <Route
          exact index
          element={
            <ACarousel />
 }
          // <Carousel />
          // <CarouselAnnn id={"home-carousel"} />

          // element={<HeroImg img={"freestanding.jpg"} />}
          />
          <Route
            exact path={'/franchise.html'}
            element={
              <div>
                {/* <NavBar navData={franchiseNavItems} /> */}
                <HeroImg img={"productPlaceholderImage.jpg"} />
              </div>
              }
          />
        </Routes>
        {/* <HeroImg img={"freestanding.jpg"} /> */}
        <div
          id="homepage-container-fluid"
          className="container-fluid-fluid py-5"
        >
          <MenuItem />
        </div>
      </main>
      <Footer />
      {/* <!-- ORDER FOOD CTA -->
    <div class="cta-wrapper">
        <div class="d-flex container-fluid justify-content-between align-items-center cta-banner">
            <img class="bull-cta" src="assets/agGraphicElements/animals/mobile/bullFullSmall.png" alt="" >
            <a href="pickup.html" class="btn btn-primary cta-primary">Order now</a>
        </div>
    </div> */}
    </div>
  );
}

export default App;