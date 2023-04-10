import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItem from "./components/MenuItems.js";
import HeroImg from "./components/HeroImg.js";
import "./css/custom.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <HeroImg
          img={'freestanding.jpg'}
        />
        <MenuItem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
