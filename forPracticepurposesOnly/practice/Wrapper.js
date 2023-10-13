import "./css/custom.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import AppRoutes from "./AppRoutes.js";
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  let category = pathname.split('/')[2];
  let menuItem = pathname.split('/')[3];

  return (
    <div className="App">
      <NavBar pathname={pathname} />
      <main id="main-content" style={{ background: 'url(/assets/agOfficialSwatches/mobile/agButcherPaperUpdated500x500.png)' }}>
      <AppRoutes category={category} menuItem={menuItem} />
      </main>
      <Footer pathname={pathname} />
      {/* <!-- ORDER FOOD CTA --> */}
      <div className="cta-wrapper">
        <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img loading="lazy" className="bull-cta" src={process.env.PUBLIC_URL + "/assets/agGraphicElements/animals/mobile/bullFullSmall.png"} alt="" />
          <a href="/pickup" className="btn btn-primary cta-primary">Order now</a>
        </div>
      </div>
    </div>
  );
}

export default App;