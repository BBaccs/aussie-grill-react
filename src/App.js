// @TODO: Utilize react-responsive for conditionally rendering components based on viewport size.
import "./css/custom.css";
import { useLocation } from 'react-router-dom';
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import AppRoutes from "./AppRoutes.js";
import CtaBanner from "./hooks/CtaBanner.js";

function App() {
  const { pathname } = useLocation();
  let category = pathname.split('/')[2];
  let menuItem = pathname.split('/')[3];

  return (
    <>
      <NavBar pathname={pathname} />
      <AppRoutes category={category} menuItem={menuItem} />
      <Footer pathname={pathname} />
      <CtaBanner />
    </>
  );
}

export default App;