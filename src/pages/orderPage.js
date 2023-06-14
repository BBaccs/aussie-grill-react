export default function OrderPage() {
    return (
        <>
            <h1 className="landing-heading mb-4 mb-lg-4">Choose your location to place an order!</h1>
            <div id="location-filter-wrapper" className="mt-md-4 mx-auto pickup-layout">
                <div className="mb-2">
                    <label id="state-label" className="mb-0" htmlFor="statedd">State :</label>
                    <select id="statedd" className="primary-color select">
                        <option className="slim-option">All</option>
                    </select>
                </div>
                <div id="checkbox-wrapper" className="mb-3">
                    <input className="option-filter checked-option checkboxLeft" type="checkbox" id="pickupChk" checked />
                    <label tabIndex="0" htmlFor="pickupChk">PickUp</label>
                    <input className="option-filter checked-option checkboxRight primary-color" type="checkbox" id="deliveryChk" checked />
                    <label tabIndex="0" htmlFor="deliveryChk">Delivery</label>
                </div>
            </div>
        </>

    );
}
