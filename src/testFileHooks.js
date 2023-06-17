// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { handHelds } from '../data/menuData/handHelds.js';
// import { largePlates } from '../data/menuData/largePlates.js';
// import { salads } from "../data/menuData/salads.js";
// import { sidesAndSnacks } from "../data/menuData/sidesAndSnacks.js";
// import { kids } from "../data/menuData/kids.js";
// import { dessertsAndBeverages } from "../data/menuData/dessertsAndBeverages.js";
// import { plattersCatering } from "../data/cateringMenuData/plattersCatering.js";
// import { saladPlattersCatering } from "../data/cateringMenuData/saladPlattersCatering.js";
// import { dessertsAndSidesCatering } from "../data/cateringMenuData/dessertsAndSidesCatering.js";

// function getCategoryData(category) {
//   switch (category) {
//     case 'handhelds':
//       return handHelds;
//     case 'largePlates':
//       return largePlates;
//     case 'salads':
//       return salads;
//     case 'sides&Snacks':
//       return sidesAndSnacks;
//     case 'kids':
//       return kids;
//     case 'desserts&Beverages':
//       return dessertsAndBeverages;
//     case 'platters':
//       return plattersCatering;
//     case 'saladPlatters':
//       return saladPlattersCatering;
//     case 'desserts&Sides':
//       return dessertsAndSidesCatering;
//     default:
//       return null;
//   }
// }

// function PDP() {
//   const location = useLocation();
//   const category = location.pathname.split('/')[2];
//   const pathName = location.pathname.split('/')[3].replaceAll('.html', '').toLowerCase();
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     const data = getCategoryData(category);
//     setMenuData(data);
//   }, [category]);

//   const generateImg = (item) => {
//     if (item && item.img) {
//       return (
//         <picture>
//           <source src={`/assets/${item.imgFilePath}/desktop/800x600${item.img}`} media="(min-width: 1600px)" />
//           <source src={`/assets/${item.imgFilePath}/desktop/500x375${item.img}`} media="(min-width: 768px)" />
//           <img className="m-auto product-image" src={`/assets/${item.imgFilePath}/mobile/345x260${item.img}`} alt="" />
//         </picture>
//       );
//     }
//     return null;
//   };

//   return (
//     <>
//       {menuData.map((item, index) => {
//         const normalizedItemName = item.name.replaceAll(' ', '').replaceAll('™', '').replaceAll('\’', '').toLowerCase();
//         if (normalizedItemName === pathName) {
//           return (
//             <div key={index} className="menu-page menu-page-bg product-description-page">
//               <div className="container-fluid mt-0 p-3 pt-4">
//                 {generateImg(item)}
//                 <h1 className="pdp-header text-left text-md-center">{item.name}</h1>
//                 <div className="product-content-wrapper">
//                   <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription}</p>
//                   {item.pdpDescription2 && <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription2}</p>}
//                 </div>
//                 <div className="row py-5 d-none d-lg-block">
//                   <div className="m-auto">
//                     <a href="/../pickup.html" className="btn btn-primary btn-lg mr-5 pdp-lg-button">Order</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })}
//     </>
//   );
// }

// export default PDP;
