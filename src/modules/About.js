import React from 'react';
import {Col, Row} from "react-bootstrap";
import aish2 from "../assets/aish.jpeg";

function About(props) {
    return (
        <Row>
            <Col xs={12} sm={6} className="container d-flex align-items-center justify-content-center">
                <div className="image-border">
                    <img className="pt-5" src={aish2} alt="aishwary image" height="500" />
                </div>
            </Col>

            <Col xs={12} sm={6} className="container d-flex align-items-center justify-content-center">
                <div className="about-content m-4">
                    <h5 className="text-success">About Me</h5>
                    <h1 className="display-5">Why You Hire Me?</h1>
                    <p className="lead">I am a tech enthusiastic person who has a great interest in web development.
                        I have great problem solving skills. During my college and also in office,
                        I have been recognized as a core team player. My vision is to associate with a vibrant
                        organization where I can fully utilize my knowledge, skills and can learn new things</p>
                </div>
            </Col>
        </Row>
    );
}

export default About;