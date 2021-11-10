import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import instrashare from "../assets/instrashare.PNG";
import crm from "../assets/crm.png";
import covidStats from "../assets/covidstats.png";
import underDev from "../assets/underdevelopment.jpg";

function Projects(props) {
    return (
        <Row>
            <Col xs={12}>
                <h4 className="text-success text-center">Projects</h4>
            </Col>

            <Col xs={12} sm={3} className="container d-flex align-items-center justify-content-center">
                <ProjectCard
                    image={instrashare}
                    projectLink={"https://github.com/aishbetu/IntraShare-project"}
                    title={"IntraShare"}
                    description={"Micro social platform. A full-stack web app where users can share their interview reviews."}
                    tool1={"Python"}
                    tool2={"Django"}
                />
            </Col>

            <Col xs={12} sm={3} className="container d-flex align-items-center justify-content-center">
                <ProjectCard
                    image={crm}
                    projectLink={"https://github.com/aishbetu/CRM-tool-react"}
                    title={"CRM Dashboard"}
                    description={"Complete frontend CRM Tool with AI integrated. Can be used for any POS related Software."}
                    tool1={"JavaScript"}
                    tool2={"ReactJS"}
                    tool3={"MaterialUI"}
                />
            </Col>

            <Col xs={12} sm={3} className="container d-flex align-items-center justify-content-center">
                <ProjectCard
                    image={covidStats}
                    projectLink={"https://github.com/aishbetu/react-Covid-19-stats"}
                    title={"Covid Statometer"}
                    description={"Dashboard that shows live covid stats(infected, recovered and deaths) using chart."}
                    tool1={"JavaScript"}
                    tool2={"ReactJS"}
                    tool3={"ChartJS"}
                />
            </Col>

            <Col xs={12} sm={3} className="container d-flex align-items-center justify-content-center">
                <ProjectCard
                    image={underDev}
                    projectLink={"https://github.com/aishbetu"}
                    title={"WhatSave"}
                    description={"A web app to chat on any whatsapp number without saving them on phone."}
                    tool1={"JavaScript"}
                    tool2={"ReactJS"}
                    tool3={"ChartJS"}
                />
            </Col>
        </Row>
    );
}

export default Projects;