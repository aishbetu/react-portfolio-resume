import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import TimelineRight from "../components/TimelineRight";
import TimelineLeft from "../components/TimelineLeft";
import CardSkeleton from "../skeleton/CardSkeleton";
import TimelineSkeleton from "../skeleton/TimelineSkeleton";

function Experiences(props) {
    const [content, setContent] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(true)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Row>
            <Col xs={12}>
                <h4 className="text-success text-center">Experiences</h4>
            </Col>

            <Col>
                {/*{!--The Timeline --}*/}
                <ul class="timeline">
                    {/*{!--Item 1 --}*/}
                    {content ?
                        <TimelineRight
                            title={"Software Developer"}
                            duration={"May 2021 - Oct 2021"}
                            OrgName={"Dazeworks"}
                            description={"Have done projects on automation workflows, triggers, lightning components. Dealt with a " +
                            "client project where entire org need optimization"}
                        />
                        :
                        <TimelineSkeleton xPosition={"350"}/>
                    }


                    {/*{ <!-- Item 2 -->}*/}
                    {content ?
                        <TimelineLeft
                            title={"Front-End Developer"}
                            duration={"Apr 2021 - May 2021"}
                            OrgName={"HostBooks ltd"}
                            description={"Built an complete front end MVP solutions with reactjs from scratch" +
                            "Been exposed to the modern development tools & framework. "}
                        />
                    :
                        <TimelineSkeleton xPosition={"-40"}/>
                    }

                </ul>
            </Col>
        </Row>
    );
}

export default Experiences;