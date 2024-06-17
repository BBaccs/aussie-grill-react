import React, { useState } from "react";
import { locationsData } from "../data/otherData";
import { LocationCardModal } from "../components";

function Ordering() {
    const [locationData, setLocationData] = useState({
        showDelivery: true,
        showPickup: true,
        selectedLocation: 'All',
    });

    const toggleDelivery = () => {
        const { showDelivery } = locationData;
        setLocationData(prevData => ({ ...prevData, showDelivery: !showDelivery }));
    }

    const togglePickup = () => {
        const { showPickup } = locationData;
        setLocationData(prevData => ({ ...prevData, showPickup: !showPickup }));
    }

    const toggleChecked = (e) => {
        document.querySelector(`#${e.target.id}`).toggleAttribute('checked')
    }

    const handleKeyDown = (e, toggleFunc) => {
        if (e.key === "Enter") {
            toggleFunc();
        }
    }

    const handleLocationChange = (e) => {
        setLocationData(prevData => ({ ...prevData, selectedLocation: e.target.value }));
    }

    const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];
    const { showDelivery, showPickup, selectedLocation } = locationData;
    return (
        <>
            <div id="pickup-page" className="landing-page">
                <div className="container-fluid text-center landing-content-wrapper">
                    <h1 className="landing-heading mb-4 mb-lg-4">Choose your location to place an order!</h1>
                    <div id="location-filter-wrapper" className="mt-md-4 mx-auto pickup-layout">
                        <div className="mb-2">
                            <label id="state-label" className="mb-0" htmlFor="statedd">State :</label>
                            <select onChange={handleLocationChange} id="statedd" className="primary-color select">
                                <option className="slim-option" value="All">All</option>
                                {uniqueStates.map((stateName) => (
                                    <option className="slim-option" key={stateName} value={stateName}>{stateName}</option>
                                ))}
                            </select>
                        </div>
                        <div id="checkbox-wrapper" className="mb-3">
                            <div>
                                <input
                                    onClick={togglePickup}
                                    className={`checkboxLeft ${showPickup ? 'checked-option' : ''}`}
                                    type="checkbox"
                                    id="pickupChk"
                                    checked={showPickup}
                                    onChange={toggleChecked}
                                />
                                {/* OnKeydown goes on label */}
                                <label onKeyDown={(e) => handleKeyDown(e, togglePickup)} tabIndex="0" htmlFor="pickupChk">PickUp</label>
                            </div>
                            <div>
                                <input
                                    onClick={toggleDelivery}
                                    className={`option-filter checkboxRight primary-color ${showDelivery ? 'checked-option' : ''}`}
                                    checked={showDelivery}
                                    onChange={toggleChecked}
                                    type="checkbox"
                                    id="deliveryChk"
                                />
                                {/* OnKeydown goes on label */}
                                <label onKeyDown={(e) => handleKeyDown(e, toggleDelivery)} tabIndex="0" htmlFor="deliveryChk">Delivery</label>
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
export default Ordering;