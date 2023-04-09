import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItem from "./components/MenuItems.js";
import "./css/custom.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <div>HERO IMG</div>
      <MenuItem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
