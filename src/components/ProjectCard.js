import React, {useEffect, useState} from 'react';
import {Badge, Button, Card} from "react-bootstrap";
import "./Card.css";
import CardSkeleton from "../skeleton/CardSkeleton";

function ProjectCard(props) {
    const [content, setContent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(true)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {content ?
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
                :
                <CardSkeleton/>
            }

            </>
    );
}

export default ProjectCard;