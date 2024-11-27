/*const Button = ({ onClickHandler, value, title }) => {
    return (
        <button onClick={onClickHandler} value={value} className="btns">
            {title}
        </button>
    );
};

export default Button;*/

//testing

import React, { useState } from 'react';

const Button = ({ onClickHandler, value, title }) => {
    // State to track if the button is selected
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        // Toggle the selected state
        setIsSelected(prevState => !prevState);
        // Call the external onClickHandler if provided
        onClickHandler(value, !isSelected); // Pass the updated state
    };

    return (
        <button 
            onClick={handleClick} 
            value={value} 
            className={`btns ${isSelected ? 'selected' : ''}`} // Apply a class if selected
        >
            {title}
        </button>
    );
};

export default Button;
