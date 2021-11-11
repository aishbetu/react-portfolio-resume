import React from 'react';
import ContentLoader from "react-content-loader";

function IntroContentLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={600}
            viewBox="-80 -90 500 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="30" rx="5" ry="5" width="150" height="14" />
            <rect x="0" y="50" rx="5" ry="5" width="224" height="24" />
            <rect x="0" y="90" rx="5" ry="5" width="150" height="14" />
            <rect x="0" y="120" rx="5" ry="5" width="224" height="10" />
            <rect x="0" y="135" rx="5" ry="5" width="224" height="10" />
            <rect x="0" y="150" rx="5" ry="5" width="224" height="10" />
            <rect x="0" y="170" rx="5" ry="5" width="90" height="40" />
        </ContentLoader>
    );
}

export default IntroContentLoader;