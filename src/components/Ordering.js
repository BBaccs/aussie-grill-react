import React, { Component } from "react";
import { locationsData } from "../data/locationsData.js";
import AModal from "../components/AModal";

class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelivery: true,
            showPickup: true,
        };
        this.toggleDelivery = this.toggleDelivery.bind(this);
        this.togglePickup = this.togglePickup.bind(this);
    }
    toggleDelivery() {
        this.setState({ showDelivery: !this.state.showDelivery });
        console.log('this.state.showDelivery', this.state.showDelivery)
    }
    togglePickup() {
        this.setState({ showPickup: !this.state.showPickup });
        console.log('this.state.showDelivery', this.state.showPickup);
    }


    render() {
        const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];
        const pickupInput = this.state.showPickup
        ? <>
            <input onClick={this.togglePickup} className="checkboxLeft checked-option primary-color" type="checkbox" id="pickupChk" />
            <label tabIndex="0" htmlFor="pickupChk">PickUp</label>
        </> :
        <>
            <input onClick={this.togglePickup} className="checkboxLeft" type="checkbox" id="pickupChk" />
            <label tabIndex="0" htmlFor="pickupChk">PickUp</label>
        </>;
        const deliveryInput = this.state.showDelivery
        ? <>
            <input onClick={this.toggleDelivery} className="option-filter checked-option checkboxRight primary-color" type="checkbox" id="deliveryChk" checked />
            <label tabIndex="0" htmlFor="deliveryChk">Delivery</label>
        </>
        : <>
            <input onClick={this.toggleDelivery} className="option-filter checkboxRight primary-color" type="checkbox" id="deliveryChk" />
            <label tabIndex="0" htmlFor="deliveryChk">Delivery</label>
        </>;        
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
                        {pickupInput}
                        {deliveryInput}
                    </div>
                </div>
                <AModal />
            </>
        );
    }
}
export default Ordering;





















// import { locationsData } from "../data/locationsData.js";
// import AModal from "../components/AModal";

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
//                 <AModal />
//             </div>
//         </>
//     );
// }
