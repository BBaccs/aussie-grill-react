import { useLocation, useParams } from 'react-router-dom';
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';
import { salads } from "../data/menuData/salads.js";
import { sidesAndSnacks } from "../data/menuData/sidesAndSnacks.js";
import { kids } from "../data/menuData/kids.js";
import { dessertsAndBeverages } from "../data/menuData/dessertsAndBeverages.js";
import { plattersCatering } from "../data/cateringMenuData/plattersCatering.js";
import { saladPlattersCatering } from "../data/cateringMenuData/saladPlattersCatering.js";
import { dessertsAndSidesCatering } from "../data/cateringMenuData/dessertsAndSidesCatering.js";

// let menuData = handHelds;

function getCategoryData(category) {
    switch (category) {
        case 'handhelds':
            return handHelds;
        case 'largePlates':
            return largePlates;
        case 'salads':
            return salads;
        case 'sides&Snacks':
            return sidesAndSnacks;
        case 'kids':
            return kids;
        case 'desserts&Beverages':
            return dessertsAndBeverages;
        case 'platters':
            return plattersCatering;
        case 'saladPlatter':
            return saladPlattersCatering;
        case 'desserts&Sides':
            return dessertsAndSidesCatering;
        default:
            return null;
    }
}

// function normalizeMenuCategory(category) {
//     switch (category) {
//         case 'handhelds':
//             return 'Handhelds';
//         case 'largePlates':
//             return 'Large Plates';
//         case 'salads':
//             return 'Salads';
//         case 'sides&Snacks':
//             return 'Sides & Snacks';
//         case 'kids':
//             return 'Kids';
//         case 'desserts&Beverages':
//             return 'Desserts & Beverages';
//         case 'platters':
//             return 'Platters';
//         case 'saladPlatter':
//             return 'Salad Platters';
//         case 'desserts&Sides':
//             return 'Desserts & Sides';
//         default:
//             return null;
//     }
// }

// {
//     let item2 = item.name;
//     item2 = item2.replace(' ', '');

// }

function PDP() {
    const location = useLocation();
    let category = location.pathname.split('/')[2];
    let menuData = getCategoryData(category);
    console.log('menuData', menuData);
    // console.log('handhelds', handHelds);
    // console.log(location.pathname[1], location.state, location)
    // const { pdpItem } = useParams()
    // console.log(`HELLO, ${pdpItem}`)

    console.log(location.pathname.split('/')[3]);
    let pathName = location.pathname.split('/')[3].replaceAll('.html', '').toLowerCase();
    console.log(pathName);

    return (
        <>
          {menuData.map((item, index) => {
            const normalizedItemName = item.name.replaceAll(' ', '').replaceAll('™', '').replaceAll('\'', '').toLowerCase();
            if (normalizedItemName === pathName) {
              return (
                <div key={index} className="menu-page menu-page-bg product-description-page">
                  <div className="container-fluid mt-0 p-3 pt-4">
                    {/* <!-- Responsive pictures --> */}
                    <picture>
                      <source src={`/assets/${item.imgFilePath}/desktop/800x600${item.img}`} media="(min-width: 1600px)" />
                      <source src={`/assets/${item.imgFilePath}/desktop/500x375${item.img}`} media="(min-width: 768px)" />
                      {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                      <img className="m-auto product-image" src={`/assets/${item.imgFilePath}/mobile/345x260${item.img}`} alt="" />
                    </picture>
                    <h1 className="pdp-header text-left text-md-center">{item.name}</h1>
                    <div className="product-content-wrapper">
                      <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription}</p>
                      {item.pdpDescription2 && <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription2}</p>}
                    </div>
                    <div className="row py-5 d-none d-lg-block">
                      <div className="m-auto">
                        <a href="/../pickup.html" className="btn btn-primary btn-lg mr-5 pdp-lg-button">Order</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </>
      );
}

export default PDP;





// {menuData.map((item, index)(
//     <div key={index} className="container-fluid mt-0 p-3 pt-4">
//         {/* <!-- Responsive pictures --> */}
//         <picture>
//             <source srcSet={`/../assets/foodImages/productImages/desktop/salads/800x600aussieSalad.jpg`} media="(min-width: 1600px)" />
//             <source srcSet={`/../assets/foodImages/productImages/desktop/salads/500x375aussieSalad.jpg`} media="(min-width: 768px)" />
//             {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
//             <img className="m-auto product-image" src={`/../assets/foodImages/productImages/mobile/salads/aussieSalad345x260.jpg`} alt="" />
//         </picture>
//         <h1 className="pdp-header text-left text-md-center">Aussie Salad</h1>
//         <div className="product-content-wrapper">
//             <p className="product-description text-left text-md-center pl-2 pl-md-0">Greens, arugula, cucumbers, onions, tomatoes, and eggs. Served with choice of ranch, creamy Italian, or balsamic vinaigrette dressing.</p>
//             <p className="product-description text-left text-md-center pl-2 pl-md-0">Choose your protein: Grilled or Crispy Chicken | Crispy Shrimp.</p>
//         </div>
//         <div className="row py-5 d-none d-lg-block">
//             <div className="m-auto">
//                 <a href="/../pickup.html" className="btn btn-primary btn-lg mr-5 pdp-lg-button">Order</a>

//             </div>
//         </div>
//     </div>
// ))}





