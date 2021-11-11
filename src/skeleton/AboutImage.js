import React from 'react';
import ContentLoader from "react-content-loader";

function AboutImage(props) {
    return (
        <ContentLoader
            speed={2}
            width={350}
            height={550}
            viewBox="0 0 350 550"
            backgroundColor="#ecebeb"
            foregroundColor="#f5f0f0"
            {...props}
        >
            <rect x="3" y="60" rx="0" ry="0" width="350" height="800" />
        </ContentLoader>
    );
}

export default AboutImage;