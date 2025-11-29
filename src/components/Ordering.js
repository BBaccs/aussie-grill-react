import React, { useState, useCallback } from 'react';
import { locationsData } from '../data/otherData';
import { LocationCardModal } from '../components';

function Ordering() {
    const [locationData, setLocationData] = useState({
        showDelivery: true,
        showPickup: true,
        selectedLocation: 'All',
    });

    const uniqueStates = [...new Set(locationsData.map((location) => location.stateName))];
    const { showDelivery, showPickup, selectedLocation } = locationData;

    const toggleDelivery = useCallback(() => {
        setLocationData(prevData => ({ ...prevData, showDelivery: !prevData.showDelivery }));
    }, []);

    const togglePickup = useCallback(() => {
        setLocationData(prevData => ({ ...prevData, showPickup: !prevData.showPickup }));
    }, []);

    const handleLocationChange = (e) => {
        setLocationData(prevData => ({ ...prevData, selectedLocation: e.target.value }));
    };

    const handleKeyDown = (e, toggleFunc) => {
        if (e.key === 'Enter') {
            toggleFunc();
        }
    };

    return (
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
                                readOnly
                            />
                            <label
                                onKeyDown={(e) => handleKeyDown(e, togglePickup)}
                                tabIndex="0"
                                htmlFor="pickupChk"
                            >
                                PickUp
                            </label>
                        </div>
                        <div>
                            <input
                                onClick={toggleDelivery}
                                className={`option-filter checkboxRight primary-color ${showDelivery ? 'checked-option' : ''}`}
                                type="checkbox"
                                id="deliveryChk"
                                checked={showDelivery}
                                readOnly
                            />
                            <label
                                onKeyDown={(e) => handleKeyDown(e, toggleDelivery)}
                                tabIndex="0"
                                htmlFor="deliveryChk"
                            >
                                Delivery
                            </label>
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
    );
}

export default Ordering;