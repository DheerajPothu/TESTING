// working code till sprint 1
/* import { useState } from "react";
import Input from "../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
    // Initial categories
    const [categories, setCategories] = useState([
        { value: "montreal", title: "Montreal" },
        { value: "ontario", title: "Ontario" },
        { value: "ottawa", title: "Ottawa" },
        { value: "banff", title: "Banff" },
    ]);

    // Function to handle adding a new category
    const addCategory = () => {
        const newCategoryTitle = prompt("Enter a new category:");
        if (newCategoryTitle) {
            const newCategoryValue = newCategoryTitle.toLowerCase().replace(/\s+/g, "");
            setCategories([...categories, { value: newCategoryValue, title: newCategoryTitle }]);
        }
    };

    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                {categories.map((category, index) => (
                    <Input
                        key={index}
                        handleChange={handleChange}
                        value={category.value}
                        title={category.title}
                        name="test"
                    />
                ))}
            </div>
            <button onClick={addCategory} className="add-category-button">
                Add Category
            </button>
        </div>
    );
}

export default Category; */

// testing code
import { useState } from "react";
import Input from "../../components/Input";
import "./Category.css";

function Category({ handleChange }) {
    // Initial categories
    const [categories, setCategories] = useState([
        { value: "montreal", title: "Montreal" },
        { value: "ontario", title: "Ontario" },
        { value: "ottawa", title: "Ottawa" },
        { value: "banff", title: "Banff" },
    ]);

    // Function to handle adding a new category
    /* const addCategory = () => {
        const newCategoryTitle = prompt("Enter a new category:");
        if (newCategoryTitle) {
            const newCategoryValue = newCategoryTitle.toLowerCase().replace(/\s+/g, "");
            setCategories([...categories, { value: newCategoryValue, title: newCategoryTitle }]);
        }
    }; */

    /* return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                {categories.map((category, index) => (
                    <Input
                        key={index}
                        handleChange={handleChange}
                        value={category.value}
                        title={category.title}
                        name="test"
                    />
                ))}
            </div>
            <button onClick={addCategory} className="add-category-button">
                Add Category
            </button>
        </div>
    ); */
}

export default Category;