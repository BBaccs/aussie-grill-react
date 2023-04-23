import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function AModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '22rem' }}>
        <Card.Header as="h5">WESLEY CHAPEL/LUTZ</Card.Header>
        <Card.Body>
          <Card.Title>Across from the Tampa Premium Outlets</Card.Title>
          <Card.Text>
          25340 Sierra Center Blvd, Lutz, FL 33559
          </Card.Text>
          <div className="">
            <Button variant="primary" onClick={handleShow}>
              Pickup
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Delivery
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Learn more
            </Button>
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
              <a className="d-block" target="_blank" href="#">
                <img class="door-dash-logo" src="/./../../assets/other/doorDashLogoSmall.jpg" alt="Order from Doordash, opens in a new tab"></img>
              </a>
            </div>
            <p id="or-separator" class="m-2">
              -OR-
            </p>
            <div id="uber-eats-div">
              <a className="d-block" target="_blank" href="#">
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