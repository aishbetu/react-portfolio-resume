import React from 'react';
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <>
            <Row>
                <Col xs={12} sm={4} className="container text-center d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon="map-marker-alt" color="white" className="icons" />
                    <div className="text-start p-3 cta-text">
                        <h5>Address</h5>
                        <span>New Delhi, IN</span>
                    </div>
                </Col>
                <Col xs={12} sm={4} className="container text-center d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon="phone" color="white" className="icons"/>
                    <div className="text-start p-3 cta-text">
                        <h5>Phone</h5>
                        <span>+91 7000367324</span>
                    </div>
                </Col>
                <Col xs={12} sm={4} className="container text-center d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon="envelope-open" color="white" className="icons"/>
                    <div className="text-start p-3 cta-text">
                        <h5>eMail</h5>
                        <span>aishbetu@gmail.com</span>
                    </div>
                </Col>
            </Row>
            <hr className="hr"/>
            <Row>
                <Col className="container text-center d-flex align-items-center justify-content-center">
                    <div className="pt-2">
                        <FontAwesomeIcon icon={faLinkedin} color="white" className="socialIcon"/>
                        <FontAwesomeIcon icon={faFacebookSquare} color="white" className="socialIcon"/>
                        <FontAwesomeIcon icon={faTwitter} color="white" className="socialIcon"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <span className="text-center text-white m-0 copyright ">Copyright © 2021. All rights reserved by Aishwary.</span>
            </Row>
        </>
    );
}

export default Footer;