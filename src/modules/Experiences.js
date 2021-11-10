import React from 'react';
import {Col, Row} from "react-bootstrap";
import TimelineRight from "../components/TimelineRight";
import TimelineLeft from "../components/TimelineLeft";

function Experiences(props) {
    return (
        <Row>
            <Col xs={12}>
                <h4 className="text-success text-center">Experiences</h4>
            </Col>

            <Col>
                {/*{!--The Timeline --}*/}
                <ul class="timeline">
                    {/*{!--Item 1 --}*/}
                    <TimelineRight
                        title={"Software Developer"}
                        duration={"May 2021 - Oct 2021"}
                        OrgName={"Dazeworks"}
                        description={"Have done projects on automation workflows, triggers, lightning components. Dealt with a " +
                        "client project where entire org need optimization"}
                    />

                    {/*{ <!-- Item 2 -->}*/}
                    <TimelineLeft
                        title={"Front-End Developer"}
                        duration={"Apr 2021 - May 2021"}
                        OrgName={"HostBooks ltd"}
                        description={"Built an complete front end MVP solutions with reactjs from scratch" +
                        "Been exposed to the modern development tools & framework. "}
                    />
                </ul>
            </Col>
        </Row>
    );
}

export default Experiences;