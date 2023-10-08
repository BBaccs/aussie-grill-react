// @TODO fix modal bug, so that only one modal pops up at a given time!
// @TODO fix modal casing, "location.PickupURL should be location.pickupURL"
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/locationsData.js";
import { Link } from 'react-router-dom';
function LocationCardModal() {
  const [show, setShow] = useState(false);
  const [deliveryUrl, setDeliveryUrl] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setDeliveryUrl(locationsData[index].DoorDashURL);
  }

  return (
    <>
      {locationsData.map((location, index) => {
        return (
          <div className="card-modal-wrapper" key={index}>
            <Card style={{ width: '22rem' }}>
              <Card.Header as="h5">{location.Name}</Card.Header>
              <Card.Body>
                <Card.Title>{location.LocationInfo}</Card.Title>
                <Card.Text>
                  {location.Address}
                  {location.Phone && `Call: ${location.Phone}`}
                </Card.Text>
                <div className="">
                  {
                    location.PickupURL &&
                    <a className="btn btn-primary" href={location.PickupURL} title="Opens in a new tab">
                      Pickup
                    </a>
                  }
                  {
                    location.DoorDashURL &&
                    <Button variant="primary" onClick={() => handleShow(index)}>
                      Delivery
                    </Button>
                  }
                  {
                    location.YextURL &&
                    <a className="btn btn-primary" href={location.YextURL}>
                      Learn more
                    </a>
                  }
                  {
                    location.MenuPdfURL &&
                    <a className="btn btn-primary" href={location.MenuPdfURL}>
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
              <a className="d-block" target="_blank"  rel="noreferrer" href={deliveryUrl} >
                <img className="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash, opens in a new tab"></img>
              </a>
            </div>
            <p id="or-separator" className="m-2">
              -OR-
            </p>
            <div id="uber-eats-div">
              <a className="d-block" target="_blank"  rel="noreferrer" href={deliveryUrl} >
                <img className="uber-eats-logo" src="/./../../assets/other/uberEatsLogoSmall.png" alt="Order from Uber Eats, opens in a new tab"></img>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationCardModal;