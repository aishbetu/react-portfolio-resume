import React from 'react';
import ContentLoader from "react-content-loader";

function AboutContent(props) {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={600}
            viewBox="0 0 500 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="30" rx="5" ry="5" width="50" height="10" />
            <rect x="0" y="50" rx="5" ry="5" width="300" height="45" />
            <rect x="0" y="120" rx="5" ry="5" width="370" height="14" />
            <rect x="0" y="140" rx="5" ry="5" width="370" height="14" />
            <rect x="0" y="160" rx="5" ry="5" width="370" height="14" />
            <rect x="0" y="180" rx="5" ry="5" width="370" height="14" />
            <rect x="0" y="200" rx="5" ry="5" width="370" height="14" />
            <rect x="0" y="220" rx="5" ry="5" width="370" height="14" />
        </ContentLoader>
    );
}

export default AboutContent;