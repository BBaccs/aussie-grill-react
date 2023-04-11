/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItem from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
import FranchisePage from "./pages/FranchisePage.js"
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import "./css/custom.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main id="main-content">

        <Routes>
          <Route
          exact index
          element={<HeroImg img={"freestanding.jpg"} />}
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
    </div>
  );
}

export default App;
