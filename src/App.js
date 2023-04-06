import logo from './logo.svg';
import Footer from "./Footer";
import "./css/custom.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="py-2 nav-banner text-white">
        <div className="d-flex justify-content-center align-items-center">
          <span className="mr-2">Follow the Adventure on</span>
          <ul className="social-links d-flex mb-1 pl-0">
            <li><a href="https://www.facebook.com/Aussie-Grill-by-Outback-381611752680353/"
              className="fa fa-lg fa-facebook" aria-label="View our Facebook" target="_blank"></a></li>
            <li><a href="https://twitter.com/AussieGrill_" className="fa fa-lg fa-twitter mx-2"
              aria-label="View our Twitter" target="_blank"></a></li>
            <li><a href="https://www.instagram.com/aussiegrillbyoutback/" aria-label="View our Instagram" target="_blank"
              className="fa fa-lg fa-instagram"></a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
