// AMODAL SOLUTION









import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/locationsData.js";
import Alert from "react-bootstrap/Alert";

function AModal2({ selectedLocation, showDelivery, showPickup }) {
    const [show, setShow] = useState(false);
    const [thisDoorDashUrl, setthisDoorDashUrl] = useState("");
    const [thisUberEatsUrl, setthisUberEatsUrl] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(true);
        setthisDoorDashUrl(locationsData[index].doorDashURL);
        setthisUberEatsUrl(locationsData[index].uberEatsURL);
    }

    // Group locations by stateName
    const groupedLocations = locationsData.reduce((acc, location) => {
        const stateName = location.stateName;
        if (!acc[stateName]) {
            acc[stateName] = [];
        }
        acc[stateName].push(location);
        return acc;
    }, {});

    return (
        <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
            {Object.entries(groupedLocations).map(([stateName, locations]) => (
                <div key={stateName} className="double-column" style={{ justifyContent: 'space-around' }}>
                    <h2 className="landing-heading mt-3">{stateName}</h2>
                    {locations.length === 0 && (
                        <Alert style={{ fontSize: '1.1rem' }} key={`alert-${stateName}`} variant="danger">
                            Sorry! No locations match this criteria.
                        </Alert>
                    )}
                    {locations.map((location, index) => (
                        <div className="card-modal-wrapper" key={index}>
                            <Card style={{ width: '22rem' }}>
                                <Card.Header as="h3">{location.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text as="p">{location.locationInfo}</Card.Text>
                                    <Card.Text as="p">{location.address}</Card.Text>
                                    {location.phone && <Card.Text>Call: {location.phone}</Card.Text>}
                                    <div>
                                        {location.pickupURL && (
                                            <a className="btn btn-primary" href={location.pickupURL} target="_blank" title="Opens in a new tab">
                                                Pickup
                                            </a>
                                        )}
                                        {location.doorDashURL && (
                                            <Button variant="primary" onClick={() => handleShow(index)}>
                                                Delivery
                                            </Button>
                                        )}
                                        {location.yextURL && (
                                            <a className="btn btn-primary" href={location.yextURL} target="_blank" title="Opens in a new tab">
                                                Learn more
                                            </a>
                                        )}
                                        {location.menuPdfURL && (
                                            <a className="btn btn-primary" href={location.menuPdfURL} target="_self">
                                                Menu
                                            </a>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            ))}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <div className="bull-wrapper-2">
                    <img
                        className="mx-auto"
                        src="/assets/agGraphicElements/animals/bullFullMedium.png"
                        alt=""
                    />
                </div>

                <Modal.Header closeButton>
                    <Modal.Title as="h2" className="h4">Choose your delivery method</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-footer justify-content-center p-0 doordash-uber-wrapper">
                        <div id="doordash-div">
                            <a className="d-block" target="_blank" href={thisDoorDashUrl} >
                                <img className="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash, opens in a new tab" />
                            </a>
                        </div>
                        <p id="or-separator" className="m-2">
                            -OR-
                        </p>
                        <div id="uber-eats-div">
                            <a className="d-block" target="_blank" href={thisUberEatsUrl} >
                                <img className="uber-eats-logo" src="/./../../assets/other/uberEatsLogoSmall.png" alt="Order from Uber Eats, opens in a new tab" />
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AModal2;
