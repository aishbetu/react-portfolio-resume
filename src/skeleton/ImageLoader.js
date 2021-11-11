import React from 'react';
import ContentLoader from "react-content-loader";

function ImageLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={472}
            height={529}
            viewBox="0 0 400 460"
            backgroundColor="#ecebeb"
            foregroundColor="#f5f0f0"
            {...props}
        >
            <rect x="3" y="45" rx="100" ry="100" width="400" height="400" />
        </ContentLoader>
    );
}

export default ImageLoader;