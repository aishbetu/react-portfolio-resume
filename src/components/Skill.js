import React from 'react';
import {Col, ProgressBar} from "react-bootstrap";

function Skill(props) {
    return (
        <>
            <Col xs={12} sm={6} className="container d-flex align-items-end justify-content-end">
                <div className="skill-box p-2"><h3 className="lead">{props.skill}</h3></div>
            </Col>

            <Col xs={12} sm={6} className="container d-flex align-items-start justify-content-start">
                <div className="skill-box p-2">
                    <ProgressBar animated now={props.skillLevel} variant="success" />
                </div>
            </Col>
        </>
    );
}

export default Skill;