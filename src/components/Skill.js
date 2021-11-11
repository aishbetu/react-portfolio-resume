import React, {useEffect, useState} from 'react';
import {Col, ProgressBar} from "react-bootstrap";
import SkillContent from "../skeleton/SkillContent";

function Skill(props) {
    const [content, setContent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(true)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Col xs={12} sm={6} className="container d-flex align-items-end justify-content-end">
                {content ? <div className="skill-box p-2"><h3 className="lead">{props.skill}</h3></div> : <SkillContent/>}
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