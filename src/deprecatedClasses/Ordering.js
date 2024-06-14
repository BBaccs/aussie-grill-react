import React, { Component } from "react";
import { locationsData } from "../data/otherData";
import { LocationCardModal } from "../functionalComponents";

class Ordering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelivery: true,
            showPickup: true,
            selectedLocation: 'All',
        };
    }
    toggleDelivery = () => {
        const { showDelivery } = this.state;
        this.setState({ showDelivery: !showDelivery });
    }
    
    togglePickup = () => {
        const { showPickup } = this.state;
        this.setState({ showPickup: !showPickup });
    }    

    toggleChecked = (e) => {
        document.querySelector(`#${e.target.id}`).toggleAttribute('checked')
    }

    handleKeyDown = (e, toggleFunc) => {
        if (e.key === "Enter") {
            toggleFunc();
        }
    }

    handleLocationChange = (e) => {
        this.setState({ selectedLocation: e.target.value });
    }

    render() {
        const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];
        const {showDelivery, showPickup, selectedLocation} = this.state;
        return (
                <div id="pickup-page" className="landing-page">
                    <div className="container-fluid text-center landing-content-wrapper">
                        <h1 className="landing-heading mb-4 mb-lg-4">Choose your location to place an order!</h1>
                        <div id="location-filter-wrapper" className="mt-md-4 mx-auto pickup-layout">
                            <div className="mb-2">
                                <label id="state-label" className="mb-0" htmlFor="statedd">State :</label>
                                <select onChange={this.handleLocationChange} id="statedd" className="primary-color select">
                                    <option className="slim-option" value="All">All</option>
                                    {uniqueStates.map((stateName) => (
                                        <option className="slim-option" key={stateName} value={stateName}>{stateName}</option>
                                    ))}
                                </select>
                            </div>
                            <div id="checkbox-wrapper" className="mb-3">
                                <div>
                                    <input
                                        onClick={this.togglePickup}
                                        className={`checkboxLeft ${showPickup ? 'checked-option' : ''}`}
                                        type="checkbox"
                                        id="pickupChk"
                                        checked={showPickup}
                                        onChange={this.toggleChecked}
                                    />
                                    {/* OnKeydown goes on label */}
                                    <label onKeyDown={(e) => this.handleKeyDown(e, this.togglePickup)} tabIndex="0" htmlFor="pickupChk">PickUp</label>
                                </div>
                                <div>
                                    <input
                                        onClick={this.toggleDelivery}
                                        className={`option-filter checkboxRight primary-color ${showDelivery ? 'checked-option' : ''}`}
                                        checked={showDelivery}
                                        onChange={this.toggleChecked}
                                        type="checkbox"
                                        id="deliveryChk"
                                    />
                                    {/* OnKeydown goes on label */}
                                    <label onKeyDown={(e) => this.handleKeyDown(e, this.toggleDelivery)} tabIndex="0" htmlFor="deliveryChk">Delivery</label>
                                </div>
                            </div>
                        </div>
                        <LocationCardModal
                            selectedLocation={selectedLocation}
                            showDelivery={showDelivery}
                            showPickup={showPickup}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default Ordering;