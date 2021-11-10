import React from 'react';

function TimelineRight(props) {
    return (
        <li>
            <div className="direction-r">
                <div className="flag-wrapper">
                    <span className="flag">{props.title}</span>
                    <span className="time-wrapper"><span className="time">{props.duration}</span></span>
                </div>
                <div className="desc">{props.OrgName}</div>
                <div className="desc">{props.description}</div>
            </div>
        </li>
    );
}

export default TimelineRight;