import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItem from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import "./css/custom.css";

function App() {
  return (
    <div className="App">
      <NavBar navData={franchiseNavItems} />
      <NavBar navData={navItems} />
      <main>
        <HeroImg img={"freestanding.jpg"} />
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
