import React from 'react';
import ContentLoader from "react-content-loader";

function TimelineSkeleton(props) {
    return (
        <ContentLoader
            speed={2}
            width={800}
            height={150}
            viewBox="0 0 800 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x={props.xPosition} y="30" rx="2" ry="2" width="350" height="100" />
        </ContentLoader>
    );
}

export default TimelineSkeleton;