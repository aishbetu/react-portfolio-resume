import React from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./HireModal.css"


function HireModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Choose an action
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row className="p-5">
                        <Col className="container text-center d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon="envelope-open" className="icon text-success m-2"/>
                            <a href="mailto: aishbetu@gmail.com" className="text-decoration-none">aishbetu@gmail.com</a>
                        </Col>
                        <Col className="container text-center d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon="phone" className="icon text-success m-2"/>
                            <a href="tel: 7000367324" className="text-decoration-none">+91 7000367324</a>
                        </Col>
                    </Row>
                </Container>

            </Modal.Body>
        </Modal>
    );
}

export default HireModal;