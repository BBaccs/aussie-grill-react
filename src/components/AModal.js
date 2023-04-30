// @TODO refactor the json, things like haspickup === true is not necessary because we can check if it's undefined
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { locationsData } from "../data/locationsData.js";
import { Link } from 'react-router-dom';

function AModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {locationsData.map((location, index) => {
        return (
          <div className="card-modal-wrapper" key={index}>
            <Card style={{ width: '22rem' }}>
              <Card.Header as="h5">{location.name}</Card.Header>
              <Card.Body>
                <Card.Title>{location.LocationInfo}</Card.Title>
                <Card.Text>
                  {location.Address}
                  {location.Phone &&`Call: ${location.Phone}`}
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
                  <Button variant="primary" onClick={handleShow}>
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
            {/* <!--Delivery Modal--> */}
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
                    <a className="d-block" target="_blank" href={location.DoorDashURL} >
                      <img class="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash, opens in a new tab"></img>
                    </a>
                  </div>
                  <p id="or-separator" class="m-2">
                    -OR-
                  </p>
                  <div id="uber-eats-div">
                    <a className="d-block" target="_blank" href={location.UberEatsURL} >
                      <img class="uber-eats-logo" src="/./../../assets/other/uberEatsLogoSmall.png" alt="Order from Uber Eats, opens in a new tab"></img>
                    </a>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>

        );
      })}
    </>
  );
}

export default AModal;