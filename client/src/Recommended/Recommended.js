import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleCompanyClick }) => {
    return (
        <>
            <div className="">
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    <Button onClickHandler={handleCompanyClick} value="" title="All Items" />
                    <Button onClickHandler={handleCompanyClick} value="Photos" title="Photos" />
                    <Button onClickHandler={handleCompanyClick} value="Music" title="Music" />
                </div>
            </div>
        </>
    );
};

export default Recommended;