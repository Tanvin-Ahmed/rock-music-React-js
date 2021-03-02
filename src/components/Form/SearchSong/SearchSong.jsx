import React, { useEffect, useState } from "react";
import FindSongs from "../FindSongs/FindSongs";

const SearchSong = (props) => {
  const songName = props.songName;
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setSongs(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {songs.map((song) => (
        <FindSongs key={song.id} song={song}></FindSongs>
      ))}
    </div>
  );
};

export default SearchSong;
