import "./css/custom.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import AppRoutes from "./AppRoutes.js";
import { useLocation, Link } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  let category = pathname.split('/')[2];
  let menuItem = pathname.split('/')[3];

  return (
    <>
      <NavBar pathname={pathname} />
      <AppRoutes category={category} menuItem={menuItem} />
      <Footer pathname={pathname} />
      <div className="cta-wrapper">
        <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img loading="lazy" className="bull-cta" src={process.env.PUBLIC_URL + "/assets/agGraphicElements/animals/mobile/bullFullSmall.png"} alt="" />
          <Link href="/pickup" className="btn btn-primary cta-primary">Order now</Link>
        </div>
      </div>
    </>
  );
}

export default App;