import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/otherData/locationsData.js";
import Alert from "react-bootstrap/Alert";

function LocationCardModal({ selectedLocation, showDelivery, showPickup }) {
  const [show, setShow] = useState(false);
  const [thisDoorDashUrl, setthisDoorDashUrl] = useState("");
  const [thisUberEatsUrl, setthisUberEatsUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setthisDoorDashUrl(locationsData[index].doorDashURL);
    setthisUberEatsUrl(locationsData[index].uberEatsURL);
  }

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

  let previousStateName = null; 

  return (
    <div id="location-result" className="mt-md-4 mx-auto pickup-layout">
      <div className="pickup-layout">
        <div className="double-column" style={{ justifyContent: 'space-around' }}>
          {filteredLocations.length === 0 &&
            <Alert style={{ fontSize: '1.1rem' }} key={'alert'} variant={'danger'}>
              Sorry! No locations match this criteria.
            </Alert>}
          {filteredLocations.map((location, index) => {
            let currentStateName = location.stateName;
            let stateTitle = currentStateName !== previousStateName && <h2 key={`state-heading ${currentStateName}`} className="landing-heading my-3 w-100">{location.stateName}</h2>;
            previousStateName = currentStateName;
            return (
              <>
                {stateTitle}
                <div className="card-modal-wrapper" key={index}>
                  <Card style={{ width: '22rem' }}>
                    <Card.Header as="h3">{location.name}</Card.Header>
                    <Card.Body>
                      <Card.Text as={'p'}>{location.locationInfo}</Card.Text>
                      <Card.Text as={'p'}>{location.address}</Card.Text>
                      <Card.Text>{location.phone && `Call: ${location.phone}`}</Card.Text>
                      <div>
                        {
                          location.pickupURL &&
                          <a className="btn btn-primary" href={location.pickupURL} target="_blank" rel="noopener noreferrer" title="Opens in a new tab">
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
                          <a className="btn btn-primary" href={location.yextURL} target="_blank" rel="noopener noreferrer" title="Opens in a new tab">
                            Learn more
                          </a>
                        }
                        {
                          location.menuPdfURL &&
                          <a className="btn btn-primary" href={location.menuPdfURL} target="_self">
                            Menu
                          </a>
                        }
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
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
          <img loading="lazy"
            className="mx-auto"
            src="./assets/agGraphicElements/animals/bullFullMedium.png"
            alt=""
          />
        </div>
        <Modal.Header closeButton>
          <Modal.Title as="h2" className="h4 delivery">Choose your delivery method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-footer justify-content-center p-0 doordash-uber-wrapper">
            <div id="doordash-div">
              <a className="d-block" target="_blank" rel="noopener noreferrer" href={thisDoorDashUrl} >
                <img loading="lazy" className="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash" title="Opens in a new tab" />
              </a>
            </div>
            <p id="or-separator" className="m-2">
              -OR-
            </p>
            <div id="uber-eats-div">
              <a className="d-block" target="_blank" rel="noopener noreferrer" href={thisUberEatsUrl} >
                <img loading="lazy" className="uber-eats-logo" src="/./../../assets/other/uberEatsLogoSmall.png" alt="Order from Uber Eats" title="Opens in a new tab" />
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LocationCardModal;