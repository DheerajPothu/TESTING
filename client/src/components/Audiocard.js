/* import React from 'react';

const AudioCard = ({ img, audioSrc, title }) => {
    return (
        <>
            <section className="audio-card">
                <img src={img} alt={title} className="audio-img" />
                <div className="audio-details">
                    <h3 className="audio-title">{title}</h3>
                    <audio controls className="audio-player">
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </section>
        </>
    );
};
export default AudioCard; */



//working but edit and delete is not functioning properly

/*import React, { useState } from 'react';

const AudioCard = ({ img, audioSrc, title, company, playlist, id, category, onUpdate }) => {
const [editingTag, setEditingTag] = useState(null);
const [newTag, setNewTag] = useState('');
const [currentTags, setCurrentTags] = useState(category ? category.split(',') : []);

  // Handle editing a tag
const handleTagChange = (index, value) => {
    const updatedTags = [...currentTags];
    updatedTags[index] = value;
    setCurrentTags(updatedTags);
};

  // Save the edited tag
const saveTag = () => {
    const updatedCategory = currentTags.join(',');
    onUpdate({ id, category: updatedCategory });
    setEditingTag(null);
};

  // Add a new tag
const addTag = () => {
    if (newTag) {
    setCurrentTags([...currentTags, newTag]);
    setNewTag('');
    }
};

  // Delete a tag
const deleteTag = (index) => {
    const updatedTags = currentTags.filter((_, i) => i !== index);
    setCurrentTags(updatedTags);
    onUpdate({ id, category: updatedTags.join(',') });
};

return (
    <section className="audio-card">
    <img src={img} alt={title} className="audio-img" />
    <div className="audio-details">
        <h3 className="audio-title">{title}</h3>
        <audio controls className="audio-player">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>

        {/* Tags Section */
    /* <div className="tags-section">
        {currentTags.map((tag, index) => (
            <div key={index} className="tag">
            {editingTag === index ? (
                <input
                type="text"
                value={currentTags[index]}
                onChange={(e) => handleTagChange(index, e.target.value)}
                onBlur={saveTag}
                autoFocus
                />
            ) : (
                <>
                <span onClick={() => setEditingTag(index)}>{tag}</span>
                <button onClick={() => deleteTag(index)}>Delete</button>
                </>
            )}
            </div>
        ))}

          {/* Add New Tag */
        /*<div className="new-tag">
            <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add a tag"
            />
            <button onClick={addTag}>Add</button>
        </div>
        </div>
    </div>
    </section>
);
};

export default AudioCard;*/


//2. test code
/*import React, { useState } from 'react';

const AudioCard = ({ img, audioSrc, title, tags, onUpdate, id }) => {
    const [editableTags, setEditableTags] = useState(tags || []);
    const [newTag, setNewTag] = useState("");

    const handleTagChange = (index, value) => {
        const updatedTags = [...editableTags];
        updatedTags[index] = value;
        setEditableTags(updatedTags);
    };

    const addTag = () => {
        if (newTag.trim() !== "") {
            setEditableTags(prevTags => [...prevTags, newTag.trim()]);
            setNewTag("");
        }
    };

    const deleteTag = (index) => {
        const updatedTags = editableTags.filter((_, i) => i !== index);
        setEditableTags(updatedTags);
    };

    const handleSave = () => {
        onUpdate({ id, tags: editableTags });
    };

    return (
        <section className="audio-card">
            <img src={img} alt={title} className="audio-img" />
            <div className="audio-details">
                <h3 className="audio-title">{title}</h3>
                <audio controls className="audio-player">
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className="tags-container">
                    {editableTags.map((tag, index) => (
                        <div key={index} className="tag">
                            <input
                                type="text"
                                value={tag}
                                onChange={(e) => handleTagChange(index, e.target.value)}
                                className="tag-input"
                            />
                            <span className="delete-tag" onClick={() => deleteTag(index)}>X</span>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        className="new-tag-input"
                    />
                    <button onClick={addTag} className="add-tag-button">Add Tag</button>
                </div>
                </div>
        </section>
    );
};

export default AudioCard; */

// code till sprint 1
/* import React, { useState } from 'react';

const AudioCard = ({ img, audioSrc, title, tags, onUpdate, id }) => {
    const [editableTags, setEditableTags] = useState(tags || []); // State to manage editable tags
    const [newTag, setNewTag] = useState(""); // State to handle new tag input

    // Handle changes to individual tags in the list
    const handleTagChange = (index, value) => {
        const updatedTags = [...editableTags];
        updatedTags[index] = value; // Update the specific tag
        setEditableTags(updatedTags); // Set the updated tags state
    };

    // Function to add a new tag to the list
    const addTag = () => {
        if (newTag.trim() !== "") {
            setEditableTags(prevTags => [...prevTags, newTag.trim()]); // Add the new tag
            setNewTag(""); // Clear the input field
        }
    };

    // Function to delete a specific tag from the list
    const deleteTag = (index) => {
        const updatedTags = editableTags.filter((_, i) => i !== index); // Remove tag by index
        setEditableTags(updatedTags); // Update the tags state
    };

    // Function to save the updated tags (called when necessary)
    const handleSave = () => {
        onUpdate({ id, tags: editableTags }); // Notify parent component about the updated tags
    };

    return (
        <section className="audio-card">
            <img src={img} alt={title} className="audio-img" /> {/* Image display */ /*}--------------------
            <div className="audio-details">
                <h3 className="audio-title">{title}</h3> {/* Display the title */   /*}----------------
                <audio controls className="audio-player">
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className="tags-container">
                    {editableTags.map((tag, index) => (
                        <div key={index} className="tag" style={{ display: 'inline-flex', alignItems: 'center', margin: '5px' }}>
                            <input
                                type="text"
                                value={tag}
                                onChange={(e) => handleTagChange(index, e.target.value)} // Update tag text on change
                                className="tag-input"
                                style={{ width: `${tag.length + 1}ch`, marginRight: '5px' }} // Adjust width dynamically based on tag length
                            />
                            {/* Delete button changed to red "x" */ /*}-----------------
                            <span 
                                className="delete-tag" 
                                onClick={() => deleteTag(index)} 
                                style={{ color: 'red', cursor: 'pointer' }} // Red "x" with cursor pointer
                            >
                                x
                            </span>
                        </div>
                    ))}
                    {/* Input to add a new tag */  /*}-----------------
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)} // Update the input field for new tag
                        placeholder="Add new tag" // Updated from "Add a tag" to "Add new tag"
                        className="new-tag-input"
                        style={{ marginTop: '10px', marginRight: '5px' }} // Adjust styling for new tag input
                    />
                    <button onClick={addTag} className="add-tag-button">Add</button> {/* Button text updated from "Add Tag" to "Add" */ /*}------
                </div>
            </div>
        </section>
    );  
}; 
export default AudioCard; */


//testing code

import React, { useState } from 'react';

const AudioCard = ({ img, audioSrc, title, tags, onUpdate, id }) => {
    const [editableTags, setEditableTags] = useState(tags || []); // State to manage editable tags
    const [newTag, setNewTag] = useState(""); // State to handle new tag input

    // Handle changes to individual tags in the list
    const handleTagChange = (index, value) => {
        const updatedTags = [...editableTags];
        updatedTags[index] = value; // Update the specific tag
        setEditableTags(updatedTags); // Set the updated tags state
    };

    // Function to add a new tag to the list
    const addTag = () => {
        if (newTag.trim() !== "") {
            setEditableTags(prevTags => [...prevTags, newTag.trim()]); // Add the new tag
            setNewTag(""); // Clear the input field
        }
    };

    // Function to delete a specific tag from the list
    const deleteTag = (index) => {
        const updatedTags = editableTags.filter((_, i) => i !== index); // Remove tag by index
        setEditableTags(updatedTags); // Update the tags state
    };

    // Function to save the updated tags (called when necessary)
    const handleSave = () => {
        onUpdate({ id, tags: editableTags }); // Notify parent component about the updated tags
    };

    return (
        <section className="audio-card">
            <img src={img} alt={title} className="audio-img" /> {/* Image display */ }
            <div className="audio-details">
                <h3 className="audio-title">{title}</h3> {/* Display the title */   }
                <audio controls className="audio-player">
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className="tags-container">
                    {editableTags.map((tag, index) => (
                        <div key={index} className="tag" style={{ display: 'inline-flex', alignItems: 'center', margin: '5px' }}>
                            <input
                                type="text"
                                value={tag}
                                onChange={(e) => handleTagChange(index, e.target.value)} // Update tag text on change
                                className="tag-input"
                                style={{ width: `${tag.length + 1}ch`, marginRight: '5px' }} // Adjust width dynamically based on tag length
                            />
                            {/* Delete button changed to red "x" */ }
                            <span 
                                className="delete-tag" 
                                onClick={() => deleteTag(index)} 
                                style={{ color: 'red', cursor: 'pointer' }} // Red "x" with cursor pointer
                            >
                                x
                            </span>
                        </div>
                    ))}
                    {/* Input to add a new tag */  }
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)} // Update the input field for new tag
                        placeholder="Add new tag" // Updated from "Add a tag" to "Add new tag"
                        className="new-tag-input"
                        style={{ marginTop: '10px', marginRight: '5px' }} // Adjust styling for new tag input
                    />
                    <button onClick={addTag} className="add-tag-button">Add</button> {/* Button text updated from "Add Tag" to "Add" */ }
                </div>
            </div>
        </section>
    );  
}; 
export default AudioCard;