import React from 'react';
import ContentLoader from "react-content-loader";

function SkillContent(props) {
    return (
        <ContentLoader
            speed={2}
            width={380}
            height={70}
            viewBox="0 0 500 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="-80" y="-10" rx="5" ry="5" width="300" height="50" />
        </ContentLoader>
    );
}

export default SkillContent;