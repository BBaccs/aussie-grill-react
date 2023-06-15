import { useLocation, useParams } from 'react-router-dom';


function MenuItems2() {
    const location = useLocation();
    console.log(location.pathname, location.state, location)
    // const { pdpItem } = useParams()
    // console.log(`HELLO, ${pdpItem}`)
    return (
        <div className="menu-page menu-page-bg product-description-page">
            <div className="container-fluid mt-0 p-3 pt-4">
                {/* <!-- Responsive pictures --> */}
                <picture>
                    <source srcSet="/../assets/foodImages/productImages/desktop/salads/aussieSalad800x600.jpg" media="(min-width: 1600px)" />
                    <source srcSet="/../assets/foodImages/productImages/desktop/salads/aussieSalad500x375.jpg" media="(min-width: 768px)" />
                    {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                    <img className="m-auto product-image" src="/../assets/foodImages/productImages/mobile/salads/aussieSalad345x260.jpg" alt="" />
                </picture>
                <h1 className="pdp-header text-left text-md-center">Aussie Salad</h1>
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
    )
}

export default MenuItems2;