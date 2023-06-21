function NormalizeMenuCategory(category) {
    switch (category) {
        case 'handhelds':
            return 'Handhelds';
        case 'largePlates':
            return 'Large Plates';
        case 'salads':
            return 'Salads';
        case 'sides&Snacks':
            return 'Sides & Snacks';
        case 'kids':
            return 'Kids';
        case 'desserts&Beverages':
            return 'Desserts & Beverages';
        case 'platters':
            return 'Platters';
        case 'saladPlatters':
            return 'Salad Platters';
        case 'desserts&Sides':
            return 'Desserts & Sides';
        default:
            return null;
    }
}

export default NormalizeMenuCategory;