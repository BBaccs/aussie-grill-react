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
      <main>

        <Routes>
          <Route
            exact index
            element={<NavBar navData={navItems} />}
          />
          <Route
            exact path={'/franchise'}
            element={<FranchisePage />}
          />
          <Route
            exact path={'/franchise2'}
            element={
              <div>
                <NavBar navData={franchiseNavItems} />
                <HeroImg img={"freestanding.jpg"} />
              </div>}
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
