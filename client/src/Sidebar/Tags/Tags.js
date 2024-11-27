/* import React from "react";
import "./Tags.css"; // You can reuse the styles from Day section

const Tags = ({ tags }) => {
    return (
        <div className="tags-section">
            <h2>Tags</h2> {/* Section header for Tags *///}
            //<ul>
                //{tags.map((tag, index) => (
                    //<li key={index} className="tag-item">
                    //    {tag} {/* Render each tag */}
                    //</li>
                //))}
            //</ul>
        //</div>
    //);
//};

// export default Tags; 

import "./Tags.css";

const Tags = ({ tags }) => {
return (
    <div className="tags-section">
    <h2>Tags</h2>
    <ul>
        {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
        ))}
    </ul>
    </div>
);
};

export default Tags;
