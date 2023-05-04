// @TODO fix modal casing, "location.PickupURL should be location.pickupURL"
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/locationsData.js";

function AModal() {
  const [show, setShow] = useState(false);
  const [thisDoorDashUrl, setthisDoorDashUrl] = useState("");
  const [thisUberEatsUrl, setthisUberEatsUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setthisDoorDashUrl(locationsData[index].doorDashURL);
    setthisUberEatsUrl(locationsData[index].uberEatsURL);
  }

  return (
    <>
      {locationsData.map((location, index) => {
        return (
          <div className="card-modal-wrapper" key={index}>
            <Card style={{ width: '22rem' }}>
              <Card.Header as="h5">{location.name}</Card.Header>
              <Card.Body>
                <Card.Title>{location.locationInfo}</Card.Title>
                <Card.Text>
                  {location.address}
                  {location.phone && `Call: ${location.phone}`}
                </Card.Text>
                <div className="">
                  {
                    location.pickupURL &&
                    <a className="btn btn-primary" href={location.pickupURL} title="Opens in a new tab">
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
                    location.YextURL &&
                    <a className="btn btn-primary" href={location.yextURL}>
                      Learn more
                    </a>
                  }
                  {
                    location.MenuPdfURL &&
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className="bull-wrapper-2">
          <img
            class="mx-auto"
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
                <img class="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash, opens in a new tab"></img>
              </a>
            </div>
            <p id="or-separator" class="m-2">
              -OR-
            </p>
            <div id="uber-eats-div">
              <a className="d-block" target="_blank" href={thisUberEatsUrl} >
                <img class="uber-eats-logo" src="/./../../assets/other/uberEatsLogoSmall.png" alt="Order from Uber Eats, opens in a new tab"></img>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AModal;