import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import TimelineRight from "../components/TimelineRight";
import TimelineLeft from "../components/TimelineLeft";
import TimelineSkeleton from "../skeleton/TimelineSkeleton";

function Academics(props) {
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
                <h4 className="text-success text-center">Academics</h4>
            </Col>

            <Col>
                {/*{!--The Timeline --}*/}
                <ul class="timeline">

                    {/*{!--Item 1 --}*/}
                    {content ?
                        <TimelineRight
                            title={"MSc Information Technology"}
                            duration={"2018 - 2020"}
                            OrgName={"CGPA: 8.3"}
                            description={"Sharda University, Gr. Noida"}
                        />
                        :
                        <TimelineSkeleton xPosition={"350"}/>
                    }


                    {/*{ <!-- Item 2 -->}*/}
                    {content ?
                        <TimelineLeft
                            title={"BSc Mathematics"}
                            duration={"2013 - 2016"}
                            OrgName={"CGPA: 6.8"}
                            description={"Jiwaji University, Gwalior"}
                        />
                        :
                        <TimelineSkeleton xPosition={"-40"}/>
                    }


                    {/*{!--Item 3 --}*/}
                    {content ?
                        <TimelineRight
                            title={"Senior Secondary (12th)"}
                            duration={"2012 - 2013"}
                            OrgName={"CGPA: 8.4"}
                            description={"New Millennium Sr Sec School, M P State Board"}
                        />
                        :
                        <TimelineSkeleton xPosition={"350"}/>
                    }

                </ul>
            </Col>
        </Row>
    );
}

export default Academics;