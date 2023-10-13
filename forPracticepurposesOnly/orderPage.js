import React, { Component } from "react";
import { locationsData } from "../data/locationsData.js";
import LocationCardModal from "../components/LocationCardModal";

class OrderPage extends Component {
    // static defaultProps = {

    // };
    constructor(props) {
        super(props);
        // this.state = {
        //     clicked: false,
        //     navData: window.location.pathname === '/franchise' ? franchiseNavItems : navItems
        // };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];
        return (
            <>
                <h1 className="landing-heading mb-4 mb-lg-4">Choose your location to place an order!</h1>
                <div id="location-filter-wrapper" className="mt-md-4 mx-auto pickup-layout">
                    <div className="mb-2">
                        <label id="state-label" className="mb-0" htmlFor="statedd">State :</label>
                        <select id="statedd" className="primary-color select">
                            <option className="slim-option">All</option>
                            {uniqueStates.map((stateName) => (
                                <option className="slim-option" key={stateName}>{stateName}</option>
                            ))}
                        </select>
                    </div>
                    <div id="checkbox-wrapper" className="mb-3">
                        {/* <input onClick={togglePickup} className="option-filter checked-option checkboxLeft" type="checkbox" id="pickupChk" checked />
                        <label tabIndex="0" htmlFor="pickupChk">PickUp</label>
                        <input onClick={toggleDelivery} className="option-filter checked-option checkboxRight primary-color" type="checkbox" id="deliveryChk" checked />
                        <label tabIndex="0" htmlFor="deliveryChk">Delivery</label> */}
                    </div>
                </div>
                <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
                    <LocationCardModal />
                </div>
            </>
        );
    }
}
export default OrderPage;





















// import { locationsData } from "../data/locationsData.js";
// import LocationCardModal from "../components/LocationCardModal";

// export default function OrderPage() {
//     const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];

//     return (
//         <>
//             <h1 className="landing-heading mb-4 mb-lg-4">Choose your location to place an order!</h1>
//             <div id="location-filter-wrapper" className="mt-md-4 mx-auto pickup-layout">
//                 <div className="mb-2">
//                     <label id="state-label" className="mb-0" htmlFor="statedd">State :</label>
//                     <select id="statedd" className="primary-color select">
//                         <option className="slim-option">All</option>
//                         {uniqueStates.map((stateName) => (
//                             <option className="slim-option" key={stateName}>{stateName}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div id="checkbox-wrapper" className="mb-3">
//                     <input onClick={togglePickup} className="option-filter checked-option checkboxLeft" type="checkbox" id="pickupChk" checked />
//                     <label tabIndex="0" htmlFor="pickupChk">PickUp</label>
//                     <input onClick={toggleDelivery}  className="option-filter checked-option checkboxRight primary-color" type="checkbox" id="deliveryChk" checked />
//                     <label tabIndex="0" htmlFor="deliveryChk">Delivery</label>
//                 </div>
//             </div>
//             <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
//                 <LocationCardModal />
//             </div>
//         </>
//     );
// }
