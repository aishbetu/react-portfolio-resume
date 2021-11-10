import React from 'react';
import {Col, Row} from "react-bootstrap";
import Skill from "../components/Skill";

function Skills(props) {
    return (
        <Row>
            <Col xs={12}>
                <h4 className="text-success text-center">Skills</h4>
            </Col>

            {/*Java*/}
            <Skill skill={"Java OOPs"} skillLevel={75} />

            {/*Python*/}
            <Skill skill={"Python OOPs"} skillLevel={85} />

            {/*JS*/}
            <Skill skill={"JavaScript/ES6"} skillLevel={90} />

            {/*HTML*/}
            <Skill skill={"HTML"} skillLevel={90} />

            {/*CSS*/}
            <Skill skill={"CSS"} skillLevel={90} />

            {/*ReactJS*/}
            <Skill skill={"ReactJS"} skillLevel={80} />

            {/*Node*/}
            <Skill skill={"NodeJS"} skillLevel={50} />

            {/*Mongo*/}
            <Skill skill={"MongoDB"} skillLevel={50} />


            {/*SQL*/}
            <Skill skill={"SQL"} skillLevel={75} />

            {/*Djnago*/}
            <Skill skill={"Djnago"} skillLevel={65} />

            {/*REST*/}
            <Skill skill={"Rest API"} skillLevel={50} />

            {/*SFDC*/}
            <Skill skill={"SalesForce Development"} skillLevel={80} />

            {/*PS*/}
            <Skill skill={"Adobe PS"} skillLevel={65} />

            {/*XD*/}
            <Skill skill={"Adobe XD"} skillLevel={80} />
        </Row>
    );
}

export default Skills;