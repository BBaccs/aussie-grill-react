import { useLocation, useParams } from 'react-router-dom';
import { handHelds } from '../data/menuData/handHelds.js';
import { largePlates } from '../data/menuData/largePlates.js';
import { salads } from "../data/menuData/salads.js";
import { sidesAndSnacks } from "../data/menuData/sidesAndSnacks.js";
import { kids } from "../data/menuData/kids.js";
import { dessertsAndBeverages } from "../data/menuData/dessertsAndBeverages.js";
import { CateringCategoryData } from "../data/cateringMenuData/CateringCategoryData.js";
import { plattersCatering } from "../data/cateringMenuData/plattersCatering.js";
import { saladPlattersCatering } from "../data/cateringMenuData/saladPlattersCatering.js";
import { dessertsAndSidesCatering } from "../data/cateringMenuData/dessertsAndSidesCatering.js";

let menuData = handHelds;

// getCategoryData(category) {
//     switch (category) {
//         case 'handhelds':
//             return handHelds;
//         case 'largePlates':
//             return largePlates;
//         case 'salads':
//             return salads;
//         case 'sides&Snacks':
//             return sidesAndSnacks;
//         case 'kids':
//             return kids;
//         case 'desserts&Beverages':
//             return dessertsAndBeverages;
//         case 'platters':
//             return plattersCatering;
//         case 'saladPlatter':
//             return saladPlattersCatering;
//         case 'desserts&Sides':
//             return dessertsAndSidesCatering;
//         default:
//             return null;
//     }
// }

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

function PDP() {
    const location = useLocation();
    console.log('menudata', menuData, menuData[0].name)
    // console.log(location.pathname, location.state, location)
    const { pdpItem } = useParams()
    // console.log(`HELLO, ${pdpItem}`)

    return (
        <>
            <div className="menu-page menu-page-bg product-description-page">
                <div className="container-fluid mt-0 p-3 pt-4">
                    {/* <!-- Responsive pictures --> */}
                    <picture>
                        <source srcSet={`/assets/foodImages/productImages/handhelds/desktop/800x600brisketStackBurger.jpg`} media="(min-width: 1600px)" />
                        <source srcSet={`/assets/foodImages/productImages/handhelds/desktop/500x375brisketStackBurger.jpg`} media="(min-width: 768px)" />
                        {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                        <img className="m-auto product-image" src={`/assets/foodImages/productImages/handhelds/mobile/345x260brisketStackBurger.jpg`} alt="" />
                    </picture>
                    <h1 className="pdp-header text-left text-md-center">Aussie Salad </h1>
                    <div className="product-content-wrapper">
                        <p className="product-description text-left text-md-center pl-2 pl-md-0">Greens, arugula, cucumbers, onions, tomatoes, and eggs. Served with choice of ranch, creamy Italian, or balsamic vinaigrette dressing.</p>
                        <p className="product-description text-left text-md-center pl-2 pl-md-0">Choose your protein: Grilled or Crispy Chicken | Crispy Shrimp.</p>
                    </div>
                    <div className="row py-5 d-none d-lg-block">
                        <div className="m-auto">
                            <a href="/../pickup.html" className="btn btn-primary btn-lg mr-5 pdp-lg-button">Order</a>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
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





