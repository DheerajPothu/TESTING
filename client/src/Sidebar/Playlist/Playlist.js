
import Input from "../../components/Input";
import "./Playlist.css";

function Playlist({ handlePlaylistChange }) {
    return (
        <div>
            <h3 className="sidebar-title playlist-title">Playlist</h3>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handlePlaylistChange} type="radio" value="Music" name="test1" />

                </label>
                <Input
                    handleChange={handlePlaylistChange}
                    value="birthday"
                    title="Birthday"
                    name="test1"
                />
                <Input
                    handleChange={handlePlaylistChange}
                    value="dance"
                    title="Dance"
                    name="test1"
                />
                <Input
                    handleChange={handlePlaylistChange}
                    value="jazz"
                    title="Jazz"
                    name="test1"
                />


            </div>
        </div>
    );
}

export default Playlist;