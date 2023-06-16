// @TODO rename me, something like locationCardModal
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/locationsData.js";
import Alert from "react-bootstrap/Alert";

function AModal({ selectedLocation, showDelivery, showPickup }) {
  const [show, setShow] = useState(false);
  const [thisDoorDashUrl, setthisDoorDashUrl] = useState("");
  const [thisUberEatsUrl, setthisUberEatsUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setthisDoorDashUrl(locationsData[index].doorDashURL);
    setthisUberEatsUrl(locationsData[index].uberEatsURL);
  }

  // Filter the locations based on showDelivery, showPickup, and selectedLocation
  const filteredLocations = locationsData.filter((location) => {
    if (selectedLocation !== "All" && location.stateName !== selectedLocation) {
      return false;
    }
    if (!showDelivery) {
      if (location.doorDashURL || location.uberEatsURL) {
        return false;
      }

    }
    if (!showPickup && location.pickupURL) {
      return false;
    }
    return true;
  });

  return (
    <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
      <div className="pickup-layout">
        <div className="double-column" style={{ justifyContent: 'space-around' }}>
          {filteredLocations.length === 0 && 
          <Alert style={{fontSize: '1.1rem'}} key={'alert'} variant={'danger'}>
            Sorry! No locations match this criteria.
          </Alert>}
          {filteredLocations.map((location, index) => {
            return (
              <div className="card-modal-wrapper" key={index}>
                <Card style={{ width: '22rem' }}>
                  <Card.Header as="h3">{location.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{location.locationInfo}</Card.Title>
                    <Card.Text>
                      <div>{location.address}</div>
                      <div>{location.phone && `Call: ${location.phone}`}</div>
                    </Card.Text>
                    <div className="">
                      {
                        location.pickupURL &&
                        <a className="btn btn-primary" href={location.pickupURL} target="_blank" title="Opens in a new tab">
                          Pickup
                        </a>
                      }
                      {
                        /* If there is a DoorDash URL there will also be an Uber Eats URL */
                        location.doorDashURL &&
                        <Button variant="primary" onClick={() => handleShow(index)}>
                          Delivery
                        </Button>
                      }
                      {
                        location.yextURL &&
                        <a className="btn btn-primary" href={location.yextURL}>
                          Learn more
                        </a>
                      }
                      {
                        location.menuPdfURL &&
                        <a className="btn btn-primary" href={location.menuPdfURL}>
                          Menu
                        </a>
                      }
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
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

export default AModal;