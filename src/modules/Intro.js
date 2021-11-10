import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import HireModal from "../components/HireModal";
import aish from "../assets/aishBG.png";

function Intro(props) {
    return (
        <Row>
            <Col xs={12} sm={6} className="container text-center d-flex align-items-center justify-content-center">
                <div className="intro-content m-4">
                    <h3>Hello, I'm</h3>
                    <h1 className="display-3 text-success">Aishwary</h1>
                    <h5>Software Developer</h5>
                    <p className="lead">I an tech enthusiastic person who is loves to meet new peoples. I'm passionate about web development</p>
                    {/*<CustomBtn text={"Hire Me"} size={"xl"} />*/}
                    <Button variant="success" size="lg" className="text-white" onClick={props.onChange}>Hire Me</Button>
                    <HireModal
                        show={props.modal}
                        onHide={props.onClose}
                    />
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="blob-bg">
                    <img className="pt-5" src={aish} alt="aishwary image" />
                </div>
            </Col>
        </Row>
            );
}

export default Intro;