import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
    return (
        <div className="songRow">
            <img src={track.album.images[0].url} alt="" className="songRow_album"/>
            <div className="songRoww_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
      );
}

export default SongRow;