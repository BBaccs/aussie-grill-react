import { useLocation } from 'react-router-dom';
import { OrderButton } from "./";
import { handHelds, largePlates, salads, sidesAndSnacks, kids, dessertsAndBeverages } from "../data/menuData";
import { plattersCatering, saladPlattersCatering, dessertsAndSidesCatering } from "../data/cateringMenuData";

const categoryDataMapping = {
  handhelds: handHelds,
  largePlates: largePlates,
  salads: salads,
  'sides&Snacks': sidesAndSnacks,
  kids: kids,
  'desserts&Beverages': dessertsAndBeverages,
  platters: plattersCatering,
  saladPlatters: saladPlattersCatering,
  'desserts&Sides': dessertsAndSidesCatering
};

function getCategoryData(category) {
  return categoryDataMapping[category] || null;
}

function PDP() {
  const location = useLocation();
  let category = location.pathname.split('/')[2];
  let menuData = getCategoryData(category);
  let pathName = location.pathname.split('/')[3].toLowerCase();
  return (
    <>
      {menuData.map((item, index) => {
        const normalizedItemName = item.name.replaceAll(' ', '').replaceAll('™', '').replaceAll('’', '').toLowerCase();
        if (normalizedItemName === pathName) {
          return (
            <div key={index} className="menu-page menu-page-bg product-description-page">
              <div className="container-fluid mt-0 p-3 pt-4">
                {item.img &&
                  <picture loading="lazy">
                    <source src={`${item.imgFilePath}/desktop/800x600${item.img}`} media="(min-width: 1600px)" />
                    <source src={`${item.imgFilePath}/desktop/500x375${item.img}`} media="(min-width: 768px)" />
                    {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                    <img className="m-auto product-image" src={`${item.imgFilePath}/mobile/345x260${item.img}`} alt="" />
                  </picture>}
                <h1 className="pdp-header text-left text-md-center">{item.name}</h1>
                <div className="product-content-wrapper">
                  <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription}</p>
                  {item.pdpDescription2 && <p className="product-description text-left text-md-center pl-2 pl-md-0">{item.pdpDescription2}</p>}
                </div>
                <div className="row py-5 d-none d-lg-block">
                  <OrderButton />
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