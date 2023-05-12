/* @TODO - use state (instead of props) for Navbar changes - franchise, homepage etc.? */
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import MenuItems from "./components/MenuItems.js";
import MenuItems2 from "./components/MenuItems2.js";
import HeroImg from "./components/HeroImg.js";
// import FranchisePage from "./pages/FranchisePage.js"
import { Routes, Route } from 'react-router-dom';
import { franchiseNavItems } from "./data/franchiseNavItems";
import { navItems } from "./data/navItems.js";
import "./css/custom.css";
// import { Carousel } from "bootstrap";
// import Button from 'react-bootstrap/Button';
// import Toggler from "./components/Test.js";
import ACarousel from "./components/Carousel.js";
import AModal from './components/AModal.js';
import Menu from './components/Menu.js';
import MenuPages from "./components/MenuPages.js";
import PDP from "./components/PDP.js";
import { handhelds } from './data/menuData/handhelds.js';
import { largePlates } from './data/menuData/largePlates.js';
import { dessertsAndBeverages } from './data/menuData/dessertsAndBeverages.js';
import { kids } from './data/menuData/kids.js';
import { salads } from './data/menuData/salads.js';
import { sidesAndSnacks } from './data/menuData/sidesAndSnacks.js';
import { dumbyData } from './data/menuData/dumbyData.js';
import { useLocation, useParams } from 'react-router-dom';
import { allMenus } from './data/menuData/allMenus.js';

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      {/* <h1 class="sr-only">Welcome to Aussie Grill</h1> */}

      <NavBar />
      <main id="main-content">
        <Routes>
          <Route
            exact index
            element={
              <>
                <ACarousel />
                <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
                  <MenuItems />
                </div>
              </>
            }
          />


          { /*  THE Menu Category Page */}
          <Route path={'/menu/index.html'} element={<Menu />} />
          { /*  Menu Category Pages */}
          <Route path={`/menu/handhelds/index.html`} element={<MenuPages menuData={handhelds} dataTitle={location.state} titleDescription={'100% USDA CHOICE BEEF'} />} />
          <Route path={`/menu/largePlates/index.html`} element={<MenuPages menuData={largePlates} dataTitle={location.state} />} />
          <Route path={`/menu/salads/index.html`} element={<MenuPages menuData={salads} dataTitle={location.state} />} />
          <Route path={`/menu/sidesAndSnacks/index.html`} element={<MenuPages menuData={sidesAndSnacks} dataTitle={location.state} />} />
          <Route path={`/menu/kids/index.html`} element={<MenuPages menuData={kids} dataTitle={location.state} />} />
          <Route path={`/menu/dessertsAndBeverages/index.html`} element={<MenuPages menuData={dessertsAndBeverages} dataTitle={location.state} />} />

          <Route
            exact path={'/pickup.html'}
            element={
              <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
                <AModal />
              </div>
            }
          />
          <Route
            exact path={'/franchise.html'}
            element={
              <div id="homepage-container-fluid" class="container-fluid-fluid py-5">
                {/* <NavBar navData={franchiseNavItems} /> */}
                <HeroImg img={"productPlaceholderImage.jpg"} />
              </div>
            }
          />
          <Route
            path={'/menu/index.html'}
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>




      </main>
      <Footer />
      {/* <!-- ORDER FOOD CTA --> */}
      <div class="cta-wrapper">
        <div class="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img class="bull-cta" src="./assets/agGraphicElements/animals/mobile/bullFullSmall.png" alt="" />
          <a href="/pickup.html" class="btn btn-primary cta-primary">Order now</a>
        </div>
      </div>
    </div>
  );
}

export default App;






//  <Route path="/menu">
     
//             <Route index element={<Menu />} />
//             <Route path=":id/index.html" element={<MenuPages menuData={salads} dataTitle={'Salads'} />} />
//           </Route> 


{/* Come back to this */ }
{/* <Route path="/menu">
            <Route index element={<Menu />}/>
            <Route path={`:handhelds/index.html`} element={<MenuPages menuData={handhelds} dataTitle={location.state} />} />
            <Route path={`:largePlates/index.html`} element={<MenuPages menuData={largePlates} dataTitle={location.state} />} />
            <Route path={`:salads/index.html`} element={<MenuPages menuData={salads} dataTitle={location.state} />} />
            <Route path={`:sidesAndSnacks/index.html`} element={<MenuPages menuData={sidesAndSnacks} dataTitle={location.state} />} />
            <Route path={`:kids/index.html`} element={<MenuPages menuData={kids} dataTitle={location.state} />} />
            <Route path={`:dessertsAndBeverages/index.html`} element={<MenuPages menuData={dessertsAndBeverages} dataTitle={location.state} />} />
          </Route>  */}









{/* `${location.state}` */ }
{/* A route with a <MenuPages /> element for each menuData object  */ }
{/* {allMenus.map((menuData) => (
              <Route path={`:${location.state}/index.html`} element={<MenuPages menuData={largePlates} dataTitle={location.state} />} />
            ))} */}

{/* ORDER/PICKUP PAGE */ }


{/* MENU PAGES */ }


{/* <Route
            path="/tests/:id/index.html"
            element={
              <>
                <MenuItems2 />
              </>
            }
          /> */}




          // {
          //   allMenus.forEach((menu, index) => {
          
          //     <><Route path="*" element={<MenuPages menuData={largePlates} dataTitle={location.state} />} /> {console.log(allMenus[index], 'E', menu)} </>
          
          //   }
          //   )
          // }
          












          {/* {allMenus.map((menuData, index) => (
   <>
   <Route path={`/menu/${location.state}/index.html`} element={<MenuPages menuData={allMenus[index]} dataTitle={location.state} />} />
             {console.log(allMenus)}
   </>
            
          ))} */}

{/* {allMenus.array.forEach(e => {
  <Route path={`/menu/${location.state}/index.html`} element={<MenuPages menuData={allMenus[e]} dataTitle={location.state} />} />
})}



Write a foreach for allMenus, which generated a route for each menu category, and passes the data to the menuPages component. */}

{/* <Route path={`/menu/largePlates/index.html`}  element={<MenuPages menuData={largePlates} dataTitle={location.state} />} /> */}



{/* {console.log('allmenus:', allMenus, 'pre-allmenus:', handhelds)} */}