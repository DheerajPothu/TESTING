import "./Day.css";
import Input from "../../components/Input";

function Day({ handleDayChange }) {
    return (
        <div>
            <h2 className="sidebar-title">Day</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleDayChange} type="radio" value="day" name="test2" />

                </label>
                <Input
                    handleChange={handleDayChange}
                    value="Monday"
                    title="Monday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Tuesday"
                    title="Tuesday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Wednesday"
                    title="Wednesday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Thursday"
                    title="Thursday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Friday"
                    title="Friday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Saturday"
                    title="Saturday"
                    name="test2"
                />
                <Input
                    handleChange={handleDayChange}
                    value="Sunday"
                    title="Sunday"
                    name="test2"
                />
            </div>
        </div>
    );
}

export default Day;