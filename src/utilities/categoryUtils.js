import { handHelds, largePlates, salads, sidesAndSnacks, kids, dessertsAndBeverages } from "../data/menuData";
import { plattersCatering, saladPlattersCatering, dessertsAndSidesCatering } from "../data/cateringMenuData";

export const categoryDataMapping = {
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

export function getCategoryData(category) {
    return categoryDataMapping[category] || null;
}