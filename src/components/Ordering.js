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
    }

    //No need to bind becasue of arrow functions
    toggleDelivery = () => {
        this.setState({ showDelivery: !this.state.showDelivery });
    }
    togglePickup = () => {
        this.setState({ showPickup: !this.state.showPickup });
    }

    toggleChecked = (e) => {
        console.log(e.target.id)
        document.querySelector(`#${e.target.id}`).toggleAttribute('checked')
    }

    handleKeyDown = (e, toggleFunc) => {
        if (e.key === "Enter") {
            toggleFunc();
        }
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
                        <div>
                            <input
                                onClick={this.togglePickup}
                                className={`checkboxLeft ${this.state.showPickup ? 'checked-option' : ''}`}
                                type="checkbox"
                                id="pickupChk"
                                checked={this.state.showPickup}
                                onChange={this.toggleChecked}
                            />
                            {/* OnKeydown goes on label */}
                            <label onKeyDown={(e) => this.handleKeyDown(e, this.togglePickup) } tabIndex="0" htmlFor="pickupChk">PickUp</label>
                        </div>
                        <div>
                            <input
                                onClick={this.toggleDelivery}
                                className={`option-filter checkboxRight primary-color ${this.state.showDelivery ? 'checked-option' : ''}`}
                                checked={this.state.showDelivery}
                                onChange={this.toggleChecked}
                                type="checkbox"
                                id="deliveryChk"
                            />
                            {/* OnKeydown goes on label */}
                            <label onKeyDown={(e) => this.handleKeyDown(e, this.toggleDelivery)} tabIndex="0" htmlFor="deliveryChk">Delivery</label>
                        </div>
                    </div>
                </div>
                <AModal />
            </>
        );
    }
}
export default Ordering;