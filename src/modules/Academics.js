import React from 'react';
import {Col, Row} from "react-bootstrap";
import TimelineRight from "../components/TimelineRight";
import TimelineLeft from "../components/TimelineLeft";

function Academics(props) {
    return (
        <Row>
            <Col xs={12}>
                <h4 className="text-success text-center">Academics</h4>
            </Col>

            <Col>
                {/*{!--The Timeline --}*/}
                <ul class="timeline">

                    {/*{!--Item 1 --}*/}
                    <TimelineRight
                        title={"MSc Information Technology"}
                        duration={"2018 - 2020"}
                        OrgName={"CGPA: 8.3"}
                        description={"Sharda University, Gr. Noida"}
                    />

                    {/*{ <!-- Item 2 -->}*/}
                    <TimelineLeft
                        title={"BSc Mathematics"}
                        duration={"2013 - 2016"}
                        OrgName={"CGPA: 6.8"}
                        description={"Jiwaji University, Gwalior"}
                    />

                    {/*{!--Item 3 --}*/}
                    <TimelineRight
                        title={"Senior Secondary (12th)"}
                        duration={"2012 - 2013"}
                        OrgName={"CGPA: 8.4"}
                        description={"New Millennium Sr Sec School, M P State Board"}
                    />
                </ul>
            </Col>
        </Row>
    );
}

export default Academics;