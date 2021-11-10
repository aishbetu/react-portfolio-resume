import React from 'react';
import {Badge, Button, Card} from "react-bootstrap";
import "./Card.css";

function ProjectCard(props) {
    return (
        <Card style={{ width: '25rem' }} className="card-effect">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title><a href={props.projectLink} className="text-decoration-none text-success">{props.title}</a></Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Badge bg="secondary" className="m-1">{props.tool1}</Badge>
                <Badge bg="secondary" className="m-1">{props.tool2}</Badge>
                <Badge bg="secondary" className="m-1">{props.tool3}</Badge>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;